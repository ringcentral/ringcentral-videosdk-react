var h=Object.defineProperty;var r=(o,t)=>h(o,"name",{value:t,configurable:!0});import"./jsx-runtime.b6b58440.js";import{c as e,A as g,M as A,a as c}from"./Props.9635bb7b.js";import"./iframe.f318b3d9.js";import{A as p,C as s,R as d,c as m}from"./index.11855608.js";import"./string.87b26280.js";import"./es.map.constructor.bf4935a6.js";import"./es.number.to-fixed.51f1165d.js";import"./index.d289d216.js";import"./index.2d57bf39.js";import"./en.7a339c0d.js";function l(){return l=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(o[a]=i[a])}return o},l.apply(this,arguments)}r(l,"_extends");const y={},v="wrapper";function u({components:o,...t}){return e(v,l({},y,t,{components:o,mdxType:"MDXLayout"}),e(A,{title:"Components/Actions(advanced)",mdxType:"Meta"}),e("h1",null,"Outline"),e("ol",null,e("li",null,e("a",{href:"#ChatAction"},"ChatAction")),e("li",null,e("a",{href:"#RecordAction"},"RecordAction")),e("li",null,e("a",{href:"#MoreAction"},"MoreAction"))),e("p",null,e("strong",{parentName:"p"},"Important"),": All the actions should be wrapped by ",e("inlineCode",{parentName:"p"},"<ActionBar>"),"!"),e("h1",{id:"ChatAction"},"1. ChatAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ChatAction")," component is a widget to render chat panel. It will display the chat messages of the meeting, and provide the ability to send messages inside the meeting."),e("h2",null,"Demo"),e(p,{centerActions:[e(s,{isShowLabel:!0,mdxType:"ChatAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ChatAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ChatAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<ChatAction isShowLabel={true} />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(c,{of:s,sort:"requiredFirst",mdxType:"ArgsTable"}),e("p",null,"More details and component properties refer to ",e("a",{parentName:"p",href:"./?path=/story/components-chatpanel--page"},"Chat Panel"),"."),e("h1",{id:"RecordAction"},"2. RecordAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"RecordAction")," component is a widget to control recording."),e("ul",null,e("li",{parentName:"ul"},"start recording"),e("li",{parentName:"ul"},"pause recording")),e("p",null,"And you need some permissions to start recording:"),e("ul",null,e("li",{parentName:"ul"},"Only host or moderator is allowed."),e("li",{parentName:"ul"},"If E2EE enable, recording is forbidden.")),e("h2",null,"Snapshot"),e("img",{src:"./record-action.png",style:{maxWidth:200}}),e("img",{src:"./record-action-start.png",style:{maxWidth:350}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { RecordAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, RecordAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<RecordAction isShowLabel={true} />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(c,{of:d,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",{id:"MoreAction"}," 3. MoreAction "),e("p",null,"The ",e("inlineCode",{parentName:"p"},"MoreAction")," component is a widget to display actions in the popover panel."),e("h2",null,"Demo"),e(p,{centerActions:[e(m,{isShowLabel:!0,key:"more-action",moreActions:[e(s,{isShowLabel:!0,key:"chat-action",mdxType:"ChatAction"}),e(d,{isShowLabel:!0,key:"record-action",mdxType:"RecordAction"})],mdxType:"MoreAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { MoreAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, MoreAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar
                centerActions={[
                    <MoreAction
                        isShowLabel={true}
                        key={'chat-action'}
                        moreActions={[
                            <ChatAction isShowLabel={true} key={'chat-action'} />,
                            <RecordAction isShowLabel={true} key={'record-action'} />
                        ]}
                    />,
                ]}
            />
        </RcvEngineProvider>
    )
}
`)),e("p",null,"You could dynamically set which components are displayed in ",e("inlineCode",{parentName:"p"},"MoreAction")," based on the browser window's size."),e("p",null,"Refers to ",e("a",{parentName:"p",href:"http://localhost:6006/?path=/story/example-video-meeting--gallery-view"},"Video Meeting Demo"),"."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react';
import { useMediaQuery } from '@mui/material';
import { RcvEngineProvider, MoreAction } from '@ringcentral/video-sdk-react';

const App = () => {
    // return true if browser window's size is bigger than 850px
    const isWidthGt850 = useMediaQuery('(min-width:850px)');

    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar
                centerActions={[
                    <AudioAction isShowLabel={true} key={'audio-action'} />,
                    <VideoAction isShowLabel={true} key={'video-action'} />,
                    <ParticipantAction isShowLabel={true} key={'participant-action'} />
                    isWidthGt850 && <ChatAction isShowLabel={true} key={'chat-action'} />,
                    isWidthGt850 && <RecordAction isShowLabel={true} key={'record-action'} />
                    <MoreAction
                        isShowLabel={true}
                        key={'chat-action'}
                        moreActions={[
                            !isWidthGt850 && <ChatAction isShowLabel={true} key={'chat-action'} />,
                            !isWidthGt850 && <RecordAction isShowLabel={true} key={'record-action'} />
                        ]}
                    />,
                ]}
            />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(c,{of:m,sort:"requiredFirst",mdxType:"ArgsTable"}))}r(u,"MDXContent");u.isMDXComponent=!0;const w=r(()=>{throw new Error("Docs-only story")},"__page");w.parameters={docsOnly:!0};const n={title:"Components/Actions(advanced)",includeStories:["__page"]},f={};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:()=>e(g,{mdxStoryNameToKey:f,mdxComponentAnnotations:n},e(u,null))};const P=["__page"];export{P as __namedExportsOrder,w as __page,n as default};
//# sourceMappingURL=ActionsAdvanced.stories.74ddd060.js.map
