import { Button, Form, FormInstance } from 'antd';
import { useEffect, useState } from 'react';
import { FormProps } from '@/components/NewDrinkForm';

export default function SubmitButton({ form }: { form: FormInstance }) {
	const [submittable, setSubmittable] = useState(false);
	const values: FormProps = Form.useWatch([], form);
	useEffect(() => {
		form.validateFields({ validateOnly: true }).then(
			() => {
				setSubmittable(true);
			},
			() => {
				setSubmittable(false);
			}
		);
	}, [values]);

	return (
		<Form.Item wrapperCol={{ offset: 5, span: 8 }}>
			<Button type="primary" htmlType="submit" disabled={!submittable}>
				Создать
			</Button>
		</Form.Item>
	);
}
