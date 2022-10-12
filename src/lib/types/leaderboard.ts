export interface LeaderboardEntry {
	rank: number;
	name: string;
	score: number;
}

export enum LeaderboardsSize {
	SMALL = 5,
	FULL
}
