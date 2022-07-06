var hintText = [];
function loadHintsByCode(code){
	correct = true;
	switch(code){
	case "Layton":
		hintText = ["The videogame series is loved and played by not only gentlemen but also by a lot of other people.", 
					"Hints are an optional part of gameplay.<br> These are sometimes helpful and sometimes they refuse to help.<br>This Website tries to remake the hint page. If you compare it to the original, I'd say it looks not that bad :)",
					"The main character is a professor of archaeology, but you rarely see him doing his profession."];
		break;
	case "1.0.0":
		hintText = ["The perk in question is a killer perk.", 
					"The perk is not bound to a specific killer, it is a general perk.",
					"Actually the perk is about to get reworked in Patch 6.1.0"];
		break;
	default:
		correct = false;
		break;
	}
	return correct;
}
