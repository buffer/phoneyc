google_ad_channel='4107951263';google_ad_client='pub-7651592418643185';google_ad_format='468x60_as';google_ad_height=60;google_ad_width=468;google_color_bg='ffffff';google_color_border='ffffff';google_color_link='000066';google_color_text='333333';google_color_url='000066';;;
(function(){var h=true,i=null,j=false,k=(new Date).getTime(),aa=function(a){var b=(new Date).getTime()-k;b="&dtd="+(b<1E4?b:"M");return a+b};var l=this,ba=function(a,b,c){a=a.split(".");c=c||l;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)if(!a.length&&b!==undefined)c[d]=b;else c=c[d]?c[d]:(c[d]={})},m=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";
if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";else if(b=="function"&&typeof a.call=="undefined")return"object";return b},n=function(a){return m(a)=="array"},ca=function(a){var b=m(a);return b=="array"||b=="object"&&typeof a.length=="number"},p=function(a){return typeof a=="string"},da=function(a){a=m(a);return a=="object"||
a=="array"||a=="function"},q=function(a,b){var c=b||l;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)}}else return function(){return a.apply(c,arguments)}},ea=function(a){var b=Array.prototype.slice.call(arguments,1);return function(){var c=Array.prototype.slice.call(arguments);c.unshift.apply(c,b);return a.apply(this,c)}},r=function(a,b,c){ba(a,b,c)},fa=function(a,
b,c){a[b]=c};var s=function(a,b){var c=parseFloat(a);return isNaN(c)||c>1||c<0?b:c},t=function(a,b){if(a=="true")return h;if(a=="false")return j;return b},ga=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,u=function(a,b){if(!a)return b;var c=a.match(ga);return c?c[0]:b};var ha=function(){return u("","googleads.g.doubleclick.net")},ia=function(){return u("","pagead2.googlesyndication.com")},v=function(){return u("","pagead2.googlesyndication.com")};var oa=function(a,b){if(b)return a.replace(ja,"&amp;").replace(ka,"&lt;").replace(la,"&gt;").replace(ma,"&quot;");else{if(!na.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(ja,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(ka,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(la,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(ma,"&quot;");return a}},ja=/&/g,ka=/</g,la=/>/g,ma=/\"/g,na=/[&<>\"]/,ra=function(a){if(a.indexOf("&")!=-1)return"document"in l&&a.indexOf("<")==-1?pa(a):qa(a);return a},pa=function(a){var b=
l.document.createElement("a");b.innerHTML=a;b.normalize&&b.normalize();a=b.firstChild.nodeValue;b.innerHTML="";return a},qa=function(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if(c.charAt(0)=="#"){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return b}})},sa=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=c==1?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==
e)return a.substring(1,a.length-1)}return a},ua=function(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),g=0;c==0&&g<f;g++){var o=d[g]||"",Q=e[g]||"",I=RegExp("(\\d*)(\\D*)","g"),bc=RegExp("(\\d*)(\\D*)","g");do{var R=I.exec(o)||["","",""],S=bc.exec(Q)||["","",""];if(R[0].length==0&&S[0].length==0)break;c=R[1].length==0?0:parseInt(R[1],10);var cc=S[1].length==0?0:parseInt(S[1],10);
c=ta(c,cc)||ta(R[2].length==0,S[2].length==0)||ta(R[2],S[2])}while(c==0)}return c},ta=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var w=Array.prototype,va=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},wa=function(){return w.concat.apply(w,arguments)},xa=function(a){if(n(a))return wa(a);else{for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}};var x=function(a,b){this.width=a;this.height=b};x.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};x.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};x.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};x.prototype.scale=function(a){this.width*=a;this.height*=a;return this};var ya=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},za=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Aa=function(a){for(var b,c,d=1;d<arguments.length;d++){c=arguments[d];for(b in c)a[b]=c[b];for(var e=0;e<za.length;e++){b=za[e];if(Object.prototype.hasOwnProperty.call(c,b))a[b]=c[b]}}};var y,Ba,Ca,Da,Ea,Fa,Ga,Ha,Ia,Ja=function(){return l.navigator?l.navigator.userAgent:i},Ka=function(){return l.navigator},La=function(){Ea=Da=Ca=Ba=y=j;var a;if(a=Ja()){var b=Ka();y=a.indexOf("Opera")==0;Ba=!y&&a.indexOf("MSIE")!=-1;Da=(Ca=!y&&a.indexOf("WebKit")!=-1)&&a.indexOf("Mobile")!=-1;Ea=!y&&!Ca&&b.product=="Gecko"}};La();
var Ma=y,z=Ba,Na=Ea,Oa=Ca,Pa=Da,Qa=function(){var a=Ka();return a&&a.platform||""},Ra=Qa(),Sa=function(){Fa=Ra.indexOf("Mac")!=-1;Ga=Ra.indexOf("Win")!=-1;Ha=Ra.indexOf("Linux")!=-1;Ia=!!Ka()&&(Ka().appVersion||"").indexOf("X11")!=-1};Sa();
var Ta=Fa,Ua=Ga,Va=Ha,Wa=function(){var a="",b;if(Ma&&l.opera){a=l.opera.version;a=typeof a=="function"?a():a}else{if(Na)b=/rv\:([^\);]+)(\)|;)/;else if(z)b=/MSIE\s+([^\);]+)(\)|;)/;else if(Oa)b=/WebKit\/(\S+)/;if(b)a=(a=b.exec(Ja()))?a[1]:""}return a},Xa=Wa(),Ya={},A=function(a){return Ya[a]||(Ya[a]=ua(Xa,a)>=0)};var Za=function(a){return p(a)?document.getElementById(a):a},$a=Za,bb=function(a,b){ya(b,function(c,d){if(d=="style")a.style.cssText=c;else if(d=="class")a.className=c;else if(d=="for")a.htmlFor=c;else if(d in ab)a.setAttribute(ab[d],c);else a[d]=c})},ab={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",type:"type"},cb=function(a){var b=a.document;if(Oa&&!A("500")&&!Pa){if(typeof a.innerHeight==
"undefined")a=window;b=a.innerHeight;var c=a.document.documentElement.scrollHeight;if(a==a.top)if(c<b)b-=15;return new x(a.innerWidth,b)}a=b.compatMode=="CSS1Compat";if(Ma&&!A("9.50"))a=j;a=a?b.documentElement:b.body;return new x(a.clientWidth,a.clientHeight)},eb=function(){return db(document,arguments)},db=function(a,b){var c=b[0],d=b[1];if(z&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',oa(d.name),'"');if(d.type){c.push(' type="',oa(d.type),'"');var e={};Aa(e,d);d=e;delete d.type}c.push(">");
c=c.join("")}var f=a.createElement(c);if(d)if(p(d))f.className=d;else bb(f,d);if(b.length>2){d=function(g){if(g)f.appendChild(p(g)?a.createTextNode(g):g)};for(c=2;c<b.length;c++){e=b[c];ca(e)&&!(da(e)&&e.nodeType>0)?va(fb(e)?xa(e):e,d):d(e)}}return f},gb=function(a,b){a.appendChild(b)},fb=function(a){if(a&&typeof a.length=="number")if(da(a))return typeof a.item=="function"||typeof a.item=="string";else if(m(a)=="function")return typeof a.item=="function";return j};var hb=document,B=window,ib=function(a){var b=i;if((a=a.getElementsByTagName("script"))&&a.length){b=a[a.length-1];b=b.parentNode}return b},jb=ib(hb);v();
var C=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(i,a[c],c,a)},kb=function(a){return!!a&&typeof a=="function"&&!!a.call},lb=function(a){return!!a&&(typeof a=="object"||typeof a=="function")},nb=function(a,b){if(!a||!lb(a))return h;return!mb(a,b.prototype)},mb=function(a,b){if(!a)return j;var c=h;C(b,function(d,e){if(!c||!(e in a)||typeof d!=typeof a[e])c=j});return c},ob=function(a){if(arguments.length<2)return a.length;for(var b=1,c=arguments.length;b<c;++b)a.push(arguments[b]);return a.length};
function D(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}function pb(a,b,c){var d=document.createElement("script");d.type="text/javascript";if(b)d.onload=b;if(c)d.id=c;d.src=a;var e=document.getElementsByTagName("head")[0];if(!e)return j;window.setTimeout(function(){e.appendChild(d)},0);return h}function qb(a,b){if(a.attachEvent){a.attachEvent("onload",b);return h}if(a.addEventListener){a.addEventListener("load",b,j);return h}return j}
var rb=function(a){if(!("google_onload_fired"in a)){a.google_onload_fired=j;qb(a,function(){a.google_onload_fired=h})}};function sb(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=new Image;c.src=b;a.google_image_requests.push(c)}function tb(a){if(a in ub)return ub[a];return ub[a]=navigator.userAgent.toLowerCase().indexOf(a)!=-1}var ub={};
function vb(){if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){a=3;for(var b=1;b;)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+(a+1));a++}catch(c){b=i}return a.toString()}else if(tb("msie")&&!window.opera){b=i;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(d){a=
0;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");a=6;b.AllowScriptAccess="always"}catch(e){if(a==6)return a.toString()}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(f){}}if(b){a=b.GetVariable("$version").split(" ")[1];return a.replace(/,/g,".")}}return"0"}function wb(a){var b=a.google_ad_format;if(b)return b.indexOf("_0ads")>0;return a.google_ad_output!="html"&&a.google_num_radlinks>0}function E(a){return!!a&&a.indexOf("_sdo")!=-1}
function xb(a,b){if(!(Math.random()<1.0E-4)){var c=Math.random();if(c<b){c=Math.floor(c/b*a.length);return a[c]}}return""}
var yb=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=window.history.length;a.u_java=navigator.javaEnabled();if(window.screen){a.u_h=window.screen.height;a.u_w=window.screen.width;a.u_ah=window.screen.availHeight;a.u_aw=window.screen.availWidth;a.u_cd=window.screen.colorDepth}if(navigator.plugins)a.u_nplug=navigator.plugins.length;if(navigator.mimeTypes)a.u_nmime=navigator.mimeTypes.length},zb=function(a,b){var c=b||B;if(a&&c.top!=c)c=c.top;try{return c.document&&!c.document.body?new x(-1,
-1):cb(c||window)}catch(d){return new x(-12245933,-12245933)}},Ab=function(a,b){var c=a.length;if(c==0)return 0;for(var d=b||305419896,e=0;e<c;e++){var f=a.charCodeAt(e);d^=(d<<5)+(d>>2)+f&4294967295}return d>0?d:4294967296+d},Bb=function(a){if(a==a.top)return 0;var b=[];b.push(a.document.URL);a.name&&b.push(a.name);var c=h;a=zb(!c,a);b.push(a.width.toString());b.push(a.height.toString());return Ab(b.join(""))},Cb=function(a){if(!a)return"";var b=[],c=0;for(a=a;a&&c<25;a=a.parentNode,++c)b.push(a.id||
"");return b.join()};var Db={google_ad_channel:"channel",google_ad_host:"host",google_ad_host_channel:"h_ch",google_ad_host_tier_id:"ht_id",google_ad_section:"region",google_ad_type:"ad_type",google_adtest:"adtest",google_allow_expandable_ads:"ea",google_alternate_ad_url:"alternate_ad_url",google_alternate_color:"alt_color",google_bid:"bid",google_city:"gcs",google_color_bg:"color_bg",google_color_border:"color_border",google_color_line:"color_line",google_color_link:"color_link",google_color_text:"color_text",google_color_url:"color_url",
google_contents:"contents",google_country:"gl",google_cpm:"cpm",google_cust_age:"cust_age",google_cust_ch:"cust_ch",google_cust_gender:"cust_gender",google_cust_id:"cust_id",google_cust_interests:"cust_interests",google_cust_job:"cust_job",google_cust_l:"cust_l",google_cust_lh:"cust_lh",google_cust_u_url:"cust_u_url",google_disable_video_autoplay:"disable_video_autoplay",google_ed:"ed",google_encoding:"oe",google_feedback:"feedback_link",google_flash_version:"flash",google_font_face:"f",google_font_size:"fs",
google_hints:"hints",google_kw:"kw",google_kw_type:"kw_type",google_language:"hl",google_page_url:"url",google_region:"gr",google_reuse_colors:"reuse_colors",google_safe:"adsafe",google_tag_info:"gut",google_targeting:"targeting",google_targeting_video_doc_id:"tvdi",google_ui_features:"ui",google_ui_version:"uiv",google_video_doc_id:"video_doc_id",google_video_product_type:"video_product_type"},Eb={google_ad_block:"ad_block",google_ad_client:"client",google_ad_format:"format",google_ad_output:"output",
google_ad_callback:"callback",google_ad_height:"h",google_ad_override:"google_ad_override",google_ad_slot:"slotname",google_ad_width:"w",google_ctr_threshold:"ctr_t",google_image_size:"image_size",google_last_modified_time:"lmt",google_max_num_ads:"num_ads",google_max_radlink_len:"max_radlink_len",google_num_radlinks:"num_radlinks",google_num_radlinks_per_unit:"num_radlinks_per_unit",google_only_ads_with_video:"only_ads_with_video",google_rl_dest_url:"rl_dest_url",google_rl_filtering:"rl_filtering",
google_rl_mode:"rl_mode",google_rt:"rt",google_skip:"skip"},Fb={google_only_pyv_ads:"pyv",google_with_pyv_ads:"withpyv"};var Gb=s("0",0),Hb=s("0",0),Ib=s("0.005",0),Jb=s("1",0),Kb=s("0.01",0),Lb=s("0.01",0),Mb=s("0.008",0),Nb=s("0.01",0),Ob=s("0",0);var Pb=t("false",j),Qb=t("false",h),Rb=t("false",j),Sb=t("false",j);var Tb=function(a,b,c){b=q(b,l,a);a=window.onerror;window.onerror=b;try{c()}catch(d){c=d.toString();var e="";if(d.fileName)e=d.fileName;var f=-1;if(d.lineNumber)f=d.lineNumber;b=b(c,e,f);if(!b)throw d;}window.onerror=a};r("google_protectAndRun",Tb);
var Vb=function(a,b,c,d){if(Math.random()<0.01){var e=hb;a=["http://",ia(),"/pagead/gen_204","?id=jserror","&jscb=",Pb?1:0,"&jscd=",Rb?1:0,"&context=",D(a),"&msg=",D(b),"&file=",D(c),"&line=",D(d.toString()),"&url=",D(e.URL.substring(0,512)),"&ref=",D(e.referrer.substring(0,512))];a.push(Ub());sb(B,a.join(""))}return!Sb};r("google_handleError",Vb);
var Xb=function(a){Wb|=a},Wb=0,Ub=function(){var a=["&client=",D(B.google_ad_client),"&format=",D(B.google_ad_format),"&slotname=",D(B.google_ad_slot),"&output=",D(B.google_ad_output),"&ad_type=",D(B.google_ad_type)];return a.join("")};var Yb=function(a){var b="google_test";try{var c=a[b];a[b]=!c;if(a[b]===!c){a[b]=c;return h}}catch(d){}return j},Zb=function(a){for(;a!=a.parent&&Yb(a.parent);)a=a.parent;return a},$b=i,ac=function(){$b||($b=Zb(window));return $b};var dc,F=function(){this.p=[];this.P=window;this.d=0},ec=function(a,b){this.fn=a;this.win=b};F.prototype.enqueue=function(a,b){this.p.push(new ec(a,b||this.P));this.g()};F.prototype.o=function(){this.d=1};F.prototype.q=function(){if(this.d==1)this.d=0;this.g()};fa(F.prototype,"nq",F.prototype.enqueue);fa(F.prototype,"al",F.prototype.o);fa(F.prototype,"rl",F.prototype.q);F.prototype.g=function(){this.P.setTimeout(q(this.O,this),0)};
F.prototype.O=function(){if(this.d==0&&this.p.length){var a=this.p.shift();this.d=2;a.win.setTimeout(q(this.J,this,a),0);this.g()}};F.prototype.J=function(a){this.d=0;a.fn()};var fc=function(a){return lb(a)&&kb(a.nq)&&kb(a.al)&&kb(a.rl)},gc=function(){if(dc)return dc;var a=ac(),b=a.google_jobrunner;if(fc(b))return dc=b;return a.google_jobrunner=dc=new F},hc=function(a,b){gc().nq(a,b)},ic=function(){gc().al()},jc=function(){var a=ac().google_jobrunner;fc(a)&&a.rl()};var kc,lc,mc,nc,oc,pc,qc,rc=function(){qc=pc=oc=nc=mc=lc=kc=j;var a=Ja();if(a)if(a.indexOf("Firefox")!=-1)kc=h;else if(a.indexOf("Camino")!=-1)lc=h;else if(a.indexOf("iPhone")!=-1||a.indexOf("iPod")!=-1)mc=h;else if(a.indexOf("iPad")!=-1)nc=h;else if(a.indexOf("Android")!=-1)oc=h;else if(a.indexOf("Chrome")!=-1)pc=h;else if(a.indexOf("Safari")!=-1)qc=h};rc();var sc=kc,tc=pc;var G=!!window.google_async_iframe_id,H=G&&window.parent||window,uc=function(a,b){for(var c=a.document,d=b.id,e=0;!d||a.document.getElementById(d);)d="aswift_"+e++;b.id=d;e=["<iframe"];for(var f in b)ob(e,f,"=",b[f]);e.push("></iframe>");f=e.join(" ");c.write(f);return d},vc=function(a,b,c){a=a.document.getElementById(b).contentWindow.document;a.open();a.write(c)},wc=function(a){if(G&&a!=a.parent){jc();a.setTimeout(function(){a.document.close()},0)}};function xc(a,b){try{return a.top.document==b}catch(c){}return j}function yc(a,b,c,d){c=c||a.google_ad_width;d=d||a.google_ad_height;if(xc(a,b))return j;var e=b.documentElement;if(c&&d){var f=1,g=1;if(a.innerHeight){f=a.innerWidth;g=a.innerHeight}else if(e&&e.clientHeight){f=e.clientWidth;g=e.clientHeight}else if(b.body){f=b.body.clientWidth;g=b.body.clientHeight}if(g>2*d||f>2*c)return j}return h}function zc(a,b){C(b,function(c,d){a["google_"+d]=c})}
function Ac(a,b){if(!b)return a.URL;return a.referrer}function Bc(a,b){if(!b&&a.google_referrer_url==i)return"0";else if(b&&a.google_referrer_url==i)return"1";else if(!b&&a.google_referrer_url!=i)return"2";else if(b&&a.google_referrer_url!=i)return"3";return"4"}function Cc(a,b,c){a.page_url=Ac(b,c);a.page_location=i}function Dc(a,b,c,d){a.page_url=b.google_page_url;a.page_location=Ac(c,d)||"EMPTY"}
function Ec(a,b){var c={},d=yc(H,b,a.google_ad_width,a.google_ad_height);c.iframing=Bc(a,d);a.google_page_url?Dc(c,a,b,d):Cc(c,b,d);c.last_modified_time=b.URL==c.page_url?Date.parse(b.lastModified)/1E3:i;c.referrer_url=d?a.google_referrer_url:a.google_page_url&&a.google_referrer_url?a.google_referrer_url:b.referrer;return c}function Fc(a){var b={},c=a.URL.substring(a.URL.lastIndexOf("http"));b.iframing=i;b.page_url=c;b.page_location=a.URL;b.last_modified_time=i;b.referrer_url=c;return b}
function Gc(a){var b=Hc(a,H.document);zc(a,b)}function Hc(a,b){var c;return c=a.google_page_url==i&&Ic[b.domain]?Fc(b):Ec(a,b)}var Ic={};Ic["ad.yieldmanager.com"]=h;var Jc="",Mc=function(){if(window.google_ad_frameborder==i)window.google_ad_frameborder=0;if(window.google_ad_output==i)window.google_ad_output="html";if(E(window.google_ad_format)){var a=window.google_ad_format.match(/^(\d+)x(\d+)_.*/);if(a){window.google_ad_width=parseInt(a[1],10);window.google_ad_height=parseInt(a[2],10);window.google_ad_output="html"}}window.google_ad_format=Kc(window.google_ad_format,String(window.google_ad_output),Number(window.google_ad_width),Number(window.google_ad_height),
window.google_ad_slot,!!window.google_override_format);Jc=window.google_ad_client||"";window.google_ad_client=Lc(window.google_ad_format,window.google_ad_client);Gc(window);if(window.google_flash_version==i)window.google_flash_version=vb();window.google_ad_section=window.google_ad_section||window.google_ad_region||"";window.google_country=window.google_country||window.google_gl||"";a=(new Date).getTime();if(n(window.google_color_bg))window.google_color_bg=J(window.google_color_bg,a);if(n(window.google_color_text))window.google_color_text=
J(window.google_color_text,a);if(n(window.google_color_link))window.google_color_link=J(window.google_color_link,a);if(n(window.google_color_url))window.google_color_url=J(window.google_color_url,a);if(n(window.google_color_border))window.google_color_border=J(window.google_color_border,a);if(n(window.google_color_line))window.google_color_line=J(window.google_color_line,a)},Nc=function(a){C(Db,function(b,c){a[c]=i});C(Eb,function(b,c){a[c]=i});C(Fb,function(b,c){a[c]=i});a.google_container_id=i;
a.google_disable_async=i;a.google_eids=i;a.google_page_location=i;a.google_referrer_url=i;a.google_ad_region=i;a.google_gl=i},J=function(a,b){Xb(2);return a[b%a.length]},Lc=function(a,b){if(!b)return"";b=b.toLowerCase();return b=E(a)?Oc(b):Pc(b)},Pc=function(a){if(a&&a.substring(0,3)!="ca-")a="ca-"+a;return a},Oc=function(a){if(a&&a.substring(0,7)!="ca-aff-")a="ca-aff-"+a;return a},Kc=function(a,b,c,d,e,f){if(!a&&b=="html")a=c+"x"+d;return a=Qc(a,e,f)?a.toLowerCase():""},Qc=function(a,b,c){if(!a)return j;
if(!b)return h;return c};var K=document,L=navigator,M=window;
function Rc(){var a=K.cookie,b=Math.round((new Date).getTime()/1E3),c=M.google_analytics_domain_name;c=typeof c=="undefined"?Sc("auto"):Sc(c);var d=a.indexOf("__utma="+c+".")>-1,e=a.indexOf("__utmb="+c)>-1,f=a.indexOf("__utmc="+c)>-1,g={},o=!!M&&!!M.gaGlobal;if(d){a=a.split("__utma="+c+".")[1].split(";")[0].split(".");g.sid=e&&f?a[3]+"":o&&M.gaGlobal.sid?M.gaGlobal.sid:b+"";g.vid=a[0]+"."+a[1];g.from_cookie=h}else{g.sid=o&&M.gaGlobal.sid?M.gaGlobal.sid:b+"";g.vid=o&&M.gaGlobal.vid?M.gaGlobal.vid:
(Math.round(Math.random()*2147483647)^Tc()&2147483647)+"."+b;g.from_cookie=j}g.dh=c;g.hid=o&&M.gaGlobal.hid?M.gaGlobal.hid:Math.round(Math.random()*2147483647);return M.gaGlobal=g}
function Tc(){var a=K.cookie?K.cookie:"",b=M.history.length,c,d=[L.appName,L.version,L.language?L.language:L.browserLanguage,L.platform,L.userAgent,L.javaEnabled()?1:0].join("");if(M.screen)d+=M.screen.width+"x"+M.screen.height+M.screen.colorDepth;else if(M.java){c=java.awt.Toolkit.getDefaultToolkit().getScreenSize();d+=c.screen.width+"x"+c.screen.height}d+=a;d+=K.referrer?K.referrer:"";for(a=d.length;b>0;)d+=b--^a++;return Uc(d)}
function Uc(a){var b=1,c=0,d;if(!(a==undefined||a=="")){b=0;for(d=a.length-1;d>=0;d--){c=a.charCodeAt(d);b=(b<<6&268435455)+c+(c<<14);c=b&266338304;b=c!=0?b^c>>21:b}}return b}function Sc(a){if(!a||a==""||a=="none")return 1;if("auto"==a){a=K.domain;if("www."==a.substring(0,4))a=a.substring(4,a.length)}return Uc(a.toLowerCase())};var N=function(){this.defaultBucket=[];this.layers={};for(var a=0,b=arguments.length;a<b;++a)this.layers[arguments[a]]=""},Vc=function(a){for(var b=new N,c=0,d=a.defaultBucket.length;c<d;++c)b.defaultBucket.push(a.defaultBucket[c]);C(a.layers,q(N.prototype.k,b));return b};N.prototype.k=function(a,b){this.layers[b]=a};N.prototype.N=function(a,b){if(a=="")return"";if(!b){this.defaultBucket.push(a);return a}if(this.layers.hasOwnProperty(b))return this.layers[b]=a;return""};
N.prototype.b=function(a,b,c){if(this.A(c)&&!(Math.random()<1.0E-4)&&Math.random()<b){b=Math.floor(Math.random()*a.length);return this.N(a[b],c)}return""};N.prototype.A=function(a){if(!a)return h;return this.layers.hasOwnProperty(a)&&this.layers[a]==""};N.prototype.c=function(a){if(this.layers.hasOwnProperty(a))return this.layers[a];return""};N.prototype.geil=N.prototype.c;
N.prototype.z=function(){var a=[],b=function(c){c!=""&&a.push(c)};C(this.layers,b);if(this.defaultBucket.length>0&&a.length>0)return this.defaultBucket.join(",")+","+a.join(",");return this.defaultBucket.join(",")+a.join(",")};var Xc=function(a){this.a=this.S=a;Wc(this)},Yc={};Yc.google_persistent_state=h;Yc.google_persistent_state_async=h;
var Zc={},O=function(a){a=a&&Yc[a]?a:G?"google_persistent_state_async":"google_persistent_state";if(Zc[a])return Zc[a];if(a=="google_persistent_state_async")var b=H,c={};else c=b=H;var d=b[a];if(typeof d!="object"||typeof d.S!="object")return b[a]=Zc[a]=new Xc(c);return Zc[a]=d},Wc=function(a){P(a,1,j);P(a,2,j);P(a,3,i);P(a,4,0);P(a,5,0);P(a,6,0);P(a,7,(new Date).getTime());P(a,8,{});P(a,9,{});P(a,10,{});P(a,11,[]);P(a,12,0)},$c=function(a){switch(a){case 1:return"google_new_domain_enabled";case 2:return"google_new_domain_checked";
case 3:return"google_exp_persistent";case 4:return"google_num_sdo_slots";case 5:return"google_num_0ad_slots";case 6:return"google_num_ad_slots";case 7:return"google_correlator";case 8:return"google_prev_ad_formats_by_region";case 9:return"google_prev_ad_slotnames_by_region";case 10:return"google_num_slots_by_channel";case 11:return"google_viewed_host_channels";case 12:return"google_num_slot_to_show"}},T=function(a,b){var c=$c(b);return c=a.S[c]},U=function(a,b,c){return a.S[$c(b)]=c},P=function(a,
b,c){a=a.S;b=$c(b);if(a[b]===undefined)return a[b]=c;return a[b]},ad=function(a){if(T(a,1))return h;return U(a,1,!!window.google_new_domain_enabled)},bd=function(a,b){return U(a,3,b)};var cd,dd,V=function(){if(cd)return cd;var a=O(),b=T(a,3);if(nb(b,N))return cd=bd(a,new N(1,2,3,4));return cd=b},ed=function(){dd||(dd=Vc(V()));return dd},fd={CONTROL:"33895100",LOADER:"33895101",RELEASE_CANDIDATE_LOADER:"33895150",BLOCKING_LOADER:"33895151",NO_LOADER:"33895152",NO_LOADER_NO_EXPAND:"33895153"},gd={ASWIFT_LOADER:"33895131",BLOCKING_LOADER:"33895132"};var W=function(){};W.prototype.serialize=function(a){var b=[];this.h(a,b);return b.join("")};W.prototype.h=function(a,b){switch(typeof a){case "string":this.r(a,b);break;case "number":this.L(a,b);break;case "boolean":b.push(a);break;case "undefined":b.push("null");break;case "object":if(a==i){b.push("null");break}if(n(a)){this.K(a,b);break}this.M(a,b);break;case "function":break;default:throw Error("Unknown type: "+typeof a);}};
var hd={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},id=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;W.prototype.r=function(a,b){b.push('"',a.replace(id,function(c){if(c in hd)return hd[c];var d=c.charCodeAt(0),e="\\u";if(d<16)e+="000";else if(d<256)e+="00";else if(d<4096)e+="0";return hd[c]=e+d.toString(16)}),'"')};W.prototype.L=function(a,b){b.push(isFinite(a)&&!isNaN(a)?a:"null")};
W.prototype.K=function(a,b){var c=a.length;b.push("[");for(var d="",e=0;e<c;e++){b.push(d);this.h(a[e],b);d=","}b.push("]")};W.prototype.M=function(a,b){b.push("{");var c="";for(var d in a)if(a.hasOwnProperty(d)){var e=a[d];if(typeof e!="function"){b.push(c);this.r(d,b);b.push(":");this.h(e,b);c=","}}b.push("}")};var jd=["google_ad_block","google_ad_channel","google_ad_client","google_ad_format","google_ad_height","google_ad_host","google_ad_host_channel","google_ad_host_tier_id","google_ad_output","google_ad_override","google_ad_region","google_ad_section","google_ad_slot","google_ad_type","google_ad_width","google_adtest","google_allow_expandable_ads","google_alternate_ad_url","google_alternate_color","google_analytics_domain_name","google_analytics_uacct","google_bid","google_city","google_color_bg","google_color_border",
"google_color_line","google_color_link","google_color_text","google_color_url","google_container_id","google_contents","google_country","google_cpm","google_ctr_threshold","google_cust_age","google_cust_ch","google_cust_gender","google_cust_id","google_cust_interests","google_cust_job","google_cust_l","google_cust_lh","google_cust_u_url","google_disable_video_autoplay","google_ed","google_eids","google_enable_osd","google_encoding","google_font_face","google_font_size","google_frame_id","google_gl",
"google_hints","google_image_size","google_kw","google_kw_type","google_language","google_max_num_ads","google_max_radlink_len","google_num_radlinks","google_num_radlinks_per_unit","google_num_slots_to_rotate","google_only_ads_with_video","google_only_pyv_ads","google_override_format","google_page_url","google_referrer_url","google_region","google_reuse_colors","google_rl_dest_url","google_rl_filtering","google_rl_mode","google_rt","google_safe","google_skip","google_tag_info","google_targeting",
"google_ui_features","google_ui_version","google_video_doc_id","google_video_product_type","google_with_pyv_ads"],kd=function(a){for(var b=[],c=0,d=jd.length;c<d;c++){var e=jd[c];if(a[e]!=i){var f;try{f=(new W).serialize(a[e])}catch(g){}f&&b.push(e,"=",f,";")}}return b.join("")},ld=function(a){for(var b=0,c=jd.length;b<c;b++){var d=jd[b];a[d]=i}};var md=function(a){var b="google_unique_id";if(a[b])++a[b];else a[b]=1;return a[b]},nd=function(){var a="script";return["<",a,' src="http://',v(),,'/pagead/js/r20100616/r20100614/show_ads_impl.js"></',a,">"].join("")},od=function(){if(window.google_disable_async)return j;return hb.domain==B.location.hostname&&(z||tc||sc&&!!window.document.body)&&
!window.google_container_id&&(!window.google_ad_output||window.google_ad_output=="html")},pd=function(a){var b="script",c={allowtransparency:'"true"',frameborder:'"'+(a.google_ad_frameborder||0)+'"',height:'"'+a.google_ad_height+'"',hspace:'"0"',marginwidth:'"0"',marginheight:'"0"',name:'"google_ads_frame"',scrolling:'"no"',vspace:'"0"',width:'"'+a.google_ad_width+'"'};a.google_ad_frameborder=i;var d=uc(a,c);c=kd(a);ld(a);var e=k,f=(new Date).getTime(),g=["<!doctype html><html><body><",b,">",c,"google_unique_id=",
a.google_unique_id,';google_async_iframe_id="',d,'";google_start_time=',e,";google_bpp=",f>e?f-e:1,";</",b,">",nd(),"</body></html>"].join("");hc(function(){ic();vc(a,d,g)})},qd=function(){var a=fd;a=[a.RELEASE_CANDIDATE_LOADER,a.BLOCKING_LOADER,a.NO_LOADER,a.NO_LOADER_NO_EXPAND];V().b(a,Ib,3)},rd=function(){if(G){var a=O("google_persistent_state"),b=T(a,3);a=3;if("geil"in b){b=b.geil(a);V().b([b],1,a)}}},sd=function(){var a=V();return"geil"in a?a.geil(3):""},td=function(){var a=sd(),b=fd;return a==
b.RELEASE_CANDIDATE_LOADER},ud=function(){var a=sd(),b=fd;return a==b.BLOCKING_LOADER},vd=function(){var a=sd(),b=fd;return a==b.NO_LOADER_NO_EXPAND},wd=function(){if(Qb){G&&rd();var a=gd,b=0;b=G?a.ASWIFT_LOADER:a.BLOCKING_LOADER;V().b([b],1,4)}};var xd={google:1,googlegroups:1,gmail:1,googlemail:1,googleimages:1,googleprint:1};function yd(a){a=a.google_page_location||a.google_page_url;if(!a)return j;a=a.toString();if(a.indexOf("http://")==0)a=a.substring(7,a.length);else if(a.indexOf("https://")==0)a=a.substring(8,a.length);var b=a.indexOf("/");if(b==-1)b=a.length;a=a.substring(0,b);a=a.split(".");b=j;if(a.length>=3)b=a[a.length-3]in xd;if(a.length>=2)b=b||a[a.length-2]in xd;return b}
function zd(a,b,c){var d=O();if(yd(a))return!U(d,2,h);if(!T(d,2)){a=Math.random();if(a<=c){c="http://"+ha()+"/pagead/test_domain.js";a="script";b.write("<"+a+' src="'+c+'"></'+a+">");return U(d,2,h)}}return j}var Ad=function(a){var b=V();if(b.c(1)=="44901228")return j;if(b.c(1)=="44901229"||Math.random()<Hb)return 1==Math.floor(a/2)%2;return j};
function Bd(a,b){var c=O();if(!yd(a)&&ad(c))return Ad(b)?"http://"+u("","googleads2.g.doubleclick.net"):"http://"+ha();return"http://"+ia()};var X=function(a){this.e=a;this.n=[];this.m=0;this.f=[];this.F=0;this.i=[];this.C=j;this.s=this.t="";this.B=j};X.prototype.H=function(a,b){var c=this.e[b],d=this.n;this.e[b]=function(e){if(e&&e.length>0){var f=e.length>1?e[1].url:i;d.push([a,ra(e[0].url),f])}c(e)}};X.prototype.G=function(){this.m++};X.prototype.I=function(a){this.f.push(a)};var Cd="http://"+v()+"/pagead/osd.js";X.prototype.D=function(){if(!this.C){rb(H);pb(Cd);this.C=h}};
X.prototype.u=function(a){if(this.m>0)for(var b=this.e.document.getElementsByTagName("iframe"),c=this.B?"google_ads_iframe_":"google_ads_frame",d=0;d<b.length;d++){var e=b.item(d);e.src&&e.name&&e.name.indexOf(c)==0&&a(e,e.src)}};
X.prototype.v=function(a){var b=this.n;if(b.length>0)for(var c=this.e.document.getElementsByTagName("a"),d=0;d<c.length;d++)for(var e=0;e<b.length;e++)if(c.item(d).href==b[e][1]){var f=c.item(d).parentNode;if(b[e][2])for(var g=f,o=0;o<4;o++){if(g.innerHTML.indexOf(b[e][2])>0){f=g;break}g=g.parentNode}a(f,b[e][0]);b.splice(e,1);break}};X.prototype.w=function(a){for(var b=0;b<this.f.length;b++){var c=this.f[b],d=Dd(c);if(d)(d=this.e.document.getElementById("google_ads_div_"+d))&&a(d,c)}};
X.prototype.j=function(a){this.v(a);this.w(a);this.u(a)};X.prototype.setupOsd=function(a,b,c){this.F=a;this.t=b;this.s=c};X.prototype.getOsdMode=function(){return this.F};X.prototype.getEid=function(){return this.t};X.prototype.getCorrelator=function(){return this.s};X.prototype.l=function(){return this.n.length+this.m+this.f.length};X.prototype.setValidOutputTypes=function(a){this.i=a};
X.prototype.registerAdBlockByType=function(a,b,c){if(this.i.length>0){for(var d=0;d<this.i.length;d++)if(this.i[d]==a){this.B=c;if(a=="js")this.H(b,"google_ad_request_done");else if(a=="html")this.G();else a=="json_html"&&this.I(b)}this.D()}};var Dd=function(a){if((a=a.match(/[&\?](?:slotname)=([^&]+)/))&&a.length==2)return a[1];return""},Ed=function(){var a=H;a.__google_ad_urls||(a.__google_ad_urls=new X(a));return a.__google_ad_urls};r("Goog_AdSense_getAdAdapterInstance",Ed);
r("Goog_AdSense_OsdAdapter",X);r("Goog_AdSense_OsdAdapter.prototype.numBlocks",X.prototype.l);r("Goog_AdSense_OsdAdapter.prototype.findBlocks",X.prototype.j);r("Goog_AdSense_OsdAdapter.prototype.getOsdMode",X.prototype.getOsdMode);r("Goog_AdSense_OsdAdapter.prototype.getEid",X.prototype.getEid);r("Goog_AdSense_OsdAdapter.prototype.getCorrelator",X.prototype.getCorrelator);r("Goog_AdSense_OsdAdapter.prototype.setValidOutputTypes",X.prototype.setValidOutputTypes);
r("Goog_AdSense_OsdAdapter.prototype.setupOsd",X.prototype.setupOsd);r("Goog_AdSense_OsdAdapter.prototype.registerAdBlockByType",X.prototype.registerAdBlockByType);var Fd=function(a,b){var c=a.nodeType==9?a:a.ownerDocument||a.document;if(c.defaultView&&c.defaultView.getComputedStyle)if(c=c.defaultView.getComputedStyle(a,""))return c[b];return i},Gd=function(a,b){return Fd(a,b)||(a.currentStyle?a.currentStyle[b]:i)||a.style[b]},Hd=function(a,b,c,d){if(typeof d=="number")d=(b?Math.round(d):d)+"px";c.style[a]=d};ea(Hd,"height",h);ea(Hd,"width",h);
var Id=function(a,b,c,d){if(/^\d+px?$/.test(b))return parseInt(b,10);else{var e=a.style[c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=e;a.runtimeStyle[c]=f;return b}},Jd=function(a){var b=a.nodeType==9?a:a.ownerDocument||a.document,c="";if(b.body.createTextRange){c=b.body.createTextRange();c.moveToElementText(a);c=c.queryCommandValue("FontName")}if(!c){c=Gd(a,"fontFamily");if(Ma&&Va)c=c.replace(/ \[[^\]]*\]/,"")}a=c.split(",");if(a.length>1)c=a[0];
return sa(c,"\"'")},Kd=/[^\d]+$/,Ld=function(a){return(a=a.match(Kd))&&a[0]||i},Md={cm:1,"in":1,mm:1,pc:1,pt:1},Nd={em:1,ex:1},Od=function(a){var b=Gd(a,"fontSize"),c=Ld(b);if(b&&"px"==c)return parseInt(b,10);if(z)if(c in Md)return Id(a,b,"left","pixelLeft");else if(a.parentNode&&a.parentNode.nodeType==1&&c in Nd){a=a.parentNode;c=Gd(a,"fontSize");return Id(a,b==c?"1em":b,"left","pixelLeft")}c=eb("span",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});
gb(a,c);b=c.offsetHeight;c&&c.parentNode&&c.parentNode.removeChild(c);return b};var Y={};function Pd(a){if(a==1)return h;return!Y[a]}function Qd(a,b){if(!(!a||a==""))if(b==1)if(Y[b])Y[b]+=","+a;else Y[b]=a;else Y[b]=a}function Rd(){var a=[];C(Y,function(b){a.push(b)});return a.join(",")}function Sd(a,b){if(n(a))for(var c=0;c<a.length;c++)p(a[c])&&Qd(a[c],b)}var Td=j;
function Ud(a,b){var c="script";Td=Vd(a,b);if(!Td)a.google_allow_expandable_ads=j;var d=!Wd();Td&&d&&b.write("<"+c+' src="http://'+v()+'/pagead/expansion_embed.js"></'+c+">");var e=zd(a,b,Jb);(d=d||e)&&tb("msie")&&!window.opera?b.write("<"+c+' src="http://'+v()+'/pagead/render_ads.js"></'+c+">"):b.write("<"+c+'>google_protectAndRun("ads_core.google_render_ad", google_handleError, google_render_ad);</'+c+">")}var Z=function(a){a=a.google_unique_id;if(typeof a=="number")return a;return 0};
function $(a){return a!=i?'"'+a+'"':'""'}var Xd=function(a,b){var c=b.slice(-1),d=c=="?"||c=="#"?"":"&",e=[b];c=function(f,g){if(f||f===0||f===j){if(typeof f=="boolean")f=f?1:0;ob(e,d,g,"=",D(f));d="&"}};C(a,c);return e.join("")};function Yd(){var a=z&&A("6"),b=Na&&A("1.8.1"),c=Oa&&A("525");if(Ua&&(a||b||c))return h;else if(Ta&&(c||b))return h;else if(Va&&b)return h;return j}
function Wd(){return(typeof ExpandableAdSlotFactory=="function"||typeof ExpandableAdSlotFactory=="object")&&typeof ExpandableAdSlotFactory.createIframe=="function"}function Vd(a,b){if(a.google_allow_expandable_ads===j||!b.body||a.google_ad_output!="html"||yc(a,b)||!Zd(a)||isNaN(a.google_ad_height)||isNaN(a.google_ad_width)||!Yd()||vd()&&od()||b.domain!=a.location.hostname)return j;return h}function Zd(a){var b=a.google_ad_format;if(E(b))return j;if(wb(a)&&b!="468x15_0ads_al")return j;return h}
function $d(){var a;if(B.google_ad_output=="html"&&!(wb(B)||E(B.google_ad_format))&&Pd(0)){a=["6083035","6083034"];a=xb(a,Ob);Qd(a,0)}return a=="6083035"}function ae(a,b){if(!(G?Z(a)==1:!Z(a))||E(a.google_ad_format))return"";var c="",d=wb(a);if(b=="html"||d)c=xb(["36815001","36815002"],Kb);if(c==""&&(b=="js"||d))c=xb(["36815003","36815004"],Lb);if(c==""&&(b=="html"||b=="js"))c=xb(["36813005","36813006"],Mb);return c}
function be(){if(G)return"";var a=Ed(),b=window.google_enable_osd,c;if(b===h){c="36813006";ce(c,a)}else if(b!==j&&Pd(0)){c=a.getEid();if(c=="")(c=ae(window,String(window.google_ad_output||"")))&&ce(c,a);else if(c!="36815001"&&c!="36815002"&&c!="36815003"&&c!="36815004"&&c!="36813005"&&c!="36813006")c=""}if(c){Qd(c,0);return c}return""}
function ce(a,b){var c=b.getOsdMode(),d=[];switch(a){case "36815004":c=1;d=["js"];break;case "36815002":c=1;d=["html"];break;case "36813006":c=0;d=["html","js"];break}d.length>0&&b.setValidOutputTypes(d);d=O();b.setupOsd(c,a,T(d,7).toString())}
function de(a,b,c,d){G||md(a);var e=Z(a);c=Xd({ifi:e},c);c=c.substring(0,1991);c=c.replace(/%\w?$/,"");var f="script";if((a.google_ad_output=="js"||a.google_ad_output=="json_html")&&(a.google_ad_request_done||a.google_radlink_request_done))b.write("<"+f+' language="JavaScript1.1" src='+$(aa(c))+"></"+f+">");else if(a.google_ad_output=="html")if(Td&&Wd()){b=a.google_container_id||d||i;a["google_expandable_ad_slot"+e]=ExpandableAdSlotFactory.createIframe("google_ads_frame"+e,aa(c),a.google_ad_width,
a.google_ad_height,b)}else{e='<iframe name="google_ads_frame" width='+$(String(a.google_ad_width))+" height="+$(String(a.google_ad_height))+" frameborder="+$(String(a.google_ad_frameborder==i?"":a.google_ad_frameborder))+" src="+$(aa(c))+' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no"></iframe>';a.google_container_id?ee(a.google_container_id,b,e):b.write(e)}return c}function fe(a){Nc(a)}
function ge(a){var b=ed().c(2)=="44901217";if(!he(b))return j;b=$d();var c=Bd(window,Z(window));a=ie(a);b=c+je(a.google_ad_format,b);window.google_ad_url=Xd(a,b);return h}
var ne=function(a){a.dt=k;if(G&&window.google_bpp)a.bpp=window.google_bpp;a.shv="r20100616";var b=O(),c=T(b,8),d=window.google_ad_section,e=window.google_ad_format,f=window.google_ad_slot;if(c[d])E(e)||(a.prev_fmts=c[d]);var g=T(b,9);if(g[d])a.prev_slotnames=g[d].toLowerCase();if(e){if(!E(e))if(c[d])c[d]+=","+e;else c[d]=e}else if(f)if(g[d])g[d]+=","+f;else g[d]=f;a.correlator=T(b,7);if(T(b,2)&&!ad(b))a.dblk=1;if(window.google_ad_channel){c=T(b,10);d="";e=window.google_ad_channel.split(ke);
for(f=0;f<e.length;f++){g=e[f];if(c[g])d+=g+"+";else c[g]=h}a.pv_ch=d}if(window.google_ad_host_channel){b=le(window.google_ad_host_channel,T(b,11));a.pv_h_ch=b}if(Pb)a.jscb=1;if(Rb)a.jscd=1;a.frm=window.google_iframing;a.adk=me();b=Rc();a.ga_vid=b.vid;a.ga_sid=b.sid;a.ga_hid=b.hid;a.ga_fc=b.from_cookie;a.ga_wpids=window.google_analytics_uacct},oe=function(a){var b=h;if(b=zb(b)){a.biw=b.width;a.bih=b.height}},me=function(){var a=[];ob(a,B.google_ad_slot,B.google_ad_format,B.google_ad_type,B.google_ad_width,
B.google_ad_height);if(jb){var b=Cb(jb);b&&a.push(b)}b=0;if(a)b=Ab(a.join(":"));return b.toString()},pe=function(a){var b=Bb(H);if(b!=0)a.ifk=b.toString()};function le(a,b){for(var c=a.split("|"),d=-1,e=[],f=0;f<c.length;f++){var g=c[f].split(ke);b[f]||(b[f]={});for(var o="",Q=0;Q<g.length;Q++){var I=g[Q];if(I!="")if(b[f][I])o+="+"+I;else b[f][I]=h}o=o.slice(1);e[f]=o;if(o!="")d=f}c="";if(d>-1){for(f=0;f<d;f++)c+=e[f]+"|";c+=e[d]}return c}
function qe(){var a=["44901228","44901229"];V().b(a,Gb,1);a=["44901218","44901217"];V().b(a,Nb,2)}var re=function(){ac()!=H&&Xb(4)};
function se(){re();(G?Z(window)==1:!Z(window))&&qe();var a=be(),b=i,c="",d=Math.random()<0.01;if(d)if(b=window.google_async_iframe_id)b=H.document.getElementById(b);else{c="google_temp_span";b=te(c)}d=ge(b);b&&b.id==c&&(b&&b.parentNode?b.parentNode.removeChild(b):i);if(d){c=de(window,document,window.google_ad_url);if(a)Ed().registerAdBlockByType(String(window.google_ad_output||""),c,j);fe(window)}wc(window)}
var ue=function(a){C(Eb,function(b,c){a[b]=window[c]});C(Db,function(b,c){a[b]=window[c]});C(Fb,function(b,c){a[b]=window[c]})},ve=function(a){Sd(window.google_eids,1);a.eid=Rd();var b=ed().z();if(a.eid.length>0&&b.length>0)a.eid+=",";a.eid+=b};function we(a,b,c,d){a=Vb(a,b,c,d);Ud(window,document);return a}function xe(){Mc()}
function ye(a){var b={};a=a.split("?");a=a[a.length-1].split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");if(d[0])try{b[d[0].toLowerCase()]=d.length>1?window.decodeURIComponent?decodeURIComponent(d[1].replace(/\+/g," ")):unescape(d[1]):""}catch(e){}}return b}function ze(){var a=window,b=ye(document.URL);if(b.google_ad_override){a.google_ad_override=b.google_ad_override;a.google_adtest="on"}}
function ee(a,b,c){if(a)if((a=b.getElementById(a))&&c&&c.length!=""){a.style.visibility="visible";a.innerHTML=c}}
var je=function(a,b){var c;return c=E(a)?"/pagead/sdo?":b?"/pagead/render_iframe_ads.html#":"/pagead/ads?"},Ae=function(a,b){b.dff=Jd(a).toLowerCase();b.dfs=Od(a)},Be=function(a){a.ref=window.google_referrer_url;a.loc=window.google_page_location},he=function(a){var b=O(),c=T(b,8),d=T(b,9),e=window.google_ad_section;if(E(window.google_ad_format)){if(U(b,4,T(b,4)+1)>4&&!a)return j}else if(wb(window)){if(U(b,5,T(b,5)+1)>3&&!a)return j}else{var f=U(b,6,T(b,6)+1);if(window.google_num_slots_to_rotate){Xb(1);
c[e]="";d[e]="";T(b,12)||U(b,12,(new Date).getTime()%window.google_num_slots_to_rotate+1);if(T(b,12)!=f)return j}else if(!a&&f>6&&e=="")return j}return h},ie=function(a){var b={};ue(b);ne(b);yb(b);a&&Ae(a,b);oe(b);pe(b);ve(b);Be(b);b.fu=Wb;return b},te=function(a){var b=window.google_container_id,c=b&&$a(b)||$a(a);if(!c&&!b&&a){document.write("<span id="+a+"></span>");c=$a(a)}return c},ke=/[+, ]/;window.google_render_ad=se;var Ce=function(){ze();wd();var a=window.google_start_time;if(typeof a=="number"){k=a;window.google_start_time=i}Tb("show_ads.google_init_globals",we,xe);Ud(window,document)},De=function(){window.google_start_time=k;document.write(nd())},Ee=function(){if(od()){md(window);pd(window)}else De()};function Fe(){if(Sb&&typeof B.alternateShowAds=="function")B.alternateShowAds.call(i);else if(Qb)Ce();else{Z(window)||qd();if(td())Ee();else ud()?De():Ce()}}Tb("show_ads.main",Vb,Fe);})()
;;google_ad_channel='4107951263';google_ad_client='pub-7651592418643185';google_ad_format='728x15_0ads_al';google_ad_height=15;google_ad_width=728;google_color_bg='eeeeee';google_color_border='eeeeee';google_color_link='000066';google_color_text='333333';google_color_url='000066';;;
(function(){var h=true,i=null,j=false,k=(new Date).getTime(),aa=function(a){var b=(new Date).getTime()-k;b="&dtd="+(b<1E4?b:"M");return a+b};var l=this,ba=function(a,b,c){a=a.split(".");c=c||l;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)if(!a.length&&b!==undefined)c[d]=b;else c=c[d]?c[d]:(c[d]={})},m=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";
if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";else if(b=="function"&&typeof a.call=="undefined")return"object";return b},n=function(a){return m(a)=="array"},ca=function(a){var b=m(a);return b=="array"||b=="object"&&typeof a.length=="number"},p=function(a){return typeof a=="string"},da=function(a){a=m(a);return a=="object"||
a=="array"||a=="function"},q=function(a,b){var c=b||l;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)}}else return function(){return a.apply(c,arguments)}},ea=function(a){var b=Array.prototype.slice.call(arguments,1);return function(){var c=Array.prototype.slice.call(arguments);c.unshift.apply(c,b);return a.apply(this,c)}},r=function(a,b,c){ba(a,b,c)},fa=function(a,
b,c){a[b]=c};var s=function(a,b){var c=parseFloat(a);return isNaN(c)||c>1||c<0?b:c},t=function(a,b){if(a=="true")return h;if(a=="false")return j;return b},ga=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,u=function(a,b){if(!a)return b;var c=a.match(ga);return c?c[0]:b};var ha=function(){return u("","googleads.g.doubleclick.net")},ia=function(){return u("","pagead2.googlesyndication.com")},v=function(){return u("","pagead2.googlesyndication.com")};var oa=function(a,b){if(b)return a.replace(ja,"&amp;").replace(ka,"&lt;").replace(la,"&gt;").replace(ma,"&quot;");else{if(!na.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(ja,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(ka,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(la,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(ma,"&quot;");return a}},ja=/&/g,ka=/</g,la=/>/g,ma=/\"/g,na=/[&<>\"]/,ra=function(a){if(a.indexOf("&")!=-1)return"document"in l&&a.indexOf("<")==-1?pa(a):qa(a);return a},pa=function(a){var b=
l.document.createElement("a");b.innerHTML=a;b.normalize&&b.normalize();a=b.firstChild.nodeValue;b.innerHTML="";return a},qa=function(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if(c.charAt(0)=="#"){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return b}})},sa=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=c==1?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==
e)return a.substring(1,a.length-1)}return a},ua=function(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),g=0;c==0&&g<f;g++){var o=d[g]||"",Q=e[g]||"",I=RegExp("(\\d*)(\\D*)","g"),bc=RegExp("(\\d*)(\\D*)","g");do{var R=I.exec(o)||["","",""],S=bc.exec(Q)||["","",""];if(R[0].length==0&&S[0].length==0)break;c=R[1].length==0?0:parseInt(R[1],10);var cc=S[1].length==0?0:parseInt(S[1],10);
c=ta(c,cc)||ta(R[2].length==0,S[2].length==0)||ta(R[2],S[2])}while(c==0)}return c},ta=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var w=Array.prototype,va=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},wa=function(){return w.concat.apply(w,arguments)},xa=function(a){if(n(a))return wa(a);else{for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}};var x=function(a,b){this.width=a;this.height=b};x.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};x.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};x.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};x.prototype.scale=function(a){this.width*=a;this.height*=a;return this};var ya=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},za=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Aa=function(a){for(var b,c,d=1;d<arguments.length;d++){c=arguments[d];for(b in c)a[b]=c[b];for(var e=0;e<za.length;e++){b=za[e];if(Object.prototype.hasOwnProperty.call(c,b))a[b]=c[b]}}};var y,Ba,Ca,Da,Ea,Fa,Ga,Ha,Ia,Ja=function(){return l.navigator?l.navigator.userAgent:i},Ka=function(){return l.navigator},La=function(){Ea=Da=Ca=Ba=y=j;var a;if(a=Ja()){var b=Ka();y=a.indexOf("Opera")==0;Ba=!y&&a.indexOf("MSIE")!=-1;Da=(Ca=!y&&a.indexOf("WebKit")!=-1)&&a.indexOf("Mobile")!=-1;Ea=!y&&!Ca&&b.product=="Gecko"}};La();
var Ma=y,z=Ba,Na=Ea,Oa=Ca,Pa=Da,Qa=function(){var a=Ka();return a&&a.platform||""},Ra=Qa(),Sa=function(){Fa=Ra.indexOf("Mac")!=-1;Ga=Ra.indexOf("Win")!=-1;Ha=Ra.indexOf("Linux")!=-1;Ia=!!Ka()&&(Ka().appVersion||"").indexOf("X11")!=-1};Sa();
var Ta=Fa,Ua=Ga,Va=Ha,Wa=function(){var a="",b;if(Ma&&l.opera){a=l.opera.version;a=typeof a=="function"?a():a}else{if(Na)b=/rv\:([^\);]+)(\)|;)/;else if(z)b=/MSIE\s+([^\);]+)(\)|;)/;else if(Oa)b=/WebKit\/(\S+)/;if(b)a=(a=b.exec(Ja()))?a[1]:""}return a},Xa=Wa(),Ya={},A=function(a){return Ya[a]||(Ya[a]=ua(Xa,a)>=0)};var Za=function(a){return p(a)?document.getElementById(a):a},$a=Za,bb=function(a,b){ya(b,function(c,d){if(d=="style")a.style.cssText=c;else if(d=="class")a.className=c;else if(d=="for")a.htmlFor=c;else if(d in ab)a.setAttribute(ab[d],c);else a[d]=c})},ab={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",type:"type"},cb=function(a){var b=a.document;if(Oa&&!A("500")&&!Pa){if(typeof a.innerHeight==
"undefined")a=window;b=a.innerHeight;var c=a.document.documentElement.scrollHeight;if(a==a.top)if(c<b)b-=15;return new x(a.innerWidth,b)}a=b.compatMode=="CSS1Compat";if(Ma&&!A("9.50"))a=j;a=a?b.documentElement:b.body;return new x(a.clientWidth,a.clientHeight)},eb=function(){return db(document,arguments)},db=function(a,b){var c=b[0],d=b[1];if(z&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',oa(d.name),'"');if(d.type){c.push(' type="',oa(d.type),'"');var e={};Aa(e,d);d=e;delete d.type}c.push(">");
c=c.join("")}var f=a.createElement(c);if(d)if(p(d))f.className=d;else bb(f,d);if(b.length>2){d=function(g){if(g)f.appendChild(p(g)?a.createTextNode(g):g)};for(c=2;c<b.length;c++){e=b[c];ca(e)&&!(da(e)&&e.nodeType>0)?va(fb(e)?xa(e):e,d):d(e)}}return f},gb=function(a,b){a.appendChild(b)},fb=function(a){if(a&&typeof a.length=="number")if(da(a))return typeof a.item=="function"||typeof a.item=="string";else if(m(a)=="function")return typeof a.item=="function";return j};var hb=document,B=window,ib=function(a){var b=i;if((a=a.getElementsByTagName("script"))&&a.length){b=a[a.length-1];b=b.parentNode}return b},jb=ib(hb);v();
var C=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(i,a[c],c,a)},kb=function(a){return!!a&&typeof a=="function"&&!!a.call},lb=function(a){return!!a&&(typeof a=="object"||typeof a=="function")},nb=function(a,b){if(!a||!lb(a))return h;return!mb(a,b.prototype)},mb=function(a,b){if(!a)return j;var c=h;C(b,function(d,e){if(!c||!(e in a)||typeof d!=typeof a[e])c=j});return c},ob=function(a){if(arguments.length<2)return a.length;for(var b=1,c=arguments.length;b<c;++b)a.push(arguments[b]);return a.length};
function D(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}function pb(a,b,c){var d=document.createElement("script");d.type="text/javascript";if(b)d.onload=b;if(c)d.id=c;d.src=a;var e=document.getElementsByTagName("head")[0];if(!e)return j;window.setTimeout(function(){e.appendChild(d)},0);return h}function qb(a,b){if(a.attachEvent){a.attachEvent("onload",b);return h}if(a.addEventListener){a.addEventListener("load",b,j);return h}return j}
var rb=function(a){if(!("google_onload_fired"in a)){a.google_onload_fired=j;qb(a,function(){a.google_onload_fired=h})}};function sb(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=new Image;c.src=b;a.google_image_requests.push(c)}function tb(a){if(a in ub)return ub[a];return ub[a]=navigator.userAgent.toLowerCase().indexOf(a)!=-1}var ub={};
function vb(){if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){a=3;for(var b=1;b;)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+(a+1));a++}catch(c){b=i}return a.toString()}else if(tb("msie")&&!window.opera){b=i;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(d){a=
0;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");a=6;b.AllowScriptAccess="always"}catch(e){if(a==6)return a.toString()}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(f){}}if(b){a=b.GetVariable("$version").split(" ")[1];return a.replace(/,/g,".")}}return"0"}function wb(a){var b=a.google_ad_format;if(b)return b.indexOf("_0ads")>0;return a.google_ad_output!="html"&&a.google_num_radlinks>0}function E(a){return!!a&&a.indexOf("_sdo")!=-1}
function xb(a,b){if(!(Math.random()<1.0E-4)){var c=Math.random();if(c<b){c=Math.floor(c/b*a.length);return a[c]}}return""}
var yb=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=window.history.length;a.u_java=navigator.javaEnabled();if(window.screen){a.u_h=window.screen.height;a.u_w=window.screen.width;a.u_ah=window.screen.availHeight;a.u_aw=window.screen.availWidth;a.u_cd=window.screen.colorDepth}if(navigator.plugins)a.u_nplug=navigator.plugins.length;if(navigator.mimeTypes)a.u_nmime=navigator.mimeTypes.length},zb=function(a,b){var c=b||B;if(a&&c.top!=c)c=c.top;try{return c.document&&!c.document.body?new x(-1,
-1):cb(c||window)}catch(d){return new x(-12245933,-12245933)}},Ab=function(a,b){var c=a.length;if(c==0)return 0;for(var d=b||305419896,e=0;e<c;e++){var f=a.charCodeAt(e);d^=(d<<5)+(d>>2)+f&4294967295}return d>0?d:4294967296+d},Bb=function(a){if(a==a.top)return 0;var b=[];b.push(a.document.URL);a.name&&b.push(a.name);var c=h;a=zb(!c,a);b.push(a.width.toString());b.push(a.height.toString());return Ab(b.join(""))},Cb=function(a){if(!a)return"";var b=[],c=0;for(a=a;a&&c<25;a=a.parentNode,++c)b.push(a.id||
"");return b.join()};var Db={google_ad_channel:"channel",google_ad_host:"host",google_ad_host_channel:"h_ch",google_ad_host_tier_id:"ht_id",google_ad_section:"region",google_ad_type:"ad_type",google_adtest:"adtest",google_allow_expandable_ads:"ea",google_alternate_ad_url:"alternate_ad_url",google_alternate_color:"alt_color",google_bid:"bid",google_city:"gcs",google_color_bg:"color_bg",google_color_border:"color_border",google_color_line:"color_line",google_color_link:"color_link",google_color_text:"color_text",google_color_url:"color_url",
google_contents:"contents",google_country:"gl",google_cpm:"cpm",google_cust_age:"cust_age",google_cust_ch:"cust_ch",google_cust_gender:"cust_gender",google_cust_id:"cust_id",google_cust_interests:"cust_interests",google_cust_job:"cust_job",google_cust_l:"cust_l",google_cust_lh:"cust_lh",google_cust_u_url:"cust_u_url",google_disable_video_autoplay:"disable_video_autoplay",google_ed:"ed",google_encoding:"oe",google_feedback:"feedback_link",google_flash_version:"flash",google_font_face:"f",google_font_size:"fs",
google_hints:"hints",google_kw:"kw",google_kw_type:"kw_type",google_language:"hl",google_page_url:"url",google_region:"gr",google_reuse_colors:"reuse_colors",google_safe:"adsafe",google_tag_info:"gut",google_targeting:"targeting",google_targeting_video_doc_id:"tvdi",google_ui_features:"ui",google_ui_version:"uiv",google_video_doc_id:"video_doc_id",google_video_product_type:"video_product_type"},Eb={google_ad_block:"ad_block",google_ad_client:"client",google_ad_format:"format",google_ad_output:"output",
google_ad_callback:"callback",google_ad_height:"h",google_ad_override:"google_ad_override",google_ad_slot:"slotname",google_ad_width:"w",google_ctr_threshold:"ctr_t",google_image_size:"image_size",google_last_modified_time:"lmt",google_max_num_ads:"num_ads",google_max_radlink_len:"max_radlink_len",google_num_radlinks:"num_radlinks",google_num_radlinks_per_unit:"num_radlinks_per_unit",google_only_ads_with_video:"only_ads_with_video",google_rl_dest_url:"rl_dest_url",google_rl_filtering:"rl_filtering",
google_rl_mode:"rl_mode",google_rt:"rt",google_skip:"skip"},Fb={google_only_pyv_ads:"pyv",google_with_pyv_ads:"withpyv"};var Gb=s("0",0),Hb=s("0",0),Ib=s("0.005",0),Jb=s("1",0),Kb=s("0.01",0),Lb=s("0.01",0),Mb=s("0.008",0),Nb=s("0.01",0),Ob=s("0",0);var Pb=t("false",j),Qb=t("false",h),Rb=t("false",j),Sb=t("false",j);var Tb=function(a,b,c){b=q(b,l,a);a=window.onerror;window.onerror=b;try{c()}catch(d){c=d.toString();var e="";if(d.fileName)e=d.fileName;var f=-1;if(d.lineNumber)f=d.lineNumber;b=b(c,e,f);if(!b)throw d;}window.onerror=a};r("google_protectAndRun",Tb);
var Vb=function(a,b,c,d){if(Math.random()<0.01){var e=hb;a=["http://",ia(),"/pagead/gen_204","?id=jserror","&jscb=",Pb?1:0,"&jscd=",Rb?1:0,"&context=",D(a),"&msg=",D(b),"&file=",D(c),"&line=",D(d.toString()),"&url=",D(e.URL.substring(0,512)),"&ref=",D(e.referrer.substring(0,512))];a.push(Ub());sb(B,a.join(""))}return!Sb};r("google_handleError",Vb);
var Xb=function(a){Wb|=a},Wb=0,Ub=function(){var a=["&client=",D(B.google_ad_client),"&format=",D(B.google_ad_format),"&slotname=",D(B.google_ad_slot),"&output=",D(B.google_ad_output),"&ad_type=",D(B.google_ad_type)];return a.join("")};var Yb=function(a){var b="google_test";try{var c=a[b];a[b]=!c;if(a[b]===!c){a[b]=c;return h}}catch(d){}return j},Zb=function(a){for(;a!=a.parent&&Yb(a.parent);)a=a.parent;return a},$b=i,ac=function(){$b||($b=Zb(window));return $b};var dc,F=function(){this.p=[];this.P=window;this.d=0},ec=function(a,b){this.fn=a;this.win=b};F.prototype.enqueue=function(a,b){this.p.push(new ec(a,b||this.P));this.g()};F.prototype.o=function(){this.d=1};F.prototype.q=function(){if(this.d==1)this.d=0;this.g()};fa(F.prototype,"nq",F.prototype.enqueue);fa(F.prototype,"al",F.prototype.o);fa(F.prototype,"rl",F.prototype.q);F.prototype.g=function(){this.P.setTimeout(q(this.O,this),0)};
F.prototype.O=function(){if(this.d==0&&this.p.length){var a=this.p.shift();this.d=2;a.win.setTimeout(q(this.J,this,a),0);this.g()}};F.prototype.J=function(a){this.d=0;a.fn()};var fc=function(a){return lb(a)&&kb(a.nq)&&kb(a.al)&&kb(a.rl)},gc=function(){if(dc)return dc;var a=ac(),b=a.google_jobrunner;if(fc(b))return dc=b;return a.google_jobrunner=dc=new F},hc=function(a,b){gc().nq(a,b)},ic=function(){gc().al()},jc=function(){var a=ac().google_jobrunner;fc(a)&&a.rl()};var kc,lc,mc,nc,oc,pc,qc,rc=function(){qc=pc=oc=nc=mc=lc=kc=j;var a=Ja();if(a)if(a.indexOf("Firefox")!=-1)kc=h;else if(a.indexOf("Camino")!=-1)lc=h;else if(a.indexOf("iPhone")!=-1||a.indexOf("iPod")!=-1)mc=h;else if(a.indexOf("iPad")!=-1)nc=h;else if(a.indexOf("Android")!=-1)oc=h;else if(a.indexOf("Chrome")!=-1)pc=h;else if(a.indexOf("Safari")!=-1)qc=h};rc();var sc=kc,tc=pc;var G=!!window.google_async_iframe_id,H=G&&window.parent||window,uc=function(a,b){for(var c=a.document,d=b.id,e=0;!d||a.document.getElementById(d);)d="aswift_"+e++;b.id=d;e=["<iframe"];for(var f in b)ob(e,f,"=",b[f]);e.push("></iframe>");f=e.join(" ");c.write(f);return d},vc=function(a,b,c){a=a.document.getElementById(b).contentWindow.document;a.open();a.write(c)},wc=function(a){if(G&&a!=a.parent){jc();a.setTimeout(function(){a.document.close()},0)}};function xc(a,b){try{return a.top.document==b}catch(c){}return j}function yc(a,b,c,d){c=c||a.google_ad_width;d=d||a.google_ad_height;if(xc(a,b))return j;var e=b.documentElement;if(c&&d){var f=1,g=1;if(a.innerHeight){f=a.innerWidth;g=a.innerHeight}else if(e&&e.clientHeight){f=e.clientWidth;g=e.clientHeight}else if(b.body){f=b.body.clientWidth;g=b.body.clientHeight}if(g>2*d||f>2*c)return j}return h}function zc(a,b){C(b,function(c,d){a["google_"+d]=c})}
function Ac(a,b){if(!b)return a.URL;return a.referrer}function Bc(a,b){if(!b&&a.google_referrer_url==i)return"0";else if(b&&a.google_referrer_url==i)return"1";else if(!b&&a.google_referrer_url!=i)return"2";else if(b&&a.google_referrer_url!=i)return"3";return"4"}function Cc(a,b,c){a.page_url=Ac(b,c);a.page_location=i}function Dc(a,b,c,d){a.page_url=b.google_page_url;a.page_location=Ac(c,d)||"EMPTY"}
function Ec(a,b){var c={},d=yc(H,b,a.google_ad_width,a.google_ad_height);c.iframing=Bc(a,d);a.google_page_url?Dc(c,a,b,d):Cc(c,b,d);c.last_modified_time=b.URL==c.page_url?Date.parse(b.lastModified)/1E3:i;c.referrer_url=d?a.google_referrer_url:a.google_page_url&&a.google_referrer_url?a.google_referrer_url:b.referrer;return c}function Fc(a){var b={},c=a.URL.substring(a.URL.lastIndexOf("http"));b.iframing=i;b.page_url=c;b.page_location=a.URL;b.last_modified_time=i;b.referrer_url=c;return b}
function Gc(a){var b=Hc(a,H.document);zc(a,b)}function Hc(a,b){var c;return c=a.google_page_url==i&&Ic[b.domain]?Fc(b):Ec(a,b)}var Ic={};Ic["ad.yieldmanager.com"]=h;var Jc="",Mc=function(){if(window.google_ad_frameborder==i)window.google_ad_frameborder=0;if(window.google_ad_output==i)window.google_ad_output="html";if(E(window.google_ad_format)){var a=window.google_ad_format.match(/^(\d+)x(\d+)_.*/);if(a){window.google_ad_width=parseInt(a[1],10);window.google_ad_height=parseInt(a[2],10);window.google_ad_output="html"}}window.google_ad_format=Kc(window.google_ad_format,String(window.google_ad_output),Number(window.google_ad_width),Number(window.google_ad_height),
window.google_ad_slot,!!window.google_override_format);Jc=window.google_ad_client||"";window.google_ad_client=Lc(window.google_ad_format,window.google_ad_client);Gc(window);if(window.google_flash_version==i)window.google_flash_version=vb();window.google_ad_section=window.google_ad_section||window.google_ad_region||"";window.google_country=window.google_country||window.google_gl||"";a=(new Date).getTime();if(n(window.google_color_bg))window.google_color_bg=J(window.google_color_bg,a);if(n(window.google_color_text))window.google_color_text=
J(window.google_color_text,a);if(n(window.google_color_link))window.google_color_link=J(window.google_color_link,a);if(n(window.google_color_url))window.google_color_url=J(window.google_color_url,a);if(n(window.google_color_border))window.google_color_border=J(window.google_color_border,a);if(n(window.google_color_line))window.google_color_line=J(window.google_color_line,a)},Nc=function(a){C(Db,function(b,c){a[c]=i});C(Eb,function(b,c){a[c]=i});C(Fb,function(b,c){a[c]=i});a.google_container_id=i;
a.google_disable_async=i;a.google_eids=i;a.google_page_location=i;a.google_referrer_url=i;a.google_ad_region=i;a.google_gl=i},J=function(a,b){Xb(2);return a[b%a.length]},Lc=function(a,b){if(!b)return"";b=b.toLowerCase();return b=E(a)?Oc(b):Pc(b)},Pc=function(a){if(a&&a.substring(0,3)!="ca-")a="ca-"+a;return a},Oc=function(a){if(a&&a.substring(0,7)!="ca-aff-")a="ca-aff-"+a;return a},Kc=function(a,b,c,d,e,f){if(!a&&b=="html")a=c+"x"+d;return a=Qc(a,e,f)?a.toLowerCase():""},Qc=function(a,b,c){if(!a)return j;
if(!b)return h;return c};var K=document,L=navigator,M=window;
function Rc(){var a=K.cookie,b=Math.round((new Date).getTime()/1E3),c=M.google_analytics_domain_name;c=typeof c=="undefined"?Sc("auto"):Sc(c);var d=a.indexOf("__utma="+c+".")>-1,e=a.indexOf("__utmb="+c)>-1,f=a.indexOf("__utmc="+c)>-1,g={},o=!!M&&!!M.gaGlobal;if(d){a=a.split("__utma="+c+".")[1].split(";")[0].split(".");g.sid=e&&f?a[3]+"":o&&M.gaGlobal.sid?M.gaGlobal.sid:b+"";g.vid=a[0]+"."+a[1];g.from_cookie=h}else{g.sid=o&&M.gaGlobal.sid?M.gaGlobal.sid:b+"";g.vid=o&&M.gaGlobal.vid?M.gaGlobal.vid:
(Math.round(Math.random()*2147483647)^Tc()&2147483647)+"."+b;g.from_cookie=j}g.dh=c;g.hid=o&&M.gaGlobal.hid?M.gaGlobal.hid:Math.round(Math.random()*2147483647);return M.gaGlobal=g}
function Tc(){var a=K.cookie?K.cookie:"",b=M.history.length,c,d=[L.appName,L.version,L.language?L.language:L.browserLanguage,L.platform,L.userAgent,L.javaEnabled()?1:0].join("");if(M.screen)d+=M.screen.width+"x"+M.screen.height+M.screen.colorDepth;else if(M.java){c=java.awt.Toolkit.getDefaultToolkit().getScreenSize();d+=c.screen.width+"x"+c.screen.height}d+=a;d+=K.referrer?K.referrer:"";for(a=d.length;b>0;)d+=b--^a++;return Uc(d)}
function Uc(a){var b=1,c=0,d;if(!(a==undefined||a=="")){b=0;for(d=a.length-1;d>=0;d--){c=a.charCodeAt(d);b=(b<<6&268435455)+c+(c<<14);c=b&266338304;b=c!=0?b^c>>21:b}}return b}function Sc(a){if(!a||a==""||a=="none")return 1;if("auto"==a){a=K.domain;if("www."==a.substring(0,4))a=a.substring(4,a.length)}return Uc(a.toLowerCase())};var N=function(){this.defaultBucket=[];this.layers={};for(var a=0,b=arguments.length;a<b;++a)this.layers[arguments[a]]=""},Vc=function(a){for(var b=new N,c=0,d=a.defaultBucket.length;c<d;++c)b.defaultBucket.push(a.defaultBucket[c]);C(a.layers,q(N.prototype.k,b));return b};N.prototype.k=function(a,b){this.layers[b]=a};N.prototype.N=function(a,b){if(a=="")return"";if(!b){this.defaultBucket.push(a);return a}if(this.layers.hasOwnProperty(b))return this.layers[b]=a;return""};
N.prototype.b=function(a,b,c){if(this.A(c)&&!(Math.random()<1.0E-4)&&Math.random()<b){b=Math.floor(Math.random()*a.length);return this.N(a[b],c)}return""};N.prototype.A=function(a){if(!a)return h;return this.layers.hasOwnProperty(a)&&this.layers[a]==""};N.prototype.c=function(a){if(this.layers.hasOwnProperty(a))return this.layers[a];return""};N.prototype.geil=N.prototype.c;
N.prototype.z=function(){var a=[],b=function(c){c!=""&&a.push(c)};C(this.layers,b);if(this.defaultBucket.length>0&&a.length>0)return this.defaultBucket.join(",")+","+a.join(",");return this.defaultBucket.join(",")+a.join(",")};var Xc=function(a){this.a=this.S=a;Wc(this)},Yc={};Yc.google_persistent_state=h;Yc.google_persistent_state_async=h;
var Zc={},O=function(a){a=a&&Yc[a]?a:G?"google_persistent_state_async":"google_persistent_state";if(Zc[a])return Zc[a];if(a=="google_persistent_state_async")var b=H,c={};else c=b=H;var d=b[a];if(typeof d!="object"||typeof d.S!="object")return b[a]=Zc[a]=new Xc(c);return Zc[a]=d},Wc=function(a){P(a,1,j);P(a,2,j);P(a,3,i);P(a,4,0);P(a,5,0);P(a,6,0);P(a,7,(new Date).getTime());P(a,8,{});P(a,9,{});P(a,10,{});P(a,11,[]);P(a,12,0)},$c=function(a){switch(a){case 1:return"google_new_domain_enabled";case 2:return"google_new_domain_checked";
case 3:return"google_exp_persistent";case 4:return"google_num_sdo_slots";case 5:return"google_num_0ad_slots";case 6:return"google_num_ad_slots";case 7:return"google_correlator";case 8:return"google_prev_ad_formats_by_region";case 9:return"google_prev_ad_slotnames_by_region";case 10:return"google_num_slots_by_channel";case 11:return"google_viewed_host_channels";case 12:return"google_num_slot_to_show"}},T=function(a,b){var c=$c(b);return c=a.S[c]},U=function(a,b,c){return a.S[$c(b)]=c},P=function(a,
b,c){a=a.S;b=$c(b);if(a[b]===undefined)return a[b]=c;return a[b]},ad=function(a){if(T(a,1))return h;return U(a,1,!!window.google_new_domain_enabled)},bd=function(a,b){return U(a,3,b)};var cd,dd,V=function(){if(cd)return cd;var a=O(),b=T(a,3);if(nb(b,N))return cd=bd(a,new N(1,2,3,4));return cd=b},ed=function(){dd||(dd=Vc(V()));return dd},fd={CONTROL:"33895100",LOADER:"33895101",RELEASE_CANDIDATE_LOADER:"33895150",BLOCKING_LOADER:"33895151",NO_LOADER:"33895152",NO_LOADER_NO_EXPAND:"33895153"},gd={ASWIFT_LOADER:"33895131",BLOCKING_LOADER:"33895132"};var W=function(){};W.prototype.serialize=function(a){var b=[];this.h(a,b);return b.join("")};W.prototype.h=function(a,b){switch(typeof a){case "string":this.r(a,b);break;case "number":this.L(a,b);break;case "boolean":b.push(a);break;case "undefined":b.push("null");break;case "object":if(a==i){b.push("null");break}if(n(a)){this.K(a,b);break}this.M(a,b);break;case "function":break;default:throw Error("Unknown type: "+typeof a);}};
var hd={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},id=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;W.prototype.r=function(a,b){b.push('"',a.replace(id,function(c){if(c in hd)return hd[c];var d=c.charCodeAt(0),e="\\u";if(d<16)e+="000";else if(d<256)e+="00";else if(d<4096)e+="0";return hd[c]=e+d.toString(16)}),'"')};W.prototype.L=function(a,b){b.push(isFinite(a)&&!isNaN(a)?a:"null")};
W.prototype.K=function(a,b){var c=a.length;b.push("[");for(var d="",e=0;e<c;e++){b.push(d);this.h(a[e],b);d=","}b.push("]")};W.prototype.M=function(a,b){b.push("{");var c="";for(var d in a)if(a.hasOwnProperty(d)){var e=a[d];if(typeof e!="function"){b.push(c);this.r(d,b);b.push(":");this.h(e,b);c=","}}b.push("}")};var jd=["google_ad_block","google_ad_channel","google_ad_client","google_ad_format","google_ad_height","google_ad_host","google_ad_host_channel","google_ad_host_tier_id","google_ad_output","google_ad_override","google_ad_region","google_ad_section","google_ad_slot","google_ad_type","google_ad_width","google_adtest","google_allow_expandable_ads","google_alternate_ad_url","google_alternate_color","google_analytics_domain_name","google_analytics_uacct","google_bid","google_city","google_color_bg","google_color_border",
"google_color_line","google_color_link","google_color_text","google_color_url","google_container_id","google_contents","google_country","google_cpm","google_ctr_threshold","google_cust_age","google_cust_ch","google_cust_gender","google_cust_id","google_cust_interests","google_cust_job","google_cust_l","google_cust_lh","google_cust_u_url","google_disable_video_autoplay","google_ed","google_eids","google_enable_osd","google_encoding","google_font_face","google_font_size","google_frame_id","google_gl",
"google_hints","google_image_size","google_kw","google_kw_type","google_language","google_max_num_ads","google_max_radlink_len","google_num_radlinks","google_num_radlinks_per_unit","google_num_slots_to_rotate","google_only_ads_with_video","google_only_pyv_ads","google_override_format","google_page_url","google_referrer_url","google_region","google_reuse_colors","google_rl_dest_url","google_rl_filtering","google_rl_mode","google_rt","google_safe","google_skip","google_tag_info","google_targeting",
"google_ui_features","google_ui_version","google_video_doc_id","google_video_product_type","google_with_pyv_ads"],kd=function(a){for(var b=[],c=0,d=jd.length;c<d;c++){var e=jd[c];if(a[e]!=i){var f;try{f=(new W).serialize(a[e])}catch(g){}f&&b.push(e,"=",f,";")}}return b.join("")},ld=function(a){for(var b=0,c=jd.length;b<c;b++){var d=jd[b];a[d]=i}};var md=function(a){var b="google_unique_id";if(a[b])++a[b];else a[b]=1;return a[b]},nd=function(){var a="script";return["<",a,' src="http://',v(),,'/pagead/js/r20100616/r20100614/show_ads_impl.js"></',a,">"].join("")},od=function(){if(window.google_disable_async)return j;return hb.domain==B.location.hostname&&(z||tc||sc&&!!window.document.body)&&
!window.google_container_id&&(!window.google_ad_output||window.google_ad_output=="html")},pd=function(a){var b="script",c={allowtransparency:'"true"',frameborder:'"'+(a.google_ad_frameborder||0)+'"',height:'"'+a.google_ad_height+'"',hspace:'"0"',marginwidth:'"0"',marginheight:'"0"',name:'"google_ads_frame"',scrolling:'"no"',vspace:'"0"',width:'"'+a.google_ad_width+'"'};a.google_ad_frameborder=i;var d=uc(a,c);c=kd(a);ld(a);var e=k,f=(new Date).getTime(),g=["<!doctype html><html><body><",b,">",c,"google_unique_id=",
a.google_unique_id,';google_async_iframe_id="',d,'";google_start_time=',e,";google_bpp=",f>e?f-e:1,";</",b,">",nd(),"</body></html>"].join("");hc(function(){ic();vc(a,d,g)})},qd=function(){var a=fd;a=[a.RELEASE_CANDIDATE_LOADER,a.BLOCKING_LOADER,a.NO_LOADER,a.NO_LOADER_NO_EXPAND];V().b(a,Ib,3)},rd=function(){if(G){var a=O("google_persistent_state"),b=T(a,3);a=3;if("geil"in b){b=b.geil(a);V().b([b],1,a)}}},sd=function(){var a=V();return"geil"in a?a.geil(3):""},td=function(){var a=sd(),b=fd;return a==
b.RELEASE_CANDIDATE_LOADER},ud=function(){var a=sd(),b=fd;return a==b.BLOCKING_LOADER},vd=function(){var a=sd(),b=fd;return a==b.NO_LOADER_NO_EXPAND},wd=function(){if(Qb){G&&rd();var a=gd,b=0;b=G?a.ASWIFT_LOADER:a.BLOCKING_LOADER;V().b([b],1,4)}};var xd={google:1,googlegroups:1,gmail:1,googlemail:1,googleimages:1,googleprint:1};function yd(a){a=a.google_page_location||a.google_page_url;if(!a)return j;a=a.toString();if(a.indexOf("http://")==0)a=a.substring(7,a.length);else if(a.indexOf("https://")==0)a=a.substring(8,a.length);var b=a.indexOf("/");if(b==-1)b=a.length;a=a.substring(0,b);a=a.split(".");b=j;if(a.length>=3)b=a[a.length-3]in xd;if(a.length>=2)b=b||a[a.length-2]in xd;return b}
function zd(a,b,c){var d=O();if(yd(a))return!U(d,2,h);if(!T(d,2)){a=Math.random();if(a<=c){c="http://"+ha()+"/pagead/test_domain.js";a="script";b.write("<"+a+' src="'+c+'"></'+a+">");return U(d,2,h)}}return j}var Ad=function(a){var b=V();if(b.c(1)=="44901228")return j;if(b.c(1)=="44901229"||Math.random()<Hb)return 1==Math.floor(a/2)%2;return j};
function Bd(a,b){var c=O();if(!yd(a)&&ad(c))return Ad(b)?"http://"+u("","googleads2.g.doubleclick.net"):"http://"+ha();return"http://"+ia()};var X=function(a){this.e=a;this.n=[];this.m=0;this.f=[];this.F=0;this.i=[];this.C=j;this.s=this.t="";this.B=j};X.prototype.H=function(a,b){var c=this.e[b],d=this.n;this.e[b]=function(e){if(e&&e.length>0){var f=e.length>1?e[1].url:i;d.push([a,ra(e[0].url),f])}c(e)}};X.prototype.G=function(){this.m++};X.prototype.I=function(a){this.f.push(a)};var Cd="http://"+v()+"/pagead/osd.js";X.prototype.D=function(){if(!this.C){rb(H);pb(Cd);this.C=h}};
X.prototype.u=function(a){if(this.m>0)for(var b=this.e.document.getElementsByTagName("iframe"),c=this.B?"google_ads_iframe_":"google_ads_frame",d=0;d<b.length;d++){var e=b.item(d);e.src&&e.name&&e.name.indexOf(c)==0&&a(e,e.src)}};
X.prototype.v=function(a){var b=this.n;if(b.length>0)for(var c=this.e.document.getElementsByTagName("a"),d=0;d<c.length;d++)for(var e=0;e<b.length;e++)if(c.item(d).href==b[e][1]){var f=c.item(d).parentNode;if(b[e][2])for(var g=f,o=0;o<4;o++){if(g.innerHTML.indexOf(b[e][2])>0){f=g;break}g=g.parentNode}a(f,b[e][0]);b.splice(e,1);break}};X.prototype.w=function(a){for(var b=0;b<this.f.length;b++){var c=this.f[b],d=Dd(c);if(d)(d=this.e.document.getElementById("google_ads_div_"+d))&&a(d,c)}};
X.prototype.j=function(a){this.v(a);this.w(a);this.u(a)};X.prototype.setupOsd=function(a,b,c){this.F=a;this.t=b;this.s=c};X.prototype.getOsdMode=function(){return this.F};X.prototype.getEid=function(){return this.t};X.prototype.getCorrelator=function(){return this.s};X.prototype.l=function(){return this.n.length+this.m+this.f.length};X.prototype.setValidOutputTypes=function(a){this.i=a};
X.prototype.registerAdBlockByType=function(a,b,c){if(this.i.length>0){for(var d=0;d<this.i.length;d++)if(this.i[d]==a){this.B=c;if(a=="js")this.H(b,"google_ad_request_done");else if(a=="html")this.G();else a=="json_html"&&this.I(b)}this.D()}};var Dd=function(a){if((a=a.match(/[&\?](?:slotname)=([^&]+)/))&&a.length==2)return a[1];return""},Ed=function(){var a=H;a.__google_ad_urls||(a.__google_ad_urls=new X(a));return a.__google_ad_urls};r("Goog_AdSense_getAdAdapterInstance",Ed);
r("Goog_AdSense_OsdAdapter",X);r("Goog_AdSense_OsdAdapter.prototype.numBlocks",X.prototype.l);r("Goog_AdSense_OsdAdapter.prototype.findBlocks",X.prototype.j);r("Goog_AdSense_OsdAdapter.prototype.getOsdMode",X.prototype.getOsdMode);r("Goog_AdSense_OsdAdapter.prototype.getEid",X.prototype.getEid);r("Goog_AdSense_OsdAdapter.prototype.getCorrelator",X.prototype.getCorrelator);r("Goog_AdSense_OsdAdapter.prototype.setValidOutputTypes",X.prototype.setValidOutputTypes);
r("Goog_AdSense_OsdAdapter.prototype.setupOsd",X.prototype.setupOsd);r("Goog_AdSense_OsdAdapter.prototype.registerAdBlockByType",X.prototype.registerAdBlockByType);var Fd=function(a,b){var c=a.nodeType==9?a:a.ownerDocument||a.document;if(c.defaultView&&c.defaultView.getComputedStyle)if(c=c.defaultView.getComputedStyle(a,""))return c[b];return i},Gd=function(a,b){return Fd(a,b)||(a.currentStyle?a.currentStyle[b]:i)||a.style[b]},Hd=function(a,b,c,d){if(typeof d=="number")d=(b?Math.round(d):d)+"px";c.style[a]=d};ea(Hd,"height",h);ea(Hd,"width",h);
var Id=function(a,b,c,d){if(/^\d+px?$/.test(b))return parseInt(b,10);else{var e=a.style[c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=e;a.runtimeStyle[c]=f;return b}},Jd=function(a){var b=a.nodeType==9?a:a.ownerDocument||a.document,c="";if(b.body.createTextRange){c=b.body.createTextRange();c.moveToElementText(a);c=c.queryCommandValue("FontName")}if(!c){c=Gd(a,"fontFamily");if(Ma&&Va)c=c.replace(/ \[[^\]]*\]/,"")}a=c.split(",");if(a.length>1)c=a[0];
return sa(c,"\"'")},Kd=/[^\d]+$/,Ld=function(a){return(a=a.match(Kd))&&a[0]||i},Md={cm:1,"in":1,mm:1,pc:1,pt:1},Nd={em:1,ex:1},Od=function(a){var b=Gd(a,"fontSize"),c=Ld(b);if(b&&"px"==c)return parseInt(b,10);if(z)if(c in Md)return Id(a,b,"left","pixelLeft");else if(a.parentNode&&a.parentNode.nodeType==1&&c in Nd){a=a.parentNode;c=Gd(a,"fontSize");return Id(a,b==c?"1em":b,"left","pixelLeft")}c=eb("span",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});
gb(a,c);b=c.offsetHeight;c&&c.parentNode&&c.parentNode.removeChild(c);return b};var Y={};function Pd(a){if(a==1)return h;return!Y[a]}function Qd(a,b){if(!(!a||a==""))if(b==1)if(Y[b])Y[b]+=","+a;else Y[b]=a;else Y[b]=a}function Rd(){var a=[];C(Y,function(b){a.push(b)});return a.join(",")}function Sd(a,b){if(n(a))for(var c=0;c<a.length;c++)p(a[c])&&Qd(a[c],b)}var Td=j;
function Ud(a,b){var c="script";Td=Vd(a,b);if(!Td)a.google_allow_expandable_ads=j;var d=!Wd();Td&&d&&b.write("<"+c+' src="http://'+v()+'/pagead/expansion_embed.js"></'+c+">");var e=zd(a,b,Jb);(d=d||e)&&tb("msie")&&!window.opera?b.write("<"+c+' src="http://'+v()+'/pagead/render_ads.js"></'+c+">"):b.write("<"+c+'>google_protectAndRun("ads_core.google_render_ad", google_handleError, google_render_ad);</'+c+">")}var Z=function(a){a=a.google_unique_id;if(typeof a=="number")return a;return 0};
function $(a){return a!=i?'"'+a+'"':'""'}var Xd=function(a,b){var c=b.slice(-1),d=c=="?"||c=="#"?"":"&",e=[b];c=function(f,g){if(f||f===0||f===j){if(typeof f=="boolean")f=f?1:0;ob(e,d,g,"=",D(f));d="&"}};C(a,c);return e.join("")};function Yd(){var a=z&&A("6"),b=Na&&A("1.8.1"),c=Oa&&A("525");if(Ua&&(a||b||c))return h;else if(Ta&&(c||b))return h;else if(Va&&b)return h;return j}
function Wd(){return(typeof ExpandableAdSlotFactory=="function"||typeof ExpandableAdSlotFactory=="object")&&typeof ExpandableAdSlotFactory.createIframe=="function"}function Vd(a,b){if(a.google_allow_expandable_ads===j||!b.body||a.google_ad_output!="html"||yc(a,b)||!Zd(a)||isNaN(a.google_ad_height)||isNaN(a.google_ad_width)||!Yd()||vd()&&od()||b.domain!=a.location.hostname)return j;return h}function Zd(a){var b=a.google_ad_format;if(E(b))return j;if(wb(a)&&b!="468x15_0ads_al")return j;return h}
function $d(){var a;if(B.google_ad_output=="html"&&!(wb(B)||E(B.google_ad_format))&&Pd(0)){a=["6083035","6083034"];a=xb(a,Ob);Qd(a,0)}return a=="6083035"}function ae(a,b){if(!(G?Z(a)==1:!Z(a))||E(a.google_ad_format))return"";var c="",d=wb(a);if(b=="html"||d)c=xb(["36815001","36815002"],Kb);if(c==""&&(b=="js"||d))c=xb(["36815003","36815004"],Lb);if(c==""&&(b=="html"||b=="js"))c=xb(["36813005","36813006"],Mb);return c}
function be(){if(G)return"";var a=Ed(),b=window.google_enable_osd,c;if(b===h){c="36813006";ce(c,a)}else if(b!==j&&Pd(0)){c=a.getEid();if(c=="")(c=ae(window,String(window.google_ad_output||"")))&&ce(c,a);else if(c!="36815001"&&c!="36815002"&&c!="36815003"&&c!="36815004"&&c!="36813005"&&c!="36813006")c=""}if(c){Qd(c,0);return c}return""}
function ce(a,b){var c=b.getOsdMode(),d=[];switch(a){case "36815004":c=1;d=["js"];break;case "36815002":c=1;d=["html"];break;case "36813006":c=0;d=["html","js"];break}d.length>0&&b.setValidOutputTypes(d);d=O();b.setupOsd(c,a,T(d,7).toString())}
function de(a,b,c,d){G||md(a);var e=Z(a);c=Xd({ifi:e},c);c=c.substring(0,1991);c=c.replace(/%\w?$/,"");var f="script";if((a.google_ad_output=="js"||a.google_ad_output=="json_html")&&(a.google_ad_request_done||a.google_radlink_request_done))b.write("<"+f+' language="JavaScript1.1" src='+$(aa(c))+"></"+f+">");else if(a.google_ad_output=="html")if(Td&&Wd()){b=a.google_container_id||d||i;a["google_expandable_ad_slot"+e]=ExpandableAdSlotFactory.createIframe("google_ads_frame"+e,aa(c),a.google_ad_width,
a.google_ad_height,b)}else{e='<iframe name="google_ads_frame" width='+$(String(a.google_ad_width))+" height="+$(String(a.google_ad_height))+" frameborder="+$(String(a.google_ad_frameborder==i?"":a.google_ad_frameborder))+" src="+$(aa(c))+' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no"></iframe>';a.google_container_id?ee(a.google_container_id,b,e):b.write(e)}return c}function fe(a){Nc(a)}
function ge(a){var b=ed().c(2)=="44901217";if(!he(b))return j;b=$d();var c=Bd(window,Z(window));a=ie(a);b=c+je(a.google_ad_format,b);window.google_ad_url=Xd(a,b);return h}
var ne=function(a){a.dt=k;if(G&&window.google_bpp)a.bpp=window.google_bpp;a.shv="r20100616";var b=O(),c=T(b,8),d=window.google_ad_section,e=window.google_ad_format,f=window.google_ad_slot;if(c[d])E(e)||(a.prev_fmts=c[d]);var g=T(b,9);if(g[d])a.prev_slotnames=g[d].toLowerCase();if(e){if(!E(e))if(c[d])c[d]+=","+e;else c[d]=e}else if(f)if(g[d])g[d]+=","+f;else g[d]=f;a.correlator=T(b,7);if(T(b,2)&&!ad(b))a.dblk=1;if(window.google_ad_channel){c=T(b,10);d="";e=window.google_ad_channel.split(ke);
for(f=0;f<e.length;f++){g=e[f];if(c[g])d+=g+"+";else c[g]=h}a.pv_ch=d}if(window.google_ad_host_channel){b=le(window.google_ad_host_channel,T(b,11));a.pv_h_ch=b}if(Pb)a.jscb=1;if(Rb)a.jscd=1;a.frm=window.google_iframing;a.adk=me();b=Rc();a.ga_vid=b.vid;a.ga_sid=b.sid;a.ga_hid=b.hid;a.ga_fc=b.from_cookie;a.ga_wpids=window.google_analytics_uacct},oe=function(a){var b=h;if(b=zb(b)){a.biw=b.width;a.bih=b.height}},me=function(){var a=[];ob(a,B.google_ad_slot,B.google_ad_format,B.google_ad_type,B.google_ad_width,
B.google_ad_height);if(jb){var b=Cb(jb);b&&a.push(b)}b=0;if(a)b=Ab(a.join(":"));return b.toString()},pe=function(a){var b=Bb(H);if(b!=0)a.ifk=b.toString()};function le(a,b){for(var c=a.split("|"),d=-1,e=[],f=0;f<c.length;f++){var g=c[f].split(ke);b[f]||(b[f]={});for(var o="",Q=0;Q<g.length;Q++){var I=g[Q];if(I!="")if(b[f][I])o+="+"+I;else b[f][I]=h}o=o.slice(1);e[f]=o;if(o!="")d=f}c="";if(d>-1){for(f=0;f<d;f++)c+=e[f]+"|";c+=e[d]}return c}
function qe(){var a=["44901228","44901229"];V().b(a,Gb,1);a=["44901218","44901217"];V().b(a,Nb,2)}var re=function(){ac()!=H&&Xb(4)};
function se(){re();(G?Z(window)==1:!Z(window))&&qe();var a=be(),b=i,c="",d=Math.random()<0.01;if(d)if(b=window.google_async_iframe_id)b=H.document.getElementById(b);else{c="google_temp_span";b=te(c)}d=ge(b);b&&b.id==c&&(b&&b.parentNode?b.parentNode.removeChild(b):i);if(d){c=de(window,document,window.google_ad_url);if(a)Ed().registerAdBlockByType(String(window.google_ad_output||""),c,j);fe(window)}wc(window)}
var ue=function(a){C(Eb,function(b,c){a[b]=window[c]});C(Db,function(b,c){a[b]=window[c]});C(Fb,function(b,c){a[b]=window[c]})},ve=function(a){Sd(window.google_eids,1);a.eid=Rd();var b=ed().z();if(a.eid.length>0&&b.length>0)a.eid+=",";a.eid+=b};function we(a,b,c,d){a=Vb(a,b,c,d);Ud(window,document);return a}function xe(){Mc()}
function ye(a){var b={};a=a.split("?");a=a[a.length-1].split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");if(d[0])try{b[d[0].toLowerCase()]=d.length>1?window.decodeURIComponent?decodeURIComponent(d[1].replace(/\+/g," ")):unescape(d[1]):""}catch(e){}}return b}function ze(){var a=window,b=ye(document.URL);if(b.google_ad_override){a.google_ad_override=b.google_ad_override;a.google_adtest="on"}}
function ee(a,b,c){if(a)if((a=b.getElementById(a))&&c&&c.length!=""){a.style.visibility="visible";a.innerHTML=c}}
var je=function(a,b){var c;return c=E(a)?"/pagead/sdo?":b?"/pagead/render_iframe_ads.html#":"/pagead/ads?"},Ae=function(a,b){b.dff=Jd(a).toLowerCase();b.dfs=Od(a)},Be=function(a){a.ref=window.google_referrer_url;a.loc=window.google_page_location},he=function(a){var b=O(),c=T(b,8),d=T(b,9),e=window.google_ad_section;if(E(window.google_ad_format)){if(U(b,4,T(b,4)+1)>4&&!a)return j}else if(wb(window)){if(U(b,5,T(b,5)+1)>3&&!a)return j}else{var f=U(b,6,T(b,6)+1);if(window.google_num_slots_to_rotate){Xb(1);
c[e]="";d[e]="";T(b,12)||U(b,12,(new Date).getTime()%window.google_num_slots_to_rotate+1);if(T(b,12)!=f)return j}else if(!a&&f>6&&e=="")return j}return h},ie=function(a){var b={};ue(b);ne(b);yb(b);a&&Ae(a,b);oe(b);pe(b);ve(b);Be(b);b.fu=Wb;return b},te=function(a){var b=window.google_container_id,c=b&&$a(b)||$a(a);if(!c&&!b&&a){document.write("<span id="+a+"></span>");c=$a(a)}return c},ke=/[+, ]/;window.google_render_ad=se;var Ce=function(){ze();wd();var a=window.google_start_time;if(typeof a=="number"){k=a;window.google_start_time=i}Tb("show_ads.google_init_globals",we,xe);Ud(window,document)},De=function(){window.google_start_time=k;document.write(nd())},Ee=function(){if(od()){md(window);pd(window)}else De()};function Fe(){if(Sb&&typeof B.alternateShowAds=="function")B.alternateShowAds.call(i);else if(Qb)Ce();else{Z(window)||qd();if(td())Ee();else ud()?De():Ce()}}Tb("show_ads.main",Vb,Fe);})()
;;google_ad_channel='4107951263';google_ad_client='pub-7651592418643185';google_ad_format='728x90_as';google_ad_height=90;google_ad_width=728;google_color_bg='eeeeee';google_color_border='eeeeee';google_color_link='000066';google_color_text='333333';google_color_url='000066';;;
(function(){var h=true,i=null,j=false,k=(new Date).getTime(),aa=function(a){var b=(new Date).getTime()-k;b="&dtd="+(b<1E4?b:"M");return a+b};var l=this,ba=function(a,b,c){a=a.split(".");c=c||l;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)if(!a.length&&b!==undefined)c[d]=b;else c=c[d]?c[d]:(c[d]={})},m=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";
if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";else if(b=="function"&&typeof a.call=="undefined")return"object";return b},n=function(a){return m(a)=="array"},ca=function(a){var b=m(a);return b=="array"||b=="object"&&typeof a.length=="number"},p=function(a){return typeof a=="string"},da=function(a){a=m(a);return a=="object"||
a=="array"||a=="function"},q=function(a,b){var c=b||l;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)}}else return function(){return a.apply(c,arguments)}},ea=function(a){var b=Array.prototype.slice.call(arguments,1);return function(){var c=Array.prototype.slice.call(arguments);c.unshift.apply(c,b);return a.apply(this,c)}},r=function(a,b,c){ba(a,b,c)},fa=function(a,
b,c){a[b]=c};var s=function(a,b){var c=parseFloat(a);return isNaN(c)||c>1||c<0?b:c},t=function(a,b){if(a=="true")return h;if(a=="false")return j;return b},ga=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,u=function(a,b){if(!a)return b;var c=a.match(ga);return c?c[0]:b};var ha=function(){return u("","googleads.g.doubleclick.net")},ia=function(){return u("","pagead2.googlesyndication.com")},v=function(){return u("","pagead2.googlesyndication.com")};var oa=function(a,b){if(b)return a.replace(ja,"&amp;").replace(ka,"&lt;").replace(la,"&gt;").replace(ma,"&quot;");else{if(!na.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(ja,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(ka,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(la,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(ma,"&quot;");return a}},ja=/&/g,ka=/</g,la=/>/g,ma=/\"/g,na=/[&<>\"]/,ra=function(a){if(a.indexOf("&")!=-1)return"document"in l&&a.indexOf("<")==-1?pa(a):qa(a);return a},pa=function(a){var b=
l.document.createElement("a");b.innerHTML=a;b.normalize&&b.normalize();a=b.firstChild.nodeValue;b.innerHTML="";return a},qa=function(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if(c.charAt(0)=="#"){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return b}})},sa=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=c==1?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==
e)return a.substring(1,a.length-1)}return a},ua=function(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),g=0;c==0&&g<f;g++){var o=d[g]||"",Q=e[g]||"",I=RegExp("(\\d*)(\\D*)","g"),bc=RegExp("(\\d*)(\\D*)","g");do{var R=I.exec(o)||["","",""],S=bc.exec(Q)||["","",""];if(R[0].length==0&&S[0].length==0)break;c=R[1].length==0?0:parseInt(R[1],10);var cc=S[1].length==0?0:parseInt(S[1],10);
c=ta(c,cc)||ta(R[2].length==0,S[2].length==0)||ta(R[2],S[2])}while(c==0)}return c},ta=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var w=Array.prototype,va=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},wa=function(){return w.concat.apply(w,arguments)},xa=function(a){if(n(a))return wa(a);else{for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}};var x=function(a,b){this.width=a;this.height=b};x.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};x.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};x.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};x.prototype.scale=function(a){this.width*=a;this.height*=a;return this};var ya=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},za=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Aa=function(a){for(var b,c,d=1;d<arguments.length;d++){c=arguments[d];for(b in c)a[b]=c[b];for(var e=0;e<za.length;e++){b=za[e];if(Object.prototype.hasOwnProperty.call(c,b))a[b]=c[b]}}};var y,Ba,Ca,Da,Ea,Fa,Ga,Ha,Ia,Ja=function(){return l.navigator?l.navigator.userAgent:i},Ka=function(){return l.navigator},La=function(){Ea=Da=Ca=Ba=y=j;var a;if(a=Ja()){var b=Ka();y=a.indexOf("Opera")==0;Ba=!y&&a.indexOf("MSIE")!=-1;Da=(Ca=!y&&a.indexOf("WebKit")!=-1)&&a.indexOf("Mobile")!=-1;Ea=!y&&!Ca&&b.product=="Gecko"}};La();
var Ma=y,z=Ba,Na=Ea,Oa=Ca,Pa=Da,Qa=function(){var a=Ka();return a&&a.platform||""},Ra=Qa(),Sa=function(){Fa=Ra.indexOf("Mac")!=-1;Ga=Ra.indexOf("Win")!=-1;Ha=Ra.indexOf("Linux")!=-1;Ia=!!Ka()&&(Ka().appVersion||"").indexOf("X11")!=-1};Sa();
var Ta=Fa,Ua=Ga,Va=Ha,Wa=function(){var a="",b;if(Ma&&l.opera){a=l.opera.version;a=typeof a=="function"?a():a}else{if(Na)b=/rv\:([^\);]+)(\)|;)/;else if(z)b=/MSIE\s+([^\);]+)(\)|;)/;else if(Oa)b=/WebKit\/(\S+)/;if(b)a=(a=b.exec(Ja()))?a[1]:""}return a},Xa=Wa(),Ya={},A=function(a){return Ya[a]||(Ya[a]=ua(Xa,a)>=0)};var Za=function(a){return p(a)?document.getElementById(a):a},$a=Za,bb=function(a,b){ya(b,function(c,d){if(d=="style")a.style.cssText=c;else if(d=="class")a.className=c;else if(d=="for")a.htmlFor=c;else if(d in ab)a.setAttribute(ab[d],c);else a[d]=c})},ab={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",type:"type"},cb=function(a){var b=a.document;if(Oa&&!A("500")&&!Pa){if(typeof a.innerHeight==
"undefined")a=window;b=a.innerHeight;var c=a.document.documentElement.scrollHeight;if(a==a.top)if(c<b)b-=15;return new x(a.innerWidth,b)}a=b.compatMode=="CSS1Compat";if(Ma&&!A("9.50"))a=j;a=a?b.documentElement:b.body;return new x(a.clientWidth,a.clientHeight)},eb=function(){return db(document,arguments)},db=function(a,b){var c=b[0],d=b[1];if(z&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',oa(d.name),'"');if(d.type){c.push(' type="',oa(d.type),'"');var e={};Aa(e,d);d=e;delete d.type}c.push(">");
c=c.join("")}var f=a.createElement(c);if(d)if(p(d))f.className=d;else bb(f,d);if(b.length>2){d=function(g){if(g)f.appendChild(p(g)?a.createTextNode(g):g)};for(c=2;c<b.length;c++){e=b[c];ca(e)&&!(da(e)&&e.nodeType>0)?va(fb(e)?xa(e):e,d):d(e)}}return f},gb=function(a,b){a.appendChild(b)},fb=function(a){if(a&&typeof a.length=="number")if(da(a))return typeof a.item=="function"||typeof a.item=="string";else if(m(a)=="function")return typeof a.item=="function";return j};var hb=document,B=window,ib=function(a){var b=i;if((a=a.getElementsByTagName("script"))&&a.length){b=a[a.length-1];b=b.parentNode}return b},jb=ib(hb);v();
var C=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(i,a[c],c,a)},kb=function(a){return!!a&&typeof a=="function"&&!!a.call},lb=function(a){return!!a&&(typeof a=="object"||typeof a=="function")},nb=function(a,b){if(!a||!lb(a))return h;return!mb(a,b.prototype)},mb=function(a,b){if(!a)return j;var c=h;C(b,function(d,e){if(!c||!(e in a)||typeof d!=typeof a[e])c=j});return c},ob=function(a){if(arguments.length<2)return a.length;for(var b=1,c=arguments.length;b<c;++b)a.push(arguments[b]);return a.length};
function D(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}function pb(a,b,c){var d=document.createElement("script");d.type="text/javascript";if(b)d.onload=b;if(c)d.id=c;d.src=a;var e=document.getElementsByTagName("head")[0];if(!e)return j;window.setTimeout(function(){e.appendChild(d)},0);return h}function qb(a,b){if(a.attachEvent){a.attachEvent("onload",b);return h}if(a.addEventListener){a.addEventListener("load",b,j);return h}return j}
var rb=function(a){if(!("google_onload_fired"in a)){a.google_onload_fired=j;qb(a,function(){a.google_onload_fired=h})}};function sb(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=new Image;c.src=b;a.google_image_requests.push(c)}function tb(a){if(a in ub)return ub[a];return ub[a]=navigator.userAgent.toLowerCase().indexOf(a)!=-1}var ub={};
function vb(){if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){a=3;for(var b=1;b;)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+(a+1));a++}catch(c){b=i}return a.toString()}else if(tb("msie")&&!window.opera){b=i;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(d){a=
0;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");a=6;b.AllowScriptAccess="always"}catch(e){if(a==6)return a.toString()}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(f){}}if(b){a=b.GetVariable("$version").split(" ")[1];return a.replace(/,/g,".")}}return"0"}function wb(a){var b=a.google_ad_format;if(b)return b.indexOf("_0ads")>0;return a.google_ad_output!="html"&&a.google_num_radlinks>0}function E(a){return!!a&&a.indexOf("_sdo")!=-1}
function xb(a,b){if(!(Math.random()<1.0E-4)){var c=Math.random();if(c<b){c=Math.floor(c/b*a.length);return a[c]}}return""}
var yb=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=window.history.length;a.u_java=navigator.javaEnabled();if(window.screen){a.u_h=window.screen.height;a.u_w=window.screen.width;a.u_ah=window.screen.availHeight;a.u_aw=window.screen.availWidth;a.u_cd=window.screen.colorDepth}if(navigator.plugins)a.u_nplug=navigator.plugins.length;if(navigator.mimeTypes)a.u_nmime=navigator.mimeTypes.length},zb=function(a,b){var c=b||B;if(a&&c.top!=c)c=c.top;try{return c.document&&!c.document.body?new x(-1,
-1):cb(c||window)}catch(d){return new x(-12245933,-12245933)}},Ab=function(a,b){var c=a.length;if(c==0)return 0;for(var d=b||305419896,e=0;e<c;e++){var f=a.charCodeAt(e);d^=(d<<5)+(d>>2)+f&4294967295}return d>0?d:4294967296+d},Bb=function(a){if(a==a.top)return 0;var b=[];b.push(a.document.URL);a.name&&b.push(a.name);var c=h;a=zb(!c,a);b.push(a.width.toString());b.push(a.height.toString());return Ab(b.join(""))},Cb=function(a){if(!a)return"";var b=[],c=0;for(a=a;a&&c<25;a=a.parentNode,++c)b.push(a.id||
"");return b.join()};var Db={google_ad_channel:"channel",google_ad_host:"host",google_ad_host_channel:"h_ch",google_ad_host_tier_id:"ht_id",google_ad_section:"region",google_ad_type:"ad_type",google_adtest:"adtest",google_allow_expandable_ads:"ea",google_alternate_ad_url:"alternate_ad_url",google_alternate_color:"alt_color",google_bid:"bid",google_city:"gcs",google_color_bg:"color_bg",google_color_border:"color_border",google_color_line:"color_line",google_color_link:"color_link",google_color_text:"color_text",google_color_url:"color_url",
google_contents:"contents",google_country:"gl",google_cpm:"cpm",google_cust_age:"cust_age",google_cust_ch:"cust_ch",google_cust_gender:"cust_gender",google_cust_id:"cust_id",google_cust_interests:"cust_interests",google_cust_job:"cust_job",google_cust_l:"cust_l",google_cust_lh:"cust_lh",google_cust_u_url:"cust_u_url",google_disable_video_autoplay:"disable_video_autoplay",google_ed:"ed",google_encoding:"oe",google_feedback:"feedback_link",google_flash_version:"flash",google_font_face:"f",google_font_size:"fs",
google_hints:"hints",google_kw:"kw",google_kw_type:"kw_type",google_language:"hl",google_page_url:"url",google_region:"gr",google_reuse_colors:"reuse_colors",google_safe:"adsafe",google_tag_info:"gut",google_targeting:"targeting",google_targeting_video_doc_id:"tvdi",google_ui_features:"ui",google_ui_version:"uiv",google_video_doc_id:"video_doc_id",google_video_product_type:"video_product_type"},Eb={google_ad_block:"ad_block",google_ad_client:"client",google_ad_format:"format",google_ad_output:"output",
google_ad_callback:"callback",google_ad_height:"h",google_ad_override:"google_ad_override",google_ad_slot:"slotname",google_ad_width:"w",google_ctr_threshold:"ctr_t",google_image_size:"image_size",google_last_modified_time:"lmt",google_max_num_ads:"num_ads",google_max_radlink_len:"max_radlink_len",google_num_radlinks:"num_radlinks",google_num_radlinks_per_unit:"num_radlinks_per_unit",google_only_ads_with_video:"only_ads_with_video",google_rl_dest_url:"rl_dest_url",google_rl_filtering:"rl_filtering",
google_rl_mode:"rl_mode",google_rt:"rt",google_skip:"skip"},Fb={google_only_pyv_ads:"pyv",google_with_pyv_ads:"withpyv"};var Gb=s("0",0),Hb=s("0",0),Ib=s("0.005",0),Jb=s("1",0),Kb=s("0.01",0),Lb=s("0.01",0),Mb=s("0.008",0),Nb=s("0.01",0),Ob=s("0",0);var Pb=t("false",j),Qb=t("false",h),Rb=t("false",j),Sb=t("false",j);var Tb=function(a,b,c){b=q(b,l,a);a=window.onerror;window.onerror=b;try{c()}catch(d){c=d.toString();var e="";if(d.fileName)e=d.fileName;var f=-1;if(d.lineNumber)f=d.lineNumber;b=b(c,e,f);if(!b)throw d;}window.onerror=a};r("google_protectAndRun",Tb);
var Vb=function(a,b,c,d){if(Math.random()<0.01){var e=hb;a=["http://",ia(),"/pagead/gen_204","?id=jserror","&jscb=",Pb?1:0,"&jscd=",Rb?1:0,"&context=",D(a),"&msg=",D(b),"&file=",D(c),"&line=",D(d.toString()),"&url=",D(e.URL.substring(0,512)),"&ref=",D(e.referrer.substring(0,512))];a.push(Ub());sb(B,a.join(""))}return!Sb};r("google_handleError",Vb);
var Xb=function(a){Wb|=a},Wb=0,Ub=function(){var a=["&client=",D(B.google_ad_client),"&format=",D(B.google_ad_format),"&slotname=",D(B.google_ad_slot),"&output=",D(B.google_ad_output),"&ad_type=",D(B.google_ad_type)];return a.join("")};var Yb=function(a){var b="google_test";try{var c=a[b];a[b]=!c;if(a[b]===!c){a[b]=c;return h}}catch(d){}return j},Zb=function(a){for(;a!=a.parent&&Yb(a.parent);)a=a.parent;return a},$b=i,ac=function(){$b||($b=Zb(window));return $b};var dc,F=function(){this.p=[];this.P=window;this.d=0},ec=function(a,b){this.fn=a;this.win=b};F.prototype.enqueue=function(a,b){this.p.push(new ec(a,b||this.P));this.g()};F.prototype.o=function(){this.d=1};F.prototype.q=function(){if(this.d==1)this.d=0;this.g()};fa(F.prototype,"nq",F.prototype.enqueue);fa(F.prototype,"al",F.prototype.o);fa(F.prototype,"rl",F.prototype.q);F.prototype.g=function(){this.P.setTimeout(q(this.O,this),0)};
F.prototype.O=function(){if(this.d==0&&this.p.length){var a=this.p.shift();this.d=2;a.win.setTimeout(q(this.J,this,a),0);this.g()}};F.prototype.J=function(a){this.d=0;a.fn()};var fc=function(a){return lb(a)&&kb(a.nq)&&kb(a.al)&&kb(a.rl)},gc=function(){if(dc)return dc;var a=ac(),b=a.google_jobrunner;if(fc(b))return dc=b;return a.google_jobrunner=dc=new F},hc=function(a,b){gc().nq(a,b)},ic=function(){gc().al()},jc=function(){var a=ac().google_jobrunner;fc(a)&&a.rl()};var kc,lc,mc,nc,oc,pc,qc,rc=function(){qc=pc=oc=nc=mc=lc=kc=j;var a=Ja();if(a)if(a.indexOf("Firefox")!=-1)kc=h;else if(a.indexOf("Camino")!=-1)lc=h;else if(a.indexOf("iPhone")!=-1||a.indexOf("iPod")!=-1)mc=h;else if(a.indexOf("iPad")!=-1)nc=h;else if(a.indexOf("Android")!=-1)oc=h;else if(a.indexOf("Chrome")!=-1)pc=h;else if(a.indexOf("Safari")!=-1)qc=h};rc();var sc=kc,tc=pc;var G=!!window.google_async_iframe_id,H=G&&window.parent||window,uc=function(a,b){for(var c=a.document,d=b.id,e=0;!d||a.document.getElementById(d);)d="aswift_"+e++;b.id=d;e=["<iframe"];for(var f in b)ob(e,f,"=",b[f]);e.push("></iframe>");f=e.join(" ");c.write(f);return d},vc=function(a,b,c){a=a.document.getElementById(b).contentWindow.document;a.open();a.write(c)},wc=function(a){if(G&&a!=a.parent){jc();a.setTimeout(function(){a.document.close()},0)}};function xc(a,b){try{return a.top.document==b}catch(c){}return j}function yc(a,b,c,d){c=c||a.google_ad_width;d=d||a.google_ad_height;if(xc(a,b))return j;var e=b.documentElement;if(c&&d){var f=1,g=1;if(a.innerHeight){f=a.innerWidth;g=a.innerHeight}else if(e&&e.clientHeight){f=e.clientWidth;g=e.clientHeight}else if(b.body){f=b.body.clientWidth;g=b.body.clientHeight}if(g>2*d||f>2*c)return j}return h}function zc(a,b){C(b,function(c,d){a["google_"+d]=c})}
function Ac(a,b){if(!b)return a.URL;return a.referrer}function Bc(a,b){if(!b&&a.google_referrer_url==i)return"0";else if(b&&a.google_referrer_url==i)return"1";else if(!b&&a.google_referrer_url!=i)return"2";else if(b&&a.google_referrer_url!=i)return"3";return"4"}function Cc(a,b,c){a.page_url=Ac(b,c);a.page_location=i}function Dc(a,b,c,d){a.page_url=b.google_page_url;a.page_location=Ac(c,d)||"EMPTY"}
function Ec(a,b){var c={},d=yc(H,b,a.google_ad_width,a.google_ad_height);c.iframing=Bc(a,d);a.google_page_url?Dc(c,a,b,d):Cc(c,b,d);c.last_modified_time=b.URL==c.page_url?Date.parse(b.lastModified)/1E3:i;c.referrer_url=d?a.google_referrer_url:a.google_page_url&&a.google_referrer_url?a.google_referrer_url:b.referrer;return c}function Fc(a){var b={},c=a.URL.substring(a.URL.lastIndexOf("http"));b.iframing=i;b.page_url=c;b.page_location=a.URL;b.last_modified_time=i;b.referrer_url=c;return b}
function Gc(a){var b=Hc(a,H.document);zc(a,b)}function Hc(a,b){var c;return c=a.google_page_url==i&&Ic[b.domain]?Fc(b):Ec(a,b)}var Ic={};Ic["ad.yieldmanager.com"]=h;var Jc="",Mc=function(){if(window.google_ad_frameborder==i)window.google_ad_frameborder=0;if(window.google_ad_output==i)window.google_ad_output="html";if(E(window.google_ad_format)){var a=window.google_ad_format.match(/^(\d+)x(\d+)_.*/);if(a){window.google_ad_width=parseInt(a[1],10);window.google_ad_height=parseInt(a[2],10);window.google_ad_output="html"}}window.google_ad_format=Kc(window.google_ad_format,String(window.google_ad_output),Number(window.google_ad_width),Number(window.google_ad_height),
window.google_ad_slot,!!window.google_override_format);Jc=window.google_ad_client||"";window.google_ad_client=Lc(window.google_ad_format,window.google_ad_client);Gc(window);if(window.google_flash_version==i)window.google_flash_version=vb();window.google_ad_section=window.google_ad_section||window.google_ad_region||"";window.google_country=window.google_country||window.google_gl||"";a=(new Date).getTime();if(n(window.google_color_bg))window.google_color_bg=J(window.google_color_bg,a);if(n(window.google_color_text))window.google_color_text=
J(window.google_color_text,a);if(n(window.google_color_link))window.google_color_link=J(window.google_color_link,a);if(n(window.google_color_url))window.google_color_url=J(window.google_color_url,a);if(n(window.google_color_border))window.google_color_border=J(window.google_color_border,a);if(n(window.google_color_line))window.google_color_line=J(window.google_color_line,a)},Nc=function(a){C(Db,function(b,c){a[c]=i});C(Eb,function(b,c){a[c]=i});C(Fb,function(b,c){a[c]=i});a.google_container_id=i;
a.google_disable_async=i;a.google_eids=i;a.google_page_location=i;a.google_referrer_url=i;a.google_ad_region=i;a.google_gl=i},J=function(a,b){Xb(2);return a[b%a.length]},Lc=function(a,b){if(!b)return"";b=b.toLowerCase();return b=E(a)?Oc(b):Pc(b)},Pc=function(a){if(a&&a.substring(0,3)!="ca-")a="ca-"+a;return a},Oc=function(a){if(a&&a.substring(0,7)!="ca-aff-")a="ca-aff-"+a;return a},Kc=function(a,b,c,d,e,f){if(!a&&b=="html")a=c+"x"+d;return a=Qc(a,e,f)?a.toLowerCase():""},Qc=function(a,b,c){if(!a)return j;
if(!b)return h;return c};var K=document,L=navigator,M=window;
function Rc(){var a=K.cookie,b=Math.round((new Date).getTime()/1E3),c=M.google_analytics_domain_name;c=typeof c=="undefined"?Sc("auto"):Sc(c);var d=a.indexOf("__utma="+c+".")>-1,e=a.indexOf("__utmb="+c)>-1,f=a.indexOf("__utmc="+c)>-1,g={},o=!!M&&!!M.gaGlobal;if(d){a=a.split("__utma="+c+".")[1].split(";")[0].split(".");g.sid=e&&f?a[3]+"":o&&M.gaGlobal.sid?M.gaGlobal.sid:b+"";g.vid=a[0]+"."+a[1];g.from_cookie=h}else{g.sid=o&&M.gaGlobal.sid?M.gaGlobal.sid:b+"";g.vid=o&&M.gaGlobal.vid?M.gaGlobal.vid:
(Math.round(Math.random()*2147483647)^Tc()&2147483647)+"."+b;g.from_cookie=j}g.dh=c;g.hid=o&&M.gaGlobal.hid?M.gaGlobal.hid:Math.round(Math.random()*2147483647);return M.gaGlobal=g}
function Tc(){var a=K.cookie?K.cookie:"",b=M.history.length,c,d=[L.appName,L.version,L.language?L.language:L.browserLanguage,L.platform,L.userAgent,L.javaEnabled()?1:0].join("");if(M.screen)d+=M.screen.width+"x"+M.screen.height+M.screen.colorDepth;else if(M.java){c=java.awt.Toolkit.getDefaultToolkit().getScreenSize();d+=c.screen.width+"x"+c.screen.height}d+=a;d+=K.referrer?K.referrer:"";for(a=d.length;b>0;)d+=b--^a++;return Uc(d)}
function Uc(a){var b=1,c=0,d;if(!(a==undefined||a=="")){b=0;for(d=a.length-1;d>=0;d--){c=a.charCodeAt(d);b=(b<<6&268435455)+c+(c<<14);c=b&266338304;b=c!=0?b^c>>21:b}}return b}function Sc(a){if(!a||a==""||a=="none")return 1;if("auto"==a){a=K.domain;if("www."==a.substring(0,4))a=a.substring(4,a.length)}return Uc(a.toLowerCase())};var N=function(){this.defaultBucket=[];this.layers={};for(var a=0,b=arguments.length;a<b;++a)this.layers[arguments[a]]=""},Vc=function(a){for(var b=new N,c=0,d=a.defaultBucket.length;c<d;++c)b.defaultBucket.push(a.defaultBucket[c]);C(a.layers,q(N.prototype.k,b));return b};N.prototype.k=function(a,b){this.layers[b]=a};N.prototype.N=function(a,b){if(a=="")return"";if(!b){this.defaultBucket.push(a);return a}if(this.layers.hasOwnProperty(b))return this.layers[b]=a;return""};
N.prototype.b=function(a,b,c){if(this.A(c)&&!(Math.random()<1.0E-4)&&Math.random()<b){b=Math.floor(Math.random()*a.length);return this.N(a[b],c)}return""};N.prototype.A=function(a){if(!a)return h;return this.layers.hasOwnProperty(a)&&this.layers[a]==""};N.prototype.c=function(a){if(this.layers.hasOwnProperty(a))return this.layers[a];return""};N.prototype.geil=N.prototype.c;
N.prototype.z=function(){var a=[],b=function(c){c!=""&&a.push(c)};C(this.layers,b);if(this.defaultBucket.length>0&&a.length>0)return this.defaultBucket.join(",")+","+a.join(",");return this.defaultBucket.join(",")+a.join(",")};var Xc=function(a){this.a=this.S=a;Wc(this)},Yc={};Yc.google_persistent_state=h;Yc.google_persistent_state_async=h;
var Zc={},O=function(a){a=a&&Yc[a]?a:G?"google_persistent_state_async":"google_persistent_state";if(Zc[a])return Zc[a];if(a=="google_persistent_state_async")var b=H,c={};else c=b=H;var d=b[a];if(typeof d!="object"||typeof d.S!="object")return b[a]=Zc[a]=new Xc(c);return Zc[a]=d},Wc=function(a){P(a,1,j);P(a,2,j);P(a,3,i);P(a,4,0);P(a,5,0);P(a,6,0);P(a,7,(new Date).getTime());P(a,8,{});P(a,9,{});P(a,10,{});P(a,11,[]);P(a,12,0)},$c=function(a){switch(a){case 1:return"google_new_domain_enabled";case 2:return"google_new_domain_checked";
case 3:return"google_exp_persistent";case 4:return"google_num_sdo_slots";case 5:return"google_num_0ad_slots";case 6:return"google_num_ad_slots";case 7:return"google_correlator";case 8:return"google_prev_ad_formats_by_region";case 9:return"google_prev_ad_slotnames_by_region";case 10:return"google_num_slots_by_channel";case 11:return"google_viewed_host_channels";case 12:return"google_num_slot_to_show"}},T=function(a,b){var c=$c(b);return c=a.S[c]},U=function(a,b,c){return a.S[$c(b)]=c},P=function(a,
b,c){a=a.S;b=$c(b);if(a[b]===undefined)return a[b]=c;return a[b]},ad=function(a){if(T(a,1))return h;return U(a,1,!!window.google_new_domain_enabled)},bd=function(a,b){return U(a,3,b)};var cd,dd,V=function(){if(cd)return cd;var a=O(),b=T(a,3);if(nb(b,N))return cd=bd(a,new N(1,2,3,4));return cd=b},ed=function(){dd||(dd=Vc(V()));return dd},fd={CONTROL:"33895100",LOADER:"33895101",RELEASE_CANDIDATE_LOADER:"33895150",BLOCKING_LOADER:"33895151",NO_LOADER:"33895152",NO_LOADER_NO_EXPAND:"33895153"},gd={ASWIFT_LOADER:"33895131",BLOCKING_LOADER:"33895132"};var W=function(){};W.prototype.serialize=function(a){var b=[];this.h(a,b);return b.join("")};W.prototype.h=function(a,b){switch(typeof a){case "string":this.r(a,b);break;case "number":this.L(a,b);break;case "boolean":b.push(a);break;case "undefined":b.push("null");break;case "object":if(a==i){b.push("null");break}if(n(a)){this.K(a,b);break}this.M(a,b);break;case "function":break;default:throw Error("Unknown type: "+typeof a);}};
var hd={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},id=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;W.prototype.r=function(a,b){b.push('"',a.replace(id,function(c){if(c in hd)return hd[c];var d=c.charCodeAt(0),e="\\u";if(d<16)e+="000";else if(d<256)e+="00";else if(d<4096)e+="0";return hd[c]=e+d.toString(16)}),'"')};W.prototype.L=function(a,b){b.push(isFinite(a)&&!isNaN(a)?a:"null")};
W.prototype.K=function(a,b){var c=a.length;b.push("[");for(var d="",e=0;e<c;e++){b.push(d);this.h(a[e],b);d=","}b.push("]")};W.prototype.M=function(a,b){b.push("{");var c="";for(var d in a)if(a.hasOwnProperty(d)){var e=a[d];if(typeof e!="function"){b.push(c);this.r(d,b);b.push(":");this.h(e,b);c=","}}b.push("}")};var jd=["google_ad_block","google_ad_channel","google_ad_client","google_ad_format","google_ad_height","google_ad_host","google_ad_host_channel","google_ad_host_tier_id","google_ad_output","google_ad_override","google_ad_region","google_ad_section","google_ad_slot","google_ad_type","google_ad_width","google_adtest","google_allow_expandable_ads","google_alternate_ad_url","google_alternate_color","google_analytics_domain_name","google_analytics_uacct","google_bid","google_city","google_color_bg","google_color_border",
"google_color_line","google_color_link","google_color_text","google_color_url","google_container_id","google_contents","google_country","google_cpm","google_ctr_threshold","google_cust_age","google_cust_ch","google_cust_gender","google_cust_id","google_cust_interests","google_cust_job","google_cust_l","google_cust_lh","google_cust_u_url","google_disable_video_autoplay","google_ed","google_eids","google_enable_osd","google_encoding","google_font_face","google_font_size","google_frame_id","google_gl",
"google_hints","google_image_size","google_kw","google_kw_type","google_language","google_max_num_ads","google_max_radlink_len","google_num_radlinks","google_num_radlinks_per_unit","google_num_slots_to_rotate","google_only_ads_with_video","google_only_pyv_ads","google_override_format","google_page_url","google_referrer_url","google_region","google_reuse_colors","google_rl_dest_url","google_rl_filtering","google_rl_mode","google_rt","google_safe","google_skip","google_tag_info","google_targeting",
"google_ui_features","google_ui_version","google_video_doc_id","google_video_product_type","google_with_pyv_ads"],kd=function(a){for(var b=[],c=0,d=jd.length;c<d;c++){var e=jd[c];if(a[e]!=i){var f;try{f=(new W).serialize(a[e])}catch(g){}f&&b.push(e,"=",f,";")}}return b.join("")},ld=function(a){for(var b=0,c=jd.length;b<c;b++){var d=jd[b];a[d]=i}};var md=function(a){var b="google_unique_id";if(a[b])++a[b];else a[b]=1;return a[b]},nd=function(){var a="script";return["<",a,' src="http://',v(),,'/pagead/js/r20100616/r20100614/show_ads_impl.js"></',a,">"].join("")},od=function(){if(window.google_disable_async)return j;return hb.domain==B.location.hostname&&(z||tc||sc&&!!window.document.body)&&
!window.google_container_id&&(!window.google_ad_output||window.google_ad_output=="html")},pd=function(a){var b="script",c={allowtransparency:'"true"',frameborder:'"'+(a.google_ad_frameborder||0)+'"',height:'"'+a.google_ad_height+'"',hspace:'"0"',marginwidth:'"0"',marginheight:'"0"',name:'"google_ads_frame"',scrolling:'"no"',vspace:'"0"',width:'"'+a.google_ad_width+'"'};a.google_ad_frameborder=i;var d=uc(a,c);c=kd(a);ld(a);var e=k,f=(new Date).getTime(),g=["<!doctype html><html><body><",b,">",c,"google_unique_id=",
a.google_unique_id,';google_async_iframe_id="',d,'";google_start_time=',e,";google_bpp=",f>e?f-e:1,";</",b,">",nd(),"</body></html>"].join("");hc(function(){ic();vc(a,d,g)})},qd=function(){var a=fd;a=[a.RELEASE_CANDIDATE_LOADER,a.BLOCKING_LOADER,a.NO_LOADER,a.NO_LOADER_NO_EXPAND];V().b(a,Ib,3)},rd=function(){if(G){var a=O("google_persistent_state"),b=T(a,3);a=3;if("geil"in b){b=b.geil(a);V().b([b],1,a)}}},sd=function(){var a=V();return"geil"in a?a.geil(3):""},td=function(){var a=sd(),b=fd;return a==
b.RELEASE_CANDIDATE_LOADER},ud=function(){var a=sd(),b=fd;return a==b.BLOCKING_LOADER},vd=function(){var a=sd(),b=fd;return a==b.NO_LOADER_NO_EXPAND},wd=function(){if(Qb){G&&rd();var a=gd,b=0;b=G?a.ASWIFT_LOADER:a.BLOCKING_LOADER;V().b([b],1,4)}};var xd={google:1,googlegroups:1,gmail:1,googlemail:1,googleimages:1,googleprint:1};function yd(a){a=a.google_page_location||a.google_page_url;if(!a)return j;a=a.toString();if(a.indexOf("http://")==0)a=a.substring(7,a.length);else if(a.indexOf("https://")==0)a=a.substring(8,a.length);var b=a.indexOf("/");if(b==-1)b=a.length;a=a.substring(0,b);a=a.split(".");b=j;if(a.length>=3)b=a[a.length-3]in xd;if(a.length>=2)b=b||a[a.length-2]in xd;return b}
function zd(a,b,c){var d=O();if(yd(a))return!U(d,2,h);if(!T(d,2)){a=Math.random();if(a<=c){c="http://"+ha()+"/pagead/test_domain.js";a="script";b.write("<"+a+' src="'+c+'"></'+a+">");return U(d,2,h)}}return j}var Ad=function(a){var b=V();if(b.c(1)=="44901228")return j;if(b.c(1)=="44901229"||Math.random()<Hb)return 1==Math.floor(a/2)%2;return j};
function Bd(a,b){var c=O();if(!yd(a)&&ad(c))return Ad(b)?"http://"+u("","googleads2.g.doubleclick.net"):"http://"+ha();return"http://"+ia()};var X=function(a){this.e=a;this.n=[];this.m=0;this.f=[];this.F=0;this.i=[];this.C=j;this.s=this.t="";this.B=j};X.prototype.H=function(a,b){var c=this.e[b],d=this.n;this.e[b]=function(e){if(e&&e.length>0){var f=e.length>1?e[1].url:i;d.push([a,ra(e[0].url),f])}c(e)}};X.prototype.G=function(){this.m++};X.prototype.I=function(a){this.f.push(a)};var Cd="http://"+v()+"/pagead/osd.js";X.prototype.D=function(){if(!this.C){rb(H);pb(Cd);this.C=h}};
X.prototype.u=function(a){if(this.m>0)for(var b=this.e.document.getElementsByTagName("iframe"),c=this.B?"google_ads_iframe_":"google_ads_frame",d=0;d<b.length;d++){var e=b.item(d);e.src&&e.name&&e.name.indexOf(c)==0&&a(e,e.src)}};
X.prototype.v=function(a){var b=this.n;if(b.length>0)for(var c=this.e.document.getElementsByTagName("a"),d=0;d<c.length;d++)for(var e=0;e<b.length;e++)if(c.item(d).href==b[e][1]){var f=c.item(d).parentNode;if(b[e][2])for(var g=f,o=0;o<4;o++){if(g.innerHTML.indexOf(b[e][2])>0){f=g;break}g=g.parentNode}a(f,b[e][0]);b.splice(e,1);break}};X.prototype.w=function(a){for(var b=0;b<this.f.length;b++){var c=this.f[b],d=Dd(c);if(d)(d=this.e.document.getElementById("google_ads_div_"+d))&&a(d,c)}};
X.prototype.j=function(a){this.v(a);this.w(a);this.u(a)};X.prototype.setupOsd=function(a,b,c){this.F=a;this.t=b;this.s=c};X.prototype.getOsdMode=function(){return this.F};X.prototype.getEid=function(){return this.t};X.prototype.getCorrelator=function(){return this.s};X.prototype.l=function(){return this.n.length+this.m+this.f.length};X.prototype.setValidOutputTypes=function(a){this.i=a};
X.prototype.registerAdBlockByType=function(a,b,c){if(this.i.length>0){for(var d=0;d<this.i.length;d++)if(this.i[d]==a){this.B=c;if(a=="js")this.H(b,"google_ad_request_done");else if(a=="html")this.G();else a=="json_html"&&this.I(b)}this.D()}};var Dd=function(a){if((a=a.match(/[&\?](?:slotname)=([^&]+)/))&&a.length==2)return a[1];return""},Ed=function(){var a=H;a.__google_ad_urls||(a.__google_ad_urls=new X(a));return a.__google_ad_urls};r("Goog_AdSense_getAdAdapterInstance",Ed);
r("Goog_AdSense_OsdAdapter",X);r("Goog_AdSense_OsdAdapter.prototype.numBlocks",X.prototype.l);r("Goog_AdSense_OsdAdapter.prototype.findBlocks",X.prototype.j);r("Goog_AdSense_OsdAdapter.prototype.getOsdMode",X.prototype.getOsdMode);r("Goog_AdSense_OsdAdapter.prototype.getEid",X.prototype.getEid);r("Goog_AdSense_OsdAdapter.prototype.getCorrelator",X.prototype.getCorrelator);r("Goog_AdSense_OsdAdapter.prototype.setValidOutputTypes",X.prototype.setValidOutputTypes);
r("Goog_AdSense_OsdAdapter.prototype.setupOsd",X.prototype.setupOsd);r("Goog_AdSense_OsdAdapter.prototype.registerAdBlockByType",X.prototype.registerAdBlockByType);var Fd=function(a,b){var c=a.nodeType==9?a:a.ownerDocument||a.document;if(c.defaultView&&c.defaultView.getComputedStyle)if(c=c.defaultView.getComputedStyle(a,""))return c[b];return i},Gd=function(a,b){return Fd(a,b)||(a.currentStyle?a.currentStyle[b]:i)||a.style[b]},Hd=function(a,b,c,d){if(typeof d=="number")d=(b?Math.round(d):d)+"px";c.style[a]=d};ea(Hd,"height",h);ea(Hd,"width",h);
var Id=function(a,b,c,d){if(/^\d+px?$/.test(b))return parseInt(b,10);else{var e=a.style[c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=e;a.runtimeStyle[c]=f;return b}},Jd=function(a){var b=a.nodeType==9?a:a.ownerDocument||a.document,c="";if(b.body.createTextRange){c=b.body.createTextRange();c.moveToElementText(a);c=c.queryCommandValue("FontName")}if(!c){c=Gd(a,"fontFamily");if(Ma&&Va)c=c.replace(/ \[[^\]]*\]/,"")}a=c.split(",");if(a.length>1)c=a[0];
return sa(c,"\"'")},Kd=/[^\d]+$/,Ld=function(a){return(a=a.match(Kd))&&a[0]||i},Md={cm:1,"in":1,mm:1,pc:1,pt:1},Nd={em:1,ex:1},Od=function(a){var b=Gd(a,"fontSize"),c=Ld(b);if(b&&"px"==c)return parseInt(b,10);if(z)if(c in Md)return Id(a,b,"left","pixelLeft");else if(a.parentNode&&a.parentNode.nodeType==1&&c in Nd){a=a.parentNode;c=Gd(a,"fontSize");return Id(a,b==c?"1em":b,"left","pixelLeft")}c=eb("span",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});
gb(a,c);b=c.offsetHeight;c&&c.parentNode&&c.parentNode.removeChild(c);return b};var Y={};function Pd(a){if(a==1)return h;return!Y[a]}function Qd(a,b){if(!(!a||a==""))if(b==1)if(Y[b])Y[b]+=","+a;else Y[b]=a;else Y[b]=a}function Rd(){var a=[];C(Y,function(b){a.push(b)});return a.join(",")}function Sd(a,b){if(n(a))for(var c=0;c<a.length;c++)p(a[c])&&Qd(a[c],b)}var Td=j;
function Ud(a,b){var c="script";Td=Vd(a,b);if(!Td)a.google_allow_expandable_ads=j;var d=!Wd();Td&&d&&b.write("<"+c+' src="http://'+v()+'/pagead/expansion_embed.js"></'+c+">");var e=zd(a,b,Jb);(d=d||e)&&tb("msie")&&!window.opera?b.write("<"+c+' src="http://'+v()+'/pagead/render_ads.js"></'+c+">"):b.write("<"+c+'>google_protectAndRun("ads_core.google_render_ad", google_handleError, google_render_ad);</'+c+">")}var Z=function(a){a=a.google_unique_id;if(typeof a=="number")return a;return 0};
function $(a){return a!=i?'"'+a+'"':'""'}var Xd=function(a,b){var c=b.slice(-1),d=c=="?"||c=="#"?"":"&",e=[b];c=function(f,g){if(f||f===0||f===j){if(typeof f=="boolean")f=f?1:0;ob(e,d,g,"=",D(f));d="&"}};C(a,c);return e.join("")};function Yd(){var a=z&&A("6"),b=Na&&A("1.8.1"),c=Oa&&A("525");if(Ua&&(a||b||c))return h;else if(Ta&&(c||b))return h;else if(Va&&b)return h;return j}
function Wd(){return(typeof ExpandableAdSlotFactory=="function"||typeof ExpandableAdSlotFactory=="object")&&typeof ExpandableAdSlotFactory.createIframe=="function"}function Vd(a,b){if(a.google_allow_expandable_ads===j||!b.body||a.google_ad_output!="html"||yc(a,b)||!Zd(a)||isNaN(a.google_ad_height)||isNaN(a.google_ad_width)||!Yd()||vd()&&od()||b.domain!=a.location.hostname)return j;return h}function Zd(a){var b=a.google_ad_format;if(E(b))return j;if(wb(a)&&b!="468x15_0ads_al")return j;return h}
function $d(){var a;if(B.google_ad_output=="html"&&!(wb(B)||E(B.google_ad_format))&&Pd(0)){a=["6083035","6083034"];a=xb(a,Ob);Qd(a,0)}return a=="6083035"}function ae(a,b){if(!(G?Z(a)==1:!Z(a))||E(a.google_ad_format))return"";var c="",d=wb(a);if(b=="html"||d)c=xb(["36815001","36815002"],Kb);if(c==""&&(b=="js"||d))c=xb(["36815003","36815004"],Lb);if(c==""&&(b=="html"||b=="js"))c=xb(["36813005","36813006"],Mb);return c}
function be(){if(G)return"";var a=Ed(),b=window.google_enable_osd,c;if(b===h){c="36813006";ce(c,a)}else if(b!==j&&Pd(0)){c=a.getEid();if(c=="")(c=ae(window,String(window.google_ad_output||"")))&&ce(c,a);else if(c!="36815001"&&c!="36815002"&&c!="36815003"&&c!="36815004"&&c!="36813005"&&c!="36813006")c=""}if(c){Qd(c,0);return c}return""}
function ce(a,b){var c=b.getOsdMode(),d=[];switch(a){case "36815004":c=1;d=["js"];break;case "36815002":c=1;d=["html"];break;case "36813006":c=0;d=["html","js"];break}d.length>0&&b.setValidOutputTypes(d);d=O();b.setupOsd(c,a,T(d,7).toString())}
function de(a,b,c,d){G||md(a);var e=Z(a);c=Xd({ifi:e},c);c=c.substring(0,1991);c=c.replace(/%\w?$/,"");var f="script";if((a.google_ad_output=="js"||a.google_ad_output=="json_html")&&(a.google_ad_request_done||a.google_radlink_request_done))b.write("<"+f+' language="JavaScript1.1" src='+$(aa(c))+"></"+f+">");else if(a.google_ad_output=="html")if(Td&&Wd()){b=a.google_container_id||d||i;a["google_expandable_ad_slot"+e]=ExpandableAdSlotFactory.createIframe("google_ads_frame"+e,aa(c),a.google_ad_width,
a.google_ad_height,b)}else{e='<iframe name="google_ads_frame" width='+$(String(a.google_ad_width))+" height="+$(String(a.google_ad_height))+" frameborder="+$(String(a.google_ad_frameborder==i?"":a.google_ad_frameborder))+" src="+$(aa(c))+' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no"></iframe>';a.google_container_id?ee(a.google_container_id,b,e):b.write(e)}return c}function fe(a){Nc(a)}
function ge(a){var b=ed().c(2)=="44901217";if(!he(b))return j;b=$d();var c=Bd(window,Z(window));a=ie(a);b=c+je(a.google_ad_format,b);window.google_ad_url=Xd(a,b);return h}
var ne=function(a){a.dt=k;if(G&&window.google_bpp)a.bpp=window.google_bpp;a.shv="r20100616";var b=O(),c=T(b,8),d=window.google_ad_section,e=window.google_ad_format,f=window.google_ad_slot;if(c[d])E(e)||(a.prev_fmts=c[d]);var g=T(b,9);if(g[d])a.prev_slotnames=g[d].toLowerCase();if(e){if(!E(e))if(c[d])c[d]+=","+e;else c[d]=e}else if(f)if(g[d])g[d]+=","+f;else g[d]=f;a.correlator=T(b,7);if(T(b,2)&&!ad(b))a.dblk=1;if(window.google_ad_channel){c=T(b,10);d="";e=window.google_ad_channel.split(ke);
for(f=0;f<e.length;f++){g=e[f];if(c[g])d+=g+"+";else c[g]=h}a.pv_ch=d}if(window.google_ad_host_channel){b=le(window.google_ad_host_channel,T(b,11));a.pv_h_ch=b}if(Pb)a.jscb=1;if(Rb)a.jscd=1;a.frm=window.google_iframing;a.adk=me();b=Rc();a.ga_vid=b.vid;a.ga_sid=b.sid;a.ga_hid=b.hid;a.ga_fc=b.from_cookie;a.ga_wpids=window.google_analytics_uacct},oe=function(a){var b=h;if(b=zb(b)){a.biw=b.width;a.bih=b.height}},me=function(){var a=[];ob(a,B.google_ad_slot,B.google_ad_format,B.google_ad_type,B.google_ad_width,
B.google_ad_height);if(jb){var b=Cb(jb);b&&a.push(b)}b=0;if(a)b=Ab(a.join(":"));return b.toString()},pe=function(a){var b=Bb(H);if(b!=0)a.ifk=b.toString()};function le(a,b){for(var c=a.split("|"),d=-1,e=[],f=0;f<c.length;f++){var g=c[f].split(ke);b[f]||(b[f]={});for(var o="",Q=0;Q<g.length;Q++){var I=g[Q];if(I!="")if(b[f][I])o+="+"+I;else b[f][I]=h}o=o.slice(1);e[f]=o;if(o!="")d=f}c="";if(d>-1){for(f=0;f<d;f++)c+=e[f]+"|";c+=e[d]}return c}
function qe(){var a=["44901228","44901229"];V().b(a,Gb,1);a=["44901218","44901217"];V().b(a,Nb,2)}var re=function(){ac()!=H&&Xb(4)};
function se(){re();(G?Z(window)==1:!Z(window))&&qe();var a=be(),b=i,c="",d=Math.random()<0.01;if(d)if(b=window.google_async_iframe_id)b=H.document.getElementById(b);else{c="google_temp_span";b=te(c)}d=ge(b);b&&b.id==c&&(b&&b.parentNode?b.parentNode.removeChild(b):i);if(d){c=de(window,document,window.google_ad_url);if(a)Ed().registerAdBlockByType(String(window.google_ad_output||""),c,j);fe(window)}wc(window)}
var ue=function(a){C(Eb,function(b,c){a[b]=window[c]});C(Db,function(b,c){a[b]=window[c]});C(Fb,function(b,c){a[b]=window[c]})},ve=function(a){Sd(window.google_eids,1);a.eid=Rd();var b=ed().z();if(a.eid.length>0&&b.length>0)a.eid+=",";a.eid+=b};function we(a,b,c,d){a=Vb(a,b,c,d);Ud(window,document);return a}function xe(){Mc()}
function ye(a){var b={};a=a.split("?");a=a[a.length-1].split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");if(d[0])try{b[d[0].toLowerCase()]=d.length>1?window.decodeURIComponent?decodeURIComponent(d[1].replace(/\+/g," ")):unescape(d[1]):""}catch(e){}}return b}function ze(){var a=window,b=ye(document.URL);if(b.google_ad_override){a.google_ad_override=b.google_ad_override;a.google_adtest="on"}}
function ee(a,b,c){if(a)if((a=b.getElementById(a))&&c&&c.length!=""){a.style.visibility="visible";a.innerHTML=c}}
var je=function(a,b){var c;return c=E(a)?"/pagead/sdo?":b?"/pagead/render_iframe_ads.html#":"/pagead/ads?"},Ae=function(a,b){b.dff=Jd(a).toLowerCase();b.dfs=Od(a)},Be=function(a){a.ref=window.google_referrer_url;a.loc=window.google_page_location},he=function(a){var b=O(),c=T(b,8),d=T(b,9),e=window.google_ad_section;if(E(window.google_ad_format)){if(U(b,4,T(b,4)+1)>4&&!a)return j}else if(wb(window)){if(U(b,5,T(b,5)+1)>3&&!a)return j}else{var f=U(b,6,T(b,6)+1);if(window.google_num_slots_to_rotate){Xb(1);
c[e]="";d[e]="";T(b,12)||U(b,12,(new Date).getTime()%window.google_num_slots_to_rotate+1);if(T(b,12)!=f)return j}else if(!a&&f>6&&e=="")return j}return h},ie=function(a){var b={};ue(b);ne(b);yb(b);a&&Ae(a,b);oe(b);pe(b);ve(b);Be(b);b.fu=Wb;return b},te=function(a){var b=window.google_container_id,c=b&&$a(b)||$a(a);if(!c&&!b&&a){document.write("<span id="+a+"></span>");c=$a(a)}return c},ke=/[+, ]/;window.google_render_ad=se;var Ce=function(){ze();wd();var a=window.google_start_time;if(typeof a=="number"){k=a;window.google_start_time=i}Tb("show_ads.google_init_globals",we,xe);Ud(window,document)},De=function(){window.google_start_time=k;document.write(nd())},Ee=function(){if(od()){md(window);pd(window)}else De()};function Fe(){if(Sb&&typeof B.alternateShowAds=="function")B.alternateShowAds.call(i);else if(Qb)Ce();else{Z(window)||qd();if(td())Ee();else ud()?De():Ce()}}Tb("show_ads.main",Vb,Fe);})()
;;google_ad_channel='4107951263';google_ad_client='pub-7651592418643185';google_ad_format='728x90_as';google_ad_height=90;google_ad_width=728;google_color_bg='ffffff';google_color_border='ffffff';google_color_link='000066';google_color_text='333333';google_color_url='000066';;;
(function(){var h=true,i=null,j=false,k=(new Date).getTime(),aa=function(a){var b=(new Date).getTime()-k;b="&dtd="+(b<1E4?b:"M");return a+b};var l=this,ba=function(a,b,c){a=a.split(".");c=c||l;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)if(!a.length&&b!==undefined)c[d]=b;else c=c[d]?c[d]:(c[d]={})},m=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";
if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";else if(b=="function"&&typeof a.call=="undefined")return"object";return b},n=function(a){return m(a)=="array"},ca=function(a){var b=m(a);return b=="array"||b=="object"&&typeof a.length=="number"},p=function(a){return typeof a=="string"},da=function(a){a=m(a);return a=="object"||
a=="array"||a=="function"},q=function(a,b){var c=b||l;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)}}else return function(){return a.apply(c,arguments)}},ea=function(a){var b=Array.prototype.slice.call(arguments,1);return function(){var c=Array.prototype.slice.call(arguments);c.unshift.apply(c,b);return a.apply(this,c)}},r=function(a,b,c){ba(a,b,c)},fa=function(a,
b,c){a[b]=c};var s=function(a,b){var c=parseFloat(a);return isNaN(c)||c>1||c<0?b:c},t=function(a,b){if(a=="true")return h;if(a=="false")return j;return b},ga=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,u=function(a,b){if(!a)return b;var c=a.match(ga);return c?c[0]:b};var ha=function(){return u("","googleads.g.doubleclick.net")},ia=function(){return u("","pagead2.googlesyndication.com")},v=function(){return u("","pagead2.googlesyndication.com")};var oa=function(a,b){if(b)return a.replace(ja,"&amp;").replace(ka,"&lt;").replace(la,"&gt;").replace(ma,"&quot;");else{if(!na.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(ja,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(ka,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(la,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(ma,"&quot;");return a}},ja=/&/g,ka=/</g,la=/>/g,ma=/\"/g,na=/[&<>\"]/,ra=function(a){if(a.indexOf("&")!=-1)return"document"in l&&a.indexOf("<")==-1?pa(a):qa(a);return a},pa=function(a){var b=
l.document.createElement("a");b.innerHTML=a;b.normalize&&b.normalize();a=b.firstChild.nodeValue;b.innerHTML="";return a},qa=function(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if(c.charAt(0)=="#"){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return b}})},sa=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=c==1?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==
e)return a.substring(1,a.length-1)}return a},ua=function(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),g=0;c==0&&g<f;g++){var o=d[g]||"",Q=e[g]||"",I=RegExp("(\\d*)(\\D*)","g"),bc=RegExp("(\\d*)(\\D*)","g");do{var R=I.exec(o)||["","",""],S=bc.exec(Q)||["","",""];if(R[0].length==0&&S[0].length==0)break;c=R[1].length==0?0:parseInt(R[1],10);var cc=S[1].length==0?0:parseInt(S[1],10);
c=ta(c,cc)||ta(R[2].length==0,S[2].length==0)||ta(R[2],S[2])}while(c==0)}return c},ta=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var w=Array.prototype,va=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},wa=function(){return w.concat.apply(w,arguments)},xa=function(a){if(n(a))return wa(a);else{for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}};var x=function(a,b){this.width=a;this.height=b};x.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};x.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};x.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};x.prototype.scale=function(a){this.width*=a;this.height*=a;return this};var ya=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},za=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Aa=function(a){for(var b,c,d=1;d<arguments.length;d++){c=arguments[d];for(b in c)a[b]=c[b];for(var e=0;e<za.length;e++){b=za[e];if(Object.prototype.hasOwnProperty.call(c,b))a[b]=c[b]}}};var y,Ba,Ca,Da,Ea,Fa,Ga,Ha,Ia,Ja=function(){return l.navigator?l.navigator.userAgent:i},Ka=function(){return l.navigator},La=function(){Ea=Da=Ca=Ba=y=j;var a;if(a=Ja()){var b=Ka();y=a.indexOf("Opera")==0;Ba=!y&&a.indexOf("MSIE")!=-1;Da=(Ca=!y&&a.indexOf("WebKit")!=-1)&&a.indexOf("Mobile")!=-1;Ea=!y&&!Ca&&b.product=="Gecko"}};La();
var Ma=y,z=Ba,Na=Ea,Oa=Ca,Pa=Da,Qa=function(){var a=Ka();return a&&a.platform||""},Ra=Qa(),Sa=function(){Fa=Ra.indexOf("Mac")!=-1;Ga=Ra.indexOf("Win")!=-1;Ha=Ra.indexOf("Linux")!=-1;Ia=!!Ka()&&(Ka().appVersion||"").indexOf("X11")!=-1};Sa();
var Ta=Fa,Ua=Ga,Va=Ha,Wa=function(){var a="",b;if(Ma&&l.opera){a=l.opera.version;a=typeof a=="function"?a():a}else{if(Na)b=/rv\:([^\);]+)(\)|;)/;else if(z)b=/MSIE\s+([^\);]+)(\)|;)/;else if(Oa)b=/WebKit\/(\S+)/;if(b)a=(a=b.exec(Ja()))?a[1]:""}return a},Xa=Wa(),Ya={},A=function(a){return Ya[a]||(Ya[a]=ua(Xa,a)>=0)};var Za=function(a){return p(a)?document.getElementById(a):a},$a=Za,bb=function(a,b){ya(b,function(c,d){if(d=="style")a.style.cssText=c;else if(d=="class")a.className=c;else if(d=="for")a.htmlFor=c;else if(d in ab)a.setAttribute(ab[d],c);else a[d]=c})},ab={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",type:"type"},cb=function(a){var b=a.document;if(Oa&&!A("500")&&!Pa){if(typeof a.innerHeight==
"undefined")a=window;b=a.innerHeight;var c=a.document.documentElement.scrollHeight;if(a==a.top)if(c<b)b-=15;return new x(a.innerWidth,b)}a=b.compatMode=="CSS1Compat";if(Ma&&!A("9.50"))a=j;a=a?b.documentElement:b.body;return new x(a.clientWidth,a.clientHeight)},eb=function(){return db(document,arguments)},db=function(a,b){var c=b[0],d=b[1];if(z&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',oa(d.name),'"');if(d.type){c.push(' type="',oa(d.type),'"');var e={};Aa(e,d);d=e;delete d.type}c.push(">");
c=c.join("")}var f=a.createElement(c);if(d)if(p(d))f.className=d;else bb(f,d);if(b.length>2){d=function(g){if(g)f.appendChild(p(g)?a.createTextNode(g):g)};for(c=2;c<b.length;c++){e=b[c];ca(e)&&!(da(e)&&e.nodeType>0)?va(fb(e)?xa(e):e,d):d(e)}}return f},gb=function(a,b){a.appendChild(b)},fb=function(a){if(a&&typeof a.length=="number")if(da(a))return typeof a.item=="function"||typeof a.item=="string";else if(m(a)=="function")return typeof a.item=="function";return j};var hb=document,B=window,ib=function(a){var b=i;if((a=a.getElementsByTagName("script"))&&a.length){b=a[a.length-1];b=b.parentNode}return b},jb=ib(hb);v();
var C=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(i,a[c],c,a)},kb=function(a){return!!a&&typeof a=="function"&&!!a.call},lb=function(a){return!!a&&(typeof a=="object"||typeof a=="function")},nb=function(a,b){if(!a||!lb(a))return h;return!mb(a,b.prototype)},mb=function(a,b){if(!a)return j;var c=h;C(b,function(d,e){if(!c||!(e in a)||typeof d!=typeof a[e])c=j});return c},ob=function(a){if(arguments.length<2)return a.length;for(var b=1,c=arguments.length;b<c;++b)a.push(arguments[b]);return a.length};
function D(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}function pb(a,b,c){var d=document.createElement("script");d.type="text/javascript";if(b)d.onload=b;if(c)d.id=c;d.src=a;var e=document.getElementsByTagName("head")[0];if(!e)return j;window.setTimeout(function(){e.appendChild(d)},0);return h}function qb(a,b){if(a.attachEvent){a.attachEvent("onload",b);return h}if(a.addEventListener){a.addEventListener("load",b,j);return h}return j}
var rb=function(a){if(!("google_onload_fired"in a)){a.google_onload_fired=j;qb(a,function(){a.google_onload_fired=h})}};function sb(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=new Image;c.src=b;a.google_image_requests.push(c)}function tb(a){if(a in ub)return ub[a];return ub[a]=navigator.userAgent.toLowerCase().indexOf(a)!=-1}var ub={};
function vb(){if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){a=3;for(var b=1;b;)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+(a+1));a++}catch(c){b=i}return a.toString()}else if(tb("msie")&&!window.opera){b=i;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(d){a=
0;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");a=6;b.AllowScriptAccess="always"}catch(e){if(a==6)return a.toString()}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(f){}}if(b){a=b.GetVariable("$version").split(" ")[1];return a.replace(/,/g,".")}}return"0"}function wb(a){var b=a.google_ad_format;if(b)return b.indexOf("_0ads")>0;return a.google_ad_output!="html"&&a.google_num_radlinks>0}function E(a){return!!a&&a.indexOf("_sdo")!=-1}
function xb(a,b){if(!(Math.random()<1.0E-4)){var c=Math.random();if(c<b){c=Math.floor(c/b*a.length);return a[c]}}return""}
var yb=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=window.history.length;a.u_java=navigator.javaEnabled();if(window.screen){a.u_h=window.screen.height;a.u_w=window.screen.width;a.u_ah=window.screen.availHeight;a.u_aw=window.screen.availWidth;a.u_cd=window.screen.colorDepth}if(navigator.plugins)a.u_nplug=navigator.plugins.length;if(navigator.mimeTypes)a.u_nmime=navigator.mimeTypes.length},zb=function(a,b){var c=b||B;if(a&&c.top!=c)c=c.top;try{return c.document&&!c.document.body?new x(-1,
-1):cb(c||window)}catch(d){return new x(-12245933,-12245933)}},Ab=function(a,b){var c=a.length;if(c==0)return 0;for(var d=b||305419896,e=0;e<c;e++){var f=a.charCodeAt(e);d^=(d<<5)+(d>>2)+f&4294967295}return d>0?d:4294967296+d},Bb=function(a){if(a==a.top)return 0;var b=[];b.push(a.document.URL);a.name&&b.push(a.name);var c=h;a=zb(!c,a);b.push(a.width.toString());b.push(a.height.toString());return Ab(b.join(""))},Cb=function(a){if(!a)return"";var b=[],c=0;for(a=a;a&&c<25;a=a.parentNode,++c)b.push(a.id||
"");return b.join()};var Db={google_ad_channel:"channel",google_ad_host:"host",google_ad_host_channel:"h_ch",google_ad_host_tier_id:"ht_id",google_ad_section:"region",google_ad_type:"ad_type",google_adtest:"adtest",google_allow_expandable_ads:"ea",google_alternate_ad_url:"alternate_ad_url",google_alternate_color:"alt_color",google_bid:"bid",google_city:"gcs",google_color_bg:"color_bg",google_color_border:"color_border",google_color_line:"color_line",google_color_link:"color_link",google_color_text:"color_text",google_color_url:"color_url",
google_contents:"contents",google_country:"gl",google_cpm:"cpm",google_cust_age:"cust_age",google_cust_ch:"cust_ch",google_cust_gender:"cust_gender",google_cust_id:"cust_id",google_cust_interests:"cust_interests",google_cust_job:"cust_job",google_cust_l:"cust_l",google_cust_lh:"cust_lh",google_cust_u_url:"cust_u_url",google_disable_video_autoplay:"disable_video_autoplay",google_ed:"ed",google_encoding:"oe",google_feedback:"feedback_link",google_flash_version:"flash",google_font_face:"f",google_font_size:"fs",
google_hints:"hints",google_kw:"kw",google_kw_type:"kw_type",google_language:"hl",google_page_url:"url",google_region:"gr",google_reuse_colors:"reuse_colors",google_safe:"adsafe",google_tag_info:"gut",google_targeting:"targeting",google_targeting_video_doc_id:"tvdi",google_ui_features:"ui",google_ui_version:"uiv",google_video_doc_id:"video_doc_id",google_video_product_type:"video_product_type"},Eb={google_ad_block:"ad_block",google_ad_client:"client",google_ad_format:"format",google_ad_output:"output",
google_ad_callback:"callback",google_ad_height:"h",google_ad_override:"google_ad_override",google_ad_slot:"slotname",google_ad_width:"w",google_ctr_threshold:"ctr_t",google_image_size:"image_size",google_last_modified_time:"lmt",google_max_num_ads:"num_ads",google_max_radlink_len:"max_radlink_len",google_num_radlinks:"num_radlinks",google_num_radlinks_per_unit:"num_radlinks_per_unit",google_only_ads_with_video:"only_ads_with_video",google_rl_dest_url:"rl_dest_url",google_rl_filtering:"rl_filtering",
google_rl_mode:"rl_mode",google_rt:"rt",google_skip:"skip"},Fb={google_only_pyv_ads:"pyv",google_with_pyv_ads:"withpyv"};var Gb=s("0",0),Hb=s("0",0),Ib=s("0.005",0),Jb=s("1",0),Kb=s("0.01",0),Lb=s("0.01",0),Mb=s("0.008",0),Nb=s("0.01",0),Ob=s("0",0);var Pb=t("false",j),Qb=t("false",h),Rb=t("false",j),Sb=t("false",j);var Tb=function(a,b,c){b=q(b,l,a);a=window.onerror;window.onerror=b;try{c()}catch(d){c=d.toString();var e="";if(d.fileName)e=d.fileName;var f=-1;if(d.lineNumber)f=d.lineNumber;b=b(c,e,f);if(!b)throw d;}window.onerror=a};r("google_protectAndRun",Tb);
var Vb=function(a,b,c,d){if(Math.random()<0.01){var e=hb;a=["http://",ia(),"/pagead/gen_204","?id=jserror","&jscb=",Pb?1:0,"&jscd=",Rb?1:0,"&context=",D(a),"&msg=",D(b),"&file=",D(c),"&line=",D(d.toString()),"&url=",D(e.URL.substring(0,512)),"&ref=",D(e.referrer.substring(0,512))];a.push(Ub());sb(B,a.join(""))}return!Sb};r("google_handleError",Vb);
var Xb=function(a){Wb|=a},Wb=0,Ub=function(){var a=["&client=",D(B.google_ad_client),"&format=",D(B.google_ad_format),"&slotname=",D(B.google_ad_slot),"&output=",D(B.google_ad_output),"&ad_type=",D(B.google_ad_type)];return a.join("")};var Yb=function(a){var b="google_test";try{var c=a[b];a[b]=!c;if(a[b]===!c){a[b]=c;return h}}catch(d){}return j},Zb=function(a){for(;a!=a.parent&&Yb(a.parent);)a=a.parent;return a},$b=i,ac=function(){$b||($b=Zb(window));return $b};var dc,F=function(){this.p=[];this.P=window;this.d=0},ec=function(a,b){this.fn=a;this.win=b};F.prototype.enqueue=function(a,b){this.p.push(new ec(a,b||this.P));this.g()};F.prototype.o=function(){this.d=1};F.prototype.q=function(){if(this.d==1)this.d=0;this.g()};fa(F.prototype,"nq",F.prototype.enqueue);fa(F.prototype,"al",F.prototype.o);fa(F.prototype,"rl",F.prototype.q);F.prototype.g=function(){this.P.setTimeout(q(this.O,this),0)};
F.prototype.O=function(){if(this.d==0&&this.p.length){var a=this.p.shift();this.d=2;a.win.setTimeout(q(this.J,this,a),0);this.g()}};F.prototype.J=function(a){this.d=0;a.fn()};var fc=function(a){return lb(a)&&kb(a.nq)&&kb(a.al)&&kb(a.rl)},gc=function(){if(dc)return dc;var a=ac(),b=a.google_jobrunner;if(fc(b))return dc=b;return a.google_jobrunner=dc=new F},hc=function(a,b){gc().nq(a,b)},ic=function(){gc().al()},jc=function(){var a=ac().google_jobrunner;fc(a)&&a.rl()};var kc,lc,mc,nc,oc,pc,qc,rc=function(){qc=pc=oc=nc=mc=lc=kc=j;var a=Ja();if(a)if(a.indexOf("Firefox")!=-1)kc=h;else if(a.indexOf("Camino")!=-1)lc=h;else if(a.indexOf("iPhone")!=-1||a.indexOf("iPod")!=-1)mc=h;else if(a.indexOf("iPad")!=-1)nc=h;else if(a.indexOf("Android")!=-1)oc=h;else if(a.indexOf("Chrome")!=-1)pc=h;else if(a.indexOf("Safari")!=-1)qc=h};rc();var sc=kc,tc=pc;var G=!!window.google_async_iframe_id,H=G&&window.parent||window,uc=function(a,b){for(var c=a.document,d=b.id,e=0;!d||a.document.getElementById(d);)d="aswift_"+e++;b.id=d;e=["<iframe"];for(var f in b)ob(e,f,"=",b[f]);e.push("></iframe>");f=e.join(" ");c.write(f);return d},vc=function(a,b,c){a=a.document.getElementById(b).contentWindow.document;a.open();a.write(c)},wc=function(a){if(G&&a!=a.parent){jc();a.setTimeout(function(){a.document.close()},0)}};function xc(a,b){try{return a.top.document==b}catch(c){}return j}function yc(a,b,c,d){c=c||a.google_ad_width;d=d||a.google_ad_height;if(xc(a,b))return j;var e=b.documentElement;if(c&&d){var f=1,g=1;if(a.innerHeight){f=a.innerWidth;g=a.innerHeight}else if(e&&e.clientHeight){f=e.clientWidth;g=e.clientHeight}else if(b.body){f=b.body.clientWidth;g=b.body.clientHeight}if(g>2*d||f>2*c)return j}return h}function zc(a,b){C(b,function(c,d){a["google_"+d]=c})}
function Ac(a,b){if(!b)return a.URL;return a.referrer}function Bc(a,b){if(!b&&a.google_referrer_url==i)return"0";else if(b&&a.google_referrer_url==i)return"1";else if(!b&&a.google_referrer_url!=i)return"2";else if(b&&a.google_referrer_url!=i)return"3";return"4"}function Cc(a,b,c){a.page_url=Ac(b,c);a.page_location=i}function Dc(a,b,c,d){a.page_url=b.google_page_url;a.page_location=Ac(c,d)||"EMPTY"}
function Ec(a,b){var c={},d=yc(H,b,a.google_ad_width,a.google_ad_height);c.iframing=Bc(a,d);a.google_page_url?Dc(c,a,b,d):Cc(c,b,d);c.last_modified_time=b.URL==c.page_url?Date.parse(b.lastModified)/1E3:i;c.referrer_url=d?a.google_referrer_url:a.google_page_url&&a.google_referrer_url?a.google_referrer_url:b.referrer;return c}function Fc(a){var b={},c=a.URL.substring(a.URL.lastIndexOf("http"));b.iframing=i;b.page_url=c;b.page_location=a.URL;b.last_modified_time=i;b.referrer_url=c;return b}
function Gc(a){var b=Hc(a,H.document);zc(a,b)}function Hc(a,b){var c;return c=a.google_page_url==i&&Ic[b.domain]?Fc(b):Ec(a,b)}var Ic={};Ic["ad.yieldmanager.com"]=h;var Jc="",Mc=function(){if(window.google_ad_frameborder==i)window.google_ad_frameborder=0;if(window.google_ad_output==i)window.google_ad_output="html";if(E(window.google_ad_format)){var a=window.google_ad_format.match(/^(\d+)x(\d+)_.*/);if(a){window.google_ad_width=parseInt(a[1],10);window.google_ad_height=parseInt(a[2],10);window.google_ad_output="html"}}window.google_ad_format=Kc(window.google_ad_format,String(window.google_ad_output),Number(window.google_ad_width),Number(window.google_ad_height),
window.google_ad_slot,!!window.google_override_format);Jc=window.google_ad_client||"";window.google_ad_client=Lc(window.google_ad_format,window.google_ad_client);Gc(window);if(window.google_flash_version==i)window.google_flash_version=vb();window.google_ad_section=window.google_ad_section||window.google_ad_region||"";window.google_country=window.google_country||window.google_gl||"";a=(new Date).getTime();if(n(window.google_color_bg))window.google_color_bg=J(window.google_color_bg,a);if(n(window.google_color_text))window.google_color_text=
J(window.google_color_text,a);if(n(window.google_color_link))window.google_color_link=J(window.google_color_link,a);if(n(window.google_color_url))window.google_color_url=J(window.google_color_url,a);if(n(window.google_color_border))window.google_color_border=J(window.google_color_border,a);if(n(window.google_color_line))window.google_color_line=J(window.google_color_line,a)},Nc=function(a){C(Db,function(b,c){a[c]=i});C(Eb,function(b,c){a[c]=i});C(Fb,function(b,c){a[c]=i});a.google_container_id=i;
a.google_disable_async=i;a.google_eids=i;a.google_page_location=i;a.google_referrer_url=i;a.google_ad_region=i;a.google_gl=i},J=function(a,b){Xb(2);return a[b%a.length]},Lc=function(a,b){if(!b)return"";b=b.toLowerCase();return b=E(a)?Oc(b):Pc(b)},Pc=function(a){if(a&&a.substring(0,3)!="ca-")a="ca-"+a;return a},Oc=function(a){if(a&&a.substring(0,7)!="ca-aff-")a="ca-aff-"+a;return a},Kc=function(a,b,c,d,e,f){if(!a&&b=="html")a=c+"x"+d;return a=Qc(a,e,f)?a.toLowerCase():""},Qc=function(a,b,c){if(!a)return j;
if(!b)return h;return c};var K=document,L=navigator,M=window;
function Rc(){var a=K.cookie,b=Math.round((new Date).getTime()/1E3),c=M.google_analytics_domain_name;c=typeof c=="undefined"?Sc("auto"):Sc(c);var d=a.indexOf("__utma="+c+".")>-1,e=a.indexOf("__utmb="+c)>-1,f=a.indexOf("__utmc="+c)>-1,g={},o=!!M&&!!M.gaGlobal;if(d){a=a.split("__utma="+c+".")[1].split(";")[0].split(".");g.sid=e&&f?a[3]+"":o&&M.gaGlobal.sid?M.gaGlobal.sid:b+"";g.vid=a[0]+"."+a[1];g.from_cookie=h}else{g.sid=o&&M.gaGlobal.sid?M.gaGlobal.sid:b+"";g.vid=o&&M.gaGlobal.vid?M.gaGlobal.vid:
(Math.round(Math.random()*2147483647)^Tc()&2147483647)+"."+b;g.from_cookie=j}g.dh=c;g.hid=o&&M.gaGlobal.hid?M.gaGlobal.hid:Math.round(Math.random()*2147483647);return M.gaGlobal=g}
function Tc(){var a=K.cookie?K.cookie:"",b=M.history.length,c,d=[L.appName,L.version,L.language?L.language:L.browserLanguage,L.platform,L.userAgent,L.javaEnabled()?1:0].join("");if(M.screen)d+=M.screen.width+"x"+M.screen.height+M.screen.colorDepth;else if(M.java){c=java.awt.Toolkit.getDefaultToolkit().getScreenSize();d+=c.screen.width+"x"+c.screen.height}d+=a;d+=K.referrer?K.referrer:"";for(a=d.length;b>0;)d+=b--^a++;return Uc(d)}
function Uc(a){var b=1,c=0,d;if(!(a==undefined||a=="")){b=0;for(d=a.length-1;d>=0;d--){c=a.charCodeAt(d);b=(b<<6&268435455)+c+(c<<14);c=b&266338304;b=c!=0?b^c>>21:b}}return b}function Sc(a){if(!a||a==""||a=="none")return 1;if("auto"==a){a=K.domain;if("www."==a.substring(0,4))a=a.substring(4,a.length)}return Uc(a.toLowerCase())};var N=function(){this.defaultBucket=[];this.layers={};for(var a=0,b=arguments.length;a<b;++a)this.layers[arguments[a]]=""},Vc=function(a){for(var b=new N,c=0,d=a.defaultBucket.length;c<d;++c)b.defaultBucket.push(a.defaultBucket[c]);C(a.layers,q(N.prototype.k,b));return b};N.prototype.k=function(a,b){this.layers[b]=a};N.prototype.N=function(a,b){if(a=="")return"";if(!b){this.defaultBucket.push(a);return a}if(this.layers.hasOwnProperty(b))return this.layers[b]=a;return""};
N.prototype.b=function(a,b,c){if(this.A(c)&&!(Math.random()<1.0E-4)&&Math.random()<b){b=Math.floor(Math.random()*a.length);return this.N(a[b],c)}return""};N.prototype.A=function(a){if(!a)return h;return this.layers.hasOwnProperty(a)&&this.layers[a]==""};N.prototype.c=function(a){if(this.layers.hasOwnProperty(a))return this.layers[a];return""};N.prototype.geil=N.prototype.c;
N.prototype.z=function(){var a=[],b=function(c){c!=""&&a.push(c)};C(this.layers,b);if(this.defaultBucket.length>0&&a.length>0)return this.defaultBucket.join(",")+","+a.join(",");return this.defaultBucket.join(",")+a.join(",")};var Xc=function(a){this.a=this.S=a;Wc(this)},Yc={};Yc.google_persistent_state=h;Yc.google_persistent_state_async=h;
var Zc={},O=function(a){a=a&&Yc[a]?a:G?"google_persistent_state_async":"google_persistent_state";if(Zc[a])return Zc[a];if(a=="google_persistent_state_async")var b=H,c={};else c=b=H;var d=b[a];if(typeof d!="object"||typeof d.S!="object")return b[a]=Zc[a]=new Xc(c);return Zc[a]=d},Wc=function(a){P(a,1,j);P(a,2,j);P(a,3,i);P(a,4,0);P(a,5,0);P(a,6,0);P(a,7,(new Date).getTime());P(a,8,{});P(a,9,{});P(a,10,{});P(a,11,[]);P(a,12,0)},$c=function(a){switch(a){case 1:return"google_new_domain_enabled";case 2:return"google_new_domain_checked";
case 3:return"google_exp_persistent";case 4:return"google_num_sdo_slots";case 5:return"google_num_0ad_slots";case 6:return"google_num_ad_slots";case 7:return"google_correlator";case 8:return"google_prev_ad_formats_by_region";case 9:return"google_prev_ad_slotnames_by_region";case 10:return"google_num_slots_by_channel";case 11:return"google_viewed_host_channels";case 12:return"google_num_slot_to_show"}},T=function(a,b){var c=$c(b);return c=a.S[c]},U=function(a,b,c){return a.S[$c(b)]=c},P=function(a,
b,c){a=a.S;b=$c(b);if(a[b]===undefined)return a[b]=c;return a[b]},ad=function(a){if(T(a,1))return h;return U(a,1,!!window.google_new_domain_enabled)},bd=function(a,b){return U(a,3,b)};var cd,dd,V=function(){if(cd)return cd;var a=O(),b=T(a,3);if(nb(b,N))return cd=bd(a,new N(1,2,3,4));return cd=b},ed=function(){dd||(dd=Vc(V()));return dd},fd={CONTROL:"33895100",LOADER:"33895101",RELEASE_CANDIDATE_LOADER:"33895150",BLOCKING_LOADER:"33895151",NO_LOADER:"33895152",NO_LOADER_NO_EXPAND:"33895153"},gd={ASWIFT_LOADER:"33895131",BLOCKING_LOADER:"33895132"};var W=function(){};W.prototype.serialize=function(a){var b=[];this.h(a,b);return b.join("")};W.prototype.h=function(a,b){switch(typeof a){case "string":this.r(a,b);break;case "number":this.L(a,b);break;case "boolean":b.push(a);break;case "undefined":b.push("null");break;case "object":if(a==i){b.push("null");break}if(n(a)){this.K(a,b);break}this.M(a,b);break;case "function":break;default:throw Error("Unknown type: "+typeof a);}};
var hd={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},id=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;W.prototype.r=function(a,b){b.push('"',a.replace(id,function(c){if(c in hd)return hd[c];var d=c.charCodeAt(0),e="\\u";if(d<16)e+="000";else if(d<256)e+="00";else if(d<4096)e+="0";return hd[c]=e+d.toString(16)}),'"')};W.prototype.L=function(a,b){b.push(isFinite(a)&&!isNaN(a)?a:"null")};
W.prototype.K=function(a,b){var c=a.length;b.push("[");for(var d="",e=0;e<c;e++){b.push(d);this.h(a[e],b);d=","}b.push("]")};W.prototype.M=function(a,b){b.push("{");var c="";for(var d in a)if(a.hasOwnProperty(d)){var e=a[d];if(typeof e!="function"){b.push(c);this.r(d,b);b.push(":");this.h(e,b);c=","}}b.push("}")};var jd=["google_ad_block","google_ad_channel","google_ad_client","google_ad_format","google_ad_height","google_ad_host","google_ad_host_channel","google_ad_host_tier_id","google_ad_output","google_ad_override","google_ad_region","google_ad_section","google_ad_slot","google_ad_type","google_ad_width","google_adtest","google_allow_expandable_ads","google_alternate_ad_url","google_alternate_color","google_analytics_domain_name","google_analytics_uacct","google_bid","google_city","google_color_bg","google_color_border",
"google_color_line","google_color_link","google_color_text","google_color_url","google_container_id","google_contents","google_country","google_cpm","google_ctr_threshold","google_cust_age","google_cust_ch","google_cust_gender","google_cust_id","google_cust_interests","google_cust_job","google_cust_l","google_cust_lh","google_cust_u_url","google_disable_video_autoplay","google_ed","google_eids","google_enable_osd","google_encoding","google_font_face","google_font_size","google_frame_id","google_gl",
"google_hints","google_image_size","google_kw","google_kw_type","google_language","google_max_num_ads","google_max_radlink_len","google_num_radlinks","google_num_radlinks_per_unit","google_num_slots_to_rotate","google_only_ads_with_video","google_only_pyv_ads","google_override_format","google_page_url","google_referrer_url","google_region","google_reuse_colors","google_rl_dest_url","google_rl_filtering","google_rl_mode","google_rt","google_safe","google_skip","google_tag_info","google_targeting",
"google_ui_features","google_ui_version","google_video_doc_id","google_video_product_type","google_with_pyv_ads"],kd=function(a){for(var b=[],c=0,d=jd.length;c<d;c++){var e=jd[c];if(a[e]!=i){var f;try{f=(new W).serialize(a[e])}catch(g){}f&&b.push(e,"=",f,";")}}return b.join("")},ld=function(a){for(var b=0,c=jd.length;b<c;b++){var d=jd[b];a[d]=i}};var md=function(a){var b="google_unique_id";if(a[b])++a[b];else a[b]=1;return a[b]},nd=function(){var a="script";return["<",a,' src="http://',v(),,'/pagead/js/r20100616/r20100614/show_ads_impl.js"></',a,">"].join("")},od=function(){if(window.google_disable_async)return j;return hb.domain==B.location.hostname&&(z||tc||sc&&!!window.document.body)&&
!window.google_container_id&&(!window.google_ad_output||window.google_ad_output=="html")},pd=function(a){var b="script",c={allowtransparency:'"true"',frameborder:'"'+(a.google_ad_frameborder||0)+'"',height:'"'+a.google_ad_height+'"',hspace:'"0"',marginwidth:'"0"',marginheight:'"0"',name:'"google_ads_frame"',scrolling:'"no"',vspace:'"0"',width:'"'+a.google_ad_width+'"'};a.google_ad_frameborder=i;var d=uc(a,c);c=kd(a);ld(a);var e=k,f=(new Date).getTime(),g=["<!doctype html><html><body><",b,">",c,"google_unique_id=",
a.google_unique_id,';google_async_iframe_id="',d,'";google_start_time=',e,";google_bpp=",f>e?f-e:1,";</",b,">",nd(),"</body></html>"].join("");hc(function(){ic();vc(a,d,g)})},qd=function(){var a=fd;a=[a.RELEASE_CANDIDATE_LOADER,a.BLOCKING_LOADER,a.NO_LOADER,a.NO_LOADER_NO_EXPAND];V().b(a,Ib,3)},rd=function(){if(G){var a=O("google_persistent_state"),b=T(a,3);a=3;if("geil"in b){b=b.geil(a);V().b([b],1,a)}}},sd=function(){var a=V();return"geil"in a?a.geil(3):""},td=function(){var a=sd(),b=fd;return a==
b.RELEASE_CANDIDATE_LOADER},ud=function(){var a=sd(),b=fd;return a==b.BLOCKING_LOADER},vd=function(){var a=sd(),b=fd;return a==b.NO_LOADER_NO_EXPAND},wd=function(){if(Qb){G&&rd();var a=gd,b=0;b=G?a.ASWIFT_LOADER:a.BLOCKING_LOADER;V().b([b],1,4)}};var xd={google:1,googlegroups:1,gmail:1,googlemail:1,googleimages:1,googleprint:1};function yd(a){a=a.google_page_location||a.google_page_url;if(!a)return j;a=a.toString();if(a.indexOf("http://")==0)a=a.substring(7,a.length);else if(a.indexOf("https://")==0)a=a.substring(8,a.length);var b=a.indexOf("/");if(b==-1)b=a.length;a=a.substring(0,b);a=a.split(".");b=j;if(a.length>=3)b=a[a.length-3]in xd;if(a.length>=2)b=b||a[a.length-2]in xd;return b}
function zd(a,b,c){var d=O();if(yd(a))return!U(d,2,h);if(!T(d,2)){a=Math.random();if(a<=c){c="http://"+ha()+"/pagead/test_domain.js";a="script";b.write("<"+a+' src="'+c+'"></'+a+">");return U(d,2,h)}}return j}var Ad=function(a){var b=V();if(b.c(1)=="44901228")return j;if(b.c(1)=="44901229"||Math.random()<Hb)return 1==Math.floor(a/2)%2;return j};
function Bd(a,b){var c=O();if(!yd(a)&&ad(c))return Ad(b)?"http://"+u("","googleads2.g.doubleclick.net"):"http://"+ha();return"http://"+ia()};var X=function(a){this.e=a;this.n=[];this.m=0;this.f=[];this.F=0;this.i=[];this.C=j;this.s=this.t="";this.B=j};X.prototype.H=function(a,b){var c=this.e[b],d=this.n;this.e[b]=function(e){if(e&&e.length>0){var f=e.length>1?e[1].url:i;d.push([a,ra(e[0].url),f])}c(e)}};X.prototype.G=function(){this.m++};X.prototype.I=function(a){this.f.push(a)};var Cd="http://"+v()+"/pagead/osd.js";X.prototype.D=function(){if(!this.C){rb(H);pb(Cd);this.C=h}};
X.prototype.u=function(a){if(this.m>0)for(var b=this.e.document.getElementsByTagName("iframe"),c=this.B?"google_ads_iframe_":"google_ads_frame",d=0;d<b.length;d++){var e=b.item(d);e.src&&e.name&&e.name.indexOf(c)==0&&a(e,e.src)}};
X.prototype.v=function(a){var b=this.n;if(b.length>0)for(var c=this.e.document.getElementsByTagName("a"),d=0;d<c.length;d++)for(var e=0;e<b.length;e++)if(c.item(d).href==b[e][1]){var f=c.item(d).parentNode;if(b[e][2])for(var g=f,o=0;o<4;o++){if(g.innerHTML.indexOf(b[e][2])>0){f=g;break}g=g.parentNode}a(f,b[e][0]);b.splice(e,1);break}};X.prototype.w=function(a){for(var b=0;b<this.f.length;b++){var c=this.f[b],d=Dd(c);if(d)(d=this.e.document.getElementById("google_ads_div_"+d))&&a(d,c)}};
X.prototype.j=function(a){this.v(a);this.w(a);this.u(a)};X.prototype.setupOsd=function(a,b,c){this.F=a;this.t=b;this.s=c};X.prototype.getOsdMode=function(){return this.F};X.prototype.getEid=function(){return this.t};X.prototype.getCorrelator=function(){return this.s};X.prototype.l=function(){return this.n.length+this.m+this.f.length};X.prototype.setValidOutputTypes=function(a){this.i=a};
X.prototype.registerAdBlockByType=function(a,b,c){if(this.i.length>0){for(var d=0;d<this.i.length;d++)if(this.i[d]==a){this.B=c;if(a=="js")this.H(b,"google_ad_request_done");else if(a=="html")this.G();else a=="json_html"&&this.I(b)}this.D()}};var Dd=function(a){if((a=a.match(/[&\?](?:slotname)=([^&]+)/))&&a.length==2)return a[1];return""},Ed=function(){var a=H;a.__google_ad_urls||(a.__google_ad_urls=new X(a));return a.__google_ad_urls};r("Goog_AdSense_getAdAdapterInstance",Ed);
r("Goog_AdSense_OsdAdapter",X);r("Goog_AdSense_OsdAdapter.prototype.numBlocks",X.prototype.l);r("Goog_AdSense_OsdAdapter.prototype.findBlocks",X.prototype.j);r("Goog_AdSense_OsdAdapter.prototype.getOsdMode",X.prototype.getOsdMode);r("Goog_AdSense_OsdAdapter.prototype.getEid",X.prototype.getEid);r("Goog_AdSense_OsdAdapter.prototype.getCorrelator",X.prototype.getCorrelator);r("Goog_AdSense_OsdAdapter.prototype.setValidOutputTypes",X.prototype.setValidOutputTypes);
r("Goog_AdSense_OsdAdapter.prototype.setupOsd",X.prototype.setupOsd);r("Goog_AdSense_OsdAdapter.prototype.registerAdBlockByType",X.prototype.registerAdBlockByType);var Fd=function(a,b){var c=a.nodeType==9?a:a.ownerDocument||a.document;if(c.defaultView&&c.defaultView.getComputedStyle)if(c=c.defaultView.getComputedStyle(a,""))return c[b];return i},Gd=function(a,b){return Fd(a,b)||(a.currentStyle?a.currentStyle[b]:i)||a.style[b]},Hd=function(a,b,c,d){if(typeof d=="number")d=(b?Math.round(d):d)+"px";c.style[a]=d};ea(Hd,"height",h);ea(Hd,"width",h);
var Id=function(a,b,c,d){if(/^\d+px?$/.test(b))return parseInt(b,10);else{var e=a.style[c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=e;a.runtimeStyle[c]=f;return b}},Jd=function(a){var b=a.nodeType==9?a:a.ownerDocument||a.document,c="";if(b.body.createTextRange){c=b.body.createTextRange();c.moveToElementText(a);c=c.queryCommandValue("FontName")}if(!c){c=Gd(a,"fontFamily");if(Ma&&Va)c=c.replace(/ \[[^\]]*\]/,"")}a=c.split(",");if(a.length>1)c=a[0];
return sa(c,"\"'")},Kd=/[^\d]+$/,Ld=function(a){return(a=a.match(Kd))&&a[0]||i},Md={cm:1,"in":1,mm:1,pc:1,pt:1},Nd={em:1,ex:1},Od=function(a){var b=Gd(a,"fontSize"),c=Ld(b);if(b&&"px"==c)return parseInt(b,10);if(z)if(c in Md)return Id(a,b,"left","pixelLeft");else if(a.parentNode&&a.parentNode.nodeType==1&&c in Nd){a=a.parentNode;c=Gd(a,"fontSize");return Id(a,b==c?"1em":b,"left","pixelLeft")}c=eb("span",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});
gb(a,c);b=c.offsetHeight;c&&c.parentNode&&c.parentNode.removeChild(c);return b};var Y={};function Pd(a){if(a==1)return h;return!Y[a]}function Qd(a,b){if(!(!a||a==""))if(b==1)if(Y[b])Y[b]+=","+a;else Y[b]=a;else Y[b]=a}function Rd(){var a=[];C(Y,function(b){a.push(b)});return a.join(",")}function Sd(a,b){if(n(a))for(var c=0;c<a.length;c++)p(a[c])&&Qd(a[c],b)}var Td=j;
function Ud(a,b){var c="script";Td=Vd(a,b);if(!Td)a.google_allow_expandable_ads=j;var d=!Wd();Td&&d&&b.write("<"+c+' src="http://'+v()+'/pagead/expansion_embed.js"></'+c+">");var e=zd(a,b,Jb);(d=d||e)&&tb("msie")&&!window.opera?b.write("<"+c+' src="http://'+v()+'/pagead/render_ads.js"></'+c+">"):b.write("<"+c+'>google_protectAndRun("ads_core.google_render_ad", google_handleError, google_render_ad);</'+c+">")}var Z=function(a){a=a.google_unique_id;if(typeof a=="number")return a;return 0};
function $(a){return a!=i?'"'+a+'"':'""'}var Xd=function(a,b){var c=b.slice(-1),d=c=="?"||c=="#"?"":"&",e=[b];c=function(f,g){if(f||f===0||f===j){if(typeof f=="boolean")f=f?1:0;ob(e,d,g,"=",D(f));d="&"}};C(a,c);return e.join("")};function Yd(){var a=z&&A("6"),b=Na&&A("1.8.1"),c=Oa&&A("525");if(Ua&&(a||b||c))return h;else if(Ta&&(c||b))return h;else if(Va&&b)return h;return j}
function Wd(){return(typeof ExpandableAdSlotFactory=="function"||typeof ExpandableAdSlotFactory=="object")&&typeof ExpandableAdSlotFactory.createIframe=="function"}function Vd(a,b){if(a.google_allow_expandable_ads===j||!b.body||a.google_ad_output!="html"||yc(a,b)||!Zd(a)||isNaN(a.google_ad_height)||isNaN(a.google_ad_width)||!Yd()||vd()&&od()||b.domain!=a.location.hostname)return j;return h}function Zd(a){var b=a.google_ad_format;if(E(b))return j;if(wb(a)&&b!="468x15_0ads_al")return j;return h}
function $d(){var a;if(B.google_ad_output=="html"&&!(wb(B)||E(B.google_ad_format))&&Pd(0)){a=["6083035","6083034"];a=xb(a,Ob);Qd(a,0)}return a=="6083035"}function ae(a,b){if(!(G?Z(a)==1:!Z(a))||E(a.google_ad_format))return"";var c="",d=wb(a);if(b=="html"||d)c=xb(["36815001","36815002"],Kb);if(c==""&&(b=="js"||d))c=xb(["36815003","36815004"],Lb);if(c==""&&(b=="html"||b=="js"))c=xb(["36813005","36813006"],Mb);return c}
function be(){if(G)return"";var a=Ed(),b=window.google_enable_osd,c;if(b===h){c="36813006";ce(c,a)}else if(b!==j&&Pd(0)){c=a.getEid();if(c=="")(c=ae(window,String(window.google_ad_output||"")))&&ce(c,a);else if(c!="36815001"&&c!="36815002"&&c!="36815003"&&c!="36815004"&&c!="36813005"&&c!="36813006")c=""}if(c){Qd(c,0);return c}return""}
function ce(a,b){var c=b.getOsdMode(),d=[];switch(a){case "36815004":c=1;d=["js"];break;case "36815002":c=1;d=["html"];break;case "36813006":c=0;d=["html","js"];break}d.length>0&&b.setValidOutputTypes(d);d=O();b.setupOsd(c,a,T(d,7).toString())}
function de(a,b,c,d){G||md(a);var e=Z(a);c=Xd({ifi:e},c);c=c.substring(0,1991);c=c.replace(/%\w?$/,"");var f="script";if((a.google_ad_output=="js"||a.google_ad_output=="json_html")&&(a.google_ad_request_done||a.google_radlink_request_done))b.write("<"+f+' language="JavaScript1.1" src='+$(aa(c))+"></"+f+">");else if(a.google_ad_output=="html")if(Td&&Wd()){b=a.google_container_id||d||i;a["google_expandable_ad_slot"+e]=ExpandableAdSlotFactory.createIframe("google_ads_frame"+e,aa(c),a.google_ad_width,
a.google_ad_height,b)}else{e='<iframe name="google_ads_frame" width='+$(String(a.google_ad_width))+" height="+$(String(a.google_ad_height))+" frameborder="+$(String(a.google_ad_frameborder==i?"":a.google_ad_frameborder))+" src="+$(aa(c))+' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no"></iframe>';a.google_container_id?ee(a.google_container_id,b,e):b.write(e)}return c}function fe(a){Nc(a)}
function ge(a){var b=ed().c(2)=="44901217";if(!he(b))return j;b=$d();var c=Bd(window,Z(window));a=ie(a);b=c+je(a.google_ad_format,b);window.google_ad_url=Xd(a,b);return h}
var ne=function(a){a.dt=k;if(G&&window.google_bpp)a.bpp=window.google_bpp;a.shv="r20100616";var b=O(),c=T(b,8),d=window.google_ad_section,e=window.google_ad_format,f=window.google_ad_slot;if(c[d])E(e)||(a.prev_fmts=c[d]);var g=T(b,9);if(g[d])a.prev_slotnames=g[d].toLowerCase();if(e){if(!E(e))if(c[d])c[d]+=","+e;else c[d]=e}else if(f)if(g[d])g[d]+=","+f;else g[d]=f;a.correlator=T(b,7);if(T(b,2)&&!ad(b))a.dblk=1;if(window.google_ad_channel){c=T(b,10);d="";e=window.google_ad_channel.split(ke);
for(f=0;f<e.length;f++){g=e[f];if(c[g])d+=g+"+";else c[g]=h}a.pv_ch=d}if(window.google_ad_host_channel){b=le(window.google_ad_host_channel,T(b,11));a.pv_h_ch=b}if(Pb)a.jscb=1;if(Rb)a.jscd=1;a.frm=window.google_iframing;a.adk=me();b=Rc();a.ga_vid=b.vid;a.ga_sid=b.sid;a.ga_hid=b.hid;a.ga_fc=b.from_cookie;a.ga_wpids=window.google_analytics_uacct},oe=function(a){var b=h;if(b=zb(b)){a.biw=b.width;a.bih=b.height}},me=function(){var a=[];ob(a,B.google_ad_slot,B.google_ad_format,B.google_ad_type,B.google_ad_width,
B.google_ad_height);if(jb){var b=Cb(jb);b&&a.push(b)}b=0;if(a)b=Ab(a.join(":"));return b.toString()},pe=function(a){var b=Bb(H);if(b!=0)a.ifk=b.toString()};function le(a,b){for(var c=a.split("|"),d=-1,e=[],f=0;f<c.length;f++){var g=c[f].split(ke);b[f]||(b[f]={});for(var o="",Q=0;Q<g.length;Q++){var I=g[Q];if(I!="")if(b[f][I])o+="+"+I;else b[f][I]=h}o=o.slice(1);e[f]=o;if(o!="")d=f}c="";if(d>-1){for(f=0;f<d;f++)c+=e[f]+"|";c+=e[d]}return c}
function qe(){var a=["44901228","44901229"];V().b(a,Gb,1);a=["44901218","44901217"];V().b(a,Nb,2)}var re=function(){ac()!=H&&Xb(4)};
function se(){re();(G?Z(window)==1:!Z(window))&&qe();var a=be(),b=i,c="",d=Math.random()<0.01;if(d)if(b=window.google_async_iframe_id)b=H.document.getElementById(b);else{c="google_temp_span";b=te(c)}d=ge(b);b&&b.id==c&&(b&&b.parentNode?b.parentNode.removeChild(b):i);if(d){c=de(window,document,window.google_ad_url);if(a)Ed().registerAdBlockByType(String(window.google_ad_output||""),c,j);fe(window)}wc(window)}
var ue=function(a){C(Eb,function(b,c){a[b]=window[c]});C(Db,function(b,c){a[b]=window[c]});C(Fb,function(b,c){a[b]=window[c]})},ve=function(a){Sd(window.google_eids,1);a.eid=Rd();var b=ed().z();if(a.eid.length>0&&b.length>0)a.eid+=",";a.eid+=b};function we(a,b,c,d){a=Vb(a,b,c,d);Ud(window,document);return a}function xe(){Mc()}
function ye(a){var b={};a=a.split("?");a=a[a.length-1].split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");if(d[0])try{b[d[0].toLowerCase()]=d.length>1?window.decodeURIComponent?decodeURIComponent(d[1].replace(/\+/g," ")):unescape(d[1]):""}catch(e){}}return b}function ze(){var a=window,b=ye(document.URL);if(b.google_ad_override){a.google_ad_override=b.google_ad_override;a.google_adtest="on"}}
function ee(a,b,c){if(a)if((a=b.getElementById(a))&&c&&c.length!=""){a.style.visibility="visible";a.innerHTML=c}}
var je=function(a,b){var c;return c=E(a)?"/pagead/sdo?":b?"/pagead/render_iframe_ads.html#":"/pagead/ads?"},Ae=function(a,b){b.dff=Jd(a).toLowerCase();b.dfs=Od(a)},Be=function(a){a.ref=window.google_referrer_url;a.loc=window.google_page_location},he=function(a){var b=O(),c=T(b,8),d=T(b,9),e=window.google_ad_section;if(E(window.google_ad_format)){if(U(b,4,T(b,4)+1)>4&&!a)return j}else if(wb(window)){if(U(b,5,T(b,5)+1)>3&&!a)return j}else{var f=U(b,6,T(b,6)+1);if(window.google_num_slots_to_rotate){Xb(1);
c[e]="";d[e]="";T(b,12)||U(b,12,(new Date).getTime()%window.google_num_slots_to_rotate+1);if(T(b,12)!=f)return j}else if(!a&&f>6&&e=="")return j}return h},ie=function(a){var b={};ue(b);ne(b);yb(b);a&&Ae(a,b);oe(b);pe(b);ve(b);Be(b);b.fu=Wb;return b},te=function(a){var b=window.google_container_id,c=b&&$a(b)||$a(a);if(!c&&!b&&a){document.write("<span id="+a+"></span>");c=$a(a)}return c},ke=/[+, ]/;window.google_render_ad=se;var Ce=function(){ze();wd();var a=window.google_start_time;if(typeof a=="number"){k=a;window.google_start_time=i}Tb("show_ads.google_init_globals",we,xe);Ud(window,document)},De=function(){window.google_start_time=k;document.write(nd())},Ee=function(){if(od()){md(window);pd(window)}else De()};function Fe(){if(Sb&&typeof B.alternateShowAds=="function")B.alternateShowAds.call(i);else if(Qb)Ce();else{Z(window)||qd();if(td())Ee();else ud()?De():Ce()}}Tb("show_ads.main",Vb,Fe);})()
;;//-- Google Analytics Urchin Module
//-- Copyright 2007 Google, All Rights Reserved.

