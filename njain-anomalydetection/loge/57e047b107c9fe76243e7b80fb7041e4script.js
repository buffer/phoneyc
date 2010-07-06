
                        (function() { var a=window;function c(b){this.t={};this.tick=function(d,i,e){e=e?e:(new Date).getTime();this.t[d]=[e,i]};this.tick("start",null,b)}var f=new c;a.jstiming={Timer:c,load:f};try{var g=null;if(a.chrome&&a.chrome.csi)g=Math.floor(a.chrome.csi().pageT);if(g==null)if(a.gtbExternal)g=a.gtbExternal.pageT();if(g==null)if(a.external)g=a.external.pageT;if(g)a.jstiming.pt=g}catch(h){};a.tickAboveFold=function(b){b=b;var d=0;if(b.offsetParent){do d+=b.offsetTop;while(b=b.offsetParent)}b=d;b<=750&&a.jstiming.load.tick("aft")};var j=false;function k(){if(!j){j=true;a.jstiming.load.tick("firstScrollTime")}}a.addEventListener?a.addEventListener("scroll",k,false):a.attachEvent("onscroll",k);
 })();;;
var thumbnail_mode = "no-float" ;
summary_noimg = 530;
summary_img = 440;
img_thumb_height = 80;
img_thumb_width = 120;
;;<!--//--><![CDATA[//><!--
function removeHtmlTag(strx,chop){ 
	if(strx.indexOf("<")!=-1)
	{
		var s = strx.split("<"); 
		for(var i=0;i< s.length;i++){ 			if(s[i].indexOf(">")!=-1){ 
				s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); 
			} 
		} 
		strx =  s.join(""); 
	}
	chop = (chop < strx.length-1) ? chop : strx.length-2; 
	while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; 
	strx = strx.substring(0,chop-1); 
	return strx+'...'; 
}

function createSummaryAndThumb(pID){
	var div = document.getElementById(pID);
	var imgtag = "";
	var img = div.getElementsByTagName("img");
	var summ = summary_noimg;
	if(img.length>=1) {	
		imgtag = '<span style="float:left; padding:0px 10px 5px 0px;"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/>';
		summ = summary_img;
	}
	
	var summary = imgtag + '' + removeHtmlTag(div.innerHTML,summ) + '';
	div.innerHTML = summary;
}

//-->



(function() { var a=window;function c(b){this.t={};this.tick=function(d,i,e){e=e?e:(new Date).getTime();this.t[d]=[e,i]};this.tick("start",null,b)}var f=new c;a.jstiming={Timer:c,load:f};try{var g=null;if(a.chrome&&a.chrome.csi)g=Math.floor(a.chrome.csi().pageT);if(g==null)if(a.gtbExternal)g=a.gtbExternal.pageT();if(g==null)if(a.external)g=a.external.pageT;if(g)a.jstiming.pt=g}catch(h){};a.tickAboveFold=function(b){b=b;var d=0;if(b.offsetParent){do d+=b.offsetTop;while(b=b.offsetParent)}b=d;b<=750&&a.jstiming.load.tick("aft")};var j=false;function k(){if(!j){j=true;a.jstiming.load.tick("firstScrollTime")}}a.addEventListener?a.addEventListener("scroll",k,false):a.attachEvent("onscroll",k);
 })();;;
var thumbnail_mode = "no-float" ;
summary_noimg = 530;
summary_img = 440;
img_thumb_height = 80;
img_thumb_width = 120;
;;