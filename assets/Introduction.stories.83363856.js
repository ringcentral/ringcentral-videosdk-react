var s=Object.defineProperty;var r=(a,t)=>s(a,"name",{value:t,configurable:!0});import"./jsx-runtime.e25c9067.js";import{c as e,A as c,M as m}from"./Props.bf67ec81.js";import"./iframe.3d1fb436.js";import"./index.7086465b.js";import"./string.147cb313.js";import"./es.map.constructor.ab2a386a.js";import"./es.number.to-fixed.d6c9e70a.js";import"./index.d289d216.js";import"./index.fa17637c.js";import"./en.696be457.js";function l(){return l=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(a[o]=i[o])}return a},l.apply(this,arguments)}r(l,"_extends");const d={},g="wrapper";function p({components:a,...t}){return e(g,l({},d,t,{components:a,mdxType:"MDXLayout"}),e(m,{title:"Introduction",mdxType:"Meta"}),e("h1",null,"@ringcentral/video-sdk-react"),e("p",null,"React components for building realtime meeting applications with RingCentral."),e("ul",null,e("li",{parentName:"ul"},"UI Components",e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/docs/components-actionbar--page"},"ActionBar")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/docs/components-actions--page"},"Actions")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-device-list--page"},"Device list")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-participantpanel--page"},"Participant panel")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-chatpanel--page"},"Chat panel")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-meetinginfopanel--page"},"Meeting info panel")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/components-gallerylayout--page"},"Gallery layout")))),e("li",{parentName:"ul"},"Examples",e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/example-gallery--gallery-view"},"Video meeting"))))),e("p",null,"With Ringcentral video uikit, develpers could create a web application with real-time audio/video communications quickly."),e("p",null,"Below is a snapshot of audio/video communications integrated with UI components."),e("img",{src:"./sample.png",style:{maxWidth:800}}),e("h2",null,"Getting Started"),e("ol",null,e("li",{parentName:"ol"},"Preparation")),e("ul",null,e("li",{parentName:"ul"},"npm or yarn need to be installed."),e("li",{parentName:"ul"},"register a RingCentral video account (free - ",e("a",{parentName:"li",href:"https://app.ringcentral.com/signup"},"https://app.ringcentral.com/signup"),")")),e("ol",{start:2},e("li",{parentName:"ol"},"Install ",e("inlineCode",{parentName:"li"},"@ringcentral/video-sdk")," and the necessary peer dependencies to your project")),e("pre",null,e("code",{parentName:"pre"},`yarn add @ringcentral/video-sdk
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
`)),e("p",null,e("a",{parentName:"p",href:"https://codesandbox.io/s/video-sdk-react-sample-d4sv9v"},"codesandbox demo")),e("ol",{start:5},e("li",{parentName:"ol"},"Render a ",e("inlineCode",{parentName:"li"},"RcvEngineProvider")," at the root of your application.")),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"rcvEngine")," instance must be initialized and is ",e("strong",{parentName:"li"}," in meeting status "),"."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"RcvEngineProvider")," accpets ",e("inlineCode",{parentName:"li"},"rcvEngine")," instance as a mandatory property."),e("li",{parentName:"ul"},"You can custom the locale strings for action labels, tips, waiting room panel and so on. More details refer to ",e("a",{parentName:"li",href:".//?path=/story/summary-locales--page"},"default locales"),".")),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { RcvEngineProvider } from '@ringcentral/video-sdk-react'

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
`)),e("h2",null,"Next"),e("ul",null,e("li",{parentName:"ul"},e("a",{parentName:"li",href:"http://localhost:6006/?path=/story/faq--page"},"FAQ")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"./?path=/story/summary-quick-starts--page"},"Quick Starts"))))}r(p,"MDXContent");p.isMDXComponent=!0;const u=r(()=>{throw new Error("Docs-only story")},"__page");u.parameters={docsOnly:!0};const n={title:"Introduction",includeStories:["__page"]},h={};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:()=>e(c,{mdxStoryNameToKey:h,mdxComponentAnnotations:n},e(p,null))};const j=["__page"];export{j as __namedExportsOrder,u as __page,n as default};
//# sourceMappingURL=Introduction.stories.83363856.js.map
