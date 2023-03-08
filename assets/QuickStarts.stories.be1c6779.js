var p=Object.defineProperty;var i=(n,t)=>p(n,"name",{value:t,configurable:!0});import"./jsx-runtime.78e9fc05.js";import{c as e,A as l,M as d}from"./Props.61eb513f.js";import"./iframe.82295548.js";import{G as m,h as y,A as g,M as u,a as A,V as v,P as f,C as h,R as x,L as M,b as E}from"./index.520e25bd.js";import"./string.f3ba68cd.js";import"./es.map.constructor.b160083a.js";import"./es.number.to-fixed.8421bc2c.js";import"./index.a99bfeee.js";import"./index.d289d216.js";import"./en.707de12e.js";function c(){return c=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])}return n},c.apply(this,arguments)}i(c,"_extends");const T={},w="wrapper";function s({components:n,...t}){return e(w,c({},T,t,{components:n,mdxType:"MDXLayout"}),e(d,{title:"Quick Starts",mdxType:"Meta"}),e("h1",null,"Getting Started"),e("p",null,"This section explains how to use the RingCentral SDK React Components Library for some common use cases."),e("p",null,"Before getting started, make sure you have followed the ",e("a",{parentName:"p",href:"./?path=/docs/introduction--page"},"Introduction")," section."),e("h2",null,"Step 1: Inject rcv instance to uikit provider"),e("p",null,"To implement a audio/video communications experience, you just need to:"),e("ol",null,e("li",{parentName:"ol"},"initialize a ",e("inlineCode",{parentName:"li"},"@ringcentral/video-sdk")," instance."),e("li",{parentName:"ol"},"join or start a meeting by rcv instance."),e("li",{parentName:"ol"},"Inject rcv instance to ",e("inlineCode",{parentName:"li"},"RcvEngineProvider"),".")),e("p",null,"For example, a simple App to join the meeting."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { RcvEngine } from '@ringcentral/video-sdk'
import { RcvEngineProvider } from '@ringcentral/video-sdk-react'

const MyApp = ({ config, children }) => {
    const [rcvEngine, setRcvEngine] = useState()
    const [isMeetingJoined, setMeetingJoined] = useState(false)

    useEffect(() => {
        const initSDK = async () => {
            const { clientId, clientSecret, jwt, userName, password } = config
            const engine = RcvEngine.create({
                clientId,
                clientSecret,
            })
            // if config jwt, initialize SDK with jwt
            // else initialize SDK with password
            await engine.authorize({
                grantType: jwt ? GrantType.JWT : GrantType.PASSWORD,
                jwt,
                username: userName,
                password,
            })

            engine.on(EngineEvent.MEETING_JOINED, (meetingId, errorCode) => {
                // todo
                setMeetingJoined(true)
            })
            engine.on(EngineEvent.MEETING_LEFT, () => {
                // todo
                setMeetingJoined(false)
            })
            setRcvEngine(engine)
        }

        initSDK()
    }, [])

    const joinMeeting = async () => {
        // get meetingId and password (if the meeting requires password) from a form
        await rcvEngine.joinMeeting(meetingId, { password })
    }

    return (
        <>
            <button onClick={joinMeeting}>Join</button>
            <RcvEngineProvider rcvEngine={rcvEngine}>{children}</RcvEngineProvider>
        </>
    )
}

export default MyApp
`)),e("h2",null,"Step 2: Render UI components"),e("p",null,"Below is an example with all UI components that ",e("inlineCode",{parentName:"p"},"@ringcentral/video-sdk-react")," provides."),e("div",{style:{display:"flex",width:"100%",height:"300px",flexDirection:"column",boxSizing:"border-box"}},e(m,{layout:y.gallery,style:{flex:1},mdxType:"GalleryLayout"}),e(g,{leftActions:[e(u,{key:"meeting-info-action",mdxType:"MeetingInfoAction"})],centerActions:[e(A,{key:"audio-action",mdxType:"AudioAction"}),e(v,{key:"video-action",mdxType:"VideoAction"}),e(f,{key:"participant-action",mdxType:"ParticipantAction"}),e(h,{key:"chat-action",mdxType:"ChatAction"}),e(x,{key:"record-action",mdxType:"RecordAction"}),e(M,{key:"leave-action",mdxType:"LeaveAction"})],rightActions:[e(E,{key:"logo-icon",mdxType:"LogoIcon"})],mdxType:"ActionBar"})),e("p",null,"Sources codes of this sample."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`// MyApp is the above React component, see Step 1.
import { MyApp } from './app'
import {
    ActionBar,
    AudioAction,
    ChatAction,
    LeaveAction,
    LogoIcon,
    MeetingInfoAction,
    ParticipantAction,
    RecordAction,
    VideoAction,
    GalleryLayout,
    GalleryLayoutType,
} from '@ringcentral/video-sdk-react'

const MyDemo = () => {
    return (
        <MyApp>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '300px',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                }}>
                <GalleryLayout
                    layout={GalleryLayoutType.gallery}
                    style={{
                        flex: 1,
                    }}
                />
                <ActionBar
                    leftActions={[<MeetingInfoAction key={'meeting-info-action'} />]}
                    centerActions={[
                        <AudioAction key={'audio-action'} />,
                        <VideoAction key={'video-action'} />,
                        <ParticipantAction key={'participant-action'} />,
                        <ChatAction key={'chat-action'} />,
                        <RecordAction key={'record-action'} />,
                        <LeaveAction key={'leave-action'} />,
                    ]}
                    rightActions={[<LogoIcon key={'logo-icon'} />]}
                />
            </div>
        </MyApp>
    )
}
`)))}i(s,"MDXContent");s.isMDXComponent=!0;const k=i(()=>{throw new Error("Docs-only story")},"__page");k.parameters={docsOnly:!0};const o={title:"Quick Starts",includeStories:["__page"]},S={};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(l,{mdxStoryNameToKey:S,mdxComponentAnnotations:o},e(s,null))};const O=["__page"];export{O as __namedExportsOrder,k as __page,o as default};
//# sourceMappingURL=QuickStarts.stories.be1c6779.js.map
