function toggleSidenav() {
	if (document.body.classList.contains('sidenav-active')) {
		closeDrops();
	}
	document.body.classList.toggle('sidenav-active');
}

function dropdown(id) {
	closeDrops();
	document.getElementById(id).classList.toggle('dropdown');	
}

function closeDrops() {
	var dropdowns = document.getElementsByClassName('sub-menu');
	var i;
	for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('dropdown')) {
			openDropdown.classList.remove('dropdown');
		}
	}	
}
/*function color(id) {
	var is_mobile = false;

    if (/Mobi/.test(navigator.userAgent)) {
    	is_mobile = true;
	}
    if (is_mobile == true) {
		document.getElementById(id).classList.toggle('colored');
    }
}*/