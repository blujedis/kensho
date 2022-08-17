/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Routes, Route } from 'solid-app-router';
import { Home, NotFound } from './pages';

import 'tailwindcss/tailwind.css';
import './index.css';

render(
	() => (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	),
	document.getElementById('root') as HTMLElement
);
