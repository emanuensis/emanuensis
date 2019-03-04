flagH=1;
HW= 129;	lWl='translate(-363,';
HH= 117;	lHl='translate(-323,';

function gId(Id){return document.getElementById(Id);}

function init(){
  HHe=gId('leveH'); HWe=gId('leveW');
  HHr=gId('levrH'); HWr=gId('levrW');

  HHrh=0;  HHry=0;
  HHrh=77; HHry=44;

  HHrh=HHr.height.baseVal.value; HHry=HHr.y.baseVal.value;
  HHrw=HHr.width.baseVal.value;  HHrx=HHr.x.baseVal.value;
  HWrh=HWr.height.baseVal.value; HWry=HWr.y.baseVal.value;
  HWrw=HWr.width.baseVal.value;  HWrx=HWr.x.baseVal.value;
/*
  HHrh=parseFloat(HHr.height); HHry=parseFloat(HHr.y);
  HHrw=parseFloat(HHr.width);  HHrx=parseFloat(HHr.x);
  HWrh=parseFloat(HWr.height); HWry=parseFloat(HWr.y);
  HWrw=parseFloat(HWr.width);  HWrx=parseFloat(HWr.x);
*/
}
function heat(a){
/* alert('a =\t'+a+'\nHW= '+HW+'\nHH= '+HH +'\nHWe=\t'+HWe.getAttribute('transform')); */
  if(flagH){ init(); flagH=0; }
  a=parseFloat(a);
  HW-= a; HH+= a;
//HHe.transform=lHl+HH+')'; //fails: must use setAttribute
  HHe.setAttribute('transform',lHl+HH+')');
  HWe.setAttribute('transform',lWl+HW+')');
  HWrh+=a; HWry-=a;
  HWr.setAttribute('height',HWrh);
  HWr.setAttribute('y',HWry);
  HHrh-=a; HHry+=a;
  HHr.setAttribute('height',HHrh.toString());
  HHr.setAttribute('y',HHry.toString());
//  HHr.style.fill.setAttribute('fill','#144');
}
// gId('svgt').setattribute('height','222%')
//  HHr.style.fill= '#d44'; HWr.style.fill= '#d44';

function plumb_load(){
  cGid=document.getElementById('caloricGrad');
  cgr=cGid.r.baseVal.value;
//alert("booL"+cgr);
}

function calories(inc,lo,hi){	caloriesExp(inc,lo,hi) }
function caloriesExp(inc,lo,hi){//exponential
  var del= (inc)*(inc<=0)
    ?(cgr-lo)/(hi-lo)
    :(hi-cgr)/(hi-lo);
  cgr+=(inc>0)?del:-del;
  cGid.r.baseVal.value=cgr;
}
function caloriesLin(inc,lo,hi){//linear
  cgr=cGid.r.baseVal.value;
  cgr+=(cgr<lo)
    ?(inc<0)?0:inc
    :(cgr>hi)
      ?(inc>0)?0:inc
      :inc;
  cGid.r.baseVal.value=cgr;
}
puFlag=false;
function descVI(itm){ puFlag=false;
  evt=document.getElementById(itm);
//alert(itm+', '+evt);
  descV(evt)	}

function popdescV(v,n){
so='';
vCR=v.split('\n');
for(j=0; vCR.length>j; j++)	so+=vCR[j]+'<br />';
//alert(900+vCR.length+so);
if (puFlag && typeof fenster !== "undefined") {
	fenster.document.getElementById("puDesc" ).innerHTML=so;
	fenster.document.getElementById("puTitle").innerHTML=n;
return;
}

puFlag=true;
fenster = open("", "popDes", "scrollbar=no,width=411,height=599");
with (fenster.document) {
  open();
  write("<TITLE>"); write(n); write("</TITLE>");
  write("<body ondblclick='window.close()' style='background-color:black;color:lightyellow'>")
  write("<H1 style='color:pink' id='puTitle'>"); write(n);
  write("</H1><DIV id='puDesc'>"); write(so);
  write("</DIV></body>");
  close();
}
}
