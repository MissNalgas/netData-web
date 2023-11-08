import { combineReducers } from "redux";

import { reducer as userReducer } from "infrastructure/store/user";

// add reducers here
const rootReducer = combineReducers({
	user: userReducer,
});

// RootState is the type of the overall state of the application, and is used as the type of the first argument to useSelector
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;