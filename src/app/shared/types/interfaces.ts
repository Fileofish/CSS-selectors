export interface LevelData {
  isPassed: boolean,
  winCondition: string[],
  header: string,
  hint: string,
  description: string,
  gameObjects: GameObject[],
}

export interface GameObject {
  type: string,
  active: boolean,
  attribute?: string,
  child?: GameObject
}

export interface SaveData {
  currentLevel: number;
  isPassedLevels: boolean[];
}