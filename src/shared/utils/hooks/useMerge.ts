import { useReducer } from "react";

export function useMerge<T>(initialState: T) {
	return useReducer((state: T, action: Partial<T>) => {
		return {
			...state,
			...action,
		};
	}, initialState);
}
