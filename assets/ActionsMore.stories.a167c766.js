var d=Object.defineProperty;var r=(o,t)=>d(o,"name",{value:t,configurable:!0});import"./jsx-runtime.e74d9f1f.js";import{c as e,A as l,M as u,a as h}from"./Props.53abe312.js";import"./iframe.52a24521.js";import{a as A,e as s}from"./index.38d51592.js";import"./string.8e649965.js";import"./es.map.constructor.d97a9456.js";import"./es.number.to-fixed.f6cb879a.js";import"./index.c2e0bee4.js";import"./en.56afbf8a.js";import"./index.d289d216.js";function c(){return c=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(o[a]=n[a])}return o},c.apply(this,arguments)}r(c,"_extends");const p=r(o=>r(function(n){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",n)},"MDXDefaultShortcode"),"makeShortcode"),y=p("ChatAction"),g=p("RecordAction"),w={},v="wrapper";function m({components:o,...t}){return e(v,c({},w,t,{components:o,mdxType:"MDXLayout"}),e(u,{title:"Components/actions/MoreAction",id:"components-actions-more",mdxType:"Meta"}),e("h1",null,"MoreAction"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"MoreAction")," component is a widget to display actions in the popover panel."),e("h2",null,"Demo"),e(A,{centerActions:[e(s,{isShowLabel:!0,key:"more-action",moreActions:[e(y,{isShowLabel:!0,key:"chat-action",mdxType:"ChatAction"}),e(g,{isShowLabel:!0,key:"record-action",mdxType:"RecordAction"})],mdxType:"MoreAction"})],mdxType:"ActionBar"}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { MoreAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, MoreAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar
                centerActions={[
                    <MoreAction
                        isShowLabel={true}
                        key={'chat-action'}
                        moreActions={[
                            <ChatAction isShowLabel={true} key={'chat-action'} />,
                            <RecordAction isShowLabel={true} key={'record-action'} />
                        ]}
                    />,
                ]}
            />
        </RcvEngineProvider>
    )
}
`)),e("p",null,"You could dynamically set which components are displayed in ",e("inlineCode",{parentName:"p"},"MoreAction")," based on the browser window's size."),e("p",null,"Refers to ",e("a",{parentName:"p",href:"http://localhost:6006/?path=/story/example-video-meeting--gallery-view"},"Video Meeting Demo"),"."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react';
import { useMediaQuery } from '@mui/material';
import { RcvEngineProvider, MoreAction } from '@ringcentral/video-sdk-react';

const App = () => {
    // return true if browser window's size is bigger than 850px
    const isWidthGt850 = useMediaQuery('(min-width:850px)');

    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar
                centerActions={[
                    <AudioAction isShowLabel={true} key={'audio-action'} />,
                    <VideoAction isShowLabel={true} key={'video-action'} />,
                    <ParticipantAction isShowLabel={true} key={'participant-action'} />
                    isWidthGt850 && <ChatAction isShowLabel={true} key={'chat-action'} />,
                    isWidthGt850 && <RecordAction isShowLabel={true} key={'record-action'} />
                    <MoreAction
                        isShowLabel={true}
                        key={'chat-action'}
                        moreActions={[
                            !isWidthGt850 && <ChatAction isShowLabel={true} key={'chat-action'} />,
                            !isWidthGt850 && <RecordAction isShowLabel={true} key={'record-action'} />
                        ]}
                    />,
                ]}
            />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(h,{of:s,sort:"requiredFirst",mdxType:"ArgsTable"}))}r(m,"MDXContent");m.isMDXComponent=!0;const b=r(()=>{throw new Error("Docs-only story")},"__page");b.parameters={docsOnly:!0};const i={title:"Components/actions/MoreAction",id:"components-actions-more",includeStories:["__page"]},M={};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(l,{mdxStoryNameToKey:M,mdxComponentAnnotations:i},e(m,null))};const D=["__page"];export{D as __namedExportsOrder,b as __page,i as default};
//# sourceMappingURL=ActionsMore.stories.a167c766.js.map
