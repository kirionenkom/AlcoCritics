import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { getDrinksByUser } from '@/redux/drinksSlice';
import DrinkList from '@/components/DrinkList';
import Search from '@/components/Search';
import Layout from '@/components/layout/layout';
import { useCheckForSession } from '@/utils/hooks';

export default function Index() {
	const session = useCheckForSession();
	const dispatch = useAppDispatch();
	if (session?.user?.email) {
		dispatch(getDrinksByUser(session.user.email));
	}

	return (
		<Layout title="Мои напитки">
			<Search />
			<DrinkList />
		</Layout>
	);
}
