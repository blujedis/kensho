export type Theme = typeof theme;
export type ThemeColor = 'default' | 'dark' | 'danger' | 'warning' | 'success' | 'info';

const alert = {
	default: 'bg-gray-200 text-gray-800',
	dark: 'bg-gray-800 text-white',
	danger: 'bg-rose-600 text-white',
	warning: 'bg-amber-600/90 text-white',
	success: 'bg-emerald-600 text-white',
	info: 'bg-sky-600 text-white'
};

const theme = {
	alert
};

export default theme;
