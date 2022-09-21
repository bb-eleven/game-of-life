export const prerender = true;

const names = ['grilledwindow', 'bakedpillow', 'finedrawer'];

export function load() {
	let i = 1;
	return {
		leaderboards: names
			.map((name) => ({ name, score: Math.floor(Math.random() * 100) }))
			.sort((a, b) => b.score - a.score)
			.map((leaderboard) => ({ rank: i++, ...leaderboard }))
	};
}
