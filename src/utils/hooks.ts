import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { mockProviders } from 'next-auth/client/__tests__/helpers/mocks';
import id = mockProviders.github.id;

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

const useCheckForSession = () => {
	const { data: session } = useSession();
	const router = useRouter();
	useEffect(() => {
		if (!session) {
			router.push('/signin');
			return;
		}
	}, [session]);
	return session;
};

export { useEscapeKeyDown, useCheckForSession };
