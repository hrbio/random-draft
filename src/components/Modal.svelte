<script>
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	export let duration = 400;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="absolute h-screen w-screen bg-slate-800 opacity-90"
	on:click
	transition:fade={{ duration: duration / 2, easing: cubicOut }}
/>

<div
	class="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white px-6 py-5"
	transition:fade={{ duration, easing: cubicOut }}
>
	<slot />
	<button
		on:click
		class="rounded-md bg-emerald-400 px-3 py-2 font-semibold text-white hover:bg-emerald-300"
		>Close Modal</button
	>
</div>
