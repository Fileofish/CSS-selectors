export type Callback<T> = (data: T) => void;
export type doubleCallback<T, C> = (data: T, callback: C) => void;