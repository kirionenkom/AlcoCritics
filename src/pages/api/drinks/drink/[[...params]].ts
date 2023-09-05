import prisma from '@/utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Params(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { params } = req.query;
		let email, drink_id;
		if (Array.isArray(params)) {
			email = params[0];
			drink_id = params[1];
		}

		const drink = await prisma.alcohol.findUnique({
			where: { id: drink_id },
		});

		const author = await prisma.user.findUnique({
			where: { id: drink?.author_id },
		});

		const rates = await prisma.alcoholRate.findMany({
			where: { alcohol_id: drink?.id },
		});
		const summaryRate =
			rates.reduce((sum, rate) => sum + rate.value, 0) / rates.length;

		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});

		const userRate = await prisma.alcoholRate.findFirst({
			where: { user_id: user?.id, alcohol_id: drink?.id },
		});
		const result = {
			...drink,
			author_image: author?.image_path,
			author_name: author?.name,
			author_email: author?.email,
			rate: summaryRate,
			user_rate: userRate?.value,
		};

		res.end(JSON.stringify(result));
	} catch {
		res.status(500).json('Something went wrong. Please try again later');
	}
}
