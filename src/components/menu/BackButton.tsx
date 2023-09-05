import React from 'react';
import { useRouter } from 'next/router';

export default function BackButton() {
	const router = useRouter();

	return (
		<div className="image-button" onClick={router.back}>
			<img src="/images/arrow-back.png" alt="Назад" className="arrow-back" />
		</div>
	);
}
