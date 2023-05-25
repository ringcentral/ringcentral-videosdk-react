var l=Object.defineProperty;var r=(n,t)=>l(n,"name",{value:t,configurable:!0});import"./jsx-runtime.da2139fb.js";import{c as e,A as m,M as c,a as d}from"./Props.89255187.js";import"./iframe.0f4c5424.js";import{f as h}from"./index.a8cc1b80.js";import"./string.fa6b0247.js";import"./es.map.constructor.b77bbf24.js";import"./es.number.to-fixed.b429e14b.js";import"./index.db7591d5.js";import"./en.56afbf8a.js";import"./index.d289d216.js";function s(){return s=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var p in o)Object.prototype.hasOwnProperty.call(o,p)&&(n[p]=o[p])}return n},s.apply(this,arguments)}r(s,"_extends");const g={},u="wrapper";function i({components:n,...t}){return e(u,s({},g,t,{components:n,mdxType:"MDXLayout"}),e(c,{title:"Components/panels/ChatPanel",id:"components-chatpanel",mdxType:"Meta"}),e("h1",null,"Chat Panel"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ChatPanel")," component renders a panel for chat. It will display the chat messages of the meeting, and provide the ability to send messages inside the meeting."),e("p",null,"For the host or moderator of a meeting, ",e("inlineCode",{parentName:"p"},"ChatPanel")," will provide a dropdown selector, with which the host or moderator can view and update the current chat privilege."),e("h2",null,"Snapshot"),e("img",{src:"./chat-panel.png",style:{maxWidth:400}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ChatPanel } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ChatPanel } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ChatPanel />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(d,{of:h,sort:"requiredFirst",mdxType:"ArgsTable"}))}r(i,"MDXContent");i.isMDXComponent=!0;const f=r(()=>{throw new Error("Docs-only story")},"__page");f.parameters={docsOnly:!0};const a={title:"Components/panels/ChatPanel",id:"components-chatpanel",includeStories:["__page"]},v={};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:()=>e(m,{mdxStoryNameToKey:v,mdxComponentAnnotations:a},e(i,null))};const A=["__page"];export{A as __namedExportsOrder,f as __page,a as default};
//# sourceMappingURL=ChatPanel.stories.1f4b0810.js.map