//-- Urchin On Demand Settings ONLY
var _uacct="";			// set up the Urchin Account
var _userv=1;			// service mode (0=local,1=remote,2=both)

//-- UTM User Settings
var _ufsc=1;			// set client info flag (1=on|0=off)
var _udn="auto";		// (auto|none|domain) set the domain name for cookies
var _uhash="on";		// (on|off) unique domain hash for cookies
var _utimeout="1800";   	// set the inactive session timeout in seconds
var _ugifpath="/__utm.gif";	// set the web path to the __utm.gif file
var _utsp="|";			// transaction field separator
var _uflash=1;			// set flash version detect option (1=on|0=off)
var _utitle=1;			// set the document title detect option (1=on|0=off)
var _ulink=0;			// enable linker functionality (1=on|0=off)
var _uanchor=0;			// enable use of anchors for campaign (1=on|0=off)
var _utcp="/";			// the cookie path for tracking
var _usample=100;		// The sampling % of visitors to track (1-100).

//-- UTM Campaign Tracking Settings
var _uctm=1;			// set campaign tracking module (1=on|0=off)
var _ucto="15768000";		// set timeout in seconds (6 month default)
var _uccn="utm_campaign";	// name
var _ucmd="utm_medium";		// medium (cpc|cpm|link|email|organic)
var _ucsr="utm_source";		// source
var _uctr="utm_term";		// term/keyword
var _ucct="utm_content";	// content
var _ucid="utm_id";		// id number
var _ucno="utm_nooverride";	// don't override

