import React from 'react';
import AlcoTypeSelectionMenu from './AlcoTypeSelectionMenu';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { openCloseAlcohol } from '@/redux/menuSlice';

export default function AlcoTypeSelectionButton() {
	const dispatch = useAppDispatch();
	const isOpened = useAppSelector((state) => state.menu.isAlcoholMenuOpened);

	return (
		<>
			<div className="image-button">
				<img
					src="/images/aclohol.png"
					alt="Выбор типа"
					className="type-choose"
					onClick={() => dispatch(openCloseAlcohol())}></img>
			</div>
			{isOpened && <AlcoTypeSelectionMenu />}
		</>
	);
}
