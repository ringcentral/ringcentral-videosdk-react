var p=Object.defineProperty;var n=(o,r)=>p(o,"name",{value:r,configurable:!0});import"./jsx-runtime.e74d9f1f.js";import{c as e,A as l,M as m,a as d}from"./Props.53abe312.js";import"./iframe.52a24521.js";import{R as u}from"./index.38d51592.js";import"./string.8e649965.js";import"./es.map.constructor.d97a9456.js";import"./es.number.to-fixed.f6cb879a.js";import"./index.c2e0bee4.js";import"./en.56afbf8a.js";import"./index.d289d216.js";function s(){return s=Object.assign?Object.assign.bind():function(o){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(o[i]=a[i])}return o},s.apply(this,arguments)}n(s,"_extends");const g={},y="wrapper";function c({components:o,...r}){return e(y,s({},g,r,{components:o,mdxType:"MDXLayout"}),e(m,{title:"Components/actions/RecordAction",id:"components-actions-record",mdxType:"Meta"}),e("h1",null,"RecordAction"),e("p",null,e("strong",{parentName:"p"},"Important"),": All the actions should be wrapped by ",e("inlineCode",{parentName:"p"},"<ActionBar>"),"!"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"RecordAction")," component is a widget to control recording."),e("ul",null,e("li",{parentName:"ul"},"start recording"),e("li",{parentName:"ul"},"pause recording")),e("p",null,"And you need some permissions to start recording:"),e("ul",null,e("li",{parentName:"ul"},"Only host or moderator is allowed."),e("li",{parentName:"ul"},"If E2EE enable, recording is forbidden.")),e("h2",null,"Snapshot"),e("img",{src:"./record-action.png",style:{maxWidth:200}}),e("img",{src:"./record-action-start.png",style:{maxWidth:350}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { RecordAction } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { RcvEngineProvider, RecordAction } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <ActionBar centerActions={[<RecordAction isShowLabel={true} />]} />
        </RcvEngineProvider>
    )
}
`)),e("h2",null,"Props"),e(d,{of:u,sort:"requiredFirst",mdxType:"ArgsTable"}))}n(c,"MDXContent");c.isMDXComponent=!0;const A=n(()=>{throw new Error("Docs-only story")},"__page");A.parameters={docsOnly:!0};const t={title:"Components/actions/RecordAction",id:"components-actions-record",includeStories:["__page"]},h={};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>e(l,{mdxStoryNameToKey:h,mdxComponentAnnotations:t},e(c,null))};const T=["__page"];export{T as __namedExportsOrder,A as __page,t as default};
//# sourceMappingURL=ActionsRecord.stories.e494118f.js.map