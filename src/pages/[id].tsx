import React from 'react';
import DrinkPage from '@/components/DrinksPage';
import { useCheckForSession } from '@/utils/hooks';

export default function Index() {
	useCheckForSession();
	return <DrinkPage />;
}
