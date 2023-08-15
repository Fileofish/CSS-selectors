export class IndexList {
  private rowCount = 15;

  createIndexList(isDarkTheme: boolean): HTMLUListElement {
    const indexList = document.createElement('ul');

    indexList.className = (isDarkTheme) ? 'index-list index-list--dark' : 'index-list';

    for (let i = 1; i <= this.rowCount; i++) {
      const index = document.createElement('li');

      index.className = (isDarkTheme) ? 'index index--dark' : 'index';
      index.innerHTML = String(i);
      indexList.append(index);
    }

    return indexList;
  }
}