import React from 'react';
import SortTypeMenu from './SortTypeMenu';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { openCloseSort } from '@/redux/menuSlice';

export default function SortButton() {
	const dispatch = useAppDispatch();
	const isOpened = useAppSelector((state) => state?.menu.isSortMenuOpened);

	return (
		<>
			<div className="image-button">
				<img
					src="/images/sort.png"
					alt="Сортировка"
					className="sort-image"
					onClick={() => dispatch(openCloseSort())}></img>
			</div>
			{isOpened && <SortTypeMenu />}
		</>
	);
}
