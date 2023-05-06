var Z=Object.defineProperty;var a=(e,n)=>Z(e,"name",{value:n,configurable:!0});import{r as g,a as F,j as t,F as x,b as m}from"./jsx-runtime.94e53746.js";import{u as ee,l as te,m as ne,n as ie,U as oe,o as re,p as ae,q as se,r as w,s as $,T as S,B as I,F as le,t as ce,v as de,w as N,x as z,y as ue,z as pe,G as ge,k as he,A as ye,a as me,V as ve,S as Se,I as V,P as we,C as K,R as Q,d as U,c as fe,e as be,L as xe,M as Ie,b as Ee}from"./index.65fe6d4e.js";import"./iframe.f03a9731.js";import"./index.d289d216.js";import"./index.2003fc8d.js";import"./en.4f52dd31.js";function Me(e,n,i,l,d){const[h,r]=g.exports.useState(()=>d&&i?i(e).matches:l?l(e).matches:n);return ne(()=>{let c=!0;if(!i)return;const u=i(e),f=a(()=>{c&&r(u.matches)},"updateMatch");return f(),u.addListener(f),()=>{c=!1,u.removeListener(f)}},[e,i]),h}a(Me,"useMediaQueryOld");const Y=F["useSyncExternalStore"];function Te(e,n,i,l,d){const h=g.exports.useCallback(()=>n,[n]),r=g.exports.useMemo(()=>{if(d&&i)return()=>i(e).matches;if(l!==null){const{matches:o}=l(e);return()=>o}return h},[h,e,l,d,i]),[c,u]=g.exports.useMemo(()=>{if(i===null)return[h,()=>()=>{}];const o=i(e);return[()=>o.matches,M=>(o.addListener(M),()=>{o.removeListener(M)})]},[h,i,e]);return Y(u,c,r)}a(Te,"useMediaQueryNew");function Ae(e,n={}){const i=ee(),l=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:d=!1,matchMedia:h=l?window.matchMedia:null,ssrMatchMedia:r=null,noSsr:c=!1}=te({name:"MuiUseMediaQuery",props:n,theme:i});let u=typeof e=="function"?e(i):e;return u=u.replace(/^@media( ?)/m,""),(Y!==void 0?Te:Me)(u,d,h,r,c)}a(Ae,"useMediaQuery");const Le=a(({rcvEngine:e,localeConfig:n,waitingRoomContent:i,onError:l,children:d})=>t(ie.Provider,{value:{rcvEngine:e,localeConfig:n,waitingRoomContent:i,onError:l},children:t(oe,{children:t(re,{children:t(ae,{children:t(se,{children:d})})})})}),"RcvEngineProvider"),L=a(e=>e?localStorage:sessionStorage,"getStorage"),W="AUTH_KEY",q="KEY_AUTH_FORM",A="MEETING_ID",C="MEETING_PASSWORD";function E(e,n,i=!0){if(typeof localStorage!="object"||typeof sessionStorage!="object")return n;let l;return typeof i>"u"?l=L(!0).getItem(e)||L(!1).getItem(e):l=L(i).getItem(e),l?JSON.parse(l):n}a(E,"readLocallyStored");const b=a((e,n=null,i=!0)=>{L(i).setItem(e,JSON.stringify(n))},"writeLocallyStored"),B=a((e,n=!0)=>{L(n).setItem(e,"")},"removeLocallyStored"),s={clientId:"",clientSecret:"",jwt:"",username:"",password:""};var y=(e=>(e.PASSWORD="PASSWORD",e.TOKEN="TOKEN",e.JWT="JWT",e))(y||{});function Ce(){const e=E(q,void 0,!0);return{authType:(e==null?void 0:e.authType)||"JWT",clientId:(e==null?void 0:e.clientId)||(s==null?void 0:s.clientId)||"",clientSecret:(e==null?void 0:e.clientSecret)||(s==null?void 0:s.clientSecret)||"",token:(e==null?void 0:e.token)||(s==null?void 0:s.token),username:(e==null?void 0:e.username)||(s==null?void 0:s.username),password:(e==null?void 0:e.password)||(s==null?void 0:s.password),jwt:(e==null?void 0:e.jwt)||(s==null?void 0:s.jwt),external:(e==null?void 0:e.external)||(s==null?void 0:s.external),grantType:(e==null?void 0:e.grantType)||(s==null?void 0:s.grantType)}}a(Ce,"getDefaultAuthFormData");async function Re(e){var i;(i=w.exports.RcvEngine.instance())==null||i.destroy();const n=w.exports.RcvEngine.create({enableDiscovery:!1,origin:s.origin||"https://platform.ringcentral.com",...e,external:{...e.external,...s.dev}});return e.authType===y.TOKEN?await n.setAuthToken(JSON.stringify(e.token)):e.authType===y.JWT?await n.authorize({grantType:w.exports.GrantType.JWT,jwt:e.jwt}):await n.authorize({grantType:w.exports.GrantType.PASSWORD,username:e.username,password:e.password}),console.debug("createRcvEngine called and got: ",n),n}a(Re,"createRcvEngine");function k({onClear:e,rcvEngine:n,onStartMeeting:i,onJoinMeeting:l}){const[d,h]=g.exports.useState(E(A,void 0,!0)),[r,c]=g.exports.useState(E(C,void 0,!0));return t(x,{children:m($,{elevation:1,style:{padding:16,display:"flex"},children:[t(S,{className:"item",label:"Meeting Id",size:"small",style:{width:200,marginRight:4},value:d,variant:"outlined",onChange:u=>h(u.target.value)}),t(S,{className:"item",label:"Password",size:"small",style:{width:200,marginRight:4},value:r,variant:"outlined",onChange:u=>c(u.target.value)}),t(I,{style:{marginRight:4},variant:"contained",onClick:()=>{l(n,d,r)},children:"Join"}),t(I,{style:{marginRight:4},variant:"outlined",onClick:()=>{i(n)},children:"Start a Meeting"}),t(I,{style:{marginRight:4},variant:"text",onClick:e,children:"Reset"})]})})}a(k,"StartMeeting");try{k.displayName="StartMeeting",k.__docgenInfo={description:"",displayName:"StartMeeting",props:{rcvEngine:{defaultValue:null,description:"",name:"rcvEngine",required:!0,type:{name:"RcvEngine"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},onJoinMeeting:{defaultValue:null,description:"",name:"onJoinMeeting",required:!0,type:{name:"(rcvEngine: RcvEngine, meetingId?: string | undefined, password?: string | undefined) => void"}},onStartMeeting:{defaultValue:null,description:"",name:"onStartMeeting",required:!0,type:{name:"(rcvEngine: RcvEngine) => void"}}}}}catch{}function G({onSubmit:e}){const n=Ce(),[i,l]=g.exports.useState(JSON.stringify(n.token)),[d,h]=g.exports.useState(JSON.stringify(n.external)),[r,c]=g.exports.useState(n),u=a(()=>{const o={...r};r.authType===y.TOKEN&&i&&(o.token=JSON.parse(i)),d&&(o.external=JSON.parse(d)||{}),r.authType===y.PASSWORD&&(o.grantType="PASSWORD"),b(q,o),e(o)},"handleSubmit"),f=a(()=>{switch(r.authType){case y.TOKEN:return m(x,{children:[t(S,{fullWidth:!0,label:"clientId",placeholder:"your clientID",size:"small",type:"text",value:r.clientId,variant:"outlined",onChange:o=>c({...r,clientId:o.target.value})}),t("div",{className:"br"}),t(S,{fullWidth:!0,label:"clientSecret",placeholder:"your client secret",size:"small",type:"text",value:r.clientSecret,variant:"outlined",onChange:o=>c({...r,clientSecret:o.target.value})}),t("div",{className:"br"}),t("h3",{children:"Token"}),t(z,{maxRows:20,minRows:8,placeholder:"your token",style:{width:"100%"},value:i,onChange:o=>l(o.target.value)})]});case y.JWT:return m(x,{children:[t(S,{fullWidth:!0,label:"clientId",placeholder:"your clientID",size:"small",type:"text",value:r.clientId,variant:"outlined",onChange:o=>c({...r,clientId:o.target.value})}),t("div",{className:"br"}),t(S,{fullWidth:!0,label:"clientSecret",placeholder:"your client secret",size:"small",type:"text",value:r.clientSecret,variant:"outlined",onChange:o=>c({...r,clientSecret:o.target.value})}),t("div",{className:"br"}),t(S,{fullWidth:!0,label:"JWT",placeholder:"your jwt",size:"small",type:"text",value:r.jwt,variant:"outlined",onChange:o=>c({...r,jwt:o.target.value})})]});case y.PASSWORD:return m(x,{children:[t(S,{fullWidth:!0,label:"clientId",placeholder:"your clientID",size:"small",type:"text",value:r.clientId,variant:"outlined",onChange:o=>c({...r,clientId:o.target.value})}),t("div",{className:"br"}),t(S,{fullWidth:!0,label:"clientSecret",placeholder:"your client secret",size:"small",type:"text",value:r.clientSecret,variant:"outlined",onChange:o=>c({...r,clientSecret:o.target.value})}),t("div",{className:"br"}),t(S,{fullWidth:!0,label:"username",placeholder:"your username",size:"small",type:"text",value:r.username,variant:"outlined",onChange:o=>c({...r,username:o.target.value})}),t("div",{className:"br"}),t(S,{fullWidth:!0,label:"password",placeholder:"your password",size:"small",type:"text",value:r.password,variant:"outlined",onChange:o=>c({...r,password:o.target.value})})]});default:return[]}},"renderAuthForm");return m(x,{children:[m(le,{children:[t(ce,{children:"Auth Type"}),m(de,{label:"Auth Type",size:"small",value:r.authType,onChange:o=>c({...r,authType:o.target.value}),children:[t(N,{value:y.JWT,children:y.JWT}),t(N,{value:y.PASSWORD,children:y.PASSWORD}),t(N,{value:y.TOKEN,children:y.TOKEN})]})]}),t("div",{className:"br"}),f(),t("h3",{children:"External config"}),t(z,{maxRows:20,minRows:8,style:{width:"100%"},value:d,onChange:o=>h(o.target.value)}),t("div",{className:"br"}),t(I,{variant:"contained",onClick:u,children:"Init Config"})]})}a(G,"AuthForm");try{G.displayName="AuthForm",G.__docgenInfo={description:"",displayName:"AuthForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(authInfo: IAuth) => void"}}}}}catch{}function _e(){const e=window.rcv;return console.debug("get rcvEngine from window and got: ",e),e}a(_e,"getInitRcvFromWindow");function Ne(e){var n;try{const i=((n=e==null?void 0:e.getMeetingController())==null?void 0:n.getMeetingState())===w.exports.RcvMeetingState.MEETING_STATE_INMEETING;return console.debug("check isInMeeting: ",i),i}catch{return!1}}a(Ne,"checkIsInMeeting");function We(e){var n;try{const i=(n=e==null?void 0:e.getMeetingController())==null?void 0:n._bridge.pins.web;return console.debug("get meeting id from from rcvEngine and got",i),i}catch{return}}a(We,"getMeetingId");function O({onReset:e,children:n,rcvEngine:i,meetingId:l}){return m(x,{children:[m($,{elevation:1,style:{left:8,top:8,position:"absolute",zIndex:100,padding:8},children:[t("b",{children:l}),t(I,{variant:"text",onClick:e,children:"Reset"})]}),t(Le,{localeConfig:{chat_dialog_title:"My chat"},rcvEngine:i,onError:d=>{console.error("UI error happens",d)},children:n})]})}a(O,"InMeeting");try{O.displayName="InMeeting",O.__docgenInfo={description:"",displayName:"InMeeting",props:{meetingId:{defaultValue:null,description:"",name:"meetingId",required:!0,type:{name:"string"}},rcvEngine:{defaultValue:null,description:"",name:"rcvEngine",required:!0,type:{name:"RcvEngine"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}function J({meetingId:e,onReset:n}){return m(ue,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"200px"},children:[t(pe,{}),m("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:8},children:[m("div",{style:{marginRight:8},children:["Joining meeting ",e?`: ${e}`:""]}),t(I,{variant:"text",onClick:n,children:"Reset"})]})]})}a(J,"MeetingLoading");try{J.displayName="MeetingLoading",J.__docgenInfo={description:"",displayName:"MeetingLoading",props:{meetingId:{defaultValue:null,description:"",name:"meetingId",required:!1,type:{name:"string | undefined"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}const ke=a(({children:e})=>{const[n,i]=g.exports.useState(_e()),[l,d]=g.exports.useState(!1),[h,r]=g.exports.useState(Ne(n)),[c,u]=g.exports.useState(We(n)),[f,o]=g.exports.useState(window.auth),M=g.exports.useRef(null);g.exports.useEffect(()=>{n&&(console.debug(`addEventListener ${w.exports.EngineEvent.MEETING_JOINED} to rcvEngine`),n.on(w.exports.EngineEvent.MEETING_JOINED,p=>{console.debug(`event ${w.exports.EngineEvent.MEETING_JOINED} triggered with data: ${p}`),u(p),r(!0),b(A,p),b(C,M.current)}),console.debug(`addEventListener ${w.exports.EngineEvent.MEETING_JOINED} to rcvEngine`),n.on(w.exports.EngineEvent.MEETING_LEFT,()=>{console.debug(`event ${w.exports.EngineEvent.MEETING_LEFT} triggered`),u(""),r(!1),b(A,""),b(C,"")}))},[n]),g.exports.useEffect(()=>{a(async()=>{if(window.rcv){console.debug("got rcvEngine from window, no need to rejoin a meeting");return}const v=E(W,void 0,!0);if(v){console.debug("got auth info from local storage, will init rcvEngine automatically"),await P(v);const T=await j(v),_=E(A,void 0,!0),X=E(C,void 0,!0);_&&(console.debug(`got meetingId from local storage, will rejoin meeting ${_}`),await D(T,_,X))}},"rejoinMeeting")().then()},[]);const H=a(async p=>{d(!0),console.debug("start meeting"),await p.startInstantMeeting(),d(!1)},"handleStartMeeting"),D=a(async(p,v,T)=>{if(!v){alert("Meeting id can not be empty!");return}u(v),d(!0),console.debug(`join meeting with meetingId: ${v}`),M.current=T,await p.joinMeeting(v,T?{password:T}:{}),d(!1)},"handleJoinMeeting"),P=a(async p=>(window.auth=p,o(p),b(W,p,!0),p),"handleSubmitAuth"),j=a(async p=>{const v=await Re({...p});return window.rcv=v,i(v),v},"handleInitRcv"),R=a(()=>{B(W),B(A),n==null||n.destroy(),i(void 0),o(void 0),window.rcv=void 0,window.auth=void 0},"handleReset");if(l)return t(J,{meetingId:c,onReset:R});if(n){if(h&&c)return t(O,{meetingId:c,rcvEngine:n,onReset:R,children:e});if(!h)return t(k,{rcvEngine:n,onClear:R,onJoinMeeting:D,onStartMeeting:H})}return f?t("p",{children:"loading..."}):t("div",{style:{padding:"1em"},children:t(G,{onSubmit:async p=>{await P(p),await j(p)}})})},"MeetingWrapper");function Ge(){const e=Ae("(min-width:850px)");return m("div",{style:{display:"flex",width:"100%",height:"100%",flexDirection:"column",border:"1px solid #eee",boxSizing:"border-box"},children:[t(ge,{layout:he.gallery,style:{flex:1}}),t(ye,{centerActions:[t(me,{isShowLabel:!0},"audio-action"),t(ve,{isShowLabel:!0},"video-action"),t(Se,{isShowLabel:!0},"screen-sharing-action"),e&&t(V,{isShowLabel:!0,onCopyToClipboardSuccess:n=>{console.log("copy to clipboard success",n)}},"invite-action"),t(we,{isShowLabel:!0},"participant-action"),e&&t(K,{isShowLabel:!0},"chat-action"),e&&t(Q,{isShowLabel:!0},"record-action"),e&&t(U,{isShowLabel:!0},"closed-captions-action"),t(fe,{isShowLabel:!0,moreActions:[!e&&t(V,{isShowLabel:!0,onCopyToClipboardSuccess:n=>{console.log("copy to clipboard success",n)}},"invite-action"),t(be,{isShowLabel:!0},"live-transcription-action"),!e&&t(K,{isShowLabel:!0},"chat-action"),!e&&t(Q,{isShowLabel:!0},"record-action"),!e&&t(U,{isShowLabel:!0},"closed-captions-action")]},"more-action"),t(xe,{isShowLabel:!0},"leave-action")],leftActions:[t(Ie,{},"meeting-info-action")],rightActions:[t(Ee,{text:"RingCentral"},"logo-icon")]})]})}a(Ge,"Meeting");const Ke={parameters:{storySource:{source:`import React from 'react';
import { useMediaQuery } from '@mui/material';
import type { Story } from '@storybook/react';
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
    MoreAction,
    InviteAction,
    LiveTranscriptionAction,
    ClosedCaptionAction
} from '../lib';

function Meeting() {
    const isWidthGt850 = useMediaQuery('(min-width:850px)');
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
                    isWidthGt850 && (
                        <InviteAction
                            isShowLabel={true}
                            key={'invite-action'}
                            onCopyToClipboardSuccess={(message)=> {
                                console.log('copy to clipboard success', message);
                            }}
                        />
                    ),
                    <ParticipantAction isShowLabel={true} key={'participant-action'} />,
                    isWidthGt850 && <ChatAction isShowLabel={true} key={'chat-action'} />,
                    isWidthGt850 && <RecordAction isShowLabel={true} key={'record-action'} />,
                    isWidthGt850 && <ClosedCaptionAction isShowLabel={true} key={'closed-captions-action'} />,
                    <MoreAction
                        isShowLabel={true}
                        key={'more-action'}
                        moreActions={[
                            !isWidthGt850 && (
                                <InviteAction
                                    isShowLabel={true}
                                    key={'invite-action'}
                                    onCopyToClipboardSuccess={(message)=> {
                                        console.log('copy to clipboard success', message);
                                    }}
                                />
                            ),
                            <LiveTranscriptionAction isShowLabel={true} key={'live-transcription-action'} />,
                            !isWidthGt850 && <ChatAction isShowLabel={true} key={'chat-action'} />,
                            !isWidthGt850 && <RecordAction isShowLabel={true} key={'record-action'} />,
                            !isWidthGt850 && <ClosedCaptionAction isShowLabel={true} key={'closed-captions-action'} />,
                        ]}
                    />,
                    <LeaveAction isShowLabel={true} key={'leave-action'} />,
                ]}
                leftActions={[<MeetingInfoAction key={'meeting-info-action'} />]}
                rightActions={[<LogoIcon key={'logo-icon'} text='RingCentral' />]}
            />
        </div>
    );
}

export default {
    title: 'Example/Video Meeting',
};

export const GalleryView: Story = () => {
    return (
        <MeetingWrapper>
            <Meeting />
        </MeetingWrapper>
    );
};
`,locationsMap:{"gallery-view":{startLoc:{col:34,line:91},endLoc:{col:1,line:97},startBody:{col:34,line:91},endBody:{col:1,line:97}}}}},title:"Example/Video Meeting"},Qe=a(()=>t(ke,{children:t(Ge,{})}),"GalleryView"),Ue=["GalleryView"];export{Qe as GalleryView,Ue as __namedExportsOrder,Ke as default};
//# sourceMappingURL=Gallery.stories.3de7e402.js.map
