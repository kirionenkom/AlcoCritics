import {Form, Select} from "antd";
import React from "react";
import {AlcoholType} from "@/interfaces/interfaces";

export default function Type() {
	return (
		<Form.Item name="type" label="Тип" required rules={[{ required: true }]}>
			<Select className="form-alcohol-type">
				<Select.Option value={AlcoholType.WHISKEY}>Виски, ром, коньяк</Select.Option>
				<Select.Option value={AlcoholType.WINO}>Вино, шампанское, вермут</Select.Option>
				<Select.Option value={AlcoholType.GIN}>Джин, текила, Самбука</Select.Option>
				<Select.Option value={AlcoholType.VODKA}>Водка</Select.Option>
				<Select.Option value={AlcoholType.LIQUOR}>Ликер</Select.Option>
				<Select.Option value={AlcoholType.BEER}>Пиво, сидр</Select.Option>
				<Select.Option value={AlcoholType.COCKTAIL}>Коктейль</Select.Option>
			</Select>
		</Form.Item>
	);
}