import { IndexList } from './indexList';

describe('IndexList', () => {
  let indexList: IndexList;

  beforeEach(() => {
    indexList = new IndexList();
  });

  it('should create an index list with the correct class name for dark theme', () => {
    const isDarkTheme = true;
    const indexListElement = indexList.createIndexList(isDarkTheme);

    expect(indexListElement.className).toBe('index-list index-list--dark');
  });

  it('should create an index list with the correct class name for light theme', () => {
    const isDarkTheme = false;
    const indexListElement = indexList.createIndexList(isDarkTheme);

    expect(indexListElement.className).toBe('index-list');
  });

  it('should create index items with the correct innerHTML', () => {
    const isDarkTheme = false;
    const indexListElement = indexList.createIndexList(isDarkTheme);
    const indexItems = indexListElement.querySelectorAll('li');

    indexItems.forEach((item, index) => {
      expect(item.innerHTML).toBe(String(index + 1));
    });
  });
});