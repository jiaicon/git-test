(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"85Nx":function(J,I,s){"use strict";s.r(I);var A=s("nKUr"),t=s.n(A),M=s("q1tI"),r=s.n(M),x=s("JEMY"),g=function(){return Object(M.useEffect)(function(){return function(){}},[]),Object(A.jsx)("div",{children:Object(A.jsx)(x.a,{})})};I.default=g},JEMY:function(J,I,s){"use strict";var A=s("k1fw"),t=s("nKUr"),M=s("WmNS"),r=s.n(M),x=s("9og8"),g=s("q1tI"),Q=s.n(g),k=s("9hi+"),F=s("7on5"),X=s("XSw6"),V=s("KPg2"),Y=s("Hp1U"),G=s("tUHX"),Z=s("zhj8"),f=s("rmP6"),_=s.n(f),tt=s("t3Un"),et=function(){var p=Object(x.a)(r.a.mark(function u(e){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(a,m){Object(tt.a)("/api/upload_img",{data:e,method:"POST",headers:{}}).then(function(N){var B=N.status,K=N.data,S=N.msg;B===0?window.apiHost?a("".concat(window.apiHost).concat(K)):a("".concat(window.location.protocol,"//").concat(window.location.host).concat(K)):m(S)}).catch(function(N){m(N)})}));case 1:case"end":return n.stop()}},u)}));return function(e){return p.apply(this,arguments)}}(),at=et,it=s("cBUL"),ut=s("91UR"),P=s("fWQN"),w=s("mtLc"),d=s("w4Tj"),O=s("oZsa"),T=s("yKVA"),D=s("879j"),H=f.Quill.import("blots/block/embed"),L=function(p){Object(T.a)(e,p);var u=Object(D.a)(e);function e(){return Object(P.a)(this,e),u.apply(this,arguments)}return Object(w.a)(e,null,[{key:"create",value:function(n){var a=Object(d.a)(Object(O.a)(e),"create",this).call(this,n);return a.setAttribute("style","height: 1px;background: none;border: 1px solid rgba(0,0,0,.06);"),a}}]),e}(H);L.blotName="line-solid",L.className="line-solid",L.tagName="div",f.Quill.register({"formats/line-solid":L});var U=function(p){Object(T.a)(e,p);var u=Object(D.a)(e);function e(){return Object(P.a)(this,e),u.apply(this,arguments)}return Object(w.a)(e,null,[{key:"create",value:function(n){var a=Object(d.a)(Object(O.a)(e),"create",this).call(this,n);return a.setAttribute("style","height: 1px;background: none;border: 1px dashed rgba(0,0,0,.06);"),a}}]),e}(H);U.blotName="line-dashed",U.className="line-dashed",U.tagName="div",f.Quill.register({"formats/line-dashed":U});var W=f.Quill.import("parchment"),st=function(p){Object(T.a)(e,p);var u=Object(D.a)(e);function e(){return Object(P.a)(this,e),u.apply(this,arguments)}return Object(w.a)(e,[{key:"add",value:function(n,a){if(a==="+1"||a==="-1"){var m=this.value(n)||0;a=a==="+1"?m+1:m-1}return a===0?(this.remove(n),!0):Object(d.a)(Object(O.a)(e.prototype),"add",this).call(this,n,a)}},{key:"canAdd",value:function(n,a){return Object(d.a)(Object(O.a)(e.prototype),"canAdd",this).call(this,n,a)||Object(d.a)(Object(O.a)(e.prototype),"canAdd",this).call(this,n,parseInt(a))}},{key:"value",value:function(n){return parseInt(Object(d.a)(Object(O.a)(e.prototype),"value",this).call(this,n))||void 0}}]),e}(W.Attributor.Class),nt=new st("space","ql-space",{scope:W.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});f.Quill.register({"formats/space":nt},!0);var z=f.Quill.import("parchment"),$=function(p){Object(T.a)(e,p);var u=Object(D.a)(e);function e(){return Object(P.a)(this,e),u.apply(this,arguments)}return Object(w.a)(e,[{key:"add",value:function(n,a){if(a==="+1"||a==="-1"){var m=this.value(n)||0;a=a==="+1"?m+1:m-1}return a===0?(this.remove(n),!0):Object(d.a)(Object(O.a)(e.prototype),"add",this).call(this,n,a)}},{key:"canAdd",value:function(n,a){return Object(d.a)(Object(O.a)(e.prototype),"canAdd",this).call(this,n,a)||Object(d.a)(Object(O.a)(e.prototype),"canAdd",this).call(this,n,parseInt(a))}},{key:"value",value:function(n){return parseInt(Object(d.a)(Object(O.a)(e.prototype),"value",this).call(this,n))||void 0}}]),e}(z.Attributor.Class),lt=new $("margin-top","ql-margin-top",{scope:z.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]}),ct=new $("margin-bottom","ql-margin-bottom",{scope:z.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});f.Quill.register({"formats/margin-top":lt,"formats/margin-bottom":ct},!0);var rt=function(u,e){var b=u.initialValues,n=b===void 0?"":b,a=Object(g.useRef)(),m=function(){var o=Object(x.a)(r.a.mark(function l(){return r.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",new Promise(function(j,h){j(a.current.state.value)}));case 1:case"end":return c.stop()}},l)}));return function(){return o.apply(this,arguments)}}();Object(g.useEffect)(function(){return function(){}},[]),Object(g.useImperativeHandle)(e,function(){return{getContent:m}});var N=function(){return Object(t.jsxs)("div",{id:"custom-toolbar",children:[Object(t.jsx)("span",{className:"ql-formats",children:Object(t.jsxs)("select",{className:"ql-size ql-picker",defaultValue:"normal",children:[Object(t.jsx)("option",{value:"small"}),Object(t.jsx)("option",{value:"normal"}),Object(t.jsx)("option",{value:"large"}),Object(t.jsx)("option",{value:"huge"})]})}),Object(t.jsx)("span",{className:"ql-formats",children:Object(t.jsxs)("select",{className:"ql-font ql-picker",children:[Object(t.jsx)("option",{value:"sans serif"}),Object(t.jsx)("option",{value:"serif"}),Object(t.jsx)("option",{value:"monospace"})]})}),Object(t.jsx)("span",{className:"ql-formats",children:Object(t.jsxs)("select",{className:"ql-header ql-picker",defaultValue:!1,children:[Object(t.jsx)("option",{value:"1"}),Object(t.jsx)("option",{value:"2"}),Object(t.jsx)("option",{value:"3"}),Object(t.jsx)("option",{value:"4"}),Object(t.jsx)("option",{value:"5"}),Object(t.jsx)("option",{value:"6"}),Object(t.jsx)("option",{value:!1})]})}),Object(t.jsxs)("span",{className:"ql-formats",children:[Object(t.jsx)("button",{className:"ql-bold"}),Object(t.jsx)("button",{className:"ql-italic"}),Object(t.jsx)("button",{className:"ql-underline"}),Object(t.jsx)("button",{className:"ql-strike"})]}),Object(t.jsx)("span",{className:"ql-formats",children:Object(t.jsxs)("select",{className:"ql-align ql-picker ql-icon-picker",children:[Object(t.jsx)("option",{value:""}),Object(t.jsx)("option",{value:"center"}),Object(t.jsx)("option",{value:"right"}),Object(t.jsx)("option",{value:"justify"})]})}),Object(t.jsxs)("span",{className:"ql-formats",children:[Object(t.jsx)("button",{className:"ql-indent",value:"-1"}),Object(t.jsx)("button",{className:"ql-indent",value:"+1"})]}),Object(t.jsx)("span",{className:"ql-formats",children:Object(t.jsx)("button",{className:"ql-direction",value:"rtl"})}),Object(t.jsxs)("span",{className:"ql-formats",children:[Object(t.jsx)("button",{className:"ql-script",value:"sub"}),Object(t.jsx)("button",{className:"ql-script",value:"super"})]}),Object(t.jsxs)("span",{className:"ql-formats",children:[Object(t.jsx)("button",{className:"ql-blockquote"}),Object(t.jsx)("button",{className:"ql-code-block",value:"super"})]}),Object(t.jsxs)("span",{className:"ql-formats",children:[Object(t.jsx)("button",{className:"ql-list",value:"ordered"}),Object(t.jsx)("button",{className:"ql-list",value:"bullet"})]}),Object(t.jsx)("span",{className:"ql-formats",children:Object(t.jsxs)("select",{className:"ql-color ql-picker ql-color-picker",children:[Object(t.jsx)("option",{value:""}),Object(t.jsx)("option",{value:"#e60000"}),Object(t.jsx)("option",{value:"#ff9900"}),Object(t.jsx)("option",{value:"#008a00"}),Object(t.jsx)("option",{value:"#0066cc"}),Object(t.jsx)("option",{value:"#9933ff"}),Object(t.jsx)("option",{value:"#ffffff"}),Object(t.jsx)("option",{value:"#facccc"}),Object(t.jsx)("option",{value:"#ffebcc"}),Object(t.jsx)("option",{value:"#ffffcc"}),Object(t.jsx)("option",{value:"#cce8cc"}),Object(t.jsx)("option",{value:"#cce0f5"}),Object(t.jsx)("option",{value:"#ebd6ff"}),Object(t.jsx)("option",{value:"#bbbbbb"}),Object(t.jsx)("option",{value:"#f06666"}),Object(t.jsx)("option",{value:"#ffc266"}),Object(t.jsx)("option",{value:"#ffff66"}),Object(t.jsx)("option",{value:"#66b966"}),Object(t.jsx)("option",{value:"#66a3e0"}),Object(t.jsx)("option",{value:"#c285ff"}),Object(t.jsx)("option",{value:"#888888"}),Object(t.jsx)("option",{value:"#a10000"}),Object(t.jsx)("option",{value:"#b26b00"}),Object(t.jsx)("option",{value:"#b2b200"}),Object(t.jsx)("option",{value:"#006100"}),Object(t.jsx)("option",{value:"#0047b2"}),Object(t.jsx)("option",{value:"#6b24b2"}),Object(t.jsx)("option",{value:"#444444"}),Object(t.jsx)("option",{value:"#5c0000"}),Object(t.jsx)("option",{value:"#663d00"}),Object(t.jsx)("option",{value:"#666600"}),Object(t.jsx)("option",{value:"#003700"}),Object(t.jsx)("option",{value:"#002966"}),Object(t.jsx)("option",{value:"#3d1466"})]})}),Object(t.jsxs)("span",{className:"ql-formats",children:[Object(t.jsx)("button",{className:"ql-image"}),Object(t.jsx)("button",{className:"ql-video"}),Object(t.jsx)("button",{className:"ql-link"})]}),Object(t.jsxs)("span",{className:"ql-formats",children:[Object(t.jsx)("button",{className:"ql-space",value:"+1",children:Object(t.jsx)(k.a,{style:{fontSize:18}})}),Object(t.jsx)("button",{className:"ql-space",value:"-1",children:Object(t.jsx)(F.a,{style:{fontSize:18,color:"#08c"}})}),Object(t.jsx)("button",{className:"ql-margin-top",value:"+1",children:Object(t.jsx)(X.a,{style:{fontSize:18}})}),Object(t.jsx)("button",{className:"ql-margin-top",value:"-1",children:Object(t.jsx)(V.a,{style:{fontSize:18,color:"#08c"},rotate:180})}),Object(t.jsx)("button",{className:"ql-margin-bottom",value:"+1",children:Object(t.jsx)(Y.a,{style:{fontSize:18}})}),Object(t.jsx)("button",{className:"ql-margin-bottom",value:"-1",children:Object(t.jsx)(V.a,{style:{fontSize:18,color:"#08c"}})})]}),Object(t.jsxs)("span",{className:"ql-formats",children:[Object(t.jsx)("button",{className:"ql-line-solid",value:"line-solid",children:Object(t.jsx)(G.a,{style:{fontSize:18}})}),Object(t.jsx)("button",{className:"ql-line-dashed",value:"line-dashed",children:Object(t.jsx)(Z.a,{style:{fontSize:18}})})]}),Object(t.jsx)("span",{className:"ql-formats",children:Object(t.jsx)("button",{className:"ql-clean"})})]})},B=function(){var o=Object(x.a)(r.a.mark(function l(i){var c,j;return r.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:c=a.current.getEditor(),c.format(i),j=c.getSelection(),c.insertEmbed(j.index,i,""),c.setSelection(j.index+1,j.index+2,"silent");case 5:case"end":return v.stop()}},l)}));return function(i){return o.apply(this,arguments)}}(),K=function(){var o=Object(x.a)(r.a.mark(function l(){var i,c;return r.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:i=a.current.getEditor(),c=document.createElement("input"),c.setAttribute("type","file"),c.setAttribute("accept","image/*"),c.click(),c.onchange=Object(x.a)(r.a.mark(function v(){var q,y,R,E;return r.a.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return q=c.files[0],y=new FormData,y.append("file",q,q.name),C.next=5,at(y);case 5:R=C.sent,E=i.getSelection(),i.insertEmbed(E.index,"image",R);case 8:case"end":return C.stop()}},v)}));case 6:case"end":return h.stop()}},l)}));return function(){return o.apply(this,arguments)}}(),S=function(){var o=Object(x.a)(r.a.mark(function l(i,c){var j,h,v,q,y;return r.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:j=a.current.getEditor(),h=j.getSelection(),v=j.getFormat(h),q=parseInt(v[c]||0),(i==="+1"||i==="-1")&&(y=i==="+1"?1:-1,v.direction==="rtl"&&(y*=-1),j.format(c,q+y,f.Quill.sources.USER));case 5:case"end":return E.stop()}},l)}));return function(i,c){return o.apply(this,arguments)}}(),ot={toolbar:{container:"#custom-toolbar",handlers:{image:K,space:function(l){S(l,"space")},"margin-top":function(l){S(l,"margin-top")},"margin-bottom":function(l){S(l,"margin-bottom")},"line-solid":function(l){B(l)},"line-dashed":function(l){B(l)}}}};return Object(t.jsxs)(Q.a.Fragment,{children:[Object(t.jsx)(N,{}),Object(t.jsx)(_.a,{theme:"snow",ref:a,value:n,modules:Object(A.a)({},ot),className:" ql-editor"})]})},jt=I.a=Object(g.forwardRef)(rt)}}]);