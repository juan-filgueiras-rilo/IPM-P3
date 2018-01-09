function register() {

	var uname = document.getElementById('username');
	var email = document.getElementById('email');
    var psw = document.getElementById('psw');
    var re_psw = document.getElementById('re_psw');

    if (uname.value.length == 0) {
    	return;
    }
    if (email.value.length == 0) {
    	return;
    }
    if (psw.value.length == 0 || psw.value.length < 8) {
    	return;
    }
    if (re_psw.value.length == 0 || psw.value.length < 8) {
    	return;
    }
    if (psw.value != re_psw.value) {
        window.alert("Las contraseñas no coinciden!");
    	return;
    }

    var modal = document.getElementById('modal_success');
    var span = document.getElementsByClassName("close")[0];
    var return_button = document.getElementById('returnToInicio');
    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    clean();
}

function clean() {

    document.getElementById('username').value = "";
    document.getElementById('email').value = "";
    document.getElementById('psw').value = "";
    document.getElementById('re_psw').value = "";
    document.getElementById('message').innerHTML = "";
}

function check() {

    if ((document.getElementById('psw').value.length == 0 || document.getElementById('psw').value.length < 8) | (document.getElementById('re_psw').value.length == 0 || document.getElementById('re_psw').value.length < 8)) {
        document.getElementById('message').innerHTML = "";
        return;
    }
	if (document.getElementById('psw').value == document.getElementById('re_psw').value) {
		document.getElementById('message').style.color = '#B7F9CA';
		document.getElementById('message').innerHTML = 'Son iguales';
	} else {
		document.getElementById('message').style.color = '#FF8383';
		document.getElementById('message').innerHTML = 'No son iguales';
	}
}