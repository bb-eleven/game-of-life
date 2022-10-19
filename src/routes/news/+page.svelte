<script lang="ts">
	import Leaderboards from '$lib/Leaderboards.svelte';
	import { LeaderboardsSize } from '$lib/types/leaderboard';

	const loadLeaderboards = fetch(import.meta.env.VITE_BASE_URL + '/leaderboards')
		.then((res) => res.json())
		.then((data) => data.leaderboards);

	const neutralityDisplayMap = new Map<number, string>([
		[-1, ':('],
		[0, ':o'],
		[1, ':D']
	]);
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
				<h3>{newsItemGroup.name}</h3>
				<ul>
					{#each newsItemGroup.items as newsItem}
						<li>
							{neutralityDisplayMap.get(newsItem.neutrality)}
							{newsItem.content}
						</li>
					{/each}
				</ul>
			{/each}
		{/await}
	</div>
</section>
