import { DataStorage, globalDataStorage } from '../../../shared/data/dataStorage';
import { IndexList } from '../../../shared/modules/indexList';
import { GameObject } from '../../../shared/types/interfaces';

export class HtmlViewer {
  private dataStorage: DataStorage;
  private indexList: IndexList;
  private objectId: number;
  constructor() {
    this.dataStorage = globalDataStorage;
    this.indexList = new IndexList();
    this.objectId = 0;
  }

  getHtmlViewer(): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const indexList = this.indexList.createIndexList(true);
    const codeHtmlForm = this.createCodeDisplay();

    fragment.append(indexList);
    fragment.append(codeHtmlForm);

    this.objectId = 0;
    
    return fragment;
  }

  private createCodeDisplay(): HTMLDivElement {
    const codeHtmlDisplay = document.createElement('div');
    const htmlOpenDivRoom = document.createElement('p');
    const htmlCloseDivRoom = document.createElement('p');

    codeHtmlDisplay.className = 'HTML-editor__display';
    htmlOpenDivRoom.textContent = '<div class="room">';
    htmlCloseDivRoom.textContent = '</div>';
    codeHtmlDisplay.append(htmlOpenDivRoom);
    this.dataStorage.currentLevelData().gameObjects.forEach((element) => {
      const currentElement = this.createHtmlElement(element);
      const currentCloseElement = document.createElement('p');

      currentElement.className = currentCloseElement.className = `htmlRow objectId${this.objectId}`;
      this.objectId++;

      codeHtmlDisplay.append(currentElement);

      if (element.child) {
        const childObject = this.createHtmlElement(element.child);
  
        currentCloseElement.textContent = `</${element.type}>`;
        childObject.classList.add('htmlRow', `htmlRow--child`, `objectId${this.objectId}`);
        this.objectId++;
        codeHtmlDisplay.append(childObject);
        codeHtmlDisplay.append(currentCloseElement);
      }
    });
    codeHtmlDisplay.append(htmlCloseDivRoom);

    return codeHtmlDisplay;
  }
  
  private createHtmlElement(element: GameObject): HTMLDivElement {
    const objectElement = document.createElement('p');
    const isParent = (element.child) ? '-parent' : '';
    const isProperty = element.type.split('--')[1];
    const variations = `${isProperty}${isParent}`;
    const objectName = element.type.split('--')[0];

    switch (variations) {
      case 'red-parent':
        objectElement.textContent = `<${objectName} ${element.attribute}>`;
        break;
      case 'undefined-parent': 
        objectElement.textContent = `<${objectName}>`;
        break;
      case 'fancy':
        objectElement.textContent = `<${objectName} ${element.attribute} />`;
        break;
      case 'red':
        objectElement.textContent = `<${objectName} ${element.attribute}  >`;
        break;
      case 'small':
        objectElement.textContent = `<${objectName} ${element.attribute} />`;
        break;
      default:
        objectElement.textContent = `<${objectName} />`;
        break;
    }

    return objectElement;
  }
}