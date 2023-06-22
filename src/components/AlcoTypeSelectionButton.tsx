import React from 'react';
import AlcoTypeSelectionMenu from './AlcoTypeSelectionMenu';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { openCloseAlco } from '@/redux/menuSlice';

export default function AlcoTypeSelectionButton() {
	const dispatch = useAppDispatch();
	const isOpened = useAppSelector((state) => state.menu.isAlcoMenuOpened);

	return (
		<>
			<div className="image-button">
				<img
					src="/images/aclohol.png"
					alt="Выбор типа"
					className="type-choose"
					onClick={() => dispatch(openCloseAlco())}></img>
			</div>
			{isOpened && <AlcoTypeSelectionMenu />}
		</>
	);
}
