export const contants = {};

export const pagination = (data: Array<any>, itemsPagination: number) => {
	const pagination = [];
	for (let i = 0; i < data.length; i += itemsPagination) {
		pagination.push(data.slice(i, i + itemsPagination));
	}
	return pagination;
};
