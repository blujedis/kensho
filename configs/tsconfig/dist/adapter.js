import { useState } from 'react';
export function createAdapter(subscriber) {
    const [state, setState] = useState({});
    subscriber(setState);
    return [state, setState];
}
