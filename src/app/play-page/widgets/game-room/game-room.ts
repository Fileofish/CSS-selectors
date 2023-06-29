import { GameObject, LevelData } from '../../../shared/types/interfaces';

export class CssRoom {
  private objectId: number;
  constructor() {
    this.objectId = 0;
  }
  getCssRoom(levelsData: LevelData): DocumentFragment {
    const fragment = document.createDocumentFragment();

    levelsData.gameObjects.forEach((oject) => {
      const currentObject = this.createElement(oject);

      if (oject.child) {
        const childObject = this.createElement(oject.child);

        currentObject.append(childObject);
      }

      fragment.append(currentObject);
    });
    this.objectId = 0;

    return fragment;
  }
  private createElement(oject: GameObject): HTMLDivElement {
    const objectElement = document.createElement('div');
    const isParent = Boolean(oject.child);
    const isReflection = (Math.random() < 0.5 && !isParent) ? 'reflection' : 'no-reflection';
    const attribute = (oject.attribute) ? ` ${oject.attribute}`: '';
    const objectName = oject.type.split('--')[0];

    objectElement.className = `css-room__obj ${oject.type} objectId${this.objectId}`;
    this.objectId++;

    objectElement.setAttribute('data-title', `<${objectName}${attribute}></${objectName}>`);
    objectElement.classList.add(isReflection);

    if (oject.active) objectElement.classList.add('animation');

    return objectElement;
  }
}