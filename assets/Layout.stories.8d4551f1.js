var u=Object.defineProperty;var r=(a,e)=>u(a,"name",{value:e,configurable:!0});import"./jsx-runtime.bcd4683c.js";import{c as t,A as p,M as m,a as y}from"./Props.c3a7791b.js";import"./iframe.c24a78ae.js";import{j as c}from"./index.18363e75.js";import"./string.08a0a6aa.js";import"./es.map.constructor.6e663067.js";import"./es.number.to-fixed.d7a6c3b8.js";import"./index.5ad8b533.js";import"./en.1c762bf0.js";import"./index.d289d216.js";function i(){return i=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(a[l]=n[l])}return a},i.apply(this,arguments)}r(i,"_extends");const d={},g="wrapper";function s({components:a,...e}){return t(g,i({},d,e,{components:a,mdxType:"MDXLayout"}),t(m,{title:"Components/Layout",id:"components-layout",mdxType:"Meta"}),t("h1",null,"Layout"),t("p",null,"The ",t("inlineCode",{parentName:"p"},"Layout")," component renders all meeting session video tiles in a responsive grid layout. This includes the local tile, remote tiles."),t("p",null,"Currently there are 2 types of layout components:"),t("ul",null,t("li",{parentName:"ul"},t("strong",{parentName:"li"}," gallery layout "),": it shows all participants as grid cells in the main content view."),t("li",{parentName:"ul"},t("strong",{parentName:"li"}," speaker layout "),": it shows the active speaker grid cell in the main content view."),t("li",{parentName:"ul"},t("strong",{parentName:"li"}," filmstrip layout "),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"it shows the participants as filmstrip bar at the top of the window."),t("li",{parentName:"ul"},"it shows the active speaker grid cell in the main content view."))),t("li",{parentName:"ul"},t("strong",{parentName:"li"}," custom layout "),":  you can register your custom layout into Layout framework.",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"When select the custom layout menu item, it displays the custom layout content.")))),t("h2",null,"Snapshot"),t("h3",null,"Switch layouts menu"),t("img",{src:"./layout-menu.png",style:{maxWidth:300}}),t("h4",null,"1. Gallery layout"),t("img",{src:"./gallery-layout.png",style:{maxWidth:800}}),t("h4",null,"2. Speaker layout"),t("img",{src:"./speaker-layout.png",style:{maxWidth:800}}),t("h4",null,"3. Filmstrip layout"),t("img",{src:"./filmstrip-layout.png",style:{maxWidth:800}}),t("h2",null,"Importing"),t("pre",null,t("code",{parentName:"pre",className:"language-jsx"},`import { Layout, LayoutType } from '@ringcentral/video-sdk-react'
`)),t("h2",null,"Usage"),t("pre",null,t("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, Layout, LayoutType } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            {/* display gallery layout by default */}
            <Layout defaultLayout={LayoutType.gallery} />

            {/* display speaker layout by default */}
            {/* <Layout defaultLayout={LayoutType.speaker} /> */}

            {/* display filmstrip layout by default */}
            {/* <Layout defaultLayout={LayoutType.filmstrip} /> */}
        </RcvEngineProvider>
    )
}
`)),t("h2",null,"How to define Custom Layout?"),t("p",null,"Please register the custom layout configration as below:"),t("pre",null,t("code",{parentName:"pre",className:"language-jsx"},`import React from 'react';
import { RcvEngineProvider, Layout, LayoutType } from '@ringcentral/video-sdk-react';
import { Dashboard } from '@mui/icons-material';

const App = () => {
     const customLayout = <div>my Layout</div>

    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <Layout customConfig={{
                    menuLabel: 'MyLayout',
                    menuIcon: <Dashboard fontSize='small' />,
                    content: customLayout
                }}
                defaultLayout={LayoutType.custom} />
        </RcvEngineProvider>
    )
}
`)),t("img",{src:"./custom-layout.png",style:{maxWidth:800}}),t("h2",null,"Props"),t(y,{of:c,sort:"requiredFirst",mdxType:"ArgsTable"}))}r(s,"MDXContent");s.isMDXComponent=!0;const h=r(()=>{throw new Error("Docs-only story")},"__page");h.parameters={docsOnly:!0};const o={title:"Components/Layout",id:"components-layout",includeStories:["__page"]},f={};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>t(p,{mdxStoryNameToKey:f,mdxComponentAnnotations:o},t(s,null))};const M=["__page"];export{M as __namedExportsOrder,h as __page,o as default};
//# sourceMappingURL=Layout.stories.8d4551f1.js.map
