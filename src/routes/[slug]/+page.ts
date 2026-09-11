// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ssr = false;

export async function load({ params }: any) {
	const status = {
		isValid: false,
		medan: false,
		gereja: false,
		leePalace: false
	};

	if (params.slug == 'medan') {
		status.isValid = true;
		status.medan = true;
	}

	return status;
}
