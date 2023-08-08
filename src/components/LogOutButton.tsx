import React from 'react';
import { signOut } from 'next-auth/react';

export default function LogOutButton() {
	return (
		<img
			src="/images/logout.png"
			alt="Логаут"
			className="logout-image"
			onClick={() => signOut({ callbackUrl: '/' })}
		/>
	);
}
