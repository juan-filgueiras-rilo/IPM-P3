function writeSection (id) {
	var xmlhttp;
	if (id = 'guia') {
		if (window.XMLHttpRequest) {
			xmlhttp=new XMLHttpRequest();
		}
		else {
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function() {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		    document.getElementById("wrapper").innerHTML=xmlhttp.responseText;
		  }
		}
		xmlhttp.open("GET","http://localhost:8000/guia.html",true);
		xmlhttp.send();
	}
	/*wrapper.innerHTML = content;*/
}