const identity = <T,> (param: T) : T =>
{
	return param
};

const mapArray = <T, U> (arr: Array<T>, fn :(param: T) => U ) => arr.map(fn);