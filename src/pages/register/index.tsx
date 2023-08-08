import { SignInForm } from '@/components/SignInForm';
import Link from 'next/link';
import RegisterForm from '@/components/RegisterForm';

export const formStyles = {
	boxShadow: '0px 0 10px rgba(26, 31, 22, 0.3)',
	borderRadius: '20px',
	padding: '30px',
	width: '600px',
	backgroundColor: 'white',
	alignItems: 'center',
	justifyContent: 'center',
};

export default function SignIn() {
	return (
		<div style={formStyles}>
			<h1 style={{ textAlign: 'center' }}>Регистрация</h1>
			<RegisterForm />
		</div>
	);
}
