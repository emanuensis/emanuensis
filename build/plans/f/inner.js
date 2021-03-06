// script_load2.js ghh 121026 130916

function script_load(evt){
// alert('script_load');	
red='#800';	green='#080';	blue='#008';	
gra='#008800'; grb='#080'; grc='rgb(0, 136, 0)'; gLoad='rgb(0, 255, 0)';
dto=document.getElementById('dtext');
rmeas=0;
}
// - logic section, because xml embedded js no like &lt;, &amp;, &gt;
function lt(a,b){
return ((a-b)==Math.abs(a-b))
	?false
	:(a!=b)
		?true
		:false
//fails on non nums
}
function or(a,b){return a||b}
function and(a,b){return a?(b?true:false):false}
function gt(a,b){return lt(b,a)}
function gte(a,b){return (a==b)?true:lt(b,a)}
function lte(a,b){return (a==b)?true:lt(a,b)}


function rtg(){// https://developer.mozilla.org/en-US/docs/Web/API/SVGTransformList
	im=document.getElementById("meas");
	svgr=document.getElementById("svgsn");
	var tfm=im.transform.baseVal;
	var rotate = svgr.createSVGTransform();
	(rmeas==0)
		? rotate.setTranslate(0,10)
		: rotate.setRotate(30*rmeas,729,74);
	tfm.appendItem(rotate);
}


function flipSibsX(R,itm,L){
  itmevt=itm.getElementsByTagName('tspan')[0].textContent;
  itme=document.getElementById(itmevt);
  var sibs=[]; si=0;
  var sl=itme.parentNode.childNodes.length;
  for (n=0 ; lt(n,sl); n++ )
      if (itme.parentNode.childNodes[n].nodeType==1)
	sibs[si++]=itme.parentNode.childNodes[n];
  var sl=sibs.length;
  for (n=0 ; lt(n,sl); n++ )
    if (sibs[n]==itme) me=n;
  var tspans=document.getElementsByTagName('tspan');
  for(i=me-L; lte(i,me+R); i++) {
	sibs[i].style.display='none';
	txt=sibs[i].id;
	for(ii=0; ii<tspans.length; ii++)
		if(txt==tspans[ii].textContent
			&& rgbQ(tspans[ii].parentNode.style.fill)!==2)
				tspans[ii].parentNode.style.fill=red;
  }
  txt=itmevt;
  for(i=0; i<tspans.length; i++)
	  if(txt==tspans[i].textContent
		  && rgbQ(tspans[i].parentNode.style.fill)!==2)
			tspans[i].parentNode.style.fill=green;

  itme.style.display='inline';
/*
  sibst=[]; si=0;
  sl=itm.parentNode.childNodes.length;
  for (n=0 ; lt(n,sl); n++ )
      if (itm.parentNode.childNodes[n].nodeType==1)
	sibst[si++]=itm.parentNode.childNodes[n];
  for (n=0 ; lt(n,sl); n++ )
    if (sibst[n]==itm) me=n;
  for(i=me-L; lte(i,me+R); i++)
    sibst[i].style.opacity=.3;
  sibst[me].style.opacity=.9;
//  itm.style.display='inline';
*/

}

function I(txt){
  return document.getElementById(txt);
}
function flipR(R,txt,txtL,L){
  itme=document.getElementById(txt);
  itm=document.getElementById(txtL);
  var sibs=[]; si=0;
  var sl=itme.parentNode.childNodes.length;
  for (n=0 ; lt(n,sl); n++ )
      if (itme.parentNode.childNodes[n].nodeType==1)
	sibs[si++]=itme.parentNode.childNodes[n];
  var sl=sibs.length;

  for (n=0 ; lt(n,sl); n++ )
    if (sibs[n]==itme) me=n;
  for(i=me-L; lte(i,me+R); i++)
    sibs[i].style.display='inline';

  sibst=[]; si=0;
  sl=itm.parentNode.childNodes.length;
  for (n=0 ; lt(n,sl); n++ )
      if (itm.parentNode.childNodes[n].nodeType==1)
	sibst[si++]=itm.parentNode.childNodes[n];
  for (n=0 ; lt(n,sl); n++ )
    if (sibst[n]==itm) me=n;
  for(i=me-L; lte(i,me+R); i++)
    sibst[i].style.display='inline';
  for(i=me-L; lte(i,me+R); i++)
    sibst[i].style.opacity=.9;
}

function rgbQ(cs) {//more R, G or B? returns 0,1,2
// stackoverflow.com/questions/13070054
//for any of: (rgb rgba hsl hsla hsv hex3 hex6) see matchers in
// bgrins.github.io/TinyColor/docs/tinycolor.html
  if(cs.indexOf("#") == -1){
    var a = cs.split('(')[1].split(')')[0];
    var acs = a.split(',');
  }else{
// alert('1st rgnQ '+cs);
  acs = cs.split('#')[1];
  acs = acs.split('');
  if(acs.length==6){
	acs[1]= acs[2]; acs[2]= acs[4];
	acs.pop(); acs.pop(); acs.pop();
  }
}
//alert(acs+' 4th rgnQ '+bcs);
  var bcs = acs.map(function(x){ return parseInt(x,16); })
	var j=0;var x=bcs[0];
	if(gt(bcs[1],x))x=bcs[j=1]
	if(gt(bcs[2],x)) j=2
//	if(bcs[1]&gt;x)x=bcs[j=1]
//	if(bcs[2]&gt;x) j=2
return j }
function isGreen(evtf){ return (1==rgbQ(evtf)); }
function notRed(evtf){ return rgbQ(evtf) }

