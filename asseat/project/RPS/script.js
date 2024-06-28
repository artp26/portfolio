//rule
const closeRules = () => {
	const gameRule = document.getElementById("gameRule");
	if (gameRule.style.display === "flex") {
		gameRule.style.display = "none";
	} else {
		gameRule.style.display = "flex";
	}
};
window.onload = () => {
	if (localStorage.getItem('userScore')) {
		var userScore = localStorage.getItem('userScore');
		var pcScore = localStorage.getItem('pcScore');
	}
	else {
		var userScore = 0;
		var pcScore = 0;
	}
	document.getElementById('userScore').innerHTML = userScore
	document.getElementById('pcScore').innerHTML = pcScore
}
const refresh = () => {
	localStorage.setItem('userScore', 0)
	localStorage.setItem('pcScore', 0)
	location.reload();
}
// game
const playagain = () => {
	document.getElementById("selects").style.display = "flex";
	document.getElementById("Result").style.display = "none";
};
if (localStorage.getItem('userScore')) {
	var userScore = localStorage.getItem('userScore');
	var pcScore = localStorage.getItem('pcScore');
}
else {
	var userScore = 0;
	var pcScore = 0;
} const letsPlay = (userChoice) => {
	localStorage.setItem('userScore', userScore)
	localStorage.setItem('pcScore', pcScore)
  const resultLoad = document.createElement("div");
	resultLoad.classList.add("winner");
	if (userChoice === "rock") {
		document.getElementById('myChoice').style.border = "20px solid #0074b6";
		document.getElementById("userChoice").src = "./image/rock.png";
	} else if (userChoice === "paper") {
		document.getElementById('myChoice').style.border = "20px solid #ffa943";
		document.getElementById("userChoice").src = "./image/paper.png";
	} else if (userChoice === "scissor") {
		document.getElementById('myChoice').style.border = "20px solid #bd00ff";
		document.getElementById("userChoice").src = "./image/scissor.png";
	}
	document.getElementById("selects").style.display = "none";
	document.getElementById("Result").style.display = "flex";
	document.getElementById("choiceResultDetails").style.transform = "scale(0)";
	document.getElementById("displayDone").style.display = "none";
	document.getElementById("display").style.display = "inherit";
	const elements = document.querySelectorAll(`.winner`);
	elements.forEach(element => {
		element.remove();
	});
	// Get the select
	interval = setInterval(() => {
		clearInterval(interval);
		play(userChoice);
	}, 1500);
};
const play = (userChoice) => {
	document.getElementById("choiceResultDetails").style.transform = "scale(1)";
	document.getElementById("displayDone").style.display = "inherit";
	document.getElementById("display").style.display = "none";
	const choices = ["rock", "paper", "scissor"];
	const randomIndex = Math.floor(Math.random() * 3);
	const computerChoice = choices[randomIndex];
	// Select User Choice
	const resultLoad = document.createElement("div");
	resultLoad.classList.add("winner");
	// Select Computer Choice
	if (computerChoice === "rock") {
		document.getElementById('pc  Choice').style.border = "20px solid #0074b6";
		document.getElementById("displayDone").src = "./image/rock.png";
	} else if (computerChoice === "paper") {
		document.getElementById('pcChoice').style.border = "20px solid #ffa943";
		document.getElementById("displayDone").src = "./image/paper.png";
	} else if (computerChoice === "scissor") {
		document.getElementById('pcChoice').style.border = "20px solid #bd00ff";
		document.getElementById("displayDone").src = "./image/scissor.png";
	}
	let result = "";
	if (userChoice === computerChoice) {
		result = "It's a tie!";
		document.getElementById("yourTitle").innerHTML = "TIE  UP! ";
		document.getElementById("resultTie").innerHTML = "AGAINST PC";
	} else if (
		(userChoice === "rock" && computerChoice === "scissor") ||
		(userChoice === "paper" && computerChoice === "rock") ||
		(userChoice === "scissor" && computerChoice === "paper")
	) {
		result = "You win!";
		userScore++;
		localStorage.setItem('userScore', userScore)
		localUserScore = localStorage.getItem('userScore')
		document.getElementById("userScore").innerHTML = localUserScore;
		document.getElementById("yourTitle").innerHTML = "YOU WIN !!!!";
		document.getElementById("resultTie").innerHTML = "AGAINST PC";
		document.getElementById("myChoice").appendChild(resultLoad);
	} else {
		result = "You lose!";
		pcScore++;
		localStorage.setItem('pcScore', pcScore)
		localPCScore = localStorage.getItem('pcScore')
		document.getElementById("pcScore").innerHTML = localPCScore;
		document.getElementById("yourTitle").innerHTML = "YOU LOST !";
		document.getElementById("resultTie").innerHTML = "AGAINST PC";
		document.getElementById("pcChoice").appendChild(resultLoad);
	}
	if (result === "You win!") {
		document.getElementById('next').style.display = 'inherit'
	} else {
		document.getElementById('next').style.display = 'none'
	}
};
