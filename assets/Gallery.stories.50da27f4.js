var Ne=Object.defineProperty;var a=(e,n)=>Ne(e,"name",{value:n,configurable:!0});import{r as v,j as t,b as h,F as M}from"./jsx-runtime.c01ebc5a.js";import{i as oe,j as ie,s as ae,k as le,_ as w,u as se,l as ce,m as Ae,n as Le,o as de,p as ue,F as pe,q as We,I as ge,S as me,r as ke,t as Oe,O as Pe,v as ze,U as Je,w as Fe,x as je,y as De,z as x,B as he,D as R,E as G,T as ee,H as Ge,J as qe,G as Ve,h as $e,A as He,a as Be,V as Ke,K as Ue,P as Ye,C as Qe,R as Xe,L as Ze,M as et,b as tt}from"./index.e1755a12.js";import"./iframe.ece1f1e3.js";import"./index.e37651a8.js";import"./index.d289d216.js";import"./en.257cfd59.js";function nt(e){return ie("MuiFormHelperText",e)}a(nt,"getFormHelperTextUtilityClasses");const rt=oe("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),te=rt;var ne;const ot=["children","className","component","disabled","error","filled","focused","margin","required","variant"],it=a(e=>{const{classes:n,contained:r,size:s,disabled:u,error:y,filled:i,focused:d,required:f}=e,p={root:["root",u&&"disabled",y&&"error",s&&`size${le(s)}`,r&&"contained",d&&"focused",i&&"filled",f&&"required"]};return ue(p,nt,n)},"useUtilityClasses$1"),at=ae("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,r.size&&n[`size${le(r.size)}`],r.contained&&n.contained,r.filled&&n.filled]}})(({theme:e,ownerState:n})=>w({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${te.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${te.error}`]:{color:(e.vars||e).palette.error.main}},n.size==="small"&&{marginTop:4},n.contained&&{marginLeft:14,marginRight:14})),lt=v.exports.forwardRef(a(function(n,r){const s=se({props:n,name:"MuiFormHelperText"}),{children:u,className:y,component:i="p"}=s,d=ce(s,ot),f=Ae(),p=Le({props:s,muiFormControl:f,states:["variant","size","disabled","error","filled","focused","required"]}),o=w({},s,{component:i,contained:p.variant==="filled"||p.variant==="outlined",variant:p.variant,size:p.size,disabled:p.disabled,error:p.error,filled:p.filled,focused:p.focused,required:p.required}),S=it(o);return t(at,w({as:i,ownerState:o,className:de(S.root,y),ref:r},d,{children:u===" "?ne||(ne=t("span",{className:"notranslate",children:"\u200B"})):u}))},"FormHelperText")),st=lt;function ct(e){return ie("MuiTextField",e)}a(ct,"getTextFieldUtilityClass");oe("MuiTextField",["root"]);const dt=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],ut={standard:ke,filled:Oe,outlined:Pe},pt=a(e=>{const{classes:n}=e;return ue({root:["root"]},ct,n)},"useUtilityClasses"),gt=ae(pe,{name:"MuiTextField",slot:"Root",overridesResolver:(e,n)=>n.root})({}),mt=v.exports.forwardRef(a(function(n,r){const s=se({props:n,name:"MuiTextField"}),{autoComplete:u,autoFocus:y=!1,children:i,className:d,color:f="primary",defaultValue:p,disabled:o=!1,error:S=!1,FormHelperTextProps:k,fullWidth:T=!1,helperText:E,id:C,InputLabelProps:c,inputProps:g,InputProps:J,inputRef:_,label:N,maxRows:fe,minRows:xe,multiline:K=!1,name:be,onBlur:we,onChange:Ie,onFocus:Se,placeholder:Te,required:U=!1,rows:Ee,select:F=!1,SelectProps:j,type:Me,value:Y,variant:O="outlined"}=s,Re=ce(s,dt),Q=w({},s,{autoFocus:y,color:f,disabled:o,error:S,fullWidth:T,multiline:K,required:U,select:F,variant:O}),Ce=pt(Q),A={};O==="outlined"&&(c&&typeof c.shrink<"u"&&(A.notched=c.shrink),A.label=N),F&&((!j||!j.native)&&(A.id=void 0),A["aria-describedby"]=void 0);const I=We(C),D=E&&I?`${I}-helper-text`:void 0,X=N&&I?`${I}-label`:void 0,_e=ut[O],Z=t(_e,w({"aria-describedby":D,autoComplete:u,autoFocus:y,defaultValue:p,fullWidth:T,multiline:K,name:be,rows:Ee,maxRows:fe,minRows:xe,type:Me,value:Y,id:I,inputRef:_,onBlur:we,onChange:Ie,onFocus:Se,placeholder:Te,inputProps:g},A,J));return h(gt,w({className:de(Ce.root,d),disabled:o,error:S,fullWidth:T,ref:r,required:U,color:f,variant:O,ownerState:Q},Re,{children:[N!=null&&N!==""&&t(ge,w({htmlFor:I,id:X},c,{children:N})),F?t(me,w({"aria-describedby":D,id:I,labelId:X,value:Y,input:Z},j,{children:i})):Z,E&&t(st,w({id:D},k,{children:E}))]}))},"TextField")),b=mt,ht=a(({rcvEngine:e,localeConfig:n,children:r})=>t(ze.Provider,{value:{rcvEngine:e,localeConfig:n},children:t(Je,{children:t(Fe,{children:t(je,{children:t(De,{children:r})})})})}),"RcvEngineProvider"),W=a(e=>e?localStorage:sessionStorage,"getStorage"),q="AUTH_KEY",ye="KEY_AUTH_FORM",L="MEETING_ID";function z(e,n,r=!0){if(typeof localStorage!="object"||typeof sessionStorage!="object")return n;let s;return typeof r>"u"?s=W(!0).getItem(e)||W(!1).getItem(e):s=W(r).getItem(e),s?JSON.parse(s):n}a(z,"readLocallyStored");const P=a((e,n=null,r=!0)=>{W(r).setItem(e,JSON.stringify(n))},"writeLocallyStored"),re=a((e,n=!0)=>{W(n).setItem(e,"")},"removeLocallyStored"),l={clientId:"",clientSecret:"",jwt:"",username:"",password:""};var m=(e=>(e.PASSWORD="PASSWORD",e.TOKEN="TOKEN",e.JWT="JWT",e))(m||{});function yt(){const e=z(ye,void 0,!0);return{authType:(e==null?void 0:e.authType)||"JWT",clientId:(e==null?void 0:e.clientId)||(l==null?void 0:l.clientId)||"",clientSecret:(e==null?void 0:e.clientSecret)||(l==null?void 0:l.clientSecret)||"",token:(e==null?void 0:e.token)||(l==null?void 0:l.token),username:(e==null?void 0:e.username)||(l==null?void 0:l.username),password:(e==null?void 0:e.password)||(l==null?void 0:l.password),jwt:(e==null?void 0:e.jwt)||(l==null?void 0:l.jwt),external:(e==null?void 0:e.external)||(l==null?void 0:l.external),grantType:(e==null?void 0:e.grantType)||(l==null?void 0:l.grantType)}}a(yt,"getDefaultAuthFormData");async function vt(e){var r;(r=x.exports.RcvEngine.instance())==null||r.destroy();const n=x.exports.RcvEngine.create({enableDiscovery:!1,origin:l.origin||"https://platform.ringcentral.com",...e,external:{...e.external,...l.dev}});return e.authType===m.TOKEN?await n.setAuthToken(JSON.stringify(e.token)):e.authType===m.JWT?await n.authorize({grantType:x.exports.GrantType.JWT,jwt:e.jwt}):await n.authorize({grantType:x.exports.GrantType.PASSWORD,username:e.username,password:e.password}),console.debug("createRcvEngine called and got: ",n),n}a(vt,"createRcvEngine");function V({onClear:e,rcvEngine:n,onStartMeeting:r,onJoinMeeting:s}){const[u,y]=v.exports.useState(z(L,void 0,!0));return t(M,{children:h(he,{elevation:1,style:{padding:16,display:"flex"},children:[t(b,{className:"item",label:"Meeting Id",size:"small",style:{width:300,marginRight:4},value:u,variant:"outlined",onChange:i=>y(i.target.value)}),t(R,{style:{marginRight:4},variant:"contained",onClick:()=>{s(n,u)},children:"Join"}),t(R,{style:{marginRight:4},variant:"outlined",onClick:()=>{r(n)},children:"Start a Meeting"}),t(R,{style:{marginRight:4},variant:"text",onClick:e,children:"Reset"})]})})}a(V,"StartMeeting");try{V.displayName="StartMeeting",V.__docgenInfo={description:"",displayName:"StartMeeting",props:{rcvEngine:{defaultValue:null,description:"",name:"rcvEngine",required:!0,type:{name:"RcvEngine"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},onJoinMeeting:{defaultValue:null,description:"",name:"onJoinMeeting",required:!0,type:{name:"(rcvEngine: RcvEngine, meetingId?: string | undefined) => void"}},onStartMeeting:{defaultValue:null,description:"",name:"onStartMeeting",required:!0,type:{name:"(rcvEngine: RcvEngine) => void"}}}}}catch{}function $({onSubmit:e}){const n=yt(),[r,s]=v.exports.useState(JSON.stringify(n.token)),[u,y]=v.exports.useState(JSON.stringify(n.external)),[i,d]=v.exports.useState(n),f=a(()=>{const o={...i};i.authType===m.TOKEN&&r&&(o.token=JSON.parse(r)),u&&(o.external=JSON.parse(u)||{}),i.authType===m.PASSWORD&&(o.grantType="PASSWORD"),P(ye,o),e(o)},"handleSubmit"),p=a(()=>{switch(i.authType){case m.TOKEN:return h(M,{children:[t(b,{fullWidth:!0,label:"clientId",placeholder:"your clientID",size:"small",type:"text",value:i.clientId,variant:"outlined",onChange:o=>d({...i,clientId:o.target.value})}),t("div",{className:"br"}),t(b,{fullWidth:!0,label:"clientSecret",placeholder:"your client secret",size:"small",type:"text",value:i.clientSecret,variant:"outlined",onChange:o=>d({...i,clientSecret:o.target.value})}),t("div",{className:"br"}),t("h3",{children:"Token"}),t(ee,{maxRows:20,minRows:8,placeholder:"your token",style:{width:"100%"},value:r,onChange:o=>s(o.target.value)})]});case m.JWT:return h(M,{children:[t(b,{fullWidth:!0,label:"clientId",placeholder:"your clientID",size:"small",type:"text",value:i.clientId,variant:"outlined",onChange:o=>d({...i,clientId:o.target.value})}),t("div",{className:"br"}),t(b,{fullWidth:!0,label:"clientSecret",placeholder:"your client secret",size:"small",type:"text",value:i.clientSecret,variant:"outlined",onChange:o=>d({...i,clientSecret:o.target.value})}),t("div",{className:"br"}),t(b,{fullWidth:!0,label:"JWT",placeholder:"your jwt",size:"small",type:"text",value:i.jwt,variant:"outlined",onChange:o=>d({...i,jwt:o.target.value})})]});case m.PASSWORD:return h(M,{children:[t(b,{fullWidth:!0,label:"clientId",placeholder:"your clientID",size:"small",type:"text",value:i.clientId,variant:"outlined",onChange:o=>d({...i,clientId:o.target.value})}),t("div",{className:"br"}),t(b,{fullWidth:!0,label:"clientSecret",placeholder:"your client secret",size:"small",type:"text",value:i.clientSecret,variant:"outlined",onChange:o=>d({...i,clientSecret:o.target.value})}),t("div",{className:"br"}),t(b,{fullWidth:!0,label:"username",placeholder:"your username",size:"small",type:"text",value:i.username,variant:"outlined",onChange:o=>d({...i,username:o.target.value})}),t("div",{className:"br"}),t(b,{fullWidth:!0,label:"password",placeholder:"your password",size:"small",type:"text",value:i.password,variant:"outlined",onChange:o=>d({...i,password:o.target.value})})]});default:return[]}},"renderAuthForm");return h(M,{children:[h(pe,{children:[t(ge,{children:"Auth Type"}),h(me,{label:"Auth Type",size:"small",value:i.authType,onChange:o=>d({...i,authType:o.target.value}),children:[t(G,{value:m.JWT,children:m.JWT}),t(G,{value:m.PASSWORD,children:m.PASSWORD}),t(G,{value:m.TOKEN,children:m.TOKEN})]})]}),t("div",{className:"br"}),p(),t("h3",{children:"External config"}),t(ee,{maxRows:20,minRows:8,style:{width:"100%"},value:u,onChange:o=>y(o.target.value)}),t("div",{className:"br"}),t(R,{variant:"contained",onClick:f,children:"Init Config"})]})}a($,"AuthForm");try{$.displayName="AuthForm",$.__docgenInfo={description:"",displayName:"AuthForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(authInfo: IAuth) => void"}}}}}catch{}function ft(){const e=window.rcv;return console.debug("get rcvEngine from window and got: ",e),e}a(ft,"getInitRcvFromWindow");function xt(e){var n;try{const r=((n=e==null?void 0:e.getMeetingController())==null?void 0:n.getMeetingState())===x.exports.RcvMeetingState.MEETING_STATE_INMEETING;return console.debug("check isInMeeting: ",r),r}catch{return!1}}a(xt,"checkIsInMeeting");function bt(e){var n;try{const r=(n=e==null?void 0:e.getMeetingController())==null?void 0:n._bridge.pins.web;return console.debug("get meeting id from from rcvEngine and got",r),r}catch{return}}a(bt,"getMeetingId");function H({onReset:e,children:n,rcvEngine:r,meetingId:s}){return h(M,{children:[h(he,{elevation:1,style:{left:8,top:8,position:"absolute",zIndex:100,padding:8},children:[t("b",{children:s}),t(R,{variant:"text",onClick:e,children:"Reset"})]}),t(ht,{localeConfig:{chat_dialog_title:"My chat"},rcvEngine:r,children:n})]})}a(H,"InMeeting");try{H.displayName="InMeeting",H.__docgenInfo={description:"",displayName:"InMeeting",props:{meetingId:{defaultValue:null,description:"",name:"meetingId",required:!0,type:{name:"string"}},rcvEngine:{defaultValue:null,description:"",name:"rcvEngine",required:!0,type:{name:"RcvEngine"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}function B({meetingId:e,onReset:n}){return h(Ge,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"200px"},children:[t(qe,{}),h("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:8},children:[h("div",{style:{marginRight:8},children:["Joining meeting ",e?`: ${e}`:""]}),t(R,{variant:"text",onClick:n,children:"Reset"})]})]})}a(B,"MeetingLoading");try{B.displayName="MeetingLoading",B.__docgenInfo={description:"",displayName:"MeetingLoading",props:{meetingId:{defaultValue:null,description:"",name:"meetingId",required:!1,type:{name:"string | undefined"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}const wt=a(({children:e})=>{const[n,r]=v.exports.useState(ft()),[s,u]=v.exports.useState(!1),[y,i]=v.exports.useState(xt(n)),[d,f]=v.exports.useState(bt(n)),[p,o]=v.exports.useState(window.auth);v.exports.useEffect(()=>{n&&(console.debug(`addEventListener ${x.exports.EngineEvent.MEETING_JOINED} to rcvEngine`),n.on(x.exports.EngineEvent.MEETING_JOINED,c=>{console.debug(`event ${x.exports.EngineEvent.MEETING_JOINED} triggered with data: ${c}`),f(c),i(!0),P(L,c)}),console.debug(`addEventListener ${x.exports.EngineEvent.MEETING_JOINED} to rcvEngine`),n.on(x.exports.EngineEvent.MEETING_LEFT,()=>{console.debug(`event ${x.exports.EngineEvent.MEETING_LEFT} triggered`),f(""),i(!1),P(L,"")}))},[n]),v.exports.useEffect(()=>{a(async()=>{if(window.rcv){console.debug("got rcvEngine from window, no need to rejoin a meeting");return}const g=z(q,void 0,!0);if(g){console.debug("got auth info from local storage, will init rcvEngine automatically"),await T(g);const J=await E(g),_=z(L,void 0,!0);_&&(console.debug(`got meetingId from local storage, will rejoin meeting ${_}`),await k(J,_))}},"rejoinMeeting")().then()},[]);const S=a(async c=>{u(!0),console.debug("start meeting"),await c.startInstantMeeting(),u(!1)},"handleStartMeeting"),k=a(async(c,g)=>{if(!g){alert("Meeting id can not be empty!");return}f(g),u(!0),console.debug(`join meeting with meetingId: ${g}`),await c.joinMeeting(g),u(!1)},"handleJoinMeeting"),T=a(async c=>(window.auth=c,o(c),P(q,c,!0),c),"handleSubmitAuth"),E=a(async c=>{const g=await vt({...c});return window.rcv=g,r(g),g},"handleInitRcv"),C=a(()=>{re(q),re(L),n==null||n.destroy(),r(void 0),o(void 0),window.rcv=void 0,window.auth=void 0},"handleReset");if(s)return t(B,{meetingId:d,onReset:C});if(n){if(y&&d)return t(H,{meetingId:d,rcvEngine:n,onReset:C,children:e});if(!y)return t(V,{rcvEngine:n,onClear:C,onJoinMeeting:k,onStartMeeting:S})}return p?t("p",{children:"loading..."}):t($,{onSubmit:async c=>{await T(c),await E(c)}})},"MeetingWrapper");function ve(){return h("div",{style:{display:"flex",width:"100%",height:"100%",flexDirection:"column",border:"1px solid #eee",boxSizing:"border-box"},children:[t(Ve,{layout:$e.gallery,style:{flex:1}}),t(He,{centerActions:[t(Be,{isShowLabel:!0},"audio-action"),t(Ke,{isShowLabel:!0},"video-action"),t(Ue,{isShowLabel:!0},"screen-sharing-action"),t(Ye,{isShowLabel:!0,onError:e=>{console.error("error happens: ",e)}},"participant-action"),t(Qe,{isShowLabel:!0},"chat-action"),t(Xe,{isShowLabel:!0},"record-action"),t(Ze,{isShowLabel:!0,onError:e=>{console.error("error happens: ",e)}},"leave-action")],leftActions:[t(et,{onError:e=>{console.error("error happens:",e)}},"meeting-info-action")],rightActions:[t(tt,{text:"RingCentral"},"logo-icon")]})]})}a(ve,"Meeting");const Nt={parameters:{storySource:{source:`import React from 'react';
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
    ScreenSharingAction,
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
                    <ScreenSharingAction isShowLabel={true} key={'screen-sharing-action'} />,
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

export const GalleryView = Template.bind({});
`,locationsMap:{"gallery-view":{startLoc:{col:24,line:77},endLoc:{col:1,line:81},startBody:{col:24,line:77},endBody:{col:1,line:81}}}}},title:"Example/Video Meeting",component:ve},It=a(()=>t(wt,{children:t(ve,{})}),"Template"),At=It.bind({}),Lt=["GalleryView"];export{At as GalleryView,Lt as __namedExportsOrder,Nt as default};
//# sourceMappingURL=Gallery.stories.50da27f4.js.map