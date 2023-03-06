var s=Object.defineProperty;var r=(t,a)=>s(t,"name",{value:a,configurable:!0});import"./jsx-runtime.a8940ecc.js";import{c as e,A as c,M as m}from"./Props.bc8a8ac2.js";import"./iframe.7cb325b6.js";import"./index.642da789.js";import"./string.26e48fc8.js";import"./es.map.constructor.094f04f5.js";import"./es.number.to-fixed.a40c54d1.js";import"./index.e456c442.js";import"./index.d289d216.js";import"./en.707de12e.js";function l(){return l=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},l.apply(this,arguments)}r(l,"_extends");const d={},u="wrapper";function p({components:t,...a}){return e(u,l({},d,a,{components:t,mdxType:"MDXLayout"}),e(m,{title:"Introduction",mdxType:"Meta"}),e("h1",null,"@ringcentral/video-sdk-react"),e("p",null,"React components for building realtime meeting applications with RingCentral."),e("ul",null,e("li",{parentName:"ul"},"UI Components",e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/docs/components-actionbar--page"},"ActionBar")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/docs/components-actions--page"},"Actions")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-device-list--page"},"Device list")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-participantpanel--page"},"Participant panel")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-chatpanel--page"},"Chat panel")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-meetinginfopanel--page"},"Meeting info panel")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-gallerylayout--page"},"Gallery layout")))),e("li",{parentName:"ul"},"Examples",e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/example-gallery--gallery-view"},"Gallery layout"))))),e("p",null,"With Ringcentral video uikit, develpers could create a web application with real-time audio/video communications quickly."),e("p",null,"Below is a snapshot of audio/video communications integrated with UI components."),e("img",{src:"./sample.png",style:{maxWidth:800}}),e("h2",null,"Getting Started"),e("ol",null,e("li",{parentName:"ol"},"Preparation")),e("ul",null,e("li",{parentName:"ul"},"npm or yarn need to be installed."),e("li",{parentName:"ul"},"register a RingCentral video account (free - ",e("a",{parentName:"li",href:"https://app.ringcentral.com/signup"},"https://app.ringcentral.com/signup"),")")),e("ol",{start:2},e("li",{parentName:"ol"},"Install ",e("inlineCode",{parentName:"li"},"@ringcentral/video-sdk")," and the necessary peer dependencies to your project")),e("pre",null,e("code",{parentName:"pre"},`yarn add @ringcentral/video-sdk
`)),e("p",null,e("inlineCode",{parentName:"p"},"@ringcentral/video-sdk")," includes public APIs for audio/video communications. More docs refer to: ",e("a",{parentName:"p",href:"https://ringcentral.github.io/ringcentral-videosdk-js/"},"https://ringcentral.github.io/ringcentral-videosdk-js/")),e("ol",{start:3},e("li",{parentName:"ol"},"Install ",e("inlineCode",{parentName:"li"},"@ringcentral/video-sdk-react")," and the necessary peer dependencies to your project")),e("pre",null,e("code",{parentName:"pre"},`yarn add @ringcentral/video-sdk-react
`)),e("ol",{start:4},e("li",{parentName:"ol"},"Join a meeting or start a meeting by ",e("inlineCode",{parentName:"li"},"@ringcentral/video-sdk"))),e("ul",null,e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://ringcentral.github.io/ringcentral-videosdk-js/classes/RcvEngine.html#joinMeeting"},"rcv.joinMeeting()")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://ringcentral.github.io/ringcentral-videosdk-js/classes/RcvEngine.html#startInstantMeeting"},"rcv.startInstantMeeting()"))),e("p",null,"Below is an exmaple that how to initialize web video sdk and start a meeting."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { RcvEngine } from '@ringcentral/video-sdk'

const rcv = RcvEngine.create({
    clientId,
    clientSecret,
    // ...
})
// token authorize
await rcv.setAuthToken(JSON.stringify(auth.token))
// or usename/password authorize
await rcv.authorize({
    grantType: GrantType.PASSWORD,
    username,
    password,
})
// add listeners
rcv.on(EngineEvent.MEETING_JOINED, (meetingId, errorCode) => {})
rcv.on(EngineEvent.MEETING_LEFT, () => {})
// join a meeting
rcv.joinMeeting(meetingId, { password })
// or start a meeting
rcv.startInstantMeeting()
`)),e("ol",{start:5},e("li",{parentName:"ol"},"Render a ",e("inlineCode",{parentName:"li"},"RcvEngineProvider")," at the root of your application.")),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"rcvEngine")," instance must be initialized and is ",e("strong",{parentName:"li"}," in meeting status "),"."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"RcvEngineProvider")," accpets ",e("inlineCode",{parentName:"li"},"rcvEngine")," instance as a mandatory property."),e("li",{parentName:"ul"},"You can custom the locale strings for action labels, tips and so on. More details refer to ",e("a",{parentName:"li",href:".//?path=/story/summary-locales--page"},"default locales"),".")),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { RcvEngineProvider } from '@ringcentral/video-sdk-react'

const App = (
    <RcvEngineProvider
        localeConfig={{
            chat_dialog_title: 'My chat',
        }}
        rcvEngine={rcvEngine}>
        {children}
    </RcvEngineProvider>
)
`)),e("p",null,"For more common use cases, please review our ",e("a",{parentName:"p",href:"./?path=/story/summary-quick-starts--page"},"Quick Starts")," guide."))}r(p,"MDXContent");p.isMDXComponent=!0;const g=r(()=>{throw new Error("Docs-only story")},"__page");g.parameters={docsOnly:!0};const n={title:"Introduction",includeStories:["__page"]},h={};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:()=>e(c,{mdxStoryNameToKey:h,mdxComponentAnnotations:n},e(p,null))};const j=["__page"];export{j as __namedExportsOrder,g as __page,n as default};
//# sourceMappingURL=Introduction.stories.45f6870d.js.map
