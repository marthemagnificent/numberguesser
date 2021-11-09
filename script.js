let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    //generates random number for the game
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, target) => {
    //this determines who's guess was closer to the actual number
    let humanNum = Math.abs(target-humanGuess);
    let computerNum = Math.abs(target-computerGuess);

    //determines the winner based on the smallest number
    if (humanNum <= computerNum) {
        return true;
    } else if (humanNum > computerNum) {
        return false
    } else {
        return true;
    }
    
}

const updateScore = (winner) => {
    //adds a point to whoever won the round
    if (winner === 'human'){
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

const advanceRound = () => {
    //updates round number
    currentRoundNumber += 1;
}