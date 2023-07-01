export type Callback<T> = (data: T) => void;
export type SelectLevelCallback<T, C> = (data: T, callback: C) => void;