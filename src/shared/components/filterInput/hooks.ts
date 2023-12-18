import { FilterOption } from "@domain/models";
import { useReducer } from "react";

export function useFilterState<
	State extends Record<TName, FilterOption | null>,
	TName extends string,
>(initialValue: State) {
	return useReducer((state: State, action: Partial<State>) => {
		return {
			...state,
			...action,
		};
	}, initialValue);
}
