import multer from 'multer';
import { Request, Response } from 'express';

const fs = require('fs');
const upload = multer({ dest: 'media' });

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function NewDrink(req: Request, res: Response) {
	try {
		upload.single('image')(req, res, (err) => {
			if (err || !req.file) {
				console.error(err);
				return res.status(500).json('Файл не найден');
			}
			const { path } = req.file;
			const pathWithExt = `${path}.jpg`;
			console.log(pathWithExt);
			return res
				.status(200)
				.json(pathWithExt.slice(6, pathWithExt.length).replaceAll('\\', '/'));
		});
	} catch (error) {
		return res.status(500).json('Произошла ошибка при запросе');
	}
}
