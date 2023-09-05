import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/prisma';

export default async function Updaterate(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { drink, newRate, email } = req.body;
		const user = await prisma.user.findUnique({
			where: { email: email },
		});
		const alcoholRate = await prisma.alcoholRate.findFirst({
			where: { user_id: user?.id, alcohol_id: drink.id },
		});
		if (alcoholRate) {
			await prisma.alcoholRate.update({
				where: { id: alcoholRate?.id },
				data: { value: newRate },
			});
		} else {
			if (user) {
				await prisma.alcoholRate.create({
					data: {
						user_id: user?.id,
						alcohol_id: drink.id,
						value: newRate,
					},
				});
			}
		}

		res.json({ ...drink, user_rate: newRate });
	} catch (error) {
		res.status(500).json('Something went wrong. Please try again later');
	}
}
