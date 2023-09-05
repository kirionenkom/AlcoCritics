import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/prisma';
import fs from 'fs';

export default async function Id(req: NextApiRequest, res: NextApiResponse) {
	try {
		let { id } = req.query;
		if (Array.isArray(id)) {
			id = id[0];
		}
		const drink = await prisma.alcohol.delete({ where: { id } });
		fs.unlink('public' + drink.image_path, (err: any) => {
			if (err) {
				res.status(500).json('Не удалось удалить изображение');
			}
		});
		res.json(drink);
	} catch (error) {
		res.status(500).json('Something went wrong. Please try again later');
	}
}
