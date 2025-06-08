let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
};

const drawGame = () => {
    msg.innerText = "Game Draw! Try again.";
    msg.classList.remove("bg-success", "bg-danger");
    msg.classList.add("bg-primary", "text-white");
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; // Increment user score
        userScorePara.innerText = userScore;
        msg.innerText = `✅ You Win! ${userChoice} beats ${compChoice}`;
        msg.classList.remove("bg-primary", "bg-danger");
        msg.classList.add("bg-success", "text-white");
    } else {
        compScore++; // Increment computer score
        compScorePara.innerText = compScore;
        msg.innerText = `❌ You Lost! ${compChoice} beats ${userChoice}`;
        msg.classList.remove("bg-primary", "bg-success");
        msg.classList.add("bg-danger", "text-white");
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
        return;
    }

    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    const userWin = winConditions[userChoice] === compChoice;
    showWinner(userWin, userChoice, compChoice);
};

// Adding event listeners to each choice
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        msg.classList.remove("bg-primary", "bg-success", "bg-danger");
        playGame(userChoice);
    });
});
