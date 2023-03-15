var l=Object.defineProperty;var n=(r,e)=>l(r,"name",{value:e,configurable:!0});import"./jsx-runtime.c01ebc5a.js";import{c as t,A as m,M as c,a as d}from"./Props.f63c10f4.js";import"./iframe.ece1f1e3.js";import{g as u}from"./index.e1755a12.js";import"./string.1b50b192.js";import"./es.map.constructor.41794fb1.js";import"./es.number.to-fixed.7abf0a1c.js";import"./index.e37651a8.js";import"./index.d289d216.js";import"./en.257cfd59.js";function p(){return p=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])}return r},p.apply(this,arguments)}n(p,"_extends");const g={},P="wrapper";function s({components:r,...e}){return t(P,p({},g,e,{components:r,mdxType:"MDXLayout"}),t(c,{title:"Components/ParticipantPanel",mdxType:"Meta"}),t("h1",null,"Participant Panel"),t("p",null,"The ",t("inlineCode",{parentName:"p"},"ParticipantPanel")," component renders a list for participants. It will display the participant's name along with their mute and video status."),t("p",null,"For the host or moderator of a meeting, ",t("inlineCode",{parentName:"p"},"ParticipantPanel")," will provide a toolbar, with which the host or moderator can lock meeting, mute all participants or do some other operations."),t("h2",null,"Snapshot"),t("img",{src:"./participant-list.png",style:{maxWidth:400}}),t("h2",null,"Importing"),t("pre",null,t("code",{parentName:"pre",className:"language-jsx"},`import { ParticipantPanel } from '@ringcentral/video-sdk-react'
`)),t("h2",null,"Usage"),t("pre",null,t("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ParticipantPanel } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ParticipantPanel />
        </RcvEngineProvider>
    )
}
`)),t("h2",null,"Props"),t(d,{of:u,sort:"requiredFirst",mdxType:"ArgsTable"}))}n(s,"MDXContent");s.isMDXComponent=!0;const h=n(()=>{throw new Error("Docs-only story")},"__page");h.parameters={docsOnly:!0};const a={title:"Components/ParticipantPanel",includeStories:["__page"]},y={};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:()=>t(m,{mdxStoryNameToKey:y,mdxComponentAnnotations:a},t(s,null))};const A=["__page"];export{A as __namedExportsOrder,h as __page,a as default};
//# sourceMappingURL=ParticipantPanel.stories.0fd5672b.js.map
