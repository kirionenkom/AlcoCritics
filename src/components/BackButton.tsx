import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import Link from 'next/link'

export default function BackButton() {
	const dispatch = useAppDispatch();
	return (
		<div className="image-button">
			<Link  href={"/"}>
				<img src="/images/arrow-back.png" alt="Назад" className="arrow-back" />
			</Link>
		</div>
	);
}
