const choices = ["rock","paper","scissors"];
const winners = [];

function game() {
   for (i=1; i<=5; i++) { 
        playRound(i);
    }
    logWinner();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    logRound(playerSelection,computerSelection,winner,round);
    winners.push(winner);
}

function playerChoice() {
    let input = prompt("Type Rock, Paper or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Capitalization doesn't matter but spelling is recommended!!!");
   
    while (input == null) {
        input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
}
    return input;
 }

function computerChoice() {
return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
   return choices.includes(choice);
}

function checkWinner(player, computer) {
    // console.log(player, computer);
    if (player === computer) {
        return "equalize";
    } else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        return "Player";
    } else {
        return "Computer";
    }
}

function logWinner() {
    let playerwin = winners.filter((win) => win == "Player").length;
    let computerwin = winners.filter((win) => win == "Computer").length;
    let equalizewin = winners.filter((win) => win == "equalize").length;

    console.log("Results: ");
    console.log("Player wins: ", playerwin);
    console.log("Computer wins: ", computerwin);
    console.log("Equalize: ", equalizewin);
}

function logRound(playerChoice, computerChoice, winner, round) {
console.log("Round: ", round);
console.log("Player chose: ", playerChoice);
console.log("Computer chose: ", computerChoice);
console.log(winner, "Won the round");
console.log("...............................");
}

game();