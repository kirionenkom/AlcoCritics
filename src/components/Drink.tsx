import React from 'react';
import { Rate } from 'antd';
import Link from 'next/link';
import { Drink } from '@/interfaces/interfaces';
import { useRouter } from 'next/router';

interface DrinkProps {
	drink: Drink;
}

export default function Drink({ drink }: DrinkProps) {
	const location = useRouter().pathname;
	return (
		<div className="item">
			<div className="item-image-container">
				<img src={`..${drink.image_path}`} alt="" className="item-image" />
			</div>
			<Link href={`${location}/${drink.id}`} className="item-link">
				<h3 className="item-title">{drink.title}</h3>
			</Link>
			<p className="taste">{drink.taste}</p>
			<Rate
				allowHalf
				disabled
				defaultValue={drink.rate}
				style={{ margin: 0 }}
			/>
			<p className="item-price">{drink.price} рублей</p>
		</div>
	);
}
