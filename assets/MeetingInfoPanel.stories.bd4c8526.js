var s=Object.defineProperty;var r=(t,n)=>s(t,"name",{value:n,configurable:!0});import"./jsx-runtime.ac5ca8d7.js";import{c as e,A as l,M as g,a as c}from"./Props.fa027a4a.js";import"./iframe.89376dcd.js";import{i as d}from"./index.da170d0f.js";import"./string.a74012ab.js";import"./es.map.constructor.a396f881.js";import"./es.number.to-fixed.8e0f6b6a.js";import"./index.d289d216.js";import"./index.ec44b291.js";import"./en.b51b3cc2.js";function p(){return p=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},p.apply(this,arguments)}r(p,"_extends");const u={},f="wrapper";function m({components:t,...n}){return e(f,p({},u,n,{components:t,mdxType:"MDXLayout"}),e(g,{title:"Components/MeetingInfoPanel",mdxType:"Meta"}),e("h1",null,"MeetingInfo Panel"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"MeetingInfoPanel")," component renders a panel for meeting info. It will display the meeting info of the meeting, including the host name, the meeting name and the meeting invitation link."),e("h2",null,"Snapshot"),e("img",{src:"./meeting-info-panel.png",style:{maxWidth:400}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { MeetingInfoPanel } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, MeetingInfoPanel } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <MeetingInfoPanel />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(c,{of:d,sort:"requiredFirst",mdxType:"ArgsTable"}))}r(m,"MDXContent");m.isMDXComponent=!0;const h=r(()=>{throw new Error("Docs-only story")},"__page");h.parameters={docsOnly:!0};const o={title:"Components/MeetingInfoPanel",includeStories:["__page"]},y={};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(l,{mdxStoryNameToKey:y,mdxComponentAnnotations:o},e(m,null))};const A=["__page"];export{A as __namedExportsOrder,h as __page,o as default};
//# sourceMappingURL=MeetingInfoPanel.stories.bd4c8526.js.map
