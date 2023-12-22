import { AppState } from "infrastructure/store/dashboard/types";

const initialState: AppState = {
	dashboard: {
		today: {
			tickets: {},
			ticketsForPriorityByDepartment: [],
			riskState: "",
			saving: {
				a: 0,
				b: 0,
				c: 0,
				d: 0,
				e: 0,
				f: 0,
			},
		},
		yesterday: {
			tickets: {},
			ticketsForPriorityByDepartment: [],
			riskState: "",
			saving: {
				a: 0,
				b: 0,
				c: 0,
				d: 0,
				e: 0,
				f: 0,
			},
		},
	},
	graphicWeek: {
		open: 0,
		closed: 0,
		tickets: [],
	},
	graphicDay: {
		Low: 0,
		Medium: 0,
		High: 0,
		Urgent: 0,
		total: 0,
		tickets: [],
	},
};

export default initialState;
