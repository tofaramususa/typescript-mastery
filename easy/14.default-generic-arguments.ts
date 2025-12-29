type ApiRequest<Data, Method = 'GET'> = {
	data: Data;
	method: Method
}

type TSConfig <Param extends { strict: boolean} = { strict: true}> = {
	strict: Param['strict']
};

