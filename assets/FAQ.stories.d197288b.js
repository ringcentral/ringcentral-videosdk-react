var s=Object.defineProperty;var r=(n,t)=>s(n,"name",{value:t,configurable:!0});import"./jsx-runtime.2f8f297c.js";import{c as e,A as m,M as c}from"./Props.9f98070a.js";import"./iframe.04166042.js";import"./string.90f322c9.js";import"./es.map.constructor.f9f46558.js";import"./es.number.to-fixed.347f6618.js";function p(){return p=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])}return n},p.apply(this,arguments)}r(p,"_extends");const d={},u="wrapper";function l({components:n,...t}){return e(u,p({},d,t,{components:n,mdxType:"MDXLayout"}),e(c,{title:"FAQ",mdxType:"Meta"}),e("h1",null,"FAQ"),e("h3",null,"1. Why does the video gallery display incorrectly?"),e("p",null,"You need to set a ",e("inlineCode",{parentName:"p"},"height")," to the UI components container."),e("ul",null,e("li",{parentName:"ul"},"Option 1: Set an accurate PX value of ",e("inlineCode",{parentName:"li"},"height"),". For example:")),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`const App = (
    <div style={{ height: '500px' }}>
        <RcvEngineProvider rcvEngine={rcvEngine}>{children}</RcvEngineProvider>
    </div>
)
`)),e("ul",null,e("li",{parentName:"ul"},"Option 2: Set ",e("inlineCode",{parentName:"li"},"100%")," value of ",e("inlineCode",{parentName:"li"},"height")," to UI components' container and its ancestors. ")))}r(l,"MDXContent");l.isMDXComponent=!0;const g=r(()=>{throw new Error("Docs-only story")},"__page");g.parameters={docsOnly:!0};const o={title:"FAQ",includeStories:["__page"]},h={};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(m,{mdxStoryNameToKey:h,mdxComponentAnnotations:o},e(l,null))};const M=["__page"];export{M as __namedExportsOrder,g as __page,o as default};
//# sourceMappingURL=FAQ.stories.d197288b.js.map
