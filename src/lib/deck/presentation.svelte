<script lang="ts">
	import '$lib/assets/reveal-custom.css';
	import Form from './form.svelte';
	let { medan, gereja, lee } = $props();
</script>

<section data-background-opacity=".4" data-background-image="/assets/bg-3.jpg" data-auto-animate>
	<div class="flex h-dvh flex-col items-center justify-center pt-10">
		<img src="/assets/logo-full-transparent.png" alt="monogram" class="p-10 md:w-150" />
		<button
			class="navigate-next my-12 inline-flex w-1/2 transform cursor-pointer items-center
						 justify-center justify-self-center rounded-3xl bg-(--surface-4) px-4 py-3
						 text-center leading-none font-medium text-white shadow-md transition duration-200
						 hover:bg-black hover:text-white hover:shadow-none max-sm:w-2/3 sm:px-8"
		>
			Open Invitation
		</button>
	</div>
</section>
<!-- Bride and Groom -->
<section data-background-opacity=".4" data-background-image="/assets/bg-3.jpg" data-auto-animate>
	<div
		class="relative flex h-dvh flex-col-reverse place-items-center items-center justify-center gap-2 p-5 align-middle sm:flex-row sm:gap-10 sm:p-15"
	>
		<div class="justify-center text-center align-middle sm:m-10">
			<div class="mb-10">
				<p class="text-xs italic">
					"For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to
					harm you, plans to give you hope and a future."
				</p>
				<p class="text-xs">Jeremiah 29:11</p>
			</div>
			<p class="pb-3 font-(family-name:--font-script-ui) text-3xl">Arif Yunando Sunanhadikusuma</p>
			<p>The youngest son of <br /> Mr. Firdaus Yunando Sun & <br /> Mrs. Evie Kertarahardja</p>
			<p class="my-5">&</p>
			<p class="pb-3 font-(family-name:--font-script-ui) text-3xl">Cindy Rosemary</p>
			<p>The eldest daughter of <br /> Mr. Rosissan & Mrs. Mai Jani</p>
		</div>
		<img src="/assets/couple-2.JPG" alt="monogram" class="flex-1 overflow-hidden" />
	</div>
