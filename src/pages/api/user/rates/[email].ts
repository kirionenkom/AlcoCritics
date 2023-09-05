import prisma from '@/utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function email(req: NextApiRequest, res: NextApiResponse) {
	try {
		let { email } = req.query;
		if (Array.isArray(email)) {
			email = email[0];
		}

		const user = await prisma.user.findUnique({ where: { email: email } });

		const alcoholsRates = await prisma.alcoholRate.findMany({
			where: { user_id: user?.id },
		});

		const result = [];
		for (let rate of alcoholsRates) {
			const drink = await prisma.alcohol.findFirst({
				where: { id: rate.alcohol_id },
			});
			result.push({ ...drink, rate: rate?.value });
		}

		res.end(JSON.stringify(result));
	} catch {
		res.status(500).json('Something went wrong. Please try again later');
	}
}
