import Nav from './nav';

const Header = () => {
	return (
		<div class="mb-12">
			<nav class="bg-white shadow dark:bg-gray-800">
				<div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
					<Nav />
				</div>
			</nav>
		</div>
	);
};

export default Header;
