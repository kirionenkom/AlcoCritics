import { Form, Input } from 'antd';
import React from 'react';

interface tasteProps {
	text: string | undefined | null;
}

export default function Taste({ text }: tasteProps) {
	return (
		<Form.Item name="taste" label="Вкус" rules={[{ required: true }]}>
			<Input defaultValue={text ?? ''} />
		</Form.Item>
	);
}
