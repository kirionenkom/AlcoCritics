import prisma from '@/utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function email(req: NextApiRequest, res: NextApiResponse) {
	try {
		let { email } = req.query;
		if (Array.isArray(email)) {
			email = email[0];
		}

		const user = await prisma.user.findUnique({ where: { email: email } });

		const alcohols = await prisma.alcohol.findMany({
			where: { author_id: user?.id },
		});
		const result = [];
		for (let drink of alcohols) {
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
