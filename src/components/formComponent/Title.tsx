import {Form, Input} from "antd";
import React from "react";

export default function Title() {
	return (
		<Form.Item
			name="title"
			label="Название"
			required
			rules={[{ required: true }]}>
			<Input />
		</Form.Item>
	);
}