import React from 'react';
import User from '@/components/User';
import Link from 'next/link';
import Layout from '@/components/layout/layout';
import { useUser } from '@/utils/hooks';

export default function Index() {
	const user = useUser();
	return (
		<Layout title="Профиль">
			<User user={user ?? {}} />
			<div className="categories">
				<Link href="/profile/drinks" style={{ textDecoration: 'none' }}>
					<div className="category">
						<img src="/images/drinks.png" />
						<p className="title">Мои напитки</p>
					</div>
				</Link>
				<Link href="/profile/newdrink" style={{ textDecoration: 'none' }}>
					<div className="category newdrink">
						<img src="/images/newdrink.png" />
						<p className="title">Новый напиток</p>
					</div>
				</Link>
				<Link href="/profile/rates" style={{ textDecoration: 'none' }}>
					<div className="category">
						<img src="/images/rate.png" />
						<p className="title">Мои оценки</p>
					</div>
				</Link>
			</div>
		</Layout>
	);
}
