import {
	AlcoholType,
	Drink,
	DrinkWithAuthor,
	SortType,
} from '@/interfaces/interfaces';
import { Alcohol } from '@prisma/client';

const SortFunctions = {
	[SortType.RateUp]: (firstDrink: Drink, secondDrink: Drink) =>
		firstDrink.rate - secondDrink.rate,
	[SortType.RateDown]: (firstDrink: Drink, secondDrink: Drink) =>
		secondDrink.rate - firstDrink.rate,
	[SortType.PriceUp]: (firstDrink: Drink, secondDrink: Drink) =>
		firstDrink.price - secondDrink.price,
	[SortType.PriceDown]: (firstDrink: Drink, secondDrink: Drink) =>
		secondDrink.price - firstDrink.price,
};

const FilterFunctions = {
	[AlcoholType.ALL]: () => true,
	[AlcoholType.WHISKEY]: (alcohol: Drink) =>
		alcohol.type === AlcoholType.WHISKEY,
	[AlcoholType.BEER]: (alcohol: Drink) => alcohol.type === AlcoholType.BEER,
	[AlcoholType.GIN]: (alcohol: Drink) => alcohol.type === AlcoholType.GIN,
	[AlcoholType.LIQUOR]: (alcohol: Drink) => alcohol.type === AlcoholType.LIQUOR,
	[AlcoholType.COCKTAIL]: (alcohol: Drink) =>
		alcohol.type === AlcoholType.COCKTAIL,
	[AlcoholType.WINO]: (alcohol: Drink) => alcohol.type === AlcoholType.WINO,
	[AlcoholType.VODKA]: (alcohol: Drink) => alcohol.type === AlcoholType.VODKA,
};
export { SortFunctions, FilterFunctions };
