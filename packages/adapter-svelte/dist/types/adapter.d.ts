import { type Writable } from 'svelte/store';
declare type SubscribeHandler<S> = (state: S) => void;
interface Store<T> {
    subscribe: Writable<T>['subscribe'];
    set: Writable<T>['set'];
}
export declare function createAdapter<S>(subscriber: (fn: SubscribeHandler<S>) => () => void): Store<S>;
export {};
//# sourceMappingURL=adapter.d.ts.map