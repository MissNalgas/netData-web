import { Day, IDashboard, IGraphicDay, IGraphicWeek } from "@domain/models";

export type AppState = {
	dashboard: IDashboard;
	graphicWeek: IGraphicWeek;
	graphicDay: IGraphicDay;
	loading: boolean;
};

export const dashboardDataInitial: Day = {
	tickets: {},
	riskState: "Low",
	saving: {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		e: 0,
		f: 0,
	},
	ticketsForPriorityByDepartment: [],
};
