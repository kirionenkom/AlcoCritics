import axios from "axios";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {Alcohol} from "@prisma/client";
import MainPage from "@/components/main-page";
import {useAppDispatch} from "@/redux/hooks";
import {setDrinks} from "@/redux/drinksSlice";


export default function Index() {
	return <MainPage></MainPage>
}

