<script>
	import { Tabs, TabsList, TabsTrigger, TabsContent } from "$lib/components/ui-rtl/tabs";
	import { Button } from "$lib/components/ui-rtl/button";
	import { ToggleGroup, ToggleGroupItem } from "$lib/components/ui-rtl/toggle-group";
	import { Separator } from "$lib/components/ui-rtl/separator";
	import MonitorIcon from "@lucide/svelte/icons/monitor";
	import TabletIcon from "@lucide/svelte/icons/tablet";
	import SmartphoneIcon from "@lucide/svelte/icons/smartphone";
	import FullscreenIcon from "@lucide/svelte/icons/fullscreen";
	import RotateCcwIcon from "@lucide/svelte/icons/rotate-ccw";
	import SunIcon from "@lucide/svelte/icons/sun";
	import MoonIcon from "@lucide/svelte/icons/moon";
	
	let isDark = $state(false);
	let iframeWidths = $state({});
	
	function toggleTheme() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark');
		
		// Apply theme to all iframes
		const iframes = document.querySelectorAll('iframe');
		iframes.forEach(iframe => {
			try {
				if (iframe.contentDocument) {
					iframe.contentDocument.documentElement.classList.toggle('dark');
				}
			} catch (e) {
				// Cross-origin iframe, can't access
			}
		});
	}
	
	function setIframeWidth(itemId, width) {
		iframeWidths[itemId] = width;
	}
	
	function refreshIframe(itemId) {
		const iframe = document.getElementById(`iframe-${itemId}`);
		if (iframe) {
			iframe.src = iframe.src;
		}
	}
	
	function onIframeLoad(event) {
		const iframe = event.target;
		try {
			if (iframe.contentDocument && isDark) {
				iframe.contentDocument.documentElement.classList.add('dark');
			}
		} catch (e) {
			// Cross-origin iframe
		}
	}
	
	const blocks = {
		login: [
			{ id: 'login-01', title: 'نمونه 1', desc: 'ساده و تمیز' },
			{ id: 'login-02', title: 'نمونه 2', desc: 'با تصویر کناری' },
			{ id: 'login-03', title: 'نمونه 3', desc: 'با پس‌زمینه' },
			{ id: 'login-04', title: 'نمونه 4', desc: 'تمام صفحه' },
			{ id: 'login-05', title: 'نمونه 5', desc: 'مینیمال' }
		],
		signup: [
			{ id: 'signup-01', title: 'نمونه 1', desc: 'ساده و تمیز' },
			{ id: 'signup-02', title: 'نمونه 2', desc: 'با تصویر کناری' },
			{ id: 'signup-03', title: 'نمونه 3', desc: 'با پس‌زمینه' },
			{ id: 'signup-04', title: 'نمونه 4', desc: 'تمام صفحه' },
			{ id: 'signup-05', title: 'نمونه 5', desc: 'مینیمال' }
		],
		otp: [
			{ id: 'otp-01', title: 'نمونه 1', desc: 'ساده و تمیز' },
			{ id: 'otp-02', title: 'نمونه 2', desc: 'با تصویر کناری' },
			{ id: 'otp-03', title: 'نمونه 3', desc: 'با پس‌زمینه' },
			{ id: 'otp-04', title: 'نمونه 4', desc: 'تمام صفحه' },
			{ id: 'otp-05', title: 'نمونه 5', desc: 'مینیمال' }
		],
		sidebar: Array.from({ length: 16 }, (_, i) => ({
			id: `sidebar-${String(i + 1).padStart(2, '0')}`,
			title: `نمونه ${i + 1}`,
			desc: `Sidebar ${i + 1}`
		})),
		dashboard: [
			{ id: 'dashboard-01', title: 'داشبورد', desc: 'داشبورد کامل' }
		],
		other: [
			{ id: 'rtl-demo', title: 'دمو کامپوننت‌ها', desc: 'نمایش 54 کامپوننت RTL' }
		]
	};
	
	let activeTab = $state('login');
	let activeBlock = $state(blocks.login[0].id);
	
	$effect(() => {
		if (activeTab && blocks[activeTab]) {
			activeBlock = blocks[activeTab][0].id;
		}
	});
</script>

