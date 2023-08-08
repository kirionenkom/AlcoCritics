import Search from '@/components/Search';
import DrinkList from '@/components/DrinkList';
import React from 'react';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/configs/auth';
import { useSession } from 'next-auth/react';
import Message from '@/components/Message';
import { getDrinks } from '@/redux/drinksSlice';
import { useAppDispatch } from '@/redux/hooks';

export default function Index() {
	const { data: session } = useSession();
	const dispatch = useAppDispatch();
	if (session?.user?.name) {
		dispatch(getDrinks(session?.user?.name));
	}
	if (!session) {
		return (
			<Message message="Вы не авторизовались. Пожалуйста, войдите в аккаунт" />
		);
	}
	return (
		<>
			<Search />
			<DrinkList />
		</>
	);
}
