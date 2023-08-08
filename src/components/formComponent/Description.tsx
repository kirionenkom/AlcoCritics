import { Form, Input } from 'antd';
import React from 'react';
import TextArea from 'antd/lib/input/TextArea';

export default function Description() {
	return (
		<Form.Item
			name="description"
			label="Описание"
			required
			rules={[{ required: true }]}
		>
			<TextArea autoSize={{ minRows: 4, maxRows: 4 }} />
		</Form.Item>
	);
}
