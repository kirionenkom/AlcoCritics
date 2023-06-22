import {configureStore} from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import drinksReducer, {setDrinks} from './drinksSlice';
import axios from "axios";
import {Alcohol} from "@prisma/client";
import {useAppDispatch} from "@/redux/hooks";

// @ts-ignore
const store = configureStore({
	reducer: {
		menu: menuReducer,
		drinks: drinksReducer,
	},
});



export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

