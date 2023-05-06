var m=Object.defineProperty;var r=(t,n)=>m(t,"name",{value:n,configurable:!0});import"./jsx-runtime.94e53746.js";import{c as e,A as l,M as g,a as c}from"./Props.8e9b9e04.js";import"./iframe.f03a9731.js";import{i as d}from"./index.65fe6d4e.js";import"./string.15a938b8.js";import"./es.map.constructor.386962c7.js";import"./es.number.to-fixed.601b6dc6.js";import"./index.d289d216.js";import"./index.2003fc8d.js";import"./en.4f52dd31.js";function p(){return p=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},p.apply(this,arguments)}r(p,"_extends");const u={},f="wrapper";function s({components:t,...n}){return e(f,p({},u,n,{components:t,mdxType:"MDXLayout"}),e(g,{title:"Components/MeetingInfoPanel",mdxType:"Meta"}),e("h1",null,"MeetingInfo Panel"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"MeetingInfoPanel")," component renders a panel for meeting info. It will display the meeting info of the meeting, including the host name, the meeting name and the meeting invitation link."),e("h2",null,"Snapshot"),e("h4",null,"Meeting without password"),e("img",{src:"./meeting-info-panel.png",style:{maxWidth:400}}),e("h4",null,"Meeting with password"),e("img",{src:"./meeting-pwd-info-panel.png",style:{maxWidth:400}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { MeetingInfoPanel } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, MeetingInfoPanel } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <MeetingInfoPanel />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(c,{of:d,sort:"requiredFirst",mdxType:"ArgsTable"}))}r(s,"MDXContent");s.isMDXComponent=!0;const h=r(()=>{throw new Error("Docs-only story")},"__page");h.parameters={docsOnly:!0};const o={title:"Components/MeetingInfoPanel",includeStories:["__page"]},M={};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(l,{mdxStoryNameToKey:M,mdxComponentAnnotations:o},e(s,null))};const b=["__page"];export{b as __namedExportsOrder,h as __page,o as default};
//# sourceMappingURL=MeetingInfoPanel.stories.8d5bf82e.js.map
