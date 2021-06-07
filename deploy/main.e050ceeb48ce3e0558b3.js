(()=>{"use strict";var e={14:(e,t,n)=>{n.r(t)},595:(e,t,n)=>{n.r(t)},624:(e,t,n)=>{n.r(t)},145:(e,t,n)=>{n.r(t)},76:(e,t,n)=>{n.r(t)},80:(e,t,n)=>{n.r(t)},382:(e,t,n)=>{n.r(t)},580:(e,t,n)=>{n.r(t)},373:(e,t,n)=>{n.r(t)},752:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,a){function r(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const s=n(229),a=n(346),r=n(872),o=n(54),l=n(978),d=n(517),c=n(543),m=n(795);t.App=class{constructor(e){var t;this.rootElement=e,this.boardSize="4",this.packImages=0,this.currentUser={name:"",email:"",lastname:"",score:0},this.Header=new r.Header(this.openRegistrationWindow,this.rootElement),this.rootElement.appendChild(this.Header.element),this.Settings=new a.Settings,this.About=new o.About,this.Score=new l.Score,this.Router=new m.Router("hash",window.location.href),this.Router.add(/about/,(()=>{this.changePager("about",this.About)})),this.Router.add(/score/,(()=>{this.changePager("score",this.Score)})),this.Router.add(/settings/,(()=>{this.changePager("settings",this.Settings)})),this.rootElement.appendChild(this.About.element),this.Settings.element.addEventListener("change",(e=>this.changeSettings(e))),window.addEventListener("registrationUser",(e=>{if(!c.isCustomEvent(e))throw new Error("not a custom event");this.userRegist(e)})),window.addEventListener("endGame",(e=>{if(this.Score=new l.Score,!c.isCustomEvent(e))throw new Error("not a custom event");this.currentUser.score=e.detail.score,this.changePager("score",this.Score);const t=JSON.parse(localStorage.getItem("top")||"[]");null==t||t.push(this.currentUser),localStorage.setItem("top",JSON.stringify(t))})),null===(t=document.querySelector('a[href="reak/#/score"'))||void 0===t||t.addEventListener("click",(e=>{console.log(window.location),this.changePager("score",this.Score)}))}start(){return i(this,void 0,void 0,(function*(){const e=yield fetch("./images.json"),t=(yield e.json())[this.packImages],n=t.images.map((e=>`${t.category}/${e}`)).slice(0,parseInt(this.boardSize,10)*parseInt(this.boardSize,10)/2);this.game.newGame(n,this.boardSize)}))}changeSettings(e){if(null!=e.target){const{classList:t,name:n,value:i}=e.target;if(!t.contains("settings__select"))return;"cardPack"===n&&(this.packImages=parseInt(i,10)),"boardSize"===n&&(this.boardSize=i)}}openRegistrationWindow(e){const t=new d.RegistrationWindow;e.appendChild(t.element),t.init(),console.log(this)}userRegist(e){this.currentUser=e.detail,this.Header.ButtonProfile.toStartBtn(),this.Header.ButtonProfile.element.addEventListener("click",(()=>this.newGame()))}newGame(){this.start(),this.game=new s.Game,this.rootElement.lastChild&&this.rootElement.replaceChild(this.game.element,this.rootElement.lastChild)}changePager(e,t){var n,i;return document.querySelector(`.header__item-${e}`)&&(null===(n=document.querySelector(".header__item-active"))||void 0===n||n.classList.remove("header__item-active"),null===(i=document.querySelector(`.header__item-${e}`))||void 0===i||i.classList.add("header__item-active")),this.rootElement.lastChild&&this.rootElement.replaceChild(t.element,this.rootElement.lastChild),null}}},939:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonProfile=void 0;const i=n(583);class s extends i.BaseComponent{constructor(e,t){super("div",["div"]);const n=document.createElement("button");n.innerText="Register New Player",n.classList.add("header__btn"),this.function=e,this.element.appendChild(n),n.addEventListener("click",(()=>this.function(t)))}toStartBtn(){var e;null===(e=this.element.firstChild)||void 0===e||e.remove();const t=document.createElement("button");t.innerText="Start new game",t.classList.add("header__btn"),this.element.appendChild(t)}}t.ButtonProfile=s},872:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0,n(14);const i=n(583),s=n(939);class a extends i.BaseComponent{constructor(e,t){super("header",["header"]),this.ButtonProfile=new s.ButtonProfile(e,t);const n=document.createElement("div");n.classList.add("header__wrapper");const i=document.createElement("div");i.classList.add("header__logo"),n.appendChild(i);const a=document.createElement("ul");a.classList.add("header__list"),n.appendChild(a),[{link:"#/about",name:"About game",class:"header__item-about",active:!0},{link:"#/score",name:"Best Score",class:"header__item-score",active:!1},{link:"#/settings",name:"Game Settings",class:"header__item-settings",active:!1}].forEach((e=>{const t=document.createElement("li");t.classList.add("header__item",e.class);const n=document.createElement("a");n.classList.add("header__link"),e.active&&t.classList.add("header__item-active"),n.href=e.link,n.innerText=e.name,t.appendChild(n),a.appendChild(t)})),n.appendChild(this.ButtonProfile.element),this.element.appendChild(n)}}t.Header=a},517:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RegistrationWindow=void 0,n(595);const i=n(583);class s extends i.BaseComponent{constructor(){super("div",["modal__container"]),this.element.innerHTML='\n    <div class="modal">\n    <h2 class="modal__header">Register a new player</h2>\n    <form>\n      <div class="modal__body">\n        <div class="modal__fields">\n          <div class="modal__field">\n            <label for="username" class="modal__label"\n              >First Name\n              <input\n                type="text"\n                id="username"\n                class="modal__input"\n                required\n                pattern="[^0-9(~!@#$%*()_—+=|:;<>,.?/^)]+"\n                maxlength="30"\n              />\n            </label>\n          </div>\n          <div class="modal__field">\n            <label for="userlastname" class="modal__label">\n              <span> Last name</span>\n              <input\n                type="text"\n                id="userlastname"\n                class="modal__input"\n                required\n                pattern="[^0-9(~!@#$%*()_—+=|:;<>,.?/^)]+"\n                maxlength="30"\n              />\n            </label>\n          </div>\n          <div class="modal__field">\n            <label for="useremail" class="modal__label">\n              <span> E-mail</span>\n              <input\n                type="email"\n                id="useremail"\n                class="modal__input"\n                required\n                maxlength="30"\n              />\n            </label>\n          </div>\n        </div>\n        <div class="modal__avatar-wrapper">\n          <img src="./images/avatar.png" alt="" class="modal__avatar" />\n        </div>\n      </div>\n      <div class="modal__footer">\n        <button class="modal__btn modal__btn-add">register</button>\n        <button class="modal__btn modal__btn-cancel">cancel</button>\n      </div>\n    </form>\n  </div>\n\n   '}init(){var e,t;null===(e=document.querySelector("form"))||void 0===e||e.addEventListener("submit",(e=>{this.registration(e)})),null===(t=document.querySelector(".modal__btn-cancel"))||void 0===t||t.addEventListener("click",(()=>this.cancel()))}registration(e){const t=document.querySelector("#username"),n=document.querySelector("#useremail"),i=document.querySelector("#userlastname");window.dispatchEvent(new CustomEvent("registrationUser",{detail:{name:t.value,email:n.value,lastname:i.value,score:0}})),e.preventDefault(),this.element.remove()}cancel(){this.element.remove()}}t.RegistrationWindow=s},795:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0,t.Router=class{constructor(e,t){this.routes=[],this.mode="history",this.root="/",this.current="",this.add=(e,t)=>{const n={path:e,cb:t};return this.routes.push(n),this},this.clearSlashes=e=>(console.log(e,e.toString().replace(/\/$/,"").replace(/^\//,"")),e.toString().replace(/\/$/,"").replace(/^\//,"")),this.getFragment=()=>{let e="";if("history"===this.mode)e=this.clearSlashes(decodeURI(window.location.pathname+window.location.search)),e=e.replace(/\?(.*)$/,""),e="/"!==this.root?e.replace(this.root,""):e;else{const t=window.location.href.match(/#(.*)$/);console.log(t),e=t?t[1]:""}return this.clearSlashes(e)},this.navigate=(e="")=>{"history"===this.mode?window.history.pushState(null,"",this.root+this.clearSlashes(e)):window.location.href=`${window.location.href.replace(/#(.*)/,"")}#${e}`},this.interval=()=>{this.current!==this.getFragment()&&(this.current=this.getFragment(),this.routes.some((e=>{const t=this.current.match(e.path);return!!t&&(t.shift(),e.cb.apply({},t),t)})))},this.listen=()=>{window.onpopstate=()=>this.interval()},this.mode=e,this.root=t,this.listen()}}},346:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Settings=void 0,n(624);const i=n(583);class s extends i.BaseComponent{constructor(){super("main",["main"]),this.element.innerHTML='\n       <div class="main__wrapper">\n<h2 class="settings__title">Game settings</h2>\n        <legend class="settings__legend">Pack Card:\n          <select name="cardPack" class="settings__select">\n            <option value="0" selected="nature">nature</option>\n            <option value="1">sea</option>\n          </select>\n        </legend>\n        <legend class="settings__legend">Board Size:\n          <select name="boardSize" class="settings__select">\n            <option value="4" selected="">4x4</option>\n            <option value="6">6x6</option>\n            <option value="8">8x8</option>\n          </select>\n        </legend>\n        </div>\n    '}}t.Settings=s},628:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WinnerWindown=void 0,n(145);const i=n(583);class s extends i.BaseComponent{constructor(e,t){super("div",["winnerWindown__wrapper"]),this.element.innerHTML=`\n\n      <div class="winnerWindown">\n      <span>Вы заработали:</span>\n      ${e} очков\n      <span>Время игры:</span><span>${(t/60).toFixed(2)} минуты</span>\n<button class="winnerWindown__btn">Ок</button>\n      </div>\n   `}}t.WinnerWindown=s},54:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.About=void 0;const i=n(583);class s extends i.BaseComponent{constructor(){super("main",["main"]),this.element.innerHTML='\n    <div class="main__wrapper">\n      <h2 class="main-title">Hot to play?</h2>\n      <div class="main__items">\n        <div class="main__item">\n          <div class="main__number">1</div>\n          <div class="main__text">Register new player in game</div>\n        </div>\n        <div class="main__item">\n          <img src="./images/4.png" alt="" srcset="">\n        </div>\n        <div class="main__item">\n          <div class="main__number">2</div>\n          <div class="main__text">Configure your game settings</div>\n        </div>\n        <div class="main__item">\n          <img src="./images/5.png" alt="" srcset="">\n        </div>\n        <div class="main__item">\n          <div class="main__number">3</div>\n          <div class="main__text">Start you new game!Remember card positions and match it before times up.</div>\n        </div>\n        <div class="main__item">\n          <img src="./images/6.png" alt="" srcset="">\n        </div>\n      </div>\n    </div>\n   '}}t.About=s},583:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor(e="div",t=[]){this.element=document.createElement(e),this.element.classList.add(...t)}}},977:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0,n(76);const i=n(583);class s extends i.BaseComponent{constructor(e){super("div",["card-container"]),this.image=e,this.isFlipped=!1,this.element.innerHTML=`\n    <div class="card">\n      <div class="card__front" style="background-image:url('./images/${e}')"></div>\n      <div class="card__back"></div>\n    </div>\n    `}flipToBack(){return this.isFlipped=!0,this.flip(!0)}flipToFront(){return this.isFlipped=!1,this.flip(!1)}flip(e=!1){return new Promise((t=>{this.element.classList.toggle("flipped",e),this.element.addEventListener("transitionend",(()=>t()),{once:!0})}))}}t.Card=s},610:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardsField=void 0,n(80);const i=n(583);class s extends i.BaseComponent{constructor(e){super("div",["cards-field"]),this.cards=[],this.showTime=e}clear(){this.cards=[],this.element.innerHTML=""}addCards(e){this.cards=e,this.cards.forEach((e=>{this.element.appendChild(e.element),setTimeout((()=>{this.cards.forEach((e=>e.flipToBack()))}),this.showTime)}))}}t.CardsField=s},229:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,a){function r(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0;const s=n(583),a=n(977),r=n(610),o=n(887),l=n(981),d=n(628),c=n(983),m={4:"card-big",6:"card-medium",8:"card-small"};class h extends s.BaseComponent{constructor(){super("main",["main","main__wrapper"]),this.isAnimation=!1,this.isGameStop=!1,this.attempts=0,this.mistakes=0,this.correctPair=0,this.totalCorrectPair=2,this.score=0,this.Timer=new l.Timer,this.element.appendChild(this.Timer.element),setTimeout((()=>this.Timer.start()),5e3),this.cardsField=new r.CardsField(5e3),this.element.appendChild(this.cardsField.element)}newGame(e,t){this.totalCorrectPair=Math.pow(parseInt(t,10),2)/2,this.cardsField.clear();const n=e.concat(e).map((e=>new a.Card(e))).sort((()=>Math.random()-.5));n.forEach((e=>{e.element.addEventListener("click",(()=>this.cardHandler(e))),e.element.classList.add(c.getKeyValue(t)(m))})),this.cardsField.addCards(n)}cardHandler(e){var t;return i(this,void 0,void 0,(function*(){if(!this.isGameStop&&e.isFlipped&&!this.isAnimation){if(this.isAnimation=!0,yield e.flipToFront(),!this.activeCard)return this.activeCard=e,void(this.isAnimation=!1);this.attempts+=1,this.activeCard.image!==e.image?(this.mistakes+=1,e.element.classList.add("mistake"),this.activeCard.element.classList.add("mistake"),yield o.delay(1e3),yield Promise.all([this.activeCard.flipToBack(),e.flipToBack()]),e.element.classList.remove("mistake"),this.activeCard.element.classList.remove("mistake")):(e.element.classList.add("done"),this.activeCard.element.classList.add("done"),this.correctPair+=1,this.correctPair>=this.totalCorrectPair&&(this.Timer.stop(),this.score=this.scoreCalculate(),this.element.append(new d.WinnerWindown(this.score,this.Timer.getTime()).element),null===(t=document.querySelector(".winnerWindown__btn"))||void 0===t||t.addEventListener("click",(()=>this.afterWin())))),this.activeCard=void 0,this.isAnimation=!1}}))}scoreCalculate(){const e=100*(this.attempts-this.mistakes)-10*this.Timer.getTime();return e>=0?e:0}winSitutation(){this.scoreCalculate()}afterWin(){window.dispatchEvent(new CustomEvent("endGame",{detail:{score:this.score}}))}}t.Game=h},978:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Score=void 0,n(382);const i=n(583);class s extends i.BaseComponent{constructor(){super("main",["main"]),localStorage.getItem("top")||localStorage.setItem("top",JSON.stringify([]));const e=JSON.parse(localStorage.getItem("top")||"[]");this.element.innerHTML=`<div class="main__wrapper">\n      <h2 class="main__title">Top 10 players</h2>\n      <ul class="score-table">\n        <li class="score-table__item">\n          <div class="score-table__number">#</div>\n          <div class="score-table__profile">Name</div>\n          <div class="score-table__email">E-mail</div>\n          <div class="score-table__score">Score:</div>\n        </li>\n    ${e.slice(0,10).map(((e,t)=>`\n      <li class="score-table__item">\n        <div class="score-table__number">${t+1}</div>\n        <div class="score-table__profile">${e.name}</div>\n        <div class="score-table__email">${e.email}</div>\n        <div class="score-table__count">${e.score}</div>\n      </li>\n    `)).join(" ")}\n      </ul>\n    </div>\n   `}}t.Score=s},887:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise((t=>{setTimeout(t,e)}))}},983:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getKeyValue=void 0,t.getKeyValue=e=>t=>t[e]},543:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isCustomEvent=void 0,t.isCustomEvent=function(e){return"detail"in e}},574:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.timeFormatting=void 0,t.timeFormatting=function(e){return e<=9?`0${e}`:`${e}`}},981:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0,n(580);const i=n(583),s=n(574);class a extends i.BaseComponent{constructor(){super("div",["timer"]),this.time=0,this.display=document.createElement("p"),this.display.innerHTML="00:00",this.element.appendChild(this.display)}start(){this.timer=setInterval((()=>this.changeTIme()),1e3)}changeTIme(){this.time++,this.display.innerHTML=`${s.timeFormatting(Math.floor(this.time/60))}:${s.timeFormatting(this.time%60)}`}stop(){clearInterval(this.timer),this.timer=null}getTime(){return this.time}}t.Timer=a}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(373);const e=n(752);window.onload=()=>{const t=document.getElementById("app");if(!t)throw Error("App root element not found");new e.App(t).start()}})()})();