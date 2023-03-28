<script>
	import { fade } from "svelte/transition";
	import { cubicOut } from 'svelte/easing'

	export let duration = 400;

</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="absolute bg-slate-800 opacity-90 w-screen h-screen" 
	on:click
	transition:fade="{{duration: duration/2, easing: cubicOut}}"
/>

<div
	class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-5 rounded-xl"
	transition:fade="{{duration, easing: cubicOut}}"
>
	<slot />
	<button on:click class="bg-emerald-400 px-3 py-2 rounded-md text-white font-semibold hover:bg-emerald-300">Close Modal</button>
</div>
