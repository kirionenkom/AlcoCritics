import {AlcoholType, SortType} from '@/interfaces/interfaces';
import {Alcohol} from "@prisma/client";


const SortFunctions = {
	[SortType.RateUp]: (firstDrink: Alcohol, secondDrink: Alcohol) =>
		firstDrink.rate - secondDrink.rate,
	[SortType.RateDown]: (firstDrink: Alcohol, secondDrink: Alcohol) =>
		secondDrink.rate - firstDrink.rate,
	[SortType.PriceUp]: (firstDrink: Alcohol, secondDrink: Alcohol) =>
		firstDrink.price - secondDrink.price,
	[SortType.PriceDown]: (firstDrink: Alcohol, secondDrink: Alcohol) =>
		secondDrink.price - firstDrink.price,
};

const FilterFunctions = {
	[AlcoholType.ALL]: (alcohol: Alcohol) => true,
	[AlcoholType.WHISKEY]: (alcohol: Alcohol) => alcohol.type === AlcoholType.WHISKEY,
	[AlcoholType.BEER]: (alcohol: Alcohol) => alcohol.type === AlcoholType.BEER,
	[AlcoholType.GIN]: (alcohol: Alcohol) => alcohol.type === AlcoholType.GIN,
	[AlcoholType.LIQUOR]: (alcohol: Alcohol) => alcohol.type === AlcoholType.LIQUOR,
	[AlcoholType.COCKTAIL]: (alcohol: Alcohol) => alcohol.type === AlcoholType.COCKTAIL,
	[AlcoholType.WINO]: (alcohol: Alcohol) => alcohol.type === AlcoholType.WINO,
	[AlcoholType.VODKA]: (alcohol: Alcohol) => alcohol.type === AlcoholType.VODKA,
};
export { SortFunctions, FilterFunctions };
