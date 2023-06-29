import { LevelData } from '../types/interfaces';

declare module '*.json' {
  const value: LevelData[];
  export default value;
}