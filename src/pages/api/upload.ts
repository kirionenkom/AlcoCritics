import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { PersistentFile } from 'formidable';
import fs from 'fs';
require('dotenv').config();

let EasyYandexS3 = require('easy-yandex-s3').default;
let s3 = new EasyYandexS3({
	auth: {
		accessKeyId: process.env.YANDEX_ACCESS_KEY_ID,
		secretAccessKey: process.env.YANDEX_SECRET_ACCESS_KEY,
	},
	Bucket: 'alcocritics', // например, "my-storage",
	debug: true, // Дебаг в консоли, потом можете удалить в релизе
});
export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
	const form = formidable();
	let file;
	form.parse(req, async (err, fields, files) => {
		// @ts-ignore
		file = files.image[0] as File;
		console.log(PersistentFile);
		const srcToFile = (src: string) => fs.readFileSync(src);
		// @ts-ignore
		const buffer = srcToFile(file.filepath);
		const upload = await s3.Upload({ buffer }, '/images/');
		res.json(upload.Location);
	});
	console.log(file);
}
