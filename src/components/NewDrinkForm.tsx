import {Form,} from 'antd';
import React, {useState} from "react";
import SubmitButton from "@/components/formComponent/SubmitButton";
import Title from '@/components/formComponent/Title'
import Taste from "@/components/formComponent/Taste";
import Type from "@/components/formComponent/Type";
import Price from "@/components/formComponent/Price";
import Rating from "@/components/formComponent/Rating";
import UploadImage from "@/components/formComponent/UploadImage";
import Description from "@/components/formComponent/Description";
import {addDrink} from "@/redux/drinksSlice";
import {useAppDispatch} from "@/redux/hooks";

export interface FormProps {
	type: string;
	title: string;
	taste: string | null;
	price: number;
	rate: number;
	image: File;
	description: string;
}

export default function NewDrinkForm() {
	const [form] = Form.useForm();
	const [file, setFile] = useState(null)
	const dispatch = useAppDispatch()
	return (
		<Form
			form={form}
			name="validateOnly"
			autoComplete="off"
			layout="horizontal"
			encType="multipart/form-data"
			requiredMark={false}
			onFinish={async (values) => {
				values = {...values, image_path: file}
				dispatch(addDrink(values))
			}}
			labelCol={{ span: 5 }}
			wrapperCol={{ span: 14 }}>
			<Title/>
			<Taste/>
			<Type/>
			<Price/>
			<Rating/>
			<UploadImage setFile={setFile}/>
			<Description/>
			<SubmitButton form={form} />
		</Form>
	);
}
