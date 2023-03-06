var Fe=Object.defineProperty;var i=(e,t)=>Fe(e,"name",{value:t,configurable:!0});import{r as f,j as n,b as y,F as D}from"./jsx-runtime.a8940ecc.js";import{f as Z,g as X,T as ve,h as F,j as N,b as h,U as xe,l as Q,_ as ee,c as te,o as ne,V as We,W as ze,X as be,n as Ge,Y as Se,Z as we,$ as Ve,a0 as qe,a1 as Je,a2 as je,a3 as He,a4 as Be,a5 as Ue,a6 as Ke,w as S,k as Ie,L as k,a7 as ce,a8 as de,N as Ye,S as Ze,P as Xe,R as Qe,M as et}from"./index.642da789.js";import{B as tt,A as nt,a as rt,V as ot,C as it,L as at,b as st}from"./index.61f92d32.js";import"./iframe.7cb325b6.js";import"./index.e456c442.js";import"./index.d289d216.js";import"./en.707de12e.js";import"./useVideoDevices.daf324ea.js";function lt(e){return Z("MuiCircularProgress",e)}i(lt,"getCircularProgressUtilityClass");X("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const ct=["className","color","disableShrink","size","style","thickness","value","variant"];let V=i(e=>e,"_"),ue,pe,ge,me;const T=44,dt=ve(ue||(ue=V`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),ut=ve(pe||(pe=V`
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
`)),pt=i(e=>{const{classes:t,variant:r,color:s,disableShrink:d}=e,p={root:["root",r,`color${N(s)}`],svg:["svg"],circle:["circle",`circle${N(r)}`,d&&"circleDisableShrink"]};return ne(p,lt,t)},"useUtilityClasses$2"),gt=F("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${N(r.color)}`]]}})(({ownerState:e,theme:t})=>h({display:"inline-block"},e.variant==="determinate"&&{transition:t.transitions.create("transform")},e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&xe(ge||(ge=V`
      animation: ${0} 1.4s linear infinite;
    `),dt)),mt=F("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),ft=F("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${N(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>h({stroke:"currentColor"},e.variant==="determinate"&&{transition:t.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&xe(me||(me=V`
      animation: ${0} 1.4s ease-in-out infinite;
    `),ut)),ht=f.exports.forwardRef(i(function(t,r){const s=Q({props:t,name:"MuiCircularProgress"}),{className:d,color:p="primary",disableShrink:a=!1,size:u=40,style:m,thickness:o=3.6,value:v=0,variant:w="indeterminate"}=s,C=ee(s,ct),x=h({},s,{color:p,disableShrink:a,size:u,thickness:o,value:v,variant:w}),b=pt(x),I={},l={},g={};if(w==="determinate"){const _=2*Math.PI*((T-o)/2);I.strokeDasharray=_.toFixed(3),g["aria-valuenow"]=Math.round(v),I.strokeDashoffset=`${((100-v)/100*_).toFixed(3)}px`,l.transform="rotate(-90deg)"}return n(gt,h({className:te(b.root,d),style:h({width:u,height:u},l,m),ownerState:x,ref:r,role:"progressbar"},g,C,{children:n(mt,{className:b.svg,ownerState:x,viewBox:`${T/2} ${T/2} ${T} ${T}`,children:n(ft,{className:b.circle,style:I,ownerState:x,cx:T,cy:T,r:(T-o)/2,fill:"none",strokeWidth:o})})}))},"CircularProgress")),yt=ht;function vt(e){return Z("MuiFormHelperText",e)}i(vt,"getFormHelperTextUtilityClasses");const xt=X("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),fe=xt;var he;const bt=["children","className","component","disabled","error","filled","focused","margin","required","variant"],St=i(e=>{const{classes:t,contained:r,size:s,disabled:d,error:p,filled:a,focused:u,required:m}=e,o={root:["root",d&&"disabled",p&&"error",s&&`size${N(s)}`,r&&"contained",u&&"focused",a&&"filled",m&&"required"]};return ne(o,vt,t)},"useUtilityClasses$1"),wt=F("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.size&&t[`size${N(r.size)}`],r.contained&&t.contained,r.filled&&t.filled]}})(({theme:e,ownerState:t})=>h({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${fe.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${fe.error}`]:{color:(e.vars||e).palette.error.main}},t.size==="small"&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})),It=f.exports.forwardRef(i(function(t,r){const s=Q({props:t,name:"MuiFormHelperText"}),{children:d,className:p,component:a="p"}=s,u=ee(s,bt),m=We(),o=ze({props:s,muiFormControl:m,states:["variant","size","disabled","error","filled","focused","required"]}),v=h({},s,{component:a,contained:o.variant==="filled"||o.variant==="outlined",variant:o.variant,size:o.size,disabled:o.disabled,error:o.error,filled:o.filled,focused:o.focused,required:o.required}),w=St(v);return n(wt,h({as:a,ownerState:v,className:te(w.root,p),ref:r},u,{children:d===" "?he||(he=n("span",{className:"notranslate",children:"\u200B"})):d}))},"FormHelperText")),Mt=It;function Tt(e){return Z("MuiTextField",e)}i(Tt,"getTextFieldUtilityClass");X("MuiTextField",["root"]);const Et=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],Rt={standard:Ve,filled:qe,outlined:Je},Ct=i(e=>{const{classes:t}=e;return ne({root:["root"]},Tt,t)},"useUtilityClasses"),_t=F(be,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),kt=f.exports.forwardRef(i(function(t,r){const s=Q({props:t,name:"MuiTextField"}),{autoComplete:d,autoFocus:p=!1,children:a,className:u,color:m="primary",defaultValue:o,disabled:v=!1,error:w=!1,FormHelperTextProps:C,fullWidth:x=!1,helperText:b,id:I,InputLabelProps:l,inputProps:g,InputProps:_,inputRef:A,label:P,maxRows:Ee,minRows:Re,multiline:re=!1,name:Ce,onBlur:_e,onChange:ke,onFocus:Ne,placeholder:Ae,required:oe=!1,rows:Pe,select:q=!1,SelectProps:J,type:Le,value:ie,variant:W="outlined"}=s,$e=ee(s,Et),ae=h({},s,{autoFocus:p,color:m,disabled:v,error:w,fullWidth:x,multiline:re,required:oe,select:q,variant:W}),De=Ct(ae),L={};W==="outlined"&&(l&&typeof l.shrink<"u"&&(L.notched=l.shrink),L.label=P),q&&((!J||!J.native)&&(L.id=void 0),L["aria-describedby"]=void 0);const E=Ge(I),j=b&&E?`${E}-helper-text`:void 0,se=P&&E?`${E}-label`:void 0,Oe=Rt[W],le=n(Oe,h({"aria-describedby":j,autoComplete:d,autoFocus:p,defaultValue:o,fullWidth:x,multiline:re,name:Ce,rows:Pe,maxRows:Ee,minRows:Re,type:Le,value:ie,id:E,inputRef:A,onBlur:_e,onChange:ke,onFocus:Ne,placeholder:Ae,inputProps:g},L,_));return y(_t,h({className:te(De.root,u),disabled:v,error:w,fullWidth:x,ref:r,required:oe,color:m,variant:W,ownerState:ae},$e,{children:[P!=null&&P!==""&&n(Se,h({htmlFor:E,id:se},l,{children:P})),q?n(we,h({"aria-describedby":j,id:E,labelId:se,value:ie,input:le},J,{children:a})):le,b&&n(Mt,h({id:j},C,{children:b}))]}))},"TextField")),R=kt,Nt=i(({rcvEngine:e,localeConfig:t,children:r})=>n(je.Provider,{value:{rcvEngine:e,localeConfig:t},children:n(He,{children:n(Be,{children:n(Ue,{children:n(Ke,{children:r})})})})}),"RcvEngineProvider"),O=i(e=>e?localStorage:sessionStorage,"getStorage"),H="AUTH_KEY",Me="KEY_AUTH_FORM",$="MEETING_ID";function G(e,t,r=!0){if(typeof localStorage!="object"||typeof sessionStorage!="object")return t;let s;return typeof r>"u"?s=O(!0).getItem(e)||O(!1).getItem(e):s=O(r).getItem(e),s?JSON.parse(s):t}i(G,"readLocallyStored");const z=i((e,t=null,r=!0)=>{O(r).setItem(e,JSON.stringify(t))},"writeLocallyStored"),ye=i((e,t=!0)=>{O(t).setItem(e,"")},"removeLocallyStored"),c={clientId:"your clientID",clientSecret:"your client secret",jwt:"jwt string",username:"username",password:"password"};var M=(e=>(e.PASSWORD="PASSWORD",e.TOKEN="TOKEN",e))(M||{});function At(){const e=G(Me,void 0,!0);return{authType:(e==null?void 0:e.authType)||"PASSWORD",clientId:(e==null?void 0:e.clientId)||(c==null?void 0:c.clientId)||"",clientSecret:(e==null?void 0:e.clientSecret)||(c==null?void 0:c.clientSecret)||"",token:(e==null?void 0:e.token)||(c==null?void 0:c.token),username:(e==null?void 0:e.username)||(c==null?void 0:c.username),password:(e==null?void 0:e.password)||(c==null?void 0:c.password),external:(e==null?void 0:e.external)||(c==null?void 0:c.external),grantType:(e==null?void 0:e.grantType)||(c==null?void 0:c.grantType)}}i(At,"getDefaultAuthFormData");async function Pt(e){var r;(r=S.exports.RcvEngine.instance())==null||r.destroy();const t=S.exports.RcvEngine.create({enableDiscovery:!1,origin:c.origin||"https://platform.ringcentral.com",...e,external:{...e.external,...c.dev}});return e.authType===M.TOKEN?await t.setAuthToken(JSON.stringify(e.token)):await t.authorize({grantType:S.exports.GrantType.PASSWORD,username:e.username,password:e.password}),console.debug("createRcvEngine called and got: ",t),t}i(Pt,"createRcvEngine");function B({onClear:e,rcvEngine:t,onStartMeeting:r,onJoinMeeting:s}){const[d,p]=f.exports.useState(G($,void 0,!0));return n(D,{children:y(Ie,{elevation:1,style:{padding:16,display:"flex"},children:[n(R,{className:"item",label:"Meeting Id",size:"small",style:{width:300,marginRight:4},value:d,variant:"outlined",onChange:a=>p(a.target.value)}),n(k,{style:{marginRight:4},variant:"contained",onClick:()=>{s(t,d)},children:"Join"}),n(k,{style:{marginRight:4},variant:"outlined",onClick:()=>{r(t)},children:"Start a Meeting"}),n(k,{style:{marginRight:4},variant:"text",onClick:e,children:"Reset"})]})})}i(B,"StartMeeting");try{B.displayName="StartMeeting",B.__docgenInfo={description:"",displayName:"StartMeeting",props:{rcvEngine:{defaultValue:null,description:"",name:"rcvEngine",required:!0,type:{name:"RcvEngine"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},onJoinMeeting:{defaultValue:null,description:"",name:"onJoinMeeting",required:!0,type:{name:"(rcvEngine: RcvEngine, meetingId?: string | undefined) => void"}},onStartMeeting:{defaultValue:null,description:"",name:"onStartMeeting",required:!0,type:{name:"(rcvEngine: RcvEngine) => void"}}}}}catch{}function U({onSubmit:e}){const t=At(),[r,s]=f.exports.useState(JSON.stringify(t.token)),[d,p]=f.exports.useState(JSON.stringify(t.external)),[a,u]=f.exports.useState(t),m=i(()=>{const o={...a};a.authType===M.TOKEN&&r&&(o.token=JSON.parse(r)),d&&(o.external=JSON.parse(d)||{}),a.authType===M.PASSWORD&&(o.grantType="PASSWORD"),z(Me,o),e(o)},"handleSubmit");return y(D,{children:[y(be,{children:[n(Se,{children:"Auth Type"}),y(we,{label:"Auth Type",size:"small",value:a.authType,onChange:o=>u({...a,authType:o.target.value}),children:[n(ce,{value:M.PASSWORD,children:M.PASSWORD}),n(ce,{value:M.TOKEN,children:M.TOKEN})]})]}),n("div",{className:"br"}),a.authType===M.PASSWORD?y(D,{children:[n(R,{fullWidth:!0,label:"clientId",size:"small",type:"text",value:a.clientId,variant:"outlined",onChange:o=>u({...a,clientId:o.target.value})}),n("div",{className:"br"}),n(R,{fullWidth:!0,label:"clientSecret",size:"small",type:"text",value:a.clientSecret,variant:"outlined",onChange:o=>u({...a,clientSecret:o.target.value})}),n("div",{className:"br"}),n(R,{fullWidth:!0,label:"username",size:"small",type:"text",value:a.username,variant:"outlined",onChange:o=>u({...a,username:o.target.value})}),n("div",{className:"br"}),n(R,{fullWidth:!0,label:"password",size:"small",type:"text",value:a.password,variant:"outlined",onChange:o=>u({...a,password:o.target.value})})]}):y(D,{children:[n(R,{fullWidth:!0,label:"clientId",size:"small",type:"text",value:a.clientId,variant:"outlined",onChange:o=>u({...a,clientId:o.target.value})}),n("div",{className:"br"}),n(R,{fullWidth:!0,label:"clientSecret",size:"small",type:"text",value:a.clientSecret,variant:"outlined",onChange:o=>u({...a,clientSecret:o.target.value})}),n("div",{className:"br"}),n("h3",{children:"Token"}),n(de,{maxRows:20,minRows:8,style:{width:"100%"},value:r,onChange:o=>s(o.target.value)})]}),n("h3",{children:"External config"}),n(de,{maxRows:20,minRows:8,style:{width:"100%"},value:d,onChange:o=>p(o.target.value)}),n("div",{className:"br"}),n(k,{variant:"contained",onClick:m,children:"Init Config"})]})}i(U,"AuthForm");try{U.displayName="AuthForm",U.__docgenInfo={description:"",displayName:"AuthForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(authInfo: IAuth) => void"}}}}}catch{}function Lt(){const e=window.rcv;return console.debug("get rcvEngine from window and got: ",e),e}i(Lt,"getInitRcvFromWindow");function $t(e){var t;try{const r=((t=e==null?void 0:e.getMeetingController())==null?void 0:t.getMeetingState())===S.exports.RcvMeetingState.MEETING_STATE_INMEETING;return console.debug("check isInMeeting: ",r),r}catch{return!1}}i($t,"checkIsInMeeting");function Dt(e){var t;try{const r=(t=e==null?void 0:e.getMeetingController())==null?void 0:t._bridge.pins.web;return console.debug("get meeting id from from rcvEngine and got",r),r}catch{return}}i(Dt,"getMeetingId");function K({onReset:e,children:t,rcvEngine:r,meetingId:s}){return y(D,{children:[y(Ie,{elevation:1,style:{left:8,top:8,position:"absolute",zIndex:100,padding:8},children:[n("b",{children:s}),n(k,{variant:"text",onClick:e,children:"Reset"})]}),n(Nt,{localeConfig:{chat_dialog_title:"My chat"},rcvEngine:r,children:t})]})}i(K,"InMeeting");try{K.displayName="InMeeting",K.__docgenInfo={description:"",displayName:"InMeeting",props:{meetingId:{defaultValue:null,description:"",name:"meetingId",required:!0,type:{name:"string"}},rcvEngine:{defaultValue:null,description:"",name:"rcvEngine",required:!0,type:{name:"RcvEngine"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}function Y({meetingId:e,onReset:t}){return y(tt,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"200px"},children:[n(yt,{}),y("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:8},children:[y("div",{style:{marginRight:8},children:["Joining meeting ",e?`: ${e}`:""]}),n(k,{variant:"text",onClick:t,children:"Reset"})]})]})}i(Y,"MeetingLoading");try{Y.displayName="MeetingLoading",Y.__docgenInfo={description:"",displayName:"MeetingLoading",props:{meetingId:{defaultValue:null,description:"",name:"meetingId",required:!1,type:{name:"string | undefined"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}const Ot=i(({children:e})=>{const[t,r]=f.exports.useState(Lt()),[s,d]=f.exports.useState(!1),[p,a]=f.exports.useState($t(t)),[u,m]=f.exports.useState(Dt(t)),[o,v]=f.exports.useState(window.auth);f.exports.useEffect(()=>{t&&(console.debug(`addEventListener ${S.exports.EngineEvent.MEETING_JOINED} to rcvEngine`),t.on(S.exports.EngineEvent.MEETING_JOINED,l=>{console.debug(`event ${S.exports.EngineEvent.MEETING_JOINED} triggered with data: ${l}`),m(l),a(!0),z($,l)}),console.debug(`addEventListener ${S.exports.EngineEvent.MEETING_JOINED} to rcvEngine`),t.on(S.exports.EngineEvent.MEETING_LEFT,()=>{console.debug(`event ${S.exports.EngineEvent.MEETING_LEFT} triggered`),m(""),a(!1),z($,"")}))},[t]),f.exports.useEffect(()=>{i(async()=>{if(window.rcv){console.debug("got rcvEngine from window, no need to rejoin a meeting");return}const g=G(H,void 0,!0);if(g){console.debug("got auth info from local storage, will init rcvEngine automatically"),await x(g);const _=await b(g),A=G($,void 0,!0);A&&(console.debug(`got meetingId from local storage, will rejoin meeting ${A}`),await C(_,A))}},"rejoinMeeting")().then()},[]);const w=i(async l=>{d(!0),console.debug("start meeting"),await l.startInstantMeeting(),d(!1)},"handleStartMeeting"),C=i(async(l,g)=>{if(!g){alert("Meeting id can not be empty!");return}m(g),d(!0),console.debug(`join meeting with meetingId: ${g}`),await l.joinMeeting(g),d(!1)},"handleJoinMeeting"),x=i(async l=>(window.auth=l,v(l),z(H,l,!0),l),"handleSubmitAuth"),b=i(async l=>{const g=await Pt({...l});return window.rcv=g,r(g),g},"handleInitRcv"),I=i(()=>{ye(H),ye($),t==null||t.destroy(),r(void 0),v(void 0),window.rcv=void 0,window.auth=void 0},"handleReset");if(s)return n(Y,{meetingId:u,onReset:I});if(t){if(p&&u)return n(K,{meetingId:u,rcvEngine:t,onReset:I,children:e});if(!p)return n(B,{rcvEngine:t,onClear:I,onJoinMeeting:C,onStartMeeting:w})}return o?null:n(U,{onSubmit:async l=>{await x(l),await b(l)}})},"MeetingWrapper");function Te(){return y("div",{style:{display:"flex",width:"100%",height:"100%",flexDirection:"column",border:"1px solid #eee",boxSizing:"border-box"},children:[n(Ye,{layout:Ze.gallery,style:{flex:1}}),n(nt,{centerActions:[n(rt,{isShowLabel:!0},"audio-action"),n(ot,{isShowLabel:!0},"video-action"),n(Xe,{isShowLabel:!0,onError:e=>{console.error("error happens: ",e)}},"participant-action"),n(it,{isShowLabel:!0},"chat-action"),n(Qe,{isShowLabel:!0},"record-action"),n(at,{isShowLabel:!0,onError:e=>{console.error("error happens: ",e)}},"leave-action")],leftActions:[n(et,{onError:e=>{console.error("error happens:",e)}},"meeting-info-action")],rightActions:[n(st,{text:"RingCentral"},"logo-icon")]})]})}i(Te,"Meeting");const Ut={parameters:{storySource:{source:`import React from 'react';
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
    argTypes: {},
} as Meta;

const Template: Story = () => {
    return <MeetingWrapper>
        <Meeting />
    </MeetingWrapper>;
};

export const GalleryView = Template.bind({});
`,locationsMap:{"gallery-view":{startLoc:{col:24,line:76},endLoc:{col:1,line:80},startBody:{col:24,line:76},endBody:{col:1,line:80}}}}},title:"Example/Video Meeting",component:Te,argTypes:{}},Ft=i(()=>n(Ot,{children:n(Te,{})}),"Template"),Kt=Ft.bind({}),Yt=["GalleryView"];export{Kt as GalleryView,Yt as __namedExportsOrder,Ut as default};
//# sourceMappingURL=Gallery.stories.0ace4c5e.js.map
