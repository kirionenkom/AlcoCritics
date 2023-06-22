import {Form, Input} from "antd";
import React from "react";


export default function Description() {
	return (
		<Form.Item
			name="description"
			label="Описание"
			required
			rules={[{ required: true }]}>
			<Input />
		</Form.Item>
	);
}