<script lang="ts">
	import { enhance } from '$app/forms';
	import logo from '$assets/logo.svg';
	import linkedin from '$assets/linkedin.svg';
	import instagram from '$assets/instagram.svg';

	let { form } = $props();
</script>

<div class="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
	<h1 class="mb-8 text-center text-3xl font-bold text-[#45b2a9]">Treasure Hunt</h1>

	{#if form?.message}
		<div
			class="mb-4 rounded p-3 text-center text-lg font-bold"
			class:bg-green-600={form?.success}
			class:text-white={form?.success}
			class:bg-red-500={!form?.success}
			class:animate-bounce={!form?.success}
		>
			{form.message}
		</div>
	{/if}

	{#if form?.success && form?.nextClue}
		<div class="my-6 rounded-md bg-gray-700 p-4 text-center">
			<h3 class="mb-2 text-xl font-bold text-[#45b2a9]">Next Clue:</h3>
			<p class="text-lg whitespace-pre-wrap">{form.nextClue}</p>

			<h3 class="text-#45b2a9 mb-2 text-xl font-bold">Please Remember This!!</h3>
		</div>
	{:else if !form?.success || (form?.success && !form?.nextClue)}
		<form
			method="POST"
			use:enhance
			class="mx-auto mt-8 max-w-md rounded-md bg-gradient-to-r from-neutral-300 to-stone-400 p-6 shadow-lg"
		>
			<input
				type="text"
				name="teamcode"
				placeholder="Team Code"
				required
				class="mb-2 w-full rounded p-2 text-black"
			/>
			<input
				type="text"
				name="locationcode"
				placeholder="Location Code"
				required
				class="mb-2 w-full rounded p-2 text-black"
			/>
			<input
				type="text"
				name="cluescode"
				placeholder="Clue Code"
				required
				class="mb-2 w-full rounded p-2 text-black"
			/>

			<div class="flex justify-center">
				<button
					type="submit"
					class="m-8 w-full max-w-[150px] cursor-pointer rounded-md border-none bg-[#45b2a9] p-2 text-[1.05rem] font-bold text-black transition-colors duration-300 ease-in-out hover:bg-[#368981] sm:p-1"
				>
					Submit
				</button>
			</div>
		</form>
	{/if}
</div>

<footer class="bg-[#0b0b0b] px-4 py-8 text-center text-white sm:px-6 sm:py-10">
	<div class="flex flex-col items-center gap-4 px-4 sm:px-6 md:px-8 lg:px-10">
		<!-- <img src={logo} alt="Cipher Logo" class="h-auto w-[120px]" /> -->

		<div
			class="flex h-6 h-6 w-6 w-6 transform gap-[1.2rem] brightness-0 brightness-0 invert invert filter filter transition-transform transition-transform duration-300 duration-300 ease-in-out ease-in-out hover:scale-125"
		>
			<a
				href="https://www.linkedin.com/in/anuragsaud//"
				target="_blank"
				rel="noopener"
				aria-label="LinkedIn"
			>
				<img src={linkedin} alt="LinkedIn" />
			</a>
			<a
				href="https://www.instagram.com/just_anuragsaud/"
				target="_blank"
				rel="noopener"
				aria-label="Instagram"
			>
				<img src={instagram} alt="Instagram" />
			</a>
		</div>
	</div>

	<div class="mt-4 text-sm text-gray-400">
		<p>
			© {new Date().getFullYear()} <span class="text-#45b2a9"> </span> All rights reserved.
		</p>
		<p>
			Website made by <a href="https://anuragsaud.com/" target="_blank"
				><span class="text-[#45b2a9]">Anurag Saud</span></a
			>
		</p>
	</div>
</footer>
