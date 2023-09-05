import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import DrinkCard from '@/components/DrinkCard';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getDrinkCard } from '@/redux/drinksSlice';
import Layout from '@/components/layout/layout';
import { useSession } from 'next-auth/react';
import DrinkCardWithEdit from '@/components/DrinkCardWithEdit';

export default function DrinkPage() {
	const { data: session } = useSession();
	let id = useRouter().query.id;
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (Array.isArray(id)) {
			id = id[0];
		}
		if (id) {
			dispatch(
				getDrinkCard({ email: session?.user?.email ?? '', drink_id: id })
			);
		}
	}, []);
	const drink = useAppSelector((state) => state.drinks.currentDrink);
	return (
		<Layout title={drink?.title ?? ''}>
			{drink &&
				(drink.author_email === session?.user?.email ? (
					<DrinkCardWithEdit drink={drink} />
				) : (
					<DrinkCard drink={drink} />
				))}
		</Layout>
	);
}
