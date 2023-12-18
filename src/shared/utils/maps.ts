export function formatDateDTO(date: Date): `${number}-${number}-${number}` {
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
