import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "infrastructure/store/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
