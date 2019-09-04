'use strict';

function click(e) {
	var value = "hidden"; 
	if(!e.target.checked) 
		value = "visible";
	
	chrome.tabs.executeScript(null, {
		code : "document.getElementsByTagName(\"HEADER\")[0].style.visibility ='" + value + "'"
	});
}

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector("#toggleButton").addEventListener('click', click);
});
