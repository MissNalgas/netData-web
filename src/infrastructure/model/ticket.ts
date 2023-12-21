export interface ITicketCustomFieldsDTO {
	client_type: unknown;
	el_incidente_presentado_corresponde_a: unknown;
	estado_de_cierre: string;
	hubo_alguna_modificacin_en_el_firewall_o_en_su_plataforma_ltimamente: unknown;
	justificacin_de_ticket_pendiente: unknown;
	major_incident_type: unknown;
	numero_de_incidente_cortex: number;
	numero_de_oportunidad: unknown;
	numero_de_ticket_de_cambio: unknown;
	solucion_afectada: unknown;
	business_impact: unknown;
	impacted_locations: unknown;
	no_of_customers_impacted: unknown;
	localidad: unknown;
	hora_de_la_falla: unknown;
	cuales_son_sus_servicios_afectados_especificar_si_son_servicios_criticos_para_la_operacion: unknown;
	cantidad_estimada_de_personas_o_departamentos_afectados: unknown;
	riesgos_del_cambio_o_caso: unknown;
	id_oportunidad_hubspot: unknown;
	solucin_del_caso: string;
	revisin_y_verificacin_del_caso: unknown;
	usuarios: string;
	persistencia: string;
	sistema: string;
	objetivos: string;
	ttps: string;
	que_estamos_haciendo: string;
	que_necesitamos_hacer: string;
}
export interface ITicketDTO {
	subject: string;
	group_id: number;
	department_id: number;
	category: string;
	sub_category: string;
	item_category: unknown;
	requester_id: number;
	responder_id: number;
	due_by: string;
	fr_escalated: boolean;
	deleted: boolean;
	spam: boolean;
	email_config_id: unknown;
	fwd_emails: unknown[];
	reply_cc_emails: string[];
	cc_emails: string[];
	is_escalated: boolean;
	fr_due_by: string;
	priority: number;
	source: number;
	status: number;
	created_at: string;
	updated_at: string;
	requested_for_id: number;
	to_emails: unknown;
	id: number;
	type: string;
	description: string;
	description_text: string;
	workspace_id: number;
	custom_fields: ITicketCustomFieldsDTO;
}

export interface ITicketPerCategoryDTO {
	categories_en: string[];
	categories_es: string[];
	count: number[];
}

export interface ITicketPerPriorityDTO {
	Low: number;
	Medium: number;
	High: number;
	Urgent: number;
	total: number;
	tickets: number;
}

/* eslint-disable no-unused-vars */
export enum PriorityDTO {
	All = "all",
	High = "high",
	Medium = "medium",
	Low = "low",
	Urgent = "urgent",
}

export enum StatusDTO {
	Open = "open",
	Closed = "closed",
}

export interface IFilterParamDTO {
	priority?: PriorityDTO;
	status?: StatusDTO;
	category?: string;
	date?: `${number}-${number}-${number}`;
}

export interface ITicketsPerWeekDTO {
	data: number[][];
	hours: number[];
	days: string[];
	tickets: ITicketDTO[];
}
