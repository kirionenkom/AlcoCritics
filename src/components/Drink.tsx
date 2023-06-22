import React from 'react';
import {Rate} from 'antd';
import Link from 'next/link';
import {Alcohol} from "@prisma/client";

interface DrinkProps {
	drink: Alcohol;
}

export default function Drink({ drink }: DrinkProps) {
	return (
		<div className="item">
			<div className="item-image-container">
				<img src={`../${drink.image_path}`} alt="" className="item-image" />
			</div>
			<Link href={`drink/${drink.id}`} className="item-link">
				<h3 className="item-title">
					{drink.title} <span className="taste">{drink.taste}</span>
				</h3>
			</Link>
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
