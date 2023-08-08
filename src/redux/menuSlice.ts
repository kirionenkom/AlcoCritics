import { createSlice } from '@reduxjs/toolkit';

type Menu = {
	isSortMenuOpened: boolean,
	isAlcoholMenuOpened: boolean,
};

const initialState: Menu = {
	isSortMenuOpened: false,
	isAlcoholMenuOpened: false,
};

const menuSlice = createSlice({
	name: 'menu',
	initialState: initialState,
	reducers: {
		openCloseSort(state) {
			state.isAlcoholMenuOpened = false;
			state.isSortMenuOpened = !state.isSortMenuOpened;
		},
		openCloseAlcohol(state) {
			state.isSortMenuOpened = false;
			state.isAlcoholMenuOpened = !state.isAlcoholMenuOpened;
		},
	},
});

export const { openCloseSort, openCloseAlcohol } = menuSlice.actions;
export default menuSlice.reducer;
