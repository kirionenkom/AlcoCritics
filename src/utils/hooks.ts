import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

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

export { useEscapeKeyDown };
