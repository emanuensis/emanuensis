














function plani(){
rez=2; tw=0; base=0; mdb=0; kc=0; ival=1;
document.onkeyup = keys;
//fs()
}

function keys(ee){ kcm=kc;
	if(ee.keyCode) {kc=ee.keyCode;
		kChar=String.fromCharCode(kc);	}
	switch (kc)	{
		case 188:	//, decrease size
		case 60:	//< decrease size
			planid.width*=.87;			break;
		case 190:	//. icrease size
		case 62:	//>
			planid.width*=1.11;			break;
		case 68:	//D double size
		case 100:	//d
			planid.width*=2;			break;
		case 82:	//R reset size
		case 124:	//r
			planid.width=400;			break;
		case 88:	//X Xperimental plan
		case 130:	//x
			planid.data="http://dl.dropbox.com/u/17113195/bright/build/plans/8/plan81.svg";
			planid.width*=3.5;	//size change AFTER plan change!
			break;
//abcdefghijklmnopqrstuvwxyz
		case 85:	//U inc ival 4 slideshow (start too!)
			if(1==ival) slideshow();
			ival++;		break;
		case 97:	//a
		case 65:	//or A
			parent.location=
				"http://dl.dropbox.com/u/17113195/bright/build/plans/7/stairoof7.svg";
			break;
		default:	//alert(kc+", unKey : "+kChar);
			break;	}	}
