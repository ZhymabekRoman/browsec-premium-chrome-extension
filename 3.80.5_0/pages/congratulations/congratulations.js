(()=>{"use strict";var e,o={6499:(e,o,t)=>{var n=t(5693),i=t(7584);const a=Object.fromEntries(Object.entries({browsecHasBeenInstalled:"browsec_has_been_installed",clickAndThen1:"click_and_then_1",clickAndThen2:"click_and_then_2",pinTheBrowsecExtension:"pin_the_browsec_extension",youMayNowOpenTheExtension:"you_may_now_open_the_extension"}).map((([e,o])=>[e,(0,n.Z)(o)])));function r(){return i.dy`
  <style>
  :host{
    display: block;
  }
  :host > .In{
    padding: 27px 0 0;
    position: relative;
  }

  .Plate{
    background: #262829;
    width: 610px;
    padding: 25px 35px 15px;
    margin: 0 auto;
  }

  .BrowsecInstalled{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .BrowsecInstalled::before{
    content: '';
    display:block;
    width:85px;
    padding-top: 86px;
    height:0;
    background: url( '/images/checked_2.svg' );
    margin: 0 auto 20px;
  }

  .Decription{
    padding: 40px 0 0;
    text-align: center;
  }

  .Image{
    margin: 0 -16px;
    padding: 40px 0 0;
  }

  .Pointer{
    position: absolute;
    top: 0;
    right: 132px;
    width: 190px;
    font-size: 18px;
  }
  .Pointer.withScroll{
    right: 115px;
  }
  .Pointer::before{
    content: '';
    display: block;
    background: rgba(28, 30, 31, 0.6);
    position: absolute;
    top: 0;
    right: -25px;
    left: -25px;
    bottom: -10px;
  }
  .Pointer > .In{
    position: relative;
    padding: 110px 0 0;
  }
  .Pointer_Arrow{
    position: absolute;
    height: 65px;
    top: 30px;
    right: 0;
    left: 0;
    border: 1px solid #fff;
    border-width: 0 1px 1px 0;
    border-radius: 0 0 8px 0;
  }
  .Pointer_Arrow::before,
  .Pointer_Arrow::after{
    content: '';
    display: block;
    height: 17px;
    width: 1px;
    background: #fff;
    position: absolute;
    top:0;
    right:-1px;
  }
  .Pointer_Arrow::before{
    transform-origin: top left;
    transform: rotate(-45deg);
  }
  .Pointer_Arrow::after{
    transform-origin: top right;
    transform: rotate(45deg);
  }
  .Pointer_Title{
    text-align: center;
  }
  .Pointer_Text{
    text-align: center;
    padding: 17px 0 0;
    margin: 0 -20px;
  }

  .Pointer_Icon{
    display: inline-block;
    vertical-align: bottom;
    margin: 0 2px;
  }
  .Pointer_Icon.extensions{
    background: url( '/images/congratulations/extensions_icon_3.svg' );
    width: 25px;
    height: 27px;
  }
  .Pointer_Icon.pin{
    background: url( '/images/congratulations/pin.svg' );
    width: 19px;
    height: 31px;
  }
  </style>

  <div class="In">
    <div class="Plate">
      <div class="BrowsecInstalled">${a.browsecHasBeenInstalled}</div>
      <div class="Decription">${a.youMayNowOpenTheExtension}</div>
      <div class="Image">
        <use-animation></use-animation>
      </div>
    </div>

    <div class="Pointer ${this.withScroll?"withScroll":""}"><div class="In">
      <div class="Pointer_Arrow"></div>
      <div class="Pointer_Title">${a.pinTheBrowsecExtension}</div>
      <div class="Pointer_Text">
        ${a.clickAndThen1}
        <div class="Pointer_Icon extensions"></div>
        ${a.clickAndThen2}
        <div class="Pointer_Icon pin"></div>
      </div>
    </div></div>
  </div>`}var c=t(7350),s=t(7679);const u=class{constructor(e){if(!e)throw new Error("AnimationElement argument is not Element");this.element=e}set value(e){e!==this._oldValue&&(this._oldValue=e,this.element.style.cssText=e)}},l=[1e3,400,1250,200,300,1250,200,400,1250,200,400,750,200,400,1250,200,400,1250],p=l.reduce(((e,o)=>e+o),0),d=l.map((e=>e/p)),g=d.map(((e,o)=>d.slice(0,o+1).reduce(((e,o)=>e+o),0))),m=[1250,200,400,1250,200,400,750,200,400,1250,200,400,1250],_=m.reduce(((e,o)=>e+o),0),v=m.map((e=>e/_)),w=v.map(((e,o)=>v.slice(0,o+1).reduce(((e,o)=>e+o),0))),{userAgent:h}=navigator,y="undefined"==typeof browser&&h.includes("Chrome")&&["Edg","Edge"].every((e=>!h.includes(e)));let b;if(y)try{b=Number(h.match(/Chrome\/\d+/)[0].split("/")[1])}catch(e){}const A=Boolean(y&&b&&b>=84);function f(){const e=window.language;return i.dy`
  <style>
  .Animation{
    width: 642px;
    height: 542px;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    transition: filter 0.4s;
  }
  
  .Animation_Bg{
    background: url( '/images/congratulations/${A?"chrome":"others"}/background.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: 100%;
    height: 100%;
  }
  .Animation_Search{
    opacity: 0;
    background: url( '/images/congratulations/panel_with_browsec.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 610 / 642 );
    height: calc( 100% * 35 / 542 );
    position: absolute;
    left: calc( 100% * 16 / 642 );
    top: calc( 100% * 8 / 542 );
    border-radius: 0 8px 0 0;
  }
  .Animation_Cursor{
    background: url( '/images/congratulations/cursor.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 55 / 642 );
    height: calc( 100% * 59 / 542 );
    position: absolute;
    top: -5000px;
    left: -5000px;
  }
  .Animation_ExtensionsIcon{
    background: url( '/images/congratulations/extensions_icon.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 27 / 642 );
    height: calc( 100% * 27 / 542 );
    position: absolute;
    top: -5000px;
    left: -5000px;
  }
  .Animation_BrowsecIcon,
  .Animation_BrowsecIconUk,
  .Animation_BrowsecIconUs{
    opacity: 0;
    width: calc( 100% * 27 / 642 );
    height: calc( 100% * 27 / 542 );
    position: absolute;
    top: calc( 100% * 11 / 542 );
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .Animation.chrome .Animation_BrowsecIcon,
  .Animation.chrome .Animation_BrowsecIconUk,
  .Animation.chrome .Animation_BrowsecIconUs{
    left: calc( 100% * 495 / 642 );
  }
  .Animation.others .Animation_BrowsecIcon,
  .Animation.others .Animation_BrowsecIconUk,
  .Animation.others .Animation_BrowsecIconUs{
    left: calc( 100% * 559 / 642 );
  }
  .Animation_BrowsecIcon{
    background-image: url( '/images/congratulations/browsec_icon.svg' );
  }
  .Animation_BrowsecIconUk{
    background-image: url( '/images/congratulations/browsec_icon_uk.svg' );
  }
  .Animation_BrowsecIconUs{
    background-image: url( '/images/congratulations/browsec_icon_us.svg' );
  }
  .Animation_PinEnabled,
  .Animation_PinEnabledHover{
    opacity: 0;
    width: calc( 100% * 40 / 642 );
    height: calc( 100% * 40 / 542 );
    position: absolute;
    left: calc( 100% * 473 / 642 );
    top: calc( 100% * 148 / 542 );
  }
  .Animation_PinEnabled{
    background: url( '/images/congratulations/pin_enabled.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation_PinEnabledHover{
    background: url( '/images/congratulations/pin_enabled_hovered.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation_ExtensionsPopup{
    opacity: 0;
    background: url( '/images/congratulations/extensions_popup.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 328 / 642 );
    height: calc( 100% * 199 / 542 );
    position: absolute;
    left: calc( 100% * 229 / 642 );
    top: calc( 100% * 36 / 542 );
  }
  .Animation.langRu .Animation_ExtensionsPopup{
    background-image: url( '/images/congratulations/extensions_popup_ru.svg' );
  }

  .Animation_BrowsecPopup{
    opacity: 0;
    background: url( '/images/congratulations/popup_bg.svg#en' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 408 / 642 );
    height: calc( 100% * 424 / 542 );
    position: absolute;
    top: calc( 100% * 37 / 542 );
  }
  .Animation.langRu .Animation_BrowsecPopup{
    background-image: url( '/images/congratulations/popup_bg.svg#ru' );
  }
  .Animation.chrome .Animation_BrowsecPopup{
    left: calc( 100% * 118 / 642 );
  }
  .Animation.others .Animation_BrowsecPopup{
    left: calc( 100% * 182 / 642 );
  }

  .Animation_SwitchOn,
  .Animation_SwitchOff{
    opacity: 0;
    width: calc( 100% * 61 / 408 );
    height: calc( 100% * 26 / 424 );
    position: absolute;
    bottom: calc( 100% * 11 / 424 );
    right: calc( 100% * 14 / 408 );
  }
  .Animation_SwitchOff{
    background: url( '/images/congratulations/switch_off.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation.langRu .Animation_SwitchOff{
    background-image: url( '/images/congratulations/switch_off_ru.svg' );
  }
  .Animation_SwitchOn{
    background: url( '/images/congratulations/switch_on.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation.langRu .Animation_SwitchOn{
    background-image: url( '/images/congratulations/switch_on_ru.svg' );
  }
  .Animation_BrowsecPopup_NoProtection{
    opacity: 0;
    background: url( '/images/congratulations/popup_disabled.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 336 / 408 );
    height: calc( 100% * 269 / 424 );
    position: absolute;
    left: calc( 100% * 48 / 408 );
    top: calc( 100% * 78 / 424 );
  }
  .Animation.langRu .Animation_BrowsecPopup_NoProtection{
    background-image: url( '/images/congratulations/popup_disabled_ru.svg' );
    width: calc( 100% * 366 / 408 );
    left: calc( 100% * 21 / 408 );
  }
  .Animation_BrowsecPopup_Protection,
  .Animation_BrowsecPopup_Protection_Hover,
  .Animation_BrowsecPopup_ProtectionUs,
  .Animation_BrowsecPopup_ProtectionUs_Hover{
    opacity: 0;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 361 / 408 );
    height: calc( 100% * 263 / 424 );
    position: absolute;
    left: calc( 100% * 24 / 408 );
    top: calc( 100% * 78 / 424 );
  }
  .Animation_BrowsecPopup_Protection{
    background-image: url( '/images/congratulations/popup_enabled.svg#uk' );
  }
  .Animation.langRu .Animation_BrowsecPopup_Protection{
    background-image: url( '/images/congratulations/popup_enabled_ru.svg#uk' );
  }
  .Animation_BrowsecPopup_Protection_Hover{
    background-image: url( '/images/congratulations/popup_enabled.svg#uk_hover' );
  }
  .Animation.langRu .Animation_BrowsecPopup_Protection_Hover{
    background-image: url( '/images/congratulations/popup_enabled_ru.svg#uk_hover' );
  }
  .Animation_BrowsecPopup_ProtectionUs{
    background-image: url( '/images/congratulations/popup_enabled.svg#us' );
  }
  .Animation.langRu .Animation_BrowsecPopup_ProtectionUs{
    background-image: url( '/images/congratulations/popup_enabled_ru.svg#us' );
  }
  .Animation_BrowsecPopup_ProtectionUs_Hover{
    background-image: url( '/images/congratulations/popup_enabled.svg#us_hover' );
  }
  .Animation.langRu .Animation_BrowsecPopup_ProtectionUs_Hover{
    background-image: url( '/images/congratulations/popup_enabled_ru.svg#us_hover' );
  }
  .Animation_BrowsecPopup_SmartSettings,
  .Animation_BrowsecPopup_SmartSettingsHover{
    opacity: 0;
    width: calc( 100% * 392 / 408 );
    height: calc( 100% * 321 / 424 );
    position: absolute;
    left: calc( 100% * 14 / 408 );
    top: calc( 100% * 58 / 424 );
  }
  .Animation_BrowsecPopup_SmartSettings{
    background: url( '/images/congratulations/popup_smart_settings.svg#base' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation.langRu .Animation_BrowsecPopup_SmartSettings{
    background-image: url( '/images/congratulations/popup_smart_settings_ru.svg#base' );
  }
  .Animation_BrowsecPopup_SmartSettingsHover{
    background: url( '/images/congratulations/popup_smart_settings.svg#hover' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation.langRu .Animation_BrowsecPopup_SmartSettingsHover{
    background-image: url( '/images/congratulations/popup_smart_settings_ru.svg#hover' );
  }
  </style>

  <div class="Animation ${A?"chrome":"others"} ${"ru"===e?"langRu":""}">
    <div class="Animation_Bg"></div>
    <div class="Animation_Search"></div>

    <div class="Animation_ExtensionsIcon"></div>
    <div class="Animation_BrowsecIcon"></div>
    <div class="Animation_BrowsecIconUk"></div>
    <div class="Animation_BrowsecIconUs"></div>

    <div class="Animation_ExtensionsPopup"></div>
    <div class="Animation_PinEnabledHover"></div>
    <div class="Animation_PinEnabled"></div>

    <div class="Animation_BrowsecPopup">
      <div class="Animation_SwitchOff"></div>
      <div class="Animation_SwitchOn"></div>
      <div class="Animation_BrowsecPopup_NoProtection"></div>
      <div class="Animation_BrowsecPopup_Protection"></div>
      <div class="Animation_BrowsecPopup_Protection_Hover"></div>
      <div class="Animation_BrowsecPopup_ProtectionUs"></div>
      <div class="Animation_BrowsecPopup_ProtectionUs_Hover"></div>
      <div class="Animation_BrowsecPopup_SmartSettings"></div>
      <div class="Animation_BrowsecPopup_SmartSettingsHover"></div>
    </div>

    <div class="Animation_Cursor"></div>
  </div>`}class P extends i.oi{render(){return f.call(this)}async firstUpdated(e){super.firstUpdated(e);const o=this.shadowRoot;if(!o)throw new Error("Shadow root not found");const t=o.querySelector("div.Animation");if(!t)throw new Error("Animation element not found");const n=A?(e=>{let o=new u(e.querySelector("div.Animation_Search")),t=new u(e.querySelector("div.Animation_Cursor")),n=new u(e.querySelector("div.Animation_ExtensionsIcon")),i=new u(e.querySelector("div.Animation_BrowsecIcon")),a=new u(e.querySelector("div.Animation_BrowsecIconUk")),r=new u(e.querySelector("div.Animation_BrowsecIconUs")),c=new u(e.querySelector("div.Animation_ExtensionsPopup")),s=new u(e.querySelector("div.Animation_PinEnabled")),l=new u(e.querySelector("div.Animation_PinEnabledHover")),m=new u(e.querySelector("div.Animation_BrowsecPopup")),_=new u(e.querySelector("div.Animation_SwitchOn")),v=new u(e.querySelector("div.Animation_SwitchOff")),w=new u(e.querySelector("div.Animation_BrowsecPopup_NoProtection")),h=new u(e.querySelector("div.Animation_BrowsecPopup_Protection")),y=new u(e.querySelector("div.Animation_BrowsecPopup_Protection_Hover")),b=new u(e.querySelector("div.Animation_BrowsecPopup_ProtectionUs")),A=new u(e.querySelector("div.Animation_BrowsecPopup_SmartSettings")),f=new u(e.querySelector("div.Animation_BrowsecPopup_SmartSettingsHover"));return{start:()=>new Promise((e=>{let u,P=k=>{void 0===u&&(u=k);let S=k-u;if(S>p)return void e();const x=(()=>{let e=Math.floor(S/p);return S-e*p})()/p;{let e=(()=>{switch(!0){case x<=g[1]:return 532;case x<=g[2]:return 487+45*(1-(x-g[1])/d[2]);case x<=g[4]:return 487;case x<=g[5]:return 487+(x-g[4])/d[5]*13;case x<=g[7]:return 500;case x<=g[8]:return 500+(x-g[7])/d[8]*-180;case x<=g[10]:return 320;case x<=g[11]:return 320+(x-g[10])/d[11]*124;case x<=g[13]:return 444;case x<=g[14]:return 444+(x-g[13])/d[14]*-120;default:return 324}})(),o=(()=>{switch(!0){case x<=d[0]:return 19+164*(1-x/d[0]);case x<=g[1]:return 19;case x<=g[2]:return 19+(x-g[1])/d[2]*144;case x<=g[4]:return 163;case x<=g[5]:return 19+144*(1-(x-g[4])/d[5]);case x<=g[7]:return 19;case x<=g[8]:return 19+(x-g[7])/d[8]*336;case x<=g[10]:return 355;case x<=g[11]:return 355+(x-g[10])/d[11]*-11;case x<=g[13]:return 344;case x<=g[14]:return 344+(x-g[13])/d[14]*-47;default:return 297}})();t.value=`left:${e}px;top:${o}px;`}n.value=x<=d[0]?"opacity:0;":x<=g[6]?"opacity:1;":"opacity:0;";{let e=x<=d[0]?0:x<=g[1]?(x-d[0])/d[1]:x<=g[6]?1:0;c.value=`opacity:${e};`}l.value=x<=g[3]?"opacity:0":x<=g[4]?"opacity:1":"opacity:0",s.value=x<=g[4]?"opacity:0":x<=g[6]?"opacity:1":"opacity:0",o.value=x<=g[3]?"opacity:0":"opacity:1",i.value=x<=g[6]?"opacity:0;":x<=g[9]?"opacity:1;":"opacity:0;",a.value=x<=g[9]?"opacity:0;":x<=g[15]?"opacity:1;":"opacity:0;",r.value=x<=g[15]?"opacity:0":(g[16],"opacity:1"),m.value=x<=g[6]?"":x<=g[7]?`opacity:${(x-g[6])/d[7]};`:"opacity:1;";{let e=x<=g[6]?0:x<=g[9]?1:x<=g[10]?1-(x-g[9])/d[10]:0;v.value=`opacity:${e};`}{let e=x<=g[9]?0:x<=g[10]?(x-g[9])/d[10]:1;_.value=`opacity:${e};`}w.value=x<=g[6]?"":x<=g[9]?"opacity:1;":x<=g[10]?`opacity:${1-(x-g[9])/d[10]};`:"",h.value=x<=g[9]?"":x<=g[10]?`opacity:${(x-g[9])/d[10]};`:x<=g[11]&&(x-g[10])/d[11]<.7?"opacity:1;":"",y.value=x<=g[10]?"":x<=g[11]?(x-g[10])/d[11]<.7?"":"opacity:1;":x<=g[13]?`opacity:${1-(x-g[12])/d[13]};`:"",A.value=x<=g[12]?"":x<=g[13]?`opacity:${(x-g[12])/d[13]};`:x<=g[14]?(x-g[13])/d[14]>.7?"":"opacity:1":"",f.value=x<=g[13]?"":x<=g[14]?(x-g[13])/d[14]>.7?"opacity:1":"":x<=g[15]?"opacity:1;":x<=g[16]?`opacity:${1-(x-g[15])/d[16]};`:"",b.value=x<=g[15]?"":x<=g[16]?`opacity:${(x-g[15])/d[16]};`:"opacity:1;",self.requestAnimationFrame(P)};self.requestAnimationFrame(P)}))}})(t):(e=>{let o=new u(e.querySelector("div.Animation_Cursor")),t=new u(e.querySelector("div.Animation_BrowsecIcon")),n=new u(e.querySelector("div.Animation_BrowsecIconUk")),i=new u(e.querySelector("div.Animation_BrowsecIconUs")),a=new u(e.querySelector("div.Animation_BrowsecPopup")),r=new u(e.querySelector("div.Animation_SwitchOn")),c=new u(e.querySelector("div.Animation_SwitchOff")),s=new u(e.querySelector("div.Animation_BrowsecPopup_NoProtection")),l=new u(e.querySelector("div.Animation_BrowsecPopup_Protection")),p=new u(e.querySelector("div.Animation_BrowsecPopup_Protection_Hover")),d=new u(e.querySelector("div.Animation_BrowsecPopup_ProtectionUs")),g=new u(e.querySelector("div.Animation_BrowsecPopup_SmartSettings")),m=new u(e.querySelector("div.Animation_BrowsecPopup_SmartSettingsHover"));return{start:()=>new Promise((e=>{let u,h=y=>{void 0===u&&(u=y);let b=y-u;if(b>_)return void e();const A=(()=>{let e=Math.floor(b/_);return b-e*_})()/_;{let e=(()=>{switch(!0){case A<=v[0]:case A<=w[2]:return 564;case A<=w[3]:return 564+(A-w[2])/v[3]*-194;case A<=w[5]:return 370;case A<=w[6]:return 370+(A-w[5])/v[6]*138;case A<=w[8]:return 508;case A<=w[9]:return 508+(A-w[8])/v[9]*-120;default:return 388}})(),t=(()=>{switch(!0){case A<=v[0]:return 19+144*(1-A/v[0]);case A<=w[2]:return 19;case A<=w[3]:return 19+(A-w[2])/v[3]*336;case A<=w[5]:return 355;case A<=w[6]:return 355+(A-w[5])/v[6]*-11;case A<=w[8]:return 344;case A<=w[9]:return 344+(A-w[8])/v[9]*-47;default:return 297}})();o.value=`left:${e}px;top:${t}px;`}a.value=A<=w[1]?"":A<=w[2]?`opacity:${(A-w[1])/v[2]};`:"opacity:1;",t.value=A<=w[1]?"opacity:0;":A<=w[4]?"opacity:1;":"opacity:0;",n.value=A<=w[4]?"opacity:0;":A<=w[10]?"opacity:1;":"opacity:0;",i.value=A<=w[10]?"opacity:0":(w[11],"opacity:1");{let e=A<=w[1]?0:A<=w[4]?1:A<=w[5]?1-(A-w[4])/v[5]:0;c.value=`opacity:${e};`}{let e=A<=w[4]?0:A<=w[5]?(A-w[4])/v[5]:1;r.value=`opacity:${e};`}s.value=A<=w[1]?"":A<=w[4]?"opacity:1;":A<=w[5]?`opacity:${1-(A-w[4])/v[5]};`:"",l.value=A<=w[4]?"":A<=w[5]?`opacity:${(A-w[4])/v[5]};`:A<=w[6]&&(A-w[5])/v[6]<.7?"opacity:1;":"",p.value=A<=w[5]?"":A<=w[6]?(A-w[5])/v[6]<.7?"":"opacity:1;":A<=w[8]?`opacity:${1-(A-w[7])/v[8]};`:"",g.value=A<=w[7]?"":A<=w[8]?`opacity:${(A-w[7])/v[8]};`:A<=w[9]?(A-w[8])/v[9]>.7?"":"opacity:1":"",m.value=A<=w[8]?"":A<=w[9]?(A-w[8])/v[9]>.7?"opacity:1":"":A<=w[10]?"opacity:1;":A<=w[11]?`opacity:${1-(A-w[10])/v[11]};`:"",d.value=A<=w[10]?"":A<=w[11]?`opacity:${(A-w[10])/v[11]};`:"opacity:1;",self.requestAnimationFrame(h)};self.requestAnimationFrame(h)}))}})(t),i=async()=>{await n.start(),i()};i()}}customElements.define("use-animation",P);class k extends((0,s.$)(c.Z)(i.oi)){render(){return r.call(this)}static get properties(){return{withScroll:{type:Boolean}}}constructor(){super(),this.withScroll=document.documentElement.scrollHeight>document.documentElement.clientHeight,window.addEventListener("resize",(()=>{const e=document.documentElement.scrollHeight>document.documentElement.clientHeight;e!==this.withScroll&&(this.withScroll=e)}))}}customElements.define("main-block-modern",k);var S=t(6492),x=t.n(S),B=t(4168),I=t(5119),q=t(2338);document.title=(0,n.Z)("you_just_installed_browsec"),I.Z.track("congrats_tab_open");const E=new Promise((e=>{window.addEventListener("DOMContentLoaded",(()=>{e()}))})),$=(async()=>{const e=await q.Z.get("gaRareUserId");return"string"==typeof e?e:await new Promise((e=>{q.Z.onChange({for:["gaRareUserId"],do:o=>{const t=o.gaRareUserId;"string"==typeof t&&e(t)}})}))})();(async()=>{var e;const o=(0,B.Z)();if(window.language=o,"ru"===o&&document.documentElement.setAttribute("lang","ru"),"undefined"==typeof browser){const e=x().type.startsWith("qa")?"gchiwwppyi":"gchhvrqrwi";t=window,n=document,a="script",r=e,t[i="clarity"]=t[i]||function(){(t[i].q=t[i].q||[]).push(arguments)},(c=n.createElement(a)).async=1,c.src="https://www.clarity.ms/tag/"+r,(s=n.getElementsByTagName(a)[0]).parentNode.insertBefore(c,s),$.then((e=>{window.clarity("identify",e)}))}var t,n,i,a,r,c,s;await E;const u=document.querySelector("div.Main > div.In");null==u||null===(e=u.append)||void 0===e||e.call(u,document.createElement("main-block-modern"))})();let O=!1;"undefined"==typeof browser&&chrome.runtime.onMessage.addListener(((e,o)=>{"popup open"===(null==e?void 0:e.type)&&o.url===chrome.runtime.getURL("/popup/popup.html")&&(O||(O=!0,"function"==typeof window.clarity&&window.clarity("set","pop-up open","true")))}))}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var a=t[e]={exports:{}};return o[e](a,a.exports,n),a.exports}n.m=o,e=[],n.O=(o,t,i,a)=>{if(!t){var r=1/0;for(l=0;l<e.length;l++){for(var[t,i,a]=e[l],c=!0,s=0;s<t.length;s++)(!1&a||r>=a)&&Object.keys(n.O).every((e=>n.O[e](t[s])))?t.splice(s--,1):(c=!1,a<r&&(r=a));if(c){e.splice(l--,1);var u=i();void 0!==u&&(o=u)}}return o}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[t,i,a]},n.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return n.d(o,{a:o}),o},n.d=(e,o)=>{for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=3,(()=>{var e={3:0};n.O.j=o=>0===e[o];var o=(o,t)=>{var i,a,[r,c,s]=t,u=0;if(r.some((o=>0!==e[o]))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(s)var l=s(n)}for(o&&o(t);u<r.length;u++)a=r[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},t=self.webpackChunkbrowsec_extension=self.webpackChunkbrowsec_extension||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var i=n.O(void 0,[592],(()=>n(6499)));i=n.O(i)})();