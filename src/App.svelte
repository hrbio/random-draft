<script lang="ts">
	import './styles/global.css';
	import {
		availableChampions,
		fetchData,
		type championType,
	} from './utils/fetchData';
	import { randomTeam } from './utils/randomTeam';

	fetchData();

	let teamOne: championType[];
	let teamTwo: championType[];

	$: $availableChampions, (() => {
		teamOne = randomTeam($availableChampions)
		teamTwo = randomTeam($availableChampions)
	})();
</script>

<main class="flex flex-col items-center justify-center">
	<h1>Random League of Legends draft</h1>
	{#each teamOne as champ}
		<p>{champ.name}</p>
	{/each}
	<p>vs</p>
	{#each teamTwo as champ}
		<p>{champ.name}</p>
	{/each}
</main>
