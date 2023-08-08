import type { AuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
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
					const { id, email } = user;
					return { name: id, email: email } as User;
				}
				return null;
			},
		}),
	],
	pages: {
		signIn: '/signin',
	},
};
