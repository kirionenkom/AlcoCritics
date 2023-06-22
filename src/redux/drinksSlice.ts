import {createAsyncThunk, createSlice, PayloadAction, SerializedError} from '@reduxjs/toolkit';
import {Alcohol} from "@prisma/client";
import {AlcoholType, LoadingStatus, ModalType, SortType} from '@/interfaces/interfaces'
import {FormProps} from "@/components/NewDrinkForm";
import axios from "axios";

type Drinks = {
	list: Alcohol[],
	sortType: SortType,
	alcoholType: string,
	searchRequest: string,
	status: string | null,
	loadingStatus: LoadingStatus,
	errorMessage: SerializedError | null,
	modalType: ModalType
};

export const addDrink = createAsyncThunk(
	'addDrink',
	async (drinkData: FormProps) => {
		const response = await axios.post('http://localhost:8080/api/newdrink', drinkData)
		return response.data
	}
)

interface updateDrinkProps {
	id: string,
	update: any
}

export const updateDrink = createAsyncThunk(
	'updateDrink',
	async (update: updateDrinkProps) => {
		const response = await axios.put('http://localhost:8080/api/updatedrink', update)
		return response.data
	}
)

export const deleteDrink = createAsyncThunk(
	'deleteDrink',
	async (drink: Alcohol) => {
		const response = await axios.delete(`http://localhost:8080/api/deletedrink/${drink.id}` )
		return response.data
	}
)

async function getDrinks() {
	const drinks = await axios.get('http://localhost:8080/api/drinks')
	return drinks.data
}


const initialState: Drinks = {
	modalType: ModalType.None,
	// @ts-ignore
	list: await getDrinks(),
	alcoholType: AlcoholType.ALL,
	searchRequest: '',
	sortType: SortType.RateUp,
	status :null,
	loadingStatus: LoadingStatus.None,
	errorMessage: null
};

const drinksSlice = createSlice({
	name: 'drinks',
	initialState: initialState,
	reducers: {
		setDrinks(state, action: PayloadAction<Alcohol[]>) {
			state.list = action.payload
		},
		changeRate(state, action: PayloadAction<{ id: string, update: { rate: number }}>){
			const drink = state.list.find(drink => drink.id === action.payload.id);
			if (drink) {
				drink.rate = action.payload.update.rate;
			}
		},
		setLoadingNone(state) {
			state.modalType = ModalType.None
			state.loadingStatus = LoadingStatus.None
			state.errorMessage = null
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
				state.modalType = ModalType.Create
				state.errorMessage = null
				state.loadingStatus = LoadingStatus.Loading
			})
			.addCase(addDrink.fulfilled, (state, action: PayloadAction<Alcohol>) => {
				state.loadingStatus = LoadingStatus.Idle
				state.errorMessage = null
				state.list.push(action.payload)
			})
			.addCase(addDrink.rejected, (state, action) => {
				state.loadingStatus = LoadingStatus.Failed
				state.errorMessage = action.error
			})
			.addCase(updateDrink.pending, (state) => {
				state.modalType = ModalType.Update
				state.errorMessage = null
				state.loadingStatus = LoadingStatus.Loading
			})
			.addCase(updateDrink.fulfilled, (state, action: PayloadAction<Alcohol>) => {
				state.loadingStatus = LoadingStatus.Idle
				state.errorMessage = null
				const index = state.list.findIndex((drink) => drink.id === action.payload.id);
				if (index) {
					state.list = [...state.list.slice(0, index), action.payload, ...state.list.slice(index + 1)]
				}
			})
			.addCase(updateDrink.rejected, (state, action) => {
				state.loadingStatus = LoadingStatus.Failed
				state.errorMessage = action.error
			})
			.addCase(deleteDrink.pending, (state) => {
				state.modalType = ModalType.Delete
				state.errorMessage = null
				state.loadingStatus = LoadingStatus.Loading
			})
			.addCase(deleteDrink.fulfilled, (state, action: PayloadAction<Alcohol>) => {
				state.loadingStatus = LoadingStatus.Idle
				state.errorMessage = null
				const index = state.list.findIndex((drink) => drink.id === action.payload.id);
				if (index) {
					state.list = [...state.list.slice(0, index),  ...state.list.slice(index + 1)]
				}
			})
			.addCase(deleteDrink.rejected, (state, action) => {
				state.loadingStatus = LoadingStatus.Failed
				state.errorMessage = action.error
			})
	}
});


export const {
	changeRate,
	changeSortType,
	changeAlcoholType,
	updateSearchRequest,
	setDrinks,
	setLoadingNone
} = drinksSlice.actions;

export default drinksSlice.reducer;
