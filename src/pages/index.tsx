import Search from '@/components/Search';
import DrinkList from '@/components/DrinkList';
import React from 'react';
import Layout from '@/components/layout/layout';
import { useCheckForSession } from '@/utils/hooks';
import { useAppDispatch } from '@/redux/hooks';
import { getAllDrinks } from '@/redux/drinksSlice';

export default function Index() {
	useAppDispatch()(getAllDrinks());
	return (
		<Layout title="Главная">
			<Search />
			<DrinkList />
		</Layout>
	);
}
