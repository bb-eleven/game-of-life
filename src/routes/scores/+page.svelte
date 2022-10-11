<script lang="ts">
	import Leaderboards from '$lib/Leaderboards.svelte';

	export let data: any;
</script>

<Leaderboards leaderboards={data.leaderboards} />
