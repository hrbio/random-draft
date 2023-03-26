import axios from 'axios';
import { writable } from 'svelte/store';
import { z } from 'zod';

const REGIONS_URL = 'https://ddragon.leagueoflegends.com/realms/eune.json'

export const availableChampions = writable<championType[]>([]);

export const fetchNewestVersion = async () => {
	const res = await axios.get(REGIONS_URL);
	if (res.status != 200) throw new Error("Couldn't fetch newest data version.");
	return res.data.v
}

const championSchema = z.object({
	id: z.string(),
	name: z.string(),
})

export type championType = z.infer<typeof championSchema>

export const fetchData = async () => {
	const version = await fetchNewestVersion();
	const championDataURL = `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`

	const res = await axios.get(championDataURL);
	const championData = res.data.data;

	let result: championType[] = []
	
	Object.entries(championData).forEach(([_, e]) => {
		const champion = e as any;

		const proposedChamp = {
			id: champion.id,
			name: champion.name
		}

		const check = championSchema.safeParse(proposedChamp);
		if (check.success) {
			result = [...result, check.data]
		}
	})

	availableChampions.set(result);
}