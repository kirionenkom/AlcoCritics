import React from 'react';
import Link from 'next/link';

export default function ProfileButton() {
	return (
		<Link href="/profile">
			<div className="image-button">
				<img src="/images/profile.png" alt="Профиль" className="profile"></img>
			</div>
		</Link>
	);
}
