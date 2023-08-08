import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/prisma';

export default async function Register(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const data = req.body;

		const user = await prisma.user.create({ data: data });
		if (!user) {
			res.status(500).json('Не удалось создать пользователя');
		}
		res.json(user);
	} catch (error) {
		res.status(500).json('Произошла ошибка при запросе');
	}
}
