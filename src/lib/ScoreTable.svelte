<script lang="ts">
	import SearchBar from './SearchBar.svelte';
	import type { LeaderboardEntry } from './types/leaderboard-entry';

	export let leaderboards: LeaderboardEntry[];
	let leaderboardsView = leaderboards;
	let search: string = '';

	let sortNameAsc = false;
	let sortScoreAsc = false;

	const sortByName = () => {
		leaderboardsView = leaderboards.sort((a, b) => a.name.localeCompare(b.name));
		if (sortNameAsc) {
			leaderboardsView.reverse();
		}
		sortNameAsc = !sortNameAsc;
	};

	const sortByScore = () => {
		leaderboardsView = leaderboards.sort((a, b) => a.score - b.score);
		if (sortScoreAsc) {
			leaderboardsView.reverse();
		}
		sortScoreAsc = !sortScoreAsc;
	};

	$: {
		leaderboardsView = !search
			? leaderboards
			: leaderboards.filter((entry) => entry.name.toLowerCase().includes(search.toLowerCase()));
	}
</script>

<!-- <SearchBar bind:search /> -->

<!-- div is used instead of table because border-collapse and border-radius don't work together -->
<div class="h-fit w-fit rounded-md border-2 border-comet bg-comet">
	<div class="bg-mirage-dark w-[50vw] max-w-2xl text-left rounded">
		<div class="thead grid grid-cols-3 grid-flow-row">
			<div on:click={sortByScore} class="th col-span-1 p-2 border-r-2 border-comet">Rank</div>
			<div on:click={sortByName} class="th col-span-1 p-2 border-r-2 border-comet">Name</div>
			<div on:click={sortByScore} class="th col-span-1 p-2 border-comet">Score</div>
		</div>
		<div class="tbody">
			{#each leaderboardsView as { rank, name, score }}
				<div class="tr grid grid-cols-3 grid-flow-row border-t-2 border-comet">
					<div class="td p-2 border-r-2 border-comet">{rank}</div>
					<div class="td p-2 border-r-2 border-comet">{name}</div>
					<div class="td p-2 border-comet">{score}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	@tailwind components;
	@layer components {
		.th {
			@apply select-none hover:cursor-pointer hover:bg-comet focus:bg-comet active:bg-comet hover:text-mirage-dark focus:text-mirage-dark;
		}
	}
</style>
