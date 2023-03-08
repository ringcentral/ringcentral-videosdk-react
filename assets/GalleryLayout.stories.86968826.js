var i=Object.defineProperty;var o=(t,r)=>i(t,"name",{value:r,configurable:!0});import"./jsx-runtime.78e9fc05.js";import{c as e,A as m,M as u,a as y}from"./Props.61eb513f.js";import"./iframe.82295548.js";import{G as c}from"./index.520e25bd.js";import"./string.f3ba68cd.js";import"./es.map.constructor.b160083a.js";import"./es.number.to-fixed.8421bc2c.js";import"./index.a99bfeee.js";import"./index.d289d216.js";import"./en.707de12e.js";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},s.apply(this,arguments)}o(s,"_extends");const d={},g="wrapper";function p({components:t,...r}){return e(g,s({},d,r,{components:t,mdxType:"MDXLayout"}),e(u,{title:"Components/GalleryLayout",mdxType:"Meta"}),e("h1",null,"Gallery Layout"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"GalleryLayout")," component renders all meeting session video tiles in a responsive grid layout. This includes the local tile, remote tiles."),e("h2",null,"Snapshot"),e("p",null,e("img",{parentName:"p",src:"./gallery-layout.png",alt:null})),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { GalleryLayout, GalleryLayoutType } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, GalleryLayout, GalleryLayoutType } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <GalleryLayout layout={GalleryLayoutType.gallery} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(y,{of:c,sort:"requiredFirst",mdxType:"ArgsTable"}))}o(p,"MDXContent");p.isMDXComponent=!0;const v=o(()=>{throw new Error("Docs-only story")},"__page");v.parameters={docsOnly:!0};const a={title:"Components/GalleryLayout",includeStories:["__page"]},f={};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:()=>e(m,{mdxStoryNameToKey:f,mdxComponentAnnotations:a},e(p,null))};const A=["__page"];export{A as __namedExportsOrder,v as __page,a as default};
//# sourceMappingURL=GalleryLayout.stories.86968826.js.map
