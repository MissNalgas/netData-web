import { combineReducers } from "redux";

import { reducer as userReducer } from "infrastructure/store/user";
import tooltipReducer from "@shared/components/tooltip/slice";
import { reducer as chatReducer } from "infrastructure/store/chat";
import { reducer as notificationsReducer } from "infrastructure/store/notifications";

// add reducers here
const rootReducer = combineReducers({
	user: userReducer,
	chat: chatReducer,
	tooltips: tooltipReducer,
	notifications: notificationsReducer,
});

// RootState is the type of the overall state of the application, and is used as the type of the first argument to useSelector
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
