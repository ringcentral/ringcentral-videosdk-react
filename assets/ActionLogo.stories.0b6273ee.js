var m=Object.defineProperty;var r=(n,e)=>m(n,"name",{value:e,configurable:!0});import"./jsx-runtime.e74d9f1f.js";import{c as o,A as l,M as g,a as d}from"./Props.53abe312.js";import"./iframe.52a24521.js";import{a as u,b as i}from"./index.38d51592.js";import"./string.8e649965.js";import"./es.map.constructor.d97a9456.js";import"./es.number.to-fixed.f6cb879a.js";import"./index.c2e0bee4.js";import"./en.56afbf8a.js";import"./index.d289d216.js";function s(){return s=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var p in a)Object.prototype.hasOwnProperty.call(a,p)&&(n[p]=a[p])}return n},s.apply(this,arguments)}r(s,"_extends");const y={},x="wrapper";function c({components:n,...e}){return o(x,s({},y,e,{components:n,mdxType:"MDXLayout"}),o(g,{title:"Components/actions/LogoIcon",id:"components-actions-logo",mdxType:"Meta"}),o("h1",null,"LogoIcon"),o("p",null,o("strong",{parentName:"p"},"Important"),": All the actions should be wrapped by ",o("inlineCode",{parentName:"p"},"<ActionBar>"),"!"),o("p",null,"The ",o("inlineCode",{parentName:"p"},"LogoIcon")," component is a widget to display a logo string."),o("h2",null,"Demo"),o(u,{rightActions:[o(i,{text:"RingCentral Demo",mdxType:"LogoIcon"})],mdxType:"ActionBar"}),o("h2",null,"Importing"),o("pre",null,o("code",{parentName:"pre",className:"language-jsx"},`import { LogoIcon } from '@ringcentral/video-sdk-react'
`)),o("h2",null,"Usage"),o("pre",null,o("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, LogoIcon } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar rightActions={[<LogoIcon text='RingCentral Demo' />]} />
        </RcvEngineProvider>
    )
}
`)),o("h2",null,"Props"),o(d,{of:i,sort:"requiredFirst",mdxType:"ArgsTable"}))}r(c,"MDXContent");c.isMDXComponent=!0;const h=r(()=>{throw new Error("Docs-only story")},"__page");h.parameters={docsOnly:!0};const t={title:"Components/actions/LogoIcon",id:"components-actions-logo",includeStories:["__page"]},f={};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>o(l,{mdxStoryNameToKey:f,mdxComponentAnnotations:t},o(c,null))};const M=["__page"];export{M as __namedExportsOrder,h as __page,t as default};
//# sourceMappingURL=ActionLogo.stories.0b6273ee.js.map
