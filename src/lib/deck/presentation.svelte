<script lang="ts">
	import '$lib/assets/layout.css';
	import Form from './form.svelte';
</script>

<section data-background-opacity='.4' data-background-image="/assets/bg-3.jpg" data-auto-animate>
	<div class="grid justify-center align-middle">
		<img src="/assets/logo-full-transparent.png" alt="monogram" class="p-10 md:w-150" />
		<button
			class="navigate-next my-12 inline-flex w-1/2 transform cursor-pointer items-center
						 justify-center justify-self-center rounded-3xl bg-(--surface-4) px-4 py-3
						 text-center leading-none font-medium text-white shadow-md transition duration-200
						 hover:bg-black hover:text-white hover:shadow-none max-sm:w-2/3 max-sm:text-5xl sm:px-8"
		>
			Open Invitation
		</button>
	</div>
</section>
<!-- Bride and Groom -->
<section data-background-opacity='.4' data-background-image="/assets/bg-3.jpg" data-auto-animate>
	<div
		class="grid gap-10 grid-cols-1 place-items-center items-center justify-center align-middle sm:grid-cols-2 sm:p-15"
	>
		<img src="/assets/couple-2.JPG" alt="monogram" class="max-h-200" />
		<div class="m-10 justify-center text-center align-middle max-sm:text-4xl">
			<div class="mb-10">
				<p class="text-3xl sm:text-xs italic">
					"For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to
					harm you, plans to give you hope and a future."
				</p>
				<p class="text-3xl sm:text-xs">Jeremiah 29:11</p>
			</div>
			<p class="pb-3 font-(family-name:--font-script-ui) text-3xl max-sm:text-7xl">
				Arif Yunando Sunanhadikusuma
			</p>
			<p>The youngest son of <br /> Mr. Firdaus Yunando Sun & <br> Mrs. Evie Kertarahardja</p>
			<p class="my-5">&</p>
			<p class="pb-3 font-(family-name:--font-script-ui) text-3xl max-sm:text-7xl">
				Cindy Rosemary
			</p>
			<p>The eldest daughter of <br /> Mr. Rosissan & Mrs. Mai Jani</p>
		</div>
	</div>
</section>
<!-- Selecta Invitations -->
<section data-background-opacity='.4' data-background-image="/assets/bg-3.jpg" data-auto-animate>
	<div class="grid h-full w-full items-center justify-center p-15 align-middle">
		<p class="mb-10 font-(family-name:--font-script-ui) text-9xl sm:text-6xl">Engagement Banquet</p>
		<div class="grid justify-self-center text-center sm:w-100">
			<p class="my-5 text-5xl sm:text-2xl">Selecta Hotel Ballroom (3rd Floor)</p>
			<p class="my-5">Jl. Listrik No.2, Kota Medan</p>
			<p>Sunday, 4 October 2026</p>
			<p>18:30 WIB</p>
		</div>
		<button
			class="my-12 inline-flex w-1/2 transform cursor-pointer items-center
						 justify-center justify-self-center rounded-3xl bg-(--surface-4) px-4 py-3
						 text-center leading-none font-medium text-white shadow-md transition
						 duration-200 hover:bg-black hover:text-white hover:shadow-none max-sm:w-2/3 sm:px-8"
		>
			Location
		</button>
	</div>
</section>
<!-- Church Invitations -->
<section data-background-opacity='.4' data-background-image="/assets/bg-3.jpg" data-auto-animate>
	<div class="grid h-full w-full items-center justify-center p-15 align-middle">
		<p class="mb-10 font-(family-name:--font-script-ui) text-9xl sm:text-6xl">Holy Matrimony</p>
		<div class="grid justify-self-center text-center sm:w-100">
			<p class="my-5 text-5xl sm:text-2xl">GKI Samanhudi</p>
			<p class="my-5">
				Jl. Samanhudi 28, Pasar Baru <br /> Sawah Besar, Jakarta Pusat
			</p>
			<p>Saturday, 10 October 2026</p>
			<p>10:00 WIB</p>
		</div>
		<button
			class="my-12 inline-flex w-1/2 transform cursor-pointer items-center
						 justify-center justify-self-center rounded-3xl bg-(--surface-4) px-4 py-3
						 text-center leading-none font-medium text-white shadow-md transition
						 duration-200 hover:bg-black hover:text-white hover:shadow-none max-sm:w-2/3 sm:px-8"
		>
			Location
		</button>
	</div>
</section>
<!-- Lee Palace Invitations -->
<section data-background-opacity='.4' data-background-image="/assets/bg-3.jpg" data-auto-animate>
	<div class="grid h-full w-full items-center justify-center p-15 align-middle">
		<p class="mb-10 font-(family-name:--font-script-ui) text-9xl sm:text-6xl">Wedding Banquet</p>
		<div class="grid justify-self-center text-center sm:w-100">
			<p class="my-5 text-5xl sm:text-2xl">Lee Palace Restaurant</p>
			<p class="mt-5 mb-3">Harmoni Exchange Mall Lt. 3</p>
			<p class="mb-5">Jl. Hayam Wuruk VI No. 6, Gambir, Jakarta Pusat</p>
			<p>Sunday, 11 October 2026</p>
			<p>18:30 WIB</p>
		</div>
		<button
			class="my-12 inline-flex w-1/2 transform cursor-pointer items-center
						 justify-center justify-self-center rounded-3xl bg-(--surface-4) px-4 py-3
						 text-center leading-none font-medium text-white shadow-md transition
						 duration-200 hover:bg-black hover:text-white hover:shadow-none max-sm:w-2/3 sm:px-8"
		>
			Location
		</button>
	</div>
</section>

<!-- Chinese Invitations (Selecta) -->
<section data-background-opacity='.4' data-background-image="/assets/bg-3.jpg" data-auto-animate>
	<div class="hidden sm:grid h-full w-full justify-center align-middle">
		<img src="/assets/chinese-invitations-mdn.png" alt="monogram" class="p-10" />
	</div>
	<div class="chinese-invitations grid sm:hidden">
		<img src="/assets/chinese-invitations-mdn-vert.png" alt="monogram"/>
	</div>
</section>
<!-- Chinese Invitations (Lee Palace) -->
<section data-background-opacity='.4' data-background-image="/assets/bg-3.jpg" data-auto-animate>
	<div class="hidden sm:grid h-full w-full justify-center align-middle">
		<img src="/assets/chinese-invitations-jkt.png" alt="monogram" class="p-10" />
	</div>
	<div class="chinese-invitations grid sm:hidden">
		<img src="/assets/chinese-invitations-jkt-vert.png" alt="monogram"/>
	</div>
</section>
<!-- RSVP -->
<section data-background-opacity='.4' data-background-image="/assets/bg-3.jpg" data-auto-animate>
	<div class="grid w-full h-full justify-center align-middle">
		<p class="mb-5 font-(family-name:--font-script-ui) text-9xl sm:text-6xl">Seat Reservations</p>
		<Form />
	</div>
</section>
<!-- Closing + Wedding Gift -->
<section data-background-opacity='.4' data-background-image="/assets/bg-3.jpg" data-auto-animate>
	<div class="grid justify-center align-middle">
		<p class="font-(family-name:--font-script-ui) text-9xl sm:text-7xl">Thank You</p>
	</div>
</section>
