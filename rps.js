let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {

  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


function convertToWord(letter) {
if (letter === "r") return "Rock";
if (letter === "p") return "Paper";
if (letter === "s") return "Scissors";

}


function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  if (userScore < 7){
  result_div.innerHTML = convertToWord(userChoice) + " Beats " + convertToWord(computerChoice) + ". You Won!";
  } else if (userScore === 7) {
 result_div.innerHTML = "Game Over! You Win! Press Restart.";
 endGame();
 restartScores();
 restartGame();

  };
}


function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  
  if (computerScore < 7) {
  result_div.innerHTML = convertToWord(userChoice) + " Loses To " + convertToWord(computerChoice) + ". You Lost!";
  } else if (computerScore === 7) {
    result_div.innerHTML = "Game Over! You Lost! Press Restart."
    endGame();
    restartScores();
    restartGame();
  };
}


function draw(userChoice, computerChoice) {
  result_div.innerHTML = convertToWord(userChoice) + " Is Equal To "+ convertToWord(computerChoice) + ". It's A Draw!";
  
}


function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;

      case "rp":
      case "ps":
      case "sr":
        lose(userChoice, computerChoice);
        break;

      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, computerChoice);
        break;
  }
}       

function endGame() {
  rock_div.disabled = true;
  paper_div.disabled = true;
  scissors_div.disabled = true;
}

function restartGame() {
  restartScores();
  rock_div.disabled = false;
  paper_div.disabled = false;
  scissors_div.disabled = false;
}

function restartScores() {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
}






function main()
{
rock_div.addEventListener('click', function()
{
  game("r");
})

paper_div.addEventListener('click', function()
{
  game("p");
})

scissors_div.addEventListener('click', function()
{
  game("s");
})
}


main();