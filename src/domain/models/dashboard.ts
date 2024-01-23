import { TicketPriority } from "./ticket";

export interface responseDashboard {
	data: IDashboard;
	status: number;
}

export interface IDashboard {
	today: Day;
	yesterday: Day;
}

export interface Day {
	tickets: { [key: string]: Ticket[] };
	ticketsForPriorityByDepartment?: Ticket[];
	riskState: any;
	saving: Saving;
}

export interface Ticket {
	subject: string;
	group_id: null;
	department_id: number;
	category: string;
	sub_category: string;
	item_category: null;
	requester_id: number;
	responder_id: null;
	due_by: Date;
	fr_escalated: boolean;
	deleted: boolean;
	spam: boolean;
	email_config_id: null;
	fwd_emails: any[];
	reply_cc_emails: any[];
	cc_emails: any[];
	is_escalated: boolean;
	fr_due_by: Date;
	priority: number;
	source: number;
	status: number;
	created_at: Date;
	updated_at: Date;
	requested_for_id: number;
	to_emails: null;
	id: number;
	type: string;
	description: string;
	description_text: string;
	custom_fields: CustomFields;
}

export interface CustomFields {
	localidad: null;
	hora_de_la_falla: null;
	hubo_alguna_modificacin_en_el_firewall_o_en_su_plataforma_ltimamente: null;
	el_incidente_presentado_corresponde_a: null;
	client_type: null;
	cuales_son_sus_servicios_afectados_especificar_si_son_servicios_criticos_para_la_operacion: null;
	cantidad_estimada_de_personas_o_departamentos_afectados: null;
	riesgos_del_cambio: null;
	justificacin_de_ticket_pendiente: null;
	estado_del_cierre: null;
	solucin_del_caso: null;
	numero_de_op: null;
	numero_de_ticket_de_cambio: null;
	numero_de_incidente_cortex: null;
}

export interface Saving {
	a: number;
	b: number;
	c: number;
	d: number;
	e: number;
	f: number;
}

export interface responseGraphic {
	data: IGraphicWeek;
}
export interface IGraphicWeek {
	open: number;
	closed: number;
	tickets?: Ticket[];
}

export interface filtersGraphicDay {
	priority: TicketPriority;
	type: "general" | "cybersecurity";
	day: "today" | "yesterday";
	status: "open" | "closed";
}

export interface responseGraphicDay {
	data: IGraphicDay;
}

export interface IGraphicDay {
	Low: number;
	Medium: number;
	High: number;
	Urgent: number;
	total: number;
	tickets: Ticket[];
}
