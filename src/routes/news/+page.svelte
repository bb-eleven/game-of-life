<script lang="ts">
	import Leaderboards from '$lib/Leaderboards.svelte';
	import NeutralityIcon from '$lib/NeutralityIcon.svelte';
	import { LeaderboardsSize } from '$lib/types/leaderboard';

	const loadLeaderboards = fetch(import.meta.env.VITE_BASE_URL + '/leaderboards')
		.then((res) => res.json())
		.then((data) => data.leaderboards);

	const loadNews: Promise<any> = fetch(import.meta.env.VITE_BASE_URL + '/news')
		.then((res) => res.json())
		.then((data) => data.news);
</script>

<section class="flex space-x-4">
	<div id="leaderboards" class="">
		{#await loadLeaderboards}
			<Leaderboards leaderboards={[]} leaderboardsSize={LeaderboardsSize.SMALL} />
		{:then leaderboards}
			<Leaderboards {leaderboards} leaderboardsSize={LeaderboardsSize.SMALL} />
		{/await}
	</div>

	<div id="news" class="">
		{#await loadNews}
			<span>Loading...</span>
		{:then news}
			{#each news as newsItemGroup}
				<h3 class="font-semibold text-lg">{newsItemGroup.name}</h3>
				<ul>
					{#each newsItemGroup.items as { neutrality, content }}
						<li class="flex items-start">
							<NeutralityIcon {neutrality} class="mr-1 mt-1" />
							<span>{content}</span>
						</li>
					{/each}
				</ul>
			{/each}
		{/await}
	</div>
</section>