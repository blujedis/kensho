declare type SubscribeHandler<S> = (state: S) => void;
export declare function createAdapter<S>(subscriber: (fn: SubscribeHandler<S>, withState?: boolean) => {
    state: S;
    unsubscribe: () => void;
}): [S, (state: S) => void];
export {};
//# sourceMappingURL=adapter.d.ts.map