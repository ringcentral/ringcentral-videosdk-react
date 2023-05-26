var c=Object.defineProperty;var r=(t,n)=>c(t,"name",{value:n,configurable:!0});import"./jsx-runtime.e74d9f1f.js";import{c as e,A as l,M as g,a as d}from"./Props.53abe312.js";import"./iframe.52a24521.js";import{a as u,M as m}from"./index.38d51592.js";import"./string.8e649965.js";import"./es.map.constructor.d97a9456.js";import"./es.number.to-fixed.f6cb879a.js";import"./index.c2e0bee4.js";import"./en.56afbf8a.js";import"./index.d289d216.js";function p(){return p=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},p.apply(this,arguments)}r(p,"_extends");const f={},y="wrapper";function s({components:t,...n}){return e(y,p({},f,n,{components:t,mdxType:"MDXLayout"}),e(g,{title:"Components/actions/MeetingInfoAction",id:"components-actions-meetinginfo",mdxType:"Meta"}),e("h1",null,"MeetingInfoAction"),e("p",null,e("strong",{parentName:"p"},"Important"),": All the actions should be wrapped by ",e("inlineCode",{parentName:"p"},"<ActionBar>"),"!"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"MeetingInfoAction")," component is a widget to display meeting information."),e("blockquote",null,e("p",{parentName:"blockquote"},"It recommends to coustomize your meeting link by the ",e("inlineCode",{parentName:"p"},"renderMeetingLink")," property.")),e("h2",null,"Demo"),e(u,{leftActions:[e(m,{mdxType:"MeetingInfoAction"})],mdxType:"ActionBar"}),e("h2",null,"Snapshot"),e("img",{src:"./meeting-info-panel.png",style:{maxWidth:400}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { MeetingInfoAction } from '@ringcentral/video-sdk-react'
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
`)),e("h2",null,"Props"),e(d,{of:m,sort:"requiredFirst",mdxType:"ArgsTable"}),e("p",null,"More details and component properties refer to ",e("a",{parentName:"p",href:"./?path=/story/components-meetinginfopanel--page"},"MeetingInfo Panel"),"."))}r(s,"MDXContent");s.isMDXComponent=!0;const M=r(()=>{throw new Error("Docs-only story")},"__page");M.parameters={docsOnly:!0};const o={title:"Components/actions/MeetingInfoAction",id:"components-actions-meetinginfo",includeStories:["__page"]},A={};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(l,{mdxStoryNameToKey:A,mdxComponentAnnotations:o},e(s,null))};const P=["__page"];export{P as __namedExportsOrder,M as __page,o as default};
//# sourceMappingURL=ActionMeetingInfo.stories.0a81c049.js.map
