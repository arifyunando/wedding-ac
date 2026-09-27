<script lang="ts">
	import '$lib/assets/reveal-custom.css';
	import Form from './form.svelte';
	let { medan, gereja, lee, name } = $props();
</script>

<section data-background-opacity=".25" data-background-image="/assets/bg-6.jpg" data-auto-animate>
	<div class="flex h-dvh flex-col items-center justify-center pt-10">
		<img src="/assets/logo-full-transparent.png" alt="monogram" class="p-10 md:w-150" />
		<button
			class="navigate-next mb-12 inline-flex w-1/2 transform cursor-pointer items-center
						 justify-center justify-self-center rounded-3xl bg-(--surface-4) px-4 py-3
						 text-center leading-none font-medium text-white shadow-md transition duration-200
						 hover:bg-black hover:text-white hover:shadow-none max-sm:w-2/3 sm:px-8"
		>
			Open Invitation
		</button>
	</div>
</section>
<!-- Bride and Groom -->
{#if !medan}
	<section data-background-opacity=".25" data-background-image="/assets/bg-6.jpg" data-auto-animate>
		<div
			class="relative flex h-dvh flex-col-reverse place-items-center items-center justify-center gap-2 p-5 align-middle sm:flex-row sm:gap-10 sm:p-15"
		>
			<div class="min-w-1/2 justify-center text-center align-middle sm:m-10">
				<div class="mb-5">
					<p class="text-xs italic sm:text-sm">
						"For I know the plans I have for you,” declares the Lord, <br /> “plans to prosper you and
						not to harm you, plans to give you hope and a future."
					</p>
					<p class="text-xs sm:text-sm">- Jeremiah 29:11</p>
				</div>
				<p class="pb-3 font-(family-name:--font-script-ui) text-3xl">
					Arif Yunando Sunanhadikusuma
				</p>
				<p>Putra bungsu dari <br /> Tn. Firdaus Yunando Sun & <br /> Ny. Evie Kertarahardja</p>
				<p class="my-5">&</p>
				<p class="pb-3 font-(family-name:--font-script-ui) text-3xl">Cindy Rosemary</p>
				<p>Putri sulung dari <br /> Tn. Rosissan & Ny. Mai Jani</p>
			</div>
			<div
				class="flex grow items-center justify-center overflow-hidden object-contain align-middle"
			>
				<img src="/assets/couple-2.JPG" alt="monogram" class="" />
			</div>
		</div>
	</section>
	<section data-background-opacity=".25" data-background-image="/assets/bg-6.jpg" data-auto-animate>
		<div class="grid h-dvh w-full items-center justify-center p-15 align-middle">
			<p class="mb-10 font-(family-name:--font-script-ui) text-6xl">Engagement Banquet</p>
			<div class="grid justify-self-center text-center sm:w-100">
				<p class="my-5 text-2xl">Selecta Hotel Ballroom (Lantai 3)</p>
				<p class="my-2">Jl. Listrik No.2, Kota Medan</p>
				<p class="my-1">Minggu, 4 Oktober 2026</p>
				<p>19:00 WIB</p>
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

<!-- Selecta Invitations -->
{#if medan}
	<section data-background-opacity=".25" data-background-image="/assets/bg-6.jpg" data-auto-animate>
		<div
			class="relative flex h-dvh flex-col-reverse place-items-center items-center
			       justify-center gap-2 p-5 align-middle sm:flex-row sm:gap-10 sm:p-15"
		>
			<!-- <div class="grid h-full sm:grid-cols-3 sm:grid-rows-3 gap-5 p-5"> -->
			<img
				src="/assets/couple-2.JPG"
				alt="monogram"
				class="row-span-3 h-full w-full object-contain object-center"
			/>
			<!-- <img src="/assets/couple-1.JPG" alt="monogram" class="max-sm:hidden row-start-2 row-span-2 w-full h-full object-cover object-center" /> -->
			<!-- <img src="/assets/couple-3.JPG" alt="monogram" class="max-sm:hidden row-span-2 w-full h-full object-cover object-center" /> -->
			<!-- <img src="/assets/couple-4.JPG" alt="monogram" class="w-full object-cover" /> -->
			<!-- </div> -->
		</div>
	</section>

	<section data-background-opacity=".25" data-background-image="/assets/bg-6.jpg" data-auto-animate>
		<div
			class="grid h-dvh w-full items-center justify-center p-5 align-middle text-xs sm:p-15 sm:text-base"
		>
			<div class="justify-center text-center align-middle sm:m-10">
				<div class="mb-6">
					<p>
						Dengan hormat kami mengundang Bapak/Ibu/Saudara/I untuk menghadiri acara pertunangan
						putra - putri kami:
					</p>
				</div>
				<p class="pb-3 font-(family-name:--font-script-ui) text-xl sm:text-3xl">Cindy Rosemary</p>
				<p>
					Putri sulung dari Tn. Rosissan & Ny. Mai Jani <br /> (PT Buana Trussindo Mandiri)
				</p>
				<p class="my-5">&</p>
				<p class="pb-3 font-(family-name:--font-script-ui) text-xl sm:text-3xl">
					Arif Yunando Sunanhadikusuma
				</p>
				<p>Putra bungsu dari <br /> Tn. Firdaus Yunando Sun & Ny. Evie Kertarahardja</p>
				<div class="mt-5 grid grid-cols-2 gap-5 justify-self-center text-center sm:gap-10">
					<div>
						<p class="my-2 font-bold sm:text-xl">Pertunangan</p>
						<hr />
						<p class="mt-2 font-semibold sm:text-lg">Selecta Hotel Ballroom (Lantai 3)</p>
						<p class="mb-2">Jl. Listrik No.2, Kota Medan</p>
						<p class="mt-2 font-semibold sm:text-lg">Minggu, 4 Oktober 2026</p>
						<p class="mb-2">Pukul 19:00 WIB</p>
						<a href="https://maps.app.goo.gl/mXnu6nMHKoHURytAA" target="_blank">
							<button
								class="my-5 inline-flex w-2/3 transform cursor-pointer items-center
						 justify-center justify-self-center rounded-3xl bg-(--surface-4) px-4 py-3
						 text-center leading-none font-medium text-white shadow-md transition
						 duration-200 hover:bg-black hover:text-white hover:shadow-none max-sm:w-2/3 sm:px-8"
							>
								Location
							</button>
						</a>
					</div>
					<div class="">
						<p class="my-2 font-bold sm:text-xl">Pemberkatan</p>
						<hr />
						<p class="mt-2 font-semibold sm:text-lg">GKI Samanhudi</p>
						<p class="mb-2">Jl. Samanhudi No. 28, Jakarta Pusat</p>
						<p class="mt-2 font-semibold sm:text-lg">Sabtu, 10 Oktober 2026</p>
						<p class="mb-2">Pukul 10:00 WIB</p>

						<a href="https://maps.app.goo.gl/N9J1MARFVP3AgoyD8" target="_blank">
							<button
								class="my-5 inline-flex w-2/3 transform cursor-pointer items-center
						 justify-center justify-self-center rounded-3xl bg-(--surface-4) px-4 py-3
						 text-center leading-none font-medium text-white shadow-md transition
						 duration-200 hover:bg-black hover:text-white hover:shadow-none max-sm:w-2/3 sm:px-8"
							>
								Location
							</button>
						</a>
					</div>
				</div>

				<div class="grid grid-cols-2 justify-self-center text-center sm:w-150">
					<div class="col-span-2 my-5">Kami yang berbahagia</div>
					<div>
						<p class="text-xs font-bold sm:text-sm">Pihak Wanita</p>
						<p class="text-xs sm:text-sm">Tn. Cau Kok Sen/Rosissan</p>
						<p class="text-xs sm:text-sm">Ny. Huang Mei Yong/Mai Jani</p>
					</div>
					<div>
						<p class="text-xs font-bold sm:text-sm">Pihak Pria</p>
						<p class="text-xs sm:text-sm">Tn. Sun Yun Fong/Firdaus Y</p>
						<p class="text-xs sm:text-sm">Ny. Li Hui Chen/Evie K</p>
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}
<!-- Church Invitations -->
{#if gereja}
	<section data-background-opacity=".25" data-background-image="/assets/bg-6.jpg" data-auto-animate>
		<div class="grid h-dvh w-full items-center justify-center p-15 align-middle">
			<p class="mb-10 font-(family-name:--font-script-ui) text-6xl">Holy Matrimony</p>
			<div class="grid justify-self-center text-center sm:w-100">
				<p class="my-5 text-2xl">GKI Samanhudi</p>
				<p class="my-2">
					Jl. Samanhudi 28, Pasar Baru <br /> Sawah Besar, Jakarta Pusat
				</p>
				<p class="my-1">Sabtu, 10 Oktober 2026</p>
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
	<section data-background-opacity=".25" data-background-image="/assets/bg-6.jpg" data-auto-animate>
		<div class="grid h-dvh w-full items-center justify-center p-15 align-middle">
			<p class="mb-10 font-(family-name:--font-script-ui) text-6xl">Wedding Banquet</p>
			<div class="grid justify-self-center text-center sm:w-100">
				<p class="my-5 text-2xl">Lee Palace Restaurant</p>
				<p class="mt-5 mb-3">Harmoni Exchange Mall Lt. 3</p>
				<p class="mb-2">Jl. Hayam Wuruk VI No. 6, Gambir, Jakarta Pusat</p>
				<p class="my-1">Minggu, 11 Oktober 2026</p>
				<p class="mb-8">18:30 WIB</p>
				<p class="text-xs font-semibold italic">Format Acara</p>
				<p class="text-xs italic">
					Acara akan berupa makan meja bersama, dilengkapi dengan hidangan dan minuman. Silakan
					hadir tepat waktu dan nikmati malam bersama kami.
				</p>
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
	<section data-background-opacity=".25" data-background-image="/assets/bg-6.jpg" data-auto-animate>
		<div class="hidden h-dvh w-full justify-center align-middle sm:grid">
			<img src="/assets/chinese-invitations-mdn.png" alt="monogram" class="object-contain p-5" />
		</div>
		<div class="chinese-invitations grid sm:hidden">
			<img src="/assets/chinese-invitations-mdn-vert.png" alt="monogram" />
		</div>
	</section>
{:else}
	<!-- Chinese Invitations (Lee Palace) -->
	<section data-background-opacity=".25" data-background-image="/assets/bg-6.jpg" data-auto-animate>
		<div class="hidden h-dvh w-full justify-center align-middle sm:grid">
			<img src="/assets/chinese-invitations-jkt.png" alt="monogram" class="p-5" />
		</div>
		<div class="chinese-invitations grid sm:hidden">
			<img src="/assets/chinese-invitations-jkt-vert.png" alt="monogram" />
		</div>
	</section>
{/if}

<!-- RSVP -->
{#if !medan}
	<section data-background-opacity=".25" data-background-image="/assets/bg-6.jpg" data-auto-animate>
		<div class="flex h-dvh w-full flex-col justify-center p-5 align-middle">
			<p class="mt-3 font-(family-name:--font-script-ui) text-6xl">Seat Reservations</p>
			<Form {medan} {gereja} {lee} nameParam={name} />
		</div>
	</section>
{/if}

<!-- Closing + Wedding Gift -->
<section data-background-opacity=".25" data-background-image="/assets/bg-6.jpg" data-auto-animate>
	<div class="flex h-[90dvh] flex-col items-center justify-center gap-5 my-10">
		<div class="flex grow items-center justify-center" >
			<p class="font-(family-name:--font-script-ui) text-7xl">
				Thank You
			</p>
		</div>
		{#if !medan}
			<button
				class="navigate-next inline-flex w-80 transform cursor-pointer items-center justify-center
						 justify-self-center rounded-3xl bg-(--surface-4) px-3 py-2 text-center
						 text-xs leading-none font-medium text-white shadow-md transition duration-200
						 hover:bg-black hover:text-white hover:shadow-none max-sm:w-2/3 sm:px-8"
			>
				Sending a wedding gift?
			</button>
		{/if}
	</div>
</section>

{#if !medan}
	<section data-background-opacity=".25" data-background-image="/assets/bg-6.jpg" data-auto-animate>
		<div class="flex h-dvh w-full flex-col justify-center gap-10 p-5 align-middle">
			<p class="font-(family-name:--font-script-ui) text-7xl">Wedding Gift</p>
			<div>
				<p class="m-5">We appreciate your wedding gift. 😊</p>
				<br />
				<p class="m-5">Monetary Gift</p>

				<p class="m-3">
					EUR: <span class="font-semibold text-blue-800 hover:underline"
						><a href="https://tikkie.me/pay/5heokf32akoken70cu8a" target="_blank">Tikkie</a></span
					>
					(NL only) / IBAN <b>NL75 INGB 0398 4364 52</b> (Swiftcode: INGBNL2A)
				</p>
				<p class="m-3">
					IDR: <b>BCA 3420133161</b> a/n Arif Yunando Sunanhadikusuma
				</p>
			</div>
		</div>
	</section>
{/if}

<style>
	section {
		max-width: 1280px;
		justify-self: center;
	}
</style>
