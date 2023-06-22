import { createSlice } from '@reduxjs/toolkit';

type Menu = {
	isSortMenuOpened: boolean,
	isAlcoMenuOpened: boolean,
};

const initialState: Menu = {
	isSortMenuOpened: false,
	isAlcoMenuOpened: false,
};

const menuSlice = createSlice({
	name: 'menu',
	initialState: initialState,
	reducers: {
		openCloseSort(state) {
			state.isAlcoMenuOpened = false;
			state.isSortMenuOpened = !state.isSortMenuOpened;
		},
		openCloseAlco(state) {
			state.isSortMenuOpened = false;
			state.isAlcoMenuOpened = !state.isAlcoMenuOpened;
		},
	},
});

export const { openCloseSort, openCloseAlco } = menuSlice.actions;
export default menuSlice.reducer;
