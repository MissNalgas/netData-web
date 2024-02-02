import React, { createContext, useContext, useEffect, useRef } from "react";
const REFETCH_INTERVAL = 120000 // 2 minutes;

class MyEvent {
	private _listeners: any[] = [];

	addListener(listener: any) {
		this._listeners.push(listener);
	}

	removeListener(listener: any) {
		this._listeners = this._listeners.filter((l) => l !== listener);
	}

	call() {
		this._listeners.forEach((listener) => listener());
	}
}

const RefetchContext = createContext(new MyEvent());

export function useRefetch() {
	return useContext(RefetchContext);
}

export function RefetchProvider({children} : Readonly<{children: React.ReactNode}>) {

	const refetchEvent = useRef(new MyEvent());

	useEffect(() => {
		const interval = setInterval(() => {
			refetchEvent.current.call();
		}, REFETCH_INTERVAL);

		return () => clearInterval(interval);
	}, []);


	return (
		<RefetchContext.Provider value={refetchEvent.current}>
			{children}
		</RefetchContext.Provider>
	);
}
