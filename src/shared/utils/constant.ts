type categoryListStructure = {
	id: number;
	name: string;
	icon: string;
};

export const categoryList: categoryListStructure[] = [
	{ id: 1, name: "Aseo general", icon: "broom" },
	{ id: 2, name: "Aseo especializado", icon: "cleanliness" },
	{ id: 3, name: "Implementos de oficina", icon: "clip" },
	{ id: 4, name: "Implementos de papelería", icon: "stationery" },
	{ id: 5, name: "Cocina y zona de café", icon: "coffee" }
];
