<script lang="ts">
	import SearchBar from './SearchBar.svelte';

	export let nameScores: [string, number][];
	let nameScoresView = nameScores.sort();
	let search: string = '';

	let sortNameAsc = true;
	let sortScoreAsc = false;

	const sortByName = () => {
		nameScoresView = nameScores.sort();
		if (sortNameAsc) {
			nameScoresView.reverse();
		}
		sortNameAsc = !sortNameAsc;
	};

	const sortByScore = () => {
		nameScoresView = nameScores.sort((a, b) => a[1] - b[1]);
		if (sortScoreAsc) {
			nameScoresView.reverse();
		}
		sortScoreAsc = !sortScoreAsc;
	};

	$: {
		nameScoresView = !search
			? nameScores
			: nameScores.filter((entry) => entry[0].toLowerCase().includes(search.toLowerCase()));
	}
</script>

<!-- <SearchBar bind:search /> -->

<!-- div is used instead of table because border-collapse and border-radius don't work together -->
<div class="h-fit w-fit rounded-md border-2 border-comet bg-comet">
	<div class="bg-mirage-dark w-[50vw] max-w-2xl text-left rounded">
		<div class="thead grid grid-cols-2 grid-flow-row">
			<div on:click={sortByName} class="th col-span-1 p-2 border-r-2 border-comet">Name</div>
			<div on:click={sortByScore} class="th col-span-1 p-2 border-comet">Score</div>
		</div>
		<div class="tbody">
			{#each nameScoresView as [name, score]}
				<div class="tr grid grid-cols-2 grid-flow-row border-t-2 border-comet">
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
