<!-- <script lang="ts">
	import { enhance } from '$app/forms';
	import logo from '$assets/logo.svg';
	import linkedin from '$assets/linkedin.svg';
	import instagram from '$assets/instagram.svg';
	import TeamModal from '$lib/components/TeamModal.svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	export let data;

	// Team selection state
	let selectedTeam = browser ? localStorage.getItem('selectedTeam') : null;
	let isLoading = false;

	// Handle team selection
	async function handleTeamSelect(event: CustomEvent<string>) {
		isLoading = true;
		selectedTeam = event.detail;
		localStorage.setItem('selectedTeam', selectedTeam);
		// This will trigger the server load function with the team parameter
		await goto(`/?team=${selectedTeam}`, { replaceState: true });
		isLoading = false;
	}
</script>

{#if !selectedTeam || data?.status === 'waiting'}
	<TeamModal on:selectTeam={handleTeamSelect} />
{:else if isLoading}
	<div class="flex min-h-screen flex-col items-center justify-center bg-[#0b0b0b] text-white">
		<p class="text-xl text-#45b2a9">Loading your treasure hunt...</p>
	</div>
{:else if data?.status === 'error'}
	<div class="flex min-h-screen flex-col items-center justify-center bg-[#0b0b0b] text-white">
		<p class="text-xl text-#45b2a9">{data.message}</p>
	</div>
{/if} -->
