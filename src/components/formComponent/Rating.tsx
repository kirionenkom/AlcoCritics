import {Form, Rate} from "antd";
import React from "react";

export default function Rating() {
	return (
		<Form.Item
			name="rate"
			label="Рейтинг"
			required
			rules={[{ required: true }]}>
			<Rate allowHalf></Rate>
		</Form.Item>
	);
}