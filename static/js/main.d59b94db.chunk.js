(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],{114:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.TssCacheProvider=r.getTssDefaultEmotionCache=r.GlobalStyles=r.keyframes=r.createMakeStyles=r.useCssAndCx=void 0;var n=t(223);Object.defineProperty(r,"useCssAndCx",{enumerable:!0,get:function(){return n.useCssAndCx}});var s=t(455);Object.defineProperty(r,"createMakeStyles",{enumerable:!0,get:function(){return s.createMakeStyles}});var a=t(50);Object.defineProperty(r,"keyframes",{enumerable:!0,get:function(){return a.keyframes}});var c=t(460);Object.defineProperty(r,"GlobalStyles",{enumerable:!0,get:function(){return c.GlobalStyles}});var o=t(228);Object.defineProperty(r,"getTssDefaultEmotionCache",{enumerable:!0,get:function(){return o.getTssDefaultEmotionCache}}),Object.defineProperty(r,"TssCacheProvider",{enumerable:!0,get:function(){return o.TssCacheProvider}})},223:function(e,r,t){"use strict";var n=t(224);Object.defineProperty(r,"__esModule",{value:!0}),r.useCssAndCx=r.cssAndCxFactory=void 0,t(227);var s=t(446),a=t(51),c=t(43),o=t(449),l=t(228),i="ref";r.cssAndCxFactory=function(){function e(e,r,t){var n=[],s=(0,c.getRegisteredStyles)(e,n,t);return n.length<2?t:s+r(n)}return{cssAndCxFactory:function(r){var t=r.cache,o=function(){for(var e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var o=void 0;if(1===r.length){var l=r,u=n(l,1),d=u[0];if(d instanceof Object&&i in d){o=d.ref;var b=Object.assign({},d);delete b.ref,r=[b]}}var h=(0,a.serializeStyles)(r,t.registered);return(0,c.insertStyles)(t,h,!1),"".concat(t.key,"-").concat(h.name).concat(void 0===o?"":" ".concat(o))};return{css:o,cx:function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return e(t.registered,o,(0,s.classnames)(n))}}}}}().cssAndCxFactory,r.useCssAndCx=function(){var e=(0,l.useTssEmotionCache)(),t=(0,o.useGuaranteedMemo)((function(){return(0,r.cssAndCxFactory)({cache:e})}),[e]);return{css:t.css,cx:t.cx}}},227:function(e,r,t){"use strict";var n=t(224);Object.defineProperty(r,"__esModule",{value:!0}),Object.fromEntries||Object.defineProperty(Object,"fromEntries",{value:function(e){if(!e||!e[Symbol.iterator])throw new Error("Object.fromEntries() requires a single iterable argument");var r={};return Object.keys(e).forEach((function(t){var s=n(e[t],2),a=s[0],c=s[1];r[a]=c})),r}})},228:function(e,r,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.TssCacheProvider=r.useTssEmotionCache=r.getTssDefaultEmotionCache=void 0;var s=t(2),a=t(1),c=n(t(76));r.getTssDefaultEmotionCache=function(){var e=void 0;return{getTssDefaultEmotionCache:function(){return void 0===e&&(e=(0,c.default)({key:"tss-react"})),e}}}().getTssDefaultEmotionCache;var o=(0,a.createContext)(void 0);r.useTssEmotionCache=function(){var e=(0,a.useContext)(o);return null!==e&&void 0!==e?e:(0,r.getTssDefaultEmotionCache)()},r.TssCacheProvider=function(e){var r=e.children,t=e.value;return(0,s.jsx)(o.Provider,Object.assign({value:t},{children:r}),void 0)}},234:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),s=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||n(r,e,t)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),s(t(76),r);var c=a(t(76));r.default=c.default},446:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.classnames=void 0;var n=t(447),s=t(448);r.classnames=function(e){for(var t=e.length,a=0,c="";a<t;a++){var o=e[a];if(null!=o){var l=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))l=(0,r.classnames)(o);else for(var i in(0,n.assert)(!(0,s.typeGuard)(o,!1)),l="",o)o[i]&&i&&(l&&(l+=" "),l+=i);break;default:l=o}l&&(c&&(c+=" "),c+=l)}}return c}},447:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.assert=void 0,r.assert=function(e,r){if(!e)throw new Error(r)}},448:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.typeGuard=void 0,r.typeGuard=function(e,r){return r}},449:function(e,r,t){"use strict";var n=t(450);Object.defineProperty(r,"__esModule",{value:!0}),r.useGuaranteedMemo=void 0;var s=t(1);r.useGuaranteedMemo=function(e,r){var t=(0,s.useRef)();return(!t.current||r.length!==t.current.prevDeps.length||t.current.prevDeps.map((function(e,t){return e===r[t]})).indexOf(!1)>=0)&&(t.current={v:e(),prevDeps:n(r)}),t.current.v}},455:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createMakeStyles=void 0,t(227);var n=t(456),s=t(223);r.createMakeStyles=function(e){var r=e.useTheme;return{makeStyles:function(){return function(e){var t="function"===typeof e?e:function(){return e};return function(e){var a=r(),c=(0,s.useCssAndCx)(),o=c.cx,l=c.css,i=0,u=t(a,e,(function(){return"tss-react-ref_".concat(i++)}));return{classes:Object.fromEntries((0,n.objectKeys)(u).map((function(e){return[e,l(u[e])]}))),theme:a,css:l,cx:o}}}},useStyles:function(){var e=r(),t=(0,s.useCssAndCx)();return{theme:e,css:t.css,cx:t.cx}}}}},456:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.objectKeys=void 0,r.objectKeys=function(e){return Object.keys(e)}},460:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),s=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(r,e,t);return s(r,e),r};Object.defineProperty(r,"__esModule",{value:!0}),r.GlobalStyles=void 0;var c=t(2),o=a(t(50));r.GlobalStyles=function(e){var r=e.styles;return(0,c.jsx)(o.Global,{styles:o.css(r)},void 0)}},466:function(e,r,t){"use strict";t.r(r);t(241),t(253);var n=t(229),s=t(114),a=t(481),c=Object(s.createMakeStyles)({useTheme:a.a}),o=c.makeStyles,l=c.useStyles,i=t(12),u=t(233),d=t(19),b=t(492),h=t(488),f=t(2),v=o()((function(e,r,t){var n={ref:t(),background:"blue",border:"1px solid black"},s={ref:t(),color:"red"},a={border:"1px solid black",margin:30,height:100,color:"black"},c=Object(u.a)({ref:t()},a);return{root:{"& > h1:nth-child(2)":{color:e.palette.primary.main}},ovStyled:{color:"darkred"},ovInternal:{backgroundColor:"darkblue"},parent:Object(i.a)({border:"1px solid black",padding:30},"&:hover .".concat(n.ref),{background:"red"}),child:n,breadcrumbs_className:{backgroundColor:"lightblue","& .MuiBreadcrumbs-separator":{color:"red"},"&:hover .MuiBreadcrumbs-separator":{color:"blue"}},breadcrumbs2_root:Object(i.a)({backgroundColor:"lightblue"},"&:hover .".concat(s.ref),{color:"blue"}),breadcrumbs2_separator:s,button2_className:{backgroundColor:"red"},button2_root:{backgroundColor:"red"},testCx_bgYellow:{backgroundColor:"yellow"},testCx_bgCyan:{backgroundColor:"cyan"},childRefTest_wrapper:Object(i.a)({border:"1px solid black"},"&:hover .".concat(c.ref),{backgroundColor:"cyan"}),childRefTest_wrapper1:c,childRefTest_wrapper2:a,childRefTest_textColorPink:{color:"pink"}}})),j=Object(d.a)("h1")({color:"yellow"});function p(e){var r=e.className,t=v(),n=t.classes,a=t.css,c=t.cx;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(s.GlobalStyles,{styles:{body:{backgroundColor:"pink"},".foo":{color:"cyan"}}}),Object(f.jsxs)("div",{className:n.root,children:[Object(f.jsx)("h1",{children:"Black"}),Object(f.jsx)("h1",{children:"Should be lime green"}),Object(f.jsx)("h1",{className:c(a({border:"1px solid black"}),r),children:"Black, should have border and shadow"}),Object(f.jsx)("h1",{className:"foo",children:"Should be cyan"}),Object(f.jsx)(j,{children:"Should be yellow"}),Object(f.jsx)(j,{className:n.ovStyled,children:"Should be dark red"}),Object(f.jsx)(b.a,{variant:"contained",color:"primary",children:" Background should be lime green "}),Object(f.jsx)(b.a,{variant:"contained",color:"primary",className:n.ovInternal,children:"Background should be dark blue"}),Object(f.jsx)("div",{className:n.parent,children:Object(f.jsx)("div",{className:n.child,children:"Background should turn red when mouse is hover the parent."})}),Object(f.jsxs)(h.a,{className:n.breadcrumbs_className,color:"primary",children:[Object(f.jsx)("span",{children:"background should be lightblue"}),Object(f.jsx)("span",{children:"and the separator (/) should be red except when hover, then it is blue"})]}),Object(f.jsx)("div",{style:{height:10}}),Object(f.jsxs)(h.a,{classes:{root:n.breadcrumbs2_root,separator:n.breadcrumbs2_separator},color:"primary",children:[Object(f.jsx)("span",{children:"background should be lightblue"}),Object(f.jsx)("span",{children:"and the separator (/) should be red except when hover, then it is blue"})]}),Object(f.jsx)(b.a,{variant:"contained",color:"primary",className:n.button2_className,children:Object(f.jsx)("span",{children:"The background should be red"})}),Object(f.jsx)(b.a,{variant:"contained",color:"primary",classes:{root:n.button2_root},children:Object(f.jsx)("span",{children:"The background should be red"})}),Object(f.jsx)("div",{className:c(n.testCx_bgYellow,n.testCx_bgCyan),children:"Background should be cyan"}),Object(f.jsx)("div",{className:c(n.testCx_bgCyan,n.testCx_bgYellow),children:"Background should be yellow"}),Object(f.jsxs)("div",{className:n.childRefTest_wrapper,children:[Object(f.jsx)("div",{className:c(n.childRefTest_textColorPink,n.childRefTest_wrapper1),children:"Background should turn cyan when mouse hover the parent. Also the text should NOT be pink"}),Object(f.jsx)("div",{className:c(n.childRefTest_wrapper2),children:"Background should NOT turn cyan when mouse hover the parent."})]})]})]})}var y=t(26),m=t(490),O=t(235),x=t(491),g=t(234),_=t.n(g)()({key:"mui",prepend:!0}),k=Object(O.a)({palette:{primary:{main:"#32CD32"}}});function C(){var e=l().css;return Object(f.jsx)(p,{className:e({boxShadow:"10px 5px 5px teal"})})}Object(n.render)(Object(f.jsx)(y.a,{value:_,children:Object(f.jsxs)(m.a,{theme:k,children:[Object(f.jsx)(x.a,{}),Object(f.jsx)(C,{})]})}),document.getElementById("root"))}},[[466,1,2]]]);
//# sourceMappingURL=main.d59b94db.chunk.js.map