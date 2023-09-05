import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/prisma';

export default async function Register(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const data = req.body;

		const user = await prisma.user.create({ data: data });

		res.json(user);
	} catch (error) {
		res.status(500).json('Something went wrong. Please try again later');
	}
}
