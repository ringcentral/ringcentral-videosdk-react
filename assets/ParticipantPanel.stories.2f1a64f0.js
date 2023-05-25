var l=Object.defineProperty;var r=(n,e)=>l(n,"name",{value:e,configurable:!0});import"./jsx-runtime.da2139fb.js";import{c as t,A as m,M as c,a as d}from"./Props.89255187.js";import"./iframe.0f4c5424.js";import{l as u}from"./index.a8cc1b80.js";import"./string.fa6b0247.js";import"./es.map.constructor.b77bbf24.js";import"./es.number.to-fixed.b429e14b.js";import"./index.db7591d5.js";import"./en.56afbf8a.js";import"./index.d289d216.js";function p(){return p=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},p.apply(this,arguments)}r(p,"_extends");const g={},P="wrapper";function s({components:n,...e}){return t(P,p({},g,e,{components:n,mdxType:"MDXLayout"}),t(c,{title:"Components/panels/ParticipantPanel",id:"components-participantpanel",mdxType:"Meta"}),t("h1",null,"Participant Panel"),t("p",null,"The ",t("inlineCode",{parentName:"p"},"ParticipantPanel")," component renders a list for participants. It will display the participant's name along with their mute and video status."),t("p",null,"For the host or moderator of a meeting, ",t("inlineCode",{parentName:"p"},"ParticipantPanel")," will provide a toolbar, with which the host or moderator can lock meeting, mute all participants or do some other operations."),t("h2",null,"Snapshot"),t("img",{src:"./participant-list.png",style:{maxWidth:400}}),t("h2",null,"Importing"),t("pre",null,t("code",{parentName:"pre",className:"language-jsx"},`import { ParticipantPanel } from '@ringcentral/video-sdk-react'
`)),t("h2",null,"Usage"),t("pre",null,t("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ParticipantPanel } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ParticipantPanel />
        </RcvEngineProvider>
    )
}
`)),t("h2",null,"Props"),t(d,{of:u,sort:"requiredFirst",mdxType:"ArgsTable"}))}r(s,"MDXContent");s.isMDXComponent=!0;const h=r(()=>{throw new Error("Docs-only story")},"__page");h.parameters={docsOnly:!0};const a={title:"Components/panels/ParticipantPanel",id:"components-participantpanel",includeStories:["__page"]},y={};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:()=>t(m,{mdxStoryNameToKey:y,mdxComponentAnnotations:a},t(s,null))};const A=["__page"];export{A as __namedExportsOrder,h as __page,a as default};
//# sourceMappingURL=ParticipantPanel.stories.2f1a64f0.js.map
