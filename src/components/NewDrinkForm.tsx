import { Form } from 'antd';
import React, { useState } from 'react';
import SubmitButton from '@/components/formComponent/SubmitButton';
import Title from '@/components/formComponent/Title';
import Taste from '@/components/formComponent/Taste';
import Type from '@/components/formComponent/Type';
import Price from '@/components/formComponent/Price';
import Rating from '@/components/formComponent/Rating';
import UploadImage from '@/components/formComponent/UploadImage';
import Description from '@/components/formComponent/Description';
import { addDrink } from '@/redux/drinksSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useSession } from 'next-auth/react';
import { DrinkWithAuthor } from '@/interfaces/interfaces';

export interface FormProps {
	type: string;
	title: string;
	taste: string | null;
	price: number;
	rate: number;
	image: File;
	description: string;
}

export interface newDrinkFormProps {
	drink: DrinkWithAuthor | null;
}

export default function NewDrinkForm({ drink }: newDrinkFormProps) {
	const [form] = Form.useForm();
	const [file, setFile] = useState(drink?.image_path ?? null);
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.user);
	return (
		<Form
			initialValues={{
				id: drink?.id,
				title: drink?.title,
				taste: drink?.taste,
				price: drink?.price,
				rate: drink?.user_rate,
				type: drink?.type,
				image_path: drink?.image_path,
				description: drink?.description,
			}}
			form={form}
			name="validateOnly"
			autoComplete="off"
			layout="horizontal"
			encType="multipart/form-data"
			requiredMark={false}
			onFinish={async (values) => {
				values = { ...values, image_path: file, email: user?.email };
				dispatch(addDrink(values));
			}}
			labelCol={{ span: 5 }}
			wrapperCol={{ span: 14 }}
		>
			<Title text={drink?.title} />
			<Taste text={drink?.taste} />
			<Type type={drink?.type} />
			<Price price={drink?.price} />
			<Rating rate={drink?.rate} />
			<UploadImage setFile={setFile} image={drink?.image_path} />
			<Form.Item name="image_path" hidden />
			<Form.Item name="id" hidden />
			<Description text={drink?.description} />
			<SubmitButton form={form} />
		</Form>
	);
}
