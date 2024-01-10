import React, { useMemo, useState } from "react";

const DEFAULT_MAX_SIZE = 10;

type UseArrayPaginationReturn<T> = [
	ReadonlyArray<T>,
	number,
	React.Dispatch<React.SetStateAction<number>>,
	number,
];

export function useArrayPagination<T>(
	data?: ReadonlyArray<T>,
	maxSize = DEFAULT_MAX_SIZE
): UseArrayPaginationReturn<T> {
	const [page, setPage] = useState(1);

	const items = useMemo(() => {
		if (!data) return [];
		const index = page - 1;
		const start = index * maxSize;
		const end = start + maxSize;

		return data.slice(start, end);
	}, [page, maxSize, data]);

	const totalPages = useMemo(() => {
		if (!data) return 1;
		return Math.ceil(data.length / maxSize);
	}, [data, maxSize]);

	return [items, page, setPage, totalPages];
}
