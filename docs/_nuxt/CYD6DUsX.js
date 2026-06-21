import{$ as U,ag as J,aa as K,m as _,c as f,o as u,_ as V,bc as W,p as N,L as x,q as X,t as v,w as j,N as k,b as o,R as Y,C as g,bd as Z,E as y,S as B,a6 as ee,be as D,aj as H,k as P,aR as A,h as z,F,Z as E,bb as O,n as te,bf as ne,V as oe,y as ie,B as ae,Q as h,D as re,U as se,J as le,K as ce}from"./D1gb29iu.js";import{s as I}from"./C74wg917.js";import{s as M}from"./D38sVTWO.js";import{_ as de}from"./SPaInNuw.js";import{_ as ue}from"./DYeYk5Io.js";import{_ as fe}from"./CsTVxuaQ.js";import"./DJLpLrq_.js";import"./Bbx6Wxi8.js";import"./BIO5weqB.js";var pe=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,me={root:function(t){var r=t.instance,l=t.props;return["p-textarea p-component",{"p-filled":r.$filled,"p-textarea-resizable ":l.autoResize,"p-textarea-sm p-inputfield-sm":l.size==="small","p-textarea-lg p-inputfield-lg":l.size==="large","p-invalid":r.$invalid,"p-variant-filled":r.$variant==="filled","p-textarea-fluid":r.$fluid}]}},he=U.extend({name:"textarea",style:pe,classes:me}),ve={name:"BaseTextarea",extends:J,props:{autoResize:Boolean},style:he,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function S(e){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(e)}function ge(e,t,r){return(t=be(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function be(e){var t=ye(e,"string");return S(t)=="symbol"?t:t+""}function ye(e,t){if(S(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var l=r.call(e,t);if(S(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Q={name:"Textarea",extends:ve,inheritAttrs:!1,observer:null,mounted:function(){var t=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){t.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){if(this.$el.offsetParent){var t=this.$el.style.height,r=parseInt(t)||0,l=this.$el.scrollHeight,c=!r||l>r,i=r&&l<r;i?(this.$el.style.height="auto",this.$el.style.height="".concat(this.$el.scrollHeight,"px")):c&&(this.$el.style.height="".concat(l,"px"))}},onInput:function(t){this.autoResize&&this.resize(),this.writeValue(t.target.value,t)}},computed:{attrs:function(){return _(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return K(ge({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},ke=["value","name","disabled","aria-invalid","data-p"];function xe(e,t,r,l,c,i){return u(),f("textarea",_({class:e.cx("root"),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.invalid||void 0,"data-p":i.dataP,onInput:t[0]||(t[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.attrs),null,16,ke)}Q.render=xe;const _e={class:"p-fluid"},we={class:"p-field flex flex-col"},je={for:"contact"},$e={class:"p-field flex flex-col"},Se={for:"feedback"},Ce={key:0,class:"p-error"},De={key:1,class:"p-error"},ze={__name:"FeedbackDialog",setup(e){const t=W(),r=N(),l=x(!1),c=x(""),i=x(""),b=x(!1),d=x(!1),a=x(0),n=x(""),m=X(()=>R(new Date,new Date(n.value))&&a.value>=10),T=()=>{$(),l.value=!0},C=()=>{l.value=!1,c.value="",b.value=!1},L=async()=>{if(b.value=!0,!(!c.value||m.value)){d.value=!0;try{const s=new FormData;if(s.append("_subject","网站反馈"),s.append("feedback",c.value),s.append("contact",i.value),(await fetch("https://formsubmit.co/ajax/crazyjunichi@hotmail.com",{method:"POST",body:s})).ok)t.add({severity:"success",detail:r.t("反馈已提交，感谢您的意见！"),life:3e3}),G();else throw new Error("提交失败")}catch(s){t.add({severity:"success",detail:r.t("提交反馈时出错，请稍后再试"),life:3e3}),console.error("反馈提交错误:",s)}finally{d.value=!1,C()}}},$=()=>{const s=localStorage.getItem("feedbackSubmissions");if(s){const{count:p,date:w}=JSON.parse(s);a.value=p,n.value=w}},G=()=>{const s=new Date,p=n.value?new Date(n.value):null;R(s,p)?a.value++:(a.value=1,n.value=s.toISOString()),localStorage.setItem("feedbackSubmissions",JSON.stringify({count:a.value,date:n.value}))},R=(s,p)=>!s||!p?!1:s.getFullYear()===p.getFullYear()&&s.getMonth()===p.getMonth()&&s.getDate()===p.getDate();return(s,p)=>(u(),f("div",null,[v(j(I),{label:s.$t("提交反馈"),icon:"pi pi-comment",onClick:T},null,8,["label"]),v(j(M),{visible:l.value,"onUpdate:visible":p[2]||(p[2]=w=>l.value=w),header:s.$t("提交反馈"),modal:!0,style:{width:"500px"}},{footer:k(()=>[v(j(I),{label:s.$t("取消"),icon:"pi pi-times",onClick:C,class:"p-button-text"},null,8,["label"]),v(j(I),{label:s.$t("提交"),icon:"pi pi-check",onClick:L,disabled:m.value,loading:d.value},null,8,["label","disabled","loading"])]),default:k(()=>[o("div",_e,[o("div",we,[o("label",je,g(s.$t("（可选）您的联系方式")),1),Y(o("input",{id:"contact","onUpdate:modelValue":p[0]||(p[0]=w=>i.value=w),type:"text",class:"p-inputtext p-component"},null,512),[[Z,i.value]])]),o("div",$e,[o("label",Se,g(s.$t("您的反馈意见")),1),v(j(Q),{id:"feedback",modelValue:c.value,"onUpdate:modelValue":p[1]||(p[1]=w=>c.value=w),autoResize:!0,rows:"5",required:"",class:B({"p-invalid":b.value&&!c.value})},null,8,["modelValue","class"]),b.value&&!c.value?(u(),f("small",Ce,g(s.$t("请填写反馈内容")),1)):y("",!0),m.value?(u(),f("small",De," 您今天已提交 "+g(a.value)+" 次反馈，每天最多提交10次 ",1)):y("",!0)])])]),_:1},8,["visible","header"])]))}},Ie=V(ze,[["__scopeId","data-v-1de262f2"]]);var Be=`
    .p-confirmdialog .p-dialog-content {
        display: flex;
        align-items: center;
        gap: dt('confirmdialog.content.gap');
    }

    .p-confirmdialog-icon {
        color: dt('confirmdialog.icon.color');
        font-size: dt('confirmdialog.icon.size');
        width: dt('confirmdialog.icon.size');
        height: dt('confirmdialog.icon.size');
    }
`,Fe={root:"p-confirmdialog",icon:"p-confirmdialog-icon",message:"p-confirmdialog-message",pcRejectButton:"p-confirmdialog-reject-button",pcAcceptButton:"p-confirmdialog-accept-button"},Te=U.extend({name:"confirmdialog",style:Be,classes:Fe}),Le={name:"BaseConfirmDialog",extends:ee,props:{group:String,breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0}},style:Te,provide:function(){return{$pcConfirmDialog:this,$parentInstance:this}}},q={name:"ConfirmDialog",extends:Le,confirmListener:null,closeListener:null,data:function(){return{visible:!1,confirmation:null}},mounted:function(){var t=this;this.confirmListener=function(r){r&&r.group===t.group&&(t.confirmation=r,t.confirmation.onShow&&t.confirmation.onShow(),t.visible=!0)},this.closeListener=function(){t.visible=!1,t.confirmation=null},D.on("confirm",this.confirmListener),D.on("close",this.closeListener)},beforeUnmount:function(){D.off("confirm",this.confirmListener),D.off("close",this.closeListener)},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1}},computed:{appendTo:function(){return this.confirmation?this.confirmation.appendTo:"body"},target:function(){return this.confirmation?this.confirmation.target:null},modal:function(){return this.confirmation?this.confirmation.modal==null?!0:this.confirmation.modal:!0},header:function(){return this.confirmation?this.confirmation.header:null},message:function(){return this.confirmation?this.confirmation.message:null},blockScroll:function(){return this.confirmation?this.confirmation.blockScroll:!0},position:function(){return this.confirmation?this.confirmation.position:null},acceptLabel:function(){if(this.confirmation){var t,r=this.confirmation;return r.acceptLabel||((t=r.acceptProps)===null||t===void 0?void 0:t.label)||this.$primevue.config.locale.accept}return this.$primevue.config.locale.accept},rejectLabel:function(){if(this.confirmation){var t,r=this.confirmation;return r.rejectLabel||((t=r.rejectProps)===null||t===void 0?void 0:t.label)||this.$primevue.config.locale.reject}return this.$primevue.config.locale.reject},acceptIcon:function(){var t;return this.confirmation?this.confirmation.acceptIcon:(t=this.confirmation)!==null&&t!==void 0&&t.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var t;return this.confirmation?this.confirmation.rejectIcon:(t=this.confirmation)!==null&&t!==void 0&&t.rejectProps?this.confirmation.rejectProps.icon:null},autoFocusAccept:function(){return this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept"},autoFocusReject:function(){return this.confirmation.defaultFocus==="reject"},closeOnEscape:function(){return this.confirmation?this.confirmation.closeOnEscape:!0}},components:{Dialog:M,Button:I}};function Pe(e,t,r,l,c,i){var b=H("Button"),d=H("Dialog");return u(),P(d,{visible:c.visible,"onUpdate:visible":[t[2]||(t[2]=function(a){return c.visible=a}),i.onHide],role:"alertdialog",class:B(e.cx("root")),modal:i.modal,header:i.header,blockScroll:i.blockScroll,appendTo:i.appendTo,position:i.position,breakpoints:e.breakpoints,closeOnEscape:i.closeOnEscape,draggable:e.draggable,pt:e.pt,unstyled:e.unstyled},A({default:k(function(){return[e.$slots.container?y("",!0):(u(),f(F,{key:0},[e.$slots.message?(u(),P(E(e.$slots.message),{key:1,message:c.confirmation},null,8,["message"])):(u(),f(F,{key:0},[z(e.$slots,"icon",{},function(){return[e.$slots.icon?(u(),P(E(e.$slots.icon),{key:0,class:B(e.cx("icon"))},null,8,["class"])):c.confirmation.icon?(u(),f("span",_({key:1,class:[c.confirmation.icon,e.cx("icon")]},e.ptm("icon")),null,16)):y("",!0)]}),o("span",_({class:e.cx("message")},e.ptm("message")),g(i.message),17)],64))],64))]}),_:2},[e.$slots.container?{name:"container",fn:k(function(a){return[z(e.$slots,"container",{message:c.confirmation,closeCallback:a.closeCallback,acceptCallback:i.accept,rejectCallback:i.reject,initDragCallback:a.initDragCallback})]}),key:"0"}:void 0,e.$slots.container?void 0:{name:"footer",fn:k(function(){var a;return[v(b,_({class:[e.cx("pcRejectButton"),c.confirmation.rejectClass],autofocus:i.autoFocusReject,unstyled:e.unstyled,text:((a=c.confirmation.rejectProps)===null||a===void 0?void 0:a.text)||!1,onClick:t[0]||(t[0]=function(n){return i.reject()})},c.confirmation.rejectProps,{label:i.rejectLabel,pt:e.ptm("pcRejectButton")}),A({_:2},[i.rejectIcon||e.$slots.rejecticon?{name:"icon",fn:k(function(n){return[z(e.$slots,"rejecticon",{},function(){return[o("span",_({class:[i.rejectIcon,n.class]},e.ptm("pcRejectButton").icon,{"data-pc-section":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","text","label","pt"]),v(b,_({label:i.acceptLabel,class:[e.cx("pcAcceptButton"),c.confirmation.acceptClass],autofocus:i.autoFocusAccept,unstyled:e.unstyled,onClick:t[1]||(t[1]=function(n){return i.accept()})},c.confirmation.acceptProps,{pt:e.ptm("pcAcceptButton")}),A({_:2},[i.acceptIcon||e.$slots.accepticon?{name:"icon",fn:k(function(n){return[z(e.$slots,"accepticon",{},function(){return[o("span",_({class:[i.acceptIcon,n.class]},e.ptm("pcAcceptButton").icon,{"data-pc-section":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["label","class","autofocus","unstyled","pt"])]}),key:"1"}]),1032,["visible","class","modal","header","blockScroll","appendTo","position","breakpoints","closeOnEscape","draggable","onUpdate:visible","pt","unstyled"])}q.render=Pe;const Ae=O("/library_hero_zh.jpg"),Oe=O("/library_hero_en.jpg"),Re=O("/library_hero_ja.jpg"),He={class:"relative"},Ee={key:0,id:"hero",src:Ae,class:"relative object-cover masked-image"},Ue={key:1,id:"hero",src:Oe,class:"relative object-cover masked-image"},Ve={key:2,id:"hero",src:Re,class:"relative object-cover masked-image"},We={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4"},Ne={class:"flex flex-col items-center justify-center gap-4 h-80 border border-current/30 border-dashed rounded-lg shadow-md"},Me={class:"text-red-400/90 text-center whitespace-pre-wrap"},Qe={class:"font-bold text-3xl text-center text-(--ui-primary)"},qe={key:0,class:"text-center whitespace-pre-wrap"},Ge={key:1,class:"text-center whitespace-pre-wrap"},Je={key:2,class:"text-center whitespace-pre-wrap"},Ke={style:{color:"#f4f35e"}},Xe={key:3,class:"text-center whitespace-pre-wrap"},Ye={class:"flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700"},Ze={class:"relative col-span-1 md:col-span-1 lg:col-span-3 flex flex-col border border-current/30 border-dashed rounded-lg shadow-md p-4"},et={class:"grow flex flex-col gap-2"},tt={class:"flex"},nt={class:"text-lg font-bold grow"},ot={href:"_PageHistory",class:"text-sm underline"},it={class:"flex flex-wrap gap-x-2"},at={class:"text-right"},rt=te({__name:"index",setup(e){W();const t=ne(),r=se(),l=x([]);oe(async()=>{const d=await ie("PageHistory"),a=d.histories.filter(n=>n.createAt>Date.now()-1e3*60*60*24*30).sort((n,m)=>m.createAt-n.createAt)[0].version;a?l.value=d.histories.filter(n=>n.type!="dialog").filter(n=>!n.key.includes("DEBUG")).filter(n=>!n.key.startsWith("NOT_USED")).filter(n=>!n.key.startsWith("HOTFIX_")).filter(n=>!n.key.startsWith("TEST_")).filter(n=>n.version==a).sort((n,m)=>n.type.localeCompare(m.type)):l.value=d.histories.filter(n=>n.createAt>Date.now()-1e3*60*60*24*7).filter(n=>!n.key.includes("DEBUG")).sort((n,m)=>m.createAt-n.createAt).slice(0,20),l.value=l.value.filter(n=>!n.key.startsWith("Test")&&!n.key.startsWith("HOTFIX_")),console.log(l.value.filter(n=>!n.zh||n.zh==n.en||n.zh.split("").every(m=>m.charCodeAt(0)<127)).map(n=>`// ${n.key} ${n.en}`).join(`
`)),i.locale.value=="en"&&!localStorage.getItem("wikiConfirmShown")&&(c(),localStorage.setItem("wikiConfirmShown","1"))});const c=()=>{t.require({message:"",header:"Warning",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Official Wiki",severity:"secondary"},acceptProps:{label:"Continue"},accept:()=>{},reject:()=>{window.location.href="https://cardsurvival.wiki.gg/"}})},i=N();function b(){le({title:`${i.t(ce().$gameName)}`,htmlAttrs:{lang:i.locale.value}})}return b(),ae(i.locale,b),(d,a)=>{const n=Ie,m=de,T=q,C=ue,L=fe;return u(),f(F,null,[o("div",null,[o("div",He,[d.$i18n.locale=="zh"?(u(),f("img",Ee)):y("",!0),d.$i18n.locale=="en"?(u(),f("img",Ue)):y("",!0),d.$i18n.locale=="ja"?(u(),f("img",Ve)):y("",!0)]),o("div",We,[o("div",Ne,[o("div",Me,g(d.$t("知道的越多, 乐趣就越少")),1),o("div",Qe," ⚠️ "+g(d.$t("持续建设中"))+"…… ",1),d.$i18n.locale=="zh"?(u(),f("div",qe,a[0]||(a[0]=[o("div",null,[h("Wiki反馈：QQ群 "),o("span",{class:"text-sky-300"},"752206926")],-1),o("div",null,[h("MOD&游戏交流：QQ群 "),o("span",{class:"text-sky-300"},"1036598678")],-1),o("div",null,[h("官方Wiki站（英文）："),o("a",{href:"https://cardsurvival.wiki.gg/",class:"text-sky-300 underline",target:"_blank",rel:"noopener noreferrer"},"点击跳转")],-1)]))):d.$i18n.locale=="en"?(u(),f("div",Ge,a[1]||(a[1]=[o("div",null,[h("Official Wiki site: "),o("a",{href:"https://cardsurvival.wiki.gg/",class:"text-sky-300 underline",target:"_blank",rel:"noopener noreferrer"},"https://cardsurvival.wiki.gg/")],-1),o("span",null,"Contact me at ",-1),o("span",{class:"text-sky-300"},"crazyjunichi@hotmail.com",-1)]))):y("",!0),v(n),d.$i18n.locale=="zh"?(u(),f("div",Je,[o("span",Ke,[a[3]||(a[3]=h(" 如页面过旧，请按")),v(m,null,{default:k(()=>a[2]||(a[2]=[h("Ctrl+F5")])),_:1}),a[4]||(a[4]=h("刷新 "))])])):d.$i18n.locale=="en"?(u(),f("div",Xe,a[5]||(a[5]=[o("span",null,null,-1),h("> ")]))):y("",!0),v(T,null,{message:k($=>[o("div",Ye,[o("i",{class:B([$.message.icon,"!text-6xl text-primary-500"])},null,2),a[6]||(a[6]=o("p",{class:"wrap text-center"},[h(" This data site contains "),o("span",{class:"text-red-500"},"spoilers"),h(" and is intended for experienced players only."),o("br"),h(" If you are looking for beginner guides, please visit the official Wiki"),o("br"),h(" https://cardsurvival.wiki.gg/")],-1))])]),_:1})]),o("div",Ze,[o("div",et,[o("div",tt,[o("div",nt,g(d.$t("最近新增页面"))+"：",1),o("div",null,[o("a",ot,"("+g(d.$t("查看版本变更"))+")",1)])]),v(C),o("div",it,[(u(!0),f(F,null,re(j(l),$=>(u(),f("div",null,[v(L,{obj:$},null,8,["obj"])]))),256))])]),o("div",at,g(d.$t("当前页面总数"))+" ： "+g(j(r).public.pageCount),1)]),a[7]||(a[7]=o("div",null,null,-1))])]),y("",!0)],64)}}}),vt=V(rt,[["__scopeId","data-v-2fce6890"]]);export{vt as default};
