import { Form, Input } from 'antd';
import React from 'react';

interface titleProps {
	text: string | undefined | null;
}
export default function Title({ text }: titleProps) {
	return (
		<Form.Item
			name="title"
			label="Название"
			required
			rules={[{ required: true }]}
		>
			<Input defaultValue={text ?? ''} />
		</Form.Item>
	);
}
