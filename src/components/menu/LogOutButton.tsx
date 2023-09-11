import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import { Modal } from 'antd';

export default function LogOutButton() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<>
			<img
				src="/images/logout.png"
				alt="Логаут"
				className="logout-image"
				onClick={() => setIsModalOpen((prev) => !prev)}
			/>
			<Modal
				title="Подтверждение"
				open={isModalOpen}
				onOk={async () => {
					setIsModalOpen((prev) => !prev);
					await signOut({
						redirect: true,
					});
				}}
				onCancel={() => {
					setIsModalOpen((prev) => !prev);
				}}
			>
				<p>Вы действительно хотите выйти?</p>
			</Modal>
		</>
	);
}
