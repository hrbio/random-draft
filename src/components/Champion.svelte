<script lang="ts">
	export let name: string;
	export let id: string;
	export let right = false;
</script>

<div
	class="relative h-36 bg-black cursor-pointer"
>
	<img
		src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
		alt=""
		class="h-36"
	/>
	<span
		class="absolute bottom-0 text-white font-semibold text-xl px-2 z-10"
		class:right-0={right}>{name}</span
	>
</div>

<style>
	div::before {
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

	div:hover::before {
		background-position-y: 100%;
	}
</style>
