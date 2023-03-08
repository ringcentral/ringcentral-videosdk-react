var Fe=Object.defineProperty;var i=(e,t)=>Fe(e,"name",{value:t,configurable:!0});import{r as h,j as n,b as v,F as D}from"./jsx-runtime.78e9fc05.js";import{i as Z,j as Q,k as ye,s as F,l as N,_ as f,m as xe,u as X,n as ee,o as te,p as ne,q as ze,r as We,F as be,t as Ge,I as Se,S as we,v as Ve,w as qe,O as Je,x as je,U as He,y as Be,z as Ke,B as Ue,D as S,E as Ie,H as k,J as ce,T as de,K as Ye,G as Ze,h as Qe,A as Xe,a as et,V as tt,P as nt,C as rt,R as ot,L as it,M as at,b as st}from"./index.520e25bd.js";import"./iframe.82295548.js";import"./index.a99bfeee.js";import"./index.d289d216.js";import"./en.707de12e.js";function lt(e){return Z("MuiCircularProgress",e)}i(lt,"getCircularProgressUtilityClass");Q("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const ct=["className","color","disableShrink","size","style","thickness","value","variant"];let V=i(e=>e,"_"),ue,pe,ge,me;const E=44,dt=ye(ue||(ue=V`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),ut=ye(pe||(pe=V`
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
`)),pt=i(e=>{const{classes:t,variant:r,color:s,disableShrink:d}=e,p={root:["root",r,`color${N(s)}`],svg:["svg"],circle:["circle",`circle${N(r)}`,d&&"circleDisableShrink"]};return ne(p,lt,t)},"useUtilityClasses$2"),gt=F("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${N(r.color)}`]]}})(({ownerState:e,theme:t})=>f({display:"inline-block"},e.variant==="determinate"&&{transition:t.transitions.create("transform")},e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&xe(ge||(ge=V`
      animation: ${0} 1.4s linear infinite;
    `),dt)),mt=F("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),ht=F("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${N(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>f({stroke:"currentColor"},e.variant==="determinate"&&{transition:t.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&xe(me||(me=V`
      animation: ${0} 1.4s ease-in-out infinite;
    `),ut)),ft=h.exports.forwardRef(i(function(t,r){const s=X({props:t,name:"MuiCircularProgress"}),{className:d,color:p="primary",disableShrink:a=!1,size:u=40,style:m,thickness:o=3.6,value:y=0,variant:w="indeterminate"}=s,C=ee(s,ct),x=f({},s,{color:p,disableShrink:a,size:u,thickness:o,value:y,variant:w}),b=pt(x),I={},l={},g={};if(w==="determinate"){const _=2*Math.PI*((E-o)/2);I.strokeDasharray=_.toFixed(3),g["aria-valuenow"]=Math.round(y),I.strokeDashoffset=`${((100-y)/100*_).toFixed(3)}px`,l.transform="rotate(-90deg)"}return n(gt,f({className:te(b.root,d),style:f({width:u,height:u},l,m),ownerState:x,ref:r,role:"progressbar"},g,C,{children:n(mt,{className:b.svg,ownerState:x,viewBox:`${E/2} ${E/2} ${E} ${E}`,children:n(ht,{className:b.circle,style:I,ownerState:x,cx:E,cy:E,r:(E-o)/2,fill:"none",strokeWidth:o})})}))},"CircularProgress")),vt=ft;function yt(e){return Z("MuiFormHelperText",e)}i(yt,"getFormHelperTextUtilityClasses");const xt=Q("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),he=xt;var fe;const bt=["children","className","component","disabled","error","filled","focused","margin","required","variant"],St=i(e=>{const{classes:t,contained:r,size:s,disabled:d,error:p,filled:a,focused:u,required:m}=e,o={root:["root",d&&"disabled",p&&"error",s&&`size${N(s)}`,r&&"contained",u&&"focused",a&&"filled",m&&"required"]};return ne(o,yt,t)},"useUtilityClasses$1"),wt=F("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.size&&t[`size${N(r.size)}`],r.contained&&t.contained,r.filled&&t.filled]}})(({theme:e,ownerState:t})=>f({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${he.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${he.error}`]:{color:(e.vars||e).palette.error.main}},t.size==="small"&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})),It=h.exports.forwardRef(i(function(t,r){const s=X({props:t,name:"MuiFormHelperText"}),{children:d,className:p,component:a="p"}=s,u=ee(s,bt),m=ze(),o=We({props:s,muiFormControl:m,states:["variant","size","disabled","error","filled","focused","required"]}),y=f({},s,{component:a,contained:o.variant==="filled"||o.variant==="outlined",variant:o.variant,size:o.size,disabled:o.disabled,error:o.error,filled:o.filled,focused:o.focused,required:o.required}),w=St(y);return n(wt,f({as:a,ownerState:y,className:te(w.root,p),ref:r},u,{children:d===" "?fe||(fe=n("span",{className:"notranslate",children:"\u200B"})):d}))},"FormHelperText")),Mt=It;function Et(e){return Z("MuiTextField",e)}i(Et,"getTextFieldUtilityClass");Q("MuiTextField",["root"]);const Tt=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],Rt={standard:Ve,filled:qe,outlined:Je},Ct=i(e=>{const{classes:t}=e;return ne({root:["root"]},Et,t)},"useUtilityClasses"),_t=F(be,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),kt=h.exports.forwardRef(i(function(t,r){const s=X({props:t,name:"MuiTextField"}),{autoComplete:d,autoFocus:p=!1,children:a,className:u,color:m="primary",defaultValue:o,disabled:y=!1,error:w=!1,FormHelperTextProps:C,fullWidth:x=!1,helperText:b,id:I,InputLabelProps:l,inputProps:g,InputProps:_,inputRef:A,label:P,maxRows:Te,minRows:Re,multiline:re=!1,name:Ce,onBlur:_e,onChange:ke,onFocus:Ne,placeholder:Ae,required:oe=!1,rows:Pe,select:q=!1,SelectProps:J,type:Le,value:ie,variant:z="outlined"}=s,$e=ee(s,Tt),ae=f({},s,{autoFocus:p,color:m,disabled:y,error:w,fullWidth:x,multiline:re,required:oe,select:q,variant:z}),De=Ct(ae),L={};z==="outlined"&&(l&&typeof l.shrink<"u"&&(L.notched=l.shrink),L.label=P),q&&((!J||!J.native)&&(L.id=void 0),L["aria-describedby"]=void 0);const T=Ge(I),j=b&&T?`${T}-helper-text`:void 0,se=P&&T?`${T}-label`:void 0,Oe=Rt[z],le=n(Oe,f({"aria-describedby":j,autoComplete:d,autoFocus:p,defaultValue:o,fullWidth:x,multiline:re,name:Ce,rows:Pe,maxRows:Te,minRows:Re,type:Le,value:ie,id:T,inputRef:A,onBlur:_e,onChange:ke,onFocus:Ne,placeholder:Ae,inputProps:g},L,_));return v(_t,f({className:te(De.root,u),disabled:y,error:w,fullWidth:x,ref:r,required:oe,color:m,variant:z,ownerState:ae},$e,{children:[P!=null&&P!==""&&n(Se,f({htmlFor:T,id:se},l,{children:P})),q?n(we,f({"aria-describedby":j,id:T,labelId:se,value:ie,input:le},J,{children:a})):le,b&&n(Mt,f({id:j},C,{children:b}))]}))},"TextField")),R=kt,Nt=i(({rcvEngine:e,localeConfig:t,children:r})=>n(je.Provider,{value:{rcvEngine:e,localeConfig:t},children:n(He,{children:n(Be,{children:n(Ke,{children:n(Ue,{children:r})})})})}),"RcvEngineProvider"),O=i(e=>e?localStorage:sessionStorage,"getStorage"),H="AUTH_KEY",Me="KEY_AUTH_FORM",$="MEETING_ID";function G(e,t,r=!0){if(typeof localStorage!="object"||typeof sessionStorage!="object")return t;let s;return typeof r>"u"?s=O(!0).getItem(e)||O(!1).getItem(e):s=O(r).getItem(e),s?JSON.parse(s):t}i(G,"readLocallyStored");const W=i((e,t=null,r=!0)=>{O(r).setItem(e,JSON.stringify(t))},"writeLocallyStored"),ve=i((e,t=!0)=>{O(t).setItem(e,"")},"removeLocallyStored"),c={clientId:"your clientID",clientSecret:"your client secret",jwt:"jwt string",username:"username",password:"password"};var M=(e=>(e.PASSWORD="PASSWORD",e.TOKEN="TOKEN",e))(M||{});function At(){const e=G(Me,void 0,!0);return{authType:(e==null?void 0:e.authType)||"PASSWORD",clientId:(e==null?void 0:e.clientId)||(c==null?void 0:c.clientId)||"",clientSecret:(e==null?void 0:e.clientSecret)||(c==null?void 0:c.clientSecret)||"",token:(e==null?void 0:e.token)||(c==null?void 0:c.token),username:(e==null?void 0:e.username)||(c==null?void 0:c.username),password:(e==null?void 0:e.password)||(c==null?void 0:c.password),external:(e==null?void 0:e.external)||(c==null?void 0:c.external),grantType:(e==null?void 0:e.grantType)||(c==null?void 0:c.grantType)}}i(At,"getDefaultAuthFormData");async function Pt(e){var r;(r=S.exports.RcvEngine.instance())==null||r.destroy();const t=S.exports.RcvEngine.create({enableDiscovery:!1,origin:c.origin||"https://platform.ringcentral.com",...e,external:{...e.external,...c.dev}});return e.authType===M.TOKEN?await t.setAuthToken(JSON.stringify(e.token)):await t.authorize({grantType:S.exports.GrantType.PASSWORD,username:e.username,password:e.password}),console.debug("createRcvEngine called and got: ",t),t}i(Pt,"createRcvEngine");function B({onClear:e,rcvEngine:t,onStartMeeting:r,onJoinMeeting:s}){const[d,p]=h.exports.useState(G($,void 0,!0));return n(D,{children:v(Ie,{elevation:1,style:{padding:16,display:"flex"},children:[n(R,{className:"item",label:"Meeting Id",size:"small",style:{width:300,marginRight:4},value:d,variant:"outlined",onChange:a=>p(a.target.value)}),n(k,{style:{marginRight:4},variant:"contained",onClick:()=>{s(t,d)},children:"Join"}),n(k,{style:{marginRight:4},variant:"outlined",onClick:()=>{r(t)},children:"Start a Meeting"}),n(k,{style:{marginRight:4},variant:"text",onClick:e,children:"Reset"})]})})}i(B,"StartMeeting");try{B.displayName="StartMeeting",B.__docgenInfo={description:"",displayName:"StartMeeting",props:{rcvEngine:{defaultValue:null,description:"",name:"rcvEngine",required:!0,type:{name:"RcvEngine"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},onJoinMeeting:{defaultValue:null,description:"",name:"onJoinMeeting",required:!0,type:{name:"(rcvEngine: RcvEngine, meetingId?: string | undefined) => void"}},onStartMeeting:{defaultValue:null,description:"",name:"onStartMeeting",required:!0,type:{name:"(rcvEngine: RcvEngine) => void"}}}}}catch{}function K({onSubmit:e}){const t=At(),[r,s]=h.exports.useState(JSON.stringify(t.token)),[d,p]=h.exports.useState(JSON.stringify(t.external)),[a,u]=h.exports.useState(t),m=i(()=>{const o={...a};a.authType===M.TOKEN&&r&&(o.token=JSON.parse(r)),d&&(o.external=JSON.parse(d)||{}),a.authType===M.PASSWORD&&(o.grantType="PASSWORD"),W(Me,o),e(o)},"handleSubmit");return v(D,{children:[v(be,{children:[n(Se,{children:"Auth Type"}),v(we,{label:"Auth Type",size:"small",value:a.authType,onChange:o=>u({...a,authType:o.target.value}),children:[n(ce,{value:M.PASSWORD,children:M.PASSWORD}),n(ce,{value:M.TOKEN,children:M.TOKEN})]})]}),n("div",{className:"br"}),a.authType===M.PASSWORD?v(D,{children:[n(R,{fullWidth:!0,label:"clientId",size:"small",type:"text",value:a.clientId,variant:"outlined",onChange:o=>u({...a,clientId:o.target.value})}),n("div",{className:"br"}),n(R,{fullWidth:!0,label:"clientSecret",size:"small",type:"text",value:a.clientSecret,variant:"outlined",onChange:o=>u({...a,clientSecret:o.target.value})}),n("div",{className:"br"}),n(R,{fullWidth:!0,label:"username",size:"small",type:"text",value:a.username,variant:"outlined",onChange:o=>u({...a,username:o.target.value})}),n("div",{className:"br"}),n(R,{fullWidth:!0,label:"password",size:"small",type:"text",value:a.password,variant:"outlined",onChange:o=>u({...a,password:o.target.value})})]}):v(D,{children:[n(R,{fullWidth:!0,label:"clientId",size:"small",type:"text",value:a.clientId,variant:"outlined",onChange:o=>u({...a,clientId:o.target.value})}),n("div",{className:"br"}),n(R,{fullWidth:!0,label:"clientSecret",size:"small",type:"text",value:a.clientSecret,variant:"outlined",onChange:o=>u({...a,clientSecret:o.target.value})}),n("div",{className:"br"}),n("h3",{children:"Token"}),n(de,{maxRows:20,minRows:8,style:{width:"100%"},value:r,onChange:o=>s(o.target.value)})]}),n("h3",{children:"External config"}),n(de,{maxRows:20,minRows:8,style:{width:"100%"},value:d,onChange:o=>p(o.target.value)}),n("div",{className:"br"}),n(k,{variant:"contained",onClick:m,children:"Init Config"})]})}i(K,"AuthForm");try{K.displayName="AuthForm",K.__docgenInfo={description:"",displayName:"AuthForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(authInfo: IAuth) => void"}}}}}catch{}function Lt(){const e=window.rcv;return console.debug("get rcvEngine from window and got: ",e),e}i(Lt,"getInitRcvFromWindow");function $t(e){var t;try{const r=((t=e==null?void 0:e.getMeetingController())==null?void 0:t.getMeetingState())===S.exports.RcvMeetingState.MEETING_STATE_INMEETING;return console.debug("check isInMeeting: ",r),r}catch{return!1}}i($t,"checkIsInMeeting");function Dt(e){var t;try{const r=(t=e==null?void 0:e.getMeetingController())==null?void 0:t._bridge.pins.web;return console.debug("get meeting id from from rcvEngine and got",r),r}catch{return}}i(Dt,"getMeetingId");function U({onReset:e,children:t,rcvEngine:r,meetingId:s}){return v(D,{children:[v(Ie,{elevation:1,style:{left:8,top:8,position:"absolute",zIndex:100,padding:8},children:[n("b",{children:s}),n(k,{variant:"text",onClick:e,children:"Reset"})]}),n(Nt,{localeConfig:{chat_dialog_title:"My chat"},rcvEngine:r,children:t})]})}i(U,"InMeeting");try{U.displayName="InMeeting",U.__docgenInfo={description:"",displayName:"InMeeting",props:{meetingId:{defaultValue:null,description:"",name:"meetingId",required:!0,type:{name:"string"}},rcvEngine:{defaultValue:null,description:"",name:"rcvEngine",required:!0,type:{name:"RcvEngine"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}function Y({meetingId:e,onReset:t}){return v(Ye,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"200px"},children:[n(vt,{}),v("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:8},children:[v("div",{style:{marginRight:8},children:["Joining meeting ",e?`: ${e}`:""]}),n(k,{variant:"text",onClick:t,children:"Reset"})]})]})}i(Y,"MeetingLoading");try{Y.displayName="MeetingLoading",Y.__docgenInfo={description:"",displayName:"MeetingLoading",props:{meetingId:{defaultValue:null,description:"",name:"meetingId",required:!1,type:{name:"string | undefined"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}const Ot=i(({children:e})=>{const[t,r]=h.exports.useState(Lt()),[s,d]=h.exports.useState(!1),[p,a]=h.exports.useState($t(t)),[u,m]=h.exports.useState(Dt(t)),[o,y]=h.exports.useState(window.auth);h.exports.useEffect(()=>{t&&(console.debug(`addEventListener ${S.exports.EngineEvent.MEETING_JOINED} to rcvEngine`),t.on(S.exports.EngineEvent.MEETING_JOINED,l=>{console.debug(`event ${S.exports.EngineEvent.MEETING_JOINED} triggered with data: ${l}`),m(l),a(!0),W($,l)}),console.debug(`addEventListener ${S.exports.EngineEvent.MEETING_JOINED} to rcvEngine`),t.on(S.exports.EngineEvent.MEETING_LEFT,()=>{console.debug(`event ${S.exports.EngineEvent.MEETING_LEFT} triggered`),m(""),a(!1),W($,"")}))},[t]),h.exports.useEffect(()=>{i(async()=>{if(window.rcv){console.debug("got rcvEngine from window, no need to rejoin a meeting");return}const g=G(H,void 0,!0);if(g){console.debug("got auth info from local storage, will init rcvEngine automatically"),await x(g);const _=await b(g),A=G($,void 0,!0);A&&(console.debug(`got meetingId from local storage, will rejoin meeting ${A}`),await C(_,A))}},"rejoinMeeting")().then()},[]);const w=i(async l=>{d(!0),console.debug("start meeting"),await l.startInstantMeeting(),d(!1)},"handleStartMeeting"),C=i(async(l,g)=>{if(!g){alert("Meeting id can not be empty!");return}m(g),d(!0),console.debug(`join meeting with meetingId: ${g}`),await l.joinMeeting(g),d(!1)},"handleJoinMeeting"),x=i(async l=>(window.auth=l,y(l),W(H,l,!0),l),"handleSubmitAuth"),b=i(async l=>{const g=await Pt({...l});return window.rcv=g,r(g),g},"handleInitRcv"),I=i(()=>{ve(H),ve($),t==null||t.destroy(),r(void 0),y(void 0),window.rcv=void 0,window.auth=void 0},"handleReset");if(s)return n(Y,{meetingId:u,onReset:I});if(t){if(p&&u)return n(U,{meetingId:u,rcvEngine:t,onReset:I,children:e});if(!p)return n(B,{rcvEngine:t,onClear:I,onJoinMeeting:C,onStartMeeting:w})}return o?n("p",{children:"loading..."}):n(K,{onSubmit:async l=>{await x(l),await b(l)}})},"MeetingWrapper");function Ee(){return v("div",{style:{display:"flex",width:"100%",height:"100%",flexDirection:"column",border:"1px solid #eee",boxSizing:"border-box"},children:[n(Ze,{layout:Qe.gallery,style:{flex:1}}),n(Xe,{centerActions:[n(et,{isShowLabel:!0},"audio-action"),n(tt,{isShowLabel:!0},"video-action"),n(nt,{isShowLabel:!0,onError:e=>{console.error("error happens: ",e)}},"participant-action"),n(rt,{isShowLabel:!0},"chat-action"),n(ot,{isShowLabel:!0},"record-action"),n(it,{isShowLabel:!0,onError:e=>{console.error("error happens: ",e)}},"leave-action")],leftActions:[n(at,{onError:e=>{console.error("error happens:",e)}},"meeting-info-action")],rightActions:[n(st,{text:"RingCentral"},"logo-icon")]})]})}i(Ee,"Meeting");const Ht={parameters:{storySource:{source:`import React from 'react';
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

export const GalleryView = Template.bind({});`,locationsMap:{"gallery-view":{startLoc:{col:24,line:75},endLoc:{col:1,line:79},startBody:{col:24,line:75},endBody:{col:1,line:79}}}}},title:"Example/Video Meeting",component:Ee},Ft=i(()=>n(Ot,{children:n(Ee,{})}),"Template"),Bt=Ft.bind({}),Kt=["GalleryView"];export{Bt as GalleryView,Kt as __namedExportsOrder,Ht as default};
//# sourceMappingURL=Gallery.stories.cce2deb1.js.map
