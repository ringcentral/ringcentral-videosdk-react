var g=Object.defineProperty;var t=(n,e)=>g(n,"name",{value:e,configurable:!0});import{w as v,j as h,S as L,r as E}from"./iframe.cac6840a.js";var N=t(function(e){var i=e.name,m=e.parameterName,u=e.wrapper,o=e.skipIfNoParametersOrOptions,p=o===void 0?!1:o,l=t(function(r){return function(a,s){var f=s.parameters&&s.parameters[m];return f&&f.disable||p&&!r&&!f?a(s):u(a,s,{options:r,parameters:f})}},"decorator");return function(){for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return typeof r[0]=="function"?l().apply(void 0,r):function(){if(arguments.length>1)return r.length>1?l(r).apply(void 0,arguments):l.apply(void 0,r).apply(void 0,arguments);throw new Error("Passing stories directly into ".concat(i,`() is not allowed,
        instead use addDecorator(`).concat(i,") and pass options with the '").concat(m,"' parameter"))}}},"makeDecorator"),O="links",w=v.document,y=v.HTMLElement,D=t(function(e){return h.getChannel().emit(E,e)},"navigate"),k=t(function(e){var i=e.target;if(i instanceof y){var m=i,u=m.dataset,o=u.sbKind,p=u.sbStory;(o||p)&&(e.preventDefault(),D({kind:o,story:p}))}},"linksListener"),d=!1,P=t(function(){d||(d=!0,w.addEventListener("click",k))},"on"),S=t(function(){d&&(d=!1,w.removeEventListener("click",k))},"off"),T=N({name:"withLinks",parameterName:O,wrapper:t(function(e,i){return P(),h.getChannel().once(L,S),e(i)},"wrapper")});module&&module.hot&&module.hot.decline&&module.hot.decline();var b=[T];export{b as decorators};
//# sourceMappingURL=preview.05bfb93a.js.map
