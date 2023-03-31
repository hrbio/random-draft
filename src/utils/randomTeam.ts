import type { championType } from './fetchData';
import type { player } from './fillPlayers';

export const randomTeam = (champList: championType[], players = 5) => {
	return champList.sort(() => 0.5 - Math.random()).slice(0, players);
};

export const rerollChamion = (
	team: player[],
	index: number,
	allChampions: championType[]
) => {
	let champion = team[index].champion!;
	while (team.some((e) => e.champion! === champion)) {
		champion =
			allChampions[Math.floor(Math.random() * allChampions.length)];
	}
	return champion;
};
