import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { getRatesByUser } from '@/redux/drinksSlice';
import DrinkList from '@/components/DrinkList';
import Search from '@/components/Search';
import Layout from '@/components/layout/layout';
import { useCheckForSession } from '@/utils/hooks';

export default function Index() {
	const session = useCheckForSession();
	const dispatch = useAppDispatch();
	if (session?.user?.email) {
		dispatch(getRatesByUser(session?.user?.email));
	}
	return (
		<Layout title="Мои оценки">
			<Search />
			<DrinkList />
		</Layout>
	);
}
