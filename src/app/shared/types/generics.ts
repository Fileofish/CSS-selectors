export type Callback<T> = (isWin: T) => void;
export type WinCallback<G, T, M> = (isGameWin: G, levelData: T, level?: M) => void;