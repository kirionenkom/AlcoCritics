enum SortType {
	RateUp,
	RateDown,
	PriceUp,
	PriceDown
}

enum LoadingStatus {
	None,
	Loading,
	Idle,
	Failed
}

const AlcoholType = {
	ALL: 'ALL',
	BEER: "BEER",
	WHISKEY: "WHISKEY",
	WINO: "WINO",
	GIN: "GIN",
	COCKTAIL: "COCKTAIL",
	VODKA: "VODKA",
	LIQUOR: "LIQUOR"
}

enum ModalType {
	None,
	Create,
	Update,
	Delete
}

export { SortType, AlcoholType, LoadingStatus, ModalType }