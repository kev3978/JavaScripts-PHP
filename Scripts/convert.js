/* Exchange rates   [ //USD,GBP,CAD,EUR,AUD--->
					  [1 ,2.03032 ,1.01941 ,1.41544 ,0.88297] //USD 
					  [0.49246 ,1 ,0.50221 ,0.69714 ,0.43497] //GBP
					  [0.98054 ,1.99169 ,1 ,1.38814 ,0.86613] //CAD
					  [0.70641 ,1.43448 ,0.72037 ,1 ,0.62382] //EUR
					  [1.13262 ,2.29964 ,1.15498 ,1.60329 ,1] //AUD  
					];
 */

function usdFunct() {
	var exUS = [0.49246, 0.98054, 0.70641, 1.13262];
	var Input = document.getElementById("USD").value;
	var USD   = parseFloat(Input);
	document.getElementById("GBP").value = parseFloat(USD*exUS[0]).toFixed(2);
	document.getElementById("CAD").value = parseFloat(USD*exUS[1]).toFixed(2);
	document.getElementById("EUR").value = parseFloat(USD*exUS[2]).toFixed(2);
	document.getElementById("AUD").value = parseFloat(USD*exUS[3]).toFixed(2);
}
function gbpFunct() {
	var exGBP = [2.03032, 1.99169, 1.43448, 2.29964];
	var Input = document.getElementById("GBP").value;
	var GBP   = parseFloat(Input);
	document.getElementById("USD").value = parseFloat(GBP*exGBP[0]).toFixed(2);
	document.getElementById("CAD").value = parseFloat(GBP*exGBP[1]).toFixed(2);
	document.getElementById("EUR").value = parseFloat(GBP*exGBP[2]).toFixed(2);
	document.getElementById("AUD").value = parseFloat(GBP*exGBP[3]).toFixed(2);
}
function cadFunct() {
	var exCAD = [1.01941, 0.50221, 0.72037, 1.15498];
	var Input = document.getElementById("CAD").value;
	var CAD   = parseFloat(Input);
	document.getElementById("USD").value = parseFloat(CAD*exCAD[0]).toFixed(2);
	document.getElementById("GBP").value = parseFloat(CAD*exCAD[1]).toFixed(2);
	document.getElementById("EUR").value = parseFloat(CAD*exCAD[2]).toFixed(2);
	document.getElementById("AUD").value = parseFloat(CAD*exCAD[3]).toFixed(2);
}

function audFunct() {
	var exAUD = [1.41544, 0.69714, 1.38814, 1.60329];
	var Input = document.getElementById("AUD").value;
	var AUD   = parseFloat(Input);
	document.getElementById("USD").value = parseFloat(AUD*exAUD[0]).toFixed(2);
	document.getElementById("GBP").value = parseFloat(AUD*exAUD[1]).toFixed(2);
	document.getElementById("CAD").value = parseFloat(AUD*exAUD[2]).toFixed(2);
	document.getElementById("EUR").value = parseFloat(AUD*exAUD[3]).toFixed(2);
}
function eurFunct() {
	var exEUR = [0.88297, 0.43497, 0.86613, 0.62382];
	var Input = document.getElementById("EUR").value;
	var EUR   = parseFloat(Input);
	document.getElementById("USD").value = parseFloat(EUR*exEUR[0]).toFixed(2);
	document.getElementById("GBP").value = parseFloat(EUR*exEUR[1]).toFixed(2);
	document.getElementById("CAD").value = parseFloat(EUR*exEUR[2]).toFixed(2);
	document.getElementById("AUD").value = parseFloat(EUR*exEUR[3]).toFixed(2);
}