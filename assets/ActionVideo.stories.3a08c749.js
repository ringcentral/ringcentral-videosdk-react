var m=Object.defineProperty;var r=(o,t)=>m(o,"name",{value:t,configurable:!0});import"./jsx-runtime.e74d9f1f.js";import{c as e,A as c,M as d,a as l}from"./Props.53abe312.js";import"./iframe.52a24521.js";import{V as u}from"./index.38d51592.js";import"./string.8e649965.js";import"./es.map.constructor.d97a9456.js";import"./es.number.to-fixed.f6cb879a.js";import"./index.c2e0bee4.js";import"./en.56afbf8a.js";import"./index.d289d216.js";function p(){return p=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(o[i]=a[i])}return o},p.apply(this,arguments)}r(p,"_extends");const g={},v="wrapper";function s({components:o,...t}){return e(v,p({},g,t,{components:o,mdxType:"MDXLayout"}),e(d,{title:"Components/actions/VideoAction",id:"components-actions-video",mdxType:"Meta"}),e("h1",null,"VideoAction"),e("p",null,e("strong",{parentName:"p"},"Important"),": All the actions should be wrapped by ",e("inlineCode",{parentName:"p"},"<ActionBar>"),"!"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"VideoAction")," component is a widget to control video mute/unmute, switch cameras."),e("p",null,"If host/moderator requires to unmute all remote users' video, ",e("inlineCode",{parentName:"p"},"VideoAction")," component popups a confirm panel to admit or deny it."),e("h2",null,"Snapshot"),e("img",{src:"./video-unmute.png",style:{maxWidth:300}}),e("img",{src:"./video-remote-unmute.png",style:{maxWidth:300}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { VideoAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, VideoAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<VideoAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(l,{of:u,sort:"requiredFirst",mdxType:"ArgsTable"}))}r(s,"MDXContent");s.isMDXComponent=!0;const A=r(()=>{throw new Error("Docs-only story")},"__page");A.parameters={docsOnly:!0};const n={title:"Components/actions/VideoAction",id:"components-actions-video",includeStories:["__page"]},y={};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:()=>e(c,{mdxStoryNameToKey:y,mdxComponentAnnotations:n},e(s,null))};const w=["__page"];export{w as __namedExportsOrder,A as __page,n as default};
//# sourceMappingURL=ActionVideo.stories.3a08c749.js.map
