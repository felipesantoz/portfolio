import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const imageModules = import.meta.glob('../lib/assets/pawprint/*.{jpg,png}');

	const pawprintImageSrcs = await Promise.all(
		Object.values(imageModules).map(
			async (imageModule) => ((await imageModule()) as { default: string }).default
		)
	);

	return {
		pawprintImageSrcs
	};
};
