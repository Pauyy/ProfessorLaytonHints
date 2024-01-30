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
	case "such-math":
		hintText = ["The burger is equal to 2, while the sparkling wine is equal to 4 and the beer equals 3. But that was easy, right?", 
					"Don't get confused by all the emojis. Substitute the known ones with numbers and the unknown ones with variables. After that you should get a better overview.",
					"The sum appears to be a coefficient, so evaluate, substitude and the integral should be easy to solve."];
		break;
	case "stream":
		hintText = ["Was würde es eigentlich bedeuten wenn F wirklich die Wahrheit spricht?", 
					"C beschuldigt A und B des lügens, mindestens einer von ihnen kann also keine Wahrheit sprechen.",
					"Es gibt nur eine Person die den Stream nicht gesehen hat, wer von den dreien muss dann den Stream verpasst haben wenn C lügen würde."];
		break;
	default:
		correct = false;
		break;
	}
	return correct;
}
