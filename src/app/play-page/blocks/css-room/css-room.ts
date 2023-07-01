import { DataStorage, globalDataStorage } from '../../../shared/data/dataStorage';
import { GameObject } from '../../../shared/types/interfaces';

export class CssRoom {
  private dataStorage: DataStorage;
  private objectId: number;
  constructor() {
    this.dataStorage = globalDataStorage;
    this.objectId = 0;
  }

  getCssRoom(): DocumentFragment {
    const fragment = document.createDocumentFragment();

    this.dataStorage.currentLevelData().gameObjects.forEach((object) => {
      const currentObject = this.createElement(object);

      if (object.child) {
        const childObject = this.createElement(object.child);

        currentObject.append(childObject);
      }
      fragment.append(currentObject);
    });
    this.objectId = 0;

    return fragment;
  }
  
  private createElement(object: GameObject): HTMLDivElement {
    const objectElement = document.createElement('div');
    const isParent = Boolean(object.child);
    const isReflection = (Math.random() < 0.5 && !isParent) ? 'reflection' : 'no-reflection';
    const attribute = (object.attribute) ? ` ${object.attribute}`: '';
    const objectName = object.type.split('--')[0];

    objectElement.className = `css-room__obj ${object.type} objectId${this.objectId}`;
    this.objectId++;

    objectElement.setAttribute('data-title', `<${objectName}${attribute}></${objectName}>`);
    objectElement.classList.add(isReflection);

    if (object.active) objectElement.classList.add('animation');

    return objectElement;
  }
}