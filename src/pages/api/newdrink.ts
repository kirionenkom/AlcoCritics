import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/prisma';

export default async function NewDrink(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const data = req.body;

		const author = await prisma.user.findUnique({
			where: { email: data.email },
		});

		let drink;
		if (data.id) {
			drink = await prisma.alcohol.update({
				where: { id: '3' },
				data: {
					title: data?.title,
					taste: data?.taste,
					price: data?.price,
					type: data?.type,
					image_path: data?.image_path,
					description: data?.description,
				},
			});
		} else {
			if (author) {
				drink = await prisma.alcohol.create({
					data: {
						author_id: author?.id,
						title: data?.title,
						taste: data?.taste,
						price: data?.price,
						type: data?.type,
						image_path: data?.image_path,
						description: data?.description,
					},
				});
				await prisma.alcoholRate.create({
					data: {
						alcohol_id: drink.id,
						user_id: author.id,
						value: data.rate,
					},
				});
			}
		}

		res.json(drink);
	} catch (error) {
		res.status(500).json('Something went wrong. Please try again later');
	}
}
