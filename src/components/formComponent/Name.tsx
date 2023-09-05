import { Form, Input } from 'antd';
import React from 'react';

export default function Name() {
	return (
		<Form.Item name="name" label="Имя" required rules={[{ required: true }]}>
			<Input />
		</Form.Item>
	);
}
