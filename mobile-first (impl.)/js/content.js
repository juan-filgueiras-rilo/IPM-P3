function writeSection (id, esconderMenu) {

	var xmlhttp;

	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	}
	else {
		xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
	}
	if(id == 'inicio') {
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				document.getElementById('wrapper').innerHTML=xmlhttp.responseText;
			}
		}
		//Asincrono
		xmlhttp.open('GET','http://localhost:8000/inicio.html', true, true);
		xmlhttp.send();
	}
	if(id == 'guia') {
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				document.getElementById('wrapper').innerHTML=xmlhttp.responseText;
				var scripts = document.getElementsByTagName('script');
				var i;
				var exist = false;
				for (i = 0; i < scripts.length; i++) {
					script = scripts[i];
					if (script.src == "http://localhost:8000/js/guia.js") {
						exist = true;
					}
				}
				if(!exist) {
					loadScript('http://localhost:8000/js/guia.js', function() {
						document.getElementById('defaultOpen').click();
					});
				} else {
					if(!document.getElementById('defaultOpen').classList.contains('active')) { 
						document.getElementById('defaultOpen').click();
					}
				}
			}
		}
		//Sincrono, queremos ejecutar el js despues del html cargado
		xmlhttp.open('GET','http://localhost:8000/guia.html',true, true);
		xmlhttp.send();
	}
	if(id == 'formulario') {
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				document.getElementById('wrapper').innerHTML=xmlhttp.responseText;
				var scripts = document.getElementsByTagName('script');
				var i;
				var exist = false;
				for (i = 0; i < scripts.length; i++) {
					script = scripts[i];
					if (script.src == "http://localhost:8000/js/formulario.js") {
						exist = true;
					}
				}
				if(!exist) {
					loadScript('http://localhost:8000/js/formulario.js', function() {});
				}
			}
		}
		//Asincrono
		xmlhttp.open('GET','http://localhost:8000/formulario.html', true, true);
		xmlhttp.send();
	} 
	if(id == 'personajes') {
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				document.getElementById('wrapper').innerHTML=xmlhttp.responseText;
				var scripts = document.getElementsByTagName('script');
				var i;
				var exist = false;
				for (i = 0; i < scripts.length; i++) {
					script = scripts[i];
					if (script.src == "http://localhost:8000/js/stats.js") {
						exist = true;
					}
				}
				if(!exist) {
					loadScript('http://localhost:8000/js/stats.js', function() {});
				}
			}
		}
		//Asincrono
		xmlhttp.open('GET','http://localhost:8000/personajes.html', true, true);
		xmlhttp.send();
	}
	/*if(id == 'model_viewer') {
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				document.getElementById('wrapper').innerHTML=xmlhttp.responseText;
			}
		}
		//Asincrono
		xmlhttp.open('GET','http://localhost:8000/inicio.html', true, true);
		xmlhttp.send();
	}*/
	if (esconderMenu) {
		toggleSidenav();
	}
}

function loadScript(url, callback) {

    var script = document.createElement('script')
    script.type = 'text/javascript';
 
    script.onload = function() {
        callback();
    };

    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
}

writeSection('inicio',false);