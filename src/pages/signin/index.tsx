import { SignInForm } from '@/components/SignInForm';
import Link from 'next/link';
import Layout from '@/components/layout/layout';
import * as dotenv from 'dotenv'
dotenv.config() // Load the environment variables

export const formStyles = {
	boxShadow: '0px 0 10px rgba(26, 31, 22, 0.3)',
	borderRadius: '20px',
	padding: '30px',
	width: '600px',
	backgroundColor: 'white',
	alignItems: 'center',
	justifyContent: 'center',
};

export default function Signin() {
	console.log(`The connection URL is ${process.env.DATABASE_URL}`)
	return (
		<Layout title="Войти">
			<div style={formStyles}>
				<h1 style={{ textAlign: 'center' }}>Вход в аккаунт</h1>
				<SignInForm />
				<p style={{ textAlign: 'center' }}>
					Нет аккаунта? <Link href="/register">Зарегистрируйся</Link>
				</p>
			</div>
		</Layout>
	);
}
