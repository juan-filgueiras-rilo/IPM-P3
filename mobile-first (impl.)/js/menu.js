function toggleSidenav() {

	if (document.body.classList.contains('sidenav-active')) {
		closeDrops();
		var mainitems = document.getElementsByClassName('main-item');
		var i;
		for (i = 0; i < mainitems.length; i++) {
			var mainitem = mainitems[i];
			mainitem.tabIndex = -1;
		}
		document.getElementById('back_button').tabIndex = -1;
	} else {
		var mainitems = document.getElementsByClassName('main-item');
		var i;
		for (i = 0; i < mainitems.length; i++) {
			var mainitem = mainitems[i];
			mainitem.tabIndex = 0;
		}
		document.getElementById('back_button').tabIndex = 0;
	}
	document.body.classList.toggle('sidenav-active');
}

function dropdown(id) {
	if(!document.getElementById(id).classList.contains('dropdown')) {
		closeDrops();
	}
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

function _toggleSidenav(event) {
	if (event.keyCode == 13) {
		toggleSidenav();
	}
}

function _dropdown(event, id) {
	if (event.keyCode == 13) {
		dropdown(id);
	}
}