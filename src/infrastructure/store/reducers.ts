import { combineReducers } from "redux";

import { reducer as userReducer } from "infrastructure/store/user";
import tooltipReducer from "@shared/components/tooltip/slice";
import { reducer as dashboardReducer } from "@infrastructure/store/dashboard";
import { reducer as chatReducer } from "infrastructure/store/chat";
import { reducer as notificationsReducer } from "infrastructure/store/notifications";
import { reducer as layoutReducerReducer } from "infrastructure/store/layout";

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
