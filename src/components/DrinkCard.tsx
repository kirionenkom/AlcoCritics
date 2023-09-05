import React from 'react';
import { Rate } from 'antd';
import { useAppDispatch } from '@/redux/hooks';
import { updateRate } from '@/redux/drinksSlice';
import Image from 'next/image';
import { DrinkWithAuthor } from '@/interfaces/interfaces';
import { useSession } from 'next-auth/react';

interface DrinkCardProps {
	drink: DrinkWithAuthor;
}

export default function DrinkCard({ drink }: DrinkCardProps) {
	const dispatch = useAppDispatch();
	const { data: session } = useSession();
	if (drink) {
		return (
			<div className="item-card">
				<div className="upper-area">
					<div className="image-container">
						<img src={drink.image_path} className="image" alt={drink.title} />
					</div>
					<div className="text-content">
						<h1 className="title">{drink.title}</h1>
						{drink.taste && <h3 className="taste">{drink.taste}</h3>}
						<p className="price">Цена: {drink.price} рублей</p>
						<h2 className="rate-title">
							Общий рейтинг: <span className="rate-value">{drink.rate}/5</span>
						</h2>
					</div>
				</div>
				<div className="rate-container">
					<h2 className="my-rate">Моя оценка</h2>
					<Rate
						allowHalf
						onChange={(value) =>
							dispatch(
								updateRate({
									drink: drink,
									newRate: value,
									email: session?.user?.email ?? '',
								})
							)
						}
						defaultValue={drink.user_rate ?? 0}
						style={{ marginBottom: 15, fontSize: 32 }}
					/>
				</div>
				<div className="bottom-area">
					<div className="line-border" />
					<h2 className="description-title">Описание</h2>
					<p className="description">{drink.description}</p>
					<div className="author">
						<Image
							src={drink.author_image}
							alt={drink.author_name}
							width={50}
							height={50}
						/>
						<p>{drink.author_name}</p>
					</div>
				</div>
			</div>
		);
	}
	return <></>;
}
