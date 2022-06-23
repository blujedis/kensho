export interface Route {
	label: string;
	href: string;
	visible: boolean | MenuVisibility[];
}
export type MenuVisibility = `${MenuName}:${true | false}`;
export type Routes = Record<keyof typeof _routesBase, Route>;
export type Menus = typeof _menus;
export type RouteName = keyof typeof _routes;
export type MenuName = keyof Menus;

const _routesBase = {
	home: { href: '/', visible: ['main:false'] },
	started: { label: 'Get Started', href: '/started' },
	demo: { label: 'Live Demo', href: '/demo' },
	docs: { href: '/docs' },
	feedback: { href: '/feedback' }
};

const _routes = _routesBase as unknown as Routes;

const _menus = {
	main: ['started', 'docs', 'feedback'],
	footer: ['home', 'started', 'docs', 'feedback']
};

function _parseVisibility(visibility: MenuVisibility | MenuVisibility[]) {
	if (!visibility) return {} as Record<MenuName, boolean>;
	if (!Array.isArray(visibility)) visibility = [visibility];
	const map = visibility.reduce((a, c) => {
		const [m, visible] = c.split(':');
		a[m as MenuName] = /true/.test(visible) ? true : false;
		return a;
	}, {} as Record<MenuName, boolean>);
	return map;
}

function _checkMenuVisibility(menu: MenuName, visibility: boolean | MenuVisibility[]) {
	if (typeof visibility === 'boolean') return visibility;
	const map = _parseVisibility(visibility);
	if (typeof map[menu] === 'undefined') return true;
	return map[menu];
}

function _getMenu(menu: MenuName, withRoutes: true, filter?: RouteName[]): Route[];
function _getMenu(menu: MenuName, withRoutes: false, filter?: RouteName[]): string[];
function _getMenu(menu: MenuName, filter?: RouteName[]): string[];
function _getMenu(
	menu: MenuName,
	withRoutes = false as boolean | RouteName[],
	filter = [] as RouteName[]
): string[] | Route[] {
	if (!menu) return [] as string[];
	if (Array.isArray(withRoutes)) {
		filter = withRoutes;
		withRoutes = false;
	}
	if (!withRoutes)
		return (_menus[menu] || []).filter((v) => !filter.includes(v as RouteName)) as string[];
	return (_menus[menu] || []).reduce((a, c) => {
		const route = _routes[c as RouteName] as Route;
		route.label = route.label || c.charAt(0).toUpperCase() + c.slice(1);
		route.href = route.href || '#';
		route.visible = typeof route.visible === 'undefined' ? true : route.visible;
		if (
			!route.visible ||
			(Array.isArray(route.visible) && !_checkMenuVisibility(menu, route.visible))
		)
			return a;
		return [...a, route];
	}, [] as Route[]);
}

function _getMenus(menus: MenuName | MenuName[], withRoutes: true, filter?: RouteName[]): Route[];
function _getMenus(menus: MenuName | MenuName[], withRoutes: false, filter?: RouteName[]): string[];
function _getMenus(menus: MenuName | MenuName[], filter?: RouteName[]): string[];
function _getMenus(
	menus: MenuName | MenuName[],
	withRoutes = false as boolean | RouteName[],
	filter = [] as RouteName[]
): string[] | Route[] {
	if (!menus || !menus.length) return [] as string[];
	menus = !Array.isArray(menus) ? [menus] : menus;
	if (Array.isArray(withRoutes)) {
		filter = withRoutes;
		withRoutes = false;
	}
	if (withRoutes === false)
		return menus.reduce((a, c) => {
			const menu = _getMenu(c, filter) || [];
			return [...a, ...menu];
		}, [] as string[]);
	return menus.reduce((a, c) => {
		const menu = _getMenu(c, true, filter) || [];
		return [...a, ...menu];
	}, [] as Route[]);
}

export default {
	routes: _routes,
	menus: _menus,
	getMenu: _getMenu,
	getMenus: _getMenus
};
