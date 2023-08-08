import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import type { FormEventHandler } from 'react';
import React from 'react';
import Email from '@/components/formComponent/Email';
import Password from '@/components/formComponent/Password';
import { Button, Form } from 'antd';
import axios from 'axios';

export default function RegisterForm() {
	const router = useRouter();

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (values) => {
		const res = await axios.post(
			process.env.NEXT_PUBLIC_API_URL + '/register',
			values
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
			<Button type="primary" htmlType="submit" style={{ left: '21%' }}>
				Зарегистрироваться
			</Button>
		</Form>
	);
}