function dispFit(evt,vol){
// dispFit(this,'base')
// alert('vol = '+vol+', getVol= '+document.getElementById(vol).style);
lastID=document.getElementById(vol).style;
lastID.display= (lastID.display=='inline') ?'none' :'inline';
evt.style.fill= (lastID.display=='inline') ?'#4d4' :'#d44';
}
function struc(evt,support){
sup=document.getElementById(support);
	evtf=evt.style.fill;
flag=notRed(evt.style.fill);
evt.style.fill= flag ?red :green;
switch(support){
	case 'cable':
		document.getElementById('ptwo').style.display=flag ?'inline' :'none';
		document.getElementById('plone').style.display=flag ?'inline' :'none';
		document.getElementById('prone').style.display=flag ?'inline' :'none';
	case 'scissor':
		sup.style.display=flag ?'none' :'inline';
		break;
	case 'fone':
		sup.style.strokeWidth=flag ?'1px' :'5px';
		break;
	case 'sunsummer':
		sup.style.display=flag ?'none' :'inline';
		break;
	case 'sunwinter':
		sup.style.display=flag ?'none' :'inline';
		break;
	default:
}
//alert(evt+' / '+sup+' / '+evt.style.fill);
}
function fl(evt,flr){
//itm=evt.getElementsByTagName('tspan')[0].textContent;
//alert(evt+' /0/ '+flr+' / '+evt.style.fill+' /sty/ '+evt.style);
flre=document.getElementById(flr);
	evtf=evt.style.fill;
flag=notRed(evt.style.fill);
evt.style.fill= flag ?red :green;
flre.style.display=flag ?'none' :'inline';
}
function rg(evt){ // red?green:red
itm=evt.getElementsByTagName('tspan')[0].textContent;
itme=document.getElementById(itm);
	evtf=evt.style.fill;
//alert(evtf);
flag=notRed(evt.style.fill);
//alert(evtf+' evtf flag '+flag);
evt.style.fill= flag ?red :green;
itme.style.display=flag ?'none' :'inline';
//alert(evt+' / '+sup+' / '+evt.style.fill);
}

function show(nodeN){
  nodeNa=document.getElementById(nodeN);
  nodeNa.style.display='inline';	}
function hide(nodeN){
  nodeNa=document.getElementById(nodeN);
  nodeNa.style.display='none';	}
function flip(nodeN){
//alert(' 2/nodeN: '+nodeN+' /inodeN: '+inodeN+' /nodeNa: '+nodeNa);
  nodeNa=document.getElementById(nodeN);
  nodeNa.style.display=
    nodeNa.style.display=='none'
      ? 'inline'
      : 'none';
}
function showI(inodeN){
//  nodeN=inodeN.getElementsByTagName('desc')[0].textContent;
  nodeN=inodeN.textContent;
  show(nodeN)	}
function hideI(inodeN){
//  nodeN=inodeN.getElementsByTagName('desc')[0].textContent;
  nodeN=inodeN.textContent;
  hide(nodeN)	}
function flipI(inodeN){
//  nodeN=inodeN.getElementsByTagName('tspan')[0].textContent;
  nodeN=inodeN.textContent;
  flip(nodeN)	}

function off2(inodeN){
//  nodeN=inodeN.getElementsByTagName('tspan')[0].textContent;
  var xx=inodeN.parentNode.childNodes;
  for(i=0; xx.length>i+1; i+=1) {
		nodeN=xx[i].textContent;
		xx[i].style.fill= '#0ff';
		show(nodeN)	}
	inodeN.style.fill= '#f00';
  for(i=0; inodeN!==xx[i]; i+=1) {
		nodeN=xx[i].textContent;
		flip(nodeN)	}
	nodeN=inodeN.textContent;
	flip(nodeN)	
}
function restore(evt,itm){
  itme=document.getElementById(itm);
  itme.style.display=notRed(evt.style.fill) ?'inline' :'none';
}
function restoreI(evt){
//  itm=evt.getElementsByTagName('tspan')[0].textContent;
  itm=evt.textContent;
  restore(evt,itm)	}

function descV(evt){
//	alert('getn= '+evt.getElementsByTagName('desc')[0]);
//	dto.textContent=evt.getElementsByTagName('desc')[0].textContent;
//alert('descVp++');
prevID=document.getElementById('prev'); // in hdr
nextID=document.getElementById('next'); // in hdr
nextID.style.display='none';	prevID.style.display='none';
	so=evt.getElementsByTagName('desc')[0].textContent;
soPLAIN=so;
soiCR=so.indexOf('\n');
if(and(lt(soiCR,so.length-1) , gt(soiCR,0)) ){
//	if('\n'!=so.charAt(so.length-1))	so+='\n';
	sov=so.split('\n'); 
	prevID.style.display='inline';
	nextID.style.display='inline';
	isov=0;
	sodescV(sov,isov);	}
else dto.textContent=so;
soName=evt.getElementsByTagName('title')[0].textContent;
popdescV(soPLAIN,soName);
}
function sodescV(v,i){
if(lt(i,0))	i=sov.length-1;
if(i==sov.length) i=0;
isov=i;
so='';
for(j=isov; gt(sov.length,j); j++)	so+=v[j]+' / ';
so+='------/'
if(0!=isov) for(j=0; lt(j,isov); j++)	so+=v[j]+' / ';
dto.firstChild.textContent=so;
}
