var m=Object.defineProperty;var i=(e,n)=>m(e,"name",{value:n,configurable:!0});import"./jsx-runtime.bcd4683c.js";import{c as o,A as l,M as d,a as u}from"./Props.c3a7791b.js";import"./iframe.c24a78ae.js";import{a,b as t}from"./index.18363e75.js";import"./string.08a0a6aa.js";import"./es.map.constructor.6e663067.js";import"./es.number.to-fixed.d7a6c3b8.js";import"./index.5ad8b533.js";import"./en.1c762bf0.js";import"./index.d289d216.js";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var c=arguments[n];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(e[g]=c[g])}return e},s.apply(this,arguments)}i(s,"_extends");const h={},v="wrapper";function p({components:e,...n}){return o(v,s({},h,n,{components:e,mdxType:"MDXLayout"}),o(d,{title:"Components/actions/LogoIcon",id:"components-actions-logo",mdxType:"Meta"}),o("h1",null,"LogoIcon"),o("p",null,o("strong",{parentName:"p"},"Important"),": All the actions should be wrapped by ",o("inlineCode",{parentName:"p"},"<ActionBar>"),"!"),o("p",null,"The ",o("inlineCode",{parentName:"p"},"LogoIcon")," component is a widget to display a logo string."),o("h2",null,"Demo"),o("h3",null,"Only show text logo"),o(a,{rightActions:[o(t,{text:"RingCentral",mdxType:"LogoIcon"})],mdxType:"ActionBar"}),o("h3",null,"Only show image logo"),o(a,{rightActions:[o(t,{imgSrc:"https://support.ringcentral.com/content/dam/support/us/en/images/content/test/download1.png",mdxType:"LogoIcon"})],mdxType:"ActionBar"}),o("h3",null,"Show both text and image logo"),o(a,{rightActions:[o(t,{text:"RingCentral",imgSrc:"https://support.ringcentral.com/content/dam/support/us/en/images/content/test/download1.png",mdxType:"LogoIcon"})],mdxType:"ActionBar"}),o("h3",null,"Show both text and image logo (image is on the left)"),o(a,{rightActions:[o(t,{text:"RingCentral",imgSrc:"https://support.ringcentral.com/content/dam/support/us/en/images/content/test/download1.png",imgPos:"left",mdxType:"LogoIcon"})],mdxType:"ActionBar"}),o("h2",null,"Importing"),o("pre",null,o("code",{parentName:"pre",className:"language-jsx"},`import { LogoIcon } from '@ringcentral/video-sdk-react'
`)),o("h2",null,"Usage"),o("h3",null,"Only show text"),o("pre",null,o("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, LogoIcon } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar rightActions={[<LogoIcon text='RingCentral Demo' />]} />
        </RcvEngineProvider>
    )
}
`)),o("h3",null,"Only show image"),o("pre",null,o("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, LogoIcon } from '@ringcentral/video-sdk-react'
import ImageLogo from './logo.png'

// use image string
const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar rightActions={[<LogoIcon imgSrc='http://demo/logo.png' />]} />
        </RcvEngineProvider>
    )
}

// use ImageLogo
const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar rightActions={[<LogoIcon imgSrc={ImageLogo} />]} />
        </RcvEngineProvider>
    )
}
`)),o("h3",null,"Show both text and image logo"),o("pre",null,o("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, LogoIcon } from '@ringcentral/video-sdk-react'

// image is on the right by default
const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar rightActions={[<LogoIcon text='RingCentral' imgSrc={ImageLogo} />]} />
        </RcvEngineProvider>
    )
}

// image is on the left
const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar rightActions={[<LogoIcon text='RingCentral' imgSrc={ImageLogo} imgPos='left' />]} />
        </RcvEngineProvider>
    )
}
`)),o("h2",null,"Props"),o(u,{of:t,sort:"requiredFirst",mdxType:"ArgsTable"}))}i(p,"MDXContent");p.isMDXComponent=!0;const x=i(()=>{throw new Error("Docs-only story")},"__page");x.parameters={docsOnly:!0};const r={title:"Components/actions/LogoIcon",id:"components-actions-logo",includeStories:["__page"]},A={};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:()=>o(l,{mdxStoryNameToKey:A,mdxComponentAnnotations:r},o(p,null))};const N=["__page"];export{N as __namedExportsOrder,x as __page,r as default};
//# sourceMappingURL=ActionLogo.stories.ba273101.js.map
