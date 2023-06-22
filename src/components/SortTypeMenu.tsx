import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { changeSortType } from '@/redux/drinksSlice';
import { openCloseSort } from '@/redux/menuSlice';
import {useEscapeKeyDown} from "@/utils/hooks";
import {SortType} from "@/interfaces/interfaces";

export default function SortTypeMenu() {
	const dispatch = useAppDispatch();
	const checkedSortType = useAppSelector((state) => state.drinks.sortType);
	const handleChangeSortType = (sortType: SortType) => {
		dispatch(changeSortType(sortType));
	};
	useEscapeKeyDown(openCloseSort);

	return (
		<div className="sort-types">
			<div className="sort-types-list">
				<label
					className={`sort-type-item up ${
						checkedSortType === SortType.RateUp ? 'checked' : ''
					}`}
					onClick={() => handleChangeSortType(SortType.RateUp)}>
					Рейтинг
				</label>
				<label
					className={`sort-type-item down ${
						checkedSortType === SortType.RateDown ? 'checked' : ''
					}`}
					onClick={() => handleChangeSortType(SortType.RateDown)}>
					Рейтинг
				</label>
				<label
					className={`sort-type-item up ${
						checkedSortType === SortType.PriceUp ? 'checked' : ''
					}`}
					onClick={() => handleChangeSortType(SortType.PriceUp)}>
					Цена
				</label>
				<label
					className={`sort-type-item down ${
						checkedSortType === SortType.PriceDown ? 'checked' : ''
					}`}
					onClick={() => handleChangeSortType(SortType.PriceDown)}>
					Цена
				</label>
			</div>
		</div>
	);
}
