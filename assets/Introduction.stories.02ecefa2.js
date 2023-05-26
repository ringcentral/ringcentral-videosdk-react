var s=Object.defineProperty;var r=(n,t)=>s(n,"name",{value:t,configurable:!0});import"./jsx-runtime.e74d9f1f.js";import{c as e,A as c,M as m}from"./Props.53abe312.js";import"./iframe.52a24521.js";import"./string.8e649965.js";import"./es.map.constructor.d97a9456.js";import"./es.number.to-fixed.f6cb879a.js";function l(){return l=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},l.apply(this,arguments)}r(l,"_extends");const d={},g="wrapper";function p({components:n,...t}){return e(g,l({},d,t,{components:n,mdxType:"MDXLayout"}),e(m,{title:"Introduction",mdxType:"Meta"}),e("h1",null,"@ringcentral/video-sdk-react"),e("p",null,"React components for building realtime meeting applications with RingCentral."),e("ul",null,e("li",{parentName:"ul"},"UI Components",e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-rcvengineprovider--page"},"RcvEngineProvider")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-layout--page"},"Layout")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/docs/components-actionbar--page"},"ActionBar")," (Refer to the actions category for all the UI components.)"),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-device-list--page"},"Device list")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-participantpanel--page"},"Participant panel")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-meetinginfopanel--page"},"Meeting info panel")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-chatpanel--page"},"Chat panel")))),e("li",{parentName:"ul"},"Examples",e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/example-video-meeting--quick-start"},"Video meeting"))))),e("p",null,"With Ringcentral video uikit, develpers could create a web application with real-time audio/video communications quickly."),e("p",null,"Below is a snapshot of audio/video communications integrated with UI components."),e("img",{src:"./sample.png",style:{maxWidth:800}}),e("h2",null,"Getting Started"),e("ol",null,e("li",{parentName:"ol"},"Preparation")),e("ul",null,e("li",{parentName:"ul"},"npm or yarn need to be installed."),e("li",{parentName:"ul"},"register a RingCentral video account (free - ",e("a",{parentName:"li",href:"https://app.ringcentral.com/signup"},"https://app.ringcentral.com/signup"),")")),e("ol",{start:2},e("li",{parentName:"ol"},"Install ",e("inlineCode",{parentName:"li"},"@ringcentral/video-sdk")," and the necessary peer dependencies to your project")),e("pre",null,e("code",{parentName:"pre"},`yarn add @ringcentral/video-sdk
`)),e("p",null,e("inlineCode",{parentName:"p"},"@ringcentral/video-sdk")," includes public APIs for audio/video communications. More docs refer to: ",e("a",{parentName:"p",href:"https://ringcentral.github.io/ringcentral-videosdk-js/"},"https://ringcentral.github.io/ringcentral-videosdk-js/")),e("ol",{start:3},e("li",{parentName:"ol"},"Install ",e("inlineCode",{parentName:"li"},"@ringcentral/video-sdk-react")," and the necessary peer dependencies to your project")),e("pre",null,e("code",{parentName:"pre"},`yarn add @ringcentral/video-sdk-react
`)),e("ol",{start:4},e("li",{parentName:"ol"},"Join a meeting or start a meeting by ",e("inlineCode",{parentName:"li"},"@ringcentral/video-sdk"))),e("ul",null,e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://ringcentral.github.io/ringcentral-videosdk-js/classes/RcvEngine.html#joinMeeting"},"rcv.joinMeeting()")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://ringcentral.github.io/ringcentral-videosdk-js/classes/RcvEngine.html#startInstantMeeting"},"rcv.startInstantMeeting()"))),e("p",null,"Below is an exmaple that how to initialize web video sdk and start a meeting."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { RcvEngine } from '@ringcentral/video-sdk';
...

const rcv = RcvEngine.create({
    clientId,
    clientSecret,
    // ...
})
...
// token authorize
await rcv.setAuthToken(tokenString)
// or JWT authorize
await rcv.authorize({
    grantType: GrantType.JWT,
    jwt: jwtString,
})
...
// add listeners
rcv.on(EngineEvent.MEETING_JOINED, (meetingId, errorCode) => {})
rcv.on(EngineEvent.MEETING_LEFT, () => {})
// join a meeting
rcv.joinMeeting(meetingId, { password })
// or start a meeting
rcv.startInstantMeeting()
...
`)),e("ol",{start:5},e("li",{parentName:"ol"},"Render a ",e("inlineCode",{parentName:"li"},"RcvEngineProvider")," at the root of your application.")),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"rcvEngine")," instance must be initialized and is ",e("strong",{parentName:"li"}," in meeting status "),"."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"RcvEngineProvider")," accpets ",e("inlineCode",{parentName:"li"},"rcvEngine")," instance as a mandatory property."),e("li",{parentName:"ul"},"You can custom the locale strings for action labels, tips, waiting room panel and so on. More details refer to ",e("a",{parentName:"li",href:".//?path=/story/summary-locales--page"},"default locales"),".")),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { RcvEngineProvider } from '@ringcentral/video-sdk-react'

const App = (
    <div style={{ height: '500px' }}>
        <RcvEngineProvider
            // optional
            localeConfig={{
                chat_dialog_title: 'My chat',
            }}
            // optional
            waitingRoomContent={<p>You are in the waiting room!</p>}
            // mandatory
            rcvEngine={rcvEngine}>
            {children}
        </RcvEngineProvider>
    </div>
)
`)),e("p",null,"More information refers to ",e("a",{parentName:"p",href:"./?path=/story/components-rcvengineprovider--page"},"RcvEngineProvider"),"."),e("h2",null,"Next"),e("ul",null,e("li",{parentName:"ul"},e("a",{parentName:"li",href:"http://localhost:6006/?path=/story/faq--page"},"FAQ")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/summary-quick-starts--page"},"Quick Starts"))))}r(p,"MDXContent");p.isMDXComponent=!0;const u=r(()=>{throw new Error("Docs-only story")},"__page");u.parameters={docsOnly:!0};const a={title:"Introduction",includeStories:["__page"]},h={};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:()=>e(c,{mdxStoryNameToKey:h,mdxComponentAnnotations:a},e(p,null))};const w=["__page"];export{w as __namedExportsOrder,u as __page,a as default};
//# sourceMappingURL=Introduction.stories.02ecefa2.js.map
