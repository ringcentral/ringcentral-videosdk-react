var l=Object.defineProperty;var a=(n,t)=>l(n,"name",{value:t,configurable:!0});import"./jsx-runtime.1589c18f.js";import{c as e,A as m,M as c,a as d}from"./Props.561ff0ba.js";import"./iframe.cac6840a.js";import{f as h}from"./index.261a597c.js";import"./string.004042db.js";import"./es.map.constructor.5aa8ef8e.js";import"./es.number.to-fixed.75675065.js";import"./index.d289d216.js";import"./index.0286ada0.js";import"./en.b51b3cc2.js";function p(){return p=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])}return n},p.apply(this,arguments)}a(p,"_extends");const g={},u="wrapper";function i({components:n,...t}){return e(u,p({},g,t,{components:n,mdxType:"MDXLayout"}),e(c,{title:"Components/ChatPanel",mdxType:"Meta"}),e("h1",null,"Chat Panel"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ChatPanel")," component renders a panel for chat. It will display the chat messages of the meeting, and provide the ability to send messages inside the meeting."),e("p",null,"For the host or moderator of a meeting, ",e("inlineCode",{parentName:"p"},"ChatPanel")," will provide a dropdown selector, with which the host or moderator can view and update the current chat privilege."),e("h2",null,"Snapshot"),e("img",{src:"./chat-panel.png",style:{maxWidth:400}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ChatPanel } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ChatPanel } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ChatPanel />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(d,{of:h,sort:"requiredFirst",mdxType:"ArgsTable"}))}a(i,"MDXContent");i.isMDXComponent=!0;const f=a(()=>{throw new Error("Docs-only story")},"__page");f.parameters={docsOnly:!0};const r={title:"Components/ChatPanel",includeStories:["__page"]},v={};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:()=>e(m,{mdxStoryNameToKey:v,mdxComponentAnnotations:r},e(i,null))};const A=["__page"];export{A as __namedExportsOrder,f as __page,r as default};
//# sourceMappingURL=ChatPanel.stories.9055ee14.js.map
