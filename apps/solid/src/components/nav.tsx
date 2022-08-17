import type { Component } from 'solid-js';
import { Link, useLocation } from 'solid-app-router';
import routes from '../routes';

const linkDefault = `border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-indigo-500 mx-1.5 sm:mx-6`;

const linkActive = `text-gray-800 transition-colors duration-200 transform dark:text-gray-100 border-b-2 border-indigo-500 mx-1.5 sm:mx-6`;

const createLinks = (activePath: string) => {
	return routes.map((link, i) => {
		const isActive = activePath === link.href;
		const klass = isActive ? linkActive : linkDefault;
		return (
			<Link href={link.href}>
				<a class={klass}>{link.name}</a>
			</Link>
		);
	});
};

const Nav: Component = () => {
	const { pathname } = useLocation();
	return <>{createLinks(pathname)}</>;
};

export default Nav;
