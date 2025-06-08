let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');
const msg_p = document.getElementById('msg');
const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
  choice.addEventListener('click', () => playRound(choice.id));
});

function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * 3)];
}

function playRound(userChoice) {
  const compChoice = computerPlay();
  let result;

  if (userChoice === compChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')
  ) {
    userScore++;
    result = `You win! ${capitalize(userChoice)} beats ${compChoice}.`;
  } else {
    computerScore++;
    result = `You lose! ${capitalize(compChoice)} beats ${userChoice}.`;
  }

  updateDOM(result);
}

function updateDOM(message) {
  userScore_span.textContent = userScore;
  compScore_span.textContent = computerScore;
  msg_p.textContent = message;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
