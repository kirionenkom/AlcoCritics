import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import DrinkCard from "@/components/DrinkCard";
import React, {useState} from "react";
import {useRouter} from "next/router";
import {LoadingStatus, ModalType} from "@/interfaces/interfaces";
import ModalMessage from "@/components/ModalMessage";
import {Button, Modal} from "antd";
import {deleteDrink} from "@/redux/drinksSlice";


export default function DrinkPage() {
	const [confirmModalOpen, setConfirmModalOpen] = useState(false)
	const dispatch = useAppDispatch()
	const {list: drinks, modalType} = useAppSelector((state) => state.drinks);
	const id = useRouter().query.id;
	const drink = drinks.find((drink) => drink.id === id);
	return (
		<>
		{modalType !== ModalType.None && <ModalMessage modalType={modalType}/>}
		{drink && id && (
			<>
				<DrinkCard drink={drink}/>
				<Button type="primary" danger onClick={() => setConfirmModalOpen(true)}
				        style={{position: 'fixed', top: "8% ", right: "10%"}}>
					Удалить
				</Button>
				<Modal
					title='Подтверждение'
					open={confirmModalOpen}
					onOk={() => {
						setConfirmModalOpen(false)
						dispatch(deleteDrink(drink))
					}}
					onCancel={() => setConfirmModalOpen(false)}>
					<p>Вы действительно хотите удалить?</p>
				</Modal>
			</>)}
		</>);
}