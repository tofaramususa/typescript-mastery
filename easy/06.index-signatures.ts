type GroceryList = {
	[listItem: string] : number
};

type InappropriateActionBySituation = {
	[situation: string] : string[]
};


interface Character {
	id: number,
	name: string,
	status: string,
	species: string
}

type CharactersById = {
	[index: number] : Character
};