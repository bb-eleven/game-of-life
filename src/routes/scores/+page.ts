import type { LoadEvent } from '@sveltejs/kit';

export const prerender = true;

const names = [
	'grilledwindow',
	'bakedpillow',
	'finedrawer'
];

export function load() {
	return { nameScores: names.map((name) => [name, Math.floor(Math.random() * 100)]) };
}
