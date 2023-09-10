import { Request, Response } from 'express';
import { put } from '@vercel/blob';

export const runtime = 'edge';

export async function PUT(req: Request, res: Response) {
	const { url } = await put('avatars/user-12345.png', req.body, {
		access: 'public',
	});

	return res.json({ url });
}
