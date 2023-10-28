import { AnyAction, Store, ThunkDispatch } from "@reduxjs/toolkit";
import reducers from "infrastructure/store/reducers";
import { useDispatch } from "react-redux";

// 1. Get the root state's type from reducers
export type RootStateTypeReducers = ReturnType<typeof reducers>;

// 2. Create a type for thunk dispatch
export type AppThunkDispatch = ThunkDispatch<
	RootStateTypeReducers,
	any,
	AnyAction
>;

// 3. Create a type for store using RootStateTypeReducers and Thunk enabled dispatch
export type AppStore = Omit<
	Store<RootStateTypeReducers, AnyAction>,
	"dispatch"
> & {
	dispatch: AppThunkDispatch;
};

// you can also create some redux hooks using the above explicit types
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
