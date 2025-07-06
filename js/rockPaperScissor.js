let userScore = 0;
let computerScore = 0;
let tieScore = 0;

function playGame(choice) {
  console.log("Game started with choice:", choice);
  // Your game logic here

  const choices = ["rock", "paper", "scissor"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log("Computer choice:", computerChoice);
  let result = "";
  if (choice === computerChoice) {
    tieScore++;
    result = `It's a tie! You choose ${choice}, Computer choosed ${computerChoice}.`;
  } else if (
    (choice === "rock" && computerChoice === "scissor") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissor" && computerChoice === "paper")
  ) {
    userScore++;
    result = `You win! You choose ${choice}, Computer choosed ${computerChoice}.`;
  } else {
    computerScore++;
    result = `You lose! You choose ${choice}, Computer choosed ${computerChoice}.`;
  }

  document.getElementById("result").textContent = result;

  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("tie-score").textContent = tieScore;
}

document.getElementById("rock").addEventListener("click", function () {
  playGame("rock");
});
document.getElementById("paper").addEventListener("click", function () {
  playGame("paper");
});
document.getElementById("scissor").addEventListener("click", function () {
  playGame("scissor");
});
