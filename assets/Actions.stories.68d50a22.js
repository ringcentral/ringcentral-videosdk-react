var u=Object.defineProperty;var a=(r,n)=>u(r,"name",{value:n,configurable:!0});import"./jsx-runtime.8a3b3840.js";import{c as e,A,M as h,a as o}from"./Props.7233ab32.js";import"./iframe.139f1e5a.js";import{a as v,V as f,A as t,M as N,P as x,C as P,R as E,L as s,b as m,S as d}from"./index.2f66575e.js";import"./string.5dfa52f0.js";import"./es.map.constructor.48c8826b.js";import"./es.number.to-fixed.fab91578.js";import"./index.73044812.js";import"./index.d289d216.js";import"./en.257cfd59.js";function p(){return p=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var c=arguments[n];for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&(r[l]=c[l])}return r},p.apply(this,arguments)}a(p,"_extends");const y={},R="wrapper";function g({components:r,...n}){return e(R,p({},y,n,{components:r,mdxType:"MDXLayout"}),e(h,{title:"Components/Actions",mdxType:"Meta"}),e("h1",null,"Outline"),e("ol",null,e("li",null,e("a",{href:"#AudioAction"},"AudioAction")),e("li",null,e("a",{href:"#VideoAction"},"VideoAction")),e("li",null,e("a",{href:"#MeetingInfoAction"},"MeetingInfoAction")),e("li",null,e("a",{href:"#ParticipantAction"},"ParticipantAction")),e("li",null,e("a",{href:"#ChatAction"},"ChatAction")),e("li",null,e("a",{href:"#RecordAction"},"RecordAction")),e("li",null,e("a",{href:"#LeaveAction"},"LeaveAction")),e("li",null,e("a",{href:"#LogoIcon"},"LogoIcon")),e("li",null,e("a",{href:"#ScreenSharingAction"},"ScreenSharingAction"))),e("h1",{id:"AudioAction"},"1. AudioAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"AudioAction")," component is a widget to control audio mute/unmute, switch recording devices."),e("p",null,"If host/moderator requires to unmute all remote users' audio, ",e("inlineCode",{parentName:"p"},"AudioAction")," component popups a confirm panel to admit or deny it."),e("h2",null,"Snapshot"),e("img",{src:"./audio-unmute.png",style:{maxWidth:300}}),e("img",{src:"./audio-remote-unmute.png",style:{maxWidth:300}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { AudioAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, AudioAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<AudioAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(o,{of:v,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",{id:"VideoAction"},"2. VideoAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"VideoAction")," component is a widget to control video mute/unmute, switch cameras."),e("p",null,"If host/moderator requires to unmute all remote users' video, ",e("inlineCode",{parentName:"p"},"VideoAction")," component popups a confirm panel to admit or deny it."),e("h2",null,"Snapshot"),e("img",{src:"./video-unmute.png",style:{maxWidth:300}}),e("img",{src:"./video-remote-unmute.png",style:{maxWidth:300}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { VideoAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, VideoAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<VideoAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(o,{of:f,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",{id:"MeetingInfoAction"},"3. MeetingInfoAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"MeetingInfoAction")," component is a widget to display meeting information."),e("h2",null,"Demo"),e(t,{leftActions:[e(N,{mdxType:"MeetingInfoAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { MeetingInfoAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, MeetingInfoAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar leftActions={[<MeetingInfoAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e("p",null,"More details and component properties refer to ",e("a",{parentName:"p",href:"./?path=/story/components-meetinginfopanel--page"},"MeetingInfo Panel"),"."),e("h1",{id:"ParticipantAction"},"4. ParticipantAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ParticipantAction")," component is a widget to manage participants."),e("h2",null,"Demo"),e(t,{centerActions:[e(x,{mdxType:"ParticipantAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ParticipantAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ParticipantAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<ParticipantAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e("p",null,"More details and component properties refer to ",e("a",{parentName:"p",href:"./?path=/story/components-participantpanel--page"},"Participant Panel"),"."),e("h1",{id:"ChatAction"},"5. ChatAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ChatAction")," component is a widget to render chat panel. It will display the chat messages of the meeting, and provide the ability to send messages inside the meeting."),e("h2",null,"Demo"),e(t,{centerActions:[e(P,{mdxType:"ChatAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ChatAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ChatAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<ChatAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e("p",null,"More details and component properties refer to ",e("a",{parentName:"p",href:"./?path=/story/components-chatpanel--page"},"Chat Panel"),"."),e("h1",{id:"RecordAction"},"6. RecordAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"RecordAction")," component is a widget to control recording."),e("ul",null,e("li",{parentName:"ul"},"start recording"),e("li",{parentName:"ul"},"pause recording")),e("p",null,"And you need some permissions to start recording:"),e("ul",null,e("li",{parentName:"ul"},"Only host or moderator is allowed."),e("li",{parentName:"ul"},"If E2EE enable, recording is forbidden.")),e("h2",null,"Snapshot"),e("img",{src:"./record-action.png",style:{maxWidth:200}}),e("img",{src:"./record-action-start.png",style:{maxWidth:350}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { RecordAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, RecordAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<RecordAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(o,{of:E,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",{id:"LeaveAction"},"7. LeaveAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"LeaveAction")," component is a widget to leave/end the meeting."),e("h2",null,"Demo&Snapshot"),e(t,{centerActions:[e(s,{mdxType:"LeaveAction"})],mdxType:"ActionBar"}),e("p",null,"When click ",e("inlineCode",{parentName:"p"},"LeaveAction"),", if the following conditions are met, a confirm modal is shown."),e("ul",null,e("li",{parentName:"ul"},"you are a ",e("inlineCode",{parentName:"li"},"host")," or ",e("inlineCode",{parentName:"li"},"moderator")),e("li",{parentName:"ul"},"more than one participants are in the meeting")),e("img",{src:"./leave-confirm.png",style:{maxWidth:450}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { LeaveAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, LeaveAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<LeaveAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(o,{of:s,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",{id:"LogoIcon"},"8. LogoIcon"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"LogoIcon")," component is a widget to display a logo string."),e("h2",null,"Demo"),e(t,{rightActions:[e(m,{text:"RingCentral Demo",mdxType:"LogoIcon"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { LogoIcon } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, LogoIcon } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar rightActions={[<LogoIcon text='RingCentral Demo' />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(o,{of:m,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",{id:"ScreenSharingAction"}," 9. ScreenSharingAction "),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ScreenSharingAction")," component is a widget to share the device screen or application."),e("h2",null,"Demo"),e(t,{centerActions:[e(d,{mdxType:"ScreenSharingAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ScreenSharingAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ScreenSharingAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<ScreenSharingAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(o,{of:d,sort:"requiredFirst",mdxType:"ArgsTable"}))}a(g,"MDXContent");g.isMDXComponent=!0;const T=a(()=>{throw new Error("Docs-only story")},"__page");T.parameters={docsOnly:!0};const i={title:"Components/Actions",includeStories:["__page"]},C={};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(A,{mdxStoryNameToKey:C,mdxComponentAnnotations:i},e(g,null))};const U=["__page"];export{U as __namedExportsOrder,T as __page,i as default};
//# sourceMappingURL=Actions.stories.68d50a22.js.map
