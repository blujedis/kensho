import { type Writable, writable } from 'svelte/store';

type SubscribeHandler<S> = (state: S) => void;

interface Store<T> {
  subscribe: Writable<T>['subscribe'],
  set: Writable<T>['set'],
}

function createStore<T>(def?: T): Store<T> {
  const { subscribe, set } = writable(def);
  return {
    subscribe,
    set
  };
}

export function createAdapter<S>(subscriber: (fn: SubscribeHandler<S>) => () => void): Store<S> {
  const store = createStore({} as S);
  subscriber(store.set);
  return store;
}