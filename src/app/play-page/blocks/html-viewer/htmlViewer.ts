import { globalDataStorage } from '../../../shared/data/dataStorage';
import { IndexList } from '../../../shared/modules/indexList';
import { GameObject } from '../../../shared/types/interfaces';

export class HtmlViewer {
  private dataStorage = globalDataStorage;
  private indexList = new IndexList();
  private objectId = 0;

  getHtmlViewer(): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const isDarkTheme = true;
    const indexList = this.indexList.createIndexList(isDarkTheme);
    const codeHtmlForm = this.createCodeDisplay();

    fragment.append(indexList, codeHtmlForm);
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

      htmlOpenDivRoom.className = htmlCloseDivRoom.className = 'HTML-editor__room';
      currentElement.className = currentCloseElement.className = `htmlRow`;
      currentElement.setAttribute('data-objectId', `${this.objectId}`);
      currentCloseElement.setAttribute('data-objectId', `${this.objectId}`);
      codeHtmlDisplay.append(currentElement);
      this.objectId++;

      if (element.child) {
        const childObject = this.createHtmlElement(element.child);
  
        currentCloseElement.textContent = `</${element.type}>`;
        childObject.classList.add('htmlRow', `htmlRow--child`);
        childObject.setAttribute('data-objectId', `${this.objectId}`);
        codeHtmlDisplay.append(childObject, currentCloseElement);
        this.objectId++;
      }
    });
    codeHtmlDisplay.append(htmlCloseDivRoom);

    return codeHtmlDisplay;
  }
  
  private createHtmlElement(element: GameObject): HTMLDivElement {
    const objectElement = document.createElement('p');
    const isParent = (element.child) ? '-parent' : '';
    const [ objectName, isProperty ] = element.type.split('--');
    const variations = `${isProperty}${isParent}`;
    const variationElements: { [key: string]: string } = {
      'red-parent': `<${objectName} ${element.attribute}>`,
      'undefined-parent': `<${objectName}>`,
      'fancy': `<${objectName} ${element.attribute} />`,
      'red': `<${objectName} ${element.attribute}  >`,
      'small': `<${objectName} ${element.attribute} />`,
      'default': `<${objectName} />`
    };

    objectElement.textContent = variationElements[variations] || variationElements['default'];

    return objectElement;
  }
}