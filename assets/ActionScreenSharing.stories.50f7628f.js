var m=Object.defineProperty;var o=(r,n)=>m(r,"name",{value:n,configurable:!0});import"./jsx-runtime.bcd4683c.js";import{c as e,A as l,M as d,a as g}from"./Props.c3a7791b.js";import"./iframe.c24a78ae.js";import{a as u,S as s}from"./index.18363e75.js";import"./string.08a0a6aa.js";import"./es.map.constructor.6e663067.js";import"./es.number.to-fixed.d7a6c3b8.js";import"./index.5ad8b533.js";import"./en.1c762bf0.js";import"./index.d289d216.js";function c(){return c=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(r[i]=a[i])}return r},c.apply(this,arguments)}o(c,"_extends");const h={},A="wrapper";function p({components:r,...n}){return e(A,c({},h,n,{components:r,mdxType:"MDXLayout"}),e(d,{title:"Components/actions/ScreenSharingAction",id:"components-actions-screensharing",mdxType:"Meta"}),e("h1",null,"ScreenSharingAction"),e("p",null,e("strong",{parentName:"p"},"Important"),": All the actions should be wrapped by ",e("inlineCode",{parentName:"p"},"<ActionBar>"),"!"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"ScreenSharingAction")," component is a widget to share the device screen or application."),e("h2",null,"Demo"),e(u,{centerActions:[e(s,{mdxType:"ScreenSharingAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ScreenSharingAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, ScreenSharingAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<ScreenSharingAction />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(g,{of:s,sort:"requiredFirst",mdxType:"ArgsTable"}))}o(p,"MDXContent");p.isMDXComponent=!0;const S=o(()=>{throw new Error("Docs-only story")},"__page");S.parameters={docsOnly:!0};const t={title:"Components/actions/ScreenSharingAction",id:"components-actions-screensharing",includeStories:["__page"]},y={};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>e(l,{mdxStoryNameToKey:y,mdxComponentAnnotations:t},e(p,null))};const D=["__page"];export{D as __namedExportsOrder,S as __page,t as default};
//# sourceMappingURL=ActionScreenSharing.stories.50f7628f.js.map
