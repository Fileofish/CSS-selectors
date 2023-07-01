(()=>{"use strict";class e{constructor(){this.rowCount=15}createIndexList(e){const t=document.createElement("ul");t.className=e?"index-list index-list--dark":"index-list";for(let a=1;a<=this.rowCount;a++){const s=document.createElement("li");s.className=e?"index index--dark":"index",s.innerHTML=String(a),t.append(s)}return t}}class t{constructor(){this.indexList=new e}getCssEditor(){const e=document.createDocumentFragment(),t=this.indexList.createIndexList(!1),a=this.createCodeForm();return e.append(t),e.append(a),e}createCodeForm(){const e=document.createElement("div"),t=document.createElement("input"),a=document.createElement("button"),s=document.createElement("div"),i=document.createElement("p"),c=document.createElement("button");return e.className="css-editor__form",t.className="css-editor__form__input active",t.type="text",t.setAttribute("autofocus","autofocus"),t.placeholder="Type in a CSS selector",e.append(t),a.className="css-editor__form__button css-editor__form__button--enter",a.innerHTML="Enter",e.append(a),s.className="css-editor__form__wrapper",e.append(s),i.className="css-editor__form__info",i.innerHTML='{<br>/* Styles would go here. */<br>}<br><br>/*<br>\n      Type a number to skip to a level.<br>Ex → "3" for level 3<br>*/',s.append(i),c.className="css-editor__form__button css-editor__form__button--help",c.innerHTML="Help",s.append(c),t.oninput=()=>{""===t.value?t.classList.add("active"):t.classList.remove("active")},e}}const a=JSON.parse('[{"isPassed":true,"isHint":false,"winCondition":["#inCap"],"header":"Select the gray cat in a cap","hint":"#id","description":"Select element with the id <span class=\'high\'>inCap</span>","gameObjects":[{"type":"gray-cat--fancy","active":true,"attribute":"id=\\"inCap\\""},{"type":"racoon","active":false}]},{"isPassed":false,"isHint":false,"winCondition":[".cub"],"header":"Select cubs","hint":".class_name","description":"Select all elements with the <span class=\'high\'>cub</span> class.","gameObjects":[{"type":"racoon--small","active":true,"attribute":"class=\\"cub\\""},{"type":"racoon","active":false},{"type":"armchair","active":false,"child":{"type":"white-cat--small","active":true,"attribute":"class=\\"cub\\""}},{"type":"gray-cat--small","active":true,"attribute":"class=\\"cub\\""}]},{"isPassed":false,"isHint":false,"winCondition":["armchair .cub"],"header":"Select the cubs in a armchairs","hint":"A  .class_name","description":"Select all elements with class <span class=\'high\'>cub</span> in armchairs.","gameObjects":[{"type":"armchair","active":false,"child":{"type":"gray-cat--small","active":true,"attribute":"class=\\"cub\\""}},{"type":"carpet","active":false,"child":{"type":"gray-cat--small","active":false,"attribute":"class=\\"cub\\""}},{"type":"armchair","active":false,"child":{"type":"racoon--small","active":true,"attribute":"class=\\"cub\\""}}]},{"isPassed":false,"isHint":false,"winCondition":["armchair gray-cat"],"header":"Select the gray cat on the armchair","hint":"A  B","description":"Selects all <span class=\'high\'>B</span> inside of <span class=\'high\'>A</span>. <span class=\'high\'>B</span> is called a descendant because it is inside of another element.","gameObjects":[{"type":"racoon","active":false},{"type":"armchair","active":false,"child":{"type":"gray-cat","active":true}},{"type":"gray-cat","active":false}]},{"isPassed":false,"isHint":false,"winCondition":["#red white-cat"],"header":"Select the white cat on the red carpet","hint":"#id  A","description":"You can combine any selector with the descendent selector.","gameObjects":[{"type":"armchair","active":false,"child":{"type":"gray-cat","active":false}},{"type":"carpet--red","active":false,"attribute":"id=\\"red\\"","child":{"type":"white-cat","active":true}},{"type":"carpet","active":false,"child":{"type":"white-cat","active":false}}]},{"isPassed":false,"isHint":false,"winCondition":[".cub:first-child"],"header":"Select the first cub","hint":":first-child","description":"Select the first animal with the <span class=\'high\'>cub</span> class.","gameObjects":[{"type":"racoon--small","active":true,"attribute":"class=\\"cub\\""},{"type":"gray-cat--small","active":false,"attribute":"class=\\"cub\\""},{"type":"racoon--small","active":false,"attribute":"class=\\"cub\\""},{"type":"gray-cat--small","active":false,"attribute":"class=\\"cub\\""},{"type":"racoon--small","active":false,"attribute":"class=\\"cub\\""}]},{"isPassed":false,"isHint":false,"winCondition":["white-cat.small"],"header":"Select the small white cats","hint":"A.className","description":"You can combine the class selector with other selectors, like the type selector.","gameObjects":[{"type":"racoon","active":false},{"type":"racoon--small","active":false,"attribute":"class=\\"cub\\""},{"type":"armchair","active":false,"child":{"type":"white-cat--small","active":true,"attribute":"class=\\"cub\\""}},{"type":"carpet","active":false,"child":{"type":"white-cat","active":false}},{"type":"carpet","active":false,"child":{"type":"white-cat--small","active":true,"attribute":"class=\\"cub\\""}}]},{"isPassed":false,"isHint":false,"winCondition":["armchair gray-cat.cub","armchair .cub"],"header":"Select the cubs gray cats in the armchairs","hint":"Put your back into it!","description":"Combine what you learned in the last few levels to solve this one!","gameObjects":[{"type":"armchair","active":false,"child":{"type":"gray-cat","active":false}},{"type":"gray-cat--small","active":false,"attribute":"class=\\"cub\\""},{"type":"armchair","active":false,"child":{"type":"gray-cat--small","active":true,"attribute":"class=\\"cub\\""}},{"type":"armchair","active":false,"child":{"type":"white-cat--small","active":false,"attribute":"class=\\"cub\\""}},{"type":"armchair","active":false,"child":{"type":"gray-cat--small","active":true,"attribute":"class=\\"cub\\""}}]},{"isPassed":false,"isHint":false,"winCondition":["armchair, carpet","carpet, armchair"],"header":"Select all the armchairs and carpets","hint":"A, B","description":"Thanks to Shatner technology, this selects all <span class=\'high\'>A</span> and <span class=\'high\'>B</span> elements. You can combine any selectors this way, and you can specify more than two.","gameObjects":[{"type":"racoon--small","active":false,"attribute":"class=\\"cub\\""},{"type":"racoon","active":false},{"type":"armchair","active":true,"child":{"type":"racoon","active":true}},{"type":"carpet","active":true,"child":{"type":"racoon","active":true}},{"type":"armchair","active":true,"child":{"type":"racoon","active":true}},{"type":"racoon","active":false},{"type":"racoon--small","active":false,"attribute":"class=\\"cub\\""}]},{"isPassed":false,"isHint":false,"winCondition":["*"],"header":"Select all the things!","hint":"*","description":"You can select all elements with the universal selector!","gameObjects":[{"type":"gray-cat--small","active":true,"attribute":"class=\\"cub\\""},{"type":"armchair","active":true,"child":{"type":"white-cat","active":true}},{"type":"gray-cat","active":true},{"type":"armchair","active":true,"child":{"type":"white-cat","active":true}},{"type":"racoon--fancy","active":true,"attribute":"id=\\"inCap\\""}]}]'),s=new class{constructor(){this.levelsData=a,this.currentLevel=0}currentLevelData(){return this.levelsData[this.currentLevel]}};class i{constructor(){this.dataStorage=s,this.indexList=new e,this.objectId=0}getHtmlViewer(){const e=document.createDocumentFragment(),t=this.indexList.createIndexList(!0),a=this.createCodeDisplay();return e.append(t),e.append(a),this.objectId=0,e}createCodeDisplay(){const e=document.createElement("div"),t=document.createElement("p"),a=document.createElement("p");return e.className="HTML-editor__display",t.textContent='<div class="room">',a.textContent="</div>",e.append(t),this.dataStorage.currentLevelData().gameObjects.forEach((s=>{const i=this.createHtmlElement(s),c=document.createElement("p");if(t.className=a.className="HTML-editor__room",i.className=c.className=`htmlRow objectId${this.objectId}`,this.objectId++,e.append(i),s.child){const t=this.createHtmlElement(s.child);c.textContent=`</${s.type}>`,t.classList.add("htmlRow","htmlRow--child",`objectId${this.objectId}`),this.objectId++,e.append(t),e.append(c)}})),e.append(a),e}createHtmlElement(e){const t=document.createElement("p"),a=e.child?"-parent":"",s=`${e.type.split("--")[1]}${a}`,i=e.type.split("--")[0];switch(s){case"red-parent":t.textContent=`<${i} ${e.attribute}>`;break;case"undefined-parent":t.textContent=`<${i}>`;break;case"fancy":case"small":t.textContent=`<${i} ${e.attribute} />`;break;case"red":t.textContent=`<${i} ${e.attribute}  >`;break;default:t.textContent=`<${i} />`}return t}}class c{constructor(){this.dataStorage=s,this.objectId=0}getCssRoom(){const e=document.createDocumentFragment();return this.dataStorage.currentLevelData().gameObjects.forEach((t=>{const a=this.createElement(t);if(t.child){const e=this.createElement(t.child);a.append(e)}e.append(a)})),this.objectId=0,e}createElement(e){const t=document.createElement("div"),a=Boolean(e.child),s=Math.random()<.5&&!a?"reflection":"no-reflection",i=e.attribute?` ${e.attribute}`:"",c=e.type.split("--")[0];return t.className=`css-room__obj ${e.type} objectId${this.objectId}`,this.objectId++,t.setAttribute("data-title",`<${c}${i}></${c}>`),t.classList.add(s),e.active&&t.classList.add("animation"),t}}class l{constructor(){this.selectLevel=e=>{const t=e.target,a=t.tagName;if("path"!==a&&"svg"!==a&&this.goToSelectedLevelCallback&&this.drawGamePageCallback){const e=+t.className.split("!")[1]-1;this.goToSelectedLevelCallback(e,this.drawGamePageCallback)}},this.dataStorage=s,this.goToSelectedLevelCallback=null,this.drawGamePageCallback=null}getLevelList(e,t){const a=document.createDocumentFragment();return this.goToSelectedLevelCallback=e,this.drawGamePageCallback=t,this.dataStorage.levelsData.forEach(((e,t)=>{const s=t+1,i=document.createElement("li"),c=document.createElement("p"),l=document.querySelector(".level-bar__icon"),r=null==l?void 0:l.content.cloneNode(!0),n=t===this.dataStorage.currentLevel;i.className=`level level!${s}!`,c.className=`level__num level__num!${s}!`,(e.isPassed||n)&&(i.classList.add("active"),this.listenPassedLevel(i)),e.isHint&&i.classList.add("hint"),n&&i.classList.add("current"),c.innerHTML=`\n        ${s} <span class="level-name num!${s}!">- ${this.dataStorage.levelsData[t].hint}</span>\n      `,i.append(r),i.append(c),a.append(i)})),a}listenPassedLevel(e){e.addEventListener("click",this.selectLevel)}cleanPassedLevelsListener(){const e=document.querySelector(".level-bar__list"),t=null==e?void 0:e.querySelectorAll(".active");null==t||t.forEach((e=>{e.removeEventListener("click",this.selectLevel)}))}listenToDescription(e){const t=document.querySelectorAll(".level-bar__description-button");null==t||t.forEach((t=>{t.addEventListener("click",(()=>{e()}))}))}listenToResetButton(e){const t=document.querySelector(".reset-button");null==t||t.addEventListener("click",(()=>{this.dataStorage.currentLevel=0,this.dataStorage.levelsData.forEach(((e,t)=>{t&&(e.isPassed=!1),e.isHint=!1})),e()}))}listenToBurgerButton(){const e=document.querySelector(".level-bar__burger-button"),t=document.querySelector(".level-bar"),a=document.querySelector(".level-bar__title");null==e||e.addEventListener("click",(()=>{null==e||e.classList.toggle("active"),null==t||t.classList.toggle("active"),null==a||a.classList.toggle("off")}))}createDescriptionWindow(){const e=document.querySelector(".window-description__title"),t=document.querySelector(".window-description__hint"),a=document.querySelector(".window-description__description");e&&t&&a&&(e.innerHTML=this.dataStorage.currentLevelData().header,t.innerHTML=this.dataStorage.currentLevelData().hint,a.innerHTML=this.dataStorage.currentLevelData().description)}}class r{getWindowWin(){const e=document.createDocumentFragment(),t=this.createWindowWin();return e.append(t),e}createWindowWin(){const e=document.createElement("div"),t=document.createElement("h2"),a=document.createElement("p");return e.className="window-win__wrapper",t.className="window-win__title",a.className="window-win__text",t.innerHTML="Congratulations!",a.innerHTML="You are the best!<br>You can choose the completed level or reset the progress!",e.append(t),e.append(a),e}}class n{constructor(){this.viewWindowWin=()=>{const e=document.querySelector(".window-win"),t=this.windowWin.getWindowWin();null==e||e.classList.add("win"),null==e||e.append(t)},this.cssRoom=new c,this.cssEditor=new t,this.htmlViewer=new i,this.levelBar=new l,this.windowWin=new r}viewGamePage(e,t){this.viewCssRoom(),this.viewCssEditor(),this.viewHtmlViewer(),this.viewLevelList(e,t),this.levelBar.createDescriptionWindow()}viewCssRoom(){const e=document.querySelector(".game-room__wrapper"),t=this.cssRoom.getCssRoom();null==e||e.append(t)}viewCssEditor(){const e=document.querySelector(".css-editor"),t=this.cssEditor.getCssEditor();null==e||e.append(t);const a=document.querySelector(".css-editor__form__input");null==a||a.focus()}viewHtmlViewer(){const e=document.querySelector(".html-viewer"),t=this.htmlViewer.getHtmlViewer();null==e||e.append(t)}viewLevelList(e,t){const a=document.querySelector(".level-bar__list"),s=this.levelBar.getLevelList(e,t);null==a||a.append(s)}toggleWindowDescription(){const e=document.querySelector(".window-description"),t=document.querySelector(".window-description__wrapper"),a=document.querySelector(".level-bar__description-button");null==e||e.classList.toggle("active"),null==t||t.classList.toggle("active"),null==a||a.classList.toggle("active")}}class o{constructor(){this.dataStorage=s}loadDataGame(){const e=localStorage.getItem("CSSPrankstersData");if(null!==e){const t=JSON.parse(e);this.dataStorage.currentLevel=t.currentLevel,t.isPassedLevels.forEach(((e,t)=>{this.dataStorage.levelsData[t].isPassed=e})),t.isHintedLevels.forEach(((e,t)=>{this.dataStorage.levelsData[t].isHint=e}))}}}class d{constructor(){this.clickListener=()=>{if(this.checkInputValueCallback){const e=this.checkValue();this.checkInputValueCallback(e)}},this.keydownListener=e=>{const t=document.querySelector(".css-editor__form__button--enter");if("Enter"===e.key&&this.checkInputValueCallback){const e=this.checkValue();null==t||t.classList.add("active"),setTimeout((()=>{null==t||t.classList.remove("active")}),150),this.checkInputValueCallback(e)}},this.dataStorage=s,this.checkInputValueCallback=null}cleanupListeners(e){const t=document.querySelector(".css-editor__form__button--enter");this.checkInputValueCallback=e,document.removeEventListener("keydown",this.keydownListener),null==t||t.removeEventListener("click",this.clickListener)}pushEnterKey(){document.addEventListener("keydown",this.keydownListener)}listenClickEnterButton(){const e=document.querySelector(".css-editor__form__button--enter");null==e||e.addEventListener("click",this.clickListener)}checkValue(){const e=document.querySelector(".css-editor__form__input"),t=null==e?void 0:e.value.trim(),a=this.dataStorage.currentLevelData().winCondition.includes(t),s=this.dataStorage.levelsData.filter((e=>e.isPassed)).length,i=a?"win":+t<=s?`goToLevel ${t}`:"wrong";return t&&(e.value=""),i}}class h{constructor(){this.getAnswer=()=>{const e=document.querySelector(".css-editor__form__input"),t=this.dataStorage.currentLevelData().winCondition[0];e.value="",t.split("").forEach(((t,a)=>{setTimeout((()=>e.value+=t),150*(a+1))})),this.dataStorage.currentLevelData().isHint=!0},this.dataStorage=s}cleanupListener(){const e=document.querySelector(".css-editor__form__button--help");null==e||e.removeEventListener("click",this.getAnswer)}clickHelpButton(){const e=document.querySelector(".css-editor__form__button--help");null==e||e.addEventListener("click",this.getAnswer)}}class u{constructor(){this.cssEditorEnter=new d,this.cssEditorHelp=new h}listenToEnter(e){this.cssEditorEnter.cleanupListeners(e),this.cssEditorEnter.pushEnterKey(),this.cssEditorEnter.listenClickEnterButton()}listenToHelp(){this.cssEditorHelp.cleanupListener(),this.cssEditorHelp.clickHelpButton()}}class m{cleanGameArea(e){const t=document.querySelector(".game-room__wrapper"),a=document.querySelector(".html-viewer"),s=document.querySelector(".level-bar__list"),i=document.querySelector(".css-editor"),c=document.querySelector(".window-win"),l=!e&&t&&a&&s&&i;e&&t&&a&&s&&i&&c&&(t.innerHTML=a.innerHTML=s.innerHTML=i.innerHTML=c.innerHTML="",c.classList.remove("win")),l&&(a.innerHTML=s.innerHTML=i.innerHTML="")}}class p{constructor(){this.goToSelectedLevel=(e,t)=>{this.dataStorage.currentLevel=e,this.cleaner.cleanGameArea(!0),t("load")},this.dataStorage=s,this.cleaner=new m}}class v{constructor(){this.dataStorage=s,this.cleaner=new m,this.levelSelector=new p}controlAnswer(e,t){const a=e.split(" ");let s=0;switch(a[1]&&(s=+a[1]),"win"===a[0]&&this.dataStorage.currentLevel===this.dataStorage.levelsData.length-1?"win":"win"===a[0]?"nextLevel":"goToLevel"===a[0]&&s?"goToLevel":"wrong"){case"nextLevel":this.goNextLevel(t);break;case"wrong":this.shakeScreen();break;case"win":this.winGame(t);break;case"goToLevel":this.levelSelector.goToSelectedLevel(s-1,t)}}shakeScreen(){const e=document.querySelector(".code-wrapper");null==e||e.classList.add("shake"),setTimeout((()=>{null==e||e.classList.remove("shake")}),200)}goNextLevel(e){document.querySelectorAll(".animation").forEach((e=>{e.classList.add("fly"),setTimeout((()=>{e.classList.remove("fly")}),450)})),this.dataStorage.levelsData[this.dataStorage.currentLevel+1].isPassed=!0,this.dataStorage.currentLevel++,setTimeout((()=>{this.cleaner.cleanGameArea(!0),e("load")}),500)}winGame(e){const t=document.querySelectorAll(".animation"),a=document.querySelectorAll(".css-room__obj"),s=["I love you!😍","...","You're the best!🥳","Nevermind...😒","I'm a chair.","Let's do it again!😉","Everyone has demons inside.😈"];t.forEach((e=>{e.classList.add("fly")})),a.forEach(((e,t)=>{e.setAttribute("data-title",s[t])})),this.cleaner.cleanGameArea(!1),e("win")}}class g{constructor(){this.handleMouseEnter=e=>{const t=e.target,a=t.parentElement,s=null==a?void 0:a.classList.contains("css-room__obj");this.addHighlight(t),s&&this.removeHighlight(a)},this.handleMouseLeave=e=>{const t=e.target,a=t.parentNode,s=null==a?void 0:a.classList.contains("css-room__obj");this.removeHighlight(t),s&&this.addHighlight(a)},this.hoverElements=[]}listenToHighLight(){const e=document.querySelectorAll(".css-room__obj"),t=document.querySelectorAll(".htmlRow");this.hoverElements=[...e,...t],this.hoverElements.forEach((e=>{e.addEventListener("mouseenter",this.handleMouseEnter),e.addEventListener("mouseleave",this.handleMouseLeave)}))}addHighlight(e){const t=`objectId${e.className.split("Id")[1][0]}`;document.querySelectorAll(`.${t}`).forEach((e=>{e.classList.add("active")}))}removeHighlight(e){const t=`objectId${e.className.split("Id")[1][0]}`;document.querySelectorAll(`.${t}`).forEach((e=>{e.classList.remove("active")}))}}class w{constructor(){this.saveGame=()=>{const e={currentLevel:this.dataStorage.currentLevel,isPassedLevels:[],isHintedLevels:[]};this.dataStorage.levelsData.forEach((t=>{e.isPassedLevels.push(t.isPassed),e.isHintedLevels.push(t.isHint)})),localStorage.setItem("CSSPrankstersData",JSON.stringify(e))},this.dataStorage=s}listenToAutoSave(){window.onbeforeunload=this.saveGame}}class b{constructor(){this.resetGame=()=>{this.cleaner.cleanGameArea(!0),this.drawGamePageCallback&&this.drawGamePageCallback("load")},this.checkInputValue=e=>{this.drawGamePageCallback&&this.answerChecker.controlAnswer(e,this.drawGamePageCallback)},this.levelBar=new l,this.cleaner=new m,this.viewer=new n,this.saver=new w,this.highlighter=new g,this.cssEditorFeatureAnalyzer=new u,this.answerChecker=new v,this.drawGamePageCallback=null}listenGamePage(e,t){switch(t&&(this.drawGamePageCallback=t),e){case"start":this.levelBar.listenToDescription(this.viewer.toggleWindowDescription),this.levelBar.listenToResetButton(this.resetGame),this.levelBar.listenToBurgerButton(),this.saver.listenToAutoSave();break;case"load":this.highlighter.listenToHighLight(),this.cssEditorFeatureAnalyzer.listenToEnter(this.checkInputValue),this.cssEditorFeatureAnalyzer.listenToHelp();break;case"win":this.highlighter.listenToHighLight()}}}class y{constructor(){this.drawGamePage=e=>{switch(e){case"start":this.loader.loadDataGame(),this.listener.listenGamePage("start",this.drawGamePage);case"load":this.viewer.viewGamePage(this.levelSelector.goToSelectedLevel,this.drawGamePage),this.listener.listenGamePage("load",this.drawGamePage);break;case"win":this.viewer.viewLevelList(this.levelSelector.goToSelectedLevel,this.drawGamePage),this.viewer.viewWindowWin(),this.listener.listenGamePage("win")}},this.viewer=new n,this.loader=new o,this.listener=new b,this.levelSelector=new p}}(new class{constructor(){this.playPage=new y}start(){this.playPage.drawGamePage("start")}}).start()})();