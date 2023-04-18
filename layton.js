var hints = [false, false, false];

function openTab(hint, number){
	hideTabContent();
	
	if(hints[number-1]){
		
		//show hint text
		document.getElementById(hint).innerHTML = '<div class="unlocked bonus">' + hintText[number-1] + '</div>';
		//remove class locked
		document.getElementById(hint).classList.remove("locked");

		//make it visible
		document.getElementById(hint).style.display = "block";
		
	} else {
		//Tab locked, show unlock Prompt
		document.getElementById(hint).innerHTML = `
										<div id="locked${hint}" class="locked">
											<p>Unlock a new Hint?</p>
											<br style="clear: both;">
											<div>
												<button type="button" class="unlock ok" onclick="unlock()">Ok!</button>
												<button type="button" class="unlock no" onclick="back()">No!</button>
											</div>
										</div>
										`;
		
		
		
		//add class locked
		document.getElementById(hint).classList.add("locked");
		//let "locked" take care of display
		document.getElementById(hint).removeAttribute("style")
		
		
	}
	
	
	//Deactivate every Tablink
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) 
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	
	//Activate tablink
	tablink = document.getElementById("TabHint" + number);
	tablink.className += " active";
	
}


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
function checkParams(){
	
	//hide all tablinks
	hideTabBar();
	
	//hide code enter tab
	codeRequest = document.getElementById("Code");
	codeRequest.style.display = "none";
	
	//hide back button
	backButton = document.getElementById("back");
	backButton.style.display = "none";
	
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
	}
	
	loadHints();
}

function codeKeyListener(e){
	if(e.key == "Enter"){
		loadHints();
	}
}

function loadEnterCode(){
	//show code input field
	codeRequest = document.getElementById("Code");
	codeRequest.style.display = "block";
	codeRequest.addEventListener('keypress', codeKeyListener);
}
function hideEnterCode(){
	codeRequest = document.getElementById("Code");
	codeRequest.style.display = "none";
	codeRequest.removeEventListener('keypress', codeKeyListener);
}

function setCode(){
	urlParams.set("v", document.getElementById("setCode"));
	loadHints();
}

function hideTabContent(){
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
}


function loadHints(){
	
	//check for params
	if(urlParams.has('v')){
		code = urlParams.get("v");
		urlParams.delete("v");
	}
	else
		code = document.getElementById("codeField").value;
	
	
	if(loadHintsByCode(code)){
		showNextHintTab();
		hideEnterCode();
		showBackButton();
		
		//Remove Code from CodePrompt
		document.getElementById("codeField").value = "";
		openTab('Hint1',1);
	} else{
		//Invalid Code
		urlParams.delete("v");
		loadEnterCode();
	}
}


function showNextHintTab(){
	for(i = 0; i < hints.length; i++){
		if(!hints[i]){
			//Name should be "locked"
			tablinks = document.getElementsByClassName("tablinks");
			tablinks[i].style.display= "block";
			break;
		}
	}
}

function hideTabBar(){
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.display = "none";
	}
}

function showBackButton(){
	backButton = document.getElementById("back");
	backButton.style.display = "block";

}

function back(){
	resetSite();
}

function resetSite(){
	hints = [false, false, false];
	hintText = []
	hideTabContent();
	hideTabBar();
	loadEnterCode();

}

function unlock(){
	var i;
	for(i = 0; i < hints.length; i++){
		if(!hints[i]){
			hints[i] = true;
			break;
		}
	}
	//change name from "locked" back to "Hint(i+1)"
	showNextHintTab();
	openTab("Hint" + (i+1), (i+1));
}
