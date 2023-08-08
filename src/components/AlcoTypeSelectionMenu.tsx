import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { changeAlcoholType } from '@/redux/drinksSlice';
import {useEscapeKeyDown} from "@/utils/hooks";
import { openCloseAlcohol } from '@/redux/menuSlice';
import {AlcoholType} from "@/interfaces/interfaces";

export default function AlcoTypeSelectionMenu() {
	const dispatch = useAppDispatch();
	const alcoholType = useAppSelector((state) => state.drinks.alcoholType);
	const handleChangeAlcoholType = (alcoholType: string) => {
		dispatch(changeAlcoholType(alcoholType));
	};
	useEscapeKeyDown(openCloseAlcohol);

	return (
		<div className="alco-types">
			<div className="alco-types-list">
				<label
					className={`alco-type-item all-alcohols ${
						alcoholType === AlcoholType.ALL ? 'checked' : ''
					}`}
					onClick={() => handleChangeAlcoholType(AlcoholType.ALL)}>
					Всё
				</label>
				<label
					className={`alco-type-item whiskey ${
						alcoholType === AlcoholType.WHISKEY ? 'checked' : ''
					}`}
					onClick={() => handleChangeAlcoholType(AlcoholType.WHISKEY)}>
					Виски, ром, коньяк
				</label>
				<label
					className={`alco-type-item wine ${
						alcoholType === AlcoholType.WINO ? 'checked' : ''
					}`}
					onClick={() => handleChangeAlcoholType(AlcoholType.WINO)}>
					Вино, шампанское, вермут
				</label>
				<label
					className={`alco-type-item gin ${
						alcoholType === AlcoholType.GIN ? 'checked' : ''
					}`}
					onClick={() => handleChangeAlcoholType(AlcoholType.GIN)}>
					Джин, текила, самбука
				</label>
				<label
					className={`alco-type-item vodka ${
						alcoholType === AlcoholType.VODKA ? 'checked' : ''
					}`}
					onClick={() => handleChangeAlcoholType(AlcoholType.VODKA)}>
					Водка
				</label>
				<label
					className={`alco-type-item liquor ${
						alcoholType === AlcoholType.LIQUOR ? 'checked' : ''
					}`}
					onClick={() => handleChangeAlcoholType(AlcoholType.LIQUOR)}>
					Ликер
				</label>
				<label
					className={`alco-type-item beer ${
						alcoholType === AlcoholType.BEER ? 'checked' : ''
					}`}
					onClick={() => handleChangeAlcoholType(AlcoholType.BEER)}>
					Пиво, сидр
				</label>
				<label
					className={`alco-type-item cocktail ${
						alcoholType === AlcoholType.COCKTAIL ? 'checked' : ''
					}`}
					onClick={() => handleChangeAlcoholType(AlcoholType.COCKTAIL)}>
					Коктейль
				</label>
			</div>
		</div>
	);
}
