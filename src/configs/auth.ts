import type { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prisma from '@/utils/prisma';

export const authConfig: AuthOptions = {
	providers: [
		Credentials({
			credentials: {
				email: { label: 'Email', type: 'email', required: true },
				password: { label: 'Password', type: 'password', required: true },
			},
			async authorize(credentials) {
				console.log(credentials);
				if (!credentials?.email || !credentials.password) {
					return null;
				}
				const user = await prisma.user.findFirst({
					where: { email: credentials.email },
				});
				if (user && user.password === credentials.password) {
					const { id, email, name, image_path } = user;
					return {
						id: id,
						name: name,
						email: email,
						image: image_path,
					} as User;
				}
				return null;
			},
		}),
	],
	pages: {
		signIn: '/signin',
	},
};
