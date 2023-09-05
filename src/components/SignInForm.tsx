import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import React from 'react';
import Email from '@/components/formComponent/Email';
import Password from '@/components/formComponent/Password';
import { Button, Form } from 'antd';

interface formProps {
	email: string;
	password: string;
}

export default function SignInForm() {
	const router = useRouter();

	const handleSubmit = async (values: formProps) => {
		const res = await signIn('credentials', {
			email: values.email,
			password: values.password,
			redirect: false,
		});

		if (res && !res.error) {
			await router.push('/');
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
				Войти
			</Button>
		</Form>
	);
}

export { SignInForm };
