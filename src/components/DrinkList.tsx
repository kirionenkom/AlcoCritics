import React, {useMemo} from 'react';
import {useAppSelector} from '@/redux/hooks';
import Drink from './Drink';
import {FilterFunctions, SortFunctions} from "@/utils/utils";


export default function DrinkList() {
	const {list: drinks, sortType,searchRequest, alcoholType } = useAppSelector((state) => state.drinks);
	const memoizedDrinks = useMemo( () => {
		return drinks
			.filter(FilterFunctions[alcoholType])
			.filter((drink) => drink.title.toLowerCase().includes(searchRequest.toLowerCase()))
			.sort(SortFunctions[sortType])
	}, [drinks, sortType, searchRequest, alcoholType])
	return (
		<div className="content-container">
			{memoizedDrinks.map((drink) => (
				<Drink drink={drink} key={drink.id} />
			))}
		</div>
	);
}
