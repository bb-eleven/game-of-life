<script>
	import '../app.css';
</script>

<header class="flex justify-self-center items-center space-x-16 lg:space-x-20">
	<div id="logo" class="font-[MeshedDisplay-SemiBold] text-[2rem] leading-[1.1]">
		<span class="text-pine-glade">bb eleven<br /></span>
		<span class="text-ship-cove">game of life</span>
	</div>
	<nav class="mb-[0.9rem] text-[1.4rem] space-x-12">
		<a href="/scores" class="hover:text-cadet-blue">scores</a>
		<a href="/news" class="hover:text-cadet-blue">news</a>
		<a href="/stats" class="hover:text-cadet-blue">stats</a>
	</nav>
</header>

<div class="mt-8">
	<slot />
</div>
