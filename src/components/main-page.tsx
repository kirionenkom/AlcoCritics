import React from 'react';
import Search from '../components/Search';
import DrinkList from '../components/DrinkList';
import Menu from '../components/Menu';
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {setDrinks} from "@/redux/drinksSlice";
import {Alcohol} from "@prisma/client";
import Layout from "@/components/layout/layout";

export default function MainPage() {
	return (
		<>
				<Search />
				<DrinkList />
		</>
	);
}
