import { createAction } from "@reduxjs/toolkit";

export const openDrawer = createAction<boolean>("layout/openDrawer");

export const closeDrawer = createAction<boolean>("layout/closeDrawer");
