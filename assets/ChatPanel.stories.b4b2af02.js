var l=Object.defineProperty;var r=(n,t)=>l(n,"name",{value:t,configurable:!0});import"./jsx-runtime.e74d9f1f.js";import{c as e,A as m,M as c,a as d}from"./Props.53abe312.js";import"./iframe.52a24521.js";import{f as h}from"./index.38d51592.js";import"./string.8e649965.js";import"./es.map.constructor.d97a9456.js";import"./es.number.to-fixed.f6cb879a.js";import"./index.c2e0bee4.js";import"./en.56afbf8a.js";import"./index.d289d216.js";function s(){return s=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var p in o)Object.prototype.hasOwnProperty.call(o,p)&&(n[p]=o[p])}return n},s.apply(this,arguments)}r(s,"_extends");const g={},u="wrapper";function i({components:n,...t}){return e(u,s({},g,t,{components:n,mdxType:"MDXLayout"}),e(c,{title:"Components/panels/ChatPanel",id:"components-chatpanel",mdxType:"Meta"}),e("h1",null,"Chat Panel"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ChatPanel")," component renders a panel for chat. It will display the chat messages of the meeting, and provide the ability to send messages inside the meeting."),e("p",null,"For the host or moderator of a meeting, ",e("inlineCode",{parentName:"p"},"ChatPanel")," will provide a dropdown selector, with which the host or moderator can view and update the current chat privilege."),e("h2",null,"Snapshot"),e("img",{src:"./chat-panel.png",style:{maxWidth:400}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ChatPanel } from '@ringcentral/video-sdk-react'
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
//# sourceMappingURL=ChatPanel.stories.b4b2af02.js.map
