import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Button, Modal } from 'antd';
import { LoadingStatus, ModalType } from '@/interfaces/interfaces';
import { SerializedError } from '@reduxjs/toolkit';
import ReactLoading from 'react-loading';
import { setLoadingNone } from '@/redux/drinksSlice';
import { Dispatch, SetStateAction, useState } from 'react';

const getContent = (
	modalType: ModalType,
	status: LoadingStatus,
	errorMessage: SerializedError | null,
	setOpen: Dispatch<SetStateAction<boolean>>,
	dispatch: ReturnType<typeof useAppDispatch>
) => {
	switch (status) {
		case LoadingStatus.Loading:
			return {
				title: 'Загрузка',
				content: <ReactLoading type="spin" color="black" width={40} />,
				footer: null,
			};
		case LoadingStatus.Idle:
			switch (modalType) {
				case ModalType.Create:
					return {
						title: 'Успешно',
						content: (
							<>
								<p>Данные успешно загружены</p>
								<p>Нажмите ОК для выхода на главную страницу</p>
							</>
						),
						footer: [
							<Button
								key="OK"
								href="/"
								onClick={() => dispatch(setLoadingNone())}
							>
								ОК
							</Button>,
						],
					};
				case ModalType.Update:
					return {
						title: 'Успешно',
						content: (
							<>
								<p>Данные успешно обновлены</p>
								<p>Нажмите ОК, чтобы закрыть</p>
							</>
						),
						footer: [
							<Button
								key="OK"
								onClick={() => {
									setOpen(false);
									dispatch(setLoadingNone());
								}}
							>
								ОК
							</Button>,
						],
					};
				case ModalType.Delete:
					return {
						title: 'Успешно',
						content: (
							<>
								<p>Данные успешно удалены</p>
								<p>Нажмите ОК для выхода на главную страницу</p>
							</>
						),
						footer: [
							<Button
								key="OK"
								href="/"
								onClick={() => dispatch(setLoadingNone())}
							>
								ОК
							</Button>,
						],
					};
				default:
					return {};
			}
		case LoadingStatus.Failed:
			return {
				title: 'Ошибка',
				content: <p>{errorMessage?.message}</p>,
				footer: [
					<Button key="back" href="/">
						ОК
					</Button>,
				],
			};
		default:
			return {};
	}
};

interface ModalMessageProps {
	modalType: ModalType;
}

export default function ModalMessage({ modalType }: ModalMessageProps) {
	const [open, setOpen] = useState(true);
	const dispatch = useAppDispatch();
	const { loadingStatus, errorMessage } = useAppSelector(
		(state) => state.drinks
	);
	const { title, content, footer } = getContent(
		modalType,
		loadingStatus,
		errorMessage,
		setOpen,
		dispatch
	);
	return (
		<Modal
			title={title}
			open={open}
			footer={footer}
			closable={Boolean(footer)}
			style={{ left: 60 }}
		>
			{content}
		</Modal>
	);
}
