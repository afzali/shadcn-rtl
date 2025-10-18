<script>
	import { cnRtl } from "$lib/rtl-utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	} = $props();
</script>

<ul
	bind:this={ref}
	data-slot="pagination-content"
	class={cnRtl("flex flex-row items-center gap-1", className)}
	{...restProps}
>
	{@render children?.()}
</ul>