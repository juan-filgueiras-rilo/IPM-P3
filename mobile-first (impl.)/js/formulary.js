function register() {

    var psw = document.getElementById('psw');
    var re_psw = document.getElementById('re_psw');

    if(pw.value == re_pw.value) {
    	console.log('funca')
    } else {
    	console.log('o fucc.')

    }
}

function check() {
	if (document.getElementById('psw').value == document.getElementById('re_psw').value) {
		document.getElementById('message').style.color = 'green';
		document.getElementById('message').innerHTML = 'matching';
	} else {
		document.getElementById('message').style.color = 'red';
		document.getElementById('message').innerHTML = 'not matching';
	}
}