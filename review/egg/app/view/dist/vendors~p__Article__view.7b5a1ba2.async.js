(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{D1Df:function(B,N,C){"use strict";function l(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?l=function(u){return typeof u}:l=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},l(s)}function P(){return P=Object.assign||function(s){for(var n=1;n<arguments.length;n++){var u=arguments[n];for(var i in u)Object.prototype.hasOwnProperty.call(u,i)&&(s[i]=u[i])}return s},P.apply(this,arguments)}function g(s,n){var u=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);n&&(i=i.filter(function(m){return Object.getOwnPropertyDescriptor(s,m).enumerable})),u.push.apply(u,i)}return u}function p(s){for(var n=1;n<arguments.length;n++){var u=arguments[n]!=null?arguments[n]:{};n%2?g(u,!0).forEach(function(i){h(s,i,u[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(u)):g(u).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(u,i))})}return s}function c(s,n){if(s==null)return{};var u=y(s,n),i,m;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(s);for(m=0;m<E.length;m++)i=E[m],!(n.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,i)||(u[i]=s[i]))}return u}function y(s,n){if(s==null)return{};var u={},i=Object.keys(s),m,E;for(E=0;E<i.length;E++)m=i[E],!(n.indexOf(m)>=0)&&(u[m]=s[m]);return u}function o(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}function t(s,n){for(var u=0;u<n.length;u++){var i=n[u];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function a(s,n,u){return n&&t(s.prototype,n),u&&t(s,u),s}function e(s,n){return n&&(l(n)==="object"||typeof n=="function")?n:f(s)}function r(s){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(u){return u.__proto__||Object.getPrototypeOf(u)},r(s)}function f(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function v(s,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(n&&n.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),n&&d(s,n)}function d(s,n){return d=Object.setPrototypeOf||function(i,m){return i.__proto__=m,i},d(s,n)}function h(s,n,u){return n in s?Object.defineProperty(s,n,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[n]=u,s}var T=C("q1tI"),R=C("17x9"),L=C("H38U"),U=C("aRTE");function J(s){for(var n="",u=0;u<s.length;u++){var i=s.charCodeAt(u);i<128?n+=String.fromCharCode(i):i<2048?(n+=String.fromCharCode(192|i>>6),n+=String.fromCharCode(128|i&63)):i<55296||i>=57344?(n+=String.fromCharCode(224|i>>12),n+=String.fromCharCode(128|i>>6&63),n+=String.fromCharCode(128|i&63)):(u++,i=65536+((i&1023)<<10|s.charCodeAt(u)&1023),n+=String.fromCharCode(240|i>>18),n+=String.fromCharCode(128|i>>12&63),n+=String.fromCharCode(128|i>>6&63),n+=String.fromCharCode(128|i&63))}return n}var z={size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000",includeMargin:!1},V={},G=4,K=.1;function F(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,u=[];return s.forEach(function(i,m){var E=null;i.forEach(function(w,O){if(!w&&E!==null){u.push("M".concat(E+n," ").concat(m+n,"h").concat(O-E,"v1H").concat(E+n,"z")),E=null;return}if(O===i.length-1){if(!w)return;E===null?u.push("M".concat(O+n,",").concat(m+n," h1v1H").concat(O+n,"z")):u.push("M".concat(E+n,",").concat(m+n," h").concat(O+1-E,"v1H").concat(E+n,"z"));return}w&&E===null&&(E=O)})}),u.join("")}function X(s,n){return s.slice().map(function(u,i){return i<n.y||i>=n.y+n.h?u:u.map(function(m,E){return E<n.x||E>=n.x+n.w?m:!1})})}function W(s,n){var u=s.imageSettings,i=s.size,m=s.includeMargin;if(u==null)return null;var E=m?G:0,w=n.length+E*2,O=Math.floor(i*K),k=w/i,H=(u.width||O)*k,_=(u.height||O)*k,I=u.x==null?n.length/2-H/2:u.x*k,S=u.y==null?n.length/2-_/2:u.y*k,A=null;if(u.excavate){var D=Math.floor(I),M=Math.floor(S),b=Math.ceil(H+I-D),x=Math.ceil(_+S-M);A={x:D,y:M,w:b,h:x}}return{x:I,y:S,h:_,w:H,excavation:A}}var q=function(){try{new Path2D().addPath(new Path2D)}catch(s){return!1}return!0}(),Y=function(s){v(n,s);function n(){var u,i;o(this,n);for(var m=arguments.length,E=new Array(m),w=0;w<m;w++)E[w]=arguments[w];return i=e(this,(u=r(n)).call.apply(u,[this].concat(E))),h(f(i),"_canvas",void 0),h(f(i),"_image",void 0),h(f(i),"state",{imgLoaded:!1}),h(f(i),"handleImageLoad",function(){i.setState({imgLoaded:!0})}),i}return a(n,[{key:"componentDidMount",value:function(){this._image&&this._image.complete&&this.handleImageLoad(),this.update()}},{key:"componentWillReceiveProps",value:function(i){var m,E,w=(m=this.props.imageSettings)===null||m===void 0?void 0:m.src,O=(E=i.imageSettings)===null||E===void 0?void 0:E.src;w!==O&&this.setState({imgLoaded:!1})}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"update",value:function(){var i=this.props,m=i.value,E=i.size,w=i.level,O=i.bgColor,k=i.fgColor,H=i.includeMargin,_=i.imageSettings,I=new L(-1,U[w]);if(I.addData(J(m)),I.make(),this._canvas!=null){var S=this._canvas,A=S.getContext("2d");if(!A)return;var D=I.modules;if(D===null)return;var M=H?G:0,b=D.length+M*2,x=W(this.props,D);_!=null&&x!=null&&x.excavation!=null&&(D=X(D,x.excavation));var Q=window.devicePixelRatio||1;S.height=S.width=E*Q;var Z=E/b*Q;A.scale(Z,Z),A.fillStyle=O,A.fillRect(0,0,b,b),A.fillStyle=k,q?A.fill(new Path2D(F(D,M))):D.forEach(function(tt,et){tt.forEach(function(rt,nt){rt&&A.fillRect(nt+M,et+M,1,1)})}),this.state.imgLoaded&&this._image&&x!=null&&A.drawImage(this._image,x.x+M,x.y+M,x.w,x.h)}}},{key:"render",value:function(){var i=this,m=this.props,E=m.value,w=m.size,O=m.level,k=m.bgColor,H=m.fgColor,_=m.style,I=m.includeMargin,S=m.imageSettings,A=c(m,["value","size","level","bgColor","fgColor","style","includeMargin","imageSettings"]),D=p({height:w,width:w},_),M=null,b=S&&S.src;return S!=null&&b!=null&&(M=T.createElement("img",{src:b,style:{display:"none"},onLoad:this.handleImageLoad,ref:function(Q){return i._image=Q}})),T.createElement(T.Fragment,null,T.createElement("canvas",P({style:D,height:w,width:w,ref:function(Q){return i._canvas=Q}},A)),M)}}]),n}(T.PureComponent);h(Y,"defaultProps",z);var j=function(s){v(n,s);function n(){return o(this,n),e(this,r(n).apply(this,arguments))}return a(n,[{key:"render",value:function(){var i=this.props,m=i.value,E=i.size,w=i.level,O=i.bgColor,k=i.fgColor,H=i.includeMargin,_=i.imageSettings,I=c(i,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),S=new L(-1,U[w]);S.addData(J(m)),S.make();var A=S.modules;if(A===null)return null;var D=H?G:0,M=A.length+D*2,b=W(this.props,A),x=null;_!=null&&b!=null&&(b.excavation!=null&&(A=X(A,b.excavation)),x=T.createElement("image",{xlinkHref:_.src,height:b.h,width:b.w,x:b.x+D,y:b.y+D,preserveAspectRatio:"none"}));var Q=F(A,D);return T.createElement("svg",P({shapeRendering:"crispEdges",height:E,width:E,viewBox:"0 0 ".concat(M," ").concat(M)},I),T.createElement("path",{fill:O,d:"M0,0 h".concat(M,"v").concat(M,"H0z")}),T.createElement("path",{fill:k,d:Q}),x)}}]),n}(T.PureComponent);h(j,"defaultProps",z);var $=function(n){var u=n.renderAs,i=c(n,["renderAs"]),m=u==="svg"?j:Y;return T.createElement(m,i)};$.defaultProps=p({renderAs:"canvas"},z),B.exports=$},H38U:function(B,N,C){var l=C("f4xo"),P=C("rcnY"),g=C("wU8J"),p=C("Iq15"),c=C("dWSS");function y(t,a){this.typeNumber=t,this.errorCorrectLevel=a,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var o=y.prototype;o.addData=function(t){var a=new l(t);this.dataList.push(a),this.dataCache=null},o.isDark=function(t,a){if(t<0||this.moduleCount<=t||a<0||this.moduleCount<=a)throw new Error(t+","+a);return this.modules[t][a]},o.getModuleCount=function(){return this.moduleCount},o.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var a=P.getRSBlocks(t,this.errorCorrectLevel),e=new g,r=0,f=0;f<a.length;f++)r+=a[f].dataCount;for(var f=0;f<this.dataList.length;f++){var v=this.dataList[f];e.put(v.mode,4),e.put(v.getLength(),p.getLengthInBits(v.mode,t)),v.write(e)}if(e.getLengthInBits()<=r*8)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},o.makeImpl=function(t,a){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++){this.modules[e]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[e][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,a),this.typeNumber>=7&&this.setupTypeNumber(t),this.dataCache==null&&(this.dataCache=y.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,a)},o.setupPositionProbePattern=function(t,a){for(var e=-1;e<=7;e++)if(!(t+e<=-1||this.moduleCount<=t+e))for(var r=-1;r<=7;r++)a+r<=-1||this.moduleCount<=a+r||(0<=e&&e<=6&&(r==0||r==6)||0<=r&&r<=6&&(e==0||e==6)||2<=e&&e<=4&&2<=r&&r<=4?this.modules[t+e][a+r]=!0:this.modules[t+e][a+r]=!1)},o.getBestMaskPattern=function(){for(var t=0,a=0,e=0;e<8;e++){this.makeImpl(!0,e);var r=p.getLostPoint(this);(e==0||t>r)&&(t=r,a=e)}return a},o.createMovieClip=function(t,a,e){var r=t.createEmptyMovieClip(a,e),f=1;this.make();for(var v=0;v<this.modules.length;v++)for(var d=v*f,h=0;h<this.modules[v].length;h++){var T=h*f,R=this.modules[v][h];R&&(r.beginFill(0,100),r.moveTo(T,d),r.lineTo(T+f,d),r.lineTo(T+f,d+f),r.lineTo(T,d+f),r.endFill())}return r},o.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)this.modules[t][6]==null&&(this.modules[t][6]=t%2==0);for(var a=8;a<this.moduleCount-8;a++)this.modules[6][a]==null&&(this.modules[6][a]=a%2==0)},o.setupPositionAdjustPattern=function(){for(var t=p.getPatternPosition(this.typeNumber),a=0;a<t.length;a++)for(var e=0;e<t.length;e++){var r=t[a],f=t[e];if(this.modules[r][f]==null)for(var v=-2;v<=2;v++)for(var d=-2;d<=2;d++)v==-2||v==2||d==-2||d==2||v==0&&d==0?this.modules[r+v][f+d]=!0:this.modules[r+v][f+d]=!1}},o.setupTypeNumber=function(t){for(var a=p.getBCHTypeNumber(this.typeNumber),e=0;e<18;e++){var r=!t&&(a>>e&1)==1;this.modules[Math.floor(e/3)][e%3+this.moduleCount-8-3]=r}for(var e=0;e<18;e++){var r=!t&&(a>>e&1)==1;this.modules[e%3+this.moduleCount-8-3][Math.floor(e/3)]=r}},o.setupTypeInfo=function(t,a){for(var e=this.errorCorrectLevel<<3|a,r=p.getBCHTypeInfo(e),f=0;f<15;f++){var v=!t&&(r>>f&1)==1;f<6?this.modules[f][8]=v:f<8?this.modules[f+1][8]=v:this.modules[this.moduleCount-15+f][8]=v}for(var f=0;f<15;f++){var v=!t&&(r>>f&1)==1;f<8?this.modules[8][this.moduleCount-f-1]=v:f<9?this.modules[8][15-f-1+1]=v:this.modules[8][15-f-1]=v}this.modules[this.moduleCount-8][8]=!t},o.mapData=function(t,a){for(var e=-1,r=this.moduleCount-1,f=7,v=0,d=this.moduleCount-1;d>0;d-=2)for(d==6&&d--;;){for(var h=0;h<2;h++)if(this.modules[r][d-h]==null){var T=!1;v<t.length&&(T=(t[v]>>>f&1)==1);var R=p.getMask(a,r,d-h);R&&(T=!T),this.modules[r][d-h]=T,f--,f==-1&&(v++,f=7)}if(r+=e,r<0||this.moduleCount<=r){r-=e,e=-e;break}}},y.PAD0=236,y.PAD1=17,y.createData=function(t,a,e){for(var r=P.getRSBlocks(t,a),f=new g,v=0;v<e.length;v++){var d=e[v];f.put(d.mode,4),f.put(d.getLength(),p.getLengthInBits(d.mode,t)),d.write(f)}for(var h=0,v=0;v<r.length;v++)h+=r[v].dataCount;if(f.getLengthInBits()>h*8)throw new Error("code length overflow. ("+f.getLengthInBits()+">"+h*8+")");for(f.getLengthInBits()+4<=h*8&&f.put(0,4);f.getLengthInBits()%8!=0;)f.putBit(!1);for(;!(f.getLengthInBits()>=h*8||(f.put(y.PAD0,8),f.getLengthInBits()>=h*8));)f.put(y.PAD1,8);return y.createBytes(f,r)},y.createBytes=function(t,a){for(var e=0,r=0,f=0,v=new Array(a.length),d=new Array(a.length),h=0;h<a.length;h++){var T=a[h].dataCount,R=a[h].totalCount-T;r=Math.max(r,T),f=Math.max(f,R),v[h]=new Array(T);for(var L=0;L<v[h].length;L++)v[h][L]=255&t.buffer[L+e];e+=T;var U=p.getErrorCorrectPolynomial(R),J=new c(v[h],U.getLength()-1),z=J.mod(U);d[h]=new Array(U.getLength()-1);for(var L=0;L<d[h].length;L++){var V=L+z.getLength()-d[h].length;d[h][L]=V>=0?z.get(V):0}}for(var G=0,L=0;L<a.length;L++)G+=a[L].totalCount;for(var K=new Array(G),F=0,L=0;L<r;L++)for(var h=0;h<a.length;h++)L<v[h].length&&(K[F++]=v[h][L]);for(var L=0;L<f;L++)for(var h=0;h<a.length;h++)L<d[h].length&&(K[F++]=d[h][L]);return K},B.exports=y},Iq15:function(B,N,C){var l=C("nVVt"),P=C("dWSS"),g=C("dQei"),p={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},c={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,G18:1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,G15_MASK:1<<14|1<<12|1<<10|1<<4|1<<1,getBCHTypeInfo:function(o){for(var t=o<<10;c.getBCHDigit(t)-c.getBCHDigit(c.G15)>=0;)t^=c.G15<<c.getBCHDigit(t)-c.getBCHDigit(c.G15);return(o<<10|t)^c.G15_MASK},getBCHTypeNumber:function(o){for(var t=o<<12;c.getBCHDigit(t)-c.getBCHDigit(c.G18)>=0;)t^=c.G18<<c.getBCHDigit(t)-c.getBCHDigit(c.G18);return o<<12|t},getBCHDigit:function(o){for(var t=0;o!=0;)t++,o>>>=1;return t},getPatternPosition:function(o){return c.PATTERN_POSITION_TABLE[o-1]},getMask:function(o,t,a){switch(o){case p.PATTERN000:return(t+a)%2==0;case p.PATTERN001:return t%2==0;case p.PATTERN010:return a%3==0;case p.PATTERN011:return(t+a)%3==0;case p.PATTERN100:return(Math.floor(t/2)+Math.floor(a/3))%2==0;case p.PATTERN101:return t*a%2+t*a%3==0;case p.PATTERN110:return(t*a%2+t*a%3)%2==0;case p.PATTERN111:return(t*a%3+(t+a)%2)%2==0;default:throw new Error("bad maskPattern:"+o)}},getErrorCorrectPolynomial:function(o){for(var t=new P([1],0),a=0;a<o;a++)t=t.multiply(new P([1,g.gexp(a)],0));return t},getLengthInBits:function(o,t){if(1<=t&&t<10)switch(o){case l.MODE_NUMBER:return 10;case l.MODE_ALPHA_NUM:return 9;case l.MODE_8BIT_BYTE:return 8;case l.MODE_KANJI:return 8;default:throw new Error("mode:"+o)}else if(t<27)switch(o){case l.MODE_NUMBER:return 12;case l.MODE_ALPHA_NUM:return 11;case l.MODE_8BIT_BYTE:return 16;case l.MODE_KANJI:return 10;default:throw new Error("mode:"+o)}else if(t<41)switch(o){case l.MODE_NUMBER:return 14;case l.MODE_ALPHA_NUM:return 13;case l.MODE_8BIT_BYTE:return 16;case l.MODE_KANJI:return 12;default:throw new Error("mode:"+o)}else throw new Error("type:"+t)},getLostPoint:function(o){for(var t=o.getModuleCount(),a=0,e=0;e<t;e++)for(var r=0;r<t;r++){for(var f=0,v=o.isDark(e,r),d=-1;d<=1;d++)if(!(e+d<0||t<=e+d))for(var h=-1;h<=1;h++)r+h<0||t<=r+h||d==0&&h==0||v==o.isDark(e+d,r+h)&&f++;f>5&&(a+=3+f-5)}for(var e=0;e<t-1;e++)for(var r=0;r<t-1;r++){var T=0;o.isDark(e,r)&&T++,o.isDark(e+1,r)&&T++,o.isDark(e,r+1)&&T++,o.isDark(e+1,r+1)&&T++,(T==0||T==4)&&(a+=3)}for(var e=0;e<t;e++)for(var r=0;r<t-6;r++)o.isDark(e,r)&&!o.isDark(e,r+1)&&o.isDark(e,r+2)&&o.isDark(e,r+3)&&o.isDark(e,r+4)&&!o.isDark(e,r+5)&&o.isDark(e,r+6)&&(a+=40);for(var r=0;r<t;r++)for(var e=0;e<t-6;e++)o.isDark(e,r)&&!o.isDark(e+1,r)&&o.isDark(e+2,r)&&o.isDark(e+3,r)&&o.isDark(e+4,r)&&!o.isDark(e+5,r)&&o.isDark(e+6,r)&&(a+=40);for(var R=0,r=0;r<t;r++)for(var e=0;e<t;e++)o.isDark(e,r)&&R++;var L=Math.abs(100*R/t/t-50)/5;return a+=L*10,a}};B.exports=c},aRTE:function(B,N){B.exports={L:1,M:0,Q:3,H:2}},dQei:function(B,N){for(var C={glog:function(g){if(g<1)throw new Error("glog("+g+")");return C.LOG_TABLE[g]},gexp:function(g){for(;g<0;)g+=255;for(;g>=256;)g-=255;return C.EXP_TABLE[g]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},l=0;l<8;l++)C.EXP_TABLE[l]=1<<l;for(var l=8;l<256;l++)C.EXP_TABLE[l]=C.EXP_TABLE[l-4]^C.EXP_TABLE[l-5]^C.EXP_TABLE[l-6]^C.EXP_TABLE[l-8];for(var l=0;l<255;l++)C.LOG_TABLE[C.EXP_TABLE[l]]=l;B.exports=C},dWSS:function(B,N,C){var l=C("dQei");function P(g,p){if(g.length==null)throw new Error(g.length+"/"+p);for(var c=0;c<g.length&&g[c]==0;)c++;this.num=new Array(g.length-c+p);for(var y=0;y<g.length-c;y++)this.num[y]=g[y+c]}P.prototype={get:function(p){return this.num[p]},getLength:function(){return this.num.length},multiply:function(p){for(var c=new Array(this.getLength()+p.getLength()-1),y=0;y<this.getLength();y++)for(var o=0;o<p.getLength();o++)c[y+o]^=l.gexp(l.glog(this.get(y))+l.glog(p.get(o)));return new P(c,0)},mod:function(p){if(this.getLength()-p.getLength()<0)return this;for(var c=l.glog(this.get(0))-l.glog(p.get(0)),y=new Array(this.getLength()),o=0;o<this.getLength();o++)y[o]=this.get(o);for(var o=0;o<p.getLength();o++)y[o]^=l.gexp(l.glog(p.get(o))+c);return new P(y,0).mod(p)}},B.exports=P},f4xo:function(B,N,C){var l=C("nVVt");function P(g){this.mode=l.MODE_8BIT_BYTE,this.data=g}P.prototype={getLength:function(p){return this.data.length},write:function(p){for(var c=0;c<this.data.length;c++)p.put(this.data.charCodeAt(c),8)}},B.exports=P},nVVt:function(B,N){B.exports={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3}},rcnY:function(B,N,C){var l=C("aRTE");function P(g,p){this.totalCount=g,this.dataCount=p}P.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],P.getRSBlocks=function(g,p){var c=P.getRsBlockTable(g,p);if(c==null)throw new Error("bad rs block @ typeNumber:"+g+"/errorCorrectLevel:"+p);for(var y=c.length/3,o=new Array,t=0;t<y;t++)for(var a=c[t*3+0],e=c[t*3+1],r=c[t*3+2],f=0;f<a;f++)o.push(new P(e,r));return o},P.getRsBlockTable=function(g,p){switch(p){case l.L:return P.RS_BLOCK_TABLE[(g-1)*4+0];case l.M:return P.RS_BLOCK_TABLE[(g-1)*4+1];case l.Q:return P.RS_BLOCK_TABLE[(g-1)*4+2];case l.H:return P.RS_BLOCK_TABLE[(g-1)*4+3];default:return}},B.exports=P},wU8J:function(B,N){function C(){this.buffer=new Array,this.length=0}C.prototype={get:function(P){var g=Math.floor(P/8);return(this.buffer[g]>>>7-P%8&1)==1},put:function(P,g){for(var p=0;p<g;p++)this.putBit((P>>>g-p-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(P){var g=Math.floor(this.length/8);this.buffer.length<=g&&this.buffer.push(0),P&&(this.buffer[g]|=128>>>this.length%8),this.length++}},B.exports=C}}]);
