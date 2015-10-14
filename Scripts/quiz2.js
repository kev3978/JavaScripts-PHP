function quiz() {
	//Questions and answers stored here, can be added easily by creating a new object inside the array 'questions'
	
	//Questions and answers bank
	var questions = [
					{Q:"What is the capital of France?", A1:"A-Paris", A2:"B-London", A3:"C-Croissant", ans:"A"},
					{Q:"Where do Real Madrid play their home games?",A1:"A-Deepdale",A2:"B-The Bernabeu",A3:"C-Under a skip",ans:"B"},
					{Q:"Who created the division of labour?",A1:"A-Tony Blair",A2:"B-Popeye",A3:"C-Adam Smith",ans:"C"},
					{Q:"In which US State would you find Seattle? ",A1:"A-Washington",A2:"B-Texas",A3:"C-Oregon",ans:"A"},
					{Q:"Who played Frank Abignale Jnr. in Catch Me if you Can?",A1:"A-Leonardo DiCaprio",A2:"B-Clint Eastwood",A3:"C-Kate Winslet",ans:"A"},
					{Q:"Which UK city holds the record for most rainfall in 5 minutes?",A1:"A-Oxford",A2:"B-London",A3:"C-Preston",ans:"C"},
					{Q:"Peter Kay had a hit tv series called what?",A1:"A-Phoenix Nights",A2:"B-I am very funny",A3:"C-Peter Kay and the Goblet of Cider",ans:"A"},
					{Q:"How many sides does a square have?",A1:"A-4",A2:"B-4",A3:"C-None",ans:"A"},
					{Q:"What year did England win the World Cup?",A1:"A-1958",A2:"B-1966",A3:"C-1970",ans:"B"},
					{Q:"Who wrote 'To Kill a Mockingbird'?",A1:"A-David Moyes",A2:"B-Alan Sugar",A3:"C-Harper Lee",ans:"C"}
					];




					
	var flag = 0;
	var qlength=questions.length;
	
	//Ask for number of questions, set default of 5 if invalid input. This system allows updates to re-ask question
	while (flag==0) {
		var noQu = prompt("Please enter the number of questions desired (up to and including "+qlength+")","5");
		noQu = parseInt(noQu);
		if (noQu<=qlength&&noQu>0) {
			flag=1;
		}
		else {
			window.alert("The default setting of 5 questions has been used");
			noQu=5;
			flag=1;
		}
	}
	
	//Create possible rolls array--if a question number selected matches the
	//corresponding element, that roll is removed and cannot be used again
	//should be in the form of [0,1,2,3,4,5,6,7,8,9] for 10 questions
	var rolls =[];
	rolls[0]=0;
	for (k=1;k<qlength;k++) {
		rolls[k]=k;
	}

	//Initialise counter
	var i = 0;
	var QuestionList=[];
	var x;

	//Add to question list without any repeats.
	while (i<noQu) {
		x = Math.floor((Math.random()*(qlength)));
		if (x==rolls[x]) {
			QuestionList[i]=x;
			i++;
			rolls[x]=99;
		}
	}

	//Ask Questions
	var userAnswer;
	var Q;
	var Qx;
	var results=[];
	for ( c=1;c<=noQu;c++) {
		Qx= QuestionList[c-1];
		Qa = questions[Qx]['Q'];
		Qb = questions[Qx]['A1'];
		Qc = questions[Qx]['A2'];
		Qd = questions[Qx]['A3'];
		Qe = questions[Qx]['ans'];
		userAnswer = prompt(Qa+"\n"+Qb+"\n"+Qc+"\n"+Qd, "A");
		
		if (userAnswer==questions[Qx]['ans']) {
			results[c-1] = 1;
			var node=document.createElement("LI");
			//var textnode=document.createTextNode("To the question "+questions[Qx]['Q']+" you answered "+userAnswer+" which was correct!");
			node.appendChild(document.createTextNode("To the question: "));
			node.appendChild(document.createTextNode(questions[Qx]['Q']));
			node.appendChild(document.createElement("br"));
			node.appendChild(document.createTextNode(questions[Qx]['A1']));
			node.appendChild(document.createElement("br"));
			node.appendChild(document.createTextNode(questions[Qx]['A2']));
			node.appendChild(document.createElement("br"));
			node.appendChild(document.createTextNode(questions[Qx]['A3']));
			node.appendChild(document.createElement("br"));
			node.appendChild(document.createTextNode("You answered: " +userAnswer));
			node.appendChild(document.createElement("br"));
			node.appendChild(document.createTextNode("Which is CORRECT"));
			node.appendChild(document.createElement("p"));
			document.getElementById('aq').appendChild(node);	
		}
		else {
			results[c-1]=0;
			var node=document.createElement("LI");
			node.appendChild(document.createTextNode("To the question: "));
			node.appendChild(document.createTextNode(questions[Qx]['Q']));
			node.appendChild(document.createElement("br"));
			node.appendChild(document.createTextNode(questions[Qx]['A1']));
			node.appendChild(document.createElement("br"));
			node.appendChild(document.createTextNode(questions[Qx]['A2']));
			node.appendChild(document.createElement("br"));
			node.appendChild(document.createTextNode(questions[Qx]['A3']));
			node.appendChild(document.createElement("br"));
			node.appendChild(document.createTextNode("You answered: " +userAnswer));
			node.appendChild(document.createElement("br"));
			node.appendChild(document.createTextNode("Which is INCORRECT"));
			node.appendChild(document.createElement("br"));
			node.appendChild(document.createTextNode("The correct answer was "+ questions[Qx]['ans']));
			node.appendChild(document.createElement("p"));
			
			document.getElementById('aq').appendChild(node);	
		}
		window.scroll(0,(c*100));
	}
	
	//Calculate results
	var tot=0;
	for (r=0; r<noQu;r++) {
	tot=tot+results[r];
	}
	var perc=100*(tot/noQu);
	document.getElementById("Result").innerHTML="Your total score was "+tot+"/"+noQu+" or "+perc.toFixed(2)+"%";
	
}
		
	
	
	
	
	