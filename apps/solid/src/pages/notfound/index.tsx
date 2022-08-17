import { Component } from 'solid-js';
import { Link } from 'solid-app-router';

export const NotFound: Component = () => {
	return (
		<div class="h-full mx-auto flex flex-col items-center justify-center">
			<div class="text-3xl flex items-center text-gray-500 mb-6">
				<span class="font-semibold text-5xl text-gray-600">404</span>
				<span class="px-2 font-extralight">|</span>
				<span class="font-extralight ">Page Not Found</span>
				<div></div>
			</div>
			<Link href="/" class="link">
				<a>Return Home</a>
			</Link>
		</div>
	);
};
