var g=Object.defineProperty;var a=(o,n)=>g(o,"name",{value:n,configurable:!0});import"./jsx-runtime.2d1cc2c7.js";import{c as e,A as u,M as A,a as t}from"./Props.5298f195.js";import"./iframe.3e78fa7f.js";import{a as h,V as v,A as r,M as f,P as N,C as x,R as y,L as s,b as m}from"./index.12180dcf.js";import"./string.5fcb30f7.js";import"./es.map.constructor.4af251fc.js";import"./es.number.to-fixed.90ddcb9c.js";import"./index.0c40d5f3.js";import"./index.d289d216.js";import"./en.707de12e.js";function p(){return p=Object.assign?Object.assign.bind():function(o){for(var n=1;n<arguments.length;n++){var c=arguments[n];for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&(o[l]=c[l])}return o},p.apply(this,arguments)}a(p,"_extends");const P={},E="wrapper";function d({components:o,...n}){return e(E,p({},P,n,{components:o,mdxType:"MDXLayout"}),e(A,{title:"Components/Actions",mdxType:"Meta"}),e("h1",null,"Outline"),e("ol",null,e("li",null,e("a",{href:"#1-audioaction"},"AudioAction")),e("li",null,e("a",{href:"#2-videoaction"},"VideoAction")),e("li",null,e("a",{href:"#3-meetinginfoaction"},"MeetingInfoAction")),e("li",null,e("a",{href:"#4-participantaction"},"ParticipantAction")),e("li",null,e("a",{href:"#5-chataction"},"ChatAction")),e("li",null,e("a",{href:"#6-recordaction"},"RecordAction")),e("li",null,e("a",{href:"#7-leaveaction"},"LeaveAction")),e("li",null,e("a",{href:"#9-logoicon"},"LogoIcon"))),e("h1",null,"1. AudioAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"AudioAction")," component is a widget to control audio mute/unmute, switch recording devices."),e("p",null,"If host/moderator requires to unmute all remote users' audio, ",e("inlineCode",{parentName:"p"},"AudioAction")," component popups a confirm panel to admit or deny it."),e("h2",null,"Snapshot"),e("img",{src:"./audio-unmute.png",style:{maxWidth:300}}),e("img",{src:"./audio-remote-unmute.png",style:{maxWidth:300}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { AudioAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, AudioAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<AudioAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(t,{of:h,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",null,"2. VideoAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"VideoAction")," component is a widget to control video mute/unmute, switch cameras."),e("p",null,"If host/moderator requires to unmute all remote users' video, ",e("inlineCode",{parentName:"p"},"VideoAction")," component popups a confirm panel to admit or deny it."),e("h2",null,"Snapshot"),e("img",{src:"./video-unmute.png",style:{maxWidth:300}}),e("img",{src:"./video-remote-unmute.png",style:{maxWidth:300}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { VideoAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, VideoAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<VideoAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(t,{of:v,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",null,"3. MeetingInfoAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"MeetingInfoAction")," component is a widget to display meeting information."),e("h2",null,"Demo"),e(r,{leftActions:[e(f,{mdxType:"MeetingInfoAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { MeetingInfoAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, MeetingInfoAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar leftActions={[<MeetingInfoAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e("p",null,"More details and component properties refer to ",e("a",{parentName:"p",href:"./?path=/story/components-meetinginfopanel--page"},"MeetingInfo Panel"),"."),e("h1",null,"4. ParticipantAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ParticipantAction")," component is a widget to manage participants."),e("h2",null,"Demo"),e(r,{centerActions:[e(N,{mdxType:"ParticipantAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ParticipantAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ParticipantAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<ParticipantAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e("p",null,"More details and component properties refer to ",e("a",{parentName:"p",href:"./?path=/story/components-participantpanel--page"},"Participant Panel"),"."),e("h1",null,"5. ChatAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ChatAction")," component is a widget to render chat panel. It will display the chat messages of the meeting, and provide the ability to send messages inside the meeting."),e("h2",null,"Demo"),e(r,{centerActions:[e(x,{mdxType:"ChatAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ChatAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ChatAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<ChatAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e("p",null,"More details and component properties refer to ",e("a",{parentName:"p",href:"./?path=/story/components-chatpanel--page"},"Chat Panel"),"."),e("h1",null,"6. RecordAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"RecordAction")," component is a widget to control recording."),e("ul",null,e("li",{parentName:"ul"},"start recording"),e("li",{parentName:"ul"},"pause recording")),e("p",null,"And you need some permissions to start recording:"),e("ul",null,e("li",{parentName:"ul"},"Only host or moderator is allowed."),e("li",{parentName:"ul"},"If E2EE enable, recording is forbidden.")),e("h2",null,"Snapshot"),e("img",{src:"./record-action.png",style:{maxWidth:200}}),e("img",{src:"./record-action-start.png",style:{maxWidth:350}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { RecordAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, RecordAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<RecordAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(t,{of:y,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",null,"7. LeaveAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"LeaveAction")," component is a widget to leave/end the meeting."),e("h2",null,"Demo&Snapshot"),e(r,{centerActions:[e(s,{mdxType:"LeaveAction"})],mdxType:"ActionBar"}),e("p",null,"When click ",e("inlineCode",{parentName:"p"},"LeaveAction"),", if the following conditions are met, a confirm modal is shown."),e("ul",null,e("li",{parentName:"ul"},"you are a ",e("inlineCode",{parentName:"li"},"host")," or ",e("inlineCode",{parentName:"li"},"moderator")),e("li",{parentName:"ul"},"more than one participants are in the meeting")),e("img",{src:"./leave-confirm.png",style:{maxWidth:450}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { LeaveAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, LeaveAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<LeaveAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(t,{of:s,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",null,"9. LogoIcon"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"LogoIcon")," component is a widget to display a logo string."),e("h2",null,"Demo"),e(r,{rightActions:[e(m,{text:"RingCentral Demo",mdxType:"LogoIcon"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { LogoIcon } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, LogoIcon } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar rightActions={[<LogoIcon text='RingCentral Demo' />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(t,{of:m,sort:"requiredFirst",mdxType:"ArgsTable"}))}a(d,"MDXContent");d.isMDXComponent=!0;const R=a(()=>{throw new Error("Docs-only story")},"__page");R.parameters={docsOnly:!0};const i={title:"Components/Actions",includeStories:["__page"]},T={};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(u,{mdxStoryNameToKey:T,mdxComponentAnnotations:i},e(d,null))};const _=["__page"];export{_ as __namedExportsOrder,R as __page,i as default};
//# sourceMappingURL=Actions.stories.8b2cfdfe.js.map
