var m=Object.defineProperty;var o=(n,r)=>m(n,"name",{value:r,configurable:!0});import"./jsx-runtime.e74d9f1f.js";import{c as e,A as l,M as c,a as d}from"./Props.53abe312.js";import"./iframe.52a24521.js";import{i as g}from"./index.38d51592.js";import"./string.8e649965.js";import"./es.map.constructor.d97a9456.js";import"./es.number.to-fixed.f6cb879a.js";import"./index.c2e0bee4.js";import"./en.56afbf8a.js";import"./index.d289d216.js";function p(){return p=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])}return n},p.apply(this,arguments)}o(p,"_extends");const u={},v="wrapper";function s({components:n,...r}){return e(v,p({},u,r,{components:n,mdxType:"MDXLayout"}),e(c,{title:"Components/RcvEngineProvider",mdxType:"Meta"}),e("h1",null,"RcvEngineProvider"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"RcvEngineProvider")," component is the data wrapper, which is used to:"),e("ul",null,e("li",{parentName:"ul"},"keep the rcvEngine instance to control the video meeting"),e("li",{parentName:"ul"},"customize the locale strings"),e("li",{parentName:"ul"},"handle global error ")),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { RcvEngineProvider } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <div>Layout</div>
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(d,{of:g,sort:"requiredFirst",mdxType:"ArgsTable"}))}o(s,"MDXContent");s.isMDXComponent=!0;const h=o(()=>{throw new Error("Docs-only story")},"__page");h.parameters={docsOnly:!0};const t={title:"Components/RcvEngineProvider",includeStories:["__page"]},y={};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>e(l,{mdxStoryNameToKey:y,mdxComponentAnnotations:t},e(s,null))};const w=["__page"];export{w as __namedExportsOrder,h as __page,t as default};
//# sourceMappingURL=EngineProvider.stories.7c3c8fa1.js.map
