<script lang="ts">
	import SearchBar from './SearchBar.svelte';

	export let nameScores: [string, number][];
	let nameScoresView = nameScores.sort();
	let search: string = '';

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
		<div class="grid grid-cols-2 grid-flow-row">
			<div class="col-span-1 p-2 border-r-2 border-comet">Name</div>
			<div class="col-span-1 p-2 border-comet">Score</div>
		</div>
		<div>
			{#each nameScoresView as [name, score]}
				<div class="grid grid-cols-2 grid-flow-row border-t-2 border-comet">
					<div class="p-2 border-r-2 border-comet">{name}</div>
					<div class="p-2 border-comet">{score}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
</style>
