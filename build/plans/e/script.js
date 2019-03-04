  <script
     type="text/javascript"
     id="script6783">
// script_load2.js
// ghh 121026.105729  130506

function script_load(evt){
red='#800';	green='#080';	blue='#008';	
gra='#008800'; grb='#080'; grc='rgb(0, 136, 0)';
//	dto=document.getElementById('dtext').firstChild;
dto=document.getElementById('dtext');
}

function wipe(what){
what.style.display="none";
//alert(what+" 2 "+what.style.display);
}

// - logic section, because xml embedded js no like &amp;, &lt;, &gt;
function lt(a,b){
return ((a-b)==Math.abs(a-b))
	?false :(a!=b) ?true :false
//fails on non nums
}
function or(a,b){return a||b}
function and(a,b){return a?(b?true:false):false}
function gt(a,b){return lt(b,a)}
function gte(a,b){return (a==b)?true:lt(b,a)}
function lte(a,b){return (a==b)?true:lt(a,b)}

function dispFit(evt,vol){
// dispFit(this,'base')
// alert("vol = "+vol+", getVol= "+document.getElementById(vol).style);
lastID=document.getElementById(vol).style;
lastID.display= (lastID.display=='inline') ?'none' :'inline';
evt.style.fill= (lastID.display=='inline') ?'#4d4' :'#d44';
}

function struc(evt,support){
sup=document.getElementById(support);
	evtf=evt.style.fill;
var flag=((evtf==gra)||(evtf==green)||(evtf==grc));
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
	case 'front':
	case 'back':
	case 'solar':
	case 'hvac':
	case 'structure':
	case 'slope':
//	alert("slope"+support);
	case 'flat':
	case 'iStair':
	case 'residence':
	case 'f2f':
		sup.style.display=flag ?'none' :'inline';
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
flre=document.getElementById(flr);
	evtf=evt.style.fill;
flag=((evtf==gra)||(evtf==green)||(evtf==grc)||(evtf==''));
evt.style.fill= flag ?red :green;

flre.style.display=flag ?'none' :'inline';
//alert(evt+' / '+sup+' / '+evt.style.fill);
}

function rg(evt){
itm=evt.getElementsByTagName('tspan')[0].textContent;

itme=document.getElementById(itm);
	evtf=evt.style.fill;
flag=((evtf==gra)||(evtf==green)||(evtf==grc)||(evtf==''));
evt.style.fill= flag ?red :green;

itme.style.display=flag ?'none' :'inline';
//alert(evt+' / '+sup+' / '+evt.style.fill);
}

function descV(evt){
//	alert("getn= "+evt.getElementsByTagName("desc")[0]);
//	dto.textContent=evt.getElementsByTagName("desc")[0].textContent;
//alert("descVp++");
prevID=document.getElementById("prev"); // in hdr
nextID=document.getElementById("next"); // in hdr
nextID.style.display='none';	prevID.style.display='none';
	so=evt.getElementsByTagName("desc")[0].textContent;
soiCR=so.indexOf("\n");
if(and(lt(soiCR,so.length-1) , gt(soiCR,0)) ){
//	if("\n"!=so.charAt(so.length-1))	so+="\n";
	sov=so.split("\n"); 
	prevID.style.display='inline';
	nextID.style.display='inline';
	isov=0;
	sodescV(sov,isov);
}
else dto.textContent=so;
}

function sodescV(v,i){
if(lt(i,0))	i=sov.length-1;
if(i==sov.length) i=0;
isov=i;
so="";
for(j=isov; gt(sov.length,j); j++)	so+=v[j]+" / ";
so+="------/"
if(0!=isov) for(j=0; lt(j,isov); j++)	so+=v[j]+" / ";
dto.firstChild.textContent=so;
}
   </script>
