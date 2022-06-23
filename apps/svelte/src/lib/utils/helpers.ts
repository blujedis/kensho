import type { DataType } from '$lib/types';

export const capitalize = (value: string | undefined) => {
	if (!value) return value;
	return value.charAt(0).toUpperCase() + value.slice(1);
};

export const ensureArray = <T>(value: T | T[]): T[] => {
	if (typeof value === 'undefined' || value === null || Array.isArray(value)) return [];
	return [value];
};

export const classNames = (...classes: (DataType | DataType[])[]) => {
	const flattened = classes.flat(4);
	return flattened
		.reduce((a, c) => {
			if (typeof c === 'string' && ~c.indexOf(' ')) {
				const segments = c.split(' ').map((v) => v.trim());
				a = [...a, ...segments].filter((v) => v !== null && typeof v !== 'undefined' && v !== '');
			} else {
				a = [...a, c];
			}
			return a;
		}, [] as any[])
		.join(' ');
};

export const stlyeNames = (...styles: (DataType | DataType[])[]) => {
	const flattened = styles.flat(4);
	return flattened
		.reduce((a, c) => {
			c = (c + '').trim();
			a = [...a, c];
			return a;
		}, [] as any[])
		.filter((v) => v !== null && typeof v !== 'undefined' && v !== '')
		.join('; ');
};

export function eq(value: unknown, compare: unknown) {
	return value === compare;
}

export function ne(value: unknown, compare: unknown) {
	return value !== compare;
}

export function gt(value: string | number, compare: string | number) {
	if (typeof value === 'string' && typeof compare === 'string')
		return value.length > compare.length;
	else if (typeof value === 'number' && typeof compare === 'number') return value > compare;
	return false;
}

export function lt(value: string | number, compare: string | number) {
	if (typeof value === 'string' && typeof compare === 'string')
		return value.length > compare.length;
	else if (typeof value === 'number' && typeof compare === 'number') return value > compare;
	return false;
}

export function gte(value: string | number, compare: string | number) {
	if (typeof value === 'string' && typeof compare === 'string')
		return value.length >= compare.length;
	else if (typeof value === 'number' && typeof compare === 'number') return value >= compare;
	return false;
}

export function lte(value: string | number, compare: string | number) {
	if (typeof value === 'string' && typeof compare === 'string')
		return value.length <= compare.length;
	else if (typeof value === 'number' && typeof compare === 'number') return value <= compare;
	return false;
}

export function incl(
	value: string | (DataType | Record<string, unknown>)[],
	compare: DataType | Record<string, unknown> | (Record<string, unknown> | DataType)[]
) {
	if (Array.isArray(compare) && !Array.isArray(value)) return false; // value cannot include an array.
	if (Array.isArray(value)) return value.some((v) => (compare as any[]).includes(v));
	if (typeof value === 'string' && typeof compare === 'string') return value.includes(compare);
	return false;
}

export function like(value: unknown, compare: unknown) {
	if (typeof value !== typeof compare) return false;
	if (eq(value, compare)) return true;
	if (typeof value === 'string' && typeof compare === 'string' && value.includes(compare))
		return true;
	if (Array.isArray(value) && Array.isArray(compare)) return value.some((v) => v.includes(compare));
	return false;
}

export const compare = {
	eq,
	ne,
	gt,
	lt,
	gte,
	lte,
	incl,
	like
};

export const prefersDarkMode = () => {
	if (typeof window === 'undefined') return 'light';
	const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	return isDark ? 'dark' : 'light';
};
