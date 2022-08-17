import type { DataTypeConfig } from '@kensho/adapter-solid';
import { Component, JSX } from 'solid-js';

type NativeInputProps = JSX.InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends NativeInputProps {
	label?: string | boolean;
	unbound?: boolean;
	datatype?: DataTypeConfig;
}

const capitalize = (value: string | undefined) => {
	if (!value) return value;
	return value.charAt(0).toUpperCase() + value.slice(1);
};

const Input: Component<InputProps> = (props) => {
	props = {
		label: typeof props.label === 'undefined' || props.label === true ? props.name : props.label,
		type: 'text',
		...props
	};

	const { label, unbound, datatype, ...rest } = props;

	let inputClass =
		'text-gray-700 focus:border-indigo-400 focus:ring-indigo-300 focus:ring-opacity-40 focus:outline-none focus:ring';

	let labelClass = 'text-gray-700';

	let wrapperClass = '';

	if (rest.type === 'radio' || rest.type === 'checkbox') {
		inputClass = inputClass + ' ml-2 align-middle';
		wrapperClass = 'mt-2';
	} else {
		inputClass =
			inputClass +
			' block w-full px-4 py-2 mt-2 border border-gray-200 bg-white shadow-sm rounded-sm';
		labelClass = labelClass + ' text-sm font-medium';
	}

	return (
		<div class={wrapperClass}>
			{!label ? null : (
				<label class={labelClass} for={rest.name}>
					{capitalize(label as string)}
				</label>
			)}
			<input {...rest} data-unbound={unbound} data-datatype={datatype} class={inputClass} />
		</div>
	);
};

export default Input;
