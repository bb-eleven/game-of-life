import { env } from '$env/dynamic/private';
import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
	keyFile: 'credentials.json',
	scopes: 'https://www.googleapis.com/auth/spreadsheets'
});

const sheets = google.sheets({
	version: 'v4',
	auth
});

const request = {
	spreadsheetId: env.SHEET_ID,
	range: 'Sheet1!A2:B50',
	majorDimension: 'ROWS'
};

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const response = await sheets.spreadsheets.values.get(request);

	if (!response.data.values) {
		return [];
	}

	// map to LeaderboardEntry[], sorted by rank ascending, score descending
	let rank = 1;
	const leaderboards = response.data.values
		.map((row) => ({ name: row[0], score: Math.floor(Math.random() * 200) }))
		.sort((a, b) => b.score - a.score)
		.map((entry) => ({ rank: rank++, ...entry }));

	return { leaderboards };
}