//-- Auto/Organic Sources and Keywords
var _uOsr=new Array();
var _uOkw=new Array();
_uOsr[0]="google";	_uOkw[0]="q";
_uOsr[1]="yahoo";	_uOkw[1]="p";
_uOsr[2]="msn";		_uOkw[2]="q";
_uOsr[3]="aol";		_uOkw[3]="query";
_uOsr[4]="aol";		_uOkw[4]="encquery";
_uOsr[5]="lycos";	_uOkw[5]="query";
_uOsr[6]="ask";		_uOkw[6]="q";
_uOsr[7]="altavista";	_uOkw[7]="q";
_uOsr[8]="netscape";	_uOkw[8]="query";
_uOsr[9]="cnn";	_uOkw[9]="query";
_uOsr[10]="looksmart";	_uOkw[10]="qt";
_uOsr[11]="about";	_uOkw[11]="terms";
_uOsr[12]="mamma";	_uOkw[12]="query";
_uOsr[13]="alltheweb";	_uOkw[13]="q";
_uOsr[14]="gigablast";	_uOkw[14]="q";
_uOsr[15]="voila";	_uOkw[15]="rdata";
_uOsr[16]="virgilio";	_uOkw[16]="qs";
_uOsr[17]="live";	_uOkw[17]="q";
_uOsr[18]="baidu";	_uOkw[18]="wd";
_uOsr[19]="alice";	_uOkw[19]="qs";
_uOsr[20]="yandex";	_uOkw[20]="text";
_uOsr[21]="najdi";	_uOkw[21]="q";
_uOsr[22]="aol";	_uOkw[22]="q";
_uOsr[23]="club-internet"; _uOkw[23]="query";
_uOsr[24]="mama";	_uOkw[24]="query";
_uOsr[25]="seznam";	_uOkw[25]="q";
_uOsr[26]="search";	_uOkw[26]="q";
_uOsr[27]="wp";	_uOkw[27]="szukaj";
_uOsr[28]="onet";	_uOkw[28]="qt";
_uOsr[29]="netsprint";	_uOkw[29]="q";
_uOsr[30]="google.interia";	_uOkw[30]="q";
_uOsr[31]="szukacz";	_uOkw[31]="q";
_uOsr[32]="yam";	_uOkw[32]="k";
_uOsr[33]="pchome";	_uOkw[33]="q";
_uOsr[34]="kvasir";	_uOkw[34]="searchExpr";
_uOsr[35]="sesam";	_uOkw[35]="q";
_uOsr[36]="ozu"; _uOkw[36]="q";
_uOsr[37]="terra"; _uOkw[37]="query";
_uOsr[38]="nostrum"; _uOkw[38]="query";
_uOsr[39]="mynet"; _uOkw[39]="q";
_uOsr[40]="ekolay"; _uOkw[40]="q";
_uOsr[41]="search.ilse"; _uOkw[41]="search_for";
_uOsr[42]="bing"; _uOkw[42]="q";

//-- Auto/Organic Keywords to Ignore
var _uOno=new Array();
//_uOno[0]="urchin";
//_uOno[1]="urchin.com";
//_uOno[2]="www.urchin.com";

//-- Referral domains to Ignore
var _uRno=new Array();
//_uRno[0]=".urchin.com";

//-- **** Don't modify below this point ***
var _uff,_udh,_udt,_ubl=0,_udo="",_uu,_ufns=0,_uns=0,_ur="-",_ufno=0,_ust=0,_ubd=document,_udl=_ubd.location,_udlh="",_uwv="1.3";
var _ugifpath2="http://www.google-analytics.com/__utm.gif";
if (_udl.hash) _udlh=_udl.href.substring(_udl.href.indexOf('#'));
if (_udl.protocol=="https:") _ugifpath2="https://ssl.google-analytics.com/__utm.gif";
if (!_utcp || _utcp=="") _utcp="/";
function urchinTracker(page) {
 if (_udl.protocol=="file:") return;
 if (_uff && (!page || page=="")) return;
 var a,b,c,xx,v,z,k,x="",s="",f=0,nv=0;
 var nx=" expires="+_uNx()+";";
 var dc=_ubd.cookie;
 _udh=_uDomain();
 if (!_uVG()) return;
 _uu=Math.round(Math.random()*2147483647);
 _udt=new Date();
 _ust=Math.round(_udt.getTime()/1000);
 a=dc.indexOf("__utma="+_udh+".");
 b=dc.indexOf("__utmb="+_udh);
 c=dc.indexOf("__utmc="+_udh);
 if (_udn && _udn!="") { _udo=" domain="+_udn+";"; }
 if (_utimeout && _utimeout!="") {
  x=new Date(_udt.getTime()+(_utimeout*1000));
  x=" expires="+x.toGMTString()+";";
 }
 if (_ulink) {
  if (_uanchor && _udlh && _udlh!="") s=_udlh+"&";
  s+=_udl.search;
  if(s && s!="" && s.indexOf("__utma=")>=0) {
   if (!(_uIN(a=_uGC(s,"__utma=","&")))) a="-";
   if (!(_uIN(b=_uGC(s,"__utmb=","&")))) b="-";
   if (!(_uIN(c=_uGC(s,"__utmc=","&")))) c="-";
   v=_uGC(s,"__utmv=","&");
   z=_uGC(s,"__utmz=","&");
   k=_uGC(s,"__utmk=","&");
   xx=_uGC(s,"__utmx=","&");
   if ((k*1) != ((_uHash(a+b+c+xx+z+v)*1)+(_udh*1))) {_ubl=1;a="-";b="-";c="-";xx="-";z="-";v="-";}
   if (a!="-" && b!="-" && c!="-") f=1;
   else if(a!="-") f=2;
  }
 }
 if(f==1) {
  _ubd.cookie="__utma="+a+"; path="+_utcp+";"+nx+_udo;
  _ubd.cookie="__utmb="+b+"; path="+_utcp+";"+x+_udo;
  _ubd.cookie="__utmc="+c+"; path="+_utcp+";"+_udo;
 } else if (f==2) {
  a=_uFixA(s,"&",_ust);
  _ubd.cookie="__utma="+a+"; path="+_utcp+";"+nx+_udo;
  _ubd.cookie="__utmb="+_udh+"; path="+_utcp+";"+x+_udo;
  _ubd.cookie="__utmc="+_udh+"; path="+_utcp+";"+_udo;
  _ufns=1;
 } else if (a>=0 && b>=0 && c>=0) {
   b = _uGC(dc,"__utmb="+_udh,";");
   b = ("-" == b) ? _udh : b;  
  _ubd.cookie="__utmb="+b+"; path="+_utcp+";"+x+_udo;
 } else {
  if (a>=0) a=_uFixA(_ubd.cookie,";",_ust);
  else {
   a=_udh+"."+_uu+"."+_ust+"."+_ust+"."+_ust+".1";
   nv=1;
  }
  _ubd.cookie="__utma="+a+"; path="+_utcp+";"+nx+_udo;
  _ubd.cookie="__utmb="+_udh+"; path="+_utcp+";"+x+_udo;
  _ubd.cookie="__utmc="+_udh+"; path="+_utcp+";"+_udo;
  _ufns=1;
 }
 if (_ulink && xx && xx!="" && xx!="-") {
   xx=_uUES(xx);
   if (xx.indexOf(";")==-1) _ubd.cookie="__utmx="+xx+"; path="+_utcp+";"+nx+_udo;
 }
 if (_ulink && v && v!="" && v!="-") {
  v=_uUES(v);
  if (v.indexOf(";")==-1) _ubd.cookie="__utmv="+v+"; path="+_utcp+";"+nx+_udo;
 }
 var wc=window;
 var c=_ubd.cookie;
 if(wc && wc.gaGlobal && wc.gaGlobal.dh==_udh){
  var g=wc.gaGlobal;
  var ua=c.split("__utma="+_udh+".")[1].split(";")[0].split(".");
  if(g.sid)ua[3]=g.sid;
  if(nv>0){
   ua[2]=ua[3];
   if(g.vid){
    var v=g.vid.split(".");
    ua[0]=v[0];
    ua[1]=v[1];
   }
  }
  _ubd.cookie="__utma="+_udh+"."+ua.join(".")+"; path="+_utcp+";"+nx+_udo;
 }
 _uInfo(page);
 _ufns=0;
 _ufno=0;
 if (!page || page=="") _uff=1;
}
function _uGH() {
 var hid;
 var wc=window;
 if (wc && wc.gaGlobal && wc.gaGlobal.hid) {
  hid=wc.gaGlobal.hid;
 } else {
  hid=Math.round(Math.random()*0x7fffffff);
  if (!wc.gaGlobal) wc.gaGlobal={};
  wc.gaGlobal.hid=hid;
 }
 return hid;
}
function _uInfo(page) {
 var p,s="",dm="",pg=_udl.pathname+_udl.search;
 if (page && page!="") pg=_uES(page,1);
 _ur=_ubd.referrer;
 if (!_ur || _ur=="") { _ur="-"; }
 else {
  dm=_ubd.domain;
  if(_utcp && _utcp!="/") dm+=_utcp;
  p=_ur.indexOf(dm);
  if ((p>=0) && (p<=8)) { _ur="0"; }
  if (_ur.indexOf("[")==0 && _ur.lastIndexOf("]")==(_ur.length-1)) { _ur="-"; }
 }
 s+="&utmn="+_uu;
 if (_ufsc) s+=_uBInfo();
 if (_uctm) s+=_uCInfo();
 if (_utitle && _ubd.title && _ubd.title!="") s+="&utmdt="+_uES(_ubd.title);
 if (_udl.hostname && _udl.hostname!="") s+="&utmhn="+_uES(_udl.hostname);
 if (_usample && _usample != 100) s+="&utmsp="+_uES(_usample);
 s+="&utmhid="+_uGH();
 s+="&utmr="+_ur;
 s+="&utmp="+pg;
 if ((_userv==0 || _userv==2) && _uSP()) {
  var i=new Image(1,1);
  i.src=_ugifpath+"?"+"utmwv="+_uwv+s;
  i.onload=function() { _uVoid(); }
 }
 if ((_userv==1 || _userv==2) && _uSP()) {
  var i2=new Image(1,1);
  i2.src=_ugifpath2+"?"+"utmwv="+_uwv+s+"&utmac="+_uacct+"&utmcc="+_uGCS();
  i2.onload=function() { _uVoid(); }
 }
 return;
}
function _uVoid() { return; }
function _uCInfo() {
 if (!_ucto || _ucto=="") { _ucto="15768000"; }
 if (!_uVG()) return;
 var c="",t="-",t2="-",t3="-",o=0,cs=0,cn=0,i=0,z="-",s="";
 if (_uanchor && _udlh && _udlh!="") s=_udlh+"&";
 s+=_udl.search;
 var x=new Date(_udt.getTime()+(_ucto*1000));
 var dc=_ubd.cookie;
 x=" expires="+x.toGMTString()+";";
 if (_ulink && !_ubl) {
  z=_uUES(_uGC(s,"__utmz=","&"));
  if (z!="-" && z.indexOf(";")==-1) { _ubd.cookie="__utmz="+z+"; path="+_utcp+";"+x+_udo; return ""; }
 }
 z=dc.indexOf("__utmz="+_udh+".");
 if (z>-1) { z=_uGC(dc,"__utmz="+_udh+".",";"); }
 else { z="-"; }
 t=_uGC(s,_ucid+"=","&");
 t2=_uGC(s,_ucsr+"=","&");
 t3=_uGC(s,"gclid=","&");
 if ((t!="-" && t!="") || (t2!="-" && t2!="") || (t3!="-" && t3!="")) {
  if (t!="-" && t!="") c+="utmcid="+_uEC(t);
  if (t2!="-" && t2!="") { if (c != "") c+="|"; c+="utmcsr="+_uEC(t2); }
  if (t3!="-" && t3!="") { if (c != "") c+="|"; c+="utmgclid="+_uEC(t3); }
  t=_uGC(s,_uccn+"=","&");
  if (t!="-" && t!="") c+="|utmccn="+_uEC(t);
  else c+="|utmccn=(not+set)";
  t=_uGC(s,_ucmd+"=","&");
  if (t!="-" && t!="") c+="|utmcmd="+_uEC(t);
  else  c+="|utmcmd=(not+set)";
  t=_uGC(s,_uctr+"=","&");
  if (t!="-" && t!="") c+="|utmctr="+_uEC(t);
  else { t=_uOrg(1); if (t!="-" && t!="") c+="|utmctr="+_uEC(t); }
  t=_uGC(s,_ucct+"=","&");
  if (t!="-" && t!="") c+="|utmcct="+_uEC(t);
  t=_uGC(s,_ucno+"=","&");
  if (t=="1") o=1;
  if (z!="-" && o==1) return "";
 }
 if (c=="-" || c=="") { c=_uOrg(); if (z!="-" && _ufno==1)  return ""; }
 if (c=="-" || c=="") { if (_ufns==1)  c=_uRef(); if (z!="-" && _ufno==1)  return ""; }
 if (c=="-" || c=="") {
  if (z=="-" && _ufns==1) { c="utmccn=(direct)|utmcsr=(direct)|utmcmd=(none)"; }
  if (c=="-" || c=="") return "";
 }
 if (z!="-") {
  i=z.indexOf(".");
  if (i>-1) i=z.indexOf(".",i+1);
  if (i>-1) i=z.indexOf(".",i+1);
  if (i>-1) i=z.indexOf(".",i+1);
  t=z.substring(i+1,z.length);
  if (t.toLowerCase()==c.toLowerCase()) cs=1;
  t=z.substring(0,i);
  if ((i=t.lastIndexOf(".")) > -1) {
   t=t.substring(i+1,t.length);
   cn=(t*1);
  }
 }
 if (cs==0 || _ufns==1) {
  t=_uGC(dc,"__utma="+_udh+".",";");
  if ((i=t.lastIndexOf(".")) > 9) {
   _uns=t.substring(i+1,t.length);
   _uns=(_uns*1);
  }
  cn++;
  if (_uns==0) _uns=1;
  _ubd.cookie="__utmz="+_udh+"."+_ust+"."+_uns+"."+cn+"."+c+"; path="+_utcp+"; "+x+_udo;
 }
 if (cs==0 || _ufns==1) return "&utmcn=1";
 else return "&utmcr=1";
}
function _uRef() {
 if (_ur=="0" || _ur=="" || _ur=="-") return "";
 var i=0,h,k,n;
 if ((i=_ur.indexOf("://"))<0 || _uGCse()) return "";
 h=_ur.substring(i+3,_ur.length);
 if (h.indexOf("/") > -1) {
  k=h.substring(h.indexOf("/"),h.length);
  if (k.indexOf("?") > -1) k=k.substring(0,k.indexOf("?"));
  h=h.substring(0,h.indexOf("/"));
 }
 h=h.toLowerCase();
 n=h;
 if ((i=n.indexOf(":")) > -1) n=n.substring(0,i);
 for (var ii=0;ii<_uRno.length;ii++) {
  if ((i=n.indexOf(_uRno[ii].toLowerCase())) > -1 && n.length==(i+_uRno[ii].length)) { _ufno=1; break; }
 }
 if (h.indexOf("www.")==0) h=h.substring(4,h.length);
 return "utmccn=(referral)|utmcsr="+_uEC(h)+"|"+"utmcct="+_uEC(k)+"|utmcmd=referral";
}
function _uOrg(t) {
 if (_ur=="0" || _ur=="" || _ur=="-") return "";
 var i=0,h,k;
 if ((i=_ur.indexOf("://"))<0 || _uGCse()) return "";
 h=_ur.substring(i+3,_ur.length);
 if (h.indexOf("/") > -1) {
  h=h.substring(0,h.indexOf("/"));
 }
 for (var ii=0;ii<_uOsr.length;ii++) {
  if (h.toLowerCase().indexOf(_uOsr[ii].toLowerCase()) > -1) {
   if ((i=_ur.indexOf("?"+_uOkw[ii]+"=")) > -1 || (i=_ur.indexOf("&"+_uOkw[ii]+"=")) > -1) {
    k=_ur.substring(i+_uOkw[ii].length+2,_ur.length);
    if ((i=k.indexOf("&")) > -1) k=k.substring(0,i);
    for (var yy=0;yy<_uOno.length;yy++) {
     if (_uOno[yy].toLowerCase()==k.toLowerCase()) { _ufno=1; break; }
    }
    if (t) return _uEC(k);
    else return "utmccn=(organic)|utmcsr="+_uEC(_uOsr[ii])+"|"+"utmctr="+_uEC(k)+"|utmcmd=organic";
   }
  }
 }
 return "";
}
function _uGCse() {
 var h,p;
 h=p=_ur.split("://")[1];
 if(h.indexOf("/")>-1) {
  h=h.split("/")[0];
  p=p.substring(p.indexOf("/")+1,p.length);
 }
 if(p.indexOf("?")>-1) {
  p=p.split("?")[0];
 }
 if(h.toLowerCase().indexOf("google")>-1) {
  if(_ur.indexOf("?q=")>-1 || _ur.indexOf("&q=")>-1) {
   if (p.toLowerCase().indexOf("cse")>-1) {
    return true;
   }
  }
 }
}
function _uBInfo() {
 var sr="-",sc="-",ul="-",fl="-",cs="-",je=1;
 var n=navigator;
 if (self.screen) {
  sr=screen.width+"x"+screen.height;
  sc=screen.colorDepth+"-bit";
 } else if (self.java) {
  var j=java.awt.Toolkit.getDefaultToolkit();
  var s=j.getScreenSize();
  sr=s.width+"x"+s.height;
 }
 if (n.language) { ul=n.language.toLowerCase(); }
 else if (n.browserLanguage) { ul=n.browserLanguage.toLowerCase(); }
 je=n.javaEnabled()?1:0;
 if (_uflash) fl=_uFlash();
 if (_ubd.characterSet) cs=_uES(_ubd.characterSet);
 else if (_ubd.charset) cs=_uES(_ubd.charset);
 return "&utmcs="+cs+"&utmsr="+sr+"&utmsc="+sc+"&utmul="+ul+"&utmje="+je+"&utmfl="+fl;
}
function __utmSetTrans() {
 var e;
 if (_ubd.getElementById) e=_ubd.getElementById("utmtrans");
 else if (_ubd.utmform && _ubd.utmform.utmtrans) e=_ubd.utmform.utmtrans;
 if (!e) return;
 var l=e.value.split("UTM:");
 var i,i2,c;
 if (_userv==0 || _userv==2) i=new Array();
 if (_userv==1 || _userv==2) { i2=new Array(); c=_uGCS(); }

 for (var ii=0;ii<l.length;ii++) {
  l[ii]=_uTrim(l[ii]);
  if (l[ii].charAt(0)!='T' && l[ii].charAt(0)!='I') continue;
  var r=Math.round(Math.random()*2147483647);
  if (!_utsp || _utsp=="") _utsp="|";
  var f=l[ii].split(_utsp),s="";
  if (f[0].charAt(0)=='T') {
   s="&utmt=tran"+"&utmn="+r;
   f[1]=_uTrim(f[1]); if(f[1]&&f[1]!="") s+="&utmtid="+_uES(f[1]);
   f[2]=_uTrim(f[2]); if(f[2]&&f[2]!="") s+="&utmtst="+_uES(f[2]);
   f[3]=_uTrim(f[3]); if(f[3]&&f[3]!="") s+="&utmtto="+_uES(f[3]);
   f[4]=_uTrim(f[4]); if(f[4]&&f[4]!="") s+="&utmttx="+_uES(f[4]);
   f[5]=_uTrim(f[5]); if(f[5]&&f[5]!="") s+="&utmtsp="+_uES(f[5]);
   f[6]=_uTrim(f[6]); if(f[6]&&f[6]!="") s+="&utmtci="+_uES(f[6]);
   f[7]=_uTrim(f[7]); if(f[7]&&f[7]!="") s+="&utmtrg="+_uES(f[7]);
   f[8]=_uTrim(f[8]); if(f[8]&&f[8]!="") s+="&utmtco="+_uES(f[8]);
  } else {
   s="&utmt=item"+"&utmn="+r;
   f[1]=_uTrim(f[1]); if(f[1]&&f[1]!="") s+="&utmtid="+_uES(f[1]);
   f[2]=_uTrim(f[2]); if(f[2]&&f[2]!="") s+="&utmipc="+_uES(f[2]);
   f[3]=_uTrim(f[3]); if(f[3]&&f[3]!="") s+="&utmipn="+_uES(f[3]);
   f[4]=_uTrim(f[4]); if(f[4]&&f[4]!="") s+="&utmiva="+_uES(f[4]);
   f[5]=_uTrim(f[5]); if(f[5]&&f[5]!="") s+="&utmipr="+_uES(f[5]);
   f[6]=_uTrim(f[6]); if(f[6]&&f[6]!="") s+="&utmiqt="+_uES(f[6]);
  }
  if (_udl.hostname && _udl.hostname!="") s+="&utmhn="+_uES(_udl.hostname);
  if (_usample && _usample != 100) s+="&utmsp="+_uES(_usample);

  if ((_userv==0 || _userv==2) && _uSP()) {
   i[ii]=new Image(1,1);
   i[ii].src=_ugifpath+"?"+"utmwv="+_uwv+s;
   i[ii].onload=function() { _uVoid(); }
  }
  if ((_userv==1 || _userv==2) && _uSP()) {
   i2[ii]=new Image(1,1);
   i2[ii].src=_ugifpath2+"?"+"utmwv="+_uwv+s+"&utmac="+_uacct+"&utmcc="+c;
   i2[ii].onload=function() { _uVoid(); }
  }
 }
 return;
}
function _uFlash() {
 var f="-",n=navigator;
 if (n.plugins && n.plugins.length) {
  for (var ii=0;ii<n.plugins.length;ii++) {
   if (n.plugins[ii].name.indexOf('Shockwave Flash')!=-1) {
    f=n.plugins[ii].description.split('Shockwave Flash ')[1];
    break;
   }
  }
 } else {
  var fl;
  try {
   fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
   f = fl.GetVariable("$version");
  } catch(e) {}
  if (f == "-") {
   try {
    fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
    f = "WIN 6,0,21,0";
    fl.AllowScriptAccess = "always";
    f = fl.GetVariable("$version");
   } catch(e) {}
  }
  if (f == "-") {
   try {
    fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
    f = fl.GetVariable("$version");
   } catch(e) {}
  }
  if (f != "-") {
   f = f.split(" ")[1].split(",");
   f = f[0] + "." + f[1] + " r" + f[2];
  }
 }
 return f;
}
function __utmLinkerUrl(l,h) {
 var p,k,a="-",b="-",c="-",x="-",z="-",v="-";
 var dc=_ubd.cookie;
 var iq = l.indexOf("?");
 var ih = l.indexOf("#");
 var url=l;
 if (dc) {
  a=_uES(_uGC(dc,"__utma="+_udh+".",";"));
  b=_uES(_uGC(dc,"__utmb="+_udh,";"));
  c=_uES(_uGC(dc,"__utmc="+_udh,";"));
  x=_uES(_uGC(dc,"__utmx="+_udh,";"));
  z=_uES(_uGC(dc,"__utmz="+_udh+".",";"));
  v=_uES(_uGC(dc,"__utmv="+_udh+".",";"));
  k=(_uHash(a+b+c+x+z+v)*1)+(_udh*1);
  p="__utma="+a+"&__utmb="+b+"&__utmc="+c+"&__utmx="+x+"&__utmz="+z+"&__utmv="+v+"&__utmk="+k;
 }
 if (p) {
  if (h && ih>-1) return;
  if (h) { url=l+"#"+p; }
  else {
   if (iq==-1 && ih==-1) url=l+"?"+p;
   else if (ih==-1) url=l+"&"+p;
   else if (iq==-1) url=l.substring(0,ih-1)+"?"+p+l.substring(ih);
   else url=l.substring(0,ih-1)+"&"+p+l.substring(ih);
  }
 }
 return url;
}
function __utmLinker(l,h) {
 if (!_ulink || !l || l=="") return;
 _udl.href=__utmLinkerUrl(l,h);
}
function __utmLinkPost(f,h) {
 if (!_ulink || !f || !f.action) return;
 f.action=__utmLinkerUrl(f.action, h);
 return;
}
function __utmSetVar(v) {
 if (!v || v=="") return;
 if (!_udo || _udo == "") {
  _udh=_uDomain();
  if (_udn && _udn!="") { _udo=" domain="+_udn+";"; }
 }
 if (!_uVG()) return;
 var r=Math.round(Math.random() * 2147483647);
 _ubd.cookie="__utmv="+_udh+"."+_uES(v)+"; path="+_utcp+"; expires="+_uNx()+";"+_udo;
 var s="&utmt=var&utmn="+r;
 if (_usample && _usample != 100) s+="&utmsp="+_uES(_usample);
 if ((_userv==0 || _userv==2) && _uSP()) {
  var i=new Image(1,1);
  i.src=_ugifpath+"?"+"utmwv="+_uwv+s;
  i.onload=function() { _uVoid(); }
 }
 if ((_userv==1 || _userv==2) && _uSP()) {
  var i2=new Image(1,1);
  i2.src=_ugifpath2+"?"+"utmwv="+_uwv+s+"&utmac="+_uacct+"&utmcc="+_uGCS();
  i2.onload=function() { _uVoid(); }
 }
}
function _uGCS() {
 var t,c="",dc=_ubd.cookie;
 if ((t=_uGC(dc,"__utma="+_udh+".",";"))!="-") c+=_uES("__utma="+t+";+");
 if ((t=_uGC(dc,"__utmx="+_udh,";"))!="-") c+=_uES("__utmx="+t+";+");
 if ((t=_uGC(dc,"__utmz="+_udh+".",";"))!="-") c+=_uES("__utmz="+t+";+");
 if ((t=_uGC(dc,"__utmv="+_udh+".",";"))!="-") c+=_uES("__utmv="+t+";");
 if (c.charAt(c.length-1)=="+") c=c.substring(0,c.length-1);
 return c;
}
function _uGC(l,n,s) {
 if (!l || l=="" || !n || n=="" || !s || s=="") return "-";
 var i,i2,i3,c="-";
 i=l.indexOf(n);
 i3=n.indexOf("=")+1;
 if (i > -1) {
  i2=l.indexOf(s,i); if (i2 < 0) { i2=l.length; }
  c=l.substring((i+i3),i2);
 }
 return c;
}
function _uDomain() {
 if (!_udn || _udn=="" || _udn=="none") { _udn=""; return 1; }
 if (_udn=="auto") {
  var d=_ubd.domain;
  if (d.substring(0,4)=="www.") {
   d=d.substring(4,d.length);
  }
  _udn=d;
 }
 _udn = _udn.toLowerCase(); 
 if (_uhash=="off") return 1;
 return _uHash(_udn);
}
function _uHash(d) {
 if (!d || d=="") return 1;
 var h=0,g=0;
 for (var i=d.length-1;i>=0;i--) {
  var c=parseInt(d.charCodeAt(i));
  h=((h << 6) & 0xfffffff) + c + (c << 14);
  if ((g=h & 0xfe00000)!=0) h=(h ^ (g >> 21));
 }
 return h;
}
function _uFixA(c,s,t) {
 if (!c || c=="" || !s || s=="" || !t || t=="") return "-";
 var a=_uGC(c,"__utma="+_udh+".",s);
 var lt=0,i=0;
 if ((i=a.lastIndexOf(".")) > 9) {
  _uns=a.substring(i+1,a.length);
  _uns=(_uns*1)+1;
  a=a.substring(0,i);
  if ((i=a.lastIndexOf(".")) > 7) {
   lt=a.substring(i+1,a.length);
   a=a.substring(0,i);
  }
  if ((i=a.lastIndexOf(".")) > 5) {
   a=a.substring(0,i);
  }
  a+="."+lt+"."+t+"."+_uns;
 }
 return a;
}
function _uTrim(s) {
  if (!s || s=="") return "";
  while ((s.charAt(0)==' ') || (s.charAt(0)=='\n') || (s.charAt(0,1)=='\r')) s=s.substring(1,s.length);
  while ((s.charAt(s.length-1)==' ') || (s.charAt(s.length-1)=='\n') || (s.charAt(s.length-1)=='\r')) s=s.substring(0,s.length-1);
  return s;
}
function _uEC(s) {
  var n="";
  if (!s || s=="") return "";
  for (var i=0;i<s.length;i++) {if (s.charAt(i)==" ") n+="+"; else n+=s.charAt(i);}
  return n;
}
function __utmVisitorCode(f) {
 var r=0,t=0,i=0,i2=0,m=31;
 var a=_uGC(_ubd.cookie,"__utma="+_udh+".",";");
 if ((i=a.indexOf(".",0))<0) return;
 if ((i2=a.indexOf(".",i+1))>0) r=a.substring(i+1,i2); else return "";  
 if ((i=a.indexOf(".",i2+1))>0) t=a.substring(i2+1,i); else return "";  
 if (f) {
  return r;
 } else {
  var c=new Array('A','B','C','D','E','F','G','H','J','K','L','M','N','P','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9');
  return c[r>>28&m]+c[r>>23&m]+c[r>>18&m]+c[r>>13&m]+"-"+c[r>>8&m]+c[r>>3&m]+c[((r&7)<<2)+(t>>30&3)]+c[t>>25&m]+c[t>>20&m]+"-"+c[t>>15&m]+c[t>>10&m]+c[t>>5&m]+c[t&m];
 }
}
function _uIN(n) {
 if (!n) return false;
 for (var i=0;i<n.length;i++) {
  var c=n.charAt(i);
  if ((c<"0" || c>"9") && (c!=".")) return false;
 }
 return true;
}
function _uES(s,u) {
 if (typeof(encodeURIComponent) == 'function') {
  if (u) return encodeURI(s);
  else return encodeURIComponent(s);
 } else {
  return escape(s);
 }
}
function _uUES(s) {
 if (typeof(decodeURIComponent) == 'function') {
  return decodeURIComponent(s);
 } else {
  return unescape(s);
 }
}
function _uVG() {
 if((_udn.indexOf("www.google.") == 0 || _udn.indexOf(".google.") == 0 || _udn.indexOf("google.") == 0) && _utcp=='/' && _udn.indexOf("google.org")==-1) {
  return false;
 }
 return true;
}
function _uSP() {
 var s=100;
 if (_usample) s=_usample;
 if(s>=100 || s<=0) return true;
 return ((__utmVisitorCode(1)%10000)<(s*100));
}
function urchinPathCopy(p){
 var d=document,nx,tx,sx,i,c,cs,t,h,o;
 cs=new Array("a","b","c","v","x","z");
 h=_uDomain(); if (_udn && _udn!="") o=" domain="+_udn+";";
 nx=_uNx()+";";
 tx=new Date(); tx.setTime(tx.getTime()+(_utimeout*1000));
 tx=tx.toGMTString()+";";
 sx=new Date(); sx.setTime(sx.getTime()+(_ucto*1000));
 sx=sx.toGMTString()+";";
 for (i=0;i<6;i++){
  t=" expires=";
  if (i==1) t+=tx; else if (i==2) t=""; else if (i==5) t+=sx; else t+=nx;
  c=_uGC(d.cookie,"__utm"+cs[i]+"="+h,";");
  if (c!="-") d.cookie="__utm"+cs[i]+"="+c+"; path="+p+";"+t+o;
 }
}
function _uCO() {
 if (!_utk || _utk=="" || _utk.length<10) return;
 var d='www.google.com';
 if (_utk.charAt(0)=='!') d='analytics.corp.google.com';
 _ubd.cookie="GASO="+_utk+"; path="+_utcp+";"+_udo;
 var sc=document.createElement('script');
 sc.type='text/javascript';
 sc.id="_gasojs";
 sc.src='https://'+d+'/analytics/reporting/overlay_js?gaso='+_utk+'&'+Math.random();
 document.getElementsByTagName('head')[0].appendChild(sc);  
}
function _uGT() {
 var h=location.hash, a;
 if (h && h!="" && h.indexOf("#gaso=")==0) {
  a=_uGC(h,"gaso=","&");
 } else {
  a=_uGC(_ubd.cookie,"GASO=",";");
 }
 return a;
}
var _utk=_uGT();
if (_utk && _utk!="" && _utk.length>10 && _utk.indexOf("=")==-1) {
 if (window.addEventListener) {
  window.addEventListener('load', _uCO, false); 
 } else if (window.attachEvent) { 
  window.attachEvent('onload', _uCO);
 }
}

function _uNx() {
  return (new Date((new Date()).getTime()+63072000000)).toGMTString();
}
;;
