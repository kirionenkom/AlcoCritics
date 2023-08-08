import prisma from '@/utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function User_id(
	req: NextApiRequest,
	res: NextApiResponse
) {
	let { user_id } = req.query;
	if (Array.isArray(user_id)) {
		user_id = user_id[0];
	}
	const alcohols = await prisma.alcohol.findMany({
		where: { user_id: user_id },
	});
	res.end(JSON.stringify(alcohols));
}
