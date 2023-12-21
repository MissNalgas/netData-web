import { Day, IDashboard, IGraphicWeek } from "@domain/models";

export type AppState = {
	dashboard: IDashboard;
	graphicWeek: IGraphicWeek;
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
