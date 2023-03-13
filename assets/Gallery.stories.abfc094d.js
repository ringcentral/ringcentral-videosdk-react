var ze=Object.defineProperty;var a=(e,t)=>ze(e,"name",{value:t,configurable:!0});import{r as v,j as n,b as f,F as N}from"./jsx-runtime.4f7135b4.js";import{i as Q,j as X,k as fe,s as z,l as P,_ as x,m as xe,u as ee,n as te,o as ne,p as re,q as Oe,r as Fe,F as be,t as Je,I as we,S as Se,v as je,w as Ge,O as Ve,x as qe,U as He,y as Ke,z as Be,B as Ue,D as w,E as Ie,H as k,J as H,T as de,K as Ye,G as Ze,h as Qe,A as Xe,a as et,V as tt,P as nt,C as rt,R as ot,L as it,M as at,b as st}from"./index.432917be.js";import"./iframe.25534554.js";import"./index.183a6c99.js";import"./index.d289d216.js";import"./en.707de12e.js";function lt(e){return Q("MuiCircularProgress",e)}a(lt,"getCircularProgressUtilityClass");X("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const ct=["className","color","disableShrink","size","style","thickness","value","variant"];let j=a(e=>e,"_"),ue,pe,ge,me;const E=44,dt=fe(ue||(ue=j`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),ut=fe(pe||(pe=j`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),pt=a(e=>{const{classes:t,variant:r,color:s,disableShrink:u}=e,g={root:["root",r,`color${P(s)}`],svg:["svg"],circle:["circle",`circle${P(r)}`,u&&"circleDisableShrink"]};return re(g,lt,t)},"useUtilityClasses$2"),gt=z("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${P(r.color)}`]]}})(({ownerState:e,theme:t})=>x({display:"inline-block"},e.variant==="determinate"&&{transition:t.transitions.create("transform")},e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&xe(ge||(ge=j`
      animation: ${0} 1.4s linear infinite;
    `),dt)),mt=z("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),ht=z("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${P(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>x({stroke:"currentColor"},e.variant==="determinate"&&{transition:t.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&xe(me||(me=j`
      animation: ${0} 1.4s ease-in-out infinite;
    `),ut)),yt=v.exports.forwardRef(a(function(t,r){const s=ee({props:t,name:"MuiCircularProgress"}),{className:u,color:g="primary",disableShrink:i=!1,size:d=40,style:h,thickness:p=3.6,value:o=0,variant:T="indeterminate"}=s,R=te(s,ct),b=x({},s,{color:g,disableShrink:i,size:d,thickness:p,value:o,variant:T}),S=pt(b),M={},l={},m={};if(T==="determinate"){const _=2*Math.PI*((E-p)/2);M.strokeDasharray=_.toFixed(3),m["aria-valuenow"]=Math.round(o),M.strokeDashoffset=`${((100-o)/100*_).toFixed(3)}px`,l.transform="rotate(-90deg)"}return n(gt,x({className:ne(S.root,u),style:x({width:d,height:d},l,h),ownerState:b,ref:r,role:"progressbar"},m,R,{children:n(mt,{className:S.svg,ownerState:b,viewBox:`${E/2} ${E/2} ${E} ${E}`,children:n(ht,{className:S.circle,style:M,ownerState:b,cx:E,cy:E,r:(E-p)/2,fill:"none",strokeWidth:p})})}))},"CircularProgress")),vt=yt;function ft(e){return Q("MuiFormHelperText",e)}a(ft,"getFormHelperTextUtilityClasses");const xt=X("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),he=xt;var ye;const bt=["children","className","component","disabled","error","filled","focused","margin","required","variant"],wt=a(e=>{const{classes:t,contained:r,size:s,disabled:u,error:g,filled:i,focused:d,required:h}=e,p={root:["root",u&&"disabled",g&&"error",s&&`size${P(s)}`,r&&"contained",d&&"focused",i&&"filled",h&&"required"]};return re(p,ft,t)},"useUtilityClasses$1"),St=z("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.size&&t[`size${P(r.size)}`],r.contained&&t.contained,r.filled&&t.filled]}})(({theme:e,ownerState:t})=>x({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${he.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${he.error}`]:{color:(e.vars||e).palette.error.main}},t.size==="small"&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})),It=v.exports.forwardRef(a(function(t,r){const s=ee({props:t,name:"MuiFormHelperText"}),{children:u,className:g,component:i="p"}=s,d=te(s,bt),h=Oe(),p=Fe({props:s,muiFormControl:h,states:["variant","size","disabled","error","filled","focused","required"]}),o=x({},s,{component:i,contained:p.variant==="filled"||p.variant==="outlined",variant:p.variant,size:p.size,disabled:p.disabled,error:p.error,filled:p.filled,focused:p.focused,required:p.required}),T=wt(o);return n(St,x({as:i,ownerState:o,className:ne(T.root,g),ref:r},d,{children:u===" "?ye||(ye=n("span",{className:"notranslate",children:"\u200B"})):u}))},"FormHelperText")),Tt=It;function Mt(e){return Q("MuiTextField",e)}a(Mt,"getTextFieldUtilityClass");X("MuiTextField",["root"]);const Et=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],Ct={standard:je,filled:Ge,outlined:Ve},Rt=a(e=>{const{classes:t}=e;return re({root:["root"]},Mt,t)},"useUtilityClasses"),_t=z(be,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Nt=v.exports.forwardRef(a(function(t,r){const s=ee({props:t,name:"MuiTextField"}),{autoComplete:u,autoFocus:g=!1,children:i,className:d,color:h="primary",defaultValue:p,disabled:o=!1,error:T=!1,FormHelperTextProps:R,fullWidth:b=!1,helperText:S,id:M,InputLabelProps:l,inputProps:m,InputProps:_,inputRef:A,label:L,maxRows:Ee,minRows:Ce,multiline:oe=!1,name:Re,onBlur:_e,onChange:Ne,onFocus:ke,placeholder:Pe,required:ie=!1,rows:Ae,select:G=!1,SelectProps:V,type:Le,value:ae,variant:O="outlined"}=s,We=te(s,Et),se=x({},s,{autoFocus:g,color:h,disabled:o,error:T,fullWidth:b,multiline:oe,required:ie,select:G,variant:O}),De=Rt(se),W={};O==="outlined"&&(l&&typeof l.shrink<"u"&&(W.notched=l.shrink),W.label=L),G&&((!V||!V.native)&&(W.id=void 0),W["aria-describedby"]=void 0);const C=Je(M),q=S&&C?`${C}-helper-text`:void 0,le=L&&C?`${C}-label`:void 0,$e=Ct[O],ce=n($e,x({"aria-describedby":q,autoComplete:u,autoFocus:g,defaultValue:p,fullWidth:b,multiline:oe,name:Re,rows:Ae,maxRows:Ee,minRows:Ce,type:Le,value:ae,id:C,inputRef:A,onBlur:_e,onChange:Ne,onFocus:ke,placeholder:Pe,inputProps:m},W,_));return f(_t,x({className:ne(De.root,d),disabled:o,error:T,fullWidth:b,ref:r,required:ie,color:h,variant:O,ownerState:se},We,{children:[L!=null&&L!==""&&n(we,x({htmlFor:C,id:le},l,{children:L})),G?n(Se,x({"aria-describedby":q,id:C,labelId:le,value:ae,input:ce},V,{children:i})):ce,S&&n(Tt,x({id:q},R,{children:S}))]}))},"TextField")),I=Nt,kt=a(({rcvEngine:e,localeConfig:t,children:r})=>n(qe.Provider,{value:{rcvEngine:e,localeConfig:t},children:n(He,{children:n(Ke,{children:n(Be,{children:n(Ue,{children:r})})})})}),"RcvEngineProvider"),$=a(e=>e?localStorage:sessionStorage,"getStorage"),K="AUTH_KEY",Te="KEY_AUTH_FORM",D="MEETING_ID";function J(e,t,r=!0){if(typeof localStorage!="object"||typeof sessionStorage!="object")return t;let s;return typeof r>"u"?s=$(!0).getItem(e)||$(!1).getItem(e):s=$(r).getItem(e),s?JSON.parse(s):t}a(J,"readLocallyStored");const F=a((e,t=null,r=!0)=>{$(r).setItem(e,JSON.stringify(t))},"writeLocallyStored"),ve=a((e,t=!0)=>{$(t).setItem(e,"")},"removeLocallyStored"),c={clientId:"",clientSecret:"",jwt:"",username:"",password:""};var y=(e=>(e.PASSWORD="PASSWORD",e.TOKEN="TOKEN",e.JWT="JWT",e))(y||{});function Pt(){const e=J(Te,void 0,!0);return{authType:(e==null?void 0:e.authType)||"JWT",clientId:(e==null?void 0:e.clientId)||(c==null?void 0:c.clientId)||"",clientSecret:(e==null?void 0:e.clientSecret)||(c==null?void 0:c.clientSecret)||"",token:(e==null?void 0:e.token)||(c==null?void 0:c.token),username:(e==null?void 0:e.username)||(c==null?void 0:c.username),password:(e==null?void 0:e.password)||(c==null?void 0:c.password),jwt:(e==null?void 0:e.jwt)||(c==null?void 0:c.jwt),external:(e==null?void 0:e.external)||(c==null?void 0:c.external),grantType:(e==null?void 0:e.grantType)||(c==null?void 0:c.grantType)}}a(Pt,"getDefaultAuthFormData");async function At(e){var r;(r=w.exports.RcvEngine.instance())==null||r.destroy();const t=w.exports.RcvEngine.create({enableDiscovery:!1,origin:c.origin||"https://platform.ringcentral.com",...e,external:{...e.external,...c.dev}});return e.authType===y.TOKEN?await t.setAuthToken(JSON.stringify(e.token)):e.authType===y.JWT?await t.authorize({grantType:w.exports.GrantType.JWT,jwt:e.jwt}):await t.authorize({grantType:w.exports.GrantType.PASSWORD,username:e.username,password:e.password}),console.debug("createRcvEngine called and got: ",t),t}a(At,"createRcvEngine");function B({onClear:e,rcvEngine:t,onStartMeeting:r,onJoinMeeting:s}){const[u,g]=v.exports.useState(J(D,void 0,!0));return n(N,{children:f(Ie,{elevation:1,style:{padding:16,display:"flex"},children:[n(I,{className:"item",label:"Meeting Id",size:"small",style:{width:300,marginRight:4},value:u,variant:"outlined",onChange:i=>g(i.target.value)}),n(k,{style:{marginRight:4},variant:"contained",onClick:()=>{s(t,u)},children:"Join"}),n(k,{style:{marginRight:4},variant:"outlined",onClick:()=>{r(t)},children:"Start a Meeting"}),n(k,{style:{marginRight:4},variant:"text",onClick:e,children:"Reset"})]})})}a(B,"StartMeeting");try{B.displayName="StartMeeting",B.__docgenInfo={description:"",displayName:"StartMeeting",props:{rcvEngine:{defaultValue:null,description:"",name:"rcvEngine",required:!0,type:{name:"RcvEngine"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},onJoinMeeting:{defaultValue:null,description:"",name:"onJoinMeeting",required:!0,type:{name:"(rcvEngine: RcvEngine, meetingId?: string | undefined) => void"}},onStartMeeting:{defaultValue:null,description:"",name:"onStartMeeting",required:!0,type:{name:"(rcvEngine: RcvEngine) => void"}}}}}catch{}function U({onSubmit:e}){const t=Pt(),[r,s]=v.exports.useState(JSON.stringify(t.token)),[u,g]=v.exports.useState(JSON.stringify(t.external)),[i,d]=v.exports.useState(t),h=a(()=>{const o={...i};i.authType===y.TOKEN&&r&&(o.token=JSON.parse(r)),u&&(o.external=JSON.parse(u)||{}),i.authType===y.PASSWORD&&(o.grantType="PASSWORD"),F(Te,o),e(o)},"handleSubmit"),p=a(()=>{switch(i.authType){case y.TOKEN:return f(N,{children:[n(I,{fullWidth:!0,label:"clientId",placeholder:"your clientID",size:"small",type:"text",value:i.clientId,variant:"outlined",onChange:o=>d({...i,clientId:o.target.value})}),n("div",{className:"br"}),n(I,{fullWidth:!0,label:"clientSecret",placeholder:"your client secret",size:"small",type:"text",value:i.clientSecret,variant:"outlined",onChange:o=>d({...i,clientSecret:o.target.value})}),n("div",{className:"br"}),n("h3",{children:"Token"}),n(de,{maxRows:20,minRows:8,placeholder:"your token",style:{width:"100%"},value:r,onChange:o=>s(o.target.value)})]});case y.JWT:return f(N,{children:[n(I,{fullWidth:!0,label:"clientId",placeholder:"your clientID",size:"small",type:"text",value:i.clientId,variant:"outlined",onChange:o=>d({...i,clientId:o.target.value})}),n("div",{className:"br"}),n(I,{fullWidth:!0,label:"clientSecret",placeholder:"your client secret",size:"small",type:"text",value:i.clientSecret,variant:"outlined",onChange:o=>d({...i,clientSecret:o.target.value})}),n("div",{className:"br"}),n(I,{fullWidth:!0,label:"JWT",placeholder:"your jwt",size:"small",type:"text",value:i.jwt,variant:"outlined",onChange:o=>d({...i,jwt:o.target.value})})]});case y.PASSWORD:return f(N,{children:[n(I,{fullWidth:!0,label:"clientId",placeholder:"your clientID",size:"small",type:"text",value:i.clientId,variant:"outlined",onChange:o=>d({...i,clientId:o.target.value})}),n("div",{className:"br"}),n(I,{fullWidth:!0,label:"clientSecret",placeholder:"your client secret",size:"small",type:"text",value:i.clientSecret,variant:"outlined",onChange:o=>d({...i,clientSecret:o.target.value})}),n("div",{className:"br"}),n(I,{fullWidth:!0,label:"username",placeholder:"your username",size:"small",type:"text",value:i.username,variant:"outlined",onChange:o=>d({...i,username:o.target.value})}),n("div",{className:"br"}),n(I,{fullWidth:!0,label:"password",placeholder:"your password",size:"small",type:"text",value:i.password,variant:"outlined",onChange:o=>d({...i,password:o.target.value})})]});default:return[]}},"renderAuthForm");return f(N,{children:[f(be,{children:[n(we,{children:"Auth Type"}),f(Se,{label:"Auth Type",size:"small",value:i.authType,onChange:o=>d({...i,authType:o.target.value}),children:[n(H,{value:y.JWT,children:y.JWT}),n(H,{value:y.PASSWORD,children:y.PASSWORD}),n(H,{value:y.TOKEN,children:y.TOKEN})]})]}),n("div",{className:"br"}),p(),n("h3",{children:"External config"}),n(de,{maxRows:20,minRows:8,style:{width:"100%"},value:u,onChange:o=>g(o.target.value)}),n("div",{className:"br"}),n(k,{variant:"contained",onClick:h,children:"Init Config"})]})}a(U,"AuthForm");try{U.displayName="AuthForm",U.__docgenInfo={description:"",displayName:"AuthForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(authInfo: IAuth) => void"}}}}}catch{}function Lt(){const e=window.rcv;return console.debug("get rcvEngine from window and got: ",e),e}a(Lt,"getInitRcvFromWindow");function Wt(e){var t;try{const r=((t=e==null?void 0:e.getMeetingController())==null?void 0:t.getMeetingState())===w.exports.RcvMeetingState.MEETING_STATE_INMEETING;return console.debug("check isInMeeting: ",r),r}catch{return!1}}a(Wt,"checkIsInMeeting");function Dt(e){var t;try{const r=(t=e==null?void 0:e.getMeetingController())==null?void 0:t._bridge.pins.web;return console.debug("get meeting id from from rcvEngine and got",r),r}catch{return}}a(Dt,"getMeetingId");function Y({onReset:e,children:t,rcvEngine:r,meetingId:s}){return f(N,{children:[f(Ie,{elevation:1,style:{left:8,top:8,position:"absolute",zIndex:100,padding:8},children:[n("b",{children:s}),n(k,{variant:"text",onClick:e,children:"Reset"})]}),n(kt,{localeConfig:{chat_dialog_title:"My chat"},rcvEngine:r,children:t})]})}a(Y,"InMeeting");try{Y.displayName="InMeeting",Y.__docgenInfo={description:"",displayName:"InMeeting",props:{meetingId:{defaultValue:null,description:"",name:"meetingId",required:!0,type:{name:"string"}},rcvEngine:{defaultValue:null,description:"",name:"rcvEngine",required:!0,type:{name:"RcvEngine"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}function Z({meetingId:e,onReset:t}){return f(Ye,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"200px"},children:[n(vt,{}),f("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:8},children:[f("div",{style:{marginRight:8},children:["Joining meeting ",e?`: ${e}`:""]}),n(k,{variant:"text",onClick:t,children:"Reset"})]})]})}a(Z,"MeetingLoading");try{Z.displayName="MeetingLoading",Z.__docgenInfo={description:"",displayName:"MeetingLoading",props:{meetingId:{defaultValue:null,description:"",name:"meetingId",required:!1,type:{name:"string | undefined"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}const $t=a(({children:e})=>{const[t,r]=v.exports.useState(Lt()),[s,u]=v.exports.useState(!1),[g,i]=v.exports.useState(Wt(t)),[d,h]=v.exports.useState(Dt(t)),[p,o]=v.exports.useState(window.auth);v.exports.useEffect(()=>{t&&(console.debug(`addEventListener ${w.exports.EngineEvent.MEETING_JOINED} to rcvEngine`),t.on(w.exports.EngineEvent.MEETING_JOINED,l=>{console.debug(`event ${w.exports.EngineEvent.MEETING_JOINED} triggered with data: ${l}`),h(l),i(!0),F(D,l)}),console.debug(`addEventListener ${w.exports.EngineEvent.MEETING_JOINED} to rcvEngine`),t.on(w.exports.EngineEvent.MEETING_LEFT,()=>{console.debug(`event ${w.exports.EngineEvent.MEETING_LEFT} triggered`),h(""),i(!1),F(D,"")}))},[t]),v.exports.useEffect(()=>{a(async()=>{if(window.rcv){console.debug("got rcvEngine from window, no need to rejoin a meeting");return}const m=J(K,void 0,!0);if(m){console.debug("got auth info from local storage, will init rcvEngine automatically"),await b(m);const _=await S(m),A=J(D,void 0,!0);A&&(console.debug(`got meetingId from local storage, will rejoin meeting ${A}`),await R(_,A))}},"rejoinMeeting")().then()},[]);const T=a(async l=>{u(!0),console.debug("start meeting"),await l.startInstantMeeting(),u(!1)},"handleStartMeeting"),R=a(async(l,m)=>{if(!m){alert("Meeting id can not be empty!");return}h(m),u(!0),console.debug(`join meeting with meetingId: ${m}`),await l.joinMeeting(m),u(!1)},"handleJoinMeeting"),b=a(async l=>(window.auth=l,o(l),F(K,l,!0),l),"handleSubmitAuth"),S=a(async l=>{const m=await At({...l});return window.rcv=m,r(m),m},"handleInitRcv"),M=a(()=>{ve(K),ve(D),t==null||t.destroy(),r(void 0),o(void 0),window.rcv=void 0,window.auth=void 0},"handleReset");if(s)return n(Z,{meetingId:d,onReset:M});if(t){if(g&&d)return n(Y,{meetingId:d,rcvEngine:t,onReset:M,children:e});if(!g)return n(B,{rcvEngine:t,onClear:M,onJoinMeeting:R,onStartMeeting:T})}return p?n("p",{children:"loading..."}):n(U,{onSubmit:async l=>{await b(l),await S(l)}})},"MeetingWrapper");function Me(){return f("div",{style:{display:"flex",width:"100%",height:"100%",flexDirection:"column",border:"1px solid #eee",boxSizing:"border-box"},children:[n(Ze,{layout:Qe.gallery,style:{flex:1}}),n(Xe,{centerActions:[n(et,{isShowLabel:!0},"audio-action"),n(tt,{isShowLabel:!0},"video-action"),n(nt,{isShowLabel:!0,onError:e=>{console.error("error happens: ",e)}},"participant-action"),n(rt,{isShowLabel:!0},"chat-action"),n(ot,{isShowLabel:!0},"record-action"),n(it,{isShowLabel:!0,onError:e=>{console.error("error happens: ",e)}},"leave-action")],leftActions:[n(at,{onError:e=>{console.error("error happens:",e)}},"meeting-info-action")],rightActions:[n(st,{text:"RingCentral"},"logo-icon")]})]})}a(Me,"Meeting");const Ht={parameters:{storySource:{source:`import React from 'react';
import type { Meta, Story } from '@storybook/react';
import MeetingWrapper from './bootstrap/components/meeting-wrapper';
import {
    ActionBar,
    AudioAction,
    ChatAction,
    LeaveAction,
    LogoIcon, MeetingInfoAction,
    ParticipantAction,
    RecordAction,
    VideoAction,
    GalleryLayout,
    GalleryLayoutType,
} from '../lib';

function Meeting() {
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                border: '1px solid #eee',
                boxSizing: 'border-box',
            }}>
            <GalleryLayout
                layout={GalleryLayoutType.gallery}
                style={{
                    flex: 1,
                }}
            />
            <ActionBar
                centerActions={[
                    <AudioAction isShowLabel={true} key={'audio-action'} />,
                    <VideoAction isShowLabel={true} key={'video-action'} />,
                    <ParticipantAction
                        isShowLabel={true}
                        key={'participant-action'}
                        onError={(e) => {
                            console.error('error happens: ', e);
                        }}
                    />,
                    <ChatAction isShowLabel={true} key={'chat-action'} />,
                    <RecordAction isShowLabel={true} key={'record-action'} />,
                    <LeaveAction
                        isShowLabel={true}
                        key={'leave-action'}
                        onError={(e) => {
                            console.error('error happens: ', e);
                        }}
                    />,
                ]}
                leftActions={[
                    <MeetingInfoAction
                        key={'meeting-info-action'}
                        onError={(e) => {
                            console.error('error happens:', e);
                        }}
                    />,
                ]}
                rightActions={[<LogoIcon key={'logo-icon'} text='RingCentral' />]}
            />
        </div>
    );
}

export default {
    title: 'Example/Video Meeting',
    component: Meeting,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta;

const Template: Story = () => {
    return <MeetingWrapper>
        <Meeting />
    </MeetingWrapper>;
};

export const GalleryView = Template.bind({});`,locationsMap:{"gallery-view":{startLoc:{col:24,line:75},endLoc:{col:1,line:79},startBody:{col:24,line:75},endBody:{col:1,line:79}}}}},title:"Example/Video Meeting",component:Me},zt=a(()=>n($t,{children:n(Me,{})}),"Template"),Kt=zt.bind({}),Bt=["GalleryView"];export{Kt as GalleryView,Bt as __namedExportsOrder,Ht as default};
//# sourceMappingURL=Gallery.stories.abfc094d.js.map
