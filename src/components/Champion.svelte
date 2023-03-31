<script lang="ts">
	import type { championType } from '../utils/fetchData';

	export let playerName: string;
	export let champion: championType | undefined = undefined;
	export let right = false;
</script>

<button class="relative h-36 cursor-pointer bg-black" on:click>
	{#if champion != undefined}
		<img
			src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
			alt=""
			class="h-36"
		/>
		<span
			class={`absolute bottom-7 z-10 px-2 font-semibold text-neutral-400 ${
				right ? 'right-0' : 'left-0'
			}`}
			>{playerName}
		</span>
		<span
			class={`absolute bottom-0 z-10 px-2 text-2xl font-semibold text-white ${
				right ? 'right-0' : 'left-0'
			}`}
			>{champion.name}
		</span>
	{/if}
</button>

<style>
	button::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			0deg,
			rgba(2, 0, 36, 1) 0%,
			rgba(255, 132, 132, 0) 125%
		);
		background-size: 100% 200%;
		top: 0;
		left: 0;
		z-index: 1;
		transition: background-position 0.15s ease-in;
	}

	button:hover::before {
		background-position-y: 100%;
	}
</style>
