import prisma from '@/utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Drink_id(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { params } = req.query;
		let email, alcohol_id;
		if (Array.isArray(params)) {
			email = params[0];
			alcohol_id = params[1];
		}

		const user = await prisma.user.findFirst({
			where: {
				email: email,
			},
		});

		const userRate = await prisma.alcoholRate.findFirst({
			where: { user_id: user?.id, alcohol_id: alcohol_id },
		});

		res.end(JSON.stringify(userRate?.value));
	} catch {
		res.status(500).json('Something went wrong. Please try again later');
	}
}
