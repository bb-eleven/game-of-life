<script lang="ts">
	import Leaderboards from '$lib/Leaderboards.svelte';

	const loadLeaderboards = fetch(import.meta.env.VITE_BASE_URL + '/leaderboards')
		.then((res) => res.json())
		.then((data) => data.leaderboards);
</script>

{#await loadLeaderboards}
	<Leaderboards leaderboards={[]} />
{:then leaderboards}
	<Leaderboards {leaderboards} />
{/await}
