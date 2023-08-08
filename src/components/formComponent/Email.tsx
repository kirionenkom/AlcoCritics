import { Form, Input } from 'antd';
import React from 'react';

export default function Title() {
	return (
		<Form.Item name="email" label="Email" required rules={[{ required: true }]}>
			<Input type="email" />
		</Form.Item>
	);
}
