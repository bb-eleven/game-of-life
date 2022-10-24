<script lang="ts">
	import type { FilledSvgIcon } from './types/icon';

	export let filledSvgIcon: FilledSvgIcon;
</script>

<span class={($$props.class ?? '') + ' ' + filledSvgIcon.fill}>
	{@html filledSvgIcon.svg}
</span>
