<script lang="ts">
	import Icon from './Icon.svelte';
	import type { FilledSvgIcon } from './types/icon';

	export let neutrality: 1 | 0 | -1;
	const neutralityStr = String(neutrality) as '1' | '0' | '-1';

	const neutralityIconMap: { [key: string]: FilledSvgIcon } = {
		'1': {
			// up arrow
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path></svg>',
			fill: 'fill-envy'
		},
		'0': {
			// circle
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg>',
			fill: 'fill-comet'
		},
		'-1': {
			// down arrow
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>',
			fill: 'fill-quicksand'
		}
	};
</script>

<Icon filledSvgIcon={neutralityIconMap[neutralityStr]} class={$$props.class} />
