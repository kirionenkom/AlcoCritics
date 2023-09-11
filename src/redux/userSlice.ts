import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
	email: string | null | undefined;
	name: string | null | undefined;
	image: string | null | undefined;
};

const initialState: User = {
	email: null,
	image: null,
	name: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setSession(state, action: PayloadAction<User>) {
			state.email = action.payload.email;
			state.name = action.payload.name;
			state.image = action.payload.image;
		},
	},
});

export const { setSession } = userSlice.actions;
export default userSlice.reducer;
