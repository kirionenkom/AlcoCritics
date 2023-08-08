import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { updateSearchRequest } from '@/redux/drinksSlice';

export default function Search() {
	const dispatch = useAppDispatch();

	return (
		<div className="search-container">
			<label className="search-name">Поиск</label>
			<div className="search-image">
				<input
					type="text"
					name="search-input"
					id="search"
					className="search-input"
					placeholder="Вино, виски, пиво..."
					onChange={(event) => {
						const value = event.currentTarget.value;
						setTimeout(() => {
							dispatch(updateSearchRequest(value));
						}, 300);
					}}
				/>
			</div>
		</div>
	);
}
