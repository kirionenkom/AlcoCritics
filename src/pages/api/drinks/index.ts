import prisma from '@/utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function User_id(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const drinks = await prisma.alcohol.findMany();

		const result = [];
		for (let drink of drinks) {
			const rates = await prisma.alcoholRate.findMany({
				where: { alcohol_id: drink.id },
			});
			const summaryRate =
				rates.reduce((sum, rate) => sum + rate.value, 0) / rates.length;
			result.push({ ...drink, rate: summaryRate });
		}

		res.end(JSON.stringify(result));
	} catch {
		res.status(500).json('Something went wrong. Please try again later');
	}
}
