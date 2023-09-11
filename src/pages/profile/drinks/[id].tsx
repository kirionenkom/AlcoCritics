import React from 'react';
import DrinkPage from '@/components/DrinksPage';
import { useUser } from '@/utils/hooks';

export default function Index() {
	useUser();
	return <DrinkPage />;
}
