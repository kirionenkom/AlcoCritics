import React from 'react';
import {Rate} from 'antd';
import {useAppDispatch} from '@/redux/hooks';
import {updateDrink} from '@/redux/drinksSlice';
import {Alcohol} from "@prisma/client";

interface DrinkCardProps {
	drink: Alcohol;
}

export default function DrinkCard({ drink }: DrinkCardProps) {
	const dispatch = useAppDispatch();
	return (
		<div className="item-card">
			<div className="upper-area">
				<div className="image-container">
					<img src={drink.image_path} className="image" alt={drink.title} />
				</div>
				<div className="text-content">
					<h1 className="title">{drink.title}</h1>
					{drink.taste && <h3 className="taste">{drink.taste}</h3>}
					<Rate
						allowHalf
						defaultValue={drink.rate}
						style={{ marginBottom: 15 }}
						onChange={(value) => dispatch(updateDrink({ id: drink.id, update: { rate: value }}))}
					/>
					<p className="price">Цена: {drink.price} рублей</p>
				</div>
			</div>
			<div className="bottom-area">
				<div className="line-border" />
				<h2 className="description-title">Описание</h2>
				<p className="description">{drink.description}</p>
			</div>
		</div>
	);
}
