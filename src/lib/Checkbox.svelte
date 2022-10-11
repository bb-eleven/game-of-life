<script lang="ts">
	export let id: string;
	export let label: string;

	let checked: boolean = false;
	console.log(label);
</script>

<div class="flex items-center w-fit h-fit">
	<input
		type="checkbox"
		bind:checked
		{id}
		class="w-5 h-5 mr-3 bg-mirage border-none rounded-[50%] appearance-none 
    cursor-pointer
    ring-[1.25px] ring-comet
    checked:bg-comet"
	/>
	<label for={id} class="pb-0.5">{label}</label>
</div>
