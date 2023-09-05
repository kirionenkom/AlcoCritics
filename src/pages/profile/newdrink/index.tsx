import NewDrinkForm from '@/components/NewDrinkForm';
import { useAppSelector } from '@/redux/hooks';
import { LoadingStatus, ModalType } from '@/interfaces/interfaces';
import ModalMessage from '@/components/ModalMessage';
import Layout from '@/components/layout/layout';
import { useCheckForSession } from '@/utils/hooks';

const formStyles = {
	boxShadow: '0px 0 10px rgba(26, 31, 22, 0.3)',
	borderRadius: '20px',
	padding: '30px',
	width: '50vw',
	left: '20vw',
	backgroundColor: 'white',
	alignItems: 'center',
};

export default function Index() {
	useCheckForSession();
	const loadingStatus = useAppSelector((state) => state.drinks.loadingStatus);
	return (
		<Layout title="Новый напиток">
			<div style={formStyles}>
				<NewDrinkForm drink={null} />
				{loadingStatus !== LoadingStatus.None && (
					<ModalMessage modalType={ModalType.Create} />
				)}
			</div>
		</Layout>
	);
}
