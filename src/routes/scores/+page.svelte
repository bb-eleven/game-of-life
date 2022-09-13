<script lang="ts">
	import ScoreTable from '$lib/ScoreTable.svelte';

	export let data: any;
</script>

<ScoreTable nameScores={data.nameScores} />
