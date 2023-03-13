var l=Object.defineProperty;var o=(n,t)=>l(n,"name",{value:t,configurable:!0});import"./jsx-runtime.2d1cc2c7.js";import{c as e,A as p,M as d}from"./Props.5298f195.js";import"./iframe.3e78fa7f.js";import{G as g,h as m,A as u,M as y,a as v,V as f,P as x,C as A,R as E,L as h,b as I}from"./index.12180dcf.js";import"./string.5fcb30f7.js";import"./es.map.constructor.4af251fc.js";import"./es.number.to-fixed.90ddcb9c.js";import"./index.0c40d5f3.js";import"./index.d289d216.js";import"./en.707de12e.js";function c(){return c=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])}return n},c.apply(this,arguments)}o(c,"_extends");const M={},R="wrapper";function s({components:n,...t}){return e(R,c({},M,t,{components:n,mdxType:"MDXLayout"}),e(d,{title:"Quick Starts",mdxType:"Meta"}),e("h1",null,"Getting Started"),e("p",null,"This section explains how to use the RingCentral SDK React Components Library for some common use cases."),e("p",null,"Before getting started, make sure you have followed the ",e("a",{parentName:"p",href:"./?path=/docs/introduction--page"},"Introduction")," section."),e("p",null,"Online smaple refers to ",e("a",{parentName:"p",href:"https://codesandbox.io/s/video-sdk-react-sample-d4sv9v"},"https://codesandbox.io/s/video-sdk-react-sample"),"."),e("h2",null,"Step 1: Inject rcv instance"),e("p",null,"To implement a audio/video communications experience, you need to initialize a ",e("inlineCode",{parentName:"p"},"@ringcentral/video-sdk"),` instance firstly.
For example, a simple App to initialize sdk.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`// App.jsx
import React, { useEffect, useState } from "react";
import { RcvEngine, EngineEvent, GrantType } from "@ringcentral/video-sdk";
import StartView from "./StartView";
import InMeeting from "./InMeeting";

import "@ringcentral/video-sdk-react/dist/esm/index.css";

const config = {
  clientId: "xxx",
  clientSecret: "xxx",
  jwt: "xxx",
};

export default function App() {
  const [rcvEngine, setRcvEngine] = useState<RcvEngine>(null);
  const [meetingId, setMeetingId] = useState("");

  useEffect(() => {
    const initSDK = async () => {
      const { clientId, clientSecret, jwt } = config;
      const engine = RcvEngine.create({
        clientId,
        clientSecret,
      }) as RcvEngine;
      // if config jwt, initialize SDK with jwt
      // else initialize SDK with username&password
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
      {meetingId ? (
        <InMeeting rcvEngine={rcvEngine} />
      ) : (
        <StartView rcvEngine={rcvEngine} />
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
`)),e("h2",null,"Step 3: Render UI components"),e("p",null,"Finnaly, inject the rcvEngine instance into ",e("inlineCode",{parentName:"p"},"@ringcentral/video-sdk-react")," provider - ",e("inlineCode",{parentName:"p"},"RcvEngineProvider"),`.
Then you finsh setting up the video meeting.`),e("div",{style:{display:"flex",width:"100%",height:"300px",flexDirection:"column",boxSizing:"border-box"}},e(g,{layout:m.gallery,style:{flex:1},mdxType:"GalleryLayout"}),e(u,{leftActions:[e(y,{key:"meeting-info-action",mdxType:"MeetingInfoAction"})],centerActions:[e(v,{key:"audio-action",mdxType:"AudioAction"}),e(f,{key:"video-action",mdxType:"VideoAction"}),e(x,{key:"participant-action",mdxType:"ParticipantAction"}),e(A,{key:"chat-action",mdxType:"ChatAction"}),e(E,{key:"record-action",mdxType:"RecordAction"}),e(h,{key:"leave-action",mdxType:"LeaveAction"})],rightActions:[e(I,{key:"logo-icon",text:"demo",mdxType:"LogoIcon"})],mdxType:"ActionBar"})),e("p",null,"Sources codes of this sample."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`// InMeeting.tsx
import { RcvEngine } from "@ringcentral/video-sdk";
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

interface IProps {
  rcvEngine: RcvEngine;
}

const InMeeting = ({ rcvEngine }: IProps) => {
  return (
      <RcvEngineProvider rcvEngine={rcvEngine}>
        <GalleryLayout
          layout={GalleryLayoutType.gallery}
          style={{
            flex: 1
          }}
        />
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
          rightActions={[<LogoIcon key={"logo-icon"} text="demo" />]}
        />
      </RcvEngineProvider>
  );
};

export default InMeeting;
`)))}o(s,"MDXContent");s.isMDXComponent=!0;const k=o(()=>{throw new Error("Docs-only story")},"__page");k.parameters={docsOnly:!0};const i={title:"Quick Starts",includeStories:["__page"]},S={};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(p,{mdxStoryNameToKey:S,mdxComponentAnnotations:i},e(s,null))};const V=["__page"];export{V as __namedExportsOrder,k as __page,i as default};
//# sourceMappingURL=QuickStarts.stories.682cc972.js.map
