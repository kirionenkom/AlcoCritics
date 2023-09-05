import { Form } from 'antd';
import React from 'react';
import { InputNumber } from 'antd/lib';

interface priceProps {
	price: number | undefined;
}

export default function Price({ price }: priceProps) {
	return (
		<Form.Item name="price" label="Цена" required rules={[{ required: true }]}>
			<InputNumber defaultValue={price} />
		</Form.Item>
	);
}
