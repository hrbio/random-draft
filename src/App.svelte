<script lang="ts">
	import Champion from './components/Champion.svelte';
	import Modal from './components/Modal.svelte';
	import SettingsIcon from './components/SettingsIcon.svelte';
	import './styles/global.css';
	import { availableChampions, fetchData } from './utils/fetchData';
	import { getEmptyTeam, type player } from './utils/fillPlayers';
	import { randomTeam, rerollChamion } from './utils/randomTeam';

	let noPlayers = 5;

	let teamOnePlayers: player[];
	let teamTwoPlayers: player[];

	let showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
	};

	$: {
		teamOnePlayers = getEmptyTeam(noPlayers);
		teamTwoPlayers = getEmptyTeam(noPlayers);
	}

	$: {
		$availableChampions;
		loadChampions();
	}

	const loadChampions = () => {
		if ($availableChampions.length > 0) {
			const chosenChampions = randomTeam(
				$availableChampions,
				noPlayers * 2
			);
			teamOnePlayers = teamOnePlayers.map((e, i) => {
				return { ...e, champion: chosenChampions[i] };
			});
			teamTwoPlayers = teamTwoPlayers.map((e, i) => {
				return { ...e, champion: chosenChampions[i + noPlayers] };
			});
		}
	};

	const handleTeamOneReroll = (index: number) => {
		teamOnePlayers[index].champion = rerollChamion(
			teamOnePlayers,
			index,
			$availableChampions
		);
	};

	const handleTeamTwoReroll = (index: number) => {
		teamTwoPlayers[index].champion = rerollChamion(
			teamTwoPlayers,
			index,
			$availableChampions
		);
	};

	fetchData();
</script>

<main class="flex h-screen flex-col items-center justify-between">
	<h1>Random League of Legends draft</h1>
	<div class="flex flex-col items-center">
		<div class="flex gap-5 pb-8">
			<button on:click={toggleModal}>
				<SettingsIcon />
			</button>
		</div>

		<div class="flex items-center gap-10">
			<div class="flex flex-col gap-1">
				{#each teamOnePlayers as player (player.id)}
					<Champion
						playerName={player.playerName}
						champion={player.champion}
						on:click={() => {
							handleTeamOneReroll(player.id);
						}}
					/>
				{/each}
			</div>

			<span class="text-4xl font-bold">vs.</span>

			<div class="flex flex-col gap-1">
				{#each teamTwoPlayers as player (player.id)}
					<Champion
						playerName={player.playerName}
						champion={player.champion}
						right
						on:click={() => {
							handleTeamTwoReroll(player.id);
						}}
					/>
				{/each}
			</div>
		</div>
	</div>
	<footer />
	{#if showModal}
		<Modal on:click={toggleModal}>
			<div>
				<input
					type="number"
					min="0"
					max="5"
					step="1"
					bind:value={noPlayers}
				/>
			</div>
		</Modal>
	{/if}
</main>
