var Z=Object.defineProperty;var a=(e,n)=>Z(e,"name",{value:n,configurable:!0});import{r as g,a as F,j as t,F as x,b as y}from"./jsx-runtime.e74d9f1f.js";import{u as ee,n as te,o as ne,p as f,q as U,T as S,B as I,F as ie,r as oe,s as re,t as N,v as z,i as ae,w as se,x as ce,j as le,m as de,a as ue,A as pe,V as ge,S as he,I as V,P as me,C as K,R as Q,c as B,e as ye,d as ve,L as Se,M as fe,b as we}from"./index.38d51592.js";import"./iframe.52a24521.js";import"./index.c2e0bee4.js";import"./en.56afbf8a.js";import"./index.d289d216.js";function be(e,n,i,l,d){const[h,r]=g.exports.useState(()=>d&&i?i(e).matches:l?l(e).matches:n);return ne(()=>{let c=!0;if(!i)return;const u=i(e),w=a(()=>{c&&r(u.matches)},"updateMatch");return w(),u.addListener(w),()=>{c=!1,u.removeListener(w)}},[e,i]),h}a(be,"useMediaQueryOld");const Y=F["useSyncExternalStore"];function xe(e,n,i,l,d){const h=g.exports.useCallback(()=>n,[n]),r=g.exports.useMemo(()=>{if(d&&i)return()=>i(e).matches;if(l!==null){const{matches:o}=l(e);return()=>o}return h},[h,e,l,d,i]),[c,u]=g.exports.useMemo(()=>{if(i===null)return[h,()=>()=>{}];const o=i(e);return[()=>o.matches,M=>(o.addListener(M),()=>{o.removeListener(M)})]},[h,i,e]);return Y(u,c,r)}a(xe,"useMediaQueryNew");function Ie(e,n={}){const i=ee(),l=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:d=!1,matchMedia:h=l?window.matchMedia:null,ssrMatchMedia:r=null,noSsr:c=!1}=te({name:"MuiUseMediaQuery",props:n,theme:i});let u=typeof e=="function"?e(i):e;return u=u.replace(/^@media( ?)/m,""),(Y!==void 0?xe:be)(u,d,h,r,c)}a(Ie,"useMediaQuery");const L=a(e=>e?localStorage:sessionStorage,"getStorage"),k="AUTH_KEY",q="KEY_AUTH_FORM",A="MEETING_ID",R="MEETING_PASSWORD";function E(e,n,i=!0){if(typeof localStorage!="object"||typeof sessionStorage!="object")return n;let l;return typeof i>"u"?l=L(!0).getItem(e)||L(!1).getItem(e):l=L(i).getItem(e),l?JSON.parse(l):n}a(E,"readLocallyStored");const b=a((e,n=null,i=!0)=>{L(i).setItem(e,JSON.stringify(n))},"writeLocallyStored"),$=a((e,n=!0)=>{L(n).setItem(e,"")},"removeLocallyStored"),s={clientId:"",clientSecret:"",jwt:"",username:"",password:""};var m=(e=>(e.PASSWORD="PASSWORD",e.TOKEN="TOKEN",e.JWT="JWT",e))(m||{});function Ee(){const e=E(q,void 0,!0);return{authType:(e==null?void 0:e.authType)||"JWT",clientId:(e==null?void 0:e.clientId)||(s==null?void 0:s.clientId)||"",clientSecret:(e==null?void 0:e.clientSecret)||(s==null?void 0:s.clientSecret)||"",token:(e==null?void 0:e.token)||(s==null?void 0:s.token),username:(e==null?void 0:e.username)||(s==null?void 0:s.username),password:(e==null?void 0:e.password)||(s==null?void 0:s.password),jwt:(e==null?void 0:e.jwt)||(s==null?void 0:s.jwt),external:(e==null?void 0:e.external)||(s==null?void 0:s.external),grantType:(e==null?void 0:e.grantType)||(s==null?void 0:s.grantType)}}a(Ee,"getDefaultAuthFormData");async function Me(e){var i;(i=f.exports.RcvEngine.instance())==null||i.destroy();const n=f.exports.RcvEngine.create({enableDiscovery:!1,origin:s.origin||"https://platform.ringcentral.com",...e,external:{...e.external,...s.dev}});return e.authType===m.TOKEN?await n.setAuthToken(JSON.stringify(e.token)):e.authType===m.JWT?await n.authorize({grantType:f.exports.GrantType.JWT,jwt:e.jwt}):await n.authorize({grantType:f.exports.GrantType.PASSWORD,username:e.username,password:e.password}),console.debug("createRcvEngine called and got: ",n),n}a(Me,"createRcvEngine");function W({onClear:e,rcvEngine:n,onStartMeeting:i,onJoinMeeting:l}){const[d,h]=g.exports.useState(E(A,void 0,!0)),[r,c]=g.exports.useState(E(R,void 0,!0));return t(x,{children:y(U,{elevation:1,style:{padding:16,display:"flex"},children:[t(S,{className:"item",label:"Meeting Id",size:"small",style:{width:200,marginRight:4},value:d,variant:"outlined",onChange:u=>h(u.target.value)}),t(S,{className:"item",label:"Password",size:"small",style:{width:200,marginRight:4},value:r,variant:"outlined",onChange:u=>c(u.target.value)}),t(I,{style:{marginRight:4},variant:"contained",onClick:()=>{l(n,d,r)},children:"Join"}),t(I,{style:{marginRight:4},variant:"outlined",onClick:()=>{i(n)},children:"Start a Meeting"}),t(I,{style:{marginRight:4},variant:"text",onClick:e,children:"Reset"})]})})}a(W,"StartMeeting");try{W.displayName="StartMeeting",W.__docgenInfo={description:"",displayName:"StartMeeting",props:{rcvEngine:{defaultValue:null,description:"",name:"rcvEngine",required:!0,type:{name:"RcvEngine"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},onJoinMeeting:{defaultValue:null,description:"",name:"onJoinMeeting",required:!0,type:{name:"(rcvEngine: RcvEngine, meetingId?: string | undefined, password?: string | undefined) => void"}},onStartMeeting:{defaultValue:null,description:"",name:"onStartMeeting",required:!0,type:{name:"(rcvEngine: RcvEngine) => void"}}}}}catch{}function O({onSubmit:e}){const n=Ee(),[i,l]=g.exports.useState(JSON.stringify(n.token)),[d,h]=g.exports.useState(JSON.stringify(n.external)),[r,c]=g.exports.useState(n),u=a(()=>{const o={...r};r.authType===m.TOKEN&&i&&(o.token=JSON.parse(i)),d&&(o.external=JSON.parse(d)||{}),r.authType===m.PASSWORD&&(o.grantType="PASSWORD"),b(q,o),e(o)},"handleSubmit"),w=a(()=>{switch(r.authType){case m.TOKEN:return y(x,{children:[t(S,{fullWidth:!0,label:"clientId",placeholder:"your clientID",size:"small",type:"text",value:r.clientId,variant:"outlined",onChange:o=>c({...r,clientId:o.target.value})}),t("div",{className:"br"}),t(S,{fullWidth:!0,label:"clientSecret",placeholder:"your client secret",size:"small",type:"text",value:r.clientSecret,variant:"outlined",onChange:o=>c({...r,clientSecret:o.target.value})}),t("div",{className:"br"}),t("h3",{children:"Token"}),t(z,{maxRows:20,minRows:8,placeholder:"your token",style:{width:"100%"},value:i,onChange:o=>l(o.target.value)})]});case m.JWT:return y(x,{children:[t(S,{fullWidth:!0,label:"clientId",placeholder:"your clientID",size:"small",type:"text",value:r.clientId,variant:"outlined",onChange:o=>c({...r,clientId:o.target.value})}),t("div",{className:"br"}),t(S,{fullWidth:!0,label:"clientSecret",placeholder:"your client secret",size:"small",type:"text",value:r.clientSecret,variant:"outlined",onChange:o=>c({...r,clientSecret:o.target.value})}),t("div",{className:"br"}),t(S,{fullWidth:!0,label:"JWT",placeholder:"your jwt",size:"small",type:"text",value:r.jwt,variant:"outlined",onChange:o=>c({...r,jwt:o.target.value})})]});case m.PASSWORD:return y(x,{children:[t(S,{fullWidth:!0,label:"clientId",placeholder:"your clientID",size:"small",type:"text",value:r.clientId,variant:"outlined",onChange:o=>c({...r,clientId:o.target.value})}),t("div",{className:"br"}),t(S,{fullWidth:!0,label:"clientSecret",placeholder:"your client secret",size:"small",type:"text",value:r.clientSecret,variant:"outlined",onChange:o=>c({...r,clientSecret:o.target.value})}),t("div",{className:"br"}),t(S,{fullWidth:!0,label:"username",placeholder:"your username",size:"small",type:"text",value:r.username,variant:"outlined",onChange:o=>c({...r,username:o.target.value})}),t("div",{className:"br"}),t(S,{fullWidth:!0,label:"password",placeholder:"your password",size:"small",type:"text",value:r.password,variant:"outlined",onChange:o=>c({...r,password:o.target.value})})]});default:return[]}},"renderAuthForm");return y(x,{children:[y(ie,{children:[t(oe,{children:"Auth Type"}),y(re,{label:"Auth Type",size:"small",value:r.authType,onChange:o=>c({...r,authType:o.target.value}),children:[t(N,{value:m.JWT,children:m.JWT}),t(N,{value:m.PASSWORD,children:m.PASSWORD}),t(N,{value:m.TOKEN,children:m.TOKEN})]})]}),t("div",{className:"br"}),w(),t("h3",{children:"External config"}),t(z,{maxRows:20,minRows:8,style:{width:"100%"},value:d,onChange:o=>h(o.target.value)}),t("div",{className:"br"}),t(I,{variant:"contained",onClick:u,children:"Init Config"})]})}a(O,"AuthForm");try{O.displayName="AuthForm",O.__docgenInfo={description:"",displayName:"AuthForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(authInfo: IAuth) => void"}}}}}catch{}function Te(){const e=window.rcv;return console.debug("get rcvEngine from window and got: ",e),e}a(Te,"getInitRcvFromWindow");function Ae(e){var n;try{const i=((n=e==null?void 0:e.getMeetingController())==null?void 0:n.getMeetingState())===f.exports.RcvMeetingState.MEETING_STATE_INMEETING;return console.debug("check isInMeeting: ",i),i}catch{return!1}}a(Ae,"checkIsInMeeting");function Le(e){var n;try{const i=(n=e==null?void 0:e.getMeetingController())==null?void 0:n._bridge.pins.web;return console.debug("get meeting id from from rcvEngine and got",i),i}catch{return}}a(Le,"getMeetingId");function J({onReset:e,children:n,rcvEngine:i,meetingId:l}){return y(x,{children:[y(U,{elevation:1,style:{left:8,top:8,position:"absolute",zIndex:100,padding:8},children:[t("b",{children:l}),t(I,{variant:"text",onClick:e,children:"Reset"})]}),t(ae,{localeConfig:{chat_dialog_title:"My chat"},rcvEngine:i,onError:d=>{console.error("UI error happens",d)},children:n})]})}a(J,"InMeeting");try{J.displayName="InMeeting",J.__docgenInfo={description:"",displayName:"InMeeting",props:{meetingId:{defaultValue:null,description:"",name:"meetingId",required:!0,type:{name:"string"}},rcvEngine:{defaultValue:null,description:"",name:"rcvEngine",required:!0,type:{name:"RcvEngine"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}function D({meetingId:e,onReset:n}){return y(se,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"200px"},children:[t(ce,{}),y("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:8},children:[y("div",{style:{marginRight:8},children:["Joining meeting ",e?`: ${e}`:""]}),t(I,{variant:"text",onClick:n,children:"Reset"})]})]})}a(D,"MeetingLoading");try{D.displayName="MeetingLoading",D.__docgenInfo={description:"",displayName:"MeetingLoading",props:{meetingId:{defaultValue:null,description:"",name:"meetingId",required:!1,type:{name:"string | undefined"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}const Re=a(({children:e})=>{const[n,i]=g.exports.useState(Te()),[l,d]=g.exports.useState(!1),[h,r]=g.exports.useState(Ae(n)),[c,u]=g.exports.useState(Le(n)),[w,o]=g.exports.useState(window.auth),M=g.exports.useRef(null);g.exports.useEffect(()=>{n&&(console.debug(`addEventListener ${f.exports.EngineEvent.MEETING_JOINED} to rcvEngine`),n.on(f.exports.EngineEvent.MEETING_JOINED,p=>{console.debug(`event ${f.exports.EngineEvent.MEETING_JOINED} triggered with data: ${p}`),u(p),r(!0),b(A,p),b(R,M.current)}),console.debug(`addEventListener ${f.exports.EngineEvent.MEETING_JOINED} to rcvEngine`),n.on(f.exports.EngineEvent.MEETING_LEFT,()=>{console.debug(`event ${f.exports.EngineEvent.MEETING_LEFT} triggered`),u(""),r(!1),b(A,""),b(R,"")}))},[n]),g.exports.useEffect(()=>{a(async()=>{if(window.rcv){console.debug("got rcvEngine from window, no need to rejoin a meeting");return}const v=E(k,void 0,!0);if(v){console.debug("got auth info from local storage, will init rcvEngine automatically"),await j(v);const T=await P(v),C=E(A,void 0,!0),X=E(R,void 0,!0);C&&(console.debug(`got meetingId from local storage, will rejoin meeting ${C}`),await G(T,C,X))}},"rejoinMeeting")().then()},[]);const H=a(async p=>{d(!0),console.debug("start meeting"),await p.startInstantMeeting(),d(!1)},"handleStartMeeting"),G=a(async(p,v,T)=>{if(!v){alert("Meeting id can not be empty!");return}u(v),d(!0),console.debug(`join meeting with meetingId: ${v}`),M.current=T,await p.joinMeeting(v,T?{password:T}:{}),d(!1)},"handleJoinMeeting"),j=a(async p=>(window.auth=p,o(p),b(k,p,!0),p),"handleSubmitAuth"),P=a(async p=>{const v=await Me({...p});return window.rcv=v,i(v),v},"handleInitRcv"),_=a(()=>{$(k),$(A),n==null||n.destroy(),i(void 0),o(void 0),window.rcv=void 0,window.auth=void 0},"handleReset");if(l)return t(D,{meetingId:c,onReset:_});if(n){if(h&&c)return t(J,{meetingId:c,rcvEngine:n,onReset:_,children:e});if(!h)return t(W,{rcvEngine:n,onClear:_,onJoinMeeting:G,onStartMeeting:H})}return w?t("p",{children:"loading..."}):t("div",{style:{padding:"1em"},children:t(O,{onSubmit:async p=>{await j(p),await P(p)}})})},"MeetingWrapper");function _e(){const e=Ie("(min-width:850px)");return y("div",{style:{display:"flex",width:"100%",height:"100%",flexDirection:"column",border:"1px solid #eee",boxSizing:"border-box"},children:[t(le,{defaultLayout:de.speaker,style:{flex:1}}),t(ue,{centerActions:[t(pe,{isShowLabel:!0},"audio-action"),t(ge,{isShowLabel:!0},"video-action"),t(he,{isShowLabel:!0},"screen-sharing-action"),e&&t(V,{isShowLabel:!0,onCopyToClipboardSuccess:n=>{console.log("copy to clipboard success",n)}},"invite-action"),t(me,{isShowLabel:!0},"participant-action"),e&&t(K,{isShowLabel:!0},"chat-action"),e&&t(Q,{isShowLabel:!0},"record-action"),e&&t(B,{isShowLabel:!0},"closed-captions-action"),t(ye,{isShowLabel:!0,moreActions:[!e&&t(V,{isShowLabel:!0,onCopyToClipboardSuccess:n=>{console.log("copy to clipboard success",n)}},"invite-action"),t(ve,{isShowLabel:!0},"live-transcription-action"),!e&&t(K,{isShowLabel:!0},"chat-action"),!e&&t(Q,{isShowLabel:!0},"record-action"),!e&&t(B,{isShowLabel:!0},"closed-captions-action")]},"more-action"),t(Se,{isShowLabel:!0},"leave-action")],leftActions:[t(fe,{},"meeting-info-action")],rightActions:[t(we,{text:"RingCentral"},"logo-icon")]})]})}a(_e,"Meeting");const Ge={parameters:{storySource:{source:`import React from 'react';
import { useMediaQuery } from '@mui/material';
import type { Story } from '@storybook/react';
import MeetingWrapper from './bootstrap/components/meeting-wrapper';
import {
    ActionBar,
    AudioAction,
    ChatAction,
    ClosedCaptionAction,
    InviteAction,
    Layout,
    LayoutType,
    LeaveAction,
    LiveTranscriptionAction,
    LogoIcon,
    MeetingInfoAction,
    MoreAction,
    ParticipantAction,
    RecordAction,
    ScreenSharingAction,
    VideoAction
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
            <Layout
                defaultLayout={LayoutType.speaker}
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
    id: 'example-video-meeting'
};

export const QuickStart: Story = () => {
    return (
        <MeetingWrapper>
            <Meeting />
        </MeetingWrapper>
    );
};
`,locationsMap:{"quick-start":{startLoc:{col:33,line:93},endLoc:{col:1,line:99},startBody:{col:33,line:93},endBody:{col:1,line:99}}}}},title:"Example/Video Meeting",id:"example-video-meeting"},je=a(()=>t(Re,{children:t(_e,{})}),"QuickStart"),Pe=["QuickStart"];export{je as QuickStart,Pe as __namedExportsOrder,Ge as default};
//# sourceMappingURL=Gallery.stories.7eadb748.js.map
