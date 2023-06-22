import {Form, Select} from "antd";
import React from "react";
import {AlcoholType} from "@/interfaces/interfaces";
import {InputNumber} from "antd/lib";

export default function Price() {
	return (
		<Form.Item
			name="price"
			label="Цена"
			required
			rules={[{ required: true }]}>
			<InputNumber />
		</Form.Item>
	);
}