<script lang="ts">
	import Champion from './components/Champion.svelte';
import './styles/global.css';
	import {
		availableChampions,
		fetchData,
		type championType,
	} from './utils/fetchData';
	import { randomTeam } from './utils/randomTeam';

	fetchData();

	let teamOneChampions: championType[];
	let teamTwoChampions: championType[];

	$: $availableChampions,
		(() => {
			teamOneChampions = randomTeam($availableChampions);
			teamTwoChampions = randomTeam($availableChampions);
		})();
</script>

<main class="flex flex-col items-center justify-center">
	<h1>Random League of Legends draft</h1>
	<div class="flex gap-3">
		<div>
			{#each teamOneChampions as champ (champ.id)}
				<Champion {...champ}></Champion>
			{/each}
		</div>
		<p>vs</p>
		<div class="">
			{#each teamTwoChampions as champ (champ.id)}
				<Champion {...champ}></Champion>
			{/each}
		</div>
	</div>
</main>
