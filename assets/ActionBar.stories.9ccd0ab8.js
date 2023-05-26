var k=Object.defineProperty;var c=(n,t)=>k(n,"name",{value:t,configurable:!0});import"./jsx-runtime.e74d9f1f.js";import{c as e,A as h,M as x,a as f}from"./Props.53abe312.js";import"./iframe.52a24521.js";import{a as o,A as a,V as r,P as p,C as l,R as m,L as d,M as y,b as u}from"./index.38d51592.js";import"./string.8e649965.js";import"./es.map.constructor.d97a9456.js";import"./es.number.to-fixed.f6cb879a.js";import"./index.c2e0bee4.js";import"./en.56afbf8a.js";import"./index.d289d216.js";function g(){return g=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var A=arguments[t];for(var s in A)Object.prototype.hasOwnProperty.call(A,s)&&(n[s]=A[s])}return n},g.apply(this,arguments)}c(g,"_extends");const T={},L="wrapper";function v({components:n,...t}){return e(L,g({},T,t,{components:n,mdxType:"MDXLayout"}),e(x,{title:"Components/actions/ActionBar",id:"components-actionbar",mdxType:"Meta"}),e("h1",null,"ActionBar"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ActionBar")," component is a container to wrapper action widgets. It is strongly recommended to display the action components hosted in ",e("inlineCode",{parentName:"p"},"ActionBar")," wrapper."),e("p",null,e("inlineCode",{parentName:"p"},"ActionBar")," includes three sections:"),e("ul",null,e("li",{parentName:"ul"},"left section"),e("li",{parentName:"ul"},"center action"),e("li",{parentName:"ul"},"right action")),e("p",null,e("strong",{parentName:"p"},"Important"),": All the actions should be wrapped by ",e("inlineCode",{parentName:"p"},"<ActionBar>"),"!"),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ActionBar } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage 1: display all actions with labels"),e(o,{centerActions:[e(a,{isShowLabel:!0,key:"audio-action",mdxType:"AudioAction"}),e(r,{isShowLabel:!0,key:"video-action",mdxType:"VideoAction"}),e(p,{isShowLabel:!0,key:"participant-action",mdxType:"ParticipantAction"}),e(l,{isShowLabel:!0,key:"chat-action",mdxType:"ChatAction"}),e(m,{isShowLabel:!0,key:"record-action",mdxType:"RecordAction"}),e(d,{isShowLabel:!0,key:"leave-action",mdxType:"LeaveAction"})],leftActions:[e(y,{key:"meeting-info-action",mdxType:"MeetingInfoAction"})],rightActions:[e(u,{key:"logo-icon",text:"RingCentral",mdxType:"LogoIcon"})],mdxType:"ActionBar"}),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
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
} from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar
                centerActions={[
                    <AudioAction isShowLabel={true} key={'audio-action'} />,
                    <VideoAction isShowLabel={true} key={'video-action'} />,
                    <ParticipantAction isShowLabel={true} key={'participant-action'} />,
                    <ChatAction isShowLabel={true} key={'chat-action'} />,
                    <RecordAction isShowLabel={true} key={'record-action'} />,
                    <LeaveAction isShowLabel={true} key={'leave-action'} />,
                ]}
                leftActions={[<MeetingInfoAction key={'meeting-info-action'} />]}
                rightActions={[<LogoIcon key={'logo-icon'} text='RingCentral' />]}
            />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Usage 2: display all actions without labels"),e(o,{centerActions:[e(a,{key:"audio-action",mdxType:"AudioAction"}),e(r,{key:"video-action",mdxType:"VideoAction"}),e(p,{key:"participant-action",mdxType:"ParticipantAction"}),e(l,{key:"chat-action",mdxType:"ChatAction"}),e(m,{key:"record-action",mdxType:"RecordAction"}),e(d,{key:"leave-action",mdxType:"LeaveAction"})],leftActions:[e(y,{key:"meeting-info-action",mdxType:"MeetingInfoAction"})],rightActions:[e(u,{key:"logo-icon",text:"RingCentral",mdxType:"LogoIcon"})],mdxType:"ActionBar"}),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import {
    RcvEngineProvider,
    ActionBar,
    AudioAction,
    ChatAction,
    LeaveAction,
    MeetingInfoAction,
    ParticipantAction,
    RecordAction,
    VideoAction,
} from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar
                centerActions={[
                    <AudioAction key={'audio-action'} />,
                    <VideoAction key={'video-action'} />,
                    <ParticipantAction key={'participant-action'} />,
                    <ChatAction key={'chat-action'} />,
                    <RecordAction key={'record-action'} />,
                    <LeaveAction key={'leave-action'} />,
                ]}
                leftActions={[<MeetingInfoAction key={'meeting-info-action'} />]}
                rightActions={[<LogoIcon key={'logo-icon'} text='RingCentral' />]}
            />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Usage 3: display left and center actions without labels"),e(o,{centerActions:[e(a,{key:"audio-action",mdxType:"AudioAction"}),e(r,{key:"video-action",mdxType:"VideoAction"}),e(p,{key:"participant-action",mdxType:"ParticipantAction"}),e(l,{key:"chat-action",mdxType:"ChatAction"}),e(m,{key:"record-action",mdxType:"RecordAction"}),e(d,{key:"leave-action",mdxType:"LeaveAction"})],leftActions:[e(y,{key:"meeting-info-action",mdxType:"MeetingInfoAction"})],mdxType:"ActionBar"}),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import {
    RcvEngineProvider,
    ActionBar,
    AudioAction,
    ChatAction,
    LeaveAction,
    MeetingInfoAction,
    ParticipantAction,
    RecordAction,
    VideoAction,
} from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar
                centerActions={[
                    <AudioAction key={'audio-action'} />,
                    <VideoAction key={'video-action'} />,
                    <ParticipantAction key={'participant-action'} />,
                    <ChatAction key={'chat-action'} />,
                    <RecordAction key={'record-action'} />,
                    <LeaveAction key={'leave-action'} />,
                ]}
                leftActions={[<MeetingInfoAction key={'meeting-info-action'} />]}
            />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Usage 4: display some center actions without labels"),e(o,{centerActions:[e(a,{key:"audio-action",mdxType:"AudioAction"}),e(r,{key:"video-action",mdxType:"VideoAction"}),e(p,{key:"participant-action",mdxType:"ParticipantAction"}),e(d,{key:"leave-action",mdxType:"LeaveAction"})],mdxType:"ActionBar"}),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import {
    RcvEngineProvider,
    ActionBar,
    AudioAction,
    LeaveAction,
    ParticipantAction,
    VideoAction,
} from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar
                centerActions={[
                    <AudioAction key={'audio-action'} />,
                    <VideoAction key={'video-action'} />,
                    <ParticipantAction key={'participant-action'} />,
                    <LeaveAction key={'leave-action'} />,
                ]}
                leftActions={[<MeetingInfoAction key={'meeting-info-action'} />]}
            />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(f,{of:o,sort:"requiredFirst",mdxType:"ArgsTable"}))}c(v,"MDXContent");v.isMDXComponent=!0;const R=c(()=>{throw new Error("Docs-only story")},"__page");R.parameters={docsOnly:!0};const i={title:"Components/actions/ActionBar",id:"components-actionbar",includeStories:["__page"]},P={};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(h,{mdxStoryNameToKey:P,mdxComponentAnnotations:i},e(v,null))};const j=["__page"];export{j as __namedExportsOrder,R as __page,i as default};
//# sourceMappingURL=ActionBar.stories.9ccd0ab8.js.map
