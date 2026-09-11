<script>
	let { medan, gereja, lee } = $props();
	// Country codes for the phone number combobox
	const countryCodes = [
		{ code: '+1', label: '+1 (US/CA)' },
		{ code: '+31', label: '+31 (NL)' },
		{ code: '+44', label: '+44 (UK)' },
		{ code: '+61', label: '+61 (AU)' },
		{ code: '+62', label: '+62 (ID)' },
		{ code: '+65', label: '+65 (SG)' },
		{ code: '+81', label: '+81 (JP)' },
		{ code: '+82', label: '+82 (KR)' },
		{ code: '+86', label: '+86 (CN)' },
		{ code: '+91', label: '+91 (IN)' },
		{ code: '+234', label: '+234 (NG)' }
	];

	const attendantOptions = [1, 2, 3, 4];

	// Form state (runes)
	let name = $state('');
	let countryCode = $state('+62');
	let phoneNumber = $state('');
	let affiliation = $state('');
	let isAttending = $state('');
	let numAttendantsMdn = $state(0);
	let numAttendantsGrj = $state(0);
	let numAttendantsLee = $state(0);

	let submitted = $state(false);
	let isValid = $state(false);
	let submitSuccess = $state();

	// Raw validity check, recomputed reactively from current field values
	let rawErrors = $derived({
		name: name.trim() === '',
		countryCode: countryCode === '',
		phoneNumber: phoneNumber === '' || phoneNumber === null,
		affiliation: affiliation.trim() === '',
		isAttending: isAttending === '',
		numAttendants:
			isAttending === 'yes' && numAttendantsMdn + numAttendantsGrj + numAttendantsLee < 1
	});

	// Only surface errors once a submit attempt has been made
	let errors = $derived(
		submitted
			? rawErrors
			: {
					name: false,
					countryCode: false,
					phoneNumber: false,
					affiliation: false,
					isAttending: false,
					numAttendants: false
				}
	);

	/**
	 * @param {{ preventDefault: () => void; }} event
	 */
	function handleSubmit(event) {
		event.preventDefault();
		submitted = true;

		isValid = !Object.values(rawErrors).some(Boolean);
		if (isValid) {
			const isAttendingBool = isAttending === 'yes';

			if (!isAttendingBool) {
				numAttendantsMdn = 0;
				numAttendantsGrj = 0;
				numAttendantsLee = 0;
			}

			const userData = {
				name,
				countryCode,
				phoneNumber,
				affiliation,
				numAttendantsMdn,
				numAttendantsGrj,
				numAttendantsLee,
				isAttending: isAttendingBool
			};

			fetch('api', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userData)
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
					return response.json(); // Parses response into JavaScript object
				})
				.then((data) => {
					submitSuccess = true;
					console.log('Success:', data);
				})
				.catch((error) => {
					submitSuccess = false;
					console.error('Error:', error);
				});
		}
	}
</script>

<div class="form-wrapper">
	{#key submitSuccess}
		{#if !submitSuccess}
			<form onsubmit={handleSubmit} novalidate>
				<!-- Name -->
				<div class="field">
					<label for="name">Nama</label>
					<input
						id="name"
						type="text"
						bind:value={name}
						class:error={errors.name}
						placeholder="Masukan nama anda"
					/>
					{#if errors.name}
						<span class="error-text">Nama harus diisi.</span>
					{/if}
				</div>

				<!-- Phone Number -->
				<div class="field">
					<label for="phone">No Telepon</label>
					<div class="phone-row">
						<select id="countryCode" bind:value={countryCode} class:error={errors.countryCode}>
							<option value="" disabled selected>Code</option>
							{#each countryCodes as c (c.code)}
								<option value={c.code}>{c.label}</option>
							{/each}
						</select>
						<input
							id="phone"
							type="number"
							bind:value={phoneNumber}
							class:error={errors.phoneNumber}
							placeholder="No telepon"
							min="0"
						/>
					</div>
					{#if errors.countryCode || errors.phoneNumber}
						<span class="error-text">Kode negara dan No. telepon harus diisi.</span>
					{/if}
				</div>

				<!-- Affiliation -->
				<div class="field">
					<label for="affiliation">Afiliasi / Toko</label>
					<input
						id="affiliation"
						type="text"
						bind:value={affiliation}
						class:error={errors.affiliation}
						placeholder="Afiliasi / Organisasi (Contoh: Unpar)"
					/>
					{#if errors.affiliation}
						<span class="error-text">Afiliasi / nama toko harus diisi. Contoh: Unpar</span>
					{/if}
				</div>

				<!-- Is Attending -->
				<div class="field">
					<span class="group-label">Apakah akan hadir?</span>
					<div class="radio-group" class:error={errors.isAttending}>
						<label class="radio-option">
							<input type="radio" name="isAttending" value="yes" bind:group={isAttending} />
							Iya
						</label>
						<label class="radio-option">
							<input type="radio" name="isAttending" value="no" bind:group={isAttending} />
							Tidak
						</label>
					</div>
					{#if errors.isAttending}
						<span class="error-text">Please select yes or no.</span>
					{/if}
				</div>

				<!-- Number of Attendants -->
				{#key isAttending}
					{#if isAttending == 'yes'}
						<div class="field">
							<p>Jumlah Tamu</p>
							<div class="grid grid-cols-2 items-center gap-y-1 text-left">
								<!-- Medan Attendants -->
								{#if medan}
									<label for="numAttendantsMdn">Selecta Medan: </label>
									<select
										id="numAttendantsMdn"
										bind:value={numAttendantsMdn}
										class:error={errors.numAttendants}
										placeholder="Selecta Medan"
									>
										<option value={0} selected>0</option>
										{#each attendantOptions as n, i (i)}
											<option value={n}>{n}</option>
										{/each}
									</select>
								{/if}
								<!-- Gereja Attendants -->
								{#if gereja}
									<label for="numAttendantsGrj">Holy Matrimony: </label>
									<select
										id="numAttendantsGrj"
										bind:value={numAttendantsGrj}
										class:error={errors.numAttendants}
										placeholder="GKI Samanhudi"
									>
										<option value={0} selected>0</option>
										{#each attendantOptions as n, i (i)}
											<option value={n}>{n}</option>
										{/each}
									</select>
								{/if}
								<!-- Lee Palace Attendants -->
								{#if lee}
									<label for="numAttendantsLee">Lee Palace: </label>
									<select
										id="numAttendantsLee"
										bind:value={numAttendantsLee}
										class:error={errors.numAttendants}
										placeholder="Lee Palace Restaurant"
									>
										<option value={0} selected>0</option>
										{#each attendantOptions as n, i (i)}
											<option value={n}>{n}</option>
										{/each}
									</select>
								{/if}

								{#if errors.numAttendants}
									<span class="error-text col-span-2">Silahkan masukan jumlah tamu.</span>
								{/if}
							</div>
						</div>
					{/if}
				{/key}

				<button type="submit">Kirim</button>
			</form>
		{/if}
	{/key}
	{#if submitted && !isValid}
		<p class="fail-text">Harap mengisi seluruh kolom yang wajib diisi.</p>
	{:else if submitted && !submitSuccess}
		<p class="fail-text">No Telp anda sudah terdaftar.</p>
	{:else if submitted && submitSuccess}
		<p class="success-text">Terima kasih! 感謝光臨</p>
	{/if}
</div>

<style>
	.form-wrapper {
		margin: 2rem auto;
		border-radius: 12px;
		background: #ffffff;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
		padding: 1.5rem 1rem;
		width: 100%;
		font-size: var(--text-sm);
		line-height: var(--text-sm--line-height);

		@media (width < 40rem /* 640px */) {
			font-size: var(--text-3xl);
			line-height: var(--text-3xl--line-height);
			padding: 5rem 2rem;
		}
	}

	option {
		@media (width < 40rem /* 640px */) {
			font-size: var(--text-sm);
			line-height: var(--text-sm--line-height);
		}
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		@media (width < 40rem /* 640px */) {
			gap: 2rem;
		}
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	label,
	.group-label {
		font-weight: 600;
		color: #333;
	}

	input[type='text'],
	input[type='number'],
	select {
		padding: 0.55rem 0.7rem;
		border: 1px solid #cfcfcf;
		border-radius: 8px;
		outline: none;
		background: #fafafa;
		color: #1a1a1a;
		transition:
			border-color 0.15s ease,
			box-shadow 0.15s ease;
		width: 100%;
		box-sizing: border-box;
	}

	input[type='text']:focus,
	input[type='number']:focus,
	select:focus {
		border-color: #6c8cff;
		box-shadow: 0 0 0 3px rgba(108, 140, 255, 0.15);
	}

	.phone-row {
		display: flex;
		gap: 0.5rem;
	}

	.phone-row select {
		flex: 0 0 30%;
	}

	.phone-row input {
		flex: 1;
	}

	.radio-group {
		display: flex;
		gap: 1.25rem;
		padding: 0.4rem 0.5rem;
		border: 1px solid transparent;
		border-radius: 8px;
	}

	.radio-option {
		margin-inline: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 400;
		color: #1a1a1a;
	}

	/* Error state: red border on the offending control */
	input.error,
	select.error {
		border-color: #e02424;
		background: #fff5f5;
	}

	.radio-group.error {
		border-color: #e02424;
		background: #fff5f5;
	}

	.error-text {
		color: #e02424;
	}

	button {
		margin-top: 0.5rem;
		padding: 0.65rem 1rem;
		font-weight: 600;
		color: #fff;
		background: #4a63e7;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: background 0.15s ease;
	}

	button:hover {
		background: #3a50c9;
	}

	.success-text {
		color: #17803d;
		margin: 0.25rem 0 0 0;
	}

	.fail-text {
		color: #e02424;
		margin: 0.25rem 0 0 0;
	}
</style>
