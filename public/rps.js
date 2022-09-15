const redBtn = document.getElementById('red-square');
let textContainer = document.getElementById('text-container');
let scoreNumber = document.getElementById('score');
let hands = document.getElementById('hands');
const clearBtn = document.getElementById('clear');
let comScore = document.getElementById('com');


function getComputerChoice(){

	const rpsChoice = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = rpsChoice[randomNumber];

  return computerChoice;
}
// the object below is for incrementing the score

const objectScore = {

	 playerPoints: 0,
	 computerPoints: 0
}
 let cP = objectScore.computerPoints;
 let pP = objectScore.playerPoints;


function result(playerChoice, computerChoice){

	let score;

	if (playerChoice == 'rock' && computerChoice == 'scissors') {

        score = 1;
        objectScore.playerPoints++;

	}else if (playerChoice == 'paper' && computerChoice == 'rock') {

		score = 1;
		objectScore.playerPoints++;

	}else if (playerChoice == 'scissors' && computerChoice == 'paper'){

		score = 1;
		objectScore.playerPoints++;

	}else if (computerChoice == playerChoice) {

		score = 0;
		// objectScore.playerPoints = objectScore.playerPoints;
		// objectScore.computerPoints = objectScore.computerPoints;

	}else {

		score = -1; 
		objectScore.playerPoints--;
		objectScore.computerPoints++;

	}

	 return score; 
	 return objectScore.playerPoints;
	 return objectScore.computerPoints;

}

function showResult(score, playerChoice, computerChoice, cP, pP){

	if (score == -1){
       textContainer.innerHTML = 'You lose';

	}else if (score == 0) {
		textContainer.innerHTML = 'Its a tie'
	}else {
		textContainer.innerHTML = 'You won';
	}

	scoreNumber.innerHTML = `Your score is: ${objectScore.playerPoints}`;
	hands.innerHTML = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
	comScore.innerHTML = `Computer score: ${objectScore.computerPoints}`;

	// the line below is just for testing

	console.log(objectScore);

}

function onClickRPS(playerChoice, computerChoice){

  let computer = getComputerChoice();
  const score = result(playerChoice.value, computer);
  showResult(score, playerChoice.value, computer, cP.value, pP.value);


}

function playGame(){

	const rpsButtons = document.querySelectorAll('#game');

	rpsButtons.forEach(button => {

		button.onclick = () => {

			onClickRPS(button);

			clearBtn.animate([
               {top: '63%'}],
               {
                duration: 150,
                easing: 'ease-in-out',
                fill: 'forwards'
               }
           );
		}


	});

    redBtn.onclick = () => endGame();


}


function endGame(){

	scoreNumber.innerHTML = '';
	hands.innerHTML = '';
	result.innerHTML = '';
	textContainer.innerHTML = '';
	comScore.innerHTML = '';
    
    clearBtn.animate([
               {top: '49%'}],
               {
                duration: 133,
                easing: 'ease-in-out',
                fill: 'forwards'
               }
    );

}

playGame();


