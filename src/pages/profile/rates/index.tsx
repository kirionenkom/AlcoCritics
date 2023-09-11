import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { getRatesByUser } from '@/redux/drinksSlice';
import DrinkList from '@/components/DrinkList';
import Search from '@/components/Search';
import Layout from '@/components/layout/layout';
import { useUser } from '@/utils/hooks';

export default function Index() {
	const user = useUser();
	const dispatch = useAppDispatch();
	if (user?.email) {
		dispatch(getRatesByUser(user?.email));
	}
	return (
		<Layout title="Мои оценки">
			<Search />
			<DrinkList />
		</Layout>
	);
}
