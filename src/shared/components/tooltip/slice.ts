import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TooltipState {
	showTooltip: boolean;
	currentTooltip: number;
	totalTooltip: number;
}

const tooltipSlice = createSlice({
	name: "tooltips",
	initialState: {
		showTooltip: false,
		currentTooltip: 0,
		totalTooltip: 12,
	} as TooltipState,
	reducers: {
		setCurrentTooltip: (state, { payload }: PayloadAction<number>) => {
			state.currentTooltip = payload;
		},
		showTooltipModal: (state) => {
			state.showTooltip = true;
			state.currentTooltip = 0;
		},
		hideTooltipModal: (state) => {
			state.showTooltip = false;
			state.currentTooltip = 0;
		},
	},
});

export const { setCurrentTooltip, showTooltipModal, hideTooltipModal } =
	tooltipSlice.actions;

export default tooltipSlice.reducer;
