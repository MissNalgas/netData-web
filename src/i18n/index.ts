import { initReactI18next } from "react-i18next";

import i18n from "i18next";

const resources = {
	es: {
		welcome: require("./es/welcome.json"),
		login: require("./es/login.json"),
		buttons: require("./es/buttons.json"),
		label: require("./es/label.json"),
		sidebar: require("./es/label.json"),
		placeholder: require("./es/placeholder.json"),
		register: require("./es/register.json"),
		recover_password: require("./es/recover_password.json"),
		guide: require("./es/guide.json"),
		dashboard: require("./es/dashboard.json"),
		information: require("./es/information.json"),
		ticket_selected: require("./es/ticket_selected.json"),
		saving_month: require("./es/saving_month.json"),
		risk_levels_and_status: require("./es/risk_levels_and_status.json"),
		events_week: require("./es/events_week.json"),
		tickets_week: require("./es/tickets_week.json"),
	},
	en: {
		welcome: require("./en/welcome.json"),
		login: require("./en/login.json"),
		buttons: require("./en/buttons.json"),
		label: require("./en/label.json"),
		placeholder: require("./en/placeholder.json"),
		sidebar: require("./en/label.json"),
		register: require("./en/register.json"),
		recover_password: require("./en/recover_password.json"),
		guide: require("./en/guide.json"),
		dashboard: require("./en/dashboard.json"),
		information: require("./en/information.json"),
		ticket_selected: require("./en/ticket_selected.json"),
		saving_month: require("./en/saving_month.json"),
		risk_levels_and_status: require("./en/risk_levels_and_status.json"),
		events_week: require("./en/events_week.json"),
		tickets_week: require("./en/tickets_week.json"),
	},
};

const namespace: string[] = [
	"welcome",
	"login",
	"buttons",
	"label",
	"placeholder",
	"sidebar",
	"register",
	"recover_password",
	"guide",
	"dashboard",
	"information",
	"ticket_selected",
	"saving_month",
	"risk_levels_and_status",
	"events_week",
	"tickets_week",
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
		lng: "en",
		fallbackLng: "en",
		ns: namespace,
		defaultNS: "welcome",
		fallbackNS: "welcome",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
