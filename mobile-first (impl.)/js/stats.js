function stats(id) {
	if (!document.getElementById(id).classList.contains('stats')) {
		var open_stats = document.getElementsByClassName('subtable');
		var i;
		for (i = 0; i < open_stats.length; i++) {
			var openStat = open_stats[i];
			if (openStat.classList.contains('stats')) {
				openStat.classList.remove('stats');
			}
		}
	}
	document.getElementById(id).classList.toggle('stats');
}

function getFocus(id) {           
	document.getElementById(id).focus();
}