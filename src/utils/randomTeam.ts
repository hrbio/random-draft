import type { championType } from "./fetchData"

export const randomTeam = (champList: championType[], players=5) => {
	return champList.sort(() => .5 - Math.random()).slice(0, players);
}