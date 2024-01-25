/**
 * Formats date to a string in the format yyyy-mm-dd
 */
export function formatDateDTO(date: Date): `${number}-${string}-${string}` {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	return `${year}-${month}-${day}`;
}
