import { combineReducers } from "redux";

import { reducer as userReducer } from "./user";
import tooltipReducer from "@shared/components/tooltip/slice";
import { reducer as dashboardReducer } from "./dashboard";
import { reducer as chatReducer } from "./chat";
import { reducer as notificationsReducer } from "./notifications";
import { reducer as layoutReducerReducer } from "./layout";

// add reducers here
const rootReducer = combineReducers({
	user: userReducer,
	dashboard: dashboardReducer,
	chat: chatReducer,
	tooltips: tooltipReducer,
	notifications: notificationsReducer,
	layout: layoutReducerReducer,
});

// RootState is the type of the overall state of the application, and is used as the type of the first argument to useSelector
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
