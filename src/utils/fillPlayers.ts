import type { championType } from './fetchData';

export type player = {
	id: number;
	playerName: string;
	champion?: championType;
};

export const getEmptyTeam = (no: number): player[] => {
	return [...new Array(no)].map((_, i) => {
		return {
			id: i,
			playerName: `Player ${i + 1}`,
		};
	});
};
