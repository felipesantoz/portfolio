import type { PageServerLoad } from './$types';
import fs from 'fs';

export const load: PageServerLoad = () => {
	const dir = 'src/lib/assets/pawprint/';

	const pawprintImageSrcs = fs.readdirSync(dir).map((fileName) => `${dir}${fileName}`);

	return {
		pawprintImageSrcs
	};
};
