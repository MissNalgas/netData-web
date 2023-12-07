import { useReducer } from "react";

export function useFilterState<
	TName extends string,
	State extends Record<TName, string>,
>(initialValue: State) {
	return useReducer((state: State, action: Partial<State>) => {
		return {
			...state,
			...action,
		};
	}, initialValue);
}
