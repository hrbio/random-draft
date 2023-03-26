<script lang="ts">
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
			{#each teamOneChampions as {id, name} (id)}
				<p>{name}</p>
			{/each}
		</div>
		<p>vs</p>
		<div class="">
			{#each teamTwoChampions as {id, name} (id)}
				<p>{name}</p>
			{/each}
		</div>
	</div>
</main>
