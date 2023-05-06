var v=Object.defineProperty;var c=(i,t)=>v(i,"name",{value:t,configurable:!0});import"./jsx-runtime.94e53746.js";import{c as e,A as f,M as y,a as n}from"./Props.8e9b9e04.js";import"./iframe.f03a9731.js";import{a as N,V as I,A as o,M as m,P as s,b as g,S as d,I as u,L as h}from"./index.65fe6d4e.js";import"./string.15a938b8.js";import"./es.map.constructor.386962c7.js";import"./es.number.to-fixed.601b6dc6.js";import"./index.d289d216.js";import"./index.2003fc8d.js";import"./en.4f52dd31.js";function p(){return p=Object.assign?Object.assign.bind():function(i){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(i[l]=r[l])}return i},p.apply(this,arguments)}c(p,"_extends");const x={},P="wrapper";function A({components:i,...t}){return e(P,p({},x,t,{components:i,mdxType:"MDXLayout"}),e(y,{title:"Components/Actions(basic)",mdxType:"Meta"}),e("h1",null,"Basic Actions Outline"),e("ol",null,e("li",null,e("a",{href:"#AudioAction"},"AudioAction")),e("li",null,e("a",{href:"#VideoAction"},"VideoAction")),e("li",null,e("a",{href:"#MeetingInfoAction"},"MeetingInfoAction")),e("li",null,e("a",{href:"#ParticipantAction"},"ParticipantAction")),e("li",null,e("a",{href:"#LogoIcon"},"LogoIcon")),e("li",null,e("a",{href:"#ScreenSharingAction"},"ScreenSharingAction")),e("li",null,e("a",{href:"#InviteAction"},"InviteAction")),e("li",null,e("a",{href:"#LeaveAction"},"LeaveAction"))),e("p",null,e("strong",{parentName:"p"},"Important"),": All the actions should be wrapped by ",e("inlineCode",{parentName:"p"},"<ActionBar>"),"!"),e("h1",{id:"AudioAction"},"1. AudioAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"AudioAction")," component is a widget to control audio mute/unmute, switch recording devices."),e("p",null,"If host/moderator requires to unmute all remote users' audio, ",e("inlineCode",{parentName:"p"},"AudioAction")," component popups a confirm panel to admit or deny it."),e("h2",null,"Snapshot"),e("img",{src:"./audio-unmute.png",style:{maxWidth:300}}),e("img",{src:"./audio-remote-unmute.png",style:{maxWidth:300}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { AudioAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, AudioAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<AudioAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(n,{of:N,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",{id:"VideoAction"},"2. VideoAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"VideoAction")," component is a widget to control video mute/unmute, switch cameras."),e("p",null,"If host/moderator requires to unmute all remote users' video, ",e("inlineCode",{parentName:"p"},"VideoAction")," component popups a confirm panel to admit or deny it."),e("h2",null,"Snapshot"),e("img",{src:"./video-unmute.png",style:{maxWidth:300}}),e("img",{src:"./video-remote-unmute.png",style:{maxWidth:300}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { VideoAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, VideoAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<VideoAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(n,{of:I,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",{id:"MeetingInfoAction"},"3. MeetingInfoAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"MeetingInfoAction")," component is a widget to display meeting information."),e("blockquote",null,e("p",{parentName:"blockquote"},"It recommends to coustomize your meeting link by the ",e("inlineCode",{parentName:"p"},"renderMeetingLink")," property.")),e("h2",null,"Demo"),e(o,{leftActions:[e(m,{mdxType:"MeetingInfoAction"})],mdxType:"ActionBar"}),e("h2",null,"Snapshot"),e("img",{src:"./meeting-info-panel.png",style:{maxWidth:400}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { MeetingInfoAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, MeetingInfoAction } from '@ringcentral/video-sdk-react'

const App = () => {
    // custom meeting link
    const getMeetingLink = (meetingInfo) => {
        return \`http://my.demo.com/\${meetingInfo.meetingId}\`
    }

    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar leftActions={[<MeetingInfoAction renderMeetingLink={getMeetingLink} />]}} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(n,{of:m,sort:"requiredFirst",mdxType:"ArgsTable"}),e("p",null,"More details and component properties refer to ",e("a",{parentName:"p",href:"./?path=/story/components-meetinginfopanel--page"},"MeetingInfo Panel"),"."),e("h1",{id:"ParticipantAction"},"4. ParticipantAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ParticipantAction")," component is a widget to manage participants."),e("h2",null,"Demo"),e(o,{centerActions:[e(s,{mdxType:"ParticipantAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ParticipantAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ParticipantAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<ParticipantAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(n,{of:s,sort:"requiredFirst",mdxType:"ArgsTable"}),e("p",null,"More details and component properties refer to ",e("a",{parentName:"p",href:"./?path=/story/components-participantpanel--page"},"Participant Panel"),"."),e("h1",{id:"LogoIcon"},"5. LogoIcon"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"LogoIcon")," component is a widget to display a logo string."),e("h2",null,"Demo"),e(o,{rightActions:[e(g,{text:"RingCentral Demo",mdxType:"LogoIcon"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { LogoIcon } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, LogoIcon } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar rightActions={[<LogoIcon text='RingCentral Demo' />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(n,{of:g,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",{id:"ScreenSharingAction"}," 6. ScreenSharingAction "),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ScreenSharingAction")," component is a widget to share the device screen or application."),e("h2",null,"Demo"),e(o,{centerActions:[e(d,{mdxType:"ScreenSharingAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ScreenSharingAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ScreenSharingAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<ScreenSharingAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(n,{of:d,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",{id:"InviteAction"}," 7. InviteAction "),e("p",null,"The ",e("inlineCode",{parentName:"p"},"InviteAction")," component is a widget to invite other users by meeting link, meeting invite information or email."),e("ul",null,e("li",{parentName:"ul"},e("strong",{parentName:"li"}," Copy meeting link "),": copy the meeting link to the clip board to share it with others. "),e("li",{parentName:"ul"},e("strong",{parentName:"li"}," Copy meeting invite "),": copy the meeting invite to clip board to share it with others."),e("li",{parentName:"ul"},e("strong",{parentName:"li"}," Copy meeting password "),": copy the meeting password to clip board to share it with others. It is only shown when the meeting requires a password."),e("li",{parentName:"ul"},e("strong",{parentName:"li"}," Invite by email "),": invite a person to a meeting by sending them an email."),e("li",{parentName:"ul"},e("strong",{parentName:"li"}," Invite by phone "),": invite a person to a meeting by dailing the primary number.")),e("blockquote",null,e("p",{parentName:"blockquote"},"It allows developers to customize the meeting URL by config ",e("inlineCode",{parentName:"p"},"renderMeetingLink")," property.")),e("h2",null,"Demo"),e(o,{centerActions:[e(u,{renderMeetingLink:r=>`http://my.demo.com/${r.meetingId}`,mdxType:"InviteAction"})],mdxType:"ActionBar"}),e("h2",null,"Snapshot for Invite by phone"),e("h4",null,"Invite by phone modal"),e("img",{src:"./invite-by-phone.png",style:{maxWidth:400}}),e("h4",null,"Select country code"),e("img",{src:"./invite-by-phone-country.png",style:{maxWidth:400}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { InviteAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, InviteAction } from '@ringcentral/video-sdk-react'

const App = () => {
    const getMeetingLink = (meetingInfo) => {
        return \`http://my.demo.com/\${meetingInfo.meetingId}\`
    }

    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar
                centerActions={[
                    <InviteAction renderMeetingLink={getMeetingLink} />,
                ]}
            />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(n,{of:u,sort:"requiredFirst",mdxType:"ArgsTable"}),e("h1",{id:"LeaveAction"},"8. LeaveAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"LeaveAction")," component is a widget to leave/end the meeting."),e("h2",null,"Demo&Snapshot"),e(o,{centerActions:[e(h,{mdxType:"LeaveAction"})],mdxType:"ActionBar"}),e("p",null,"When click ",e("inlineCode",{parentName:"p"},"LeaveAction"),", if the following conditions are met, a confirm modal is shown."),e("ul",null,e("li",{parentName:"ul"},"you are a ",e("inlineCode",{parentName:"li"},"host")," or ",e("inlineCode",{parentName:"li"},"moderator")),e("li",{parentName:"ul"},"more than one participants are in the meeting")),e("img",{src:"./leave-confirm.png",style:{maxWidth:450}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { LeaveAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, LeaveAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<LeaveAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(n,{of:h,sort:"requiredFirst",mdxType:"ArgsTable"}))}c(A,"MDXContent");A.isMDXComponent=!0;const E=c(()=>{throw new Error("Docs-only story")},"__page");E.parameters={docsOnly:!0};const a={title:"Components/Actions(basic)",includeStories:["__page"]},T={};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:()=>e(f,{mdxStoryNameToKey:T,mdxComponentAnnotations:a},e(A,null))};const D=["__page"];export{D as __namedExportsOrder,E as __page,a as default};
//# sourceMappingURL=Actions.stories.b4257135.js.map
