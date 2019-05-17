function openTab(event, tabName) {
	var i, tableContent, tabButtons;
	
	tabContent = document.getElementsByClassName("tabContent");

	for(i=0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}

  	tabButtons = document.getElementsByClassName("tabButtons");
  	for (i = 0; i < tabButtons.length; i++) {
    	tabButtons[i].className = tabButtons[i].className.replace(" active", "");
  	}

  	document.getElementById(tabName).style.display = "block";
  	evt.currentTarget.className += " active";

}