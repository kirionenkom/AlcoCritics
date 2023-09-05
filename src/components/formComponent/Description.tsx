import { Form } from 'antd';
import React from 'react';
import TextArea from 'antd/lib/input/TextArea';

interface descriptionProps {
	text: string | undefined;
}

export default function Description({ text }: descriptionProps) {
	return (
		<Form.Item
			name="description"
			label="Описание"
			required
			rules={[{ required: true }]}
		>
			<TextArea autoSize={{ minRows: 4, maxRows: 4 }} defaultValue={text} />
		</Form.Item>
	);
}
