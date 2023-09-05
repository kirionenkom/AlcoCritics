import RegisterForm from '@/components/RegisterForm';
import Layout from '@/components/layout/layout';

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
		<Layout title="Регистрация">
			<div style={formStyles}>
				<h1 style={{ textAlign: 'center' }}>Регистрация</h1>
				<RegisterForm />
			</div>
		</Layout>
	);
}
