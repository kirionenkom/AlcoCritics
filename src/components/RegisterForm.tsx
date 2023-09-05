import { useRouter } from 'next/router';
import type { FormEventHandler } from 'react';
import React, { useState } from 'react';
import Email from '@/components/formComponent/Email';
import Password from '@/components/formComponent/Password';
import { Button, Form } from 'antd';
import axios from 'axios';
import Name from '@/components/formComponent/Name';
import UploadImage from '@/components/formComponent/UploadImage';

export default function RegisterForm() {
	const router = useRouter();
	const [file, setFile] = useState(null);

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (values) => {
		const data = { ...values, image_path: file };
		const res = await axios.post(
			process.env.NEXT_PUBLIC_API_URL + '/register',
			data
		);
		if (res) {
			await router.push('/signin');
		} else {
			console.log(res);
		}
	};

	return (
		<Form
			name="validateOnly"
			autoComplete="off"
			layout="horizontal"
			encType="multipart/form-data"
			requiredMark={false}
			onFinish={(values) => handleSubmit(values)}
			labelCol={{ span: 5 }}
			wrapperCol={{ span: 14 }}
		>
			<Email />
			<Password />
			<Name />
			<UploadImage setFile={setFile} image={undefined} />
			<Button type="primary" htmlType="submit" style={{ left: '21%' }}>
				Зарегистрироваться
			</Button>
		</Form>
	);
}
