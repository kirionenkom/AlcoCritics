import { Form, Input } from 'antd';
import React from 'react';

export default function Title() {
	return (
		<Form.Item
			name="password"
			label="Пароль"
			required
			rules={[{ required: true }]}
		>
			<Input type="password" />
		</Form.Item>
	);
}
