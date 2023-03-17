var l=Object.defineProperty;var a=(n,t)=>l(n,"name",{value:t,configurable:!0});import"./jsx-runtime.5e168a6b.js";import{c as e,A as m,M as c,a as d}from"./Props.65caad6d.js";import"./iframe.1bc01e4e.js";import{c as h}from"./index.db9b82b7.js";import"./string.0931d700.js";import"./es.map.constructor.d1f097bc.js";import"./es.number.to-fixed.1f1edc86.js";import"./index.1c86d59a.js";import"./index.d289d216.js";import"./en.257cfd59.js";function p(){return p=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])}return n},p.apply(this,arguments)}a(p,"_extends");const g={},u="wrapper";function i({components:n,...t}){return e(u,p({},g,t,{components:n,mdxType:"MDXLayout"}),e(c,{title:"Components/ChatPanel",mdxType:"Meta"}),e("h1",null,"Chat Panel"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ChatPanel")," component renders a panel for chat. It will display the chat messages of the meeting, and provide the ability to send messages inside the meeting."),e("p",null,"For the host or moderator of a meeting, ",e("inlineCode",{parentName:"p"},"ChatPanel")," will provide a dropdown selector, with which the host or moderator can view and update the current chat privilege."),e("h2",null,"Snapshot"),e("img",{src:"./chat-panel.png",style:{maxWidth:400}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ChatPanel } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ChatPanel } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ChatPanel />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(d,{of:h,sort:"requiredFirst",mdxType:"ArgsTable"}))}a(i,"MDXContent");i.isMDXComponent=!0;const v=a(()=>{throw new Error("Docs-only story")},"__page");v.parameters={docsOnly:!0};const r={title:"Components/ChatPanel",includeStories:["__page"]},y={};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:()=>e(m,{mdxStoryNameToKey:y,mdxComponentAnnotations:r},e(i,null))};const A=["__page"];export{A as __namedExportsOrder,v as __page,r as default};
//# sourceMappingURL=ChatPanel.stories.2cf301ed.js.map
