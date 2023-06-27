var l=Object.defineProperty;var r=(n,t)=>l(n,"name",{value:t,configurable:!0});import"./jsx-runtime.bcd4683c.js";import{c as e,A as c,M as g,a as d}from"./Props.c3a7791b.js";import"./iframe.c24a78ae.js";import{a as u,I as m}from"./index.18363e75.js";import"./string.08a0a6aa.js";import"./es.map.constructor.6e663067.js";import"./es.number.to-fixed.d7a6c3b8.js";import"./index.5ad8b533.js";import"./en.1c762bf0.js";import"./index.d289d216.js";function p(){return p=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},p.apply(this,arguments)}r(p,"_extends");const h={},y="wrapper";function s({components:n,...t}){return e(y,p({},h,t,{components:n,mdxType:"MDXLayout"}),e(g,{title:"Components/actions/InviteAction",id:"components-actions-invite",mdxType:"Meta"}),e("h1",null,"InviteAction"),e("p",null,e("strong",{parentName:"p"},"Important"),": All the actions should be wrapped by ",e("inlineCode",{parentName:"p"},"<ActionBar>"),"!"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"InviteAction")," component is a widget to invite other users by meeting link, meeting invite information or email."),e("ul",null,e("li",{parentName:"ul"},e("strong",{parentName:"li"}," Copy meeting link "),": copy the meeting link to the clip board to share it with others. "),e("li",{parentName:"ul"},e("strong",{parentName:"li"}," Copy meeting invite "),": copy the meeting invite to clip board to share it with others."),e("li",{parentName:"ul"},e("strong",{parentName:"li"}," Copy meeting password "),": copy the meeting password to clip board to share it with others. It is only shown when the meeting requires a password."),e("li",{parentName:"ul"},e("strong",{parentName:"li"}," Invite by email "),": invite a person to a meeting by sending them an email."),e("li",{parentName:"ul"},e("strong",{parentName:"li"}," Invite by phone "),": invite a person to a meeting by dailing the primary number.")),e("blockquote",null,e("p",{parentName:"blockquote"},"It allows developers to customize the meeting URL by config ",e("inlineCode",{parentName:"p"},"renderMeetingLink")," property.")),e("h2",null,"Demo"),e(u,{centerActions:[e(m,{renderMeetingLink:o=>`http://my.demo.com/${o.meetingId}`,mdxType:"InviteAction"})],mdxType:"ActionBar"}),e("h2",null,"Snapshot for Invite by phone"),e("h4",null,"Invite by phone modal"),e("img",{src:"./invite-by-phone.png",style:{maxWidth:400}}),e("h4",null,"Select country code"),e("img",{src:"./invite-by-phone-country.png",style:{maxWidth:400}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { InviteAction } from '@ringcentral/video-sdk-react'
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
`)),e("h2",null,"Props"),e(d,{of:m,sort:"requiredFirst",mdxType:"ArgsTable"}))}r(s,"MDXContent");s.isMDXComponent=!0;const v=r(()=>{throw new Error("Docs-only story")},"__page");v.parameters={docsOnly:!0};const i={title:"Components/actions/InviteAction",id:"components-actions-invite",includeStories:["__page"]},b={};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(c,{mdxStoryNameToKey:b,mdxComponentAnnotations:i},e(s,null))};const E=["__page"];export{E as __namedExportsOrder,v as __page,i as default};
//# sourceMappingURL=ActionInvite.stories.402c001d.js.map
