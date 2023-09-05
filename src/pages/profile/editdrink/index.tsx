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
	width: '600px',
	height: '600px',
	backgroundColor: 'white',
	alignItems: 'center',
};

export default function Index() {
	useCheckForSession();
	const { loadingStatus, currentDrink } = useAppSelector(
		(state) => state.drinks
	);
	return (
		<Layout title="Редактировать напиток">
			<div style={formStyles}>
				<NewDrinkForm drink={currentDrink} />
				{loadingStatus !== LoadingStatus.None && (
					<ModalMessage modalType={ModalType.Create} />
				)}
			</div>
		</Layout>
	);
}
