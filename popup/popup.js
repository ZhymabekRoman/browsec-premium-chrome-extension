(()=>{"use strict";var e,t={8686:(e,t,i)=>{var o=i(3357),n=i(6492),s=i.n(n),r=i(664),a=i(2261),l=i(2080);const{_:c}=self,d=s().proxy.defaultCountry||"nl",p=async e=>{const{userPac:t}=await l.Z.getStateAsync(),i=Object.assign(c.cloneDeep(t),{mode:"proxy",country:e});return l.Z.dispatch({type:"User PAC: set",data:i}),i},u={add:async({country:e,domain:t,type:i})=>{const{userPac:o}=await l.Z.getStateAsync(),n=e||o.country||d,s=o.filters.slice();s.push({country:n,format:"domain",proxyMode:"proxy"===i,value:t}),s.sort(r.Z);const a=Object.assign(c.cloneDeep(o),{filters:s});return l.Z.dispatch({type:"User PAC: set",data:a}),a},remove:async e=>{const{userPac:t}=await l.Z.getStateAsync(),i=t.filters.slice();c.remove(i,(t=>t.value===e));const o=Object.assign(c.cloneDeep(t),{filters:i});return l.Z.dispatch({type:"User PAC: set",data:o}),o},toggle:async e=>{const{userPac:t}=await l.Z.getStateAsync(),i=t.filters.find((t=>"regex"!==t.format&&t.value===e));if(!i)throw new Error(`Nonexistent domain ${e} passed to highLevelPac.toggle`);const o=i.proxyMode?null:i.country;return u.changeCountry({domain:e,country:o})},changeCountry:async({country:e,domain:t})=>{const{userPac:i}=await l.Z.getStateAsync(),o=c.cloneDeep(i.filters),n=(0,a.Z)(o,t);if(n){e&&(n.country=e),n.proxyMode=Boolean(e);const t=Object.assign(c.cloneDeep(i),{filters:o});return l.Z.dispatch({type:"User PAC: set",data:t}),t}return e?u.add({country:e,domain:t,type:"proxy"}):u.add({domain:t,type:"proxy"})}},h={disable:async()=>{const{userPac:e}=await l.Z.getStateAsync(),t=Object.assign(c.cloneDeep(e),{mode:"direct"});return l.Z.dispatch({type:"User PAC: set",data:t}),t},enable:async()=>{const{userPac:e}=await l.Z.getStateAsync();return p(e.country||d)},setCountry:p,siteFilters:u};var g=i(8098),m=i(5693);const x=e=>Object.fromEntries(Object.entries(e).map((([e,t])=>[e,"string"==typeof t?(0,m.Z)(t):x(t)]))),v=x,f="\np, ul, ol, td, th{\n  padding: 0;\n  margin: 0;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nul, ol{\n  list-style: none;\n}\n";var b=i(7718);const y=v({help:"help",addSettingFor:"add_smart_setting_for_X",deleteSettingFor:"delete_smart_setting_for_X",editSmartSettings:"edit_smart_settings"}),w=(e,t)=>y[e].replace(/XXX/g,t);function k(){return b.dy`
  <style>
  ${f}
  :host{
    display: block;
    position: absolute;
    bottom: 40px;
    font-size: 12px;
    color: var( --brand-blue );
  }
  :host > .In{
    position: relative;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #bcbcbc;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.35);
  }

  .Element{
    padding: 0 12px;
    line-height: 34px;
    white-space: nowrap;
    cursor: pointer;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .Element:hover{
    background: var( --brand-blue );
    color: #fff;
  }
  .Element ~ .Element{
    border-top: 1px solid #e6e6e6;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  .Element:last-child{
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  </style>

  <div class="In">
  ${(()=>this.domain?this.containsFilter?b.dy`
    <div class="Element" @click="${this.removeFilter}">
      ${w("deleteSettingFor",this.unicodeDomain)}
    </div>`:b.dy`
    <div class="Element" @click="${this.addFilter}">
      ${w("addSettingFor",this.unicodeDomain)}
    </div>`:"")()}

  ${(()=>this.showEditSmartSettings?b.dy`
    <div class="Element" @click="${this.editSettings}">
      ${y.editSmartSettings}
    </div>`:"")()}
    <div class="Element" @click="${this.openHelp}">${y.help}</div>
  </div>`}var _=i(8897),E=i(7679);class S extends((0,E.$)(l.Z)(b.oi)){render(){return k.call(this)}static get properties(){return{containsFilter:{type:Boolean},domain:{type:String},showEditSmartSettings:{type:Boolean},unicodeDomain:{type:String}}}constructor(){super(),this.containsFilter=null,this.domain="",this.unicodeDomain=""}async updated(e){if(e.has("domain")){if(!this.domain)return;this.unicodeDomain=g.ZP.toUnicode(this.domain)}}stateChanged({page:e}){const t=e.split(":");this.showEditSmartSettings="index"!==t[0]||"filters"!==t[1]}addFilter(){let{userPac:{filters:e},user:{premium:t}}=l.Z.getStateSync();t||e.length?l.Z.dispatch({type:"Page: set",page:"index:filters:"+this.domain}):this.showPremiumPopup(),this.remove()}editSettings(){(0,_.Z)({type:"сounters.increase",property:"popup: smart settings: open list"}),l.Z.dispatch({type:"Page: set",page:"index:filters"}),this.remove()}openHelp(){(0,_.Z)({type:"сounters.increase",property:"popup: smart settings: open help"}),(0,_.Z)({type:"create tab",options:"/pages/help/help.html"}),this.remove()}removeFilter(){h.siteFilters.remove(this.domain),this.remove()}async showPremiumPopup(){const e=document.createElement("popup-premium-onerule");e.style.cssText="top:-100%;",document.body.append(e),o.Z.partial({category:"premium",action:"show"});const t=e.animate([{top:"-100%"},{top:"0"}],{duration:800,easing:"linear"});await new Promise((e=>{t.onfinish=e})),e.style.cssText=""}}customElements.define("context-menu",S);class C extends b.oi{constructor(){super(),this.bottom=0}render(){return b.dy`
    <style>
    ${f}
    :host{
      display:block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }

    :host > .In{
      position: absolute;
      bottom: ${this.bottom}px;
      left: 0;
      right: 0;
      text-align: center;
    }
    :host > .In > .In{
      text-align: left;
      display: inline-block;
      vertical-align: top;
    }
    .Text{
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      color: #fff;
      margin-bottom: -12px;
    }
    .Arrow{
      background: url( '/images/tip_arrow.svg' ) 0 0 no-repeat;
      width: 50px;
      padding-top: 100px;
      height: 0;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
      margin-left: auto;
    }

    .Close{
      width: 16px;
      height: 16px;
      position: absolute;
      cursor: pointer;
      font-size: 0;
      right: 20px;
      top: 20px;
      transform: rotate(45deg)
    }
    .Close::before,
    .Close::after{
      content: '';
      display: block;
      position: absolute;
      background: #fff;
      overflow: hidden;
    }
    .Close::before{
      top: 0;
      left: calc( 50% - 1px );
      height: 100%;
      width: 2px;
    }
    .Close::after{
      left: 0;
      top: calc( 50% - 1px );
      width: 100%;
      height: 2px;
    }
    .Close:hover::before,
    .Close:hover::after{
      background: #ddd;
    }
    </style>

    <div class="In"><div class="In">
      <div class="Text">
      Click here<br/>
        to Start VPN
      </div>
      <div class="Arrow"></div>
    </div></div>
    <div class="Close" @click="${this.close}"></div>`}close(){this.dispatchEvent(new CustomEvent("close"))}}customElements.define("first-start-tips-button",C);class P extends b.oi{render(){return b.dy`
    <style>
    ${f}
    :host{
      display:block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      text-align: center;
    }
    :host > .In{
      position: absolute;
      top: 55px;
      bottom: 40px;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
    }
    :host > .In > .In{
      width: 300px;
      margin: 0 auto;
    }

    .Title{
      font-size: 18px;
      font-weight: 600;
    }
    .Text{
      padding-top: 25px;
    }

    .Close{
      width: 16px;
      height: 16px;
      position: absolute;
      cursor: pointer;
      font-size: 0;
      right: 20px;
      top: 20px;
      transform: rotate(45deg)
    }
    .Close::before,
    .Close::after{
      content: '';
      display: block;
      position: absolute;
      background: #fff;
      overflow: hidden;
    }
    .Close::before{
      top: 0;
      left: calc( 50% - 1px );
      height: 100%;
      width: 2px;
    }
    .Close::after{
      left: 0;
      top: calc( 50% - 1px );
      width: 100%;
      height: 2px;
    }
    .Close:hover::before,
    .Close:hover::after{
      background: #ddd;
    }
    </style>

    <div class="In"><div class="In">
      <div class="Title">
        Your VPN connection is now <br/>
        protected by Browsec
      </div>
      <div class="Text">
        You can visit any site now.<br/>
        All your traffic will route through our VPN server.
      </div>
    </div></div>
    <div class="Close" @click="${this.close}"></div>`}close(){this.dispatchEvent(new CustomEvent("close"))}}customElements.define("first-start-tips-protected",P);class $ extends b.oi{render(){return b.dy`
    <style>
    ${f}
    :host{
      display: block;
      position: absolute;
    }
    :host > .Bg{
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
    :host > .Bg::after{
      content: '';
      display: block;
      position: absolute;
      top:0px;left:0px;
      width: 100%;
      height: 100%;
      background: var( --brand-blue );
      border-radius: 4px;
      overflow: hidden;
      text-indent: -9999px;
    }
    :host > .Bg > .Corner{
      position: absolute;
      left: 16px;
      bottom: 100%;
      width: 10px;
      height: 5px;
      overflow: hidden;
    }
    :host > .Bg > .Corner::after{
      content: '';
      display: block;
      border: 5px solid transparent;
      border-bottom-color: var( --brand-blue );
      width: 0;
      height: 0;
      overflow: hidden;
      margin-top: -5px;
    }
    :host > .In{
      position: relative;
      padding: 5px 14px;
      color: #fff;
      font-size: 12px;
    }
    </style>

    <div class="Bg"><div class="Corner"></div></div>
    <div class="In">${this.text}</div>`}static get properties(){return{text:{type:String}}}constructor(){super(),this.text=""}}customElements.define("general-tooltip",$);const B={add:e=>(0,_.Z)({type:"actions.favorites.add",country:e}),remove:e=>(0,_.Z)({type:"actions.favorites.remove",country:e})},I=async({email:e,password:t})=>{let i=await(0,_.Z)({type:"actions.login",data:{email:e,password:t}});if(i.success)return i.success;if(i.error){let{status:e,responseText:t,message:o}=i.error,n=new Error(o);throw void 0!==e&&(n.status=e),void 0!==t&&(n.responseText=t),n}},L=()=>(0,_.Z)({type:"actions.logout"}),Z=v({goBack:"go_back",signIn:"sign_in",signOut:"sign_out"});function z(){return b.dy`
  <style>
  ${f}
  :host{
    display: block;
    height: 56px;
    line-height: 56px;
    border: 1px solid var( --brand-blue );
    border-width: 0 5px 0 5px;
    background: var( --brand-blue );
    color: #fff;
    overflow: hidden;
    position: relative;
  }
  :host::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }
  :host > .In{
    overflow: hidden;
    height: 100%;
    text-align: right;
  }

  .GoBack{
    cursor: pointer;
    display:inline-block;
    vertical-align:middle;
    position:relative;
    color:#b3becf;
    font-size:14px;
    text-decoration: underline;
    padding: 0 5px 0 18px;
    background: url( '/images/back_hover.svg' ) no-repeat 0 -5000px;
  }
  .GoBack:hover{
    color: white;
    text-decoration: none;
  }

  .GoBack::before{
    content:'';
    background: url( '/images/back.svg' ) no-repeat 50% 50%;
    background-size: 100% 100%;
    width: 13px;
    height: 13px;
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -6px;
  }
  .GoBack:hover::before{
    background-image: url( '/images/back_hover.svg' );
  }

  .LoginGuest{
    color: #fff;
    cursor: pointer;
    text-decoration: underline;
    display: inline-block;
    vertical-align: top;
    padding: 0 5px 0 5px;
  }
  .LoginGuest:hover{
    text-decoration: none;
  }

  .Logined{
    height: 24px;
    line-height: 24px;
    width: 100%;
    display:inline-block;
    vertical-align:top;
    vertical-align: middle;
  }
  .Logined::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }

  .Logout{
    float: right;
    cursor: pointer;
    width: 20px;
    padding-top: 20px;
    overflow: hidden;
    height: 0;
    background: url( '/images/logout_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    border: 2px solid transparent;
    position: relative;
  }
  .Logout:hover{
    background-image: url( '/images/logout_white.svg' );
  }
  .Logout::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    background: url( '/images/logout_white.svg' ) 0 -5000px no-repeat;
  }

  .Mail{
    vertical-align: middle;
    padding: 0 8px 0 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  </style>

  <head-logo .premium="${this.user.premium}"></head-logo>
  <div class="In">
  ${(()=>this.indexPage?this.user.email?b.dy`
    <div class="Logined">
      <div class="Logout" @click="${this.logout}" title="${Z.signOut}"></div>
      <div class="Mail" title="${this.user.email}">${this.user.email}</div>
    </div>`:b.dy`
      <div class="LoginGuest" @click="${this.login}">
        ${Z.signIn}
      </div>`:b.dy`
      <div class="GoBack" @click="${this.back}">${Z.goBack}</div>`)()}
  </div>`}class T extends b.oi{render(){return b.dy`
    <style>
    ${f}
    :host{
      display: block;
      padding: 5px 5px 0 5px;
      float: left;
    }

    :host > .In{
      display: table;
    }
    :host > .In > .L{
      display: table-cell;
      vertical-align: middle;
    }
    :host > .In > .R{
      display: table-cell;
      vertical-align: middle;
      padding-left: 10px;
    }

    .Ball{
      background: url( '/images/logo_ball.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 46px;
      padding-top: 46px;
      height: 0;
      overflow: hidden;
    }

    .Premium,
    .NoPremium{
      height: 0;
      overflow: hidden;
    }
    .Premium{
      background: url( '/images/logo_text_premium.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 85px;
      padding-top: 29px;
    }
    .NoPremium{
      background: url( '/images/logo_text.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 85px;
      padding-top: 14px;
    }

    img{
      display: block;
    }
    </style>

    <div class="In">
      <div class="L"><div class="Ball"></div></div>
      <div class="R">
        <div class="${this.premium?"Premium":"NoPremium"}"></div>
      </div>
    </div>`}static get properties(){return{premium:{type:Boolean}}}constructor(){super(),this.premium=!1}}customElements.define("head-logo",T);class D extends((0,E.$)(l.Z)(b.oi)){render(){return z.call(this)}static get properties(){return{user:{type:Object},indexPage:{type:Boolean}}}stateChanged({user:e,page:t}){this.user=e,this.indexPage="index"===t.split(":")[0]}constructor(){super(),this.user={type:"guest",premium:!1},this.indexPage=!0}back(){l.Z.dispatch({type:"Page: set",page:"index:home"})}login(){l.Z.dispatch({type:"Page: set",page:"login"})}logout(){L()}}customElements.define("main-head",D);const O=class{constructor(){this.listeners=[],this.word="",this.keydownListener=this.keydownListener.bind(this)}addChar(e){let t=this.word,i=performance.now();(!this.lastTimestamp||i-this.lastTimestamp>700)&&(t=""),t+=e,this.lastTimestamp=i,t!==this.word&&(this.word=t,this.listeners.forEach((e=>{e(t)})))}addListener(e){this.listeners.push(e)}removeListener(e){this.listeners=this.listeners.filter((t=>t!==e))}keydownListener(e){let{code:t,key:i}=e;" "===i&&e.preventDefault();let o=t?t.replace(/^key/i,""):i;"Space"===o&&(o=" "),o&&1===o.length&&/[ a-z]/i.test(o)&&(o=o.toLowerCase(),this.addChar(o))}},A=v({browsecOff:"browsec_off",off:"off"});function F(){return b.dy`
  <style>
  ${f}
  :host{
    display: block;
    overflow: auto;
    position: absolute;
    background: #fff;
    border: 1px solid #bcbcbc;
    padding: 4px 0;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
  }

  .E{
    padding: 4px 10px;
    cursor: pointer;
    user-select: none;
  }
  .E.highlighted{
    background: #f5f5f5;
  }
  .E > .In{
    display: table;
    width: 100%;
  }

  .Name{
    display: table-cell;
    vertical-align: middle;
  }
  .Flag{
    display: table-cell;
    vertical-align: middle;
    padding-left: 10px;
    width: 1px;
  }
  .Flag img{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity:0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }
  .Flag_Off{
    width: 30px;
    line-height: 20px;
    font-size: 14px;
    color: var( --brand-burgundy );
    text-align: center;
  }

  .Off{
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #cccccc;
  }
  </style>

  <div class="Off">
    <div
      class="E${null===this.country?" highlighted":""}"
      @click="${this.offClick}"
      @mousemove="${this.elementHighlight(null)}">
      <div class="In">
        <div class="Name">${A.browsecOff}</div>
        <div class="Flag"><div class="Flag_Off">${A.off}</div></div>
      </div>
    </div>
  </div>
  ${this.countries.map((e=>{return b.dy`
    <div
      class="E${this.country===e.code?" highlighted":""}"
      @click="${this.elementClick(e.code)}"
      @mousemove="${this.elementHighlight(e.code)}">
      <div class="In">
        <div class="Name">${e.name}</div>
        <div class="Flag">
          <img src="${t=e.code,"usw"===t&&(t="us"),"uk"===t&&(t="gb"),t?`/images/flags/${t}.svg`:"/images/empty.png"}" width="30" height="20" alt=""/>
        </div>
      </div>
    </div>`;var t}))}`}class N extends b.oi{render(){return F.call(this)}static get properties(){return{countries:{type:Array},country:{type:String}}}constructor(){super(),this.keydownListener=this.keydownListener.bind(this),this.countries=[],this.country=null}connectedCallback(){super.connectedCallback(),this.charsBuffer=new O,document.addEventListener("keydown",this.keydownListener)}firstUpdated(){var e,t,i;let o=this.countries.map((({code:e,name:t})=>({code:e,name:t.toLowerCase()})));const n=null===(e=this.shadowRoot)||void 0===e?void 0:e.children,s=[];for(const e of n)"div"===e.tagName.toLowerCase()&&s.push(e);this.namesList=s.slice(1).map(((e,t)=>{let{code:i,name:n}=o[t];return{element:e,code:i,name:n}})),this.namesList.unshift({code:null,element:null===(t=this.shadowRoot)||void 0===t||null===(i=t.querySelector)||void 0===i?void 0:i.call(t,"div.Off > div.E"),name:"OFF"}),this.charsBuffer.addListener((e=>{const t=this.namesList.find((({code:t,name:i})=>t&&i.startsWith(e)));if(!t)return;const{element:i,code:o}=t;this.country=o,this.scrollTop=i.offsetTop-2}))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.keydownListener)}elementClick(e){return()=>{this.dispatchEvent(new CustomEvent("select",{detail:e})),this.remove()}}elementHighlight(e){return t=>{Boolean(t.movementX||t.movementY)&&(this.country=e)}}keydownListener(e){let{key:t}=e;if("ArrowDown"!==t&&"ArrowUp"!==t){if("Enter"===t)return this.country?this.dispatchEvent(new CustomEvent("select",{detail:this.country})):this.dispatchEvent(new CustomEvent("disable")),void this.remove();this.charsBuffer.keydownListener(e)}else{e.preventDefault();let i=(()=>{let e=this.namesList.length,i=this.namesList.findIndex((({code:e})=>e===this.country));return i+="ArrowDown"===t?1:-1,(i+e)%e})(),o=this.namesList[i];this.country=o.code;let n=this.scrollTop,s=this.offsetHeight,r=n+s,a=o.element.offsetHeight,l=o.element.offsetTop,c=l+a;if(l>=n&&c<=r)return;let d=l>=n?c-s+2:l-2;this.scrollTop=d}}offClick(){this.dispatchEvent(new CustomEvent("disable")),this.remove()}}customElements.define("filters-country-list",N);var R=i(1031);const M=({action:e=(e=>e),url:t,storeState:i})=>(0,R.Z)(t,(t=>Object.assign(e(t),{instd:i.daysAfterInstall})));var V=i(6194);function j(){return b.dy`
  <style>
  ${f}
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  a:hover{
    text-decoration: none;
  }

  :host{
    display: block;
  }

  .Login{
    padding: 38px 12px 2px;
    font-size: 14px;
    min-height: 140px;
    height: 318px;
    font-size: 11px;
  }

  .Title{
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
  .Title::after{
    display: block;
    content: '';
    width: 100px;
    margin: 0 auto;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:20px;
    border-bottom: 4px solid var( --brand-green );
  }

  .Notice {
    position: absolute;
    font-size: 13px;
    color: #090;
    top: -24px;
    width: 100%;
    left: -2px;
  }
  .Error {
    position: absolute;
    bottom: calc(100% + 6px);
    left: 20px;
    right: 20px;
    font-size: 13px;
    color: var( --brand-burgundy );
    text-align: center;
  }

  .Login input[type="text"],
  .Login input[type="password"] {
    font:100% arial,sans-serif;
    vertical-align:middle;
    outline:none;
    width: 315px;
    margin: 1px 0px;
    height: 36px;
    border-radius: 5px;
    padding: 1px 10px;
    font-size: 15px;
    outline: none;
    background: #f5f5f5;
    border: 1px #7b7c80 solid;
    color: #1c304e;
  }
  .Login input[type="text"]::placeholder,
  .Login input[type="password"]::placeholder {
    color: #9b9c9e;
  }
  .Login input[type="text"].invalid,
  .Login input[type="password"].invalid{
    border: 1px solid var( --brand-burgundy );
  }
  .Login input[type="text"].invalid:focus,
  .Login input[type="password"].invalid:focus{
    outline: none;
  }

  .Login_Form{
    margin:0;
    padding:0;
    border-style:none;
    margin-top: 46px;
    text-align: center;
    padding: 0 20px;
    position:relative;
  }

  .Login_Row{
    width:100%;
    padding: 0 0 14px;
  }
  .Login_Row::after{
    display:block;
    clear:both;
    content:'';
  }
  .Login_Row label{
    box-sizing: border-box;
    display: inline-block;
    min-width: 100px;
    padding: 6px 5px 0 0;
  }

  .Login_ForgotPassword {
    color: #1c304e;
    font-size: 12px;
    line-height: 1;
    margin-top: 3px;
    float: right;
  }

  .Login_Button{
    margin-top: 18px;
  }
  .Login_Button > .In{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .Login_Button.loading > .In::after{
    content: '';
    display: block;
    position: absolute;
    left: 12px;
    top: calc(50% - 12px);
    width: 24px;
    padding-top: 24px;
    overflow: hidden;
    height: 0;
  }
  .Login_Button_Overlay{
    display: none;
    position: absolute;
    left: 9px;
    top: calc(50% - 15px);
    width: 24px;
    padding-top: 24px;
    height: 0;
    overflow: hidden;
    background:
      #fff radial-gradient(circle at 80% 80%, #1c304e 0, #1c304e 13%, transparent 90%, transparent 100%);
    border-radius: 50%;
    border: 3px solid #1c304e;
    animation: rotating 1.2s linear infinite;
  }
  .Login_Button.loading .Login_Button_Overlay{
    display: block;
  }
  .Login_Button_Overlay::after{
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    padding-top: 16px;
    height: 0;
    overflow: hidden;
    top: calc( 50% - 16px / 2 );
    left: calc( 50% - 16px / 2 );
    background: #1c304e;
    border-radius: 50%;
  }

  .Login_Button button{
    box-sizing: border-box;
    display: inline-block;
    border: 0;
    border-radius: 5px;
    position:relative;
    background-color: #1c304e;
    color:#fff;
    text-align:center;
    font-family: inherit;
    font-weight: 400;
    padding: 2px 12px;
    font-size: 18px;
    line-height: 30px;
    height: 45px;
    cursor:pointer;
    min-width: 190px;
  }

  .Login_Register {
    margin-top: 7px;
    font-size: 12px;
  }
  .Login_Register a {
    color: #1c304e;
  }
  </style>

  <div class="Login">
    <div class="Title">${this.translations.signIn}</div>
    <form class="Login_Form" action="#" @submit="${this.formSubmit}">

    ${(()=>this.notice?b.dy`<div class="Notice">${this.notice}</div>`:"")()}
    ${(()=>this.error?b.dy`<div class="Error"></div>`:"")()}

      <div class="Login_Row">
        <input class="${this.error?"invalid":""}" type="text" size="30" name="email" autofocus placeholder="${this.translations.email}">
      </div>
      <div class="Login_Row">
        <input class="${this.error?"invalid":""}" type="password" size="30" name="password" placeholder="${this.translations.password}">
        <a href="${this.links.resetPassword}" class="Login_ForgotPassword" target="_blank">
          ${this.translations.forgotYourPassword}
        </a>
      </div>

      <div class="Login_Row">
        <div class="Login_Button${this.loading?" loading":""}"><div class="In">
          <button>${this.translations.logIn}</button>
          <div class="Login_Button_Overlay"></div>
        </div></div>

        <div class="Login_Register">
          ${this.translations.dontHaveAnAccount}
          <a href="${this.links.signUp}" target="_blank">
            ${this.translations.signUp}
          </a>
        </div>
      </div>
    </form>
  </div>`}let U=v({dontHaveAnAccount:"dont_have_an_account",email:"email",forgotYourPassword:"forgot_your_password",logIn:"log_in",password:"password",signIn:"sign_in",signUp:"sign_up",welcomeBack:"welcome_back",errors:{incorrectEmailOrPassword:"incorrect_email_or_password",noConnection:"authentication_error_no_connection",thisAccountIsLocked:"this_account_is_locked_please_contact_us"}});class H extends((0,E.$)(l.Z)(b.oi)){render(){return j.call(this)}static get properties(){return{links:{type:Object},loading:{type:Boolean},translations:{type:Object},error:{type:Boolean},notice:{type:String}}}get links(){const e=l.Z.getStateSync();return{resetPassword:M({url:V.Z.resetPassword,storeState:e}),signUp:M({url:V.Z.newUser,storeState:e})}}get translations(){return U}constructor(){super(),this.loading=!1,this.error=!1}firstUpdated(e){var t,i;super.firstUpdated(e);const o=e=>{var t,i;return null===(t=this.shadowRoot)||void 0===t||null===(i=t.querySelector)||void 0===i?void 0:i.call(t,e)},n=o('input[type="text"][name="email"]'),s=o('input[type="password"][name="password"]');if(!n||!s)throw new Error("No input elements in main-login");this.elements={mail:n,password:s};const r=null===(t=this.shadowRoot)||void 0===t||null===(i=t.querySelectorAll)||void 0===i?void 0:i.call(t,"a");for(const e of r)e.addEventListener("click",(async()=>{var e;await new Promise((e=>{setTimeout(e,50)})),null!==(e=self)&&void 0!==e&&e.close&&self.close()}));this.elements.mail.focus()}async formSubmit(e){if(e.preventDefault(),this.loading)return;if(this.loading=!0,this.errorView){Array.from(this.errorView.childNodes).forEach((e=>{this.errorView.removeChild(e)}))}this.error=!1,this.notice=null;let t=this.elements.mail.value,i=this.elements.password.value;try{await I({email:t,password:i}),this.notice=U.welcomeBack,(async()=>{var e,t;await this.requestUpdate();let i=null===(e=this.shadowRoot)||void 0===e||null===(t=e.querySelector)||void 0===t?void 0:t.call(e,"div.Notice");if(!i)throw new Error("No notiveCiew in main-login");i.style.cssText="opacity: 0";let o=i.animate([{opacity:0},{opacity:1}],{duration:200,easing:"linear"});await new Promise((e=>{o.onfinish=e})),i.style.cssText=""})(),await new Promise((e=>{setTimeout(e,1e3)})),l.Z.dispatch({type:"Page: set",page:"index:home"})}catch(e){var o,n;let{status:t,responseText:i}=e,s={};try{i&&(s=JSON.parse(i))}catch(e){}let r=401!==t?"noConnection":8===s.error_code?"thisAccountIsLocked":"incorrectEmailOrPassword",a=U.errors[r];this.error=!0,401===t&&(this.elements.password.value=""),await this.requestUpdate();let l=null===(o=this.shadowRoot)||void 0===o||null===(n=o.querySelector)||void 0===n?void 0:n.call(o,"div.Error");if(!l)throw new Error("No errorView in main-login");this.errorView=l;a.split(/\n/g).flatMap(((e,t,i)=>{let o=[];return e.trim()&&o.push(document.createTextNode(e)),t!==i.length-1&&o.push(document.createElement("br")),o})).forEach((e=>{this.errorView.appendChild(e)}));this.errorView.style.cssText="opacity: 0";let c=this.errorView.animate([{opacity:0},{opacity:1}],{duration:200,easing:"linear"});await new Promise((e=>{c.onfinish=e})),this.errorView.style.cssText=""}this.loading=!1}onAnimationComplete(){this.elements.mail.focus()}}customElements.define("main-login",H);var W=i(9328),q=i(2338);const X=async()=>{const{user:e}=await l.Z.getStateAsync(),t=await(async()=>{const e=Date.now(),t=await q.Z.get("daysAfterInstall")||e;return Math.round((e-t)/864e5)})();if(e.premium)return 0;const i=await q.Z.get("freeServersOverloaded");if("number"==typeof i){const e=Date.now();if(e<i){const t=i-e;await new Promise((e=>{setTimeout(e,t)}))}}const o=(e=>{let t=.1*e;return t>.8&&(t=.8),t})(t);if(!(Math.random()<o))return 0;const n=(e=>{let t=e;t>8&&(t=8);const i=5+5*Math.random();return Math.round(i*t)})(t);return q.Z.set("freeServersOverloaded",Date.now()+1e3*n),1e3*n},G=async e=>{let t=Math.ceil(e/1e3);const i=document.createElement("free-servers-overloaded");i.timer=t;document.querySelector("div.MainContainer").append(i),await new Promise((e=>{const o=()=>{const n=t-1;if(n)return t--,i.timer=n,void setTimeout(o,1e3);e()};o()})),i.remove()},Y=e=>{if("number"!=typeof e)throw new Error(`Not numeric value ${e.toString()} passed to numberToAlphabetLetter function`);return String.fromCharCode(e+65)},J=v({help:"help"});function Q(){return b.dy`
  <style>
  ${f}
  .Foot{
    height: 38px;
    padding: 0 10px;
    border-top: 1px solid #bcbcbc;
    background: #f5f5f5;
    position: absolute;
    right:0px;bottom:0px;left:0px;
  }
  .Foot::after{
    content:' ';
    display:block;
    clear:both;
    width:0;height:0;
    overflow:hidden;
    font-size:0;
  }
  .Foot c-switch{
    margin: 7px 0 0;
    float: right;
  }

  .Switch{
    position: absolute;
    top:0px;bottom:38px;left:0px;
    width: 100%;
    white-space: nowrap;
  }
  .Switch > *{
    display:inline-block;
    vertical-align:top;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    white-space: normal;
  }

  .Help{
    float: right;
    position: relative;
    margin-top: 12px;
    padding-left: 19px;
    cursor: pointer;
    font-size: 12px;
    line-height: 18px;
    color: var( --brand-green );
    background: url( '/images/menu/help_green.svg' ) 0 -5000px no-repeat;
  }
  .Help::after{
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -7px;
    background: url( '/images/menu/help_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 14px;
    padding-top:14px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
  }
  .Help:hover::after{
    background-image: url( '/images/menu/help_green.svg' );
  }
  </style>

  <div class="Switch"></div>

  <div class="Foot">
  ${(()=>"help"===this.preMenuView?b.dy`
    <div class="Help" @click="${this.openHelp}">${J.help}</div>`:"switch"===this.preMenuView?b.dy`
    <c-switch @click="${this.switchClick}" .on="${this.switchOn}"></c-switch>`:"")()}
    <index-menu></index-menu>
  </div>`}const K=({defaultCountry:e,country:t,countries:i})=>{let o=i.includes(t)?t:e;return"usw"===o&&(o="us"),"uk"===o&&(o="gb"),`/images/flags/${o}.svg`},ee=s().proxy.defaultCountry||"nl";function te(e){return b.dy`
  <style>
  ${f}
  .Off{
    width: 30px;
    line-height: 22px;
    padding-left: 1px;
    color: var( --brand-burgundy );
    font-size: 14px;
    text-align: center;
  }

  .ChangeRule_Country{
    position: relative;
    width: 56px;
    border: 1px solid #bcbcbc;
    height: 22px;
    border-radius: 4px;
    padding: 1px 2px;
    background: url( '/images/smart_settings/arrow_up.svg' ) 0 -5000px no-repeat;
  }
  .ChangeRule_Country img{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity:0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }
  .ChangeRule_Country::after{
    content: '';
    display: block;
    background: url( '/images/smart_settings/arrow_down.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 9px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 5px;
    position: absolute;
    top: 50%;
    right: 8px;
    margin-top: -2px;
  }
  .ChangeRule_Country.open{
    border-color: var( --brand-green );
  }
  .ChangeRule_Country.open::after{
    background-image: url( '/images/smart_settings/arrow_up.svg' );
    /* margin-top: -3px; */
  }

  .ChangeRule_Button{
    width: 46px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:24px;
    background: var( --brand-green ) url( '../images/smart_settings/agree_white.svg' ) 0 -5000px no-repeat;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
  }
  .ChangeRule_Button::after{
    content: '';
    display: block;
    width: 14px;
    overflow: hidden;
    font-size:0;
    text-indent: -9999px;
    height: 0;
    padding-top:14px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -7px 0 0 -7px;
    background: url( '/images/smart_settings/plus_white.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .ChangeRule_Button.save::after{
    width: 16px;
    padding-top: 11px;
    background-image: url( '/images/smart_settings/agree_white.svg' );
    margin: -5px 0 0 -8px;
  }

  .List{
    position: absolute;
    top:65px;
    right:0px;
    bottom:0px;
    left:0px;
    overflow: auto;
    background: url( '/images/smart_settings/trash_green.svg' ) 0 -5000px no-repeat;
  }
  .List > .E{
    position: relative;
    line-height: 34px;
    transition: opacity 0.2s;
  }
  .List > .E:hover{
    background: #fafafa;
  }
  .List > .E.active,
  .List > .E.active:hover{
    background: #f5f5f5;
  }
  .List > .E.inactive,
  .List > .E.inactive:hover{
    background: transparent;
    opacity: 0.33;
  }
  .List > .E.inactive.disabled,
  .List > .E.inactive.disabled:hover{
    background: transparent;
    opacity: 1;
  }
  .List > .E > .In{
    padding: 0 7px 0 14px;
    cursor: pointer;
    height: 34px;
  }
  .List > .E > .In::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }

  .List_Remove{
    float: right;
    background: url( '/images/smart_settings/trash_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 11px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:14px;
    margin: 3px 0 0 6px;
    cursor: pointer;
    border: 7px solid transparent;
  }
  .List_Remove:hover{
    background-image: url( '/images/smart_settings/trash_green.svg' );
  }
  .List_Flag{
    float: right;
    width: 30px;
    padding: 7px 0 0 13px;
  }
  .List_Flag img{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity:0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }

  .ChangeRule{
    padding: 19px 14px;
    border-bottom: 1px solid #bcbcbc;
    display: flex;
    align-items: center;
  }
  .ChangeRule > .E{
    flex-grow: 0;
    flex-shrink: 0;
  }
  .ChangeRule > .E ~ .E{
    padding-left: 10px;
  }
  .ChangeRule > .E.input{
    flex-grow: 1;
  }

  .List_Favicon{
    width: 16px;
    float: left;
    padding: 9px 7px 0 0;
    transition: opacity 0.2s;
  }
  .List > .E.disabled .List_Favicon{
    opacity: 0.3;
  }
  .List_Favicon img{
    display: block;
  }

  .List_Name{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: opacity 0.2s;
  }
  .List > .E.disabled .List_Name{
    opacity: 0.3;
  }

  .List_Deleted{
    display: none;
    background: #fff;
    position: absolute;
    top:0px;right:0px;bottom:0px;left:0px;
    padding: 0 14px 0 22px;
    border-left: 14px solid transparent;
    color: var( --brand-green );
  }
  .List_Deleted::after{
    content: '';
    width: 12px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:12px;
    background: url('/images/smart_settings/check.svg') 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -6px;
  }
  .List > .E.deleted .List_Deleted{
    display: block;
  }

  .List_Delete_Link{
    cursor: pointer;
    color: var( --brand-blue );
    border-bottom: 1px dashed var( --brand-blue );
  }
  .List_Delete_Link:hover{
    border-bottom-color: transparent;
  }

  .List_Select{
    float: right;
    padding: 4px 0 0 5px;
  }
  .List_Select_Button{
    line-height: 24px;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid var( --brand-green );
    color: var( --brand-green );
    padding: 0 8px;
    border-radius: 4px;
    font-size: 12px;
  }
  .List_Select_Button:hover{
    background: var( --brand-green );
    color: #fff;
  }

  .List_InactiveOverlay{
    display: none;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    text-indent: -9999px;
  }
  .List > .E.inactive .List_InactiveOverlay{
    display: block;
  }
  </style>

  <div class="ChangeRule">
    <div class="E text">${e.on}</div>
    <div class="E input">
      <filters-domain
        .value="${this.domain}"
        @save="${this.save}"
        @value-changed="${this.inputListener}"
      ></filters-domain>
    </div>
    <div class="E text">${e.use}</div>
    <div class="E flag">
      <div 
        data-role="country selector"
        class="ChangeRule_Country" 
        @click="${this.openCountryList}"
      >
      ${(()=>{if(!this.country)return b.dy`
          <div class="Off">${e.off}</div>`;const t=K({countries:this.countries,country:this.country,defaultCountry:ee});return b.dy`
          <img src="${t}" width="30" height="20" alt=""/>`})()}
      </div>
    </div>
    <div class="E button">
      <div 
        class="ChangeRule_Button${this.selectedDomain?" save":""}" 
        @click="${this.save}"
      ></div>
    </div>
  </div>

  <div class="List" @click="${this.listClick}">
  ${this.filters.map((t=>{return b.dy`
    <div class="E ${(({deleted:e,disabled:t,value:i},o)=>{let n=[];return e&&n.push("deleted"),t&&n.push("disabled"),o&&n.push(i===o?"active":"inactive"),n.join(" ")})(t,this.selectedDomain)}">
      <div class="In" @click="${this.listElementClick(t)}">
        <div class="List_Remove" title="${e.removeSmartSetting}"></div>
        ${(()=>t.disabled?b.dy`
        <div class="List_Select">
          <div class="List_Select_Button">${e.select}</div>
        </div>`:b.dy`
        <div class="List_Flag">
    ${(()=>{if(!t.country)return b.dy`
          <div class="Off">${e.off}</div>`;const i=K({countries:this.countries,country:t.country,defaultCountry:ee});return b.dy`
          <img src="${i}" width="30" height="20" alt=""/>`})()}
        </div>`)()}
        <div class="List_Favicon">
          <img src="${i=t.value,i?`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${i}&size=16`:"/images/empty.png"}" width="16" height="16" alt=""/>
        </div>
        <div class="List_Name">${t.view}</div>
      </div>
      <div class="List_Deleted">
        ${e.settingWasDeleted}
        <span class="List_Delete_Link" @click="${this.cancelRemove(t)}">
          ${e.undo}
        </span>
      </div>
      <div class="List_InactiveOverlay" @click="${this.resetSelection}">&nbsp;</div>
    </div>`;var i}))}
  </div>`}const ie=v({pleaseEnterDomain:"please_enter_domain"});class oe extends HTMLElement{render(){const e=this.shadowRoot,t=document.createElement("style");t.textContent=`\n    ${f}\n    :host{\n      display: block;\n    }\n\n    input[type="text"]{\n      display: block;\n      width: 100%;\n      border: 1px solid #bcbcbc;\n      line-height: 24px;\n      height: 24px;\n      box-sizing: border-box;\n      padding: 0 8px;\n      border-radius: 4px;\n      outline: none;\n    }\n    input[type="text"]:focus{\n      border-color: var( --brand-blue );\n    }`;const i=document.createElement("input");i.type="text",i.placeholder=ie.pleaseEnterDomain,i.addEventListener("input",(({target:e})=>{let{value:t}=e;t=t.replace(/\s+/g,"").toLowerCase();const o=i.selectionEnd;i.value=t;const n=o>t.length?t.length:o;i.setSelectionRange(n,n),this.inputValue=t,this._value=t,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t}}))})),i.addEventListener("paste",(e=>{e.stopPropagation(),e.preventDefault();const t=(e.clipboardData||window.clipboardData).getData("text/plain").trim();if(!t)return;let i;try{i=new URL(t).hostname}catch(e){i=t.toLowerCase()}this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:i}}))})),i.addEventListener("keypress",(e=>{let{code:t,which:o}=e;"Enter"!==t&&13!==o||(e.preventDefault(),this.dispatchEvent(new CustomEvent("save")),i.blur())})),this.input=i,e.append(t,i)}constructor(){super(),this._value="",this.inputValue="",this.attachShadow({mode:"open"}),this.render()}get value(){return this._value}set value(e){e!==this._value&&(this.inputValue=e,this._value=e,this.input.value=e)}}customElements.define("filters-domain",oe);const{_:ne}=self,se="undefined"!=typeof browser?browser:chrome,re=v({cancelEditing:"cancel_editing",off:"off",on:"on",pleaseEnterDomain:"please_enter_domain",pleaseEnterValidDomain:"please_enter_valid_domain",removeSmartSetting:"remove_smart_setting",select:"select",settingWasDeleted:"setting_was_deleted",thisDomainAlreadyInList:"this_domain_already_in_list",undo:"undo",use:"use"}),ae=({view:e},{view:t})=>e<t?-1:e>t?1:0,le=({dimensionElement:e,text:t})=>{const i=document.createElement("tooltip-error");i.text=t;const o=e.getBoundingClientRect(),n=o.top+e.offsetHeight-1;i.style.cssText=`top:${n}px;left:${o.left}px;`,document.body.append(i);const s=(()=>{let e=!0;return()=>{e?e=!1:(i.remove(),document.removeEventListener("click",s))}})();document.addEventListener("click",s)};class ce extends((0,E.$)(l.Z)(b.oi)){render(){return te.call(this,re)}static get properties(){return{country:{type:String},countries:{type:Array},domain:{type:String},filters:{type:Array},premium:{type:Boolean},selectedDomain:{type:String}}}constructor(){super(),this.countries=[],this.country=null,this.domain="",this.filters=[],this.premium=null,this.selectedDomain=null}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.removeStoreListener)||void 0===e||e.call(this),delete this.removeStoreListener,this.documentClick&&document.removeEventListener("mousedown",this.documentClick)}async firstUpdated(e){super.firstUpdated(e);const t=this.shadowRoot,i=t.querySelector("div.List");if(!i)throw new Error("No list element in index-filters");this.nodes={list:i};{const e=[];for(const t of l.Z.getStateSync().userPac.filters){if("domain"!==t.format)continue;const i=t.proxyMode?t.country:null,{disabled:o,value:n}=t,s=g.ZP.toUnicode(n);e.push({country:i,deleted:!1,disabled:o,value:n,view:s})}this.filters=e.sort(ae)}const o=t.querySelector("div.ChangeRule filters-domain");if(!o)throw new Error("No domainInput element in index-filters");this.domainInput=o;const n=t.querySelector('[data-role="country selector"]');if(!n)throw new Error("No countryElement element in index-filters");this.countryElement=n,this.removeStoreListener=l.Z.onChange((({userPac:{filters:e}})=>e),(async(e,t,i)=>{if(e.length===t.length)return;const o=e.length>t.length?"addition":"deletion";if("addition"===o){const i=ne.differenceBy(e,t,ne.isEqual)[0];if(!i)return;if(this.filters.some((({value:e})=>e===i.value)))return;let o=ne.cloneDeep(this.filters);if("string"!=typeof i.value)throw new Error("Addition error for index-filters, not string provided before punicode");let n=g.ZP.toUnicode(i.value);return o.push({country:i.country,deleted:!1,value:i.value,view:n}),void(this.filters=o.sort(ae))}if("deletion"===o){if(!Boolean(i.user.email)&&!e.length&&t.length-e.length>=2)return void(this.filters=[]);const o=ne.differenceBy(t,e,ne.isEqual)[0];if(!o)return;if(!this.filters.some((({deleted:e,value:t})=>t===o.value&&!e)))return;const n=ne.cloneDeep(this.filters).filter((({value:e})=>e!==o.value));this.filters=n}}))}stateChanged({proxyServers:e,user:t}){this.countries=Array.from(t.premium?e.premiumCountries():e.freeCountries()),this.premium=t.premium}cancelRemove({country:e,value:t}){return()=>{let i=ne.cloneDeep(this.filters);const o=i.find((e=>e.value===t));o&&(o.deleted=!1),this.filters=i;const n={domain:t,type:e?"proxy":"direct"};e&&(n.country=e),h.siteFilters.add(n)}}inputListener({detail:{value:e}}){this.domain=e}listClick({target:e}){}listElementClick({country:e,disabled:t,value:i,view:o}){return({target:n})=>{if(n instanceof HTMLElement){if(n.classList.contains("List_Remove")){const e=ne.cloneDeep(this.filters),t=e.find((e=>e.value===i));return t&&(t.deleted=!0),this.filters=e,h.siteFilters.remove(i),void this.resetSelection()}if(n.classList.contains("List_Select_Button")){{const e=ne.cloneDeep(this.filters);{const t=e.find((({disabled:e})=>!e));t&&(t.disabled=!0)}{const t=e.find((({value:e})=>i===e));t&&delete t.disabled}this.filters=e}(0,_.Z)({type:"select disabled site filter",value:i})}else t?this.resetSelection():(this.country=e,this.domain=o,this.selectedDomain=i)}}}openCountryList(){this.countryElement.classList.add("open");const e=document.createElement("filters-country-list");e.countries=this.countries.map((e=>({code:e,name:se.i18n.getMessage("country_name_"+e.toUpperCase())}))).sort((({name:e},{name:t})=>e<t?-1:e>t?1:0)),e.country=this.country,e.addEventListener("select",(({detail:e})=>{this.country=e,this.countryElement.classList.remove("open")})),e.addEventListener("disable",(()=>{this.country=null,this.countryElement.classList.remove("open")}));const{left:t,top:i}=this.countryElement.getBoundingClientRect(),o=this.countryElement.offsetHeight,n=i+o,s=self.innerWidth-t-this.countryElement.offsetWidth,r=self.innerHeight-i-o;e.style.cssText=`top:${n}px;right:${s}px;max-height:${r}px;`,document.body.append(e),this.documentClick=({target:t})=>{t instanceof HTMLElement&&(e.contains(t)||t===e)||(e.remove(),this.documentClick&&(document.removeEventListener("mousedown",this.documentClick),delete this.documentClick,this.countryElement.classList.remove("open")))},document.addEventListener("mousedown",this.documentClick)}resetSelection(){this.country=null,this.domain="",this.selectedDomain=null}async save(){const e=this.domain;if(!e)return void le({dimensionElement:this.domainInput,text:re.pleaseEnterDomain});const t=g.ZP.toASCII(e);if(void 0!==t)if(1!==t.split(".").length){{const e=t.split("."),i=4===e.length&&e.every((e=>/^[0-9]+$/.test(e)&&Number(e)>=0&&Number(e)<=255));if(!i&&e.some((e=>!/^[a-zA-Z0-9-_]+$/.test(e))))return void le({dimensionElement:this.domainInput,text:re.pleaseEnterValidDomain});if(!i){const e=t.split(".").pop();if(!self.domainZoneList.includes(e))return void le({dimensionElement:this.domainInput,text:re.pleaseEnterValidDomain})}}if(!this.selectedDomain){if(this.filters.map((({value:e})=>e)).includes(t))return void le({dimensionElement:this.domainInput,text:re.thisDomainAlreadyInList})}if(this.selectedDomain){{const i=this.filters.filter((({value:e})=>e!==this.selectedDomain));i.push({country:this.country,deleted:!1,value:t,view:e}),i.sort(ae),this.filters=i}(0,_.Z)({type:"change site filter",country:this.country,domain:t,selectedDomain:this.selectedDomain})}else{(0,_.Z)({type:"сounters.increase",property:"popup: smart settings: add rule"});const i=this.country?{country:this.country,domain:t,type:"proxy"}:{domain:t,type:"direct"},o=this.filters.slice();o.unshift({country:this.country,deleted:!1,value:t,view:e}),this.filters=o,h.siteFilters.add(i)}this.resetSelection()}else le({dimensionElement:this.domainInput,text:re.pleaseEnterValidDomain})}async showPremiumPopup(){if(this.popupPremiumFreeze)return;this.popupPremiumFreeze=!0;const e=document.createElement("popup-premium-onerule");e.style.cssText="top:-100%;",document.body.append(e),o.Z.partial({category:"premium",action:"show"});const t=e.animate([{top:"-100%"},{top:"0"}],{duration:800,easing:"linear"});await new Promise((e=>{t.onfinish=e})),e.style.cssText="",this.popupPremiumFreeze=!1}}customElements.define("index-filters",ce);const de=async({experiments:e,promotions:t,showSpeedPromo:i,user:o})=>{if("logined"===o.type&&o.premium){const e=o.loginData.subscription.paidUntil,t=e?new Date(e):void 0,i=await q.Z.get("userClosedWarnToPremiumEndDate");if(!(!t||o.loginData.subscription.auto_renewal||i===String(t)||Date.now()<t.getTime()-1728e5))return{type:"premium expiration"}}const n=o.premium,r=Date.now();if(2===await q.Z.get("Experiment 254: phase")&&!n&&"1"===e[s().experiments.pollBanner.id])return{type:"poll banner"};const a=await(async()=>{const e=t.filter((({banner:e,from:t,till:i})=>e&&t<=r&&r<=i)).filter((({kind:e})=>"personal"===e||!n)).sort((({kind:e},{kind:t})=>e===t?0:"personal"===e?-1:1));if(!e.length)return;const{id:i}=e[0];let{banner:o}=e[0];return{id:i,banner:o}})();if(a)return{banner:a.banner,promotionId:a.id,type:"custom"};return!!i&&!n?{type:"speed"}:void 0},{_:pe}=self,ue=new class{constructor(){this._activeBanner=void 0,this._listeners=[],this._ready=(async()=>{const e=await l.Z.getStateAsync(),t="proxy"===e.userPac.mode;this._showSpeedPromo=t;const i=this._activeBanner,o=await de(Object.assign({showSpeedPromo:t},e));if(!pe.isEqual(i,o)){this._activeBanner=o;for(const e of this._listeners)e(o,i)}})(),l.Z.onChange((({promotions:e,user:t})=>({user:Boolean(t.email),promotions:e})),(()=>{this.refresh()}))}addListener(e){this._listeners.push(e)}get(){return this._activeBanner}async getAsync(){return await this._ready,this._activeBanner}async refresh(){const e=await l.Z.getStateAsync(),t=this._activeBanner,i=await de(Object.assign({showSpeedPromo:this._showSpeedPromo},e));if(!pe.isEqual(t,i)){this._activeBanner=i;for(const e of this._listeners)e(i,t)}}removeListener(e){this._listeners=this._listeners.filter((t=>t!==e))}},he="undefined"!=typeof browser?browser:chrome,ge=new class{constructor(){this._state=[],this._callbacks=[],he.runtime.connect({name:"permissions"}).onMessage.addListener((e=>{this._state=e,this._callbacks.forEach((t=>{t(e)}))})),(async()=>{this._state=await(0,_.Z)({type:"permissions.get"})})()}addListener(e){this._callbacks.push(e)}get(){return this._state}includes(e){return this._state.includes(e)}},me=v({change:"change",connectionsNotEncrypted:"your_browsers_connections_are_not_encrypted",privacyProtected:"your_privacy_is_protected",protectionDisabled:"privacy_protection_disabled",startVpn:"start_vpn"});function xe(){const{switchesView:e}=this;return b.dy`
  <style>
  ${f}
  :host > .In{
    width: 100%;
    height: 100%;
    white-space: nowrap;
    position: relative;
  }
  :host > .In.transition{
    transition: margin-left 0.25s;
  }
  :host > .In > .In{
    display: flex;
    width: 200%;
    height: 100%;
    align-items: center;
  }
  :host(.proxyEnabled) > .In{
    margin-left: -100%;
  }
  :host(.withPromo) > .In{
    height: auto;
  }

  :host index-home-switches{
    padding: 12px 22px 0;
    text-align: left;
  }
  :host index-home-promo{
    display: none;
  }
  :host(.withPromo) index-home-promo{
    display: block;
    border-bottom: 4px solid transparent;
  }

  .Inactive,
  .Active{
    flex: 1;
  }
  :host(.withPromo) .Inactive,
  :host(.withPromo) .Active{
    align-items: stretch;
  }

  .Inactive{
    text-align: center;
    white-space: normal;
  }
  :host(.withPromo) .Inactive{
    vertical-align: top;
  }
  .Inactive::before{
    content: '';
    display:block;
    background: url( '/images/global_protection_disabled.svg' ) 50% 0 no-repeat;
    background-size: auto 100%;
    width: 100%;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:114px;
  }
  :host(.withPromo) .Inactive::before{
    padding-top: 76px;
  }

  /** Active proxy */
  :host(.withPromo) .Active{
    padding-top: 9px;
  }
  .Active::before{
    content:' ';
    display:block;
    background: url( '/images/global_protection_enabled.svg' ) 50% 0 no-repeat;
    background-size: auto 100%;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:112px;
  }
  :host(.withPromo) .Active::before{
    padding-top: 91px;
  }

  .Inactive_Text{
    font-size: 14px;
    padding: 4px 28px 0;
    line-height: 17px;
  }
  .Inactive_Title{
    font-size: 18px;
    font-weight: 600;
    padding-top: 10px;
    color: var( --brand-burgundy );
  }
  :host(.withPromo) .Inactive_Title{
    padding-top: 0;
  }
  .Inactive_ButtonOut{
    padding-top: 24px;
  }
  :host(.withPromo) .Inactive_ButtonOut{
    padding-top: 10px;
  }
  .Inactive_Button{
    display:inline-block;
    vertical-align:top;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    min-width: 208px;
    height: 45px;
    line-height: 42px;
    border-radius: 4px;
    background: var( --brand-green );
    font-size: 17px;
    text-align: center;
    padding: 0 10px;
  }


  .Active_Text{
    font-size:18px;
    line-height: 1;
    padding: 27px 28px 0;
    color: var( --brand-green );
    text-align: center;
  }
  :host(.withPromo) .Active_Text{
    padding-top: 7px;
  }

  .Active_Country_Out{
    padding: 28px 20px 0;
  }
  :host(.withPromo) .Active_Country_Out{
    padding-top: 20px;
  }

  .Active_Country{
    cursor: pointer;
    border: 1px solid #bcbcbc;
    border-radius: 4px;
    text-align: justify;
    height: 58px;
    padding: 0 20px;
    cursor:pointer;
  }
  .Active_Country:hover{
    background: #efefef;
  }
  .Active_Country > .In{
    display: table;
    height: 100%;
    width: 100%;
  }
  .Active_Country > .In > .E{
    display: table-cell;
    vertical-align: middle;
  }
  .Active_Country > .In > .E:first-child{
    width: 1px;
    padding-right: 12px;
  }
  .Active_Country > .In > .E:last-child{
    width: 1px;
  }
  .Active_Country img{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity:0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }
  .Active_Country_Name{
    font-size: 18px;
  }

  .ChangeButton{
    display:inline-block;
    vertical-align:top;
    font-size: 12px;
    border-radius: 4px;
    line-height: 18px;
    text-align: center;
    background: #fff;
    border: 1px solid #268328;
    color: #268328;
    padding: 0 8px;
  }

  .Rating{
    background: url( '/images/pings/1.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 23px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:12px;
    margin-left: auto;
    border-right: 15px solid transparent;
  }
  .Rating.r2{
    background-image: url( '/images/pings/2.svg' );
  }
  .Rating.r3{
    background-image: url( '/images/pings/3.svg' );
  }
  .Rating.r4{
    background-image: url( '/images/pings/4.svg' );
  }
  .Rating.r5{
    background-image: url( '/images/pings/5.svg' );
  }

  .SettingsIcon{
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
  }
  :host(.withPromo) .SettingsIcon{
    top: calc(88px + 12px);
  }
  .SettingsIcon > .In{
    position: relative;
    border: 1px solid #bcbcbc;
    width: 38px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:38px;
    border-radius: 4px;
  }
  .SettingsIcon > .In::after{
    content: '';
    display: block;
    background: url( '/images/settings_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 17px;
    overflow:hidden;text-indent:-9999px;height:0;
    padding-top: 17px;
    top: calc(50% - 17px / 2);
    left: calc(50% - 17px / 2);
  }
  .SettingsIcon_GreenCircle{
    width: 16px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:16px;
    background: var( --brand-green );
    border: 4px solid #fff;
    border-radius: 50%;
    position: absolute;
    left: -11px;
    bottom: -11px;
  }
  .SettingsIcon_ClickArea{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    text-indent: -9999px;
    cursor: pointer;
  }

  </style>

  <index-home-promo .activeBanner="${this.activeBanner}"></index-home-promo>

  <div class="In ${"simple"!==e.type?"":"transition"}">
    <div class="In"><!--
   --><div class="Inactive">
        <div class="Inactive_Title">${me.protectionDisabled}</div>
        <div class="Inactive_Text">${me.connectionsNotEncrypted}</div>
  ${(()=>"simple"===e.type?b.dy`
        <div class="Inactive_ButtonOut"><!--
       --><div class="Inactive_Button" @click="${this.enableProxy}">
            ${me.startVpn}
          </div><!--
     --></div>`:b.dy`
        <index-home-switches
          .proxyEnabled="${this.proxyEnabled}"
          .proxyCountry="${this.country}"
          .view="${e}"
          @proxyswitch="${this.proxySwitch}"
          @domainproxyswitch="${this.domainProxySwitch}"
          @countrychange="${this.countryChange}"
          @domaincountrychange="${this.domainCountryChange}">
        </index-home-switches>`)()}
      </div><!--
   --><div class="Active">
        <div class="Active_Text">${me.privacyProtected}</div>
  ${(()=>"simple"!==e.type?b.dy`
          <index-home-switches
            .proxyEnabled="${this.proxyEnabled}"
            .proxyCountry="${this.country}"
            .view="${e}"
            @proxyswitch="${this.proxySwitch}"
            @domainproxyswitch="${this.domainProxySwitch}"
            @countrychange="${this.countryChange}"
            @domaincountrychange="${this.domainCountryChange}">
          </index-home-switches>`:b.dy`
          <div class="Active_Country_Out">
            <div class="Active_Country" @click="${this.openLocations}"><div class="In">
    ${(()=>{return this.country?b.dy`
              <div class="E"><!--
             --><img src="${e=this.country,"usw"===e&&(e="us"),"uk"===e&&(e="gb"),e?`/images/flags/${e}.svg`:"/images/empty.png"}" width="30" height="20" /><!--
           --></div>`:"";var e})()}
              <div class="E">
                <div class="Active_Country_Name">${this.countryName}</div>
              </div>
    ${e.rating?b.dy`
              <div class="E">
                <div class="Rating r${e.rating}"></div>
              </div>`:""}
              <div class="E"><div class="ChangeButton">${me.change}</div></div>
            </div></div>
          </div>`)()}
      </div><!--
  --></div>
  </div>

  <div class="SettingsIcon">
    <div class="In"></div>
  ${(()=>this.settingsIconNewFeature?b.dy`
    <div class="SettingsIcon_GreenCircle"></div>`:"")()}
    <div class="SettingsIcon_ClickArea" @click="${this.openSettings}"></div>
  </div>`}class ve extends b.oi{render(){const e=(()=>{switch(this.state){case"bad":return"active";case"good":return"disabled";default:return""}})(),t=(()=>{switch(this.state){case"bad":return"disabled";case"good":return"active";default:return""}})();return b.dy`
    <style>
    :host{
      display: block;
      background: #3ab9ea; 
      top: 4px; 
      left: 4px;
      width: calc(100% - 8px); 
      height: 82px;
      position: absolute;
      z-index: 4;
      border-radius: 4px;
      color:#fff;
      text-align: center;
    }

    .PollBanner_Title{
      padding: 10px 5px 10px;
      font-size: 16px;
      font-weight: bold;
    }
    .PollBanner_Title a{
      color: #fff;
      text-decoration: underline;
    }
    .PollBanner_Title a:hover{
      text-decoration: none;
    }
    .PollBanner_Buttons{
      font-size: 13px;
      padding: 0 20px 0;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
    }
    .PollBanner_Button{
      min-width: 113px;
      text-transform: uppercase;
      cursor: pointer;
      border: 1px solid #fff;
      line-height: 24px;
      padding: 0 10px;
      border-radius: 4px;
      user-select: none;
    }
    .PollBanner_Button.active{
      background: #fff;
      color: #3ab9ea;
      cursor: default;
    }
    .PollBanner_Button.disabled{
      cursor: default;
      opacity: 0.5;
    }
    </style>

    <div class="PollBanner">
      <div class="PollBanner_Title">
        ${(()=>"bad"===this.state?b.dy`
            Oh no :( Please 
            <a 
              href="https://forms.gle/CEKgoPQTZqZEMQ427" 
              target="_blank"
              @click="${this.linkClick}"
            >tell us</a> 
            what’s wrong`:"good"===this.state?"Thank you for your feedback!":"How was your first experience with Browsec?")()}
      </div>
      <div class="PollBanner_Buttons">
        <div class="E"><div class="PollBanner_Button ${t}" @click="${this.clickGreat}">
          Great!
        </div></div>
        <div class="E"><div class="PollBanner_Button ${e}" @click="${this.clickBad}">
          Not so good
        </div></div>
      </div>
    </div>`}static get properties(){return{state:{type:String}}}constructor(){super(),this.state="open"}clickBad(){"open"===this.state&&(this.state="bad",o.Z.full({category:"Exp254_feedback_notgood"}))}clickGreat(){"open"===this.state&&(this.state="good",o.Z.full({category:"Exp254_feedback_great"}))}linkClick(){o.Z.full({category:"Exp254_feedback_tellus"})}}customElements.define("poll-banner",ve);var fe=i(5119),be=i(8669);const ye=Object.freeze(["autocomplete","colspan","height","href","name","rowspan","src","target","type","width"]);const we=(e,t=(e=>e))=>{let i=(e=>Object.assign({},e,{type:"string"==typeof e.tag?"element":"node"}))(e);if("node"===i.type){if("string"!=typeof i.text)throw new Error("createElement called without text property");return document.createTextNode(i.text)}const{attributes:o,tag:n}=i;let s=document.createElement(n);if(i.class){let e=t(i.class);s.setAttribute("class",e)}if(i.style&&s.setAttribute("style",i.style),o)for(const[e,t]of Object.entries(o)){!ye.includes(e)&&!e.startsWith("data-")||("src"===e&&"img"!==n||s.setAttribute(e,t))}if(i.node&&i.node(s),i.text&&(s.textContent=i.text),i.children){i.children.map((e=>we(e,t))).forEach((e=>{s.appendChild(e)}))}return s},ke=we;class _e extends HTMLElement{constructor(){super(),this.hasRenderedDom=!1;const e=this.attachShadow({mode:"open"}),t=be.dy`
    <style>
    ${f}
    :host{
      display:block;
      height: 82px;
      overflow: hidden;
      margin: 4px 4px 0;
      position: relative;
    }
    a{
      display: block;
      position: absolute;
      top:0px;
      right:0px;
      bottom:0px;
      left:0px;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 3;
    }
    </style>`;(0,be.sY)(t,e)}renderDomFromJson({jsonStructure:e,link:t,promotionId:i}){const n=this.shadowRoot;if(this.hasRenderedDom)for(const e of n.children)"style"!==e.tagName.toLowerCase()&&e.remove();this.hasRenderedDom=!0;const r=ke(e),a=document.createElement("a");a.href=t,a.target="_blank",i&&a.addEventListener("click",(()=>{o.Z.partial({category:"banner",action:"click",label:"banner_promo_"+i})})),(async()=>{const{experiments:e}=await l.Z.getStateAsync(),t=e[s().experiments.pollBanner.id];if(t){const e=Y(Number(t));a.addEventListener("click",(()=>{o.Z.full({category:"Exp254_redbannerclick",action:e})}))}})(),n.append(r),n.append(a)}}customElements.define("downloadable-promo",_e);const Ee=v({continueUsing:"continue_using_premium",goAheadAndRenewIt:"go_ahead_and_renew_it",premiumIsAboutToExpire:"your_premium_is_about_to_expire"});class Se extends b.oi{render(){return b.dy`
    <style>
    ${f}
    :host{
      display: block;
      margin: 1px 0 0;
      background: #fcd0cb;
      border-bottom: 1px solid var( --brand-burgundy );
      padding: 10px 10px 10px;
    }
    .Close{
      position: absolute;
      top: -5px;
      right: -1px;
      color: var( --brand-burgundy );
      cursor: pointer;
      width: 10px;
      padding-top: 10px;
      border: 11px solid transparent;
      height: 0;
      overflow: hidden;
      background: url( '/images/popup_close_2.svg#pink' ) 0 0 no-repeat;
      background-size: 100% 100%;
    }
    .Close:hover{
      background-image: url( '/images/popup_close_2.svg#white' );
    }
    .Close::after{
      content: '';
      display: block;
      position: absolute;
      width: 1px;
      height: 1px;
      top: 0;
      left: 0;
      background: url( '/images/popup_close_2.svg#white' ) 0 -5000px no-repeat;
    }
  
    .Title{
      color: var( --brand-burgundy );
      font-size: 14px;
      text-align: center;
    }
    .Description{
      color: #1c304e;
      font-size: 12px;
      text-align: center;
    }
  
    .Link_Out{
      text-align: center;
      font-size: 12px;
      padding-top: 5px;
    }
    .Link{
      display:inline-block;
      vertical-align:top;
      cursor:pointer;
    }
    .Link:link,
    .Link:visited{
      text-decoration: none;
      border-bottom:1px #1c304e solid;
      color: #1c304e;
    }
    .Link:hover{
      color: #fff;
      border-bottom:1px solid #fff;
    }
    </style>
    
    <div class="Close" @click="${this.expirationClose}"></div>
    <div class="Title">${Ee.premiumIsAboutToExpire}</div>
    <div class="Description">${Ee.goAheadAndRenewIt}</div>
    <div class="Link_Out"><!--
   --><a class="Link" href="${this.expirationPremiumLink}" target="_blank">
        ${Ee.continueUsing}
      </a><!--
 --></div>`}get expirationPremiumLink(){return M({action:e=>Object.assign(e,{utm_source:"chromium extension",utm_campaign:"default_campaign"}),storeState:l.Z.getStateSync(),url:V.Z.base+"/en/orders/new?plan_id=annual"})}expirationClose(){this.dispatchEvent(new CustomEvent("expirationclose"))}}customElements.define("premium-expiration-soon",Se);const Ce=({prices:e,priceTrial:t})=>{const i=e.slice().sort(((e,t)=>e.value/e.duration-t.value/t.duration))[0],o=e.slice().sort(((e,t)=>t.value/t.duration-e.value/e.duration))[0];let{currency:n,oldValue:s}=o;"USD"===n&&(n="$");let r=Math.floor(100*i.value/i.duration)/100,a=s?Math.floor(100*s/o.duration)/100:0;const l=t||0;return{currency:n,duration:i.duration,oldPrice:a,price:r,trialDays:l}},Pe=new Map;for(const{id:e,taskNumber:t}of Object.values(s().experiments))Pe.set(e,t);const $e=v({getTurboSpeed:"get_turbo_speed",moneyBackGuarantee:"7_days_money_back_guarantee",upgradeConnectionSpeed:"upgrade_connection_speed"});class Be extends((0,E.$)(l.Z)(b.oi)){render(){const e=(0,m.Z)("from_only_X_per_month").replace(/XXX/g,String(this.price));return b.dy`
    <style>
    ${f}
    :host{
      display: block;
      position: relative;
      background: #c0392b;
      margin: 6px 6px 0 6px;
      border-radius: 4px;
      height: 82px;
      color: #fff;
      text-align: center;
      line-height: 1;
    }
    :host > .In{
      display: table;
      height: 100%;
      width: 100%;
    }
    :host > .In > .In{
      display: table-cell;
      vertical-align: middle;
      padding: 0 7px;
    }
    .Title{
      text-transform: uppercase;
      font-size: 23px;
      font-weight: bold;
    }
    .Price{
      color: #f1c40f;
      font-size: 18px;
      font-weight: bold;
      padding: 3px 0 7px;
    }
    .Days{
      color: #e1afab;
      font-size: 12px;
    }
    .Link{
      display: block;
      position: absolute;
      top:0px;
      right:0px;
      bottom:0px;
      left:0px;
      white-space: nowrap;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
    }
    </style>
    
    <div class="In"><div class="In">
      <div class="Title">${$e.upgradeConnectionSpeed}</div>
      <div class="Price">${e}</div>
      <div class="Days">${$e.moneyBackGuarantee}</div>
    </div></div>
    <a class="Link" @click=${this.linkClick} href="${this.premiumLink}" target="_blank">
      ${$e.getTurboSpeed}
    </a>`}static get properties(){return{price:{type:Number}}}get premiumLink(){const e=[],{experiments:t}=l.Z.getStateSync();for(const[i,o]of Object.entries(t)){if(!Pe.has(i))continue;const t=Pe.get(i);e.push(`exp${t}_${o}`)}const i=new URL(V.Z.premium);return e.length&&i.searchParams.set("expvarid",e.join(",")),M({action:e=>Object.assign(e,{utm_source:"chromium extension",utm_medium:"banner",utm_campaign:"default_campaign"}),storeState:l.Z.getStateSync(),url:i.toString()})}stateChanged({prices:e,priceTrial:t}){this.price=Ce({prices:e,priceTrial:t}).price}async linkClick(){var e,t;o.Z.partial({category:"banner",action:"click",label:"banner_speed_new"});const{experiments:i}=l.Z.getStateSync(),n=i[s().experiments.pollBanner.id];if(n){const e=Y(Number(n));o.Z.full({category:"Exp254_redbannerclick",action:e})}await new Promise((e=>{setTimeout(e,50)})),null===(e=self)||void 0===e||null===(t=e.close)||void 0===t||t.call(e)}}customElements.define("upgrade-speed-banner",Be);const{_:Ie}=self,Le=new Map;for(const{id:e,taskNumber:t}of Object.values(s().experiments))Le.set(e,t);class Ze extends HTMLElement{constructor(){super(),this._activeBanner=null,this.expirationClose=this.expirationClose.bind(this);const e=this.attachShadow({mode:"open"}),t=be.dy`
    <style>
    ${f}
    :host{
      display: block;
      height:82px;
    }
    </style>`;(0,be.sY)(t,e)}get activeBanner(){return this._activeBanner}set activeBanner(e){Ie.isEqual(this._activeBanner,e)||(this._activeBanner=e,this.renderActivePromo(this.activeBanner))}async expirationClose(){var e,t;const{user:i}=await l.Z.getStateAsync(),o=null===(e=i.loginData)||void 0===e||null===(t=e.subscription)||void 0===t?void 0:t.paidUntil;if(!o)return;let n=new Date(o);await q.Z.set("userClosedWarnToPremiumEndDate",String(n)),ue.refresh()}async renderActivePromo(e){const t=this.shadowRoot,i=await l.Z.getStateAsync();for(const e of t.children)"style"!==e.tagName.toLowerCase()&&e.remove();const n=await(async()=>{if(e){if("premium expiration"===e.type){const e=document.createElement("premium-expiration-soon");return e.addEventListener("expirationclose",this.expirationClose),e}if("poll banner"===e.type){return document.createElement("poll-banner")}if("custom"===e.type){const n=document.createElement("downloadable-promo"),{promotionId:s,banner:{link:r,structure:a}}=e;fe.Z.track("banner",{campaign:s});const l=new URL(r);l.searchParams.set("instd",String(i.daysAfterInstall));const c=[];for(const[e,t]of Object.entries(i.experiments)){if(!Le.has(e))continue;const i=Le.get(e);c.push(`exp${i}_${t}`)}c.length&&l.searchParams.set("expvarid",c.join(",")),n.renderDomFromJson({jsonStructure:a,link:l.toString(),promotionId:s});{var t,o;const e=null===(t=n.shadowRoot)||void 0===t||null===(o=t.querySelector)||void 0===o?void 0:o.call(t,"a");e&&e.addEventListener("click",(()=>{fe.Z.track("banner_click",{campaign:s})}))}return n}return"speed"===e.type?document.createElement("upgrade-speed-banner"):void 0}})();if(n&&t.append(n),"poll banner"===(null==e?void 0:e.type)){const{experiments:e}=await l.Z.getStateAsync(),t=e[s().experiments.pollBanner.id];if(t){const e=Y(Number(t));o.Z.full({category:"Exp254_2ndopen",action:e})}q.Z.set("Experiment 254: phase",3)}if("custom"===(null==e?void 0:e.type)){const{promotionId:t}=e;o.Z.partial({category:"banner",action:"show",label:"banner_promo_"+t})}"speed"===(null==e?void 0:e.type)&&o.Z.partial({category:"banner",action:"show",label:"banner_speed_new"})}}customElements.define("index-home-promo",Ze);const ze=v({otherWebsites:"other_websites"}),Te=e=>("usw"===e&&(e="us"),"uk"===e&&(e="gb"),e?`/images/flags/${e}.svg`:"/images/empty.png");class De extends b.oi{render(){return b.dy`
    <style>
    ${f}
    :host{
      display: block;
    }
    .Row::after{
      content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
    }
    .Row + .Row{
      padding-top: 8px;
    }

    .Switch,
    .Flag_Out{
      float: right;
      width: 61px;
      padding-left: 11px;
      min-height: 1px;
    }

    .Name{
      white-space: nowrap;
      overflow: hidden;
      line-height: 26px;
      text-overflow: ellipsis;
    }

    .Flag{
      border: 1px solid #bcbcbc;
      border-radius: 3px;
      padding: 2px 27px 2px 2px;
      cursor: pointer;
      position: relative;
    }
    .Flag:hover{
      border-color: #888;
    }
    .Flag::after{
      content: '';
      display: block;
      background: url( '/images/flag_arrow_right.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 5px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:9px;
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -4px;
    }
    .Flag img{
      display: block;
      border-radius: 4px;
      filter: saturate(135%);
      opacity:0.7;
      border: 1px solid rgba(0, 0, 0, 0.22);
    }
    </style>

    <div class="Row">
      <div class="Switch">
        <c-switch .on="${"complex on"===this.view.type}" @click="${this.domainProxySwitch}"></c-switch>
      </div>
      <div class="Flag_Out">
  ${(()=>{if(!("country"in this.view))return"";const e=this.view.country;return b.dy`
        <div class="Flag" @click="${this.domainCountryChange}">
          <img src="${Te(e)}" width="30" height="20" alt="${e}"/>
        </div>`})()}
      </div>
      <div class="Name">${this.view.view}</div>
    </div>

    <div class="Row">
      <div class="Switch">
        <c-switch .on="${this.proxyEnabled}" @click="${this.proxySwitch}"></c-switch>
      </div>
      <div class="Flag_Out">
  ${(()=>this.proxyEnabled?b.dy`
        <div class="Flag" @click="${this.countryChange}">
          <img src="${Te(this.proxyCountry)}" width="30" height="20" alt="${this.proxyCountry}"/>
        </div>`:"")()}
      </div>
      <div class="Name">${ze.otherWebsites}</div>
    </div>`}static get properties(){return{proxyEnabled:{type:Boolean},proxyCountry:{type:String},view:{type:Object}}}constructor(){super(),this.view={}}proxySwitch(){this.dispatchEvent(new CustomEvent("proxyswitch"))}domainProxySwitch(){this.dispatchEvent(new CustomEvent("domainproxyswitch"))}countryChange(){this.dispatchEvent(new CustomEvent("countrychange"))}domainCountryChange(){this.dispatchEvent(new CustomEvent("domaincountrychange"))}}customElements.define("index-home-switches",De);const Oe=s().proxy.defaultCountry||"nl",Ae=async()=>{let e=await q.Z.get("newSettingsFeatureTimezoneChange1");return!("boolean"==typeof e&&!e)||Boolean(l.Z.getStateSync().webrtcBlock&&!ge.includes("privacy"))};class Fe extends((0,E.$)(l.Z)(b.oi)){render(){return xe.call(this)}static get properties(){return{activeBanner:{type:Object},countries:{type:Array},country:{type:String},countryName:{type:String},proxyEnabled:{type:Boolean},settingsIconNewFeature:{type:Boolean},switchesView:{type:Object}}}constructor(){super(),this.activeBanner=ue.get(),this.switchesView={type:"simple",rating:void 0},this.countries=[],this.proxyEnabled=!1,this.settingsIconNewFeature=!1,this.activeBannerListener=this.activeBannerListener.bind(this)}async connectedCallback(){super.connectedCallback(),ue.addListener(this.activeBannerListener),this.settingsIconNewFeature=await Ae()}disconnectedCallback(){ue.removeListener(this.activeBannerListener)}firstUpdated(e){var t,i;if(super.firstUpdated(e),(async()=>{this.settingsIconNewFeature=await Ae()})(),!(null===(t=this.shadowRoot)||void 0===t||null===(i=t.querySelector)||void 0===i?void 0:i.call(t,"index-home-promo")))throw new Error("index-home: index-home-promo element does not exist");this.classList.toggle("proxyEnabled",this.proxyEnabled),this.classList.toggle("withPromo",Boolean(this.activeBanner))}updated(e){e.has("activeBanner")&&this.classList.toggle("withPromo",Boolean(this.activeBanner)),e.has("proxyEnabled")&&this.classList.toggle("proxyEnabled",this.proxyEnabled)}stateChanged({domain:e,proxyServers:t,userPac:i,ping:o,user:n}){const s=Array.from(n.premium?t.premiumCountries():t.freeCountries());this.countries=s,this.country=i.country,this.proxyEnabled="proxy"===i.mode,(()=>{const{country:t,filters:r}=i,{premium:l}=n,c=(()=>{var e;if(o.length&&t)return null===(e=o.find((({country:e,premium:i})=>e===t&&i===l)))||void 0===e?void 0:e.mark})();if(!e)return void(this.switchesView={type:"simple",rating:c});const d=(0,a.Z)(r,e);if(d){const{country:e,proxyMode:t}=d,i=d.value instanceof RegExp?d.value.toString():d.value,o=g.ZP.toUnicode(i);if(!t)return void(this.switchesView={domain:i,type:"complex off",view:o});this.switchesView={country:s.includes(e)?e:Oe,domain:i,type:"complex on",view:o}}else this.switchesView={type:"simple",rating:c}})()}get countryName(){return this.country?(0,m.Z)("country_name_"+this.country.toUpperCase()):""}activeBannerListener(e){this.activeBanner=e||null}countryChange(){l.Z.dispatch({type:"Page: set",page:"index:locations"})}domainProxySwitch(){let{domain:e}=this.switchesView;h.siteFilters.toggle(e)}domainCountryChange(){let{domain:e}=this.switchesView;l.Z.dispatch({type:"Page: set",page:"index:locations:"+e})}async enableProxy(){const{experiments:e,userPac:t,user:i}=await l.Z.getStateAsync(),n=await(async()=>{const e=Date.now(),t=await q.Z.get("daysAfterInstall")||e;return Math.round((e-t)/864e5)})(),r=e[s().experiments.freeServersOverloaded.id];if("1"===r&&!i.premium&&"direct"===t.mode){const e=await X();e&&(o.Z.full({category:"paywall_overload_330show",action:Y(Number(r)),label:String(n)}),await G(e))}await h.enable()}openLocations(){l.Z.dispatch({type:"Page: set",page:"index:locations"})}async openSettings(){await q.Z.set("newSettingsFeatureTimezoneChange1",!1),l.Z.dispatch({type:"Page: set",page:"index:settings"})}proxySwitch(){this.proxyEnabled?h.disable():h.enable()}}customElements.define("index-home",Fe);const Ne=(e,t,i)=>e.premium&&!t?"premium":e.code===i?"current":"change";function Re(e){let{key:t}=e;if("ArrowDown"!==t&&"ArrowUp"!==t)if("Enter"!==t)this.charsBuffer.keydownListener(e);else{if(!this.highlightedCountry)return;let{code:e}=this.highlightedCountry,t=Ne(this.highlightedCountry,this.premiumUser,this.country);if("current"===t)return;this.countryClick({detail:{mode:t,country:e}})}else{e.preventDefault();let i=(()=>{let e=this.namesList.length;const i=this.highlightedCountry;if(!i)return"ArrowUp"===t?e-1:0;let o=this.namesList.findIndex((({code:e,premium:t})=>i.code===e&&i.premium===t));return o+="ArrowDown"===t?1:-1,(o+e)%e})(),o=this.namesList[i];this.highlightedCountry={code:o.code,premium:o.premium};let n=this.scrollElement.scrollTop,s=this.scrollElement.offsetHeight,r=n+s,a=o.element.offsetHeight,l=o.element.offsetTop,c=l+a;if(l>=n&&c<=r)return;let d=l>=n?c-s+4:l-2;this.scrollElement.scrollTop=d}}var Me=i(9174);const Ve=v({virtualLocations:"virtual_locations",serversInVirtualLocations:"N_servers_in_N_virtual_Locations"});function je(){const e=Ve.serversInVirtualLocations.replace(/AAA/g,"600+").replace(/BBB/g,String(this.countries.filter((({premium:e})=>e)).length));return b.dy`
  <style>
  ${f}
  :host > .In{
    overflow: auto;
    height: 100%;
  }

  .Head{
    padding: 11px 12px;
    text-align: center;
    position: relative;
  }
  .Head > .T{
    display:inline-block;
    vertical-align:top;
    position: relative;
  }
  .Head_Title{
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
  }
  .ServerCount{
    font-size: 12px;
    line-height: 1.25;
    padding-top: 2px;
  }

  .Back{
    position: absolute;
    left: 12px;
    top: 16px;
    font-size: 14px;
    line-height: 1.2;
    padding: 0 0 0 18px;
    cursor: pointer;
  }
  .Back::before{
    content: '';
    display: block;
    background: url('/images/arrow_left.svg') 0 0 no-repeat;
    background-size: 100% 100%;
    width: 9px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 16px;
    position: absolute;
    left: 0;
    top: calc(50% - 8px);
  }

  .Helper{
    position: absolute;
    left: calc(100% + 5px);
    top: calc(50% - 8px);
    background: url( '/images/information_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 16px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 16px;
    cursor: pointer;
    text-align: left;
  }
  .Helper:hover{
    background-image: url( '/images/information_green.svg' );
  }
  .Helper::after{
    content: '';
    display: block;
    background: url( '/images/information_green.svg' ) 0 -5000px no-repeat;
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }

  .MissingLocation{
    color: var( --brand-green );
    padding: 5px 0 0;
    font-size: 13px;
  }
  .MissingLocation a{
    color: var( --brand-green );
    text-decoration: none;
    border-bottom: 1px solid var( --brand-green );
  }
  .MissingLocation a:hover{
    border-bottom-color: transparent;
  }

  .Sections{
    padding: 0px 12px 12px;
  }
  </style>

  <div class="In">
    <div class="Head"><!--
   --><div class="Back" @click="${this.back}">Back</div><!--
   --><div class="T">
        <div class="Head_Title">${Ve.virtualLocations}</div>
        <div class="Helper" @click="${this.openHelp}">?</div>
      </div><!--
   --><div class="ServerCount">${e}</div>
    </div>
    <div class="Sections">
  ${this.countries.map((e=>b.dy`<index-locations-element
      @countryclick="${this.countryClick}"
      @favorite="${this.favorite}"
      @mousemove="${this.elementHighlight(e)}"
      .data="${e}"
      .highlighted="${((e,t)=>Boolean(t&&t.code===e.code&&t.premium===e.premium))(e,this.highlightedCountry)}"
      .mode="${Ne(e,!this.premiumUser,this.country)}"
    ></index-locations-element>`))}
    </div>
  </div>`}function Ue(){return b.dy`
  <style>
  ${f}
  :host{
    display: block;
    padding: 0 7px 0 10px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  :host(.highlight){
    background: #f7f8fc;
  }
  :host(.current){
    cursor: default;
  }
  :host(.current),
  :host(.current.highlight){
    background: #f0f5f0;
  }
  
  :host > .In{
    display: flex;
    align-items: center;
    height: 40px;
    background: url( '/images/favorites/hovered.svg' ) 0 -5000px no-repeat;
  }
  :host > .In > .E:first-child{
    width: 32px;
    padding: 0 10px 0 0;
    flex-shrink: 0;
    flex-grow: 0;
  }
  :host > .In > .E.country{
    padding-right: 5px;
    flex-grow: 1;
  }
  :host > .In > .E.mark{
    width: 23px;
    padding-left: 10px;
    flex-shrink: 0;
    flex-grow: 0;
  }
  :host > .In > .E.favorite{
    width: 19px;
    padding-left: 10px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .Flag{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity:0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }
  .Country{
    font-size: 13px;
    line-height: 1.2;
    color: #333;
  }

  .Favorite{
    background: url( '/images/favorites/static.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 13px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 12px;
    cursor: pointer;
    border: 3px solid transparent;
  }
  .Favorite:hover{
    background-image: url( '/images/favorites/hovered.svg' );
  }
  .Favorite.favorited,
  .Favorite.favorited:hover{
    background-image: url( '/images/favorites/starred.svg' );
  }

  .Mark{
    display:inline-block;
    vertical-align: middle;
    width: 23px;
    overflow:hidden;
    font-size:0;text-indent:-9999px;height:0;
    padding-top: 12px;
    background: url( '/images/pings/1.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .Mark.mark2{
    background-image: url( '/images/pings/2.svg' );
  }
  .Mark.mark3{
    background-image: url( '/images/pings/3.svg' );
  }
  .Mark.mark4{
    background-image: url( '/images/pings/4.svg' );
  }
  .Mark.mark5{
    background-image: url( '/images/pings/5.svg' );
  }
  </style>

  <div class="In" @click="${this.fullElementClick}">
    <div class="E">
      <img class="Flag" src="${e=this.data.code,"usw"===e&&(e="us"),"uk"===e&&(e="gb"),e?`/images/flags/${e}.svg`:"/images/empty.png"}" width="30" height="20"/>
    </div>
    <div class="E country">
      <div class="Country">${this.data.name}</div>
    </div>
  ${(()=>this.data.delay?b.dy`
    <div class="E mark"><!--
   --><div class="Mark mark${this.data.mark}">${this.data.mark}</div><!--
 --></div>`:"")()}
  ${(()=>"boolean"!=typeof this.data.favorited?"":b.dy`
    <div class="E favorite">
      <div
        class="Favorite${this.data.favorited?" favorited":""}"
        @click="${this.favoritesClick}"></div>
    </div>`)()}
  </div>`;var e}class He extends b.oi{render(){return Ue.call(this)}static get properties(){return{data:{type:Object},highlighted:{type:Boolean},mode:{type:String}}}constructor(){super(),this.data={},this.highlighted=!1,this.mode=""}updated(e){if(e.has("highlighted")){let t=this.highlighted;t!==e.get("highlighted")&&this.classList.toggle("highlight",t)}e.has("mode")&&(this.classList.toggle("current","current"===this.mode),this.classList.toggle("premium","premium"===this.mode))}favoritesClick(){this.dispatchEvent(new CustomEvent("favorite",{detail:{country:this.data.code,favorited:!this.data.favorited}}))}fullElementClick(e){const t=e.target instanceof HTMLElement&&e.target.classList.contains("Favorite");"current"===this.mode||t||this.dispatchEvent(new CustomEvent("countryclick",{detail:{mode:this.mode,country:this.data.code}}))}}customElements.define("index-locations-element",He);const{_:We}=self,qe="undefined"!=typeof browser?browser:chrome,Xe=e=>{const t=(0,m.Z)("country_name_"+e.toUpperCase());if(t)return t;const i=qe.i18n.getUILanguage(),n=qe.runtime.getManifest().version,s="failed to look up country name for: "+e+" with locale: "+i+" at popup.js";return Me.Z.warn(s),o.Z.partial({category:"error",action:n,label:s,value:"0",noninteraction:!1}),e.toUpperCase()||"N/A"};class Ge extends((0,E.$)(l.Z)(b.oi)){render(){return je.call(this)}static get properties(){return{countries:{type:Array},country:{type:String},domain:{type:String},highlightedCountry:{type:Object},premiumUser:{type:Boolean},proxyCountry:{type:String},proxyList:{type:Array}}}constructor(){super(),this.elementHighlight=this.elementHighlight.bind(this),this.keydownListener=Re.bind(this),this.country=null,this.domain="",this.highlightedCountry=null,this.proxyCountry="",this.proxyList=[]}async connectedCallback(){super.connectedCallback();const e=this.shadowRoot;this.charsBuffer=new O,document.addEventListener("keydown",this.keydownListener),await this.forceRenderAndGenerateNamesList();const t=e.children,i=t[t.length-1];if(!i)throw new Error("index-locations: scrollElement does not exist");this.scrollElement=i,this.charsBuffer.addListener((e=>{const t=this.namesList.find((({name:t})=>t.startsWith(e)));if(!t)return;const{code:i,element:o,premium:n}=t;this.highlightedCountry={code:i,premium:n},this.scrollElement.scrollTop=o.offsetTop-2}));const o=(()=>{const t=e.querySelector("div.Head");if(!t)throw new Error("index-locations: div.Head does not exist");return t.offsetHeight})();{const t=e.querySelector("div.Sections");if(!t)throw new Error("index-locations: div.Sections does not exist");t.style.cssText=`top:${o}px;`}this.domain||(0,_.Z)({type:"сounters.increase",property:"popup: location page shows"})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.keydownListener)}updated(e){var t;const i=Array.from(e.keys());if(e.has("countries")&&this.forceRenderAndGenerateNamesList(),!i.some((e=>["domain","proxyCountry","proxyList"].includes(e))))return;const{domain:o,proxyCountry:n,proxyList:s}=this;this.country=o?(null===(t=s.find((e=>e.value===o)))||void 0===t?void 0:t.country)||"":n}stateChanged(e){const{userPac:t,user:i}=e;this.countries=((e,t)=>{const{favorites:i,ping:o,proxyServers:n,user:s}=e,r=s.premium,a=[];for(const[e,s]of n){const n=t(e);if(!r){const t=s.free;if(Array.isArray(t)&&t.length){const t={id:e,code:e,name:n,premium:!1},i=o.find((({country:t,premium:i})=>t===e&&!i));if(i){const{delay:e,mark:o}=i;Object.assign(t,{delay:e,mark:o})}a.push(t)}}{const t=s.premium;if(Array.isArray(t)&&t.length){const t={id:e+"_premium",code:e,name:n+" (Premium)",premium:!0};r&&(t.favorited=i.includes(e));const s=o.find((({country:t,premium:i})=>t===e&&i));if(s){const{delay:e,mark:i}=s;Object.assign(t,{delay:e,mark:i})}a.push(t)}}}return a.sort(((e,t)=>Boolean(e.favorited)!==Boolean(t.favorited)?e.favorited?-1:1:e.premium!==t.premium?e.premium?1:-1:e.name<t.name?-1:e.name>t.name?1:0))})(e,Xe),this.premiumUser=i.premium,this.proxyCountry="proxy"===t.mode?t.country:null,this.proxyList=t.filters.filter((({disabled:e,proxyMode:t})=>!e&&t))}back(){l.Z.dispatch({type:"Page: set",page:"index:home"})}async countryClick({detail:{mode:e,country:t}}){if("change"===e)this.domain?await h.siteFilters.changeCountry({domain:this.domain,country:t}):(await h.setCountry(t),o.Z.partial({category:"extension",action:"change_country",label:t}),fe.Z.track("change_country",{new_country:t})),await new Promise((e=>{setTimeout(e,500)})),l.Z.dispatch({type:"Page: set",page:"index:home"});else if("premium"===e){const e=document.createElement("popup-premium");e.country=t,e.initiator="premium locations",e.style.cssText="top:-100%;",document.body.append(e),o.Z.partial({category:"premium",action:"show"});if(1===await q.Z.get("Experiment 330: phase")){const{experiments:e,user:t}=await l.Z.getStateAsync(),i=await(async()=>{const e=Date.now(),t=await q.Z.get("daysAfterInstall")||e;return Math.round((e-t)/864e5)})(),n=e[s().experiments.freeServersOverloaded.id];n&&!t.premium&&o.Z.full({category:"premium_div_330show",action:Y(Number(n)),label:String(i)})}const i=e.animate([{top:"-100%"},{top:"0"}],{duration:800,easing:"linear"});await new Promise((e=>{i.onfinish=e})),e.style.cssText=""}}elementHighlight({premium:e,code:t}){return i=>{if(!Boolean(i.movementX||i.movementY))return;const o={premium:e,code:t};We.isEqual(this.highlightedCountry,o)||(this.highlightedCountry=o)}}favorite({detail:{favorited:e,country:t}}){e?B.add(t):B.remove(t)}async forceRenderAndGenerateNamesList(){const e=this.shadowRoot;await this.requestUpdate(),this.namesList=(()=>{var t;const i=this.countries.map((({code:e,name:t,premium:i})=>({code:e,name:t.toLowerCase(),premium:i}))),o=null===(t=e.querySelector("div.Sections"))||void 0===t?void 0:t.children,n=[];for(const e of o)"index-locations-element"===e.tagName.toLowerCase()&&n.push(e);return i.map(((e,t)=>Object.assign({element:n[t]},e)))})()}async openHelp(){const e=document.querySelector("div.MainContainer");if(!e)return;const t=document.createElement("popup-locations-information");t.style.cssText="opacity:0",e.appendChild(t);const i=t.animate([{opacity:0},{opacity:1}],{duration:400,easing:"linear"});await new Promise((e=>{i.onfinish=e})),t.style.cssText=""}}customElements.define("index-locations",Ge);const Ye=e=>(0,_.Z)({type:"ShowedOffers.includes",offer:e}),Je=e=>(0,_.Z)({type:"ShowedOffers.push",offer:e}),Qe=v({changeLocation:"change_location",contactUs:"contact_us",home:"home",smartSettings:"smart_settings"});function Ke(){return b.dy`
  <style>
  ${f}
  a:link,
  a:visited{
    text-decoration: none;
    cursor: pointer;
    color: #7a7c7f;
  }
  a:hover{
    text-decoration: none;
    color: var( --brand-green );
  }

  :host{
    display: block;
    padding-top: 6px;
    margin-right: 70px;
  }
  :host > .E{
    display:inline-block;
    vertical-align:top;
    position: relative;
    color: #7a7c7f;
    cursor: pointer;
    font-size: 12px;
    line-height: 30px;
    margin: 0 0 0 17px;
  }
  :host > .E:hover{
    color: var( --brand-green );
  }
  :host > .E:first-of-type{
    margin-left: 0;
  }
  :host > .E.selected{
    color: var( --brand-green );
    cursor: default;
  }

  :host > .E::before{
    font-size: 14px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 30px;
  }

  :host > .E.home::before{
    content: '';
    display:inline-block;
    vertical-align:middle;
    background: url( '/images/menu/home.svg#grey' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 12px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 10px;
    position: static;
    margin-top: -3px;
    border-right: 3px solid transparent;
  }
  :host > .E.home.selected::before,
  :host > .E.home:hover::before{
    background-image: url( '/images/menu/home.svg#green' );
  }

  :host > .E.smartSettings{
    position: relative;
    padding-right: 21px;
    background: url( '/images/menu/settings_green.svg' ) 0 -5000px no-repeat;
  }
  :host > .E.smartSettings::before{
    content: '';
    display:inline-block;vertical-align:middle;
    background: url( '/images/menu/settings_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 14px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:11px;
    position: static;
    margin-top: -3px;
    padding-right: 3px;
  }
  :host > .E.smartSettings:after{
    content: '';
    display: block;
    background: url( '/images/beta.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -16px;
    width: 18px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:18px;
  }
  :host > .E.smartSettings.selected::before,
  :host > .E.smartSettings:hover::before{
    background-image: url( '/images/menu/settings_green.svg' );
  }

  :host > .E.icon{
    width: 32px;
    min-height: 30px;
  }
  :host > .E.icon a{
    display: block;
    width: 32px;
    height: 0;
    padding-top: 32px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: calc(50% - 16px);
    margin-top: -1px;
    border-radius: 50%;
  }
  :host > .E.icon a::before{
    content: '';
    display: block;
    position: absolute;
  }
  :host > .E.icon a:focus{
    background-color: #e6e6e6;
  }

  :host > .E.support{
    margin-left: 7px;
    background: url( '/images/menu/mail_green.svg' ) 0 -5000px no-repeat;
  }
  :host > .E.support a::before{
    background: url('/images/menu/mail_grey.svg') 0 0 no-repeat;
    background-size: 100% 100%;
    width: 12px;
    overflow: hidden;
    padding-top: 9px;
    height: 0;
    top: calc(50% - 4px);
    left: calc(50% - 6px);
    margin-top: 1px;
  }
  :host > .E.support a:hover::before{
    background-image: url( '/images/menu/mail_green.svg' );
  }

  :host > .E.facebook{
    margin-left: 0;
    background: url( '/images/menu/facebook_green.svg' ) 0 -5000px no-repeat;
  }
  :host > .E.facebook a::before{
    background: url( '/images/menu/facebook_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 8px;
    overflow: hidden;
    padding-top: 14px;
    height: 0;
    position: absolute;
    top: calc(50% - 7px);
    left: calc(50% - 4px);
    margin-top: 1px;
  }
  :host > .E.facebook a:hover::before{
    background-image: url( '/images/menu/facebook_green.svg' );
  }
  </style><!--
--><div class="E home ${this.homePage?"selected":""}" @click="${this.goHome}"><!--
 -->${Qe.home}<!--
--></div><!--
--><div
    class="E smartSettings ${this.filtersPage?"selected":""}"
    @click="${this.openSettings}"
    @contextmenu="${this.openSettings}"><!--
 -->${Qe.smartSettings}<!--
--></div><!--
--><div class="E icon support">
    <a href="${this.contactUsUrl}" target="_blank">
      ${Qe.contactUs}
    </a>
  </div><!--
--><div class="E icon facebook">
    <a href="${this.facebookUrl}" target="_blank">Facebook</a>
  </div>`}class et extends((0,E.$)(l.Z)(b.oi)){render(){return Ke.call(this)}static get properties(){return{containsFilter:{type:Boolean},domain:{type:String},facebookUrl:{type:String},filtersPage:{type:Boolean},homePage:{type:Boolean}}}constructor(){super(),this.domain=null,this.filtersPage=!1,this.homePage=!1}connectedCallback(){super.connectedCallback();const e=this.shadowRoot;for(const t of e.childNodes)t.nodeType!==Node.ELEMENT_NODE&&t.remove();const t=e.querySelectorAll("a");for(const e of t)e.addEventListener("click",(async()=>{var e,t;await new Promise((e=>{setTimeout(e,50)})),null===(e=self)||void 0===e||null===(t=e.close)||void 0===t||t.call(e)}))}disconnectedCallback(){super.disconnectedCallback(),this.documentClick&&(document.removeEventListener("mousedown",this.documentClick),delete this.documentClick)}stateChanged({domain:e,userPac:t,page:i}){this.containsFilter=(()=>{if(!e)return!1;return t.filters.filter((e=>!e.disabled&&"regex"!==e.format)).map((e=>e.value)).some((t=>t===e||e.endsWith("."+t)))})(),this.domain=(()=>{if(!e)return null;let i=t.filters.filter((e=>{let{disabled:t,format:i}=e;return!t&&"regex"!==i}));if(i.some((({value:t})=>t===e)))return e;let o=i.find((({format:t,value:i})=>"domain"===t&&e.endsWith("."+i)));if(o)return o.value;let n=self.domainZoneList.find((t=>e.endsWith("."+t)));return n?e.slice(0,-(n.length+1)).split(".").pop()+"."+n:e})(),this.filtersPage=(()=>{const e=i.split(":");return"index"===e[0]&&"filters"===e[1]})(),this.homePage=(()=>{const e=i.split(":");return"index"===e[0]&&"home"===e[1]})()}get contactUsUrl(){return M({storeState:l.Z.getStateSync(),url:V.Z.contactUs})}get facebookUrl(){return"https://www.facebook.com/BrowsecVPN"}goHome(){this.homePage||l.Z.dispatch({type:"Page: set",page:"index:home"})}async openSettings(e){if(e.preventDefault(),this.documentClick)return;(0,_.Z)({type:"сounters.increase",property:"popup: menu: smart settings click"}),(async()=>{if(await Ye("smart settings"))return;Je("smart settings");const{userPac:e}=await l.Z.getStateAsync();e.filters.length||document.body.append(document.createElement("popup-help"))})();const{left:t}=e.target.getBoundingClientRect(),i=document.body.clientWidth-t,o=document.createElement("context-menu");o.style.cssText=`left:${t}px;max-width:${i}px;`,o.containsFilter=this.containsFilter,o.unicodeDomain=g.ZP.toUnicode(this.domain||""),o.domain=this.domain,document.body.append(o),this.documentClick=({target:e})=>{if(!(e instanceof HTMLElement))return;const t=!e.matches("div.Element");t&&(e===o||o.contains(e))||e.matches("popup-help, popup-help *")||(t&&o.remove(),this.documentClick&&(document.removeEventListener("mousedown",this.documentClick),delete this.documentClick))},document.addEventListener("mousedown",this.documentClick)}}customElements.define("index-menu",et);var tt=i(5221),it=i.n(tt);const ot=v({changeTimezoneByVirtualLocation:"change_timezone_according_to_virtual_location",dontShowPromoOffers:"dont_show_promo_offers",useBrowsecForWebrtcConnections:"use_browsec_for_webrtc_connections",webrtcSettingsControlledByAnotherExtension:"webrtc_settings_controlled_by_another_extension"});function nt(){return b.dy`
  <style>
  ${f}
  .Checkboxes{
    padding: 17px 0 25px;
    font-size: 16px;
  }
  .Checkboxes > .E{
    position: relative;
    padding: 8px 20px;
  }
  .Checkboxes > .E.disabled{
    opacity: 0.5;
  }
  .Checkboxes > .E.highlighted{
    background: #f0f5f0;
  }
  .Checkboxes > .E > .In{
    display:inline-block;vertical-align:top;
    padding-right: 25px;
  }
  .Checkboxes > .E > .In::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }
  .Checkboxes > .E > .In > checkbox-switch{
    float: left;
  }
  .Checkboxes > .E > .In > .R{
    display: block;
    margin-left: 55px;
  }

  .Information{
    display: inline-block;
    vertical-align: top;
    background: url( '/images/information_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 16px;
    padding-top: 16px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    cursor: pointer;
    margin: 4px 0 0 10px;
    position: relative;
  }
  .Information:hover{
    background-image: url( '/images/information_green.svg' );
  }
  .Information::after{
    content: '';
    display: block;
    background: url( '/images/information_green.svg' ) 0 -5000px no-repeat;
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }

  .Crown{
    background: url( '/images/crown.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 18px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 18px;
    position: absolute;
    right: 20px;
    top: 10px;
  }

  .Error{
    clear: both;
    padding: 2px 0 0 55px;
    color: #c00;
    font-size: 12px;
  }


  .HealthCheck{
    position: absolute;
    bottom: 25px;
    left: 25px;
    right: 25px;
    text-align: center;
  }
  .HealthCheck_Button{
    display: inline-block;
    vertical-align: top;
    position: relative;
    font-size: 14px;
    line-height: 2.714;
    padding: 0 30px 0 50px;
    border: 1px solid var( --brand-blue );
    border-radius: 4px;
    color: #494b4d;
    cursor: pointer;
    text-align: left;
  }
  .HealthCheck_Button::after{
    content: '';
    display: block;
    background: url( '/images/diagnostics.svg#health_blue' ) 0 0 no-repeat;
    width: 19px;
    padding-top: 16px;
    height: 0;
    overflow: hidden;
    position: absolute;
    top: calc(50% - 16px / 2);
    left: 23px;
  }
  </style>

  <div class="Checkboxes">
  ${(()=>this.webrtcAvailable?b.dy`
    <div class="E ${this.webrtcNotEnoughPermissions?"highlighted":""}"><div class="In">
      <checkbox-switch
        .checked="${this.webrtcBlocked}"
        @click="${this.changeWebrtc}">
      </checkbox-switch>
      <div class="R">
        <label @click="${this.changeWebrtc}">${ot.useBrowsecForWebrtcConnections}</label><!--
     --><div class="Information" @click="${this.showWebrtcHelp}"></div>
      </div>
        ${(()=>this.webrtcBlockedByOtherExtension?b.dy`
      <div class="Error">
        ${ot.webrtcSettingsControlledByAnotherExtension}
      </div>`:"")()}
    </div></div>`:"")()}

    <div class="E ${this.changeDateDisabledClass} ${this.changeDateFirstTimeClass}"><div class="In">
      <checkbox-switch
        .checked="${this.hideDate}"
        data-changedate="true"
        @mouseover="${this.changeDateMouseover}"
        @click="${this.changeDate}">
      </checkbox-switch>
      <div class="R">
        <label
          data-changedate="true"
          @mouseover="${this.changeDateMouseover}"
          @click="${this.changeDate}"><!--
       -->${ot.changeTimezoneByVirtualLocation}<!--
     --></label><!--
     --><div class="Information" @click="${this.showDateHelp}"></div>
      </div>
      <div class="Crown"></div>
    </div></div>

    <div class="E"><div class="In">
      <checkbox-switch
        .checked="${this.blockPromos}"
        data-changedate="true"
        @click="${this.changeBlockPromos}">
      </checkbox-switch>
      <div class="R">
        <label
          data-changedate="true"
          @click="${this.changeBlockPromos}"><!--
       -->${ot.dontShowPromoOffers}<!--
     --></label>
      </div>
    </div></div>

    ${(()=>"undefined"!=typeof browser?"":b.dy`
    <div class="E"><div class="In">
      <checkbox-switch
        .checked="${this.cacheRemoval}"
        data-changedate="true"
        @click="${this.changeCacheRemoval}">
      </checkbox-switch>
      <div class="R">
        <label
          data-changedate="true"
          @click="${this.changeCacheRemoval}"><!--
       --><!--
     -->Remove cache on authorization popups (experimental)</label>
      </div>
    </div></div>`)()}

  </div>

  <div class="HealthCheck"><!--
 --><div class="HealthCheck_Button" @click="${this.openDiagnostics}">Health check</div><!--
--></div>`}const st=e=>(0,_.Z)({type:"timezoneChange.set",value:e}),rt=new class{constructor(){(async()=>{this.available=await(0,_.Z)({type:"webrtc.available"})})()}async disable(e){return e&&await e(),(0,_.Z)({type:"webrtc.disable"})}async enable(e){return e&&await e(),(0,_.Z)({type:"webrtc.enable"})}getControlState(){return(0,_.Z)({type:"webrtc.getControlState"})}};class at extends b.oi{render(){return b.dy`
    <style>
    ${f}
    :host{
      display: block;
      width: 41px;
      height: 24px;
      cursor: pointer;
      position: relative;
    }
    :host::before{
      content: '';
      display: block;
      background: #e6e6e6;
      position: absolute;
      top: 3px;
      left: 0;
      right: 3px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:16px;
      border-radius: 8px;
      transition: background-color 0.15s ease-out 0s;
      box-shadow: inset 0 1px 2px rgba( 0, 0, 0, 0.2 );
    }
    :host(.checked)::before{
      background: var( --brand-green );
    }

    :host::after{
      content: '';
      display: block;
      width: 20px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:20px;
      background: #fff;
      border-radius: 50%;
      border: 1px solid #e8e8e8;
      box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.1);
      position: absolute;
      top: 0;
      left: 0;
      transition: left 0.15s ease-out 0s;
    }
    :host(.checked)::after{
      left: 17px;
    }
    </style>`}static get properties(){return{checked:{type:Boolean}}}updated(e){e.has("checked")&&this.classList.toggle("checked",this.checked)}}customElements.define("checkbox-switch",at);const lt=async()=>{if("undefined"!=typeof browser)return;if(!await new Promise(((e,t)=>{chrome.permissions.request({permissions:["privacy"]},(i=>{chrome.runtime.lastError?t(chrome.runtime.lastError):e(i)}))})))throw new Error("Management permission is not granted")};class ct extends((0,E.$)(l.Z)(b.oi)){render(){return nt.call(this)}static get properties(){return{blockPromos:{type:Boolean},cacheRemoval:{type:Boolean},changeDateDisabledClass:{type:String},changeDateFirstTimeClass:{type:String},hideDate:{type:Boolean},storeWebrtcBlocked:{type:Boolean},premiumUser:{type:Boolean},webrtcAvailable:{type:Boolean},webrtcBlocked:{type:Boolean},webrtcBlockedByOtherExtension:{type:Boolean},webrtcNotEnoughPermissions:{type:Boolean}}}stateChanged({cacheRemoval:e,promotionsBlock:t,timezoneChange:i,user:o,webrtcBlock:n}){this.changeDateDisabledClass=i&&o.premium?"disabled":"",this.blockPromos=t,this.cacheRemoval=e,this.hideDate=i,this.premiumUser=o.premium,this.storeWebrtcBlocked=n}constructor(){super(),this.computeWebrtcNotEnoughPermissions=this.computeWebrtcNotEnoughPermissions.bind(this),this.changeDateFirstTimeClass="",(async()=>{let e=await q.Z.get("newSettingsFeatureTimezoneChange2");this.changeDateFirstTimeClass=e?"":"highlighted"})(),this.storeWebrtcBlocked=null,this.premiumUser=null,this.webrtcAvailable=rt.available,this.webrtcBlocked=!1,this.webrtcBlockedByOtherExtension=!1,this.webrtcNotEnoughPermissions=!1}async connectedCallback(){super.connectedCallback(),await q.Z.set("newSettingsFeatureTimezoneChange2",!0)}disconnectedCallback(){super.disconnectedCallback(),this.tooltipElement&&(this.tooltipElement.remove(),delete this.tooltipElement),this.documentMouseMove&&(document.removeEventListener("mousemove",this.documentMouseMove),delete this.documentMouseMove)}firstUpdated(e){var t,i;super.firstUpdated(e),this.changeDateElements=Array.from((null===(t=this.shadowRoot)||void 0===t||null===(i=t.querySelectorAll)||void 0===i?void 0:i.call(t,'[data-changedate="true"]'))||[]),(async()=>{"not controlled"===await rt.getControlState()&&(this.webrtcBlockedByOtherExtension=!0)})(),this.webrtcBlocked=!!l.Z.getStateSync().webrtcBlock&&ge.includes("privacy"),this.computeWebrtcNotEnoughPermissions(ge.get()),ge.addListener(this.computeWebrtcNotEnoughPermissions)}updated(e){e.has("webrtcBlocked")&&this.computeWebrtcNotEnoughPermissions(ge.get())}computeWebrtcNotEnoughPermissions(e){this.webrtcNotEnoughPermissions=(()=>null!==this.storeWebrtcBlocked&&(this.storeWebrtcBlocked&&!e.includes("privacy")))()}changeBlockPromos(){const e=!this.blockPromos;var t;t=e,(0,_.Z)({type:"promotionsBlock.set",value:t})}async changeCacheRemoval(){const e=!this.cacheRemoval;if(e){const{permissions:e}=await it().permissions.getAll();if(!e.includes("browsingData")){if(!await new Promise((e=>{chrome.permissions.request({permissions:["browsingData"]},e)})))return;it().resetAPI("browsingData")}}l.Z.dispatch({type:"Cache removal: set",data:e})}async changeDate(){if(this.premiumUser&&this.hideDate)return;if(this.premiumUser){const e=document.createElement("popup-premium");e.initiator="timezone change",e.style.cssText="top:-100%;",document.body.append(e),o.Z.partial({category:"premium",action:"show"});const t=e.animate([{top:"-100%"},{top:"0"}],{duration:800,easing:"linear"});return await new Promise((e=>{t.onfinish=e})),void(e.style.cssText="")}const e=!this.hideDate;await st(e),this.hideDate=e}changeDateMouseover({target:e}){if(this.premiumUser||!this.hideDate)return;if(this.changeDateTooltipShown)return;if(!(e instanceof HTMLElement))return;this.changeDateTooltipShown=!0;let{top:t,left:i,height:o}=e.getBoundingClientRect();t+=o+7,i-=14,i<10&&(i=10);let n=document.createElement("general-tooltip");n.text=(0,m.Z)("this_option_is_available_only_for_premium"),n.style.cssText=`top:${t}px;left:${i}px;`,this.tooltipElement=n,document.body&&document.body.append(n);let s=this.changeDateElements.concat([n]);this.documentMouseMove=e=>{let t=e.composedPath?e.composedPath():e.deepPath?e.deepPath():e.path||[e.target];s.some((e=>t.includes(e)))||(n.remove(),document.removeEventListener("mousemove",this.documentMouseMove),delete this.documentMouseMove,delete this.tooltipElement,this.changeDateTooltipShown=!1)},document.addEventListener("mousemove",this.documentMouseMove)}async changeWebrtc(){if(this.webrtcBlockedByOtherExtension)return;let e=!this.webrtcBlocked;try{e?await rt.enable(lt):await rt.disable(lt),this.webrtcBlocked=e}catch(e){Me.Z.warn("WebRTC setup in popup failed")}}async openDiagnostics(){await(0,_.Z)({type:"Diagnostics.open"}),"undefined"!=typeof browser&&self.close()}showDateHelp(){this.showInformationPopup("date")}showWebrtcHelp(){this.showInformationPopup("webrtc")}async showInformationPopup(e){let t=document.querySelector("div.MainContainer");if(!t)return;const i=document.createElement("popup-description");i.theme=e,i.style.cssText="opacity:0",t.appendChild(i);const o=i.animate([{opacity:0},{opacity:1}],{duration:400,easing:"linear"});await new Promise((e=>{o.onfinish=e})),i.style.cssText=""}}customElements.define("index-settings",ct);const dt=v({on:"on",off:"off"});class pt extends b.oi{render(){return b.dy`
    <style>
    ${f}
    :host{
      display: block;
      width: 61px;
      height: 26px;
      cursor: pointer;
      position: relative;
    }
    :host *{
      cursor: pointer;
    }
    .BackgroundText{
      display: block;
      background: var( --brand-burgundy );
      border-radius: 13px;
      width: 61px;
      height: 26px;
      line-height: 26px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset, 0 0 2px rgba(0, 0, 0, 0.15) inset;
      font-size: 13px;
      height: inherit;
      position: relative;
      text-transform: uppercase;
      transition: all 0.15s ease-out 0s;
    }
    .BackgroundText_Off,
    .BackgroundText_On{
      position: absolute;
      top: 0;
      transition: inherit;
    }
    .BackgroundText_Off{
      color: #fff;
      right: 8px;
    }
    .BackgroundText_On{
      color: white;
      left: 11px;
      opacity: 0;
      text-shadow: 0 1px rgba(0, 0, 0, 0.2);
    }
    :host(.on) .BackgroundText{
      background: var( --brand-green );
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15) inset, 0 0 3px rgba(0, 0, 0, 0.2) inset;
    }
    :host(.on) .BackgroundText_Off{
      opacity: 0;
    }
    :host(.on) .BackgroundText_On{
      opacity: 1;
    }

    .Circle{
      background: #fff;
      border-radius: 11px;
      height: 22px;
      width: 22px;
      left: 2px;
      position: absolute;
      top: 2px;
      transition: left 0.15s ease-out 0s;
    }
    .Circle:before{
      content: "";
      background: #f9f9f9 linear-gradient(to bottom, #eeeeee, white) repeat scroll 0 0;
      border-radius: 6px;
      box-shadow: 0 1px rgba(0, 0, 0, 0.02) inset;
      height: 12px;
      left: 50%;
      margin: -6px 0 0 -6px;
      position: absolute;
      top: 50%;
      width: 12px;
    }
    :host(.on) .Circle{
      box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
      left: 37px; /* left: auto; right: 2px; */
    }
    </style>

    <div class="BackgroundText">
      <div class="BackgroundText_Off">${this.translations.off}</div>
      <div class="BackgroundText_On">${this.translations.on}</div>
    </div>
    <div class="Circle"></div>`}static get properties(){return{on:{type:Boolean,observer:"observeOn"},translations:{type:Object}}}get translations(){return dt}updated(e){e.has("on")&&this.classList.toggle("on",this.on)}}customElements.define("c-switch",pt);const ut=s().proxy.defaultCountry||"nl";class ht extends((0,E.$)(l.Z)(b.oi)){render(){return Q.call(this)}static get properties(){return{page:{type:String},preMenuView:{type:String},switchOn:{type:Boolean}}}constructor(){super(),this.page=l.Z.getStateSync().page,this.preMenuView="",this.switchOn=!1}firstUpdated(e){super.firstUpdated(e);const t=this.shadowRoot.querySelector("div.Switch");if(!t)throw new Error("main-index shadowRoot is empty");this.switch=t,this.switch.append(document.createElement(l.Z.getStateSync().page.replace(/\:/g,"-")))}async updated(e){if(!e.has("page"))return;const t=this.page,i=e.get("page");if(!i)return;const o=t.split(":"),n=i.split(":");if("index"!==o[0])return;const s=l.Z.getStateSync().userPac.mode,r=o.slice(1),a=n.slice(1),c="home"===r[0]?"left":"right",d=r[0]===a[0],p=this.switch.firstElementChild;if(!p)throw new Error("main-index has no child elements");if(d){if("filters"===r[0]&&r[1]){const e=r[1];p.country="proxy"===s?null:ut,p.domain=e,p.selectedDomain=null}}else{const e=(()=>{switch(r[0]){case"filters":return"index-filters";case"home":return"index-home";case"locations":return"index-locations";case"settings":return"index-settings";case"smart settings hint":return"smart-settings-hint"}})();if(!e)return;const t=document.createElement(e);"locations"===r[0]&&r[1]&&(t.domain=r[1]),"filters"===r[0]&&r[1]&&(t.domain=r[1],t.country="proxy"===s?null:ut),"left"===c?(this.switch.prepend(t),this.switch.style.cssText="margin-left:-100%;"):this.switch.append(t),"undefined"==typeof browser&&await new Promise((e=>{setTimeout(e,0)}));const i=this.switch.animate([{marginLeft:"left"===c?"-100%":"0%"},{marginLeft:"left"===c?"0%":"-100%"}],{duration:250,easing:"linear"});if(await new Promise(((e,t)=>{i.onfinish=e})),p.remove(),this.switch.style.cssText="","undefined"!=typeof browser&&"index-locations"===e){var u,h,g;const e=null===(u=t.shadowRoot)||void 0===u||null===(h=u.querySelector)||void 0===h?void 0:h.call(u,".In");null==e||null===(g=e.focus)||void 0===g||g.call(e)}}}stateChanged({domain:e,userPac:t,page:i}){this.page=i,this.preMenuView=(()=>{const[o,n]=i.split(":");if("index"===o&&"filters"===n)return"help";if("index"===o&&"smart settings hint"===n)return"help";if(!e)return"switch";const s=[];for(const e of t.filters)e.disabled||"regex"===e.format||s.push(e.value);return s.includes(e)?"":"switch"})(),this.switchOn="proxy"===t.mode}openHelp(){(0,_.Z)({type:"сounters.increase",property:"popup: smart settings: open help"}),(0,_.Z)({type:"create tab",options:"/pages/help/help.html"})}async switchClick(){const{experiments:e,userPac:t,user:i}=await l.Z.getStateAsync(),n=await(async()=>{const e=Date.now(),t=await q.Z.get("daysAfterInstall")||e;return Math.round((e-t)/864e5)})(),r=e[s().experiments.freeServersOverloaded.id];if("1"===r&&i.premium&&"direct"===t.mode){const e=await X();e&&(o.Z.full({category:"paywall_overload_330show",action:Y(Number(r)),label:String(n)}),await G(e))}const a=new W.Z("Big switch from "+(this.switchOn?"on":"off"));this.switchOn?await h.disable():await h.enable(),a.end()}}customElements.define("main-index",ht);class gt extends((0,E.$)(l.Z)(HTMLElement)){constructor(){super(),this.animation=!1,this.indexPage="index"===l.Z.getStateSync().page.split(":")[0];const e=this.attachShadow({mode:"open"}),t=be.dy`
    <style>
    ${f}
    :host{
      display: block;
      overflow: hidden;
      position: absolute;
      top:56px;
      width: 100%;
      bottom:0px;
      left:0px;
      text-align: left;
    }
    :host > .In{
      width: 100%;
      height: 100%;
      white-space: nowrap;
    }
    :host > .In > *{
      width: 100%;
      height: 100%;
      position: relative;
      display:inline-block;
      vertical-align:top;
      white-space:normal;
      overflow: hidden;
    }
    </style>

    <div class="In"></div>`;(0,be.sY)(t,e),this.ribbon=e.querySelector("div.In"),this.ribbon.append(document.createElement("main-index"))}async stateChanged({page:e}){const t=this.indexPage,i="index"===e.split(":")[0];if(i===t)return;var o,n;(this.indexPage=i,this.animation)?null===(o=this.animationObject)||void 0===o||null===(n=o.cancel)||void 0===n||n.call(o):this.animation=!0;for(const e of this.ribbon.children)"true"===e.dataset.old&&e.remove();const s=this.ribbon.lastElementChild;s.dataset.old="true";const r=document.createElement(i?"main-index":"main-login");r.style.cssText="visibility:hidden;",i?this.ribbon.prepend(r):this.ribbon.append(r),await r.updateComplete,i&&(this.ribbon.style.cssText="margin-left:-100%;"),await new Promise((e=>{setTimeout(e,0)})),r.style.cssText="";try{var a;const e=this.ribbon.animate([{marginLeft:i?"-100%":"0%"},{marginLeft:i?"0%":"-100%"}],{duration:250,easing:"linear"});this.animationObject=e,await new Promise(((t,i)=>{e.onfinish=t,e.oncancel=()=>{i(new Error("page-switch animation is broken"))}})),s.remove(),this.ribbon.style.cssText="",null===(a=r.onAnimationComplete)||void 0===a||a.call(r),this.animation=!1}catch(e){}}}customElements.define("page-switch",gt);const mt=v({changeTimezone:{p1:"change_timezone_text_1",p2:"change_timezone_text_2",p3:"change_timezone_text_3"},whatIsWebrtc:{title:"what_is_webrtc_title",p1:"what_is_webrtc_text_1",p2:"what_is_webrtc_text_2",p3:"what_is_webrtc_text_3"}});class xt extends b.oi{render(){return b.dy`
    <style>
    ${f}
    :host{
      display: block;
      font-size: 14px;
      line-height: 1.3;
      color: var( --brand-blue );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    :host > .Overlay{
      position: absolute;
      top:0px;right:0px;bottom:0px;left:0px;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
      background: rgba(255, 255, 255, 0.5);
    }
    :host > .In{
      position: absolute;
      top:56px;
      right:0px;
      bottom:40px;
      left:0px;
      border: 1px solid transparent;
      border-width: 6px 5px 5px;
    }
    :host > .In > .Bg{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #fff;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      font-size: 0;
      overflow: hidden;
    }

    :host > .In > .In{
      position: relative;
      width: 100%;
      height: 100%;
    }
    :host > .In > .In > .In{
      position: absolute;
      left: 20px;
      right: 20px;
      top: 25px;
      bottom: 20px;
      overflow: auto;
    }
    :host > .In > .In > .In::-webkit-scrollbar{
      width: 6px;
    }
    :host > .In > .In > .In::-webkit-scrollbar-track{
      border-radius: 3px;
      background: rgba(255,255,255,0);
    }
    :host > .In > .In > .In::-webkit-scrollbar-thumb{
      border-radius: 3px;
      background: #aaa;
    }

    .Text{
      color: var( --brand-blue );
      font-size: 14px;
      line-height: 1.375;
    }
    .Title{
      font-size: 18px;
      font-weight: 600;
      padding-bottom: 15px;
    }
    .Text p + p{
      padding-top: 1em;
    }

    .Close{
      background: url( '/images/popup_close_grey.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 12px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:12px;
      position: absolute;
      right: 11px;
      top: 11px;
      border: 5px solid transparent;
      cursor: pointer;
    }
    .Close:hover{
      background-image: url( '/images/popup_close_black.svg' );
    }
    .Close::after{
      content: '';
      display: block;
      width: 1px;
      height: 1px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      background: url( '/images/popup_close_black.svg' ) 0 -5000px no-repeat;
    }
    </style>

    <div class="Overlay" @click="${this.close}">&nbsp;</div>
    <div class="In">
      <div class="Bg"></div>
      <div class="In">
        <div class="In Text">
  ${(()=>"date"===this.theme?b.dy`
          <p>${mt.changeTimezone.p1}</p>
          <p>${mt.changeTimezone.p2}</p>
          <p>${mt.changeTimezone.p3}</p>`:"webrtc"===this.theme?b.dy`
          <div class="Title">${mt.whatIsWebrtc.title}</div>
          <p>${mt.whatIsWebrtc.p1}</p>
          <p>${mt.whatIsWebrtc.p2}</p>
          <p>${mt.whatIsWebrtc.p3}</p>`:"")()}
        </div>
        <div class="Close" @click="${this.close}">X</div>
      </div>
    </div>
    `}static get properties(){return{theme:{type:String}}}constructor(){super(),this.theme=""}async close(){const e=this.animate([{opacity:1},{opacity:0}],{duration:400,easing:"linear"});await new Promise((t=>{e.onfinish=t})),this.remove()}}customElements.define("popup-description",xt);var vt=i(4441);function ft(){const e=this.timer||0;return vt.dy`
  <style>
  ${f}
  :host{
    display: block;
    position: absolute;
    z-index: 3;
    top: 56px;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
  }
  :host > .In{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;
  }
  :host > .In > .T{
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  :host > .In > .T > .In{
    width: 100%;
  }

  :host > .In > .B{
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 0 0 25px;
  }
  :host > .In > .B > .In{
    width: 100%;
  }

  .Title{
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    padding: 25px 15px 0;
  }
  .Text{
    text-align: center;
    padding-bottom: 15px;
    font-size: 16px;
  }
  .Button_Out{
    text-align: center;
  }
  .Button{
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
    background-color: var( --brand-green );
    color: #fff;
    text-decoration: none;
    padding: 10px 30px;
    border-radius: 4px;
  }
  </style>

  <div class="In">
    <div class="T"><div class="In">
      <div class="Title">
        Sorry, our free servers are overloaded<br /><br />
        Please wait for ${e} seconds
      </div>
    </div></div>
    <div class="B"><div class="In">
      <div class="Text">or upgrade to Premium</div>
      <div class="Button_Out"><!--
     --><a 
          @click="${this.linkClick}"
          class="Button" 
          href="${this.premiumLink}"
          target="_blank"
        >Get Premium now!</a><!--
   --></div>
   </div></div>
  </div>`}const bt=new Map;for(const[e,{id:t,taskNumber:i}]of Object.entries(s().experiments))bt.set(t,{name:e,taskNumber:i});class yt extends((0,E.$)(l.Z)(vt.oi)){render(){return ft.call(this)}static get properties(){return{timer:{type:Number}}}get premiumLink(){var e;const t=l.Z.getStateSync(),{experiments:i}=t,o=Date.now(),n=t.promotions.find((({from:e,till:t,tariffs:i})=>e<=o&&o<=t&&i)),s={plan_id:"biennial",utm_campaign:null!==(e=null==n?void 0:n.id)&&void 0!==e?e:"default_campaign",utm_medium:"paywall_overload",utm_source:"chromium extension"},r=[];for(const[e,t]of Object.entries(i)){if(!bt.has(e))continue;const{taskNumber:i}=bt.get(e);r.push(`exp${i}_${t}`)}return r.length&&(s.expvarid=r.join(",")),M({action:e=>Object.assign(e,s),storeState:t,url:V.Z.premium})}stateChanged({user:e}){e.premium&&this.remove()}constructor(){super(),(async()=>{const e=Date.now(),t=await q.Z.get("daysAfterInstall")||e;this.daysAfterInstall=Math.round((e-t)/864e5)})()}linkClick(){const{experiments:e}=l.Z.getStateSync(),t=e[s().experiments.freeServersOverloaded.id];o.Z.full({category:"paywall_overload_330click",action:Y(Number(t)),label:String(this.daysAfterInstall)})}}customElements.define("free-servers-overloaded",yt);const wt=v({okIGotIt:"ok_i_got_it",smartSettingsControl:"smart_settings_allow_you_to_control",smartSettingsFeatures1:"smart_settings_features_1",smartSettingsFeatures2:"smart_settings_features_2",smartSettingsFeatures3:"smart_settings_features_3",withSmartSettingsYouCan:"with_smart_settings_you_can"});class kt extends b.oi{render(){return b.dy`
    <style>
    ${f}
    :host{
      display: block;
      font-size: 14px;
      line-height: 1.3;
      color: var( --brand-blue );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 4;
    }
    :host > .Overlay{
      position: absolute;
      top:0px;right:0px;bottom:0px;left:0px;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
    }
    :host > .In{
      position: absolute;
      top:56px;
      right:0px;
      bottom:40px;
      left:0px;
      border: 1px solid transparent;
      border-width: 6px 5px 5px;
    }
    :host > .In > .Bg{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #fff;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      font-size: 0;
      overflow: hidden;
    }
    :host > .In > .In{
      position: relative;
      padding: 27px 20px;
    }

    .Title{
      font-size: 18px;
      padding-bottom: 15px;
      font-weight: 600;
    }
    .Description{
      padding-bottom: 20px;
    }
    ul{
      list-style: none;
    }
    ul > li{
      padding-left: 20px;
      position: relative;
    }
    ul > li::after{
      content: '';
      display: block;
      background: url('/images/popup-help/check.svg') 0 0 no-repeat;
      background-size: 100% 100%;
      width: 14px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:10px;
      position: absolute;
      top: 5px;
      left: 0;
    }
    ul > li + li{
      border-top: 7px solid transparent;
    }
    .Button{
      text-align: center;
      padding-top: 15px;

    }
    .Button input{
      display:inline-block;
      vertical-align:top;
      box-sizing: content-box;
      height: 45px;
      line-height: 45px;
      border: 0;
      cursor: pointer;
      min-width: 200px;
      padding: 0 15px;
      background: var( --brand-green );
      text-align: center;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
    }

    .Close{
      position: absolute;
      top: 16px;
      right: 16px;
      background: url( '/images/popup_close_grey.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 12px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:12px;
      cursor: pointer;
    }
    .Close:hover{
      background-image: url( '/images/popup_close_black.svg' );
    }
    .Close::after{
      content: '';
      display: block;
      width: 1px;
      height: 1px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      background: url( '/images/popup_close_black.svg' ) 0 -5000px no-repeat;
    }
    </style>

    <div class="Overlay">&nbsp;</div>
    <div class="In">
      <div class="Bg"></div>
      <div class="In">
        <div class="Title">${wt.smartSettingsControl}</div>
        <div class="Description">${wt.withSmartSettingsYouCan}</div>
        <div class="Features">
          <ul>
            <li>${wt.smartSettingsFeatures1}</li>
            <li>${wt.smartSettingsFeatures2}</li>
            <li>${wt.smartSettingsFeatures3}</li>
          </ul>
        </div>
        <div class="Button"><input type="button" value="${wt.okIGotIt}" @click="${this.close}"/></div>
        <div class="Close" @click="${this.close}">X</div>
      </div>
    </div>
    `}async close(e){e.stopPropagation();const t=this.animate([{opacity:1},{opacity:0}],{duration:400,easing:"linear"});await new Promise((e=>{t.onfinish=e})),this.style.cssText="display:none"}}customElements.define("popup-help",kt);const _t=v({text1:"locations_help_1",text2:"locations_help_2",text3:"locations_help_3"});class Et extends b.oi{render(){return b.dy`
    <style>
    ${f}
    :host{
      display: block;
      font-size: 14px;
      line-height: 1.3;
      color: var( --brand-blue );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    :host > .Overlay{
      position: absolute;
      top:0px;right:0px;bottom:0px;left:0px;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
      background: rgba(255, 255, 255, 0.5);
    }
    :host > .In{
      position: absolute;
      top:56px;
      right:0px;
      bottom:40px;
      left:0px;
      border: 1px solid transparent;
      border-width: 6px 5px 5px;
    }
    :host > .In > .Bg{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #fff;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      font-size: 0;
      overflow: hidden;
    }

    :host > .In > .In{
      position: relative;
      width: 100%;
      height: 100%;
    }
    :host > .In > .In > .In{
      position: absolute;
      left: 20px;
      right: 20px;
      top: 25px;
      bottom: 20px;
      overflow: auto;
    }
    :host > .In > .In > .In::-webkit-scrollbar{
      width: 6px;
    }
    :host > .In > .In > .In::-webkit-scrollbar-track{
      border-radius: 3px;
      background: rgba(255,255,255,0);
    }
    :host > .In > .In > .In::-webkit-scrollbar-thumb{
      border-radius: 3px;
      background: #aaa;
    }

    .Text{
      color: var( --brand-blue );
      font-size: 14px;
      line-height: 1.375;
    }
    .Title{
      font-size: 18px;
      font-weight: 600;
      padding-bottom: 15px;
    }
    .Text p + p{
      padding-top: 1em;
    }

    .Close{
      background: url( '/images/popup_close_grey.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 12px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:12px;
      position: absolute;
      right: 11px;
      top: 11px;
      border: 5px solid transparent;
      cursor: pointer;
    }
    .Close:hover{
      background-image: url( '/images/popup_close_black.svg' );
    }
    .Close::after{
      content: '';
      display: block;
      width: 1px;
      height: 1px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      background: url( '/images/popup_close_black.svg' ) 0 -5000px no-repeat;
    }
    </style>

    <div class="Overlay" @click="${this.close}">&nbsp;</div>
    <div class="In">
      <div class="Bg"></div>
      <div class="In">
        <div class="In Text">
          <p>${_t.text1}</p>
          <p>${_t.text2}</p>
          <p>${_t.text3}</p>
        </div>
        <div class="Close" @click="${this.close}">X</div>
      </div>
    </div>
    `}async close(){const e=this.animate([{opacity:1},{opacity:0}],{duration:400,easing:"linear"});await new Promise((t=>{e.onfinish=t})),this.remove()}}customElements.define("popup-locations-information",Et);function St(){const e="v"+this.view;return b.dy`
  <style>
  ${f}
  :host{
    display: block;
    position: absolute;
    z-index: 3;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 100%;
    background: rgba(255,255,255,0.7);
  }
  .Parent{
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .Parent.v1,
  .Parent.v4,
  .Parent.v7{
    background: linear-gradient(-20deg, #bedcbf, #f8fef8);
  }
  .Parent.v2,
  .Parent.v5{
    background: linear-gradient(-20deg, #f5d4c0, #b8b8b8);
  }
  .Parent.v3,
  .Parent.v6{
    background: #fff;
  }
  .Parent > .B{
    flex-grow: 0;
    flex-shrink: 0;
    padding: 0 10px 5px;
  }

  .Title{
    flex-grow: 0;
    flex-shrink: 0;
    text-align: center;
    padding: 15px 10px 0px;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
  }

  .Close{
    position: absolute;
    top: 0px;
    right: 0;
    width: 10px;
    padding-top: 10px;
    border: 11px solid transparent;
    height: 0;
    overflow: hidden;
    background: url( '/images/popup_close_2.svg#grey' ) 0 0 no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .Close:hover{
    background-image: url( '/images/popup_close_2.svg#white' );
  }
  .Close::after{
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
    background: url( '/images/popup_close_2.svg#white' ) 0 -5000px no-repeat;
  }

  .Steps{
    padding: 0 50px;
  }
  .Steps > .E + .E{
    padding-top: 25px;
  }
  .StepTitle{
    font-size: 15px;
    font-weight: bold;
  }
  .StepText{
    font-size: 12px;
  }

  .DontRemind{
    overflow: hidden;
    padding: 0 0 5px;
  }
  .DontRemind > input[type="checkbox"]{
    float: left;
    margin: 3px 0 0;
    width: 13px;
    height: 13px;
    opacity: 0.5;
  }
  .DontRemind > label{
    display: block;
    margin: 0 0 0 20px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
  }

  .TwoButtons{
    display: flex;
    
    width: 100%;
    justify-content: space-between;
    padding: 0 0 5px;
  }

  .TwoButtons > .E{
    box-sizing: border-box;
  }
  .TwoButtons > .E:first-child{
    width: 50%;
    padding: 0 7px 0 0;
  }
  .TwoButtons > .E:last-child{
    width: 50%;
    padding: 0 0 0 7px;
  }

  .TwoButtons_Button{
    display: block;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }
  .TwoButtons_Button.continue{
    border: 1px solid #69726a;
  }
  .TwoButtons_Button.upgrade{
    border: 1px solid var( --brand-green );
    color: #000;
    font-weight: bold;
    font-size: 16px;
  }
  .Parent.v1 .TwoButtons_Button.upgrade,
  .Parent.v6 .TwoButtons_Button.upgrade,
  .Parent.v7 .TwoButtons_Button.upgrade{
    background: var( --brand-green );
    border-color: var( --brand-green );
  }
  .Parent.v2 .TwoButtons_Button.upgrade{
    background: #efa524;
    border-color: #efa524;
  }
  .Parent.v6 .TwoButtons_Button.upgrade{
    color: #fff;
  }
  
  .OneButton{
    display: block;
    background: var( --brand-green );
    text-align: center;
    border-radius: 4px;
    position: relative;
    color: #fff;
    padding: 8px 0;
    cursor: pointer;
    text-decoration: none;
  }
  .Parent.v5 .OneButton{
    background: #efa524;
    color: #000;
  }

  .OneButton_Title{
    display: block;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
  }
  .OneButton_Price{
    display: block;
    font-size: 14px;
  }
  .Guarantee{
    color: #808080;
    font-size: 12px;
    text-align: center;
    padding-top: 7px;
  }

  .Features{
    padding: 0px 35px 0px 35px;
    color: #7a7c7f;
  }
  .Features > .E{
    min-height: 72px;
    box-sizing: border-box;
    padding: 2px 0 0px 90px;
    position: relative;
  }
  .Features > .E::before{
    content: "";
    overflow:hidden;
    font-size:0;
    text-indent:-9999px;
    height:0;
    width: 60px;
    padding-top:60px;
    position: absolute;
    left: 4px;
    top: 8px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .Features > .E.countries::before{
    background-image: url( '/images/promos/circles.svg#countries' );
  }
  .Features > .E.speed::before{
    background-image: url( '/images/promos/circles.svg#speed' );
  }
  .Features > .E.servers::before{
    background-image: url( '/images/promos/circles.svg#servers' );
  }

  .Feature_Name{
    color: #28334e;
    font-size: 15px;
    margin: 9px 0 2px;
    line-height: 1.29;
  }
  .Feature_Text{
    font-size: 13px;
    line-height: 1.25;
  }
  </style>

  <div class="Parent ${e}">
    <div class="Title">
      Upgrade to Browsec Premium
    </div>
    <div class="C">
      ${(()=>["1","2","4","5","7"].includes(this.view)?b.dy`
      <div class="Steps">
        <div class="E">
          <div class="StepTitle">Speed up your internet connection</div>
          <div class="StepText">${(()=>"7"===this.view?b.dy`enjoy your favorite shows and channels while abroad`:b.dy`to enjoy streaming services`)()}</div>
        </div>
        <div class="E">
          <div class="StepTitle">Get access to more virtual locations</div>
          <div class="StepText">to unblock more websites</div>
        </div>
        <div class="E">
          <div class="StepTitle">Get priority support</div>
          <div class="StepText">
            Requests from premium users are always processed first
          </div>
        </div>
      </div>`:b.dy`
      <div class="Features">
        <div class="E countries">
          <div class="Feature_Name">Premium locations</div>
          <div class="Feature_Text">
            Access the Internet via additional Premium locations.
          </div>
        </div>
        <div class="E speed">
          <div class="Feature_Name">Turbo speed</div>
          <div class="Feature_Text">
            Premium users enjoy dedicated traffic lanes.
          </div>
        </div>
        <div class="E servers">
          <div class="Feature_Name">Premium servers</div>
          <div class="Feature_Text">
            Our best-in-class servers guarantee top performance.
          </div>
        </div>
      </div>`)()}
    </div>
    
    <div class="B">
      <div class="DontRemind">
        <input 
          type="checkbox" 
          id="DontRemind" 
          ?checked="${this.dontRemindChecked}" 
          @change="${this.dontRemindClick}"/>
        <label for="DontRemind">Don't remind me again</label>
      </div>

      ${(()=>["1","2","6","7"].includes(this.view)?b.dy`
      <div class="TwoButtons">
        <div class="E">
          <div 
            class="TwoButtons_Button continue" 
            @click="${this.freeClick}"
          >Continue in free mode</div>
        </div>
        <div class="E">
          <a 
            class="TwoButtons_Button upgrade"
            href="${this.payLink}"
            target="_blank"
            @click="${this.premiumClick}"
          >Upgrade now</a>
        </div>
      </div>`:"")()}

      ${(()=>["3","4","5"].includes(this.view)?b.dy`
      <a
        class="OneButton"
        href="${this.payLink}"
        target="_blank"
        @click="${this.premiumClick}"
      >
        <span class="OneButton_Title">Get Premium Now!</span>
        <span class="OneButton_Price">only ${this.price} per month</span>
      </a>
      <div class="Guarantee">7 days money back guarantee</div>`:"")()}
      
    </div>

    <div class="Close" @click="${this.close}">x</div>
  </div>`}const Ct=s().experiments.premiumOverlayOnPopupOpen.id;class Pt extends((0,E.$)(l.Z)(b.oi)){render(){return St.call(this)}static get properties(){return{_showCount:{type:Number},dontRemindChecked:{type:Boolean},payLink:{type:String},price:{type:String},view:{type:String}}}get showCount(){return this._showCount}set showCount(e){this._showCount=e,(async()=>{const{daysAfterInstall:e,experiments:t}=l.Z.getStateSync(),i=t[Ct],o=i?Y(Number(i)):void 0;this.letterVariant=o;const n=o?"252"+o.toLowerCase():void 0,s={utm_source:"chromium extension",utm_campaign:"default_campaign",utm_medium:"premium_openoffer",plan_id:"biennial",instd:e,offernum:String(this.showCount)};n&&Object.assign(s,{expvarid:n}),this.payLink=((e,t=(e=>e))=>(0,R.Z)(e,(e=>Object.assign(t(e),{instd:l.Z.getStateSync().daysAfterInstall}))))(V.Z.premium,(e=>Object.assign(e,s)))})()}constructor(){super(),this.dontRemindChecked=!1,this.price="$2.99",this.view="1"}stateChanged({prices:e,priceTrial:t}){this.price="$"+Ce({prices:e,priceTrial:t}).price}async close(){await q.Z.set("Experiment 252: checkbox checked",this.dontRemindChecked),this.remove()}dontRemindClick(){this.dontRemindChecked=!this.dontRemindChecked}async freeClick(){await q.Z.set("Experiment 252: checkbox checked",this.dontRemindChecked),this.remove()}async premiumClick(){const e=this.letterVariant;"number"==typeof this.showCount&&e&&o.Z.full({category:"Exp252_Get_premium",action:e,label:String(this.showCount-1)}),await q.Z.set("Experiment 252: checkbox checked",this.dontRemindChecked),self.close()}}customElements.define("onstart-premium-overlay",Pt);function $t(){const e=l.Z.getStateSync(),t={expvarid:(()=>{switch(this.mode){case"standard":return"262b";case"with price":return"262c";case"continue":return"262d"}})(),utm_source:"chromium extension",utm_medium:"chooseplan",utm_campaign:"default_campaign",instd:e.daysAfterInstall},i=M({action:e=>Object.assign(e,t,{plan_id:"monthly"}),storeState:e,url:V.Z.premium}),o=M({action:e=>Object.assign(e,t,{plan_id:"annual"}),storeState:e,url:V.Z.premium}),n=M({action:e=>Object.assign(e,t,{plan_id:"biennial"}),storeState:e,url:V.Z.premium});return b.dy`
  <style>
  ${f}
  :host{
    display: block;
    font-size: 14px;
    line-height: 1.3;
    color: var( --brand-blue );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  :host > .Overlay{
    position: absolute;
    top:0px;right:0px;bottom:0px;left:0px;
    overflow: hidden;
    text-indent: -9999px;
    font-size: 0;
    background: rgba(255, 255, 255, 0.5);
  }
  :host > .In{
    position: absolute;
    top: 56px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border: 1px solid transparent;
    border-width: 6px 5px 5px;
  }
  :host > .In::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.99);
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    font-size: 0;
    overflow: hidden;
  }

  :host > .In > .In{
    position: relative;
    height: 100%;
  }

  .Description{
    color: var( --brand-blue );
    font-size: 16px;
    line-height: 1.375;
    padding: 0 25px;
    text-align: center;
  }

  .Close{
    position: absolute;
    top: 16px;
    right: 16px;
    background: url( '/images/popup_close_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 12px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:12px;
    cursor: pointer;
  }
  .Close:hover{
    background-image: url( '/images/popup_close_black.svg' );
  }
  .Close::after{
    content: '';
    display: block;
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    background: url( '/images/popup_close_black.svg' ) 0 -5000px no-repeat;
  }

  .Title{
    text-align: center;
    padding: 10px 5px 15px;
    font-weight: bold;
    font-size: 18px;
  }

  .Columns{
    display: flex;
    padding: 0 0 0;
  }
  .Columns > .E{
    box-sizing: border-box;
    flex-grow: 0;
    flex-shrink: 0;
    width: calc( 100% / 3 );
    padding: 0 5px;
  }
  .Columns > .E ~ .E{
    border-left: 1px solid #e6e6e6;
  }

  .Icon{
    margin: 0 auto;
    position: relative;
    box-sizing: content-box;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: calc( 204px * 0.2 );
  }
  .Icon::after{
    content: '';
    display: block;
    width: calc( 90px * 0.2 );
    padding-top: calc( 90px * 0.2 );
    height: 0;
    overflow: hidden;
    background: url('/images/buy_premium_sprite.svg#star') 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
  }

  .Icon.speed{
    background-image: url('/images/buy_premium_sprite.svg#speed');
    width: calc( 203px * 0.2 );
    border-right: calc( 6px * 0.2 ) solid transparent;
  }
  .Icon.speed::after{
    right: calc( -6px * 0.2 );
  }

  .Icon.servers{
    background-image: url('/images/buy_premium_sprite.svg#servers');
    width: calc( 208px * 0.2 );
    border-right: calc( 11px * 0.2 ) solid transparent;
  }
  .Icon.servers::after{
    right: calc( -11px * 0.2 );
  }

  .Icon.locations{
    background-image: url('/images/buy_premium_sprite.svg#locations');
    width: calc( 142px * 0.2 );
    border-right: calc( 39px * 0.2 ) solid transparent;
  }
  .Icon.locations::after{
    right: calc( -39px * 0.2 );
  }

  .ColumnTitle{
    font-weight: bold;
    text-align: center;
    padding: 10px 0 3px;
    font-size: 12px;
    letter-spacing: -0.5px;
    margin: 0 -5px;
    text-transform: uppercase;
  }
  .ColumnDescription{
    text-align: center;
    font-size: 11px;
    line-height: 1.3;
    min-height: 43px;
  }
  .Separator{
    width: calc( 100% / 3 );
    height: 1px;
    overflow: hidden;
    background: #1c304e;
    margin: 10px auto 10px;
  }

  .FreePremiumSpeed{
    margin-right: -5px;
  }
  .FreePremiumSpeed > table > tbody > tr:last-child > td{
    vertical-align: middle;
  }
  .FreePremiumSpeed > table > tbody > tr > td ~ td{
    padding-left: 3px;
  }
  .FreePremiumSpeed_Title{
    font-weight: bold;
    text-transform: uppercase;
    font-size: 11px;
  }
  .FreePremiumSpeed_Title.feature{
    color: var( --brand-green );
  }

  .FreePremiumSpeed_Value_Number{
    display: inline-block;
    vertical-align: baseline;
    font-weight: bold;
    font-size: 15px;
  }
  .FreePremiumSpeed_Value_Text{
    display: inline-block;
    vertical-align: baseline;
    font-size: 11px;
    padding-left: 1px;
  }
  .FreePremiumSpeed_Value_Number.feature{
    color: var( --brand-green );
    font-size: 19px;
  }
  .FreePremiumSpeed_Value_Text.feature{
    color: var( --brand-green );
  }
  .FreePremiumSpeed_Arrow{
    width: calc( 45px * 0.35 );
    height: calc( 33px * 0.35 );
    background: url( '/images/buy_premium_sprite.svg#arrow_right' ) 0 0 no-repeat
  }

  .ServerCount{
    margin: 0 -2px;
    text-align: center;
  }
  .ServerCount > .E{
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    width: 50%;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
  }
  .ServerCount > .E.free{
    padding-right: 2px;
  }
  .ServerCount > .E.premium{
    padding-left: 2px;
    color: var( --brand-green );
  }

  .Servers_Icons{
    margin-right: -5px;
  }
  .Servers_Icons > .E{
    display: inline-block;
    vertical-align: top;
  }
  .Servers_Icons > .E ~ .E{
    padding-left: 8px;
  }
  .Servers_Icons_Title{
    padding-bottom: 5px;
    font-size: 11px;
    line-height: 1;
    font-weight: bold;
    color: #494b4d;
    text-transform: uppercase;
  }
  .Servers_Icons_Title.premium{
    color: var( --brand-green );
  }
  .Servers_Icon{
    height: calc( 119px * 0.43 );
    display: flex;
    align-items: flex-end;
  }
  .Servers_Icon::after{
    content: '';
    display: block;
    width: calc( 120px * 0.43 );
    height: 0;
    overflow: hidden;
  }
  .Servers_Icon.free::after{
    background: url( '/images/buy_premium_sprite.svg#free_user' ) 0 0 no-repeat;
    background-size: 100% 100%;
    padding-top: calc( 109px * 0.43 );
  }
  .Servers_Icon.premium::after{
    background: url( '/images/buy_premium_sprite.svg#premium_user' ) 0 0 no-repeat;
    background-size: 100% 100%;
    padding-top: calc( 116px * 0.43 );
  }

  .ExtraDescription{
    font-size: 11px;
    line-height: 1.3;
    padding-top: 6px;
    text-align: center;
  }

  .Buttons{
    position: absolute;
    left: 15px;
    bottom: 15px;
    right: 15px;
    display: flex;
    justify-content: space-between;
  }
  .Buttons > .E{
    flex-grow: 0;
  }

  .ButtonFree{
    display: inline-flex;
    align-items: center;
    height: calc(100% - 2px);
    border: 1px solid transparent;
    padding: 0 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 17px;
    font-weight: bold;
    color: #9b9b9b;
    border-color: #9b9b9b;
  }
  .ButtonFree > .In{}
  .ButtonPremium{
    display: inline-block;
    vertical-align: top;
    padding: 7px 21px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 17px;
    font-weight: bold;
    line-height: 1.1;
    color: #fff;
    background: var( --brand-green );
    text-align: center;
    text-decoration: none;
  }
  .ButtonPremium_Price{
    display: block;
    font-size: 13px;
    font-weight: normal;
    padding-top: 2px;
  }

  .Plans{
    padding: 0 5px 0;
  }
  .Plans > .In{
    margin: 0 0 0 -2px;
    display: flex;
  }
  .Plans > .In > .E{
    width: calc(100% / 3 - 2px);
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0 0 0 2px;
  }

  .Plan{
    background: #E5EBEF;
    padding: 15px 10px 15px;
  }
  .Plan.monthly{
    margin: 26px 0 0;
  }
  .Plan.annual{
    border: 1px solid var( --brand-green );
    padding: 0 10px 15px;
    border-radius: 3px;
  }
  .Plan.biennial{
    margin: 26px 0 0;
  }

  .Plan_Head{
    margin: 0 -10px;
    overflow: hidden;
    text-align: center;
    padding: 0 0 15px;
  }
  .Plan_Head > .In{
    padding: 0 2px 0;
    background: var( --brand-green );
    color: #fff;
    text-transform: uppercase;
    box-shadow: 0 -3px 4px 5px rgba(0,0,0,0.3);
    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
  }

  .Plan_Title{
    text-align: center;
    text-transform: uppercase;
    font-size: 17px;
    line-height: 1.3588;
    color: #494b4d;
  }
  .Plan.annual .Plan_Title{
    font-size: 21px;
    line-height: 1.1;
  }

  .Plan_Price{
    text-align: center;
    padding: 12px 0 12px;
    margin: 0 -10px;
    line-height: 34px;
  }
  .Plan_Price_Value{
    display: inline-block;
    vertical-align: middle;
    font-size: 17px;
    color: var( --brand-green );
  }
  .Plan_Price_Period{
    display: inline-block;
    vertical-align: middle;
    font-size: 11px;
    padding: 4px 0 0 1px;
    color: var( --brand-green );
  }

  .Plan_Percent{
    display: inline-block;
    vertical-align: middle;
    width: 34px;
    background: url( '/images/discount_other.svg#green' ) 50% 50% no-repeat;
    background-size: 100% 100%;
    color: #fff;
    font-size: 11px;
    margin-right: 4px;
  }
  .Plan_Percent::after{
    content: '%';
  }

  .Plan_Button{
    display: block;
    text-align: center;
    color: #fff;
    background: #1C304E;
    border-radius: 2px;
    font-size: 14px;
    line-height: 28px;
    margin-top: 2px;
    text-decoration: none;
  }
  .Plan.annual .Plan_Button{
    background: var( --brand-green );
    line-height: 32px;
  }

  .SecurePayment{
    display: flex;
    justify-content: center;
    padding: 12px 0 0;
  }
  .SecurePayment_Text{
    display: inline-block;
    vertical-align: middle;
    position: relative;
    font-size: 11px;
  }
  .SecurePayment_Text::after{
    content: '';
    display: block;
    background: url( '/images/account_locked_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: calc( 40px * 0.27 );
    height: calc( 53px * 0.27 );
    overflow: hidden;
    position: absolute;
    top: calc( 50% - 53px * 0.27 / 2 - 2px );
    left: calc( -40px * 0.27 - 5px );
  }

  .PaymentSystems{
    display: inline-block;
    vertical-align: middle;
    padding: 0 0 0 6px;
    margin: -2px 0 0;
  }
  .PaymentSystems > .E{
    display: inline-block;
    vertical-align: middle;
    height: 0;
    overflow:hidden;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
  }
  .PaymentSystems > .E ~ .E{
    margin-left: 7px;
  }
  .PaymentSystems > .E.paypal{
    width: calc(100px * 0.45);
    padding-top: calc(27px * 0.45);
    background-image: url( '/images/payment_systems.svg#paypal' );
  }
  .PaymentSystems > .E.visa{
    width: calc(62px * 0.45);
    padding-top: calc(20px * 0.45);
    background-image: url( '/images/payment_systems.svg#visa' );
  }
  .PaymentSystems > .E.mastercard{
    width: calc(50px * 0.45);
    padding-top: calc(30px * 0.45);
    background-image: url( '/images/payment_systems.svg#mastercard' );
  }
  .PaymentSystems > .E.americanExpress{
    width: calc(30px * 0.45);
    padding-top: calc(30px * 0.45);
    background-image: url( '/images/payment_systems.svg#american_express' );
  }

  .YouWontBeCharged{
    text-align: center;
    padding: 12px 7px 0;
    font-size: 14px;
  }

  .Back{
    position: absolute;
    left: 15px;
    bottom: 15px;
    padding: 0 0 0 20px;
    cursor: pointer;
    font-size: 17px;
  }
  .Back::after{
    content: '';
    display: block;
    background: url( '/images/arrow_left.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    top: calc(50% - 16px / 2);
    width: 9px;
    height: 16px;
    overflow: hidden;
  }
  </style>

  <div class="Overlay">&nbsp;</div>
  <div class="In"><div class="In">
    ${(()=>"main"===this.view?b.dy`
        <div class="Title">
          Get the most out of Browsec<br/>
          with Premium account
        </div>
        <div class="Columns">
          <div class="E">
            <div class="Icon speed"></div>
            <div class="ColumnTitle">TURBO SPEED</div>
            <div class="ColumnDescription">
              Premium Users Enjoy Dedicated
              Traffic Lanes
            </div>
            <div class="Separator"></div>
            <div class="FreePremiumSpeed"><table><tbody>
              <tr>
                <td><div class="FreePremiumSpeed_Title">Free:</div></td>
                <td></td>
                <td><div class="FreePremiumSpeed_Title feature">Premium:</div></td>
              </tr>
              <tr>
                <td><div class="FreePremiumSpeed_Value"><!--
                --><div class="FreePremiumSpeed_Value_Number">1</div><!--
                --><div class="FreePremiumSpeed_Value_Text">mbps</div><!--
              --></div></td>
                <td><div class="FreePremiumSpeed_Arrow"></div></td>
                <td><div class="FreePremiumSpeed_Value"><!--
                --><div class="FreePremiumSpeed_Value_Number feature">100</div><!--
                --><div class="FreePremiumSpeed_Value_Text feature">mbps</div><!--
              --></div></td>
              </tr>
            </tbody></table></div>
          </div>
          <div class="E">
            <div class="Icon locations"></div>
            <div class="ColumnTitle">PREMIUM LOCATIONS</div>
            <div class="ColumnDescription">
              Access the Internet via Additional
              Premium Locations
            </div>
            <div class="Separator"></div>
            <div class="ServerCount"><!--
            --><div class="E">4<br/>free locations</div><!--
            --><div class="E premium">42<br/>premium locations</div><!--
          --></div>
          </div>
          <div class="E">
            <div class="Icon servers"></div>
            <div class="ColumnTitle">PREMIUM SERVERS</div>
            <div class="ColumnDescription">
              Our Best-in-Class Servers Guarantee
              Top Perfomance
            </div>
            <div class="Separator"></div>
            <div class="Servers_Icons"><!--
            --><div class="E">
                <div class="Servers_Icons_Title">Free:</div>
                <div class="Servers_Icon free"></div>
              </div><!--
            --><div class="E">
                <div class="Servers_Icons_Title premium">Premium:</div>
                <div class="Servers_Icon premium"></div>
              </div><!--
          --></div>
          </div>
        </div>
        <div class="Buttons">
          <div class="E L">
            <div class="ButtonFree" @click="${this.freeClick}"><div class="In">
              Start with free
            </div></div>
          </div>
          <div class="E R">
            ${(()=>"continue"===this.mode?b.dy`
            <div class="ButtonPremium" @click="${this.premiumClick}">
              Continue
            </div>`:b.dy`
            <a 
              href="${n}" 
              target="_blank"
              class="ButtonPremium" 
              @click="${this.premiumClick}"
            >
              <span>Get Premium</span>
              ${(()=>"standard"===this.mode?"":b.dy`
              <span class="ButtonPremium_Price">for $2.99 a month</span>`)()}
            </a>`)()}
          </div>
        </div>

        <div class="Close" @click="${this.close}">X</div>`:b.dy`
      <div class="Title">Pick the right Premium plan for you</div>
      <div class="Plans"><div class="In">
        <div class="E">
          <div class="Plan monthly">
            <div class="Plan_Title">Monthly</div>
            <div class="Plan_Price"><!--
           --><span class="Plan_Price_Value">$6.99</span><!--
           --><span class="Plan_Price_Period">/mo</span><!--
         --></div>
            <a 
              href="${i}" 
              target="_blank" 
              class="Plan_Button"
              @click="${this.planClick}"
            >Choose Plan</a>
          </div>
        </div>
        <div class="E">
          <div class="Plan annual">
            <div class="Plan_Head"><div class="In">Most Popular</div></div>
            <div class="Plan_Title">Annual</div>
            <div class="Plan_Price"><!--
           --><span class="Plan_Percent">-52</span><!--
           --><span class="Plan_Price_Value">$3.33</span><!--
           --><span class="Plan_Price_Period">/mo</span><!--
         --></div>
            <a 
              href="${o}" 
              target="_blank" 
              class="Plan_Button"
              @click="${this.planClick}"
            >Choose Plan</a>
          </div>
        </div>
        <div class="E">
          <div class="Plan biennial">
            <div class="Plan_Title">2 Years</div>
            <div class="Plan_Price"><!--
           --><span class="Plan_Percent">-57</span><!--
           --><span class="Plan_Price_Value">$2.99</span><!--
           --><span class="Plan_Price_Period">/mo</span><!--
         --></div>
            <a 
              href="${n}" 
              target="_blank" 
              class="Plan_Button"
              @click="${this.planClick}"
            >Choose Plan</a>
          </div>
        </div>
      </div></div>
      <div class="SecurePayment">
        <div class="SecurePayment_Text">Secure payment using:</div>
        <div class="PaymentSystems"><!--
       --><div class="E paypal"></div><!--
       --><div class="E visa"></div><!--
       --><div class="E mastercard"></div><!--
       --><div class="E americanExpress"></div><!--
     --></div>
      </div>
      <div class="YouWontBeCharged">
        You won’t be charged at this point. 
        Selecting one of the above will get you on our site for checkout.
      </div>
      <div class="Back" @click="${this.back}">Back</div>`)()}
  </div></div>`}const Bt=s().experiments.premiumComparisonOnFirstPopup.id;class It extends b.oi{render(){return $t.call(this)}static get properties(){return{mode:{type:String},view:{type:String}}}constructor(){super(),this.mode="standard",this.view="main"}back(){this.view="main"}async close(){await q.Z.set("Experiment 262: shown",!0),this.remove()}async freeClick(){await q.Z.set("Experiment 262: shown",!0),this.remove()}async planClick(){const{experiments:e}=l.Z.getStateSync(),t=e[Bt];if(!t)return;const i=Y(Number(t));o.Z.full({category:"Exp262_Get_premium",action:i}),await q.Z.set("Experiment 262: shown",!0),self.close()}async premiumClick(){const{experiments:e}=l.Z.getStateSync(),t=e[Bt];if(!t)return;const i=Y(Number(t));"continue"===this.mode?(o.Z.full({category:"Exp262_Screen1_continue",action:i}),this.view="prices"):(o.Z.full({category:"Exp262_Get_premium",action:i}),await q.Z.set("Experiment 262: shown",!0),self.close())}}customElements.define("popup-buy-premium",It);const Lt=[{currency:"USD",value:71.99,duration:24}];let Zt=v({browsecPremium:"browsec_premium",cancelSubscriptionAtAnyTime:"cancel_subscription_at_any_time",forOnly:"for_only",moneyBackGuarantee:"7_days_money_back_guarantee",oneSmartSettingDescription1:"one_smart_setting_description_1",oneSmartSettingDescription2:"one_smart_setting_description_2",oneSmartSettingDescriptionList1:"one_smart_setting_description_list_1",oneSmartSettingDescriptionList2:"one_smart_setting_description_list_2",youCanHaveOnlyOneSmartSetting:"you_can_have_only_1_smart_setting"});function zt(){const e=(0,m.Z)("only_X_per_month").replace(/XXX/g,this.currency+this.price);return b.dy`
  <style>
  ${f}
  :host{
    display: block;
    position: absolute;
    z-index: 3;
    top:0px;right:0px;left:0px;
    height: 100%;
    background: #fff;
  }

  .Head{
    background: var( --brand-blue );
    color: #fff;
    text-align: center;
    font-size: 17px;
    line-height: 36px;
    font-weight: 500;
    position: relative;
    padding: 9px 10px 9px;
  }

  .Close{
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -16px;
    width: 10px;
    padding-top: 10px;
    border: 11px solid transparent;
    height: 0;
    overflow: hidden;
    background: url( '/images/popup_close_2.svg#grey' ) 0 0 no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .Close:hover{
    background-image: url( '/images/popup_close_2.svg#white' );
  }
  .Close::after{
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
    background: url( '/images/popup_close_2.svg#white' ) 0 -5000px no-repeat;
  }

  .Text{
    padding: 20px 25px;
    color: var( --brand-blue );
    line-height: 1.35;
  }
  .Title{
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 15px;
  }
  .Description{
    font-size: 16px;
  }
  .Description p{
    padding-bottom: 1em;
  }
  .Description ul{
    list-style: none;
  }
  .Description ul > li{
    position: relative;
    padding-left: 20px;
  }
  .Description ul > li::after{
    content: '';
    background: url( '/images/popup-help/check.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 12px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 9px;
    position: absolute;
    top: 50%;
    margin-top: -5px;
    left: 0;
  }

  .Button_Out{
    /* position: absolute;right:5px;bottom:5px;left:5px; */
    padding: 0 5px;
  }
  .Button{
    display: table;
    width: 100%;
    height: 60px;
    background: var( --brand-green );
    text-align: center;
    border-radius: 4px;
    position: relative;
  }
  .Button:link,
  .Button:visited,
  .Button:hover,
  .Button:active{
    color: #fff;
    text-decoration: none;
  }
  .Button *{
    cursor: pointer;
  }
  .Button > .In{
    display: table-cell;
    vertical-align: middle;
  }

  .Button_Name{
    display: block;
    font-size: 16px;
    font-weight: 600;
  }
  .Button_Name.uppercase{
    text-transform: uppercase;
  }

  .Button_Price{
    display: block;
    font-size: 14px;
  }
  .Button_Price_Value{
    font-size: 14px;
    font-weight: bold;
  }
  .Button_Price_OldValue{
    font-size: 12px;
    text-decoration: line-through;
    color: #9aca9f;
    margin-left: 3px;
  }

  .Button_Discount{
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 25px;
  }
  .Button_Discount > .In{
    width: 54px;
    height: 54px;
    background: url( '/images/discount.svg' ) 0 0 no-repeat;
    display: table;
    position: absolute;
    right: 0;
    top: calc(50% - 54px / 2);
  }
  .Button_Discount > .In > .In{
    display: table-cell;
    vertical-align: middle;
  }
  .Button_Discount_Minus{
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    font-weight: bold;
  }
  .Button_Discount_Value{
    display: inline-block;
    vertical-align: middle;
    font-size: 23px;
    font-weight: bold;
  }
  .Button_Discount_Percent{
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    font-weight: bold;
  }

  .ExtraText{
    color: #808080;
    font-size: 12px;
    text-align: center;
    padding-top: 7px;
  }
  </style>

  <div class="Head">
    ${Zt.browsecPremium}
    <div class="Close" @click="${this.close}"></div>
  </div>
  <div class="Text">
    <div class="Title">${Zt.youCanHaveOnlyOneSmartSetting}</div>
    <div class="Description">
      <p>${Zt.oneSmartSettingDescription1}</p>
      <p>${Zt.oneSmartSettingDescription2}</p>
      <ul>
        <li>${Zt.oneSmartSettingDescriptionList1}</li>
        <li>${Zt.oneSmartSettingDescriptionList2}</li>
      </ul>
    </div>
  </div>
  <div class="Button_Out">
    <a href="${this.premiumLink}" class="Button" @click="${this.linkClick}" target="_blank">
      <span class="In">
        <span class="Button_Name ${this.trialDays&&!this.withPrice?"uppercase":""}">
          ${this.buttonText}
        </span>
      ${(()=>!this.withPrice||this.trialDays?"":b.dy`
        <span class="Button_Price">
        ${(()=>this.discount?b.dy`
          ${Zt.forOnly}
          <span class="Button_Price_Value">${this.currency}${this.price}</span>
          <span class="Button_Price_OldValue">${this.currency}${this.oldPrice}</span>`:e)()}
        </span>`)()}
      </span>
      ${(()=>this.withPrice&&this.discount?b.dy`
      <span class="Button_Discount"><span class="In"><span class="In"><!--
     --><span class="Button_Discount_Minus">-</span><!--
     --><span class="Button_Discount_Value">${this.discount}</span><!--
     --><span class="Button_Discount_Percent">%</span><!--
   --></span></span></span>`:"")()}
    </a>
  </div>
  ${(()=>{if(!this.withPrice)return"";const e=this.trialDays?Zt.cancelSubscriptionAtAnyTime:Zt.moneyBackGuarantee;return b.dy`
    <div class="ExtraText">${e}</div>`})()}`}const Tt=new Map;for(const[e,{id:t,taskNumber:i}]of Object.entries(s().experiments))Tt.set(t,{name:e,taskNumber:i});class Dt extends((0,E.$)(l.Z)(b.oi)){render(){return zt.call(this)}static get properties(){return{buttonText:{type:String},currency:{type:String},discount:{type:Number},ignoredExperiments:{type:Array},oldPrice:{type:Number},premiumLink:{type:String},price:{type:Number},trialDays:{type:Number}}}constructor(){super(),this.ignoredExperiments=[],this.removeStorageListener=q.Z.onChange({for:["Experiment 262: ignore"],do:e=>{e["Experiment 262: ignore"]&&[].push(262)}}),this.withPrice=1===Math.floor(2*Math.random()),(async()=>{await q.Z.get("Experiment 262: ignore")&&(this.ignoredExperiments=[262])})(),(async()=>{this.daysAfterInstall=await(async()=>{const e=Date.now(),t=await q.Z.get("daysAfterInstall")||e;return Math.round((e-t)/864e5)})()})()}connectedCallback(){if(super.connectedCallback(),this.firstConnect)return;this.firstConnect=!0;let e=this.extraText;e&&(e=". "+e),o.Z.partial({category:"extension",action:"show_premium_div",label:"premium_div_"+this.buttonText+e}),fe.Z.track("premium_div",{feature:"smartsettings"}),(async()=>{const{experiments:e}=await l.Z.getStateAsync(),t=await(async()=>{const e=Date.now(),t=await q.Z.get("daysAfterInstall")||e;return Math.round((e-t)/864e5)})(),i=e[s().experiments.freeServersOverloaded.id];i&&o.Z.full({category:"premium_div_330show",action:Y(Number(i)),label:String(t)})})()}disconnectedCallback(){super.disconnectedCallback(),this.removeStorageListener()}stateChanged({prices:e,priceTrial:t}){const{currency:i,price:o,oldPrice:n,trialDays:s}=Ce({prices:e,priceTrial:t});this.currency=i,this.price=o,this.oldPrice=n,this.trialDays=s}get buttonText(){return this.withPrice?this.trialDays?(0,m.Z)("get_N_days_free_premium_trial").replace(/XXX/g,String(this.trialDays)):this.discount?(0,m.Z)("get_monthly_premium"):(0,m.Z)("upgrade_to_premium"):(0,m.Z)("get_premium_now")}get discount(){return this.oldPrice?Math.floor(100*(this.oldPrice-this.price)/this.oldPrice):0}get extraText(){return!this.withPrice||this.trialDays?"":this.discount?(0,m.Z)("for_only")+" "+this.currency+this.price:(0,m.Z)("only_X_per_month").replace(/XXX/g,this.currency+this.price)}get premiumLink(){var e;let t=this.extraText;t&&(t=". "+t);const i=l.Z.getStateSync(),{experiments:o}=i,n=Date.now(),s=i.promotions.find((({from:e,till:t,tariffs:i})=>e<=n&&n<=t&&i)),r=null!==(e=null==s?void 0:s.id)&&void 0!==e?e:"default_campaign",a=(()=>{if(!s)return Lt;const{tariffs:e}=s;if(!e)throw new Error('No "tariffs" property in tariff');return e.map((({price:{currency:e,value:t},duration:i})=>({currency:e,duration:i,value:t})))})(),c={feature:"smartsettings",plan_id:(()=>{const e=a.map((({duration:e,value:t})=>({duration:e,pricePerMonth:t/e}))).sort((({pricePerMonth:e},{pricePerMonth:t})=>e-t)),{duration:t}=e[0];switch(t){case 1:return"monthly";case 12:return"annual";case 24:return"biennial";default:throw new Error("Incorrect duration")}})(),utm_source:"chromium extension",utm_medium:"premium_div",utm_campaign:r,utm_term:this.buttonText+t},d=[];for(const[e,t]of Object.entries(o)){if(!Tt.has(e))continue;const{taskNumber:i}=Tt.get(e);this.ignoredExperiments.includes(i)||d.push(`exp${i}_${t}`)}return d.length&&(c.expvarid=d.join(",")),M({action:e=>Object.assign(e,c),storeState:i,url:(null==s?void 0:s.clickUrl)||V.Z.premium})}async close(){const e=this.animate([{top:0},{top:"-100%"}],{duration:800,easing:"linear"});await new Promise((t=>{e.onfinish=t})),this.remove()}async linkClick(){var e,t;(0,_.Z)({type:"popup-premium-onerule button click",promotionId:(()=>{const e=ue.get();if("custom"===(null==e?void 0:e.type))return e.promotionId})()});const{experiments:i,user:n}=l.Z.getStateSync(),r=i[s().experiments.freeServersOverloaded.id];r&&!n.premium&&this.daysAfterInstall&&o.Z.full({category:"premium_div_295click",action:Y(Number(r)),label:String(this.daysAfterInstall)}),await new Promise((e=>{setTimeout(e,50)})),null===(e=self)||void 0===e||null===(t=e.close)||void 0===t||t.call(e)}}customElements.define("popup-premium-onerule",Dt);const Ot=v({accessInternet:"access_internet_via_premium_locations",browsecPremium:"browsec_premium",cancelSubscriptionAtAnyTime:"cancel_subscription_at_any_time",dedicatedLanes:"dedicated_traffic_lanes",forOnly:"for_only",moneyBackGuarantee:"7_days_money_back_guarantee",premiumLocations:"premium_locations",premiumServers:"premium_servers",performanceGuaranteed:"top_performance_guaranteed",turboSpeed:"turbo_speed"});function At(){const e=(0,m.Z)("only_X_per_month").replace(/XXX/g,this.currency+this.price);return b.dy`
  <style>
  ${f}
  :host{
    display: block;
    position: absolute;
    z-index: 3;
    top:0px;
    right:0px;
    left:0px;
    height: 100%;
    background: #fff;
  }

  .Head{
    background: var( --brand-blue );
    color: #fff;
    text-align: center;
    font-size: 17px;
    line-height: 36px;
    font-weight: 500;
    position: relative;
    padding: 9px 10px 9px;
    height: auto;
    overflow: visible;
  }

  .Close{
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -16px;
    width: 10px;
    padding-top: 10px;
    border: 11px solid transparent;
    height: 0;
    overflow: hidden;
    background: url( '/images/popup_close_2.svg#grey' ) 0 0 no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .Close:hover{
    background-image: url( '/images/popup_close_2.svg#white' );
  }
  .Close::after{
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
    background: url( '/images/popup_close_2.svg#white' ) 0 -5000px no-repeat;
  }

  .Features{
    padding: 10px 35px 15px 10px;
    color: #7a7c7f;
  }
  .Features > .E{
    min-height: 95px;
    box-sizing: border-box;
    padding: 2px 0 0px 90px;
    position: relative;
  }
  :host(.withPrice) .Features > .E{
    min-height: 82px;
  }
  .Features > .E::before{
    content: "";
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    width: 67px;
    padding-top:67px;
    position: absolute;
    left: 4px;
    top: 8px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .Features > .E.countries::before{
    background-image: url( '/images/promos/circles.svg#countries' );
  }
  .Features > .E.speed::before{
    background-image: url( '/images/promos/circles.svg#speed' );
  }
  .Features > .E.servers::before{
    background-image: url( '/images/promos/circles.svg#servers' );
  }

  .Feature_Name{
    color: #28334e;
    font-size: 17px;
    margin: 9px 0 2px;
    line-height: 1.29;
  }
  .Feature_Text{
    font-size: 15px;
    line-height: 1.25;
  }

  .Button_Out{
    padding: 0 5px;
  }
  .Button{
    display: table;
    width: 100%;
    height: 45px;
    background: var( --brand-green );
    text-align: center;
    border-radius: 4px;
    position: relative;
  }
  :host(.withPrice) .Button{
    height: 60px;
  }
  .Button:link,
  .Button:visited,
  .Button:hover,
  .Button:active{
    color: #fff;
    text-decoration: none;
  }
  .Button *{
    cursor: pointer;
  }
  .Button > .In{
    display: table-cell;
    vertical-align: middle;
  }

  .Button_Name{
    display: block;
    font-size: 17px;
  }
  .Button_Name.uppercase{
    text-transform: uppercase;
  }
  :host(.withPrice) .Button_Name{
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
  }
  .Button_Price{
    display: block;
    font-size: 14px;
  }
  .Button_Price_Value{
    font-size: 14px;
    font-weight: bold;
  }
  .Button_Price_OldValue{
    font-size: 12px;
    text-decoration: line-through;
    color: #9aca9f;
    margin-left: 3px;
  }

  .Button_Discount{
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 25px;
  }
  .Button_Discount > .In{
    width: 54px;
    height: 54px;
    background: url( '/images/discount.svg' ) 0 0 no-repeat;
    display: table;
    position: absolute;
    right: 0;
    top: calc(50% - 54px / 2);
  }
  .Button_Discount > .In > .In{
    display: table-cell;
    vertical-align: middle;
  }
  .Button_Discount_Minus{
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    font-weight: bold;
  }
  .Button_Discount_Value{
    display: inline-block;
    vertical-align: middle;
    font-size: 23px;
    font-weight: bold;
  }
  .Button_Discount_Percent{
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    font-weight: bold;
  }

  .ExtraText{
    color: #808080;
    font-size: 12px;
    text-align: center;
    padding-top: 7px;
  }
  </style>

  <div class="Head">
    Browsec Premium
    <div class="Close" @click="${this.close}"></div>
  </div>
  <div class="Features">
    <div class="E countries">
      <div class="Feature_Name">${Ot.premiumLocations}</div>
      <div class="Feature_Text">${Ot.accessInternet}</div>
    </div>
    <div class="E speed">
      <div class="Feature_Name">${Ot.turboSpeed}</div>
      <div class="Feature_Text">${Ot.dedicatedLanes}</div>
    </div>
    <div class="E servers">
      <div class="Feature_Name">${Ot.premiumServers}</div>
      <div class="Feature_Text">${Ot.performanceGuaranteed}</div>
    </div>
  </div>
  <div class="Button_Out">
    <a href="${this.premiumLink}" class="Button" @click="${this.linkClick}" target="_blank">
      <span class="In">
        <span class="Button_Name ${this.trialDays&&!this.withPrice?"uppercase":""}">
          ${this.buttonText}
        </span>
  ${(()=>!this.withPrice||this.trialDays?"":b.dy`
        <span class="Button_Price">
        ${(()=>this.discount?b.dy`
          ${Ot.forOnly}
          <span class="Button_Price_Value">${this.currency}${this.price}</span>
          <span class="Button_Price_OldValue">${this.currency}${this.oldPrice}</span>`:e)()}
        </span>`)()}
      </span>
  ${(()=>this.withPrice&&this.discount?b.dy`
      <span class="Button_Discount"><span class="In"><span class="In"><!--
     --><span class="Button_Discount_Minus">-</span><!--
     --><span class="Button_Discount_Value">${this.discount}</span><!--
     --><span class="Button_Discount_Percent">%</span><!--
   --></span></span></span>`:"")()}
    </a>
  </div>
  ${(()=>{if(!this.withPrice)return"";let e=this.trialDays?Ot.cancelSubscriptionAtAnyTime:Ot.moneyBackGuarantee;return b.dy`
  <div class="ExtraText">${e}</div>`})()}`}const Ft=new Map;for(const[e,{id:t,taskNumber:i}]of Object.entries(s().experiments))Ft.set(t,{name:e,taskNumber:i});class Nt extends((0,E.$)(l.Z)(b.oi)){render(){return At.call(this)}static get properties(){return{buttonText:{type:String},country:{type:String},currency:{type:String},discount:{type:Number},extraText:{type:String},gaCid:{type:String},ignoredExperiments:{type:Array},oldPrice:{type:Number},premiumLink:{type:String},price:{type:Number},trialDays:{type:Number},withPrice:{type:Boolean}}}constructor(){super(),this.country="",this.ignoredExperiments=[],this.gaCid=(()=>{if("undefined"!=typeof browser||!document.cookie)return"";let e=document.cookie.split("; ").find((e=>e.startsWith("_ga")));return e?e.slice(10):void 0})(),this.removeStorageListener=q.Z.onChange({for:["Experiment 262: ignore"],do:e=>{e["Experiment 262: ignore"]&&[].push(262)}}),this.withPrice=1===Math.floor(2*Math.random()),(async()=>{await q.Z.get("Experiment 262: ignore")&&(this.ignoredExperiments=[262])})(),(async()=>{this.daysAfterInstall=await(async()=>{const e=Date.now(),t=await q.Z.get("daysAfterInstall")||e;return Math.round((e-t)/864e5)})()})()}connectedCallback(){if(super.connectedCallback(),this.firstConnect)return;this.firstConnect=!0;let e=this.extraText;e&&(e=". "+e),o.Z.partial({action:"show_premium_div",category:"extension",label:"premium_div_"+this.buttonText+e}),fe.Z.track("premium_div",{feature:"timezone change"===this.initiator?"browser_tz":"countries"}),(async()=>{const{experiments:e}=await l.Z.getStateAsync(),t=await(async()=>{const e=Date.now(),t=await q.Z.get("daysAfterInstall")||e;return Math.round((e-t)/864e5)})(),i=e[s().experiments.freeServersOverloaded.id];i&&o.Z.full({category:"premium_div_330show",action:Y(Number(i)),label:String(t)})})()}disconnectedCallback(){super.disconnectedCallback(),this.removeStorageListener()}updated(e){if(e.has("withPrice")){let e=this.classList;this.withPrice?e.add("withPrice"):e.remove("withPrice")}}stateChanged({prices:e,priceTrial:t}){const{currency:i,price:o,oldPrice:n,trialDays:s}=Ce({prices:e,priceTrial:t});this.currency=i,this.price=o,this.oldPrice=n,this.trialDays=s}get buttonText(){if(this.withPrice){if(this.trialDays)return(0,m.Z)("get_N_days_free_premium_trial").replace(/XXX/g,String(this.trialDays));if(this.discount)return(0,m.Z)("get_monthly_premium")}return(0,m.Z)("get_premium_now")}get discount(){return this.oldPrice?Math.floor(100*(this.oldPrice-this.price)/this.oldPrice):0}get extraText(){return!this.withPrice||this.trialDays?"":this.discount?(0,m.Z)("for_only")+" "+this.currency+this.price:(0,m.Z)("only_X_per_month").replace(/XXX/g,this.currency+this.price)}get premiumLink(){var e;let t=this.extraText;t&&(t=". "+t);const i=l.Z.getStateSync(),o=Date.now(),n=i.promotions.find((({from:e,till:t,tariffs:i})=>e<=o&&o<=t&&i)),s=null!==(e=null==n?void 0:n.id)&&void 0!==e?e:"default_campaign",r=(()=>{if(!n)return Lt;const{tariffs:e}=n;if(!e)throw new Error('No "tariffs" property in tariff');return e.map((({price:{currency:e,value:t},duration:i})=>({currency:e,duration:i,value:t})))})(),a={plan_id:(()=>{const e=r.map((({duration:e,value:t})=>({duration:e,pricePerMonth:t/e}))).sort((({pricePerMonth:e},{pricePerMonth:t})=>e-t)),{duration:t}=e[0];switch(t){case 1:return"monthly";case 12:return"annual";case 24:return"biennial";default:throw new Error("Incorrect duration")}})(),utm_source:"chromium extension",utm_medium:"premium_div",utm_campaign:s,utm_term:this.buttonText+t};this.initiator&&(a.feature=(()=>{switch(this.initiator){case"premium locations":return"countries";case"smart settings":return"smartsettings";case"timezone change":return"browser_tz"}})());const c=[],{experiments:d}=i;for(const[e,t]of Object.entries(d)){if(!Ft.has(e))continue;const{taskNumber:i}=Ft.get(e);this.ignoredExperiments.includes(i)||c.push(`exp${i}_${t}`)}return c.length&&(a.expvarid=c.join(",")),M({action:e=>Object.assign(e,a),url:(null==n?void 0:n.clickUrl)||V.Z.premium,storeState:l.Z.getStateSync()})}async close(){const e=this.animate([{top:0},{top:"-100%"}],{duration:800,easing:"linear"});await new Promise((t=>{e.onfinish=t})),this.remove()}async linkClick(){var e,t;(0,_.Z)({type:"popup-premium button click",promotionId:(()=>{const e=ue.get();if("custom"===(null==e?void 0:e.type))return e.promotionId})()}),await new Promise((e=>{setTimeout(e,50)})),null===(e=self)||void 0===e||null===(t=e.close)||void 0===t||t.call(e)}}customElements.define("popup-premium",Nt);let Rt=v({cantStartBecauseYourProxySettingsBlocked:"cant_start_because_your_proxy_settings_blocked",fixIt:"fix_it"});class Mt extends b.oi{render(){return b.dy`
    <style>
    ${f}
    :host{
      display: block;
      font-size: 14px;
      line-height: 1.3;
      color: var( --brand-blue );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    :host > .Overlay{
      position: absolute;
      top:0px;right:0px;bottom:0px;left:0px;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
      background: rgba(255, 255, 255, 0.5);
    }
    :host > .In{
      position: absolute;
      top:56px;
      right:0px;
      bottom:40px;
      left:0px;
      border: 1px solid transparent;
      border-width: 6px 5px 5px;
    }
    :host > .In > .Bg{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #fff;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      font-size: 0;
      overflow: hidden;
    }

    :host > .In > .In{
      position: relative;
      display: table;
      width: 100%;
      height: 100%;
    }
    :host > .In > .In > .In{
      display: table-cell;
      vertical-align: middle;
    }

    .Description{
      color: var( --brand-blue );
      font-size: 16px;
      line-height: 1.375;
      padding: 0 25px;
      text-align: center;
    }
    .Button{
      text-align: center;
      padding-top: 25px;
    }
    .Button input{
      display:inline-block;
      vertical-align:top;
      box-sizing: content-box;
      height: 45px;
      line-height: 45px;
      border: 0;
      cursor: pointer;
      min-width: 200px;
      padding: 0 15px;
      background: #3b9946;
      text-align: center;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
    }
    </style>

    <div class="Overlay">&nbsp;</div>
    <div class="In">
      <div class="Bg"></div>
      <div class="In"><div class="In">
        <div class="Description">
          ${Rt.cantStartBecauseYourProxySettingsBlocked}
        </div>
        <div class="Button"><!--
       --><input type="button" value="${Rt.fixIt}" @click="${this.fixIt}"/><!--
     --></div>
      </div></div>
    </div>
    `}async fixIt(){await(0,_.Z)({type:"create tab",options:"/pages/unblock_proxy/unblock_proxy.html"}),self.close()}}customElements.define("popup-proxy-blocked",Mt);class Vt extends b.oi{render(){return b.dy`
    <style>
    ${f}
    :host{
      display: block;
      position: absolute;
    }
    :host > .Bg{
      position: absolute;
      top:0px;
      right:0px;
      bottom:0px;
      left:0px;
      background: #faf5f5;
      border-radius: 4px;
      border: 1px solid #8e3c33;
      font-size: 0;
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
    }
    :host > .Bg::before,
    :host > .Bg::after{
      content: '';
      display: block;
      position: absolute;
      left: 16px;
      width: 0;
      height: 0;
      overflow: hidden;
      border: 5px solid transparent;
    }
    :host > .Bg:before{
      top: -10px;
      border-bottom-color: #8e3c33;
    }
    :host > .Bg:after{
      top: -9px;
      border-bottom-color: #faf5f5;
    }
    :host > .In{
      position: relative;
      color: var( --brand-burgundy );
      font-size: 12px;
      padding: 4px 11px;
      line-height: 19px;
      min-height: 19px; /* NOTE border in .Bg */
      min-width: 12px;
    }
    </style>

    <div class="Bg"></div>
    <div class="In">${this.text}</div>`}static get properties(){return{text:{type:String}}}constructor(){super(),this.text=""}}customElements.define("tooltip-error",Vt);const jt=async e=>{const t=e.animate([{opacity:1},{opacity:0}],{duration:300,easing:"linear"});await new Promise((e=>{t.onfinish=e})),e.remove()},Ut=({setValue:e,setEndValue:t})=>new Promise((i=>{const o=performance.now(),n=s=>{if(s-o>=300)return t(),void i();e(`filter: blur(${3*(1-(s-o)/300)}px);`),requestAnimationFrame(n)};requestAnimationFrame(n)})),Ht=({button:e,parent:t,variant:i})=>new Promise((i=>{const o=self.innerWidth,n=self.innerHeight,s=e.getBoundingClientRect(),r=e.offsetHeight,a=e.offsetWidth,l=e.offsetHeight+46,c=(({block:e,ellipse:t})=>{const i=t.width/2,o=t.height/2,n="data:image/svg+xml;base64,"+btoa(`<svg viewBox="0 0 ${e.width} ${e.height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <mask id="clip">\n          <rect id="bg" x="0" y="0" width="100%" height="100%" fill="#fff"/>\n          <ellipse cx="${t.centerX}" cy="${t.centerY}" rx="${i}" ry="${o}" fill="#000" />\n        </mask>\n\n        <rect x="0" y="0" width="100%" height="100%" mask="url(#clip)" fill="#000"/>\n      </svg>\n      `.replace(/(\n|\r)/g,"").trim());return`-webkit-mask: url('${n}') 0 0 no-repeat;mask: url('${n}') 0 0 no-repeat;`})({block:{width:o,height:n},ellipse:{centerX:o/2,centerY:s.y+e.offsetHeight/2,height:l,width:e.offsetWidth+40}}),d=document.createElement("div");d.textContent=e.textContent;const p=getComputedStyle(e);d.style.cssText=`background-color: ${p.getPropertyValue("background-color")};border-radius: ${p.getPropertyValue("border-radius")};color: ${p.getPropertyValue("color")};font-family: ${p.getPropertyValue("font-family")};font-size: ${p.getPropertyValue("font-size")};height: ${r}px;line-height: ${p.getPropertyValue("line-height")};width: ${a}px;text-align: center;position: absolute;top: ${s.y}px;left: ${(o-a)/2}px;cursor: pointer;`;const u=document.createElement("first-start-tips-button");u.style.cssText=c,u.bottom=n-s.y+(l-r)/2+6,d.addEventListener("click",(async()=>{fe.Z.track("onboarding1_vpnon"),q.Z.set("startup tips shown",!0),e.click(),t.style.cssText="",u.remove(),d.remove(),i(!1)})),u.addEventListener("close",(async()=>{fe.Z.track("onboarding1_close"),await Promise.all([jt(u),Ut({setValue:e=>{t.style.cssText=e+c},setEndValue:()=>{t.style.cssText=""}})]),d.remove(),i(!1)})),t.style.cssText="filter: blur(3px);"+c,document.body.append(u),document.body.append(d)}));var Wt=i(3355);const qt={},Xt=class{constructor(e,t="log"){this._name=e,this._startPoint=performance.now(),this._type=t;const i=qt[e]||0;this._id=i,qt[e]=i+1}end(){const e=Math.round(performance.now()-this._startPoint),t=`Local delay. ${this._name} #${this._id}: ${e} milliseconds`;switch(this._type){case"log":(0,Me.Z)(t);break;case"warn":Me.Z.warn(t);break;case"error":Me.Z.error(t)}return e}};var Gt=i(7663),Yt=i(5560);fe.Z.track("popup_open");{const e=String(Math.floor(1e9*Math.random()));it().runtime.connect({name:"popup connection "+e}).onMessage.addListener((e=>{"close"===e&&window.close()}))}(async()=>{const e=new Xt("Popup: page load"),t={domainZoneList:new Wt.Z,storeState:l.Z.ready};{const e=new Xt("Popup: domainZoneList");t.domainZoneList.then((()=>{e.end()}))}{const e=new Xt("Popup: store.ready");t.storeState.then((()=>{e.end()}))}let i;(async()=>{const e=await it().storage.local.get(null);i=e,Array.isArray(e.domainZoneList)&&t.domainZoneList.resolve(e.domainZoneList),l.Z.initiate({type:"storage",value:e})})(),(async()=>{const e=await(0,_.Z)({type:"domain zone list"});t.domainZoneList.resolve(e)})(),(async()=>{const e=await(0,_.Z)({type:"store: get state"});l.Z.initiate({type:"store state",value:e})})();const n=await t.domainZoneList,r=await t.storeState;Object.assign(self,{domainZoneList:n});const a=new Xt("Popup: firstPopupOpen"),c=i?i.firstPopupOpen:await q.Z.get("firstPopupOpen");a.end();const d=new Xt("Popup: get control state"),p=await(async()=>{if("undefined"!=typeof browser||!r.proxyIsBroken)return!0;return!!await Yt.Z.isControlled()&&(await Gt.Z.shuffle(),await Yt.Z.setFromStore(),!0)})();if(d.end(),(0,_.Z)({type:"popup open"}),"index:home"!==l.Z.getStateSync().page&&l.Z.dispatch({type:"Page: set",page:"index:home"}),"installed"===c){o.Z.partial({category:"extension",action:"first_popup_open"});const e=i?i.installVersion:await q.Z.get("installVersion");if("string"==typeof e&&((e,t,i)=>{const o=(()=>{if(e===i)return 0;let t=e.split(".").map((e=>Number(e))),o=i.split(".").map((e=>Number(e))),n=Math.min(t.length,o.length);for(let e=0;e<n;e++){if(t[e]>o[e])return 1;if(t[e]<o[e])return-1}return t.length>o.length?1:t.length<o.length?-1:0})();switch(t){case"<":return o<0;case">":return o>0;case"<=":return o<=0;case">=":return o>=0;case"===":return 0===o}})(e,">=","3.28.6")){o.Z.full({category:"onboarding",action:"first_popup_open",label:it().runtime.getManifest().version}),fe.Z.track("first_popup_open");const{experiments:e}=r;(async()=>{0===await q.Z.get("First start tips: phase")&&q.Z.set("First start tips: phase",1)})();{const t=e[s().experiments.premiumComparisonOnFirstPopup.id],i=await q.Z.get("Experiment 262: ignore");t&&!i&&o.Z.full({category:"Exp262_first_popup_open",action:Y(Number(t)),label:it().runtime.getManifest().version})}}q.Z.set("firstPopupOpen","fulfilled")}(async()=>{(i?i.emptyReserveDomains:await q.Z.get("emptyReserveDomains"))&&q.Z.set("emptyReserveDomains",!1)})(),(()=>{const t=document.querySelector("div.MainContainer");if(!t)return;const i=new Xt("Popup: append elements"),n=["main-head","page-switch"];p||n.push("popup-proxy-blocked"),n.forEach((e=>{t.append(document.createElement(e))})),(async()=>{if(!p)return;const e="number"==typeof await q.Z.get("First start tips: phase");!await q.Z.get("startup tips shown")&&e&&"installed"===c&&(async e=>{fe.Z.track("onboarding1_show");const t=document.querySelector("div.MainContainer");let i;try{const e=document.querySelector("page-switch");await e.updateComplete;const t=e.shadowRoot.querySelector("main-index");await t.updateComplete,i=t.shadowRoot.querySelector("index-home"),await i.updateComplete}catch(e){return}const o=(()=>{try{return i.shadowRoot.querySelector(".Inactive_Button")}catch(e){return null}})();t&&o&&await Ht({button:o,parent:t,variant:e})})("1")})(),i.end(),e.end(),(async()=>{const{experiments:e,userPac:i}=r,n=e[s().experiments.premiumOverlayOnPopupOpen.id];if(!n)return;const a=n?Y(Number(n)):void 0,{"Experiment 252: checkbox checked":l,"Experiment 252: ignore":c}=await it().storage.local.get(["Experiment 252: ignore","Experiment 252: checkbox checked"]);if(c)return;if("direct"!==i.mode)return;let d=await q.Z.get("Experiment 252: show count")||0;if(d++,q.Z.set("Experiment 252: show count",d),o.Z.full({category:"Exp252_Popup_open",action:a}),l)return;if(d<2)return;if("0"===n)return;o.Z.full({category:"Exp252_Openoffer_show",action:a,label:String(d-1)});const p=document.createElement("onstart-premium-overlay");p.view=n,p.showCount=d,t.append(p)})(),(async()=>{const e=s().experiments.premiumComparisonOnFirstPopup.id,{experiments:i}=r,n=i[e];if(!n||"0"===n)return;if(await q.Z.get("Experiment 262: ignore"))return;if(await q.Z.get("Experiment 262: shown"))return;const a=Y(Number(n));o.Z.full({category:"Exp262_Screen1_show",action:a});const l=document.createElement("popup-buy-premium");l.mode=(()=>{switch(n){case"1":return"standard";case"2":return"with price";case"3":return"continue"}})(),t.append(l)})(),(async()=>{const{experiments:e,user:t}=r,i=e[s().experiments.freeServersOverloaded.id];if(!i)return;if("1"!==i||t.premium)return;const o=await q.Z.get("freeServersOverloaded");if(l.Z.onChange((({page:e})=>e),(async(e,t,{user:i})=>{if("login"===e){const e=document.querySelector("free-servers-overloaded");e&&e.remove()}if("index:home"===e&&"login"===t){if(i.premium)return;const e=await q.Z.get("freeServersOverloaded");if("number"==typeof e){const t=Date.now();if(t<e){const i=e-t;await G(i)}}}})),"number"==typeof o){const e=Date.now();if(e<o){const t=o-e;await G(t),await h.enable()}}})()})()})(),self.onerror=(e,t,i)=>((0,_.Z)({type:"popup error",data:{message:e,fileName:t,lineNumber:i}}),!1),ue.addListener((e=>{(async e=>{"custom"===(null==e?void 0:e.type)&&(await new Promise((e=>{setTimeout(e,2e3)})),(0,_.Z)({type:"personal banner view",id:e.promotionId}))})(e)}))}},i={};function o(e){var n=i[e];if(void 0!==n)return n.exports;var s=i[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,i,n,s)=>{if(!i){var r=1/0;for(d=0;d<e.length;d++){for(var[i,n,s]=e[d],a=!0,l=0;l<i.length;l++)(!1&s||r>=s)&&Object.keys(o.O).every((e=>o.O[e](i[l])))?i.splice(l--,1):(a=!1,s<r&&(r=s));if(a){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,n,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j=42,(()=>{var e={42:0};o.O.j=t=>0===e[t];var t=(t,i)=>{var n,s,[r,a,l]=i,c=0;if(r.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(l)var d=l(o)}for(t&&t(i);c<r.length;c++)s=r[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},i=self.webpackChunkbrowsec_extension=self.webpackChunkbrowsec_extension||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var n=o.O(void 0,[592],(()=>o(8686)));n=o.O(n)})();