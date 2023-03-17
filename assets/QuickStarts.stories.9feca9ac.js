var l=Object.defineProperty;var o=(n,t)=>l(n,"name",{value:t,configurable:!0});import"./jsx-runtime.5e168a6b.js";import{c as e,A as d,M as p}from"./Props.65caad6d.js";import"./iframe.1bc01e4e.js";import{G as m,h as g,A as u,M as y,a as v,V as f,P as h,C as A,R as x,L as E,b as w}from"./index.db9b82b7.js";import"./string.0931d700.js";import"./es.map.constructor.d1f097bc.js";import"./es.number.to-fixed.1f1edc86.js";import"./index.1c86d59a.js";import"./index.d289d216.js";import"./en.257cfd59.js";function c(){return c=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])}return n},c.apply(this,arguments)}o(c,"_extends");const I={},M="wrapper";function s({components:n,...t}){return e(M,c({},I,t,{components:n,mdxType:"MDXLayout"}),e(p,{title:"Quick Starts",mdxType:"Meta"}),e("h1",null,"Getting Started"),e("p",null,"This section explains how to use the RingCentral SDK React Components Library for some common use cases."),e("iframe",{src:"https://codesandbox.io/embed/video-sdk-react-sample-d4sv9v?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:500,border:0,borderRadius:4,overflow:"hidden",marginBottom:20},title:"video-sdk-react-sample",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),e("h2",null,"Step 1: Inject rcv instance and render UI components when in meeting"),e("p",null,"To implement a audio/video communications experience, you need to initialize a ",e("inlineCode",{parentName:"p"},"@ringcentral/video-sdk")," instance firstly."),e("p",null,"After join or start a meeting, inject the rcvEngine instance into ",e("inlineCode",{parentName:"p"},"@ringcentral/video-sdk-react")," provider - ",e("inlineCode",{parentName:"p"},"RcvEngineProvider"),`.
Then you finsh setting up the video meeting.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`// App.jsx
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import { RcvEngine, EngineEvent, GrantType } from "@ringcentral/video-sdk";
import {
  RcvEngineProvider,
  ActionBar,
  AudioAction,
  ChatAction,
  LeaveAction,
  LogoIcon,
  MeetingInfoAction,
  ParticipantAction,
  RecordAction,
  VideoAction,
  GalleryLayout,
  GalleryLayoutType
} from "@ringcentral/video-sdk-react";
import StartView from "./StartView";

import "@ringcentral/video-sdk-react/dist/esm/index.css";
import "./styles.css";

const config = {
  clientId: "xxx",
  clientSecret: "xxx",
  jwt: 'xxx'
};

function App() {
  const [rcvEngine, setRcvEngine] = useState<RcvEngine | null>(null);
  const [meetingId, setMeetingId] = useState("");

  useEffect(() => {
    const initSDK = async () => {
      const { clientId, clientSecret, jwt } = config;
      // You could open 'enableDiscovery' and set 'discoveryServer' if neccessary
      const engine = RcvEngine.create({
        clientId,
        clientSecret,
        enableDiscovery: false
      }) as RcvEngine;
      // if config jwt, initialize SDK with jwt
      // else initialize SDK with password
      await engine.authorize({
        grantType: GrantType.JWT,
        jwt
      });
      engine.on(EngineEvent.MEETING_JOINED, (meetingId, errorCode) => {
        // do something
        setMeetingId(meetingId);
      });
      engine.on(EngineEvent.MEETING_LEFT, () => {
        // do something
        setMeetingId("");
      });
      setRcvEngine(engine);
    };

    initSDK().then();
  }, []);

  return (
    <div className="App">
      {meetingId && rcvEngine ? (
        <div
          className={"meeting-container"}
          style={{ position: "relative", height: "100%" }}
        >
          <RcvEngineProvider rcvEngine={rcvEngine}>
            <GalleryLayout layout={GalleryLayoutType.gallery} />
            <ActionBar
              leftActions={[<MeetingInfoAction key={"meeting-info-action"} />]}
              centerActions={[
                <AudioAction key={"audio-action"} />,
                <VideoAction key={"video-action"} />,
                <ParticipantAction key={"participant-action"} />,
                <ChatAction key={"chat-action"} />,
                <RecordAction key={"record-action"} />,
                <LeaveAction key={"leave-action"} />
              ]}
              rightActions={[<LogoIcon key={"logo-icon"} />]}
            />
          </RcvEngineProvider>
        </div>
      ) : (
        rcvEngine && <StartView rcvEngine={rcvEngine} />
      )}
    </div>
  );
}
`)),e("h2",null,"Step 2: Join or start a meeting by rcvEngine instance."),e("p",null,"All the UI components need meeting datas. So it should start or join a meeting secondly and ensure to complete the meeting controller initialization."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`// InMeeting.jsx
import React, { FC, useState, useRef } from "react";
import { RcvEngine } from "@ringcentral/video-sdk";

interface IProps {
  rcvEngine: RcvEngine;
}

const StartView: FC<IProps> = (props) => {
  const { rcvEngine } = props;
  const inputMeetingIdRef = useRef(null);

  cconst startMeetingHandler = async () => {
    try {
      await rcvEngine.startInstantMeeting();
    } catch (e) {
      alert(\`Error occurs due to :\${e.message}\`);
    }
  };

  const joinMeetingHandler = async () => {
    if (!inputMeetingIdRef?.current?.value.trim()) {
      alert("Meeting id can not be empty!");
      return;
    }
    try {
      await rcvEngine.joinMeeting(inputMeetingIdRef.current.value);
    } catch (e) {
      console.error("Error occurs due to");
    }
  };

  return (
    <div>
      <input ref={inputMeetingIdRef} />
      <button onClick={startMeetingHandler}>start meeting</button>
      <button onClick={joinMeetingHandler}>join meeting</button>
    </div>
  );
};

export default StartView;
`)),e("h2",null,"Step 3: Meeting View is rendered successfully"),e("div",{style:{display:"flex",width:"100%",height:"300px",flexDirection:"column",boxSizing:"border-box"}},e(m,{layout:g.gallery,style:{flex:1},mdxType:"GalleryLayout"}),e(u,{leftActions:[e(y,{key:"meeting-info-action",mdxType:"MeetingInfoAction"})],centerActions:[e(v,{key:"audio-action",mdxType:"AudioAction"}),e(f,{key:"video-action",mdxType:"VideoAction"}),e(h,{key:"participant-action",mdxType:"ParticipantAction"}),e(A,{key:"chat-action",mdxType:"ChatAction"}),e(x,{key:"record-action",mdxType:"RecordAction"}),e(E,{key:"leave-action",mdxType:"LeaveAction"})],rightActions:[e(w,{key:"logo-icon",text:"demo",mdxType:"LogoIcon"})],mdxType:"ActionBar"})))}o(s,"MDXContent");s.isMDXComponent=!0;const S=o(()=>{throw new Error("Docs-only story")},"__page");S.parameters={docsOnly:!0};const i={title:"Quick Starts",includeStories:["__page"]},k={};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(d,{mdxStoryNameToKey:k,mdxComponentAnnotations:i},e(s,null))};const _=["__page"];export{_ as __namedExportsOrder,S as __page,i as default};
//# sourceMappingURL=QuickStarts.stories.9feca9ac.js.map
