import { DataStorage } from './dataStorage';
import levelsData from './level-data.json';

describe('DataStorage', () => {
  let dataStorage: DataStorage;

  beforeEach(() => {
    dataStorage = new DataStorage();
  });

  it('returns the correct current level data', () => {
    const currentLevelData = dataStorage.currentLevelData();
    const expectedLevelData = levelsData[dataStorage.currentLevel];

    expect(currentLevelData).toBe(expectedLevelData);
  });
});