</section>
<!-- Selecta Invitations -->
{#if medan}
	<section data-background-opacity=".4" data-background-image="/assets/bg-3.jpg" data-auto-animate>
		<div class="grid h-dvh w-full items-center justify-center p-15 align-middle">
			<p class="mb-10 font-(family-name:--font-script-ui) text-6xl">Engagement Banquet</p>
			<div class="grid justify-self-center text-center sm:w-100">
				<p class="my-5 text-2xl">Selecta Hotel Ballroom (3rd Floor)</p>
				<p class="my-5">Jl. Listrik No.2, Kota Medan</p>
				<p>Sunday, 4 October 2026</p>
				<p>19:00 WIB</p>
			</div>
			<div class="grid justify-self-center text-center sm:w-100">
				<p class="">Upacara penjemputan mempelai wanita dan Ibadah Pemberkatan Pernikahan</p>
				<p class="">akan diselenggarakan pada 10 Oktober 2026 di Jakarta</p>
			</div>
			<a href="https://maps.app.goo.gl/mXnu6nMHKoHURytAA" target="_blank">
				<button
					class="my-12 inline-flex w-1/2 transform cursor-pointer items-center
						 justify-center justify-self-center rounded-3xl bg-(--surface-4) px-4 py-3
						 text-center leading-none font-medium text-white shadow-md transition
						 duration-200 hover:bg-black hover:text-white hover:shadow-none max-sm:w-2/3 sm:px-8"
				>
					Location
				</button>
			</a>
		</div>
	</section>
{/if}
<!-- Church Invitations -->
{#if gereja}
	<section data-background-opacity=".4" data-background-image="/assets/bg-3.jpg" data-auto-animate>
		<div class="grid h-dvh w-full items-center justify-center p-15 align-middle">
			<p class="mb-10 font-(family-name:--font-script-ui) text-6xl">Holy Matrimony</p>
			<div class="grid justify-self-center text-center sm:w-100">
				<p class="my-5 text-2xl">GKI Samanhudi</p>
				<p class="my-5">
					Jl. Samanhudi 28, Pasar Baru <br /> Sawah Besar, Jakarta Pusat
				</p>
				<p>Saturday, 10 October 2026</p>
				<p>10:00 WIB</p>
			</div>
			<a href="https://maps.app.goo.gl/N9J1MARFVP3AgoyD8" target="_blank">
				<button
					class="my-12 inline-flex w-1/2 transform cursor-pointer items-center
						 justify-center justify-self-center rounded-3xl bg-(--surface-4) px-4 py-3
						 text-center leading-none font-medium text-white shadow-md transition
						 duration-200 hover:bg-black hover:text-white hover:shadow-none max-sm:w-2/3 sm:px-8"
				>
					Location
				</button>
			</a>
		</div>
	</section>
{/if}
<!-- Lee Palace Invitations -->
{#if lee}
	<section data-background-opacity=".4" data-background-image="/assets/bg-3.jpg" data-auto-animate>
		<div class="grid h-dvh w-full items-center justify-center p-15 align-middle">
			<p class="mb-10 font-(family-name:--font-script-ui) text-6xl">Wedding Banquet</p>
			<div class="grid justify-self-center text-center sm:w-100">
				<p class="my-5 text-2xl">Lee Palace Restaurant</p>
				<p class="mt-5 mb-3">Harmoni Exchange Mall Lt. 3</p>
				<p class="mb-5">Jl. Hayam Wuruk VI No. 6, Gambir, Jakarta Pusat</p>
				<p>Sunday, 11 October 2026</p>
				<p>18:30 WIB</p>
			</div>
			<a href="https://maps.app.goo.gl/2ZwpGuFbSueqRejw7" target="_blank">
				<button
					class="my-12 inline-flex w-1/2 transform cursor-pointer items-center
						 justify-center justify-self-center rounded-3xl bg-(--surface-4) px-4 py-3
						 text-center leading-none font-medium text-white shadow-md transition
						 duration-200 hover:bg-black hover:text-white hover:shadow-none max-sm:w-2/3 sm:px-8"
				>
					Location
				</button>
			</a>
		</div>
	</section>
{/if}

<!-- Chinese Invitations (Selecta) -->
{#if medan}
	<section data-background-opacity=".4" data-background-image="/assets/bg-3.jpg" data-auto-animate>
		<div class="hidden h-dvh w-full justify-center align-middle sm:grid">
			<img src="/assets/chinese-invitations-mdn.png" alt="monogram" class="p-10" />
		</div>
		<div class="chinese-invitations grid sm:hidden">
			<img src="/assets/chinese-invitations-mdn-vert.png" alt="monogram" />
		</div>
	</section>
{:else}
	<!-- Chinese Invitations (Lee Palace) -->
	<section data-background-opacity=".4" data-background-image="/assets/bg-3.jpg" data-auto-animate>
		<div class="hidden h-dvh w-full justify-center align-middle sm:grid">
			<img src="/assets/chinese-invitations-jkt.png" alt="monogram" class="p-10" />
		</div>
		<div class="chinese-invitations grid sm:hidden">
			<img src="/assets/chinese-invitations-jkt-vert.png" alt="monogram" />
		</div>
	</section>
{/if}

<!-- RSVP -->
{#if !medan}
	<section data-background-opacity=".4" data-background-image="/assets/bg-3.jpg" data-auto-animate>
		<div class="flex h-dvh w-full flex-col justify-center p-5 align-middle">
			<p class="mt-3 font-(family-name:--font-script-ui) text-6xl">Seat Reservations</p>
			<Form {medan} {gereja} {lee} />
		</div>
	</section>
{/if}

<!-- Closing + Wedding Gift -->
<section data-background-opacity=".4" data-background-image="/assets/bg-3.jpg" data-auto-animate>
	<div class="grid h-dvh items-center justify-center">
		<p class="font-(family-name:--font-script-ui) text-7xl">Thank You</p>
	</div>
</section>

<style>
	section {
		max-width: 1280px;
		justify-self: center;
	}
</style>
