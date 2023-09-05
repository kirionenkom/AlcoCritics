import {
	createAsyncThunk,
	createSlice,
	PayloadAction,
	SerializedError,
} from '@reduxjs/toolkit';
import { Alcohol } from '@prisma/client';
import {
	AlcoholType,
	Drink,
	DrinkWithAuthor,
	LoadingStatus,
	ModalType,
	SortType,
} from '@/interfaces/interfaces';
import { FormProps } from '@/components/NewDrinkForm';
import axios from 'axios';
require('dotenv').config();

type Drinks = {
	list: Drink[];
	currentDrink: DrinkWithAuthor | null;
	sortType: SortType;
	alcoholType: string;
	searchRequest: string;
	status: string | null;
	loadingStatus: LoadingStatus;
	errorMessage: SerializedError | null;
	modalType: ModalType;
};

export const addDrink = createAsyncThunk(
	'addDrink',
	async (drinkData: FormProps) => {
		const response = await axios.post(
			process.env.NEXT_PUBLIC_API_URL + '/newdrink',
			drinkData
		);
		return response.data;
	}
);

interface updateRateProps {
	drink: DrinkWithAuthor;
	newRate: number;
	email: string;
}

export const updateRate = createAsyncThunk(
	'updateRate',
	async ({ drink, newRate, email }: updateRateProps) => {
		const response = await axios.put(
			process.env.NEXT_PUBLIC_API_URL + '/updaterate',
			{ drink, newRate, email }
		);
		return response.data;
	}
);

export const deleteDrink = createAsyncThunk(
	'deleteDrink',
	async (drink_id: string) => {
		const response = await axios.delete(
			process.env.NEXT_PUBLIC_API_URL + `/deletedrink/${drink_id}`
		);
		return response.data;
	}
);
export const getAllDrinks = createAsyncThunk('getAllDrinks', async () => {
	const drinks = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/drinks`);
	return drinks.data;
});

export const getDrinksByUser = createAsyncThunk(
	'getDrinksByUser',
	async (user_id: string) => {
		const drinks = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/user/${user_id}`
		);
		return drinks.data;
	}
);

export const getRatesByUser = createAsyncThunk(
	'getRatesByUser',
	async (user_id: string) => {
		const drinks = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/user/rates/${user_id}`
		);
		return drinks.data;
	}
);

export const getDrinkCard = createAsyncThunk(
	'getDrinkCard',
	async ({ drink_id, email }: { drink_id: string; email: string }) => {
		const drinks = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/drinks/drink/${email}/${drink_id}`
		);
		return drinks.data;
	}
);

const initialState: Drinks = {
	modalType: ModalType.None,
	list: [],
	currentDrink: null,
	alcoholType: AlcoholType.ALL,
	searchRequest: '',
	sortType: SortType.RateUp,
	status: null,
	loadingStatus: LoadingStatus.None,
	errorMessage: null,
};

const drinksSlice = createSlice({
	name: 'drinks',
	initialState: initialState,
	reducers: {
		setDrinks(state, action: PayloadAction<Drink[]>) {
			state.list = action.payload;
		},
		setLoadingNone(state) {
			state.modalType = ModalType.None;
			state.loadingStatus = LoadingStatus.None;
			state.errorMessage = null;
		},
		changeSortType(state, action: PayloadAction<SortType>) {
			state.sortType = action.payload;
		},
		changeAlcoholType(state, action: PayloadAction<string>) {
			state.alcoholType = action.payload;
		},
		updateSearchRequest(state, action: PayloadAction<string>) {
			state.searchRequest = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(addDrink.pending, (state) => {
				state.modalType = ModalType.Create;
				state.errorMessage = null;
				state.loadingStatus = LoadingStatus.Loading;
			})
			.addCase(addDrink.fulfilled, (state, action: PayloadAction<Drink>) => {
				state.loadingStatus = LoadingStatus.Idle;
				state.errorMessage = null;
				state.list.push(action.payload);
			})
			.addCase(addDrink.rejected, (state, action) => {
				state.loadingStatus = LoadingStatus.Failed;
				state.errorMessage = action.error;
			})
			.addCase(updateRate.pending, (state) => {
				state.modalType = ModalType.Update;
				state.errorMessage = null;
				state.loadingStatus = LoadingStatus.Loading;
			})
			.addCase(
				updateRate.fulfilled,
				(state, action: PayloadAction<DrinkWithAuthor>) => {
					state.loadingStatus = LoadingStatus.Idle;
					state.errorMessage = null;
					state.currentDrink = action.payload;
				}
			)
			.addCase(updateRate.rejected, (state, action) => {
				state.loadingStatus = LoadingStatus.Failed;
				state.errorMessage = action.error;
			})
			.addCase(deleteDrink.pending, (state) => {
				state.modalType = ModalType.Delete;
				state.errorMessage = null;
				state.loadingStatus = LoadingStatus.Loading;
			})
			.addCase(
				deleteDrink.fulfilled,
				(state, action: PayloadAction<Alcohol>) => {
					state.loadingStatus = LoadingStatus.Idle;
					state.errorMessage = null;
					const index = state.list.findIndex(
						(drink) => drink.id === action.payload.id
					);
					if (index) {
						state.list = [
							...state.list.slice(0, index),
							...state.list.slice(index + 1),
						];
					}
				}
			)
			.addCase(deleteDrink.rejected, (state, action) => {
				state.loadingStatus = LoadingStatus.Failed;
				state.errorMessage = action.error;
			})
			.addCase(getAllDrinks.pending, (state) => {})
			.addCase(
				getAllDrinks.fulfilled,
				(state, action: PayloadAction<Drink[]>) => {
					state.list = action.payload;
				}
			)
			.addCase(getAllDrinks.rejected, (state, action) => {})
			.addCase(getDrinkCard.pending, (state) => {})
			.addCase(
				getDrinkCard.fulfilled,
				(state, action: PayloadAction<DrinkWithAuthor>) => {
					state.currentDrink = action.payload;
				}
			)
			.addCase(getDrinkCard.rejected, (state, action) => {})
			.addCase(getDrinksByUser.pending, (state) => {})
			.addCase(
				getDrinksByUser.fulfilled,
				(state, action: PayloadAction<Drink[]>) => {
					state.list = action.payload;
				}
			)
			.addCase(getDrinksByUser.rejected, (state, action) => {})
			.addCase(getRatesByUser.pending, (state) => {})
			.addCase(
				getRatesByUser.fulfilled,
				(state, action: PayloadAction<Drink[]>) => {
					state.list = action.payload;
				}
			)
			.addCase(getRatesByUser.rejected, (state, action) => {});
	},
});

export const {
	changeSortType,
	changeAlcoholType,
	updateSearchRequest,
	setDrinks,
	setLoadingNone,
} = drinksSlice.actions;

export default drinksSlice.reducer;
