import type { Component } from 'solid-js';
import Header from '../../components/header';
import useKensho from '@kensho/adapter-solid';
import Input from '../../components/input';

export const Home: Component = () => {
	const { register, store } = useKensho({
		initialValues: {
			name: 'Milton Waddams',
			email: 'milton@basement.com'
		},
		onSubmit(values) {
			console.log('submitted', values);
		}
	});

	return (
		<>
			<Header />
			<div class="mx-auto container max-w-3xl">
				<div class="flex space-x-4 mb-4">
					<span class="text-gray-800">Initialized: {store().initialized + ''}</span>
					<span>|</span>
					<span class="text-gray-800">Dirty: {store().dirty + ''}</span>
					<span>|</span>
					<span class="text-gray-800">Submitted: {store().submitted + ''}</span>
					<span>|</span>
					<span class="text-gray-800">Valid: {store().valid + ''}</span>
				</div>
				<form ref={register}>
					<div class="mb-4">
						<Input name="name" type="text" />
					</div>
					<div class="mb-4">
						<Input name="email" type="email" />
					</div>
					<div class="mt-8 grid grid-cols-4 gap-4 content-evenly">
						<button
							type="submit"
							class="py-2 px-6 border border-gray-200 shadow-sm hover:bg-gray-100 pointer"
						>
							Submit
						</button>

						<button
							type="reset"
							class="py-2 px-6 border border-gray-200 shadow-sm hover:bg-gray-100 pointer"
						>
							Reset
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
