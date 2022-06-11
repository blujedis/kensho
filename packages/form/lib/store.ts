import {
  writable, type Readable, type Subscriber, type Writable
} from 'svelte/store';

export interface Store<T> {
  subscribe: Readable<T>['subscribe'],
  set: Writable<T>['set'],
}

export function createStore<T>(def?: T): Store<T> {
  const { subscribe, set } = writable(def);
  return {
    subscribe,
    set
  };
}