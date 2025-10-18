import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * RTL-aware class name utility
 * Automatically converts directional classes to RTL equivalents
 */
export function cnRtl(...inputs) {
	const merged = twMerge(clsx(inputs));
	return convertToRtl(merged);
}

/**
 * Convert LTR directional classes to RTL
 */
function convertToRtl(classNames) {
	if (!classNames) return classNames;
	
	let result = classNames;
	
	// Handle translate-x with arbitrary values - must be done AFTER other mappings
	// to avoid conflicts. We'll mark them first, then convert at the end.
	
	// Mark translate-x patterns that need flipping
	result = result.replace(
		/(data-\[state=checked\]:)translate-x-(\[[^\]]+\])/g,
		'$1__RTL_FLIP__translate-x-$2'
	);
	
	// General translate-x-[...] patterns (not part of data-[state)
	result = result.replace(
		/(?<!data-\[state=(?:checked|unchecked)\]:)(?<!__RTL_FLIP__)translate-x-(\[[^\]]+\])/g,
		'__RTL_FLIP__translate-x-$1'
	);
	
	const rtlMappings = {
		// Padding
		'pl-': 'pr-',
		'pr-': 'pl-',
		'ps-': 'pe-',
		'pe-': 'ps-',
		
		// Margin
		'ml-': 'mr-',
		'mr-': 'ml-',
		'ms-': 'me-',
		'me-': 'ms-',
		
		// Border
		'border-l': 'border-r',
		'border-r': 'border-l',
		'border-s': 'border-e',
		'border-e': 'border-s',
		
		// Rounded corners
		'rounded-l': 'rounded-r',
		'rounded-r': 'rounded-l',
		'rounded-tl': 'rounded-tr',
		'rounded-tr': 'rounded-tl',
		'rounded-bl': 'rounded-br',
		'rounded-br': 'rounded-bl',
		'rounded-s': 'rounded-e',
		'rounded-e': 'rounded-s',
		
		// Position
		'left-': 'right-',
		'right-': 'left-',
		'start-': 'end-',
		'end-': 'start-',
		
		// Inset
		'inset-x-': 'inset-x-', // No change needed
		
		// Text align
		'text-left': 'text-right',
		'text-right': 'text-left',
		'text-start': 'text-end',
		'text-end': 'text-start',
		
		// Flex & Grid
		'justify-start': 'justify-end',
		'justify-end': 'justify-start',
		'items-start': 'items-end',
		'items-end': 'items-start',
		
		// Transforms (handled by regex above, not here)
		
		// Animations - slide directions
		'slide-in-from-left': 'slide-in-from-right',
		'slide-in-from-right': 'slide-in-from-left',
		'slide-out-to-left': 'slide-out-to-right',
		'slide-out-to-right': 'slide-out-to-left',
	};
	
	// Apply RTL mappings
	for (const [ltr, rtl] of Object.entries(rtlMappings)) {
		const regex = new RegExp(ltr.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
		result = result.replace(regex, rtl);
	}
	
	// Finally, convert marked translate-x to negative
	result = result.replace(/__RTL_FLIP__translate-x-/g, '-translate-x-');
	
	return result;
}

/**
 * Get RTL-aware directional value
 * Usage: dir('left', 'right') returns 'right' in RTL
 */
export function dir(ltrValue, rtlValue) {
	return rtlValue; // Always return RTL value
}

/**
 * Flip numeric value for RTL (useful for transforms)
 */
export function flipValue(value) {
	if (typeof value === 'number') {
		return -value;
	}
	if (typeof value === 'string' && value.startsWith('-')) {
		return value.substring(1);
	}
	if (typeof value === 'string') {
		return `-${value}`;
	}
	return value;
}

/**
 * RTL-aware style object
 */
export function rtlStyle(styles) {
	const rtlStyles = { ...styles };
	
	// Swap left/right properties
	if (styles.left !== undefined) {
		rtlStyles.right = styles.left;
		delete rtlStyles.left;
	}
	if (styles.right !== undefined) {
		rtlStyles.left = styles.right;
		delete rtlStyles.right;
	}
	
	// Swap padding
	if (styles.paddingLeft !== undefined) {
		rtlStyles.paddingRight = styles.paddingLeft;
		delete rtlStyles.paddingLeft;
	}
	if (styles.paddingRight !== undefined) {
		rtlStyles.paddingLeft = styles.paddingRight;
		delete rtlStyles.paddingRight;
	}
	
	// Swap margin
	if (styles.marginLeft !== undefined) {
		rtlStyles.marginRight = styles.marginLeft;
		delete rtlStyles.marginLeft;
	}
	if (styles.marginRight !== undefined) {
		rtlStyles.marginLeft = styles.marginRight;
		delete rtlStyles.marginRight;
	}
	
	return rtlStyles;
}
