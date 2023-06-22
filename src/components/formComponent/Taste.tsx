import {Form, Input} from "antd";
import React from "react";

export default function Taste() {
	return (
		<Form.Item
			name="taste"
			label="Вкус"
			required
			rules={[{ required: true }]}>
			<Input />
		</Form.Item>
	);
}