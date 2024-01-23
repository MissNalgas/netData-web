import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { AppStore } from "hooks";

// Storage for server side rendering
const createNoopStorage = () => {
	return {
		getItem(_key: any) {
			return Promise.resolve(null);
		},
		setItem(_key: any, value: any) {
			return Promise.resolve(value);
		},
		removeItem(_key: any) {
			return Promise.resolve();
		},
	};
};

// storage is the storage for the redux-persist
export const storage =
	typeof window !== "undefined"
		? createWebStorage("local")
		: createNoopStorage();

// add the stores to persist storage for server side rendering
const persistConfig = {
	key: "root",
	storage: storage,
	whitelist: ["user", "notifications", "dashboard"],
	blacklist: ["app"],
};

// persistedReducer is the combined reducers with the persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store is the redux store with the persistedReducer
export const store: AppStore = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: [thunkMiddleware],
});

// RootState is the type of the store
export type RootState = ReturnType<typeof store.getState>;

// persisted is the persistor for the store
export const persisted = persistStore(store);
