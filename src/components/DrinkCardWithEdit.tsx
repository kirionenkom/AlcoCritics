import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import DrinkCard from '@/components/DrinkCard';
import React, { useState } from 'react';
import { DrinkWithAuthor, ModalType } from '@/interfaces/interfaces';
import ModalMessage from '@/components/ModalMessage';
import { Button, Modal } from 'antd';
import { deleteDrink } from '@/redux/drinksSlice';
import { useRouter } from 'next/router';

interface DrinkCardProps {
	drink: DrinkWithAuthor;
}

export default function DrinkCardWithEdit({ drink }: DrinkCardProps) {
	const [confirmModalOpen, setConfirmModalOpen] = useState(false);
	const modalType = useAppSelector((state) => state.drinks.modalType);
	const dispatch = useAppDispatch();
	const router = useRouter();
	return (
		<>
			{modalType !== ModalType.None && <ModalMessage modalType={modalType} />}
			<>
				{drink && <DrinkCard drink={drink} />}
				<Button
					type="primary"
					danger
					onClick={() => setConfirmModalOpen(true)}
					style={{ position: 'fixed', top: '15% ', right: '10%', width: 150 }}
				>
					Удалить
				</Button>
				<Button
					type="primary"
					onClick={() => router.push(`/profile/editdrink`)}
					style={{ position: 'fixed', top: '8% ', right: '10%', width: 150 }}
				>
					Редактировать
				</Button>
				<Modal
					title="Подтверждение"
					open={confirmModalOpen}
					onOk={() => {
						setConfirmModalOpen(false);
						dispatch(deleteDrink(drink.id));
					}}
					onCancel={() => setConfirmModalOpen(false)}
				>
					<p>Вы действительно хотите удалить?</p>
				</Modal>
			</>
		</>
	);
}
