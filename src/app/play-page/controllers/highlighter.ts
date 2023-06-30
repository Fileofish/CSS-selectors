export class Highlighter{
  private hoverElements: Element[];
  constructor() {
    this.hoverElements = [];
  }

  listenToHighLight(): void {
    const objectsArr = document.querySelectorAll('.css-room__obj');
    const elementsArr = document.querySelectorAll('.htmlRow');

    this.hoverElements = [...objectsArr, ...elementsArr];

    this.hoverElements.forEach((object) => {
      object.addEventListener('mouseenter', this.handleMouseEnter);
      object.addEventListener('mouseleave', this.handleMouseLeave);
    });
  }

  private handleMouseEnter = (e: Event): void => {
    const target = e.target as HTMLElement;
    const parentTargetObj = target.parentElement as HTMLElement;
    const isParentObject = parentTargetObj?.classList.contains('css-room__obj');

    this.addHighlight(target);

    if (isParentObject) this.removeHighlight(parentTargetObj);
  };

  private handleMouseLeave = (e: Event): void => {
    const target = e.target as HTMLElement;
    const parentTargetObj = target.parentNode as HTMLElement;
    const isParentObject = parentTargetObj?.classList.contains('css-room__obj');

    this.removeHighlight(target);

    if (isParentObject) this.addHighlight(parentTargetObj);
  };
  
  private addHighlight(target: HTMLElement): void {
    const targetId = target.className.split('Id')[1][0];
    const targetClass = `objectId${targetId}`;

    const targetObjs = document.querySelectorAll(`.${targetClass}`);

    targetObjs.forEach((elem) => {
      elem.classList.add('active');
    });
  }

  private removeHighlight(target: HTMLElement): void {
    const targetId = target.className.split('Id')[1][0];
    const targetClass = `objectId${targetId}`;

    const targetObjs = document.querySelectorAll(`.${targetClass}`);

    targetObjs.forEach((elem) => {
      elem.classList.remove('active');
    });
  }
}