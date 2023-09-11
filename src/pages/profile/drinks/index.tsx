import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { getDrinksByUser } from '@/redux/drinksSlice';
import DrinkList from '@/components/DrinkList';
import Search from '@/components/Search';
import Layout from '@/components/layout/layout';
import { useUser } from '@/utils/hooks';

export default function Index() {
	const user = useUser();
	const dispatch = useAppDispatch();
	if (user?.email) {
		dispatch(getDrinksByUser(user.email));
	}

	return (
		<Layout title="Мои напитки">
			<Search />
			<DrinkList />
		</Layout>
	);
}
