// This fucntion plays the computer part in the game
// It will generate random number associated with the arrays compGamePlay
function computerPlay(){
    let compRandom = Math.floor(Math.random()*compGamePlay.length);
    //console.log("the compRandom is: " + compRandom);
    let computerSelection = compGamePlay[compRandom];
    //console.log(computerSelection);
    return computerSelection;
}

// This is a function that takes in a playerAnswer and returns all the words in an answer
// in lower case format so we can use it in our next function-->game()
function playerAnswer(playerSelect){
    let playerSelection = playerSelect.toLowerCase();
    //console.log(playerAllSmall);
    return playerSelection;
}

// This function takes in a (playerSelection) and b(computerSelection) and compares them and
// returns the result about the winner
function playRound(a, b){
    console.log(":::Player--> "+ a + "  --  " + ":::Computer--> " + b);
    // create an array, we take a and b and push them into an array.
    // then we compare them in IF statements if any of these SIX conditions meet.
    let mainArray = [];
    mainArray.push(a);
    mainArray.push(b);
    if (mainArray[0] === 'rock' && mainArray[1] === 'paper') {
        return "You lose! Computer wins!";
    }
    else if (mainArray[0] === 'paper' && mainArray[1] === 'rock') {
        return "You win! Computer lose!";
    }
    else if (mainArray[0] === 'paper' && mainArray[1] === 'scissor') {
        return "You lose! Computer wins!";
    }
    else if (mainArray[0] === 'scissor' && mainArray[1] === 'paper') {
        return "You win! Computer lose!";
    }
    else if (mainArray[0] === 'scissor' && mainArray[1] === 'rock') {
        return "You lose! Computer wins!";
    }
    else if (mainArray[0] === 'rock' && mainArray[1] === 'scissor') {
        return "You win! Computer lose!";
    }
    else if (mainArray[0] === mainArray[1]) {
        return "it's a tie";
    }
    else {
        return "You have not selected 'ROCK' 'PAPER' OR 'SCISSOR'"
    }
}

// This is a function that calls the playRound function 5 times, and returns tha final
// winner after 5 rounds.
function game(){
        console.log(playRound());
        console.log(playRound());
}

// array of selections for computer to select from.
let compGamePlay = [
    'rock',
    'paper',
    'scissor'
];

//
//
//
const playerSelection = playerAnswer (prompt("Select only one from 'rock' 'paper' or 'scissor'"));
//console.log(playerSelection);
const computerSelection = computerPlay(compGamePlay);
//console.log(computerSelection);
const result = playRound(playerSelection, computerSelection);
game();