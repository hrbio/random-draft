<script lang="ts">
	import Modal from './components/Modal.svelte';
import SettingsIcon from './components/SettingsIcon.svelte';
	import './styles/global.css';
	import {
		availableChampions,
		fetchData,
	} from './utils/fetchData';
	import type { player } from './utils/playerType';
	import { randomTeam } from './utils/randomTeam';

	// fetchData();

	let noPlayers = 5;

	let teamOnePlayers: player[];
	let teamTwoPlayers: player[];

	let showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
	}

	$: $availableChampions,
		(() => {
			const championTeamOne = randomTeam($availableChampions);
			const championTeamTwo = randomTeam($availableChampions);
		})();
</script>

<main class="flex flex-col items-center justify-between h-screen">
	{noPlayers}
	<h1>Random League of Legends draft</h1>
	<div class="flex flex-col items-center">
		<div class="flex gap-5 pb-8">
			<button on:click={toggleModal}>
				<SettingsIcon></SettingsIcon>
			</button>
		</div>

		<div class="flex gap-10 items-center">

			<div class="flex flex-col gap-1">
			</div>

			<span class="font-bold text-4xl">vs.</span>

			<div class="flex flex-col gap-1">

			</div>
		</div>
	</div>
	<footer></footer>
	{#if showModal}
		<Modal on:click={toggleModal}>
			<div>
				<input type="number" min=0 max=5 step=1 bind:value={noPlayers}>
			</div>
		</Modal>
	{/if}
</main>
