<script lang="ts">
	import SearchBar from '$lib/SearchBar.svelte';
	import Checkbox from './Checkbox.svelte';
	import { LeaderboardsSize, type LeaderboardEntry } from './types/leaderboard';

	export let leaderboards: LeaderboardEntry[];
	export let leaderboardsSize: LeaderboardsSize = LeaderboardsSize.FULL;
	export let showSearchBar: boolean = false;
	let showBankruptOnly: boolean;

	if (leaderboardsSize === LeaderboardsSize.SMALL) {
		leaderboards = leaderboards.slice(0, LeaderboardsSize.SMALL);
	}

	let leaderboardsView = leaderboards;
	let search: string = '';

	let sortNameAsc = false;
	let sortScoreAsc = false;

	const sortByName = () => {
		leaderboardsView = leaderboardsView.sort((a, b) => a.name.localeCompare(b.name));
		if (sortNameAsc) {
			leaderboardsView.reverse();
		}
		sortNameAsc = !sortNameAsc;
	};

	const sortByScore = () => {
		leaderboardsView = leaderboardsView.sort((a, b) => a.score - b.score);
		if (sortScoreAsc) {
			leaderboardsView.reverse();
		}
		sortScoreAsc = !sortScoreAsc;
	};

	$: {
		leaderboardsView = !search
			? leaderboardsView
			: leaderboards.filter((entry) => entry.name.toLowerCase().includes(search.toLowerCase()));
	}

	$: {
		leaderboardsView = !showBankruptOnly
			? leaderboards
			: leaderboards.filter((entry) => entry.score < 0);
	}
</script>

<div class="flex flex-col space-y-4">
	{#if leaderboardsSize !== LeaderboardsSize.SMALL}
		<Checkbox
			id="show-bankrupt-only"
			label="show bankrupt people only"
			bind:checked={showBankruptOnly}
		/>
	{/if}

	{#if showSearchBar}
		<SearchBar bind:search />
	{/if}

	<!-- div is used instead of table because border-collapse and border-radius don't work together -->
	<div class="h-fit rounded-md border-2 border-comet bg-comet">
		<div class="bg-mirage text-left rounded">
			<div class="thead grid grid-cols-3 grid-flow-row">
				<div
					on:click={sortByScore}
					class="select-none hover:cursor-pointer hover:bg-comet focus:bg-comet active:bg-comet hover:text-mirage focus:text-mirage th col-span-1 p-2 border-r-2 border-comet"
				>
					Rank
				</div>
				<div
					on:click={sortByName}
					class="select-none hover:cursor-pointer hover:bg-comet focus:bg-comet active:bg-comet hover:text-mirage focus:text-mirage th col-span-1 p-2 border-r-2 border-comet"
				>
					Name
				</div>
				<div
					on:click={sortByScore}
					class="select-none hover:cursor-pointer hover:bg-comet focus:bg-comet active:bg-comet hover:text-mirage focus:text-mirage th col-span-1 p-2 border-comet"
				>
					Score
				</div>
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
</div>