<div class="min-h-screen bg-background">
	<div class="container mx-auto p-6 space-y-8">
		<!-- Header -->
		<div class="text-center space-y-4 py-8">
			<div class="flex items-center justify-between">
				<div class="flex-1"></div>
				<div class="flex-1 text-center">
					<h1 class="text-4xl font-bold">قالب مدیریتی فارسی</h1>
					<p class="text-lg text-muted-foreground mt-2">
						30+ صفحه آماده با پشتیبانی کامل RTL و فونت فارسی
					</p>
				</div>
				<div class="flex-1 flex justify-end">
					<Button onclick={toggleTheme} variant="outline" size="icon" title={isDark ? 'حالت روشن' : 'حالت تاریک'}>
						{#if isDark}
							<SunIcon class="size-5" />
						{:else}
							<MoonIcon class="size-5" />
						{/if}
					</Button>
				</div>
			</div>
			<div class="flex gap-4 justify-center">
				<Button href="/rtl-demo" variant="outline">دمو کامپوننت‌ها</Button>
			</div>
		</div>

		<!-- Main Tabs -->
		<Tabs bind:value={activeTab} class="w-full">
			<TabsList class="grid w-full grid-cols-6 mb-8">
				<TabsTrigger value="login">ورود</TabsTrigger>
				<TabsTrigger value="signup">ثبت‌نام</TabsTrigger>
				<TabsTrigger value="otp">تایید کد</TabsTrigger>
				<TabsTrigger value="sidebar">منوی کناری</TabsTrigger>
				<TabsTrigger value="dashboard">داشبورد</TabsTrigger>
				<TabsTrigger value="other">سایر</TabsTrigger>
			</TabsList>

			{#each Object.entries(blocks) as [category, items]}
				<TabsContent value={category} class="space-y-8">
					{#each items as item, index}
						<div class="space-y-4">
							<!-- Header with Controls -->
							<div class="flex items-start justify-between border-b pb-4">
								<div class="space-y-1">
									<h3 class="text-xl font-semibold">{item.title} - {item.desc}</h3>
									<p class="text-sm text-muted-foreground">
										📁 فایل: <code class="bg-muted px-2 py-0.5 rounded">src/routes/{item.id}/+page.svelte</code>
									</p>
									<p class="text-sm text-muted-foreground">
										🔗 آدرس: <code class="bg-muted px-2 py-0.5 rounded">/{item.id}</code>
									</p>
								</div>
								
								<!-- Controls -->
								<div class="flex items-center gap-2">
									<ToggleGroup type="single" value={iframeWidths[item.id] || '100'} onValueChange={(v) => setIframeWidth(item.id, v)} class="gap-1">
										<ToggleGroupItem value="100" title="Desktop" class="size-8 p-0">
											<MonitorIcon class="size-4" />
										</ToggleGroupItem>
										<ToggleGroupItem value="60" title="Tablet" class="size-8 p-0">
											<TabletIcon class="size-4" />
										</ToggleGroupItem>
										<ToggleGroupItem value="30" title="Mobile" class="size-8 p-0">
											<SmartphoneIcon class="size-4" />
										</ToggleGroupItem>
									</ToggleGroup>
									
									<Separator orientation="vertical" class="h-6" />
									
									<Button href="/{item.id}" target="_blank" variant="ghost" size="icon" class="size-8" title="باز کردن در تب جدید">
										<FullscreenIcon class="size-4" />
									</Button>
									
									<Separator orientation="vertical" class="h-6" />
									
									<Button onclick={() => refreshIframe(item.id)} variant="ghost" size="icon" class="size-8" title="بارگذاری مجدد">
										<RotateCcwIcon class="size-4" />
									</Button>
								</div>
							</div>
							
							<!-- iframe Preview -->
							<div class="border rounded-lg overflow-hidden bg-muted/50 shadow-sm mx-auto transition-all duration-300" style="width: {iframeWidths[item.id] || '100'}%">
								<iframe
									id="iframe-{item.id}"
									src="/{item.id}"
									title="{item.title}"
									class="w-full h-[600px] bg-background"
									loading="lazy"
									onload={onIframeLoad}
								></iframe>
							</div>
						</div>
						
						{#if index < items.length - 1}
							<div class="border-t my-8"></div>
						{/if}
					{/each}
				</TabsContent>
			{/each}
		</Tabs>

		<!-- Footer -->
		<div class="text-center space-y-4 py-8 border-t">
			<div class="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2">
				<span class="text-sm font-medium">📦 30+ صفحه</span>
				<span class="text-muted-foreground">•</span>
				<span class="text-sm font-medium">🎨 54 کامپوننت RTL</span>
				<span class="text-muted-foreground">•</span>
				<span class="text-sm font-medium">✨ فونت Vazirmatn</span>
			</div>
			<p class="text-sm text-muted-foreground">ساخته شده با ❤️ برای جامعه فارسی‌زبان</p>
		</div>
	</div>
</div>
