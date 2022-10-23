<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import Leaderboards from '$lib/Leaderboards.svelte';
	import NeutralityIcon from '$lib/NeutralityIcon.svelte';
	import type { FilledSvgIcon } from '$lib/types/icon';
	import { LeaderboardsSize } from '$lib/types/leaderboard';

	const loadLeaderboards = fetch(import.meta.env.VITE_BASE_URL + '/leaderboards')
		.then((res) => res.json())
		.then((data) => data.leaderboards);

	const loadNews: Promise<any> = fetch(import.meta.env.VITE_BASE_URL + '/news')
		.then((res) => res.json())
		.then((data) => data.news);

	const newsItemIconMap: { [key: string]: FilledSvgIcon } = {
		'Interesting info': {
			// info-circle
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>',
			fill: 'fill-comet'
		},
		'Property value': {
			// home
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>',
			fill: 'fill-comet'
		},
		'Rental yield': {
			// wallet
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M16 12h2v4h-2z"></path><path d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"></path></svg>',
			fill: 'fill-comet'
		},
		'Sales pitch': {
			// line-chart
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429 0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z"></path></svg>',
			fill: 'fill-comet'
		},
		'Life insurance': {
			// user-plus
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M4.5 8.552c0 1.995 1.505 3.5 3.5 3.5s3.5-1.505 3.5-3.5-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5zM19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2z"></path></svg>',
			fill: 'fill-comet'
		}
	};
</script>

<section class="flex flex-col space-y-8 w-4/5">
	<div id="leaderboards" class="w-[100%]">
		<h1 class="font-[MeshedDisplay-SemiBold] text-[2rem]">Leaderboards</h1>
		{#await loadLeaderboards}
			<Leaderboards leaderboards={[]} leaderboardsSize={LeaderboardsSize.SMALL} />
		{:then leaderboards}
			<Leaderboards {leaderboards} leaderboardsSize={LeaderboardsSize.SMALL} />
		{/await}
	</div>

	<div id="news" class="flex flex-col">
		<h1 class="font-[MeshedDisplay-SemiBold] text-[2rem]">News</h1>
		{#await loadNews}
			<span>Loading...</span>
		{:then news}
			{#each news as { name, items }}
				<div class="bg-mirage-lighter p-2 mb-4 rounded-md">
					<!-- <h3 class="font-semibold text-lg">{newsItemGroup.name}</h3> -->
					<div class="flex space-x-2 items">
						<Icon filledSvgIcon={newsItemIconMap[name]} class="mx-1" />
						<ul class="flex flex-col space-y-1">
							{#each items as { neutrality, content }}
								<li class="flex items-start">
									<NeutralityIcon {neutrality} class="mr-1 mt-1" />
									<p>{content}</p>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		{/await}
	</div>
</section>
