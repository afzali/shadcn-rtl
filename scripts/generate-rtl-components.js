import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const UI_DIR = path.join(__dirname, '../src/lib/components/ui');
const RTL_DIR = path.join(__dirname, '../src/lib/components/ui-rtl');

// Components that need special RTL handling
const SPECIAL_RTL_COMPONENTS = {
	'sheet': ['sheet-content.svelte'],
	'drawer': ['drawer-content.svelte'],
	'dropdown-menu': ['dropdown-menu-content.svelte', 'dropdown-menu-item.svelte', 'dropdown-menu-shortcut.svelte', 'dropdown-menu-label.svelte'],
	'select': ['select-content.svelte'],
	'context-menu': ['context-menu-content.svelte'],
	'menubar': ['menubar-content.svelte'],
	'breadcrumb': ['breadcrumb-separator.svelte'],
	'pagination': ['pagination-content.svelte', 'pagination-prev.svelte', 'pagination-next.svelte'],
	'sidebar': ['sidebar-content.svelte', 'sidebar-menu-sub.svelte', 'sidebar-menu-sub-button.svelte'],
	'navigation-menu': ['navigation-menu-content.svelte'],
	'calendar': ['calendar.svelte'],
	'range-calendar': ['range-calendar.svelte'],
	'switch': ['switch.svelte'],
};

// Read all component directories
async function getComponentDirs() {
	const entries = await fs.readdir(UI_DIR, { withFileTypes: true });
	return entries
		.filter(entry => entry.isDirectory())
		.map(entry => entry.name);
}

// Check if file needs RTL conversion
function needsRtlConversion(content) {
	const rtlPatterns = [
		/\b(left|right|pl-|pr-|ml-|mr-|border-l|border-r)\b/,
		/\b(rounded-l|rounded-r|text-left|text-right)\b/,
		/\b(slide-in-from-left|slide-in-from-right)\b/,
		/\b(justify-start|justify-end|items-start|items-end)\b/,
	];
	
	return rtlPatterns.some(pattern => pattern.test(content));
}

