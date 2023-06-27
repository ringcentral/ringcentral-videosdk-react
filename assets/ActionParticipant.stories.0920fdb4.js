var m=Object.defineProperty;var a=(e,n)=>m(e,"name",{value:n,configurable:!0});import"./jsx-runtime.bcd4683c.js";import{c as t,A as l,M as d,a as u}from"./Props.c3a7791b.js";import"./iframe.c24a78ae.js";import{a as g,P as c}from"./index.18363e75.js";import"./string.08a0a6aa.js";import"./es.map.constructor.6e663067.js";import"./es.number.to-fixed.d7a6c3b8.js";import"./index.5ad8b533.js";import"./en.1c762bf0.js";import"./index.d289d216.js";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},p.apply(this,arguments)}a(p,"_extends");const A={},y="wrapper";function s({components:e,...n}){return t(y,p({},A,n,{components:e,mdxType:"MDXLayout"}),t(d,{title:"Components/actions/ParticipantAction",id:"components-actions-participant",mdxType:"Meta"}),t("h1",null,"ParticipantAction"),t("p",null,t("strong",{parentName:"p"},"Important"),": All the actions should be wrapped by ",t("inlineCode",{parentName:"p"},"<ActionBar>"),"!"),t("p",null,"The ",t("inlineCode",{parentName:"p"},"ParticipantAction")," component is a widget to manage participants."),t("h2",null,"Demo"),t(g,{centerActions:[t(c,{mdxType:"ParticipantAction"})],mdxType:"ActionBar"}),t("h2",null,"Importing"),t("pre",null,t("code",{parentName:"pre",className:"language-jsx"},`import { ParticipantAction } from '@ringcentral/video-sdk-react'
`)),t("h2",null,"Usage"),t("pre",null,t("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ParticipantAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<ParticipantAction />]} />
        </RcvEngineProvider>
    )
}
`)),t("h2",null,"Props"),t(u,{of:c,sort:"requiredFirst",mdxType:"ArgsTable"}),t("p",null,"More details and component properties refer to ",t("a",{parentName:"p",href:"./?path=/story/components-participantpanel--page"},"Participant Panel"),"."))}a(s,"MDXContent");s.isMDXComponent=!0;const P=a(()=>{throw new Error("Docs-only story")},"__page");P.parameters={docsOnly:!0};const r={title:"Components/actions/ParticipantAction",id:"components-actions-participant",includeStories:["__page"]},f={};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:()=>t(l,{mdxStoryNameToKey:f,mdxComponentAnnotations:r},t(s,null))};const D=["__page"];export{D as __namedExportsOrder,P as __page,r as default};
//# sourceMappingURL=ActionParticipant.stories.0920fdb4.js.map
