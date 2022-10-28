<script lang="ts">
	import Leaderboards from '$lib/Leaderboards.svelte';

	const loadLeaderboards = fetch(import.meta.env.VITE_BASE_URL + '/leaderboards')
		.then((res) => res.json())
		.then((data) => data.leaderboards);
</script>

<section class="w-3/5">
	{#await loadLeaderboards}
		<Leaderboards leaderboards={[]} showSearchBar={true} />
	{:then leaderboards}
		<Leaderboards {leaderboards} showSearchBar={true} />
	{/await}
</section>
