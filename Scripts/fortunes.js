function fortuneTeller() {
	//creates fortunes array and sets fortunes
	var fortunes = new Array();
	fortunes[0] = "You will become great if you believe in yourself.";
	fortunes[1] = "Serious trouble will bypass you";
	fortunes[2] = "Wealth awaits you very soon.";
	fortunes[3] = "Now is the time to try something new.";
	fortunes[4] = "When Winter comes, Spring will follow shortly";
	fortunes[5] = "Why tip at self service?";
	fortunes[6] = "Everyone had a meeting. You are the best.";
	fortunes[7] = "Fortune favours the brave";
	fortunes[8] = "If you're going through Hell, keep going";
	fortunes[9] = "True greatness is getting a bad hand of cards and still winning";
	fortunes[10]= "Doing something is much less of a risk than doing nothing";
	
	//picks random fortune
	roll = Math.floor((Math.random() * 11) );
	document.write(fortunes[roll]);
}