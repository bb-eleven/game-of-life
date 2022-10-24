<script lang="ts">
	import SearchBar from '$lib/SearchBar.svelte';
	import type { LeaderboardEntry } from '$lib/types/leaderboard';

	let leaderboards: LeaderboardEntry[];
	let search: string;
	let results: LeaderboardEntry[];
	let selectedPlayer: LeaderboardEntry;

	const loadLeaderboards = fetch(import.meta.env.VITE_BASE_URL + '/leaderboards')
		.then((res) => res.json())
		.then((data) => (leaderboards = data.leaderboards));

	const filterNames = (name: string): LeaderboardEntry[] => {
		name = name?.trim();
		results = !name
			? leaderboards
			: leaderboards?.filter((entry) => entry.name.toLowerCase().includes(name.toLowerCase()));
		return results;
	};

	const selectPlayer = (selectedResult: LeaderboardEntry) => {
		selectedPlayer = selectedResult;
	};

	$: results = filterNames(search);
</script>

<h1 class="font-[MeshedDisplay-SemiBold] text-[2rem]">Player stats</h1>

{#await loadLeaderboards}
	<span>Fetching player data...</span>
	<!-- doesn't update when done in loadLeaderboards.then() -->
{:then { results = leaderboards }}
	<section class="flex space-x-8">
		<div class="flex flex-col space-y-4">
			<SearchBar bind:search />
			<ul class="bg-mirage-lighter rounded-md w-[200px] h-fit max-h-[40vh] overflow-y-scroll">
				{#if results?.length > 0}
					{#each results as result}
						<li
							on:click={() => selectPlayer(result)}
							class="hover:cursor-pointer hover:bg-comet focus:bg-comet active:bg-comet hover:text-mirage focus:text-mirage p-1 pl-2"
						>
							{result.name}
						</li>
					{/each}
				{:else if search}
					<li class="p-1 pl-2">No results found.</li>
				{/if}
			</ul>
		</div>
		<div>
			{#if !selectedPlayer}
				<p>No selected player.</p>
			{:else}
				<div>
					<span>Name: </span>
					<span>{selectedPlayer.name}</span>
				</div>
				<div>
					<span>Rank: </span>
					<span>{selectedPlayer.rank}</span>
				</div>
				<div>
					<span>Score: </span>
					<span>{selectedPlayer.score}</span>
				</div>
			{/if}
		</div>
	</section>
{/await}
