<script>
	import RtlProvider from "$lib/components/rtl-provider.svelte";
	import { Button } from "$lib/components/ui-rtl/button";
	import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "$lib/components/ui-rtl/card";
	import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "$lib/components/ui-rtl/accordion";
	import { Alert, AlertTitle, AlertDescription } from "$lib/components/ui-rtl/alert";
	import { Badge } from "$lib/components/ui-rtl/badge";
	import { Input } from "$lib/components/ui-rtl/input";
	import { Label } from "$lib/components/ui-rtl/label";
	import { Checkbox } from "$lib/components/ui-rtl/checkbox";
	import { Switch } from "$lib/components/ui-rtl/switch";
	import { Tabs, TabsList, TabsTrigger, TabsContent } from "$lib/components/ui-rtl/tabs";
	
	let checked = $state(false);
	let switchValue = $state(false);
</script>

<RtlProvider rtl={true} lang="fa" class="min-h-screen bg-background p-8">
	<div class="mx-auto max-w-6xl space-y-8">
		<!-- Header -->
		<div class="space-y-2">
			<h1 class="text-4xl font-bold tracking-tight">نمایش کامپوننت‌های RTL</h1>
			<p class="text-lg text-muted-foreground">
				مجموعه کامل کامپوننت‌های shadcn-svelte با پشتیبانی کامل از راست به چپ
			</p>
			<p class="text-sm text-muted-foreground">
				✨ با فونت زیبای <span class="font-semibold">Vazirmatn</span> از Google Fonts
			</p>
		</div>

		<!-- Alert -->
		<Alert>
			<AlertTitle>خوش آمدید!</AlertTitle>
			<AlertDescription>
				این صفحه نمایشی از تمام کامپوننت‌های RTL است. تمام کامپوننت‌ها به صورت خودکار با جهت راست به چپ سازگار شده‌اند.
			</AlertDescription>
		</Alert>

		<!-- Buttons -->
		<Card>
			<CardHeader>
				<CardTitle>دکمه‌ها</CardTitle>
				<CardDescription>انواع مختلف دکمه‌ها با استایل‌های متنوع</CardDescription>
			</CardHeader>
			<CardContent class="flex flex-wrap gap-2">
				<Button>پیش‌فرض</Button>
				<Button variant="secondary">ثانویه</Button>
				<Button variant="outline">خطی</Button>
				<Button variant="ghost">شبح</Button>
				<Button variant="destructive">حذف</Button>
				<Button variant="link">لینک</Button>
				<Button size="sm">کوچک</Button>
				<Button size="lg">بزرگ</Button>
				<Button disabled>غیرفعال</Button>
			</CardContent>
		</Card>

		<!-- Badges -->
		<Card>
			<CardHeader>
				<CardTitle>نشان‌ها</CardTitle>
				<CardDescription>نشان‌های کوچک برای نمایش وضعیت</CardDescription>
			</CardHeader>
			<CardContent class="flex flex-wrap gap-2">
				<Badge>پیش‌فرض</Badge>
				<Badge variant="secondary">ثانویه</Badge>
				<Badge variant="outline">خطی</Badge>
				<Badge variant="destructive">حذف</Badge>
			</CardContent>
		</Card>

		<!-- Form Elements -->
		<Card>
			<CardHeader>
				<CardTitle>المان‌های فرم</CardTitle>
				<CardDescription>ورودی‌ها و کنترل‌های فرم</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="space-y-2">
					<Label for="name">نام</Label>
					<Input id="name" placeholder="نام خود را وارد کنید" />
				</div>
				
				<div class="space-y-2">
					<Label for="email">ایمیل</Label>
					<Input id="email" type="email" placeholder="example@email.com" />
				</div>
				
				<div class="flex items-center space-x-2 space-x-reverse">
					<Checkbox id="terms" bind:checked />
					<Label for="terms">قوانین و مقررات را می‌پذیرم</Label>
				</div>
				
				<div class="flex items-center space-x-2 space-x-reverse">
					<Switch id="notifications" bind:checked={switchValue} />
					<Label for="notifications">دریافت اعلان‌ها</Label>
				</div>
			</CardContent>
			<CardFooter>
				<Button>ارسال فرم</Button>
			</CardFooter>
		</Card>

		<!-- Tabs -->
		<Card>
			<CardHeader>
				<CardTitle>تب‌ها</CardTitle>
				<CardDescription>سازماندهی محتوا با تب‌ها</CardDescription>
			</CardHeader>
			<CardContent>
				<Tabs value="tab1">
					<TabsList class="grid w-full grid-cols-3">
						<TabsTrigger value="tab1">تب اول</TabsTrigger>
						<TabsTrigger value="tab2">تب دوم</TabsTrigger>
						<TabsTrigger value="tab3">تب سوم</TabsTrigger>
					</TabsList>
					<TabsContent value="tab1" class="space-y-2">
						<h3 class="text-lg font-semibold">محتوای تب اول</h3>
						<p class="text-muted-foreground">
							این محتوای تب اول است. می‌توانید هر نوع محتوایی را اینجا قرار دهید.
						</p>
					</TabsContent>
					<TabsContent value="tab2" class="space-y-2">
						<h3 class="text-lg font-semibold">محتوای تب دوم</h3>
						<p class="text-muted-foreground">
							این محتوای تب دوم است با اطلاعات متفاوت.
						</p>
					</TabsContent>
					<TabsContent value="tab3" class="space-y-2">
						<h3 class="text-lg font-semibold">محتوای تب سوم</h3>
						<p class="text-muted-foreground">
							و این هم محتوای تب سوم.
						</p>
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>

		<!-- Accordion -->
		<Card>
			<CardHeader>
				<CardTitle>آکاردئون</CardTitle>
				<CardDescription>محتوای قابل جمع شدن</CardDescription>
			</CardHeader>
			<CardContent>
				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>آیا استفاده از این کامپوننت‌ها رایگان است؟</AccordionTrigger>
						<AccordionContent>
							بله! تمام این کامپوننت‌ها به صورت رایگان و متن‌باز در دسترس هستند. می‌توانید آن‌ها را در پروژه‌های خود استفاده کنید.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>چگونه می‌توانم این کامپوننت‌ها را سفارشی کنم؟</AccordionTrigger>
						<AccordionContent>
							شما می‌توانید از طریق Tailwind CSS کلاس‌ها را تغییر دهید یا مستقیماً فایل‌های کامپوننت را ویرایش کنید.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>آیا با تمام فریمورک‌ها سازگار است؟</AccordionTrigger>
						<AccordionContent>
							این کامپوننت‌ها برای Svelte طراحی شده‌اند و از bits-ui استفاده می‌کنند.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</CardContent>
		</Card>

		<!-- Grid of Cards -->
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			<Card>
				<CardHeader>
					<CardTitle>کارت ۱</CardTitle>
					<CardDescription>توضیحات کارت اول</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground">
						محتوای کارت شماره یک با متن فارسی
					</p>
				</CardContent>
				<CardFooter>
					<Button variant="outline" class="w-full">مشاهده بیشتر</Button>
				</CardFooter>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>کارت ۲</CardTitle>
					<CardDescription>توضیحات کارت دوم</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground">
						محتوای کارت شماره دو با متن فارسی
					</p>
				</CardContent>
				<CardFooter>
					<Button variant="outline" class="w-full">مشاهده بیشتر</Button>
				</CardFooter>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>کارت ۳</CardTitle>
					<CardDescription>توضیحات کارت سوم</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground">
						محتوای کارت شماره سه با متن فارسی
					</p>
				</CardContent>
				<CardFooter>
					<Button variant="outline" class="w-full">مشاهده بیشتر</Button>
				</CardFooter>
			</Card>
		</div>

		<!-- Footer -->
		<div class="border-t pt-8 text-center text-sm text-muted-foreground">
			<p>ساخته شده با ❤️ برای جامعه فارسی‌زبان</p>
			<p class="mt-2">تمام کامپوننت‌ها با پشتیبانی کامل از RTL</p>
		</div>
	</div>
</RtlProvider>
