function AJAX_JSON_Req( url ) {
//	boo:1;
    var AJAX_req = new XMLHttpRequest();
//      AJAX_req = new XMLHttpRequest();
    AJAX_req.open( "GET", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/json");
//	 console.log("boo");
    AJAX_req.onreadystatechange = function() {
	 console.log("boo2");
        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )  {
	 console.log("boo3");
	 console.log(AJAX_req.responseText);
	 console.log(dumb);
       response = JSON.parse( AJAX_req.responseText );
//        response = JSON.parse( AJAX_req.responseText );
	 console.log("boo4");
	 console.log(response);
	 console.log("boo5");
	 console.log(response.name);
	 dumb=response.age;
	 console.log(dumb);
//  document.write( response.dirs );
document.getElementById("d").innerHTML=response.dirs[1]+"boo_ AJR";
 	 alert ("boo6");

		} }
//	 console.log(response.name);
    AJAX_req.send();
}
response =1;
dumb=2;

function rdFiles(){
AJAX_JSON_Req( './webList.json' );
//xxx= dirs[1];
document.getElementById("d").innerHTML=response.dirs[1]+"boo";
document.getElementById("d").innerHTML="boo";

}