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
			{#each Object.keys(news) as newsProperty}
				<h3>{newsProperty}</h3>
				<ul>
					{#if newsProperty === 'interestingInfo'}
						<li>
							{neutralityDisplayMap.get(news[newsProperty].neutrality)}
							{news[newsProperty].content}
						</li>
					{:else}
						{#each news[newsProperty] as recurringNewsItem}
							<li>
								{neutralityDisplayMap.get(recurringNewsItem.neutrality)}
								{recurringNewsItem.content}
							</li>
						{/each}
					{/if}
				</ul>
			{/each}
		{/await}
	</div>
</section>
