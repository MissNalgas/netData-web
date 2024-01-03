import { createAction } from "@reduxjs/toolkit";

export const changeStateDrawer = createAction<boolean>(
	"layout/changeStateDrawer"
);
