var c=Object.defineProperty;var o=(n,i)=>c(n,"name",{value:i,configurable:!0});import"./jsx-runtime.4f7135b4.js";import{c as e,A as d,M as m,a as s}from"./Props.d2244092.js";import"./iframe.25534554.js";import{d as u,e as v}from"./index.432917be.js";import"./string.61482e76.js";import"./es.map.constructor.f3772b9e.js";import"./es.number.to-fixed.d3232156.js";import"./index.183a6c99.js";import"./index.d289d216.js";import"./en.707de12e.js";function l(){return l=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])}return n},l.apply(this,arguments)}o(l,"_extends");const g={},h="wrapper";function p({components:n,...i}){return e(h,l({},g,i,{components:n,mdxType:"MDXLayout"}),e(m,{title:"Components/DeviceList",mdxType:"Meta"}),e("h1",null,"VideoDeviceList"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"VideoDeviceList")," component renders a preview of the local video devices. If there is no available video devices, the panel will be blank."),e("p",null,"A ",e("inlineCode",{parentName:"p"},"VideoDeviceList")," is typically used on a pre-meeting view, or a device settings page. The React SDK depends on the RingCentral Client SDK for JavaScript."),e("blockquote",null,e("p",{parentName:"blockquote"},"Notice: ",e("inlineCode",{parentName:"p"},"VideoAction")," component includes ",e("inlineCode",{parentName:"p"},"VideoDeviceList")," preview by default.")),e("h2",null,"Snapshot"),e("img",{src:"./video-list.png",style:{maxWidth:300}}),e("img",{src:"./video-list-with-action.png",style:{maxWidth:300}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { VideoDeviceList } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { VideoDeviceList, RcvEngineProvider } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <VideoDeviceList />
        </RcvEngineProvider>
    )
}
`)),e("h3",null,"Props"),e(s,{of:u,mdxType:"ArgsTable"}),e("h1",null,"AudioDeviceList"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"AudioDeviceList")," component renders a preview of the local audio recording devices. If there is no available audio recording devices, the panel will be blank."),e("p",null,"A ",e("inlineCode",{parentName:"p"},"AudioDeviceList")," is typically used on a pre-meeting view, or a device settings page. The React SDK depends on the RingCentral Client SDK for JavaScript."),e("blockquote",null,e("p",{parentName:"blockquote"},"Notice: ",e("inlineCode",{parentName:"p"},"AudioAction")," component includes ",e("inlineCode",{parentName:"p"},"AudioDeviceList")," preview by default.")),e("h2",null,"Snapshot"),e("img",{src:"./audio-list.png",style:{maxWidth:300}}),e("img",{src:"./audio-list-with-action.png",style:{maxWidth:300}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { AudioDeviceList } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { AudioDeviceList, RcvEngineProvider } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <AudioDeviceList />
        </RcvEngineProvider>
    )
}
`)),e("h3",null,"Props"),e(s,{of:v,mdxType:"ArgsTable"}))}o(p,"MDXContent");p.isMDXComponent=!0;const D=o(()=>{throw new Error("Docs-only story")},"__page");D.parameters={docsOnly:!0};const t={title:"Components/DeviceList",includeStories:["__page"]},f={};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>e(d,{mdxStoryNameToKey:f,mdxComponentAnnotations:t},e(p,null))};const S=["__page"];export{S as __namedExportsOrder,D as __page,t as default};
//# sourceMappingURL=DeviceList.stories.6f007ab3.js.map
