import React from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function LogInButton() {
	const router = useRouter();
	return (
		<img
			src="/images/login.png"
			alt="Логаут"
			className="login-image"
			onClick={async () => await router.push('/signin')}
		/>
	);
}
