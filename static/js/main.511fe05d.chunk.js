(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(12),o=a.n(s),l=(a(27),a(6)),i=(a(28),a(7)),r=a(1);function d(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid ",children:[Object(r.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.sitname}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link ","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link",to:"/about",children:e.about})})]}),Object(r.jsxs)("div",{className:"d-flex .flex-sm-row ",children:[Object(r.jsx)("div",{className:"bg-danger rounded mx-2 my-2 ",style:{height:"30px",width:"30px",cursor:"pointer"},onClick:function(){return e.pallet("danger")}}),Object(r.jsx)("div",{className:"bg-info rounded mx-2 my-2 .flex-sm-row",style:{height:"30px",width:"30px",cursor:"pointer"},onClick:function(){return e.pallet("info")}}),Object(r.jsx)("div",{className:"bg-warning rounded mx-2 my-2",style:{height:"30px",width:"30px",cursor:"pointer"},onClick:function(){return e.pallet("warning")}}),Object(r.jsx)("div",{className:"bg-success rounded mx-2 my-2",style:{height:"30px",width:"30px",cursor:"pointer"},onClick:function(){return e.pallet("success")}})]}),Object(r.jsxs)("div",{className:"form-check form-switch transition",children:[Object(r.jsx)("input",{className:"form-check-input",style:{transition:".4s"},onClick:e.toggle,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"light"===e.mode?"Enable Dark mode":"Enable Light mode"})]})]})]})})})}function b(e){var t=Object(n.useState)("Enter the text"),a=Object(l.a)(t,2),c=a[0],s=a[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(r.jsx)("h1",{children:e.heading}),Object(r.jsx)("div",{className:"my-4",children:Object(r.jsx)("textarea",{onClick:function(){s("")},className:"form-control text-".concat("light"===e.mode?"secondary":"light"," bg-").concat(e.mode," "),id:"exampleFormControlTextarea1",value:c,onChange:function(e){s(e.target.value)},rows:"10"})}),Object(r.jsx)("button",{type:"submit",disabled:0===c.length,className:"btn btn-primary mx-1 my-1",style:{backgroundColor:"dark"===e.mode?"grey":""},onClick:function(){var t=c.toUpperCase();s(t),e.showalert("converted to uppercase","success")},children:"convert to upparcase"}),Object(r.jsx)("button",{type:"submit",disabled:0===c.length,className:"btn btn-primary mx-1 my-1",style:{backgroundColor:"dark"===e.mode?"grey":""},onClick:function(){s(c.toLocaleLowerCase()),e.showalert("converted to lowercase","success")},children:"convert to lowercase"}),Object(r.jsx)("button",{type:"submit",disabled:0===c.length,className:"btn btn-primary mx-1 my-1",style:{backgroundColor:"dark"===e.mode?"grey":""},onClick:function(){var t=document.getElementById("exampleFormControlTextarea1");navigator.clipboard.writeText(t.value),e.showalert("copy to clipboard","success")},children:"copy"}),Object(r.jsx)("button",{type:"submit",disabled:0===c.length,className:"btn btn-primary mx-1 my-1",style:{backgroundColor:"dark"===e.mode?"grey":""},onClick:function(){var t=c.split(/[ ]+/);s(t.join(" ")),e.showalert("extra spaces removed","success")},children:"Remove extra spaces"}),Object(r.jsx)("h2",{children:"Your text Summary"}),Object(r.jsxs)("p",{children:[c.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",c.length," is character"]}),Object(r.jsxs)("p",{children:[.008*c.split(" ").filter((function(e){return 0!==e.length})).length," Minutes Need To Read"]}),Object(r.jsx)("h2",{children:"Prievew"}),Object(r.jsxs)("p",{children:[" ",c.length>0?c:"enter text above to preview"]})]})})}function h(e){return Object(r.jsx)("div",{style:{height:"3.5rem"},children:e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.typ," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.typ)}),":",e.alert.msg]})})}d.defaultProps={sitname:"enter sitename",about:"enter about"};var u=a(11);function m(e){var t=Object(u.b)(),a=Object(u.c)((function(e){return e.changeNum}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{class:"accordion",id:"accordionExample",children:[Object(r.jsxs)("div",{class:"accordion-item ",children:[Object(r.jsx)("h2",{class:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{class:"accordion-button ",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:e.mystyle,children:"Accordion Item #1"})}),Object(r.jsx)("div",{id:"collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{class:"accordion-body  ",style:e.mystyle,children:[Object(r.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow. though the transition does limit overflow. though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{class:"accordion-item",children:[Object(r.jsx)("h2",{class:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:e.mystyle,children:"Accordion Item #2"})}),Object(r.jsx)("div",{id:"collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{class:"accordion-body",style:e.mystyle,children:[Object(r.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just though the transition does limit overflow. about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{class:"accordion-item",children:[Object(r.jsx)("h2",{class:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:e.mystyle,children:"Accordion Item #3"})}),Object(r.jsx)("div",{id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{class:"accordion-body",style:e.mystyle,children:[Object(r.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS orthough the transition does limit overflow. overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-info mx-2",onClick:function(){return t({type:"increament"})},children:"Increament"}),Object(r.jsx)("input",{type:"text",value:a,className:"btn btn-info bg-light"}),Object(r.jsx)("button",{type:"button",className:"btn btn-info mx-2",onClick:function(){return t({type:"decrement"})},children:"Decrement"})]})]})}var j=a(2);var g=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),o=Object(l.a)(s,2),u=o[0],g=o[1],p=Object(n.useState)({color:"black",backgroundColor:"white"}),x=Object(l.a)(p,2),y=x[0],v=x[1],O=function(e,t){g({msg:e,typ:t}),setInterval((function(){g(null)}),2500)},f=function(){document.body.classList.remove("bg-danger"),document.body.classList.remove("bg-light"),document.body.classList.remove("bg-success"),document.body.classList.remove("bg-info"),document.body.classList.remove("bg-warning")};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(d,{sitname:"Text-Editor",about:"about",mode:a,toggle:function(){f(),"light"===a?(c("dark"),document.body.style.backgroundColor="#1d2122",O(" Dark mode enable","success"),document.title="TextUtiles-Dark mode",v({color:"white",backgroundColor:"#212529"})):(c("light"),document.body.style.backgroundColor="white",O(" light mode enable","success"),document.title="TextUtiles",v({color:"black",backgroundColor:"white"}))},pallet:function(e){f(),document.body.classList.add("bg-"+e)}}),Object(r.jsx)(h,{alert:u}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{path:"/about",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(m,{mystyle:y})})}),Object(r.jsx)(j.a,{path:"/",children:Object(r.jsx)(b,{heading:"Enter The Text To Analyze",showalert:O,mode:a})})]})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))},x=a(14),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"increament":return e+1;case"decrement":return e-1;default:return e}},v=Object(x.a)({changeNum:y}),O=Object(x.b)(v);o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(u.a,{store:O,children:Object(r.jsx)(g,{})})}),document.getElementById("root")),p()}},[[41,1,2]]]);
//# sourceMappingURL=main.511fe05d.chunk.js.map