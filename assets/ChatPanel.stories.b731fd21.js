var l=Object.defineProperty;var a=(n,t)=>l(n,"name",{value:t,configurable:!0});import"./jsx-runtime.a8940ecc.js";import{c as e,A as m,M as c,a as d}from"./Props.bc8a8ac2.js";import"./iframe.7cb325b6.js";import{H as h}from"./index.642da789.js";import"./string.26e48fc8.js";import"./es.map.constructor.094f04f5.js";import"./es.number.to-fixed.a40c54d1.js";import"./index.e456c442.js";import"./index.d289d216.js";import"./en.707de12e.js";function p(){return p=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])}return n},p.apply(this,arguments)}a(p,"_extends");const g={},u="wrapper";function i({components:n,...t}){return e(u,p({},g,t,{components:n,mdxType:"MDXLayout"}),e(c,{title:"Components/ChatPanel",mdxType:"Meta"}),e("h1",null,"Chat Panel"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ChatPanel")," component renders a panel for chat. It will display the chat messages of the meeting, and provide the ability to send messages inside the meeting."),e("p",null,"For the host or moderator of a meeting, ",e("inlineCode",{parentName:"p"},"ChatPanel")," will provide a dropdown selector, with which the host or moderator can view and update the current chat privilege."),e("h2",null,"Snapshot"),e("img",{src:"./chat-panel.png",style:{maxWidth:400}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ChatPanel } from '@ringcentral/video-sdk-react'
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
//# sourceMappingURL=ChatPanel.stories.b731fd21.js.map
