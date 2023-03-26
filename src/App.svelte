<script lang="ts">
	import Champion from './components/Champion.svelte';
	import RefreshIcon from './components/RefreshIcon.svelte';
	import SettingsIcon from './components/SettingsIcon.svelte';
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

<main class="flex flex-col items-center justify-between h-screen">
	<h1>Random League of Legends draft</h1>
	<div class="flex flex-col items-center">
		<div class="flex gap-5 pb-8">
			<button on:click={() => {
				fetchData();
			}}>
				<RefreshIcon></RefreshIcon>
			</button>
			<button>
				<SettingsIcon></SettingsIcon>
			</button>
		</div>
		<div class="flex gap-10 items-center">
			<div class="flex flex-col gap-1">
				{#each teamOneChampions as champ (champ.id)}
					<Champion {...champ} right={true}/>
				{/each}
			</div>
			<span class="font-bold text-4xl">vs.</span>
			<div class="flex flex-col gap-1">
				{#each teamTwoChampions as champ (champ.id)}
					<Champion {...champ} />
				{/each}
			</div>
		</div>
	</div>
	<footer></footer>
</main>
