var A=Object.defineProperty;var o=(t,n)=>A(t,"name",{value:n,configurable:!0});import"./jsx-runtime.1589c18f.js";import{c as e,A as v,M as y,a as r}from"./Props.561ff0ba.js";import"./iframe.cac6840a.js";import{A as a,C as s,R as d,c as m,d as u,e as g}from"./index.261a597c.js";import"./string.004042db.js";import"./es.map.constructor.5aa8ef8e.js";import"./es.number.to-fixed.75675065.js";import"./index.d289d216.js";import"./index.0286ada0.js";import"./en.b51b3cc2.js";function p(){return p=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var c=arguments[n];for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&(t[l]=c[l])}return t},p.apply(this,arguments)}o(p,"_extends");const f={},C="wrapper";function h({components:t,...n}){return e(C,p({},f,n,{components:t,mdxType:"MDXLayout"}),e(y,{title:"Components/Actions(advanced)",mdxType:"Meta"}),e("h1",null,"Advanced Actions Outline"),e("ol",null,e("li",null,e("a",{href:"#ChatAction"},"ChatAction")),e("li",null,e("a",{href:"#RecordAction"},"RecordAction")),e("li",null,e("a",{href:"#MoreAction"},"MoreAction")),e("li",null,e("a",{href:"#ClosedCaptionAction"},"ClosedCaptionAction")),e("li",null,e("a",{href:"#LiveTranscriptionAction"},"LiveTranscriptionAction"))),e("p",null,e("strong",{parentName:"p"},"Important"),": All the actions should be wrapped by ",e("inlineCode",{parentName:"p"},"<ActionBar>"),"!"),e("h1",{id:"ChatAction"},"1. ChatAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ChatAction")," component is a widget to render chat panel. It will display the chat messages of the meeting, and provide the ability to send messages inside the meeting."),e("h2",null,"Demo"),e(a,{centerActions:[e(s,{isShowLabel:!0,mdxType:"ChatAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ChatAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ChatAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<ChatAction isShowLabel={true} />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(r,{of:s,sort:"requiredFirst",mdxType:"ArgsTable"}),e("p",null,"More details and component properties refer to ",e("a",{parentName:"p",href:"./?path=/story/components-chatpanel--page"},"Chat Panel"),"."),e("h1",{id:"RecordAction"},"2. RecordAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"RecordAction")," component is a widget to control recording."),e("ul",null,e("li",{parentName:"ul"},"start recording"),e("li",{parentName:"ul"},"pause recording")),e("p",null,"And you need some permissions to start recording:"),e("ul",null,e("li",{parentName:"ul"},"Only host or moderator is allowed."),e("li",{parentName:"ul"},"If E2EE enable, recording is forbidden.")),e("h2",null,"Snapshot"),e("img",{src:"./record-action.png",style:{maxWidth:200}}),e("img",{src:"./record-action-start.png",style:{maxWidth:350}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { RecordAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, RecordAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<RecordAction isShowLabel={true} />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(r,{of:d,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",{id:"MoreAction"}," 3. MoreAction "),e("p",null,"The ",e("inlineCode",{parentName:"p"},"MoreAction")," component is a widget to display actions in the popover panel."),e("h2",null,"Demo"),e(a,{centerActions:[e(m,{isShowLabel:!0,key:"more-action",moreActions:[e(s,{isShowLabel:!0,key:"chat-action",mdxType:"ChatAction"}),e(d,{isShowLabel:!0,key:"record-action",mdxType:"RecordAction"})],mdxType:"MoreAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { MoreAction } from '@ringcentral/video-sdk-react'
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
`)),e("h2",null,"Props"),e(r,{of:m,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",{id:"ClosedCaptionAction"},"4. ClosedCaptionAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ClosedCaptionAction")," component is a widget to start or pause closed captions. To use this capacity, you need to unmute audio firstly."),e("p",null,"This component including features:"),e("ul",null,e("li",{parentName:"ul"},"Start/Pause recording"),e("li",{parentName:"ul"},"Pinning/unpinning CC"),e("li",{parentName:"ul"},"Changing the font size"),e("li",{parentName:"ul"},"Close button")),e("p",null,"If E2EE enable, closed captions is forbidden."),e("h2",null,"Demo"),e(a,{centerActions:[e(u,{isShowLabel:!0,mdxType:"ClosedCaptionAction"})],mdxType:"ActionBar"}),e("h2",null,"Snapshot"),e("img",{src:"./cc-pin.png",style:{maxWidth:750}}),e("div",null,e("img",{src:"./cc-unpin.png",style:{maxWidth:450}}),e("img",{src:"./cc-font-size.png",style:{maxWidth:200}})),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ClosedCaptionAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ClosedCaptionAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<ClosedCaptionAction isShowLabel={true} />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(r,{of:u,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",{id:"LiveTranscriptionAction"},"5. LiveTranscriptionAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"LiveTranscriptionAction")," component is a widget start or pause live transcriptions. To use this capacity, you need to unmute audio firstly."),e("ul",null,e("li",{parentName:"ul"},"Pause/resume transcription"),e("li",{parentName:"ul"},"Transcription language selection"),e("li",{parentName:"ul"},"Transcription search"),e("li",{parentName:"ul"},"Transcription status indictor (active, paused, etc)")),e("p",null,"If E2EE enable, live transcriptions is forbidden."),e("h2",null,"Demo"),e(a,{centerActions:[e(g,{isShowLabel:!0,mdxType:"LiveTranscriptionAction"})],mdxType:"ActionBar"}),e("h2",null,"Snapshot"),e("img",{src:"./lt-panel.png",style:{maxWidth:400}}),e("img",{src:"./lt-pin.png",style:{maxWidth:400}}),e("div",null,e("img",{src:"./lt-language-change.png",style:{maxWidth:400}}),e("img",{src:"./lt-search.png",style:{maxWidth:400}})),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { LiveTranscriptionAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, LiveTranscriptionAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<LiveTranscriptionAction isShowLabel={true} />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(r,{of:g,sort:"requiredFirst",mdxType:"ArgsTable"}))}o(h,"MDXContent");h.isMDXComponent=!0;const x=o(()=>{throw new Error("Docs-only story")},"__page");x.parameters={docsOnly:!0};const i={title:"Components/Actions(advanced)",includeStories:["__page"]},N={};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(v,{mdxStoryNameToKey:N,mdxComponentAnnotations:i},e(h,null))};const W=["__page"];export{W as __namedExportsOrder,x as __page,i as default};
//# sourceMappingURL=ActionsAdvanced.stories.d5300e4b.js.map
