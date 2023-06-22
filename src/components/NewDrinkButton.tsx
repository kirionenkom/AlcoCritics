import React from 'react';
import Link from "next/link";


export default function NewDrinkButton() {
	return (
		<Link href="/newdrink">
			<div className="image-button">
				<img
					src="/images/new-drink-button.png"
					alt="Выбор типа"
					className="new-drink"></img>
			</div>
		</Link>
	);
}
