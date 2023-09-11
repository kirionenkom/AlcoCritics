import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSession } from '@/redux/userSlice';

const useEscapeKeyDown = (callback: ActionCreatorWithoutPayload) => {
	const dispatch = useDispatch();
	const handleCloseMenu = (event: KeyboardEvent) => {
		if (event.key === 'Escape' || event.key === 'Esc') {
			dispatch(callback());
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleCloseMenu);
		return () => document.removeEventListener('keydown', handleCloseMenu);
	}, []);
};

const useUser = () => {
	const user = useAppSelector((state) => state.user);
	if (!user.email) {
		const { data: session } = useSession();
		const dispatch = useAppDispatch();
		dispatch(
			setSession({
				email: session?.user?.email,
				name: session?.user?.name,
				image: session?.user?.image,
			})
		);
	}

	return user;
};

export { useEscapeKeyDown, useUser };
