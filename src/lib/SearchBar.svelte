<script lang="ts">
	export let search: string;
</script>

<label>
	<input
		type="text"
		placeholder="Search"
		bind:value={search}
		class="bg-mirage placeholder:text-comet-darker text-comet select-none rounded-md border-2 border-comet p-1 pl-2 active:outline-none focus:outline-none"
	/>
</label>
