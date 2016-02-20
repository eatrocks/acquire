!function(e){function t(l){if(n[l])return n[l].exports;var a=n[l]={exports:{},id:l,loaded:!1};return e[l].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){(function(e){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function a(e){return(0,p.minify)(O.replace("<!--REACTAPP-->",e),{collapseWhitespace:!0,removeComments:!0,removeAttributeQuotes:!0})}Object.defineProperty(t,"__esModule",{value:!0}),t.app=void 0;var u=n(23),o=l(u),r=n(26),i=l(r),c=n(22),s=l(c),f=n(24),d=l(f),p=n(25),h=n(1),_=l(h),m=n(27),v=n(3),y=n(14),E=l(y),g=n(2),b=n(15),P=l(b),x=t.app=(0,o["default"])(),O=d["default"].readFileSync(i["default"].join(e,"public","index.html")).toString();x.use((0,s["default"])()),x.use(o["default"]["static"](i["default"].join(e,"public"),{index:!1})),x.get("*",function(e,t){(0,v.match)({routes:E["default"],location:e.url},function(e,n,l){if(e)t.status(500).send(e.message);else if(n)t.redirect(n.pathname+n.search);else if(l){var u=(0,m.renderToString)(_["default"].createElement(g.Provider,{store:P["default"]},_["default"].createElement(v.RouterContext,l)));t.send(a(u))}else t.status(404).send("Not Found")})});var C={NODE_ENV:"production"}.PORT||8080;x.listen(C,function(){return console.log("Running on port "+C)})}).call(t,"")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router")},function(e,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?{q:"",all:[],filtered:[]}:arguments[0],t=arguments[1];switch(t.type){case l:return{q:"",all:t.people,filtered:[]};case a:return{all:[].concat(e.all),q:t.q,filtered:t.q.length>1?e.all.filter(function(e){return~e.toLowerCase().indexOf(t.q.toLowerCase())}):[]};case u:return{all:[].concat(e.all),q:t.q,filtered:[]};default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var l=t.INIT_PEOPLE=Symbol("INIT_PEOPLE"),a=t.FIND_PEOPLE=Symbol("FIND_PEOPLE"),u=t.SELECT_PERSON=Symbol("SELECT_PERSON")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.selectPerson=t.findPeople=t.init=void 0;var l=n(4);t.init=function(e){return{type:l.INIT_PEOPLE,people:e}},t.findPeople=function(e){return{type:l.FIND_PEOPLE,q:e}},t.selectPerson=function(e){return{type:l.SELECT_PERSON,q:e}}},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),c=n(1),s=l(c),f=n(16),d=l(f),p=n(21),h=l(p),_=n(7),m=l(_),v=function(e){function t(e){u(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={options:[],highlight:-1,isactive:!1,value:n.props.value||""},n}return r(t,e),i(t,[{key:"handleValueChanges",value:function(e){var t=e.target.value,n=t.length<2?[]:this.props.options.filter(function(e){return~(e.text||e).toLowerCase().indexOf(t.toLowerCase())}).slice(0,this.props.max||1e3);this.setState({options:n,highlight:-1,isactive:!0,value:t}),this.notify()}},{key:"handleMetaKeys",value:function(e){switch(e.keyCode||e.which){case 40:this.highlight(this.state.highlight+1),e.preventDefault();break;case 38:this.highlight(this.state.highlight-1),e.preventDefault();break;case 13:var t=this.refs["option-"+this.state.highlight];this.select(t&&(t.dataset.value||t.textContent)||this.refs.input.value),e.preventDefault();break;case 27:this.reset(),e.preventDefault()}}},{key:"reset",value:function(){this.setState({options:[],highlight:-1})}},{key:"notify",value:function(){this.props.onSelect&&this.props.onSelect(this.refs.input.value)}},{key:"select",value:function(e){this.refs.input.value=e,this.refs.input.focus(),this.reset(),this.notify()}},{key:"highlight",value:function(e){e>=0&&e<this.state.options.length&&this.setState({highlight:e})}},{key:"render",value:function(){var e,t=this,n=this.state.options.map(function(e,n){var l;return s["default"].createElement("div",{className:(0,h["default"])((l={},a(l,d["default"]["option-item"],!0),a(l,d["default"]["option-item--selected"],n===t.state.highlight),l)),"data-value":e.value||e,key:n,onClick:function(n){return t.select(e.value||e)},onMouseOver:function(){return t.setState({highlight:n})},ref:"option-"+n},(0,m["default"])(e.text||e,t.state.value))});return s["default"].createElement("div",{className:d["default"]["auto-complete"],onBlur:function(){return t.setState({isactive:!1})}},s["default"].createElement("label",null,this.props.label),s["default"].createElement("input",{className:d["default"].input,placeholder:this.props.placeholder,type:"text",ref:"input",onKeyDown:this.handleMetaKeys.bind(this),onChange:this.handleValueChanges.bind(this),defaultValue:this.props.value}),s["default"].createElement("div",{className:(0,h["default"])((e={},a(e,d["default"].options,!0),a(e,d["default"]["options--active"],this.state.isactive),e))},n))}}]),t}(s["default"].Component);t["default"]=v},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=l(a);t["default"]=function(e,t){var n=new RegExp("("+t+")","ig"),l=e.split(n);return l.map(function(e,l){return n.test(e)?u["default"].createElement("strong",{key:l},t):e})}},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function a(){return"dl-".concat((new Date).toISOString())}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),o=l(u);t["default"]=function(e){var t=e.options,n=void 0===t?[]:t,l=e.className,u=void 0===l?"":l,r=e.label,i=void 0===r?"":r,c=e.value,s=void 0===c?"":c,f=e.placeholder,d=void 0===f?"":f,p=e.onChange,h=void 0===p?function(){}:p,_=a(),m=n.map(function(e,t){return o["default"].createElement("option",{key:t,value:e.value||e},e.text||e)});return o["default"].createElement("div",{className:u},o["default"].createElement("label",null,i),o["default"].createElement("input",{defaultValue:s,list:_,onChange:h,placeholder:d,type:"text"}),o["default"].createElement("datalist",{id:_},m))}},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=l(a),o=n(17),r=l(o);t["default"]=function(e){var t=e.options.map(function(t,n){return u["default"].createElement("a",{key:n,className:r["default"]["option-item"],onClick:e.onSelect},t)});return u["default"].createElement("div",{className:r["default"]["auto-complete"]},u["default"].createElement("label",null,e.label),u["default"].createElement("input",{type:"text",placeholder:e.placeholder,onKeyDown:e.onInput,onChange:e.onChange,onFocus:e.onFocus,onBlur:e.onBlur,value:e.value}),u["default"].createElement("div",null,t))}},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=l(a),o=n(18),r=l(o);t["default"]=function(){return u["default"].createElement("header",{className:r["default"].header},"Welcome to my Website")}},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=l(a),o=n(2),r=n(3),i=n(10),c=l(i);n(20);var s=n(19),f=l(s),d=function(e){var t=e.children;return u["default"].createElement("div",{className:f["default"].app},u["default"].createElement(c["default"],null),u["default"].createElement("div",{className:f["default"].wrapper},u["default"].createElement("nav",{className:f["default"].nav},u["default"].createElement("ul",null,u["default"].createElement("li",null,u["default"].createElement(r.Link,{to:"/"},"Home")),u["default"].createElement("li",null,u["default"].createElement(r.Link,{to:"/auto-completes"},"Auto Complete Demo")))),u["default"].createElement("main",{className:f["default"].main},t)))};t["default"]=(0,o.connect)()(d)},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=l(a),o=n(2),r=n(6),i=l(r),c=n(8),s=l(c),f=n(9),d=l(f),p=n(5),h=function(e){var t=e.people,n=void 0===t?[]:t,l=e.filtered,a=void 0===l?[]:l,o=e.q,r=void 0===o?"":o,c=e.dispatch;return u["default"].createElement("div",null,u["default"].createElement(i["default"],{onSelect:console.log.bind(console),options:n,placeholder:"choose a relative...",value:"Jared"}),u["default"].createElement("hr",null),u["default"].createElement(s["default"],{onChange:function(e){return console.log(e.target.value)},options:n}),u["default"].createElement("hr",null),u["default"].createElement(d["default"],{options:a,value:r,onChange:function(e){return c((0,p.findPeople)(e.target.value))},onSelect:function(e){return c((0,p.selectPerson)(e.target.textContent))}}))};t["default"]=(0,o.connect)(function(e){var t=e.people;return{people:t.all,filtered:t.filtered,q:t.q}})(h)},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=l(a),o=n(2),r=function(){return u["default"].createElement("div",null,u["default"].createElement("h1",null,"Welcome Home"))};t["default"]=(0,o.connect)()(r)},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=l(a),o=n(3),r=n(11),i=l(r),c=n(13),s=l(c),f=n(12),d=l(f),p=u["default"].createElement(o.Route,{path:"/",component:i["default"]},u["default"].createElement(o.IndexRoute,{component:s["default"]}),u["default"].createElement(o.Route,{path:"/auto-completes",component:d["default"]}));t["default"]=p},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(28),u=n(4),o=l(u),r=(0,a.combineReducers)({people:o["default"]});t["default"]=(0,a.createStore)(r)},function(e,t){e.exports={"auto-complete":"auto-complete__auto-complete___15LZD",input:"auto-complete__input___1QJ0K",options:"auto-complete__options___3fran","option-item":"auto-complete__option-item___3UbgG"}},function(e,t){e.exports={"auto-complete":"style__auto-complete___1GZlf",input:"style__input___25RVD",options:"style__options___1O4TA","option-item":"style__option-item___2nSRv"}},function(e,t){e.exports={header:"style__header___2XLfO"}},function(e,t){e.exports={app:"style__app___1mKhk",wrapper:"style__wrapper___2UkQX",nav:"style__nav___332Qy",main:"style__main___3-8DB"}},function(e,t){},function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("html-minifier")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("redux")}]);