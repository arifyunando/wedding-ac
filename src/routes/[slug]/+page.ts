// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ssr = false;

export async function load({ params, url }: any) {
	const status = {
		slug: params.slug,
		isValid: false,
		medan: false,
		gereja: false,
		leePalace: false,
		name: url.searchParams.get("name")
	};

	if (params.slug == 'medan') {
		status.isValid = true;
		status.medan = true;
	}

	else if (params.slug == 'resepsi') {
		status.isValid = true;
		status.gereja = true;
		status.leePalace = true;
	}

	return status;
}
