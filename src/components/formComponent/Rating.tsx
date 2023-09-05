import { Form, Rate } from 'antd';
import React from 'react';

interface ratingProps {
	rate: number | undefined;
}

export default function Rating({ rate }: ratingProps) {
	return (
		<Form.Item
			name="rate"
			label="Рейтинг"
			required
			initialValue={rate}
			rules={[{ required: true }]}
		>
			<Rate allowHalf></Rate>
		</Form.Item>
	);
}
