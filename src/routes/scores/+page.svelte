<script lang="ts">
	import ScoreTable from '$lib/ScoreTable.svelte';

	export let data: any;
</script>

<ScoreTable leaderboards={data.leaderboards} />
