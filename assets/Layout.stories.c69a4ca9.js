var i=Object.defineProperty;var r=(a,t)=>i(a,"name",{value:t,configurable:!0});import"./jsx-runtime.e74d9f1f.js";import{c as e,A as u,M as m,a as y}from"./Props.53abe312.js";import"./iframe.52a24521.js";import{j as c}from"./index.38d51592.js";import"./string.8e649965.js";import"./es.map.constructor.d97a9456.js";import"./es.number.to-fixed.f6cb879a.js";import"./index.c2e0bee4.js";import"./en.56afbf8a.js";import"./index.d289d216.js";function s(){return s=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(a[l]=n[l])}return a},s.apply(this,arguments)}r(s,"_extends");const d={},g="wrapper";function p({components:a,...t}){return e(g,s({},d,t,{components:a,mdxType:"MDXLayout"}),e(m,{title:"Components/Layout",id:"components-layout",mdxType:"Meta"}),e("h1",null,"Layout"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"Layout")," component renders all meeting session video tiles in a responsive grid layout. This includes the local tile, remote tiles."),e("p",null,"Currently there are 2 types of layout components:"),e("ul",null,e("li",{parentName:"ul"},e("strong",{parentName:"li"}," gallery layout "),": it shows all participants as grid cells in the main content view."),e("li",{parentName:"ul"},e("strong",{parentName:"li"}," speaker layout "),": it shows the active speaker grid cell in the main content view.")),e("h2",null,"Snapshot"),e("h4",null,"1. Gallery layout"),e("img",{src:"./gallery-layout.png",style:{maxWidth:850}}),e("h4",null,"2. Speaker layout"),e("img",{src:"./speaker-layout.png",style:{maxWidth:850}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { Layout, LayoutType } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, Layout, LayoutType } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            {/* display gallery layout by default */}
            <Layout defaultLayout={LayoutType.gallery} />

            {/* display speaker layout by default */}
            {/* <Layout defaultLayout={LayoutType.speaker} /> */}
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(y,{of:c,sort:"requiredFirst",mdxType:"ArgsTable"}))}r(p,"MDXContent");p.isMDXComponent=!0;const h=r(()=>{throw new Error("Docs-only story")},"__page");h.parameters={docsOnly:!0};const o={title:"Components/Layout",id:"components-layout",includeStories:["__page"]},f={};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(u,{mdxStoryNameToKey:f,mdxComponentAnnotations:o},e(p,null))};const j=["__page"];export{j as __namedExportsOrder,h as __page,o as default};
//# sourceMappingURL=Layout.stories.c69a4ca9.js.map
