import React from 'react';

interface User {
	name?: string | null | undefined;
	email?: string | null | undefined;
	image?: string | null | undefined;
}

interface UserProps {
	user: User;
}

export default function User({ user }: UserProps) {
	if (!user.image) {
		return <></>;
	}
	return (
		<>
			<div className="user">
				<img className="avatar" alt="Аватар профиля" src={user.image} />
				<div className="data">
					<h2 className="name">{user.name}</h2>
					<p className="email">{user.email}</p>
				</div>
			</div>
		</>
	);
}
