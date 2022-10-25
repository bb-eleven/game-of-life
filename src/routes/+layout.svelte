<script>
	import Day from '$lib/Day.svelte';
	import '../app.css';

	const loadDay = fetch(import.meta.env.VITE_BASE_URL + '/day')
		.then((res) => res.json())
		.then((data) => data.day);
</script>

<header class="flex justify-self-center items-center w-[100%]">
	<div id="logo" class="font-[MeshedDisplay-SemiBold] text-[2rem] leading-[1.1]">
		<span class="text-pine-glade">bb eleven<br /></span>
		<span class="text-ship-cove">game of life</span>
	</div>
	<nav class="ml-16 mb-[0.9rem] text-[1.4rem] space-x-12">
		<a href="/scores" class="hover:text-cadet-blue">scores</a>
		<a href="/news" class="hover:text-cadet-blue">news</a>
		<a href="/stats" class="hover:text-cadet-blue">stats</a>
	</nav>
	<div class="mb-[0.9rem] ml-auto">
		{#await loadDay}
			<Day />
		{:then day}
			<Day {day} />
		{/await}
	</div>
</header>

<div class="mt-8">
	<slot />
</div>
