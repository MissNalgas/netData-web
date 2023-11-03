import { RootState } from "infrastructure/store/reducers";
// import { CustomerData } from "infrastructure/store/user/types";
import { createSelector } from "reselect";

/**
 *
 * Selector of info basic of user
 * @param {RootState} state
 * @return {*}  {CustomerData}
 */
// selector customer not use of createSelector
// function selectLoggedData(state: RootState): CustomerData {
// 	const { id, email, name, document, isLogged } = state.user.user;
// 	return { id, email, name, document, isLogged };
// }

const selectLoggedData = createSelector(
	(state: RootState) => state.user.user.id,
	(state: RootState) => state.user.user.email,
	(state: RootState) => state.user.user.name,
	(state: RootState) => state.user.user.document,
	(state: RootState) => state.user.user.isLogged,
	(id, email, name, document, isLogged) => ({
		id,
		email,
		name,
		document,
		isLogged,
	})
);

const selectUser = (state: { user: { user: any } }) => state.user.user;

export { selectLoggedData, selectUser };
