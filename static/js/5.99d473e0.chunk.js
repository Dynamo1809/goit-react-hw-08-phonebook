(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{88:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(32);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(o){n=!0,s=o}finally{try{a||null==c.return||c.return()}finally{if(n)throw s}}return r}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},89:function(e,t,r){},97:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return o}));var a=r(88),n=r(0),s=r(6),i=r(7),c=(r(89),r(1)),o=function(){var e=Object(s.b)(),t=Object(n.useState)(""),r=Object(a.a)(t,2),o=r[0],u=r[1],l=Object(n.useState)(""),b=Object(a.a)(l,2),m=b[0],j=b[1],p=Object(n.useState)(""),f=Object(a.a)(p,2),d=f[0],h=f[1],O=function(e){var t=e.target,r=t.name,a=t.value;switch(r){case"name":return u(a);case"email":return j(a);case"password":return h(a);default:return}};return Object(c.jsxs)("form",{className:"Register__form",onSubmit:function(t){t.preventDefault(),e(i.a.register({name:o,email:m,password:d})),u(""),j(""),h("")},autoComplete:"off",children:[Object(c.jsxs)("label",{className:"Register__label",children:["Name:",Object(c.jsx)("br",{}),Object(c.jsx)("input",{className:"Register__input",type:"text",name:"name",value:o,onChange:O,required:!0})]}),Object(c.jsxs)("label",{className:"Register__label",children:["Email:",Object(c.jsx)("br",{}),Object(c.jsx)("input",{className:"Register__input",type:"email",name:"email",value:m,onChange:O,required:!0})]}),Object(c.jsxs)("label",{className:"Register__label",children:["Password:",Object(c.jsx)("br",{}),Object(c.jsx)("input",{className:"Register__input",type:"password",name:"password",value:d,onChange:O,required:!0})]}),Object(c.jsx)("button",{className:"Register__button",type:"submit",children:"Sign up"})]})}}}]);
//# sourceMappingURL=5.99d473e0.chunk.js.map