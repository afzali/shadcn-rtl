<script>
	import { cnRtl } from "$lib/rtl-utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	} = $props();
</script>

<ol
	bind:this={ref}
	data-slot="breadcrumb-list"
	class={cnRtl(
		"text-muted-foreground flex flex-row-reverse flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</ol>
