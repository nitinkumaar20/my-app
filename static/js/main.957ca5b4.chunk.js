(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),o=a(12),n=a.n(o),l=(a(19),a(5)),r=(a(20),a(6)),i=a(0);function d(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid ",children:[Object(i.jsx)(r.b,{className:"navbar-brand",to:"/",children:e.sitname}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link ","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/about",children:e.about})})]}),Object(i.jsx)("div",{className:"bg-danger rounded mx-2",style:{height:"30px",width:"30px",cursor:"pointer"},onClick:function(){return e.pallet("danger")}}),Object(i.jsx)("div",{className:"bg-info rounded mx-2",style:{height:"30px",width:"30px",cursor:"pointer"},onClick:function(){return e.pallet("info")}}),Object(i.jsx)("div",{className:"bg-warning rounded mx-2",style:{height:"30px",width:"30px",cursor:"pointer"},onClick:function(){return e.pallet("warning")}}),Object(i.jsx)("div",{className:"bg-success rounded mx-2",style:{height:"30px",width:"30px",cursor:"pointer"},onClick:function(){return e.pallet("success")}}),Object(i.jsxs)("div",{className:"form-check form-switch transition",children:[Object(i.jsx)("input",{className:"form-check-input",style:{transition:".4s"},onClick:e.toggle,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"light"===e.mode?"Enable Dark mode":"Enable Light mode"})]})]})]})})})}function b(e){var t=Object(s.useState)("enter the text"),a=Object(l.a)(t,2),c=a[0],o=a[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control text-".concat("light"===e.mode?"dark":"light"," bg-").concat(e.mode," "),id:"exampleFormControlTextarea1",value:c,onChange:function(e){o(e.target.value)},rows:"10"})}),Object(i.jsx)("button",{type:"submit",disabled:0===c.length,className:"btn btn-primary mx-1 my-1",style:{backgroundColor:"dark"===e.mode?"grey":""},onClick:function(){var t=c.toUpperCase();o(t),e.showalert("converted to uppercase","success")},children:"convert to upparcase"}),Object(i.jsx)("button",{type:"submit",disabled:0===c.length,className:"btn btn-primary mx-1 my-1",style:{backgroundColor:"dark"===e.mode?"grey":""},onClick:function(){o(c.toLocaleLowerCase()),e.showalert("converted to lowercase","success")},children:"convert to lowercase"}),Object(i.jsx)("button",{type:"submit",disabled:0===c.length,className:"btn btn-primary mx-1 my-1",style:{backgroundColor:"dark"===e.mode?"grey":""},onClick:function(){var t=document.getElementById("exampleFormControlTextarea1");navigator.clipboard.writeText(t.value),e.showalert("copy to clipboard","success")},children:"copy"}),Object(i.jsx)("button",{type:"submit",disabled:0===c.length,className:"btn btn-primary mx-1 my-1",style:{backgroundColor:"dark"===e.mode?"grey":""},onClick:function(){var t=c.split(/[ ]+/);o(t.join(" ")),e.showalert("extra spaces removed","success")},children:"Remove extra spaces"}),Object(i.jsx)("h2",{children:"Your text Summary"}),Object(i.jsxs)("p",{children:[c.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",c.length," is character"]}),Object(i.jsxs)("p",{children:[.008*c.split(" ").filter((function(e){return 0!==e.length})).length," Minutes Need To Read"]}),Object(i.jsx)("h2",{children:"Prievew"}),Object(i.jsxs)("p",{children:[" ",c.length>0?c:"enter text above to preview"]})]})})}function h(e){return Object(i.jsx)("div",{style:{height:"3.5rem"},children:e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.typ," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.typ)}),":",e.alert.msg]})})}function u(e){return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{class:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{class:"accordion-item ",children:[Object(i.jsx)("h2",{class:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{class:"accordion-button ",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:e.mystyle,children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{class:"accordion-body  ",style:e.mystyle,children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{class:"accordion-item",children:[Object(i.jsx)("h2",{class:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:e.mystyle,children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{class:"accordion-body",style:e.mystyle,children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{class:"accordion-item",children:[Object(i.jsx)("h2",{class:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:e.mystyle,children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{class:"accordion-body",style:e.mystyle,children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})})}d.defaultProps={sitname:"enter sitename",about:"enter about"};var j=a(2);var m=function(){var e=Object(s.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(s.useState)(null),n=Object(l.a)(o,2),m=n[0],p=n[1],g=Object(s.useState)({color:"black",backgroundColor:"white"}),x=Object(l.a)(g,2),y=x[0],v=x[1],O=function(e,t){p({msg:e,typ:t}),setInterval((function(){p(null)}),2500)},f=function(){document.body.classList.remove("bg-danger"),document.body.classList.remove("bg-light"),document.body.classList.remove("bg-success"),document.body.classList.remove("bg-info"),document.body.classList.remove("bg-warning")};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(d,{sitname:"Textutles",about:"about",mode:a,toggle:function(){f(),"light"===a?(c("dark"),document.body.style.backgroundColor="#1d2122",O(" Dark mode enable","success"),document.title="TextUtiles-Dark mode",v({color:"white",backgroundColor:"#212529"})):(c("light"),document.body.style.backgroundColor="white",O(" light mode enable","success"),document.title="TextUtiles",v({color:"black",backgroundColor:"#212529"}))},pallet:function(e){f(),document.body.classList.add("bg-"+e)}}),Object(i.jsx)(h,{alert:m}),Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{path:"/about",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(u,{mystyle:y})})}),Object(i.jsx)(j.a,{path:"/",children:Object(i.jsx)(b,{heading:"Enter The Text To Analyze",showalert:O,mode:a})})]})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),o(e),n(e)}))};n.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.957ca5b4.chunk.js.map