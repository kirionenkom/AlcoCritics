import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/prisma';

export default async function Updatedrink(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { email, alcohol_id, rate } = req.body;

		const user = await prisma.user.findUnique({ where: { email: email } });

		const alcoholRate = await prisma.alcoholRate.findFirst({
			where: { user_id: user?.id, alcohol_id: alcohol_id },
		});

		const drink = await prisma.alcoholRate.update({
			where: { id: alcoholRate?.id },
			data: { value: rate },
		});

		res.json(drink);
	} catch (error) {
		res.status(500).json('Something went wrong. Please try again later');
	}
}
