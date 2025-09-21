export function formatDate(
	date: string | Date | null | undefined,
	options?: Intl.DateTimeFormatOptions
): string {
	if (!date) return 'Unknown';

	const d = typeof date === 'string' ? new Date(date) : date;
	if (isNaN(d.getTime())) return 'Unknown';

	const defaultOptions: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short',
		day: '2-digit'
	};

	return new Intl.DateTimeFormat(navigator.language || 'en-US', {
		...defaultOptions,
		...options
	}).format(d);
}
