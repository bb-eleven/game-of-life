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

<SearchBar bind:search />
<table>
	<thead>
		<th>Name</th>
		<th>Score</th>
	</thead>
	<tbody>
		{#each nameScoresView as [name, score]}
			<tr>
				<td>{name}</td>
				<td>{score}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
</style>
