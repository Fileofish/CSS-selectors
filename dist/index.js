(()=>{"use strict";class e{constructor(){this.rowCount=15}createIndexList(e){const t=document.createElement("ul");t.className=e?"index-list index-list--dark":"index-list";for(let a=1;a<=this.rowCount;a++){const s=document.createElement("li");s.className=e?"index index--dark":"index",s.innerHTML=String(a),t.append(s)}return t}}const t=JSON.parse('[{"isPassed":true,"isHint":false,"winCondition":["#inCap","gray-cat:first-child"],"header":"Select the gray cat in a cap","hint":"#id","description":"Select element with the id <span class=\'high\'>inCap</span>","gameObjects":[{"type":"gray-cat--fancy","active":true,"attribute":"id=\\"inCap\\""},{"type":"racoon","active":false}]},{"isPassed":false,"isHint":false,"winCondition":[".cub"],"header":"Select cubs","hint":".class_name","description":"Select all elements with the <span class=\'high\'>cub</span> class.","gameObjects":[{"type":"racoon--small","active":true,"attribute":"class=\\"cub\\""},{"type":"racoon","active":false},{"type":"armchair","active":false,"child":{"type":"white-cat--small","active":true,"attribute":"class=\\"cub\\""}},{"type":"gray-cat--small","active":true,"attribute":"class=\\"cub\\""}]},{"isPassed":false,"isHint":false,"winCondition":["armchair .cub"],"header":"Select the cubs in a armchairs","hint":"A  .class_name","description":"Select all elements with class <span class=\'high\'>cub</span> in armchairs.","gameObjects":[{"type":"armchair","active":false,"child":{"type":"gray-cat--small","active":true,"attribute":"class=\\"cub\\""}},{"type":"carpet","active":false,"child":{"type":"gray-cat--small","active":false,"attribute":"class=\\"cub\\""}},{"type":"armchair","active":false,"child":{"type":"racoon--small","active":true,"attribute":"class=\\"cub\\""}}]},{"isPassed":false,"isHint":false,"winCondition":["armchair gray-cat"],"header":"Select the gray cat on the armchair","hint":"A  B","description":"Selects all <span class=\'high\'>B</span> inside of <span class=\'high\'>A</span>. <span class=\'high\'>B</span> is called a descendant because it is inside of another element.","gameObjects":[{"type":"racoon","active":false},{"type":"armchair","active":false,"child":{"type":"gray-cat","active":true}},{"type":"gray-cat","active":false}]},{"isPassed":false,"isHint":false,"winCondition":["#red white-cat"],"header":"Select the white cat on the red carpet","hint":"#id  A","description":"You can combine any selector with the descendent selector.","gameObjects":[{"type":"armchair","active":false,"child":{"type":"gray-cat","active":false}},{"type":"carpet--red","active":false,"attribute":"id=\\"red\\"","child":{"type":"white-cat","active":true}},{"type":"carpet","active":false,"child":{"type":"white-cat","active":false}}]},{"isPassed":false,"isHint":false,"winCondition":[".cub:first-child"],"header":"Select the first cub","hint":":first-child","description":"Select the first animal with the <span class=\'high\'>cub</span> class.","gameObjects":[{"type":"racoon--small","active":true,"attribute":"class=\\"cub\\""},{"type":"gray-cat--small","active":false,"attribute":"class=\\"cub\\""},{"type":"racoon--small","active":false,"attribute":"class=\\"cub\\""},{"type":"gray-cat--small","active":false,"attribute":"class=\\"cub\\""},{"type":"racoon--small","active":false,"attribute":"class=\\"cub\\""}]},{"isPassed":false,"isHint":false,"winCondition":["white-cat.small"],"header":"Select the small white cats","hint":"A.className","description":"You can combine the class selector with other selectors, like the type selector.","gameObjects":[{"type":"racoon","active":false},{"type":"racoon--small","active":false,"attribute":"class=\\"cub\\""},{"type":"armchair","active":false,"child":{"type":"white-cat--small","active":true,"attribute":"class=\\"cub\\""}},{"type":"carpet","active":false,"child":{"type":"white-cat","active":false}},{"type":"carpet","active":false,"child":{"type":"white-cat--small","active":true,"attribute":"class=\\"cub\\""}}]},{"isPassed":false,"isHint":false,"winCondition":["armchair gray-cat.cub","armchair .cub"],"header":"Select the cubs gray cats in the armchairs","hint":"Put your back into it!","description":"Combine what you learned in the last few levels to solve this one!","gameObjects":[{"type":"armchair","active":false,"child":{"type":"gray-cat","active":false}},{"type":"gray-cat--small","active":false,"attribute":"class=\\"cub\\""},{"type":"armchair","active":false,"child":{"type":"gray-cat--small","active":true,"attribute":"class=\\"cub\\""}},{"type":"armchair","active":false,"child":{"type":"white-cat--small","active":false,"attribute":"class=\\"cub\\""}},{"type":"armchair","active":false,"child":{"type":"gray-cat--small","active":true,"attribute":"class=\\"cub\\""}}]},{"isPassed":false,"isHint":false,"winCondition":["armchair, carpet","carpet, armchair"],"header":"Select all the armchairs and carpets","hint":"A, B","description":"Thanks to Shatner technology, this selects all <span class=\'high\'>A</span> and <span class=\'high\'>B</span> elements. You can combine any selectors this way, and you can specify more than two.","gameObjects":[{"type":"racoon--small","active":false,"attribute":"class=\\"cub\\""},{"type":"racoon","active":false},{"type":"armchair","active":true,"child":{"type":"racoon","active":true}},{"type":"carpet","active":true,"child":{"type":"racoon","active":true}},{"type":"armchair","active":true,"child":{"type":"racoon","active":true}},{"type":"racoon","active":false},{"type":"racoon--small","active":false,"attribute":"class=\\"cub\\""}]},{"isPassed":false,"isHint":false,"winCondition":["*"],"header":"Select all the things!","hint":"*","description":"You can select all elements with the universal selector!","gameObjects":[{"type":"gray-cat--small","active":true,"attribute":"class=\\"cub\\""},{"type":"armchair","active":true,"child":{"type":"white-cat","active":true}},{"type":"gray-cat","active":true},{"type":"armchair","active":true,"child":{"type":"white-cat","active":true}},{"type":"racoon--fancy","active":true,"attribute":"id=\\"inCap\\""}]}]'),a=new class{constructor(){this.levelsData=t,this.currentLevel=0}currentLevelData(){return this.levelsData[this.currentLevel]}};class s{constructor(){this.dataStorage=a,this.drawGamePageCallback=null,this.controlAnswerCallback=null,this.clickListener=()=>{if(this.drawGamePageCallback&&this.controlAnswerCallback){const e=this.getCheckedValue();this.controlAnswerCallback(e,this.drawGamePageCallback)}},this.keydownListener=e=>{const t=document.querySelector(".css-editor__display__button--enter");if("Enter"===e.key&&this.drawGamePageCallback&&this.controlAnswerCallback){const e=this.getCheckedValue();null==t||t.classList.add("active"),this.controlAnswerCallback(e,this.drawGamePageCallback)}}}getEnterButton(e,t){const a=document.createElement("button");return this.drawGamePageCallback=e,this.controlAnswerCallback=t,a.className="css-editor__display__button css-editor__display__button--enter",a.innerHTML="Enter",this.listenClickEnterButton(a),this.listenPushEnterKey(),a}cleanupListeners(){const e=document.querySelector(".css-editor__display__button--enter");document.removeEventListener("keydown",this.keydownListener),document.removeEventListener("keyup",this.keyupListener),null==e||e.removeEventListener("click",this.clickListener)}listenPushEnterKey(){document.addEventListener("keydown",this.keydownListener),document.addEventListener("keyup",this.keyupListener)}listenClickEnterButton(e){null==e||e.addEventListener("click",this.clickListener)}keyupListener(e){const t=document.querySelector(".css-editor__display__button--enter");"Enter"===e.key&&(null==t||t.classList.remove("active"))}getCheckedValue(){const e=document.querySelector(".css-editor__display__input"),t=null==e?void 0:e.value.trim(),a=this.dataStorage.currentLevelData().winCondition.includes(t),s=this.dataStorage.levelsData.filter((e=>e.isPassed)).length,i=a?"win":+t<=s?`goToLevel ${t}`:"wrong";return t&&(e.value=""),i}}class i{constructor(){this.dataStorage=a,this.getAnswer=()=>{const e=document.querySelector(".css-editor__display__input"),t=this.dataStorage.currentLevelData().winCondition[0];e.value="",t.split("").forEach(((t,a)=>{setTimeout((()=>e.value+=t),150*(a+1))})),this.dataStorage.currentLevelData().isHint=!0}}getHelpButton(){const e=document.createElement("button");return e.className="css-editor__display__button css-editor__display__button--help",e.innerHTML="Help",this.listenToClick(e),e}cleanupListener(){const e=document.querySelector(".css-editor__display__button--help");null==e||e.removeEventListener("click",this.getAnswer)}listenToClick(e){null==e||e.addEventListener("click",this.getAnswer)}}class c{getCodeInput(){const e=document.createElement("input");return e.className="css-editor__display__input active",e.type="text",e.setAttribute("autofocus","autofocus"),e.placeholder="Type in a CSS selector",e.oninput=()=>{""===e.value?e.classList.add("active"):e.classList.remove("active")},e}}class l{constructor(){this.indexList=new e,this.cssEditorEnter=new s,this.cssEditorHelp=new i,this.cssEditorInput=new c}getCssEditor(e,t){const a=document.createDocumentFragment(),s=this.indexList.createIndexList(!1),i=this.createCodeForm(e,t);return a.append(s,i),a}createCodeForm(e,t){const a=document.createElement("div"),s=document.createElement("div"),i=document.createElement("p"),c=this.cssEditorInput.getCodeInput(),l=this.cssEditorEnter.getEnterButton(e,t),r=this.cssEditorHelp.getHelpButton();return a.className="css-editor__display",s.className="css-editor__display__wrapper",a.append(c,l,s),i.className="css-editor__display__info",i.innerHTML='{<br>/* Styles would go here. */<br>}<br><br>/*<br>\n      Type a number to skip to a level.<br>Ex → "3" for level 3<br>*/',s.append(i,r),a}}class r{constructor(){this.dataStorage=a,this.indexList=new e,this.objectId=0}getHtmlViewer(){const e=document.createDocumentFragment(),t=this.indexList.createIndexList(!0),a=this.createCodeDisplay();return e.append(t,a),this.objectId=0,e}createCodeDisplay(){const e=document.createElement("div"),t=document.createElement("p"),a=document.createElement("p");return e.className="HTML-editor__display",t.textContent='<div class="room">',a.textContent="</div>",e.append(t),this.dataStorage.currentLevelData().gameObjects.forEach((s=>{const i=this.createHtmlElement(s),c=document.createElement("p");if(t.className=a.className="HTML-editor__room",i.className=c.className="htmlRow",i.setAttribute("data-objectId",`${this.objectId}`),c.setAttribute("data-objectId",`${this.objectId}`),e.append(i),this.objectId++,s.child){const t=this.createHtmlElement(s.child);c.textContent=`</${s.type}>`,t.classList.add("htmlRow","htmlRow--child"),t.setAttribute("data-objectId",`${this.objectId}`),e.append(t,c),this.objectId++}})),e.append(a),e}createHtmlElement(e){const t=document.createElement("p"),a=e.child?"-parent":"",[s,i]=e.type.split("--"),c=`${i}${a}`,l={"red-parent":`<${s} ${e.attribute}>`,"undefined-parent":`<${s}>`,fancy:`<${s} ${e.attribute} />`,red:`<${s} ${e.attribute}  >`,small:`<${s} ${e.attribute} />`,default:`<${s} />`};return t.textContent=l[c]||l.default,t}}class n{constructor(){this.dataStorage=a,this.objectId=0}getCssRoom(){const e=document.createDocumentFragment();return this.dataStorage.currentLevelData().gameObjects.forEach((t=>{const a=this.createElement(t);if(t.child){const e=this.createElement(t.child);a.append(e)}e.append(a)})),this.objectId=0,e}createElement(e){const t=document.createElement("div"),a=Boolean(e.child),s=Math.random()<.5&&!a?"reflection":"no-reflection",i=e.attribute?` ${e.attribute}`:"",c=e.type.split("--")[0];return t.className=`css-room__obj ${e.type}`,t.setAttribute("data-objectId",`${this.objectId}`),t.setAttribute("data-title",`<${c}${i}></${c}>`),t.classList.add(s),this.objectId++,e.active&&t.classList.add("animation"),t.classList.add("appearance"),setTimeout((()=>t.classList.remove("appearance")),500),t}}class o{constructor(){this.dataStorage=a,this.goToSelectedLevelCallback=null,this.drawGamePageCallback=null,this.selectLevel=e=>{var t;const a=e.target.closest(".level");if(this.drawGamePageCallback&&a){const e=+a.className.split("!")[1]-1;null===(t=this.goToSelectedLevelCallback)||void 0===t||t.call(this,e,this.drawGamePageCallback)}}}getLevelList(e,t){const a=document.createDocumentFragment();return this.goToSelectedLevelCallback=e,this.drawGamePageCallback=t,this.dataStorage.levelsData.forEach(((e,t)=>{const s=t+1,i=document.createElement("li"),c=document.createElement("p"),l=document.querySelector(".level-bar__icon"),r=null==l?void 0:l.content.cloneNode(!0),n=t===this.dataStorage.currentLevel;i.className=`level level!${s}!`,c.className="level__num",(e.isPassed||n)&&(i.classList.add("active"),this.listenPassedLevel(i)),e.isHint&&i.classList.add("hint"),n&&i.classList.add("current"),c.innerHTML=`\n        ${s} <span class="level-name num!${s}!">- ${this.dataStorage.levelsData[t].hint}</span>\n      `,i.append(r,c),a.append(i)})),a}listenPassedLevel(e){e.addEventListener("click",this.selectLevel)}cleanPassedLevelsListener(){const e=document.querySelector(".level-bar__list"),t=null==e?void 0:e.querySelectorAll(".active");null==t||t.forEach((e=>{e.removeEventListener("click",this.selectLevel)}))}listenToDescription(e){const t=document.querySelectorAll(".level-bar__description-button");null==t||t.forEach((t=>{t.addEventListener("click",(()=>{e()}))}))}listenToResetButton(e){const t=document.querySelector(".reset-button");null==t||t.addEventListener("click",(()=>{this.dataStorage.currentLevel=0,this.dataStorage.levelsData.forEach(((e,t)=>{t&&(e.isPassed=!1),e.isHint=!1})),e()}))}listenToBurgerButton(){const e=document.querySelector(".level-bar__burger-button"),t=document.querySelector(".level-bar"),a=document.querySelector(".level-bar__title");null==e||e.addEventListener("click",(()=>{null==e||e.classList.toggle("active"),null==t||t.classList.toggle("active"),null==a||a.classList.toggle("off")}))}createDescriptionWindow(){const e=document.querySelector(".window-description__title"),t=document.querySelector(".window-description__hint"),a=document.querySelector(".window-description__description");e&&t&&a&&(e.innerHTML=this.dataStorage.currentLevelData().header,t.innerHTML=this.dataStorage.currentLevelData().hint,a.innerHTML=this.dataStorage.currentLevelData().description)}}class d{getWindowWin(){const e=document.createElement("div"),t=document.createElement("h2"),a=document.createElement("p");return e.className="window-win__wrapper",t.className="window-win__title",t.innerHTML="Congratulations!",a.className="window-win__text",a.innerHTML="You are the best!<br>You can choose the completed level or reset the progress!",e.append(t,a),e}}class h{constructor(){this.cssRoom=new n,this.cssEditor=new l,this.htmlViewer=new r,this.levelBar=new o,this.windowWin=new d,this.viewWindowWin=()=>{const e=document.querySelector(".window-win"),t=this.windowWin.getWindowWin();null==e||e.classList.add("win"),null==e||e.append(t)}}viewGamePage(e,t,a){this.viewCssRoom(),this.viewCssEditor(e,a),this.viewHtmlViewer(),this.viewLevelList(t,e)}viewCssRoom(){const e=document.querySelector(".game-room__wrapper"),t=document.querySelector(".picture-loader"),a=this.cssRoom.getCssRoom(),s=this.cssRoom.getCssRoom();null==e||e.append(a),null==t||t.append(s)}viewCssEditor(e,t){const a=document.querySelector(".css-editor"),s=this.cssEditor.getCssEditor(e,t),i=document.querySelector(".css-editor__display__input");null==a||a.append(s),null==i||i.focus()}viewHtmlViewer(){const e=document.querySelector(".html-viewer"),t=this.htmlViewer.getHtmlViewer();null==e||e.append(t)}viewLevelList(e,t){const a=document.querySelector(".level-bar__list"),s=this.levelBar.getLevelList(e,t);null==a||a.append(s),this.levelBar.createDescriptionWindow()}toggleWindowDescription(){const e=document.querySelector(".window-description"),t=document.querySelector(".window-description__wrapper"),a=document.querySelector(".level-bar__description-button");null==e||e.classList.toggle("active"),null==t||t.classList.toggle("active"),null==a||a.classList.toggle("active")}}class u{constructor(){this.dataStorage=a}loadDataGame(){try{const e=localStorage.getItem("CSSPrankstersData");if(null!==e){const t=JSON.parse(e);this.dataStorage.currentLevel=t.currentLevel;for(let e=0;e<t.isPassedLevels.length;e++)this.dataStorage.levelsData[e].isPassed=t.isPassedLevels[e],this.dataStorage.levelsData[e].isHint=t.isHintedLevels[e]}}catch(e){console.error("Error: ",e)}}}var m,v;!function(e){e[e.start=0]="start",e[e.load=1]="load",e[e.win=2]="win"}(m||(m={})),function(e){e[e.nextLevel=0]="nextLevel",e[e.wrong=1]="wrong",e[e.win=2]="win",e[e.goToLevel=3]="goToLevel"}(v||(v={}));class p{constructor(){this.hoverElements=[],this.handleMouseEnter=e=>{const t=e.target,a=t.parentElement,s=null==a?void 0:a.classList.contains("css-room__obj");this.addHighlight(t),s&&this.removeHighlight(a)},this.handleMouseLeave=e=>{const t=e.target,a=t.parentNode,s=null==a?void 0:a.classList.contains("css-room__obj");this.removeHighlight(t),s&&this.addHighlight(a)}}listenToHighLight(){const e=document.querySelectorAll(".css-room__obj"),t=document.querySelectorAll(".htmlRow");this.hoverElements=[...e,...t],this.hoverElements.forEach((e=>{e.addEventListener("mouseenter",this.handleMouseEnter),e.addEventListener("mouseleave",this.handleMouseLeave)}))}addHighlight(e){const t=e.getAttribute("data-objectId");document.querySelectorAll(`[data-objectId = "${t}"]`).forEach((e=>{e.classList.add("active")}))}removeHighlight(e){const t=e.getAttribute("data-objectId");document.querySelectorAll(`[data-objectId="${t}"]`).forEach((e=>{e.classList.remove("active")}))}}class g{constructor(){this.dataStorage=a,this.saveGame=()=>{const e={currentLevel:this.dataStorage.currentLevel,isPassedLevels:[],isHintedLevels:[]};this.dataStorage.levelsData.forEach((t=>{e.isPassedLevels.push(t.isPassed),e.isHintedLevels.push(t.isHint)})),localStorage.setItem("CSSPrankstersData",JSON.stringify(e))}}listenToAutoSave(){window.onbeforeunload=this.saveGame}}class w{constructor(){this.levelBar=new o,this.viewer=new h,this.saver=new g,this.highlighter=new p,this.drawGamePageCallback=null,this.resetGame=()=>{var e;null===(e=this.drawGamePageCallback)||void 0===e||e.call(this,m.load)}}listenGamePage(e,t){switch(t&&(this.drawGamePageCallback=t),e){case m.start:this.levelBar.listenToDescription(this.viewer.toggleWindowDescription),this.levelBar.listenToResetButton(this.resetGame),this.levelBar.listenToBurgerButton(),this.saver.listenToAutoSave();break;case m.load:case m.win:this.highlighter.listenToHighLight()}}}class y{constructor(){this.dataStorage=a,this.goToSelectedLevel=(e,t)=>{this.dataStorage.currentLevel=e,t(m.load)}}}class b{constructor(){this.dataStorage=a,this.levelSelector=new y,this.controlAnswer=(e,t)=>{const a=e.split(" ");let s=0;switch(a[1]&&(s=+a[1]),"win"===a[0]&&this.dataStorage.currentLevel===this.dataStorage.levelsData.length-1?v.win:"win"===a[0]?v.nextLevel:"goToLevel"===a[0]&&s?v.goToLevel:v.wrong){case v.nextLevel:this.goNextLevel(t);break;case v.wrong:this.shakeScreen();break;case v.win:this.winGame(t);break;case v.goToLevel:this.levelSelector.goToSelectedLevel(s-1,t)}}}shakeScreen(){const e=document.querySelector(".code-wrapper");null==e||e.classList.add("shake"),setTimeout((()=>{null==e||e.classList.remove("shake")}),200)}goNextLevel(e){document.querySelectorAll(".animation").forEach((e=>{e.classList.add("fly"),setTimeout((()=>{e.classList.remove("fly")}),450)})),this.dataStorage.levelsData[this.dataStorage.currentLevel+1].isPassed=!0,this.dataStorage.currentLevel++,setTimeout((()=>{e(m.load)}),500)}winGame(e){const t=document.querySelectorAll(".animation"),a=document.querySelectorAll(".css-room__obj"),s=["I love you!😍","...","You're the best!🥳","Nevermind...😒","I'm a chair.","Let's do it again!😉","Everyone has demons inside.😈"];t.forEach((e=>{e.classList.add("fly")})),a.forEach(((e,t)=>{e.setAttribute("data-title",s[t])})),e(m.win)}}class L{constructor(){this.cssEditorHelp=new i,this.cssEditorEnter=new s}cleanGameArea(e){const t=document.querySelector(".game-room__wrapper"),a=document.querySelector(".html-viewer"),s=document.querySelector(".level-bar__list"),i=document.querySelector(".css-editor"),c=document.querySelector(".window-win"),l=document.querySelector(".picture-loader"),r=t&&a&&s&&i&&c&&l,n=e&&r;!e&&r&&(this.cssEditorHelp.cleanupListener(),this.cssEditorEnter.cleanupListeners(),t.innerHTML=a.innerHTML=s.innerHTML=i.innerHTML=c.innerHTML=l.innerHTML="",c.classList.remove("win")),n&&(a.innerHTML=s.innerHTML=i.innerHTML="")}}class S{constructor(){this.viewer=new h,this.loader=new u,this.listener=new w,this.levelSelector=new y,this.levelController=new b,this.cleaner=new L,this.drawGamePage=e=>{switch(e){case m.start:this.initGame();case m.load:this.loadLevel();break;case m.win:this.winGame()}}}initGame(){this.loader.loadDataGame(),this.listener.listenGamePage(m.start,this.drawGamePage)}loadLevel(){this.cleaner.cleanGameArea(!1),this.viewer.viewGamePage(this.drawGamePage,this.levelSelector.goToSelectedLevel,this.levelController.controlAnswer),this.listener.listenGamePage(m.load,this.drawGamePage)}winGame(){this.cleaner.cleanGameArea(!0),this.viewer.viewLevelList(this.levelSelector.goToSelectedLevel,this.drawGamePage),this.viewer.viewWindowWin(),this.listener.listenGamePage(m.win)}}(new class{constructor(){this.playPage=new S}start(){this.playPage.drawGamePage(m.start)}}).start()})();