import { useState, useRef } from 'react';

const useStateRef = <T>(initialValue = {} as T) => {
	const [state, setStateInternal] = useState(initialValue);
	const myStateRef = useRef(state);
	const setState = (newState: T) => {
		myStateRef.current = newState;
		setStateInternal(newState);
	};
	// eslint-disable-next-line no-unused-vars
	return [state, setState] as [T, (state: T) => void];
};

export default useStateRef;
