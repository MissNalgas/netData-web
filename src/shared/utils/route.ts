/**
 * Checks if a certain route matches a regular expression
 */
export function matchesRegex(regex: RegExp) {
	return (route: string) => {
		return regex.test(route);
	};
}