// Convert cn to cnRtl in file
function convertToCnRtl(content, fileName) {
	// Replace import
	content = content.replace(
		/import\s+{\s*cn\s*}\s+from\s+['"]\$lib\/utils\.js['"]/g,
		'import { cnRtl } from "$lib/rtl-utils.js"'
	);
	
	// Replace cn( with cnRtl(
	content = content.replace(/\bcn\(/g, 'cnRtl(');
	
	// Special handling for dropdown-menu-item: add flex-row-reverse
	if (fileName === 'dropdown-menu-item.svelte') {
		content = content.replace(
			/relative flex cursor-default/g,
			'relative flex flex-row-reverse cursor-default'
		);
	}
	
	// Special handling for breadcrumb-separator: change ChevronRight to ChevronLeft
	if (fileName === 'breadcrumb-separator.svelte') {
		content = content.replace(
			/import\s+ChevronRightIcon\s+from\s+["']@lucide\/svelte\/icons\/chevron-right["']/g,
			'import ChevronLeftIcon from "@lucide/svelte/icons/chevron-left"'
		);
		content = content.replace(
			/<ChevronRightIcon\s*\/>/g,
			'<ChevronLeftIcon />'
		);
	}
	
	// Special handling for sidebar-menu-badge: change right-1 to left-1 for RTL
	if (fileName === 'sidebar-menu-badge.svelte') {
		content = content.replace(
			/absolute right-1 flex/g,
			'absolute left-1 flex'
		);
	}
	
	// Special handling for breadcrumb-list: add flex-row-reverse for RTL
	if (fileName === 'breadcrumb-list.svelte') {
		content = content.replace(
			/"text-muted-foreground flex flex-wrap/g,
			'"text-muted-foreground flex flex-row-reverse flex-wrap'
		);
	}
	
	return content;
}

// Check if file has module-level exports
function hasModuleExports(content) {
	return /<script\s+module>/.test(content);
}

// Extract module exports from content
function extractModuleExports(content) {
	const moduleMatch = content.match(/<script\s+module>([\s\S]*?)<\/script>/);
	if (!moduleMatch) return null;
	
	const moduleContent = moduleMatch[1];
	const exports = [];
	
	// Find all export statements
	const exportRegex = /export\s+(?:const|let|var|function|class)\s+(\w+)/g;
	let match;
	while ((match = exportRegex.exec(moduleContent)) !== null) {
		exports.push(match[1]);
	}
	
	return exports.length > 0 ? exports : null;
}

// Generate RTL wrapper for simple components
function generateSimpleWrapper(componentName, fileName, sourceContent = null) {
	const importPath = `$lib/components/ui/${componentName}/${fileName}`;
	const componentVarName = fileName
		.replace('.svelte', '')
		.split('-')
		.map((word, i) => i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1))
		.join('');
	
	// Check for module exports
	let moduleScript = '';
	if (sourceContent) {
		const exports = extractModuleExports(sourceContent);
		if (exports && exports.length > 0) {
			moduleScript = `<script module>
	// Re-export from base component
	export { ${exports.join(', ')} } from '${importPath}';
</script>

`;
		}
	}
	
	return `${moduleScript}<script>
	import Base${componentVarName} from '${importPath}';
	
	let props = $props();
</script>

<Base${componentVarName} {...props} />
`;
}

// Process a single component file
async function processComponentFile(componentName, fileName, sourceDir, targetDir) {
	const sourcePath = path.join(sourceDir, fileName);
	const targetPath = path.join(targetDir, fileName);
	
	// Read source file
	const content = await fs.readFile(sourcePath, 'utf-8');
	
	// Check if this component needs special RTL handling
	const isSpecial = SPECIAL_RTL_COMPONENTS[componentName]?.includes(fileName);
	
	if (fileName.endsWith('.js')) {
		// Copy index.js as-is (it just exports)
		await fs.writeFile(targetPath, content);
		return;
	}
	
	if (!fileName.endsWith('.svelte')) {
		return;
	}
	
	// If component needs RTL conversion
	if (isSpecial || needsRtlConversion(content)) {
		const rtlContent = convertToCnRtl(content, fileName);
		await fs.writeFile(targetPath, rtlContent);
		console.log(`✓ Converted ${componentName}/${fileName} with RTL support`);
	} else {
		// Create simple wrapper (pass content to handle exports)
		const wrapper = generateSimpleWrapper(componentName, fileName, content);
		await fs.writeFile(targetPath, wrapper);
		console.log(`✓ Created wrapper for ${componentName}/${fileName}`);
	}
}

// Process a component directory
async function processComponent(componentName) {
	const sourceDir = path.join(UI_DIR, componentName);
	const targetDir = path.join(RTL_DIR, componentName);
	
	// Create target directory
	await fs.mkdir(targetDir, { recursive: true });
	
	// Read all files in component directory
	const files = await fs.readdir(sourceDir);
	
	// Process each file
	for (const file of files) {
		await processComponentFile(componentName, file, sourceDir, targetDir);
	}
}

// Main function
async function main() {
	console.log('🚀 Generating RTL components...\n');
	
	// Create RTL directory
	await fs.mkdir(RTL_DIR, { recursive: true });
	
	// Get all component directories
	const components = await getComponentDirs();
	
	console.log(`Found ${components.length} components\n`);
	
	// Process each component
	for (const component of components) {
		try {
			await processComponent(component);
		} catch (error) {
			console.error(`✗ Error processing ${component}:`, error.message);
		}
	}
	
	console.log('\n✅ RTL components generation complete!');
	console.log(`\n📁 RTL components created in: ${RTL_DIR}`);
	console.log('\n📖 Usage:');
	console.log('   import { Button } from "$lib/components/ui-rtl/button";');
	console.log('   // Instead of:');
	console.log('   // import { Button } from "$lib/components/ui/button";');
}

main().catch(console.error);
