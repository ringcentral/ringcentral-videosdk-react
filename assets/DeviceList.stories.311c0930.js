var c=Object.defineProperty;var o=(n,i)=>c(n,"name",{value:i,configurable:!0});import"./jsx-runtime.da2139fb.js";import{c as e,A as d,M as m,a as l}from"./Props.89255187.js";import"./iframe.0f4c5424.js";import{g as u,h as v}from"./index.a8cc1b80.js";import"./string.fa6b0247.js";import"./es.map.constructor.b77bbf24.js";import"./es.number.to-fixed.b429e14b.js";import"./index.db7591d5.js";import"./en.56afbf8a.js";import"./index.d289d216.js";function s(){return s=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])}return n},s.apply(this,arguments)}o(s,"_extends");const g={},h="wrapper";function p({components:n,...i}){return e(h,s({},g,i,{components:n,mdxType:"MDXLayout"}),e(m,{title:"Components/panels/DeviceList",id:"components-device-list",mdxType:"Meta"}),e("h1",null,"VideoDeviceList"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"VideoDeviceList")," component renders a preview of the local video devices. If there is no available video devices, the panel will be blank."),e("p",null,"A ",e("inlineCode",{parentName:"p"},"VideoDeviceList")," is typically used on a pre-meeting view, or a device settings page. The React SDK depends on the RingCentral Client SDK for JavaScript."),e("blockquote",null,e("p",{parentName:"blockquote"},"Notice: ",e("inlineCode",{parentName:"p"},"VideoAction")," component includes ",e("inlineCode",{parentName:"p"},"VideoDeviceList")," preview by default.")),e("h2",null,"Snapshot"),e("img",{src:"./video-list.png",style:{maxWidth:300}}),e("img",{src:"./video-list-with-action.png",style:{maxWidth:300}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { VideoDeviceList } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { VideoDeviceList, RcvEngineProvider } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <VideoDeviceList />
        </RcvEngineProvider>
    )
}
`)),e("h3",null,"Props"),e(l,{of:u,mdxType:"ArgsTable"}),e("h1",null,"AudioDeviceList"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"AudioDeviceList")," component renders a preview of the local audio recording devices. If there is no available audio recording devices, the panel will be blank."),e("p",null,"A ",e("inlineCode",{parentName:"p"},"AudioDeviceList")," is typically used on a pre-meeting view, or a device settings page. The React SDK depends on the RingCentral Client SDK for JavaScript."),e("blockquote",null,e("p",{parentName:"blockquote"},"Notice: ",e("inlineCode",{parentName:"p"},"AudioAction")," component includes ",e("inlineCode",{parentName:"p"},"AudioDeviceList")," preview by default.")),e("h2",null,"Snapshot"),e("img",{src:"./audio-list.png",style:{maxWidth:300}}),e("img",{src:"./audio-list-with-action.png",style:{maxWidth:300}}),e("h2",null,"Importing"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { AudioDeviceList } from '@ringcentral/video-sdk-react'
`)),e("h2",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React from 'react'
import { AudioDeviceList, RcvEngineProvider } from '@ringcentral/video-sdk-react'

const App = () => {
    return (
        <RcvEngineProvider rcvEngine={rcvEngine}>
            <AudioDeviceList />
        </RcvEngineProvider>
    )
}
`)),e("h3",null,"Props"),e(l,{of:v,mdxType:"ArgsTable"}))}o(p,"MDXContent");p.isMDXComponent=!0;const D=o(()=>{throw new Error("Docs-only story")},"__page");D.parameters={docsOnly:!0};const t={title:"Components/panels/DeviceList",id:"components-device-list",includeStories:["__page"]},f={};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>e(d,{mdxStoryNameToKey:f,mdxComponentAnnotations:t},e(p,null))};const S=["__page"];export{S as __namedExportsOrder,D as __page,t as default};
//# sourceMappingURL=DeviceList.stories.311c0930.js.map
