<script>
	export let day = -1;
</script>

<div class={$$props.class + ' bg-comet text-mirage-darker text-[1.2rem] py-2 px-4 rounded-full'}>
	Day&nbsp;&nbsp;{day < 0 ? '-' : day}
</div>
