import { initReactI18next } from "react-i18next";

import i18n from "i18next";

const resources = {
	es: {
		welcome: require("./es/welcome.json"),
		login: require("./es/login.json"),
		sidebar: require("./es/sidebar.json"),
		register: require("./es/register.json"),
		recover_password: require("./es/recover_password.json"),
		guide: require("./es/guide.json"),
		dashboard: require("./es/dashboard.json"),
		information: require("./es/information.json"),
		ticket_selected: require("./es/ticket_selected.json"),
		saving_month: require("./es/saving_month.json"),
		events_week: require("./es/events_week.json"),
		tickets_week: require("./es/tickets_week.json"),
		profile: require("./es/profile.json"),
		events_today: require("./es/events_today.json"),
		heatmap: require("./es/heatmap.json"),
		filter: require("./es/filter.json"),
	},
	en: {
		welcome: require("./en/welcome.json"),
		login: require("./en/login.json"),
		sidebar: require("./en/sidebar.json"),
		register: require("./en/register.json"),
		recover_password: require("./en/recover_password.json"),
		guide: require("./en/guide.json"),
		dashboard: require("./en/dashboard.json"),
		information: require("./en/information.json"),
		ticket_selected: require("./en/ticket_selected.json"),
		saving_month: require("./en/saving_month.json"),
		events_week: require("./en/events_week.json"),
		tickets_week: require("./en/tickets_week.json"),
		profile: require("./en/profile.json"),
		events_today: require("./en/events_today.json"),
		heatmap: require("./en/heatmap.json"),
		filter: require("./en/filter.json"),
	},
};

const namespace: string[] = [
	"welcome",
	"login",
	"sidebar",
	"register",
	"recover_password",
	"guide",
	"dashboard",
	"information",
	"ticket_selected",
	"saving_month",
	"events_week",
	"tickets_week",
	"profile",
	"events_today",
	"heatmap",
	"filter",
];

export const supportedLocales: any = {
	es: {
		name: "Español",
		translationFileLoader: () => resources.es,
	},
	en: {
		name: "English",
		translationFileLoader: () => resources.en,
	},
};

const translationLoader: any = {
	type: "backend",
	init: () => {},
	read: function (language: any, namespaceParam: any, callback: any) {
		let resource;
		let error = null;

		try {
			resource =
				supportedLocales[language].translationFileLoader()[
					namespaceParam
				];
		} catch (_error) {
			error = _error;
		}

		callback(error, resource);
	},
};

i18n.use(initReactI18next)
	.use(translationLoader)
	.init({
		lng:
			(typeof localStorage !== "undefined" &&
				localStorage.getItem("language")) ||
			"en",
		fallbackLng: "en",
		ns: namespace,
		defaultNS: "welcome",
		fallbackNS: "welcome",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
