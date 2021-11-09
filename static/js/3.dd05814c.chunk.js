(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{88:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(32);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(c=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);c=!0);}catch(i){a=!0,r=i}finally{try{c||null==s.return||s.return()}finally{if(a)throw r}}return n}}(e,t)||Object(c.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var c=n(88),a=n(0),r=n(6),o=n(31),s=(n(91),n(1));var i=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1],b=Object(a.useState)(""),u=Object(c.a)(b,2),l=u[0],j=u[1],d=Object(r.b)(),h=Object(r.c)(o.f),m=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":i(c);break;case"number":j(c);break;default:return}},O=function(){i(""),j("")};return Object(s.jsxs)("form",{className:"Phonebook-form",onSubmit:function(e){if(e.preventDefault(),h.some((function(e){return e.name===n})))return alert("".concat(n," is already in contacts")),void O();d(Object(o.a)(n,l)),O()},children:[Object(s.jsxs)("label",{className:"Phonebook__label",children:["Name:",Object(s.jsx)("br",{}),Object(s.jsx)("input",{className:"Phonebook__input",type:"text",name:"name",value:n,onChange:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0406\u043c'\u044f \u043c\u043e\u0436\u0435 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044c \u0442\u0456\u043b\u044c\u043a\u0438 \u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0456 \u043f\u0440\u043e\u0431\u0456\u043b\u0456\u0432. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0456 \u0442. \u043f.",required:!0})]}),Object(s.jsxs)("label",{className:"Phonebook__label",children:["Number:",Object(s.jsx)("br",{}),Object(s.jsx)("input",{className:"Phonebook__input",type:"tel",name:"number",value:l,onChange:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044c \u0437 \u0446\u0438\u0444\u0440 \u0456 \u043c\u043e\u0436\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043f\u0440\u043e\u0431\u0456\u043b\u0438, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u0456 \u0441\u043a\u043e\u0431\u043a\u0438 \u0456 \u043c\u043e\u0436\u0435 \u043f\u043e\u0447\u0438\u043d\u0430\u0442\u0438\u0441\u044f \u0437 + .",required:!0})]}),Object(s.jsx)("button",{className:"Phonebook__button",type:"submit",children:"Add contact"})]})},b=(n(92),function(){var e=Object(r.b)(),t=Object(r.c)(o.g);return Object(s.jsxs)("label",{className:"Filter__label",children:["Find contacts by name:",Object(s.jsx)("br",{}),Object(s.jsx)("input",{className:"Filter__input",type:"text",name:"filter",value:t,onChange:function(t){return e(o.b.changeFilter(t.target.value))}})]})}),u=n(20),l=(n(93),function(e){var t=e.name,n=e.number,c=e.id,a=Object(r.b)();Object(r.c)(o.h);return Object(s.jsxs)("li",{className:"Contacts__item",children:[Object(s.jsxs)("div",{className:"Contacts__content",children:[Object(s.jsxs)("p",{className:"Contacts__text",children:[t," :"]}),Object(s.jsx)("p",{className:"Contacts__text",children:n})]}),Object(s.jsx)("button",{onClick:function(){return a(Object(o.d)(c))},className:"Contacts__button",children:"Delete"})]})}),j=function(e){var t=e.contacts;return Object(s.jsx)("ul",{className:"Contacts-list",children:t.map((function(e){return Object(s.jsx)(l,Object(u.a)({},e),e.id)}))})},d=(n(94),function(){var e=Object(r.b)(),t=Object(r.c)(o.i);return Object(a.useEffect)((function(){e(Object(o.e)())}),[e]),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(j,{contacts:t})})}),h=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"Phonebook-title",children:"Phonebook"}),Object(s.jsx)(i,{}),Object(s.jsx)("h2",{children:"Contacts"}),Object(s.jsx)(b,{}),Object(s.jsx)(d,{})]})}}}]);
//# sourceMappingURL=3.dd05814c.chunk.js.map