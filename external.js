let userInput = "";
const count = {
    userScore: 0,
    computerScore: 0

};
const computerPlay = function () {

    let computerChoice = Math.floor(Math.random()*3 + 1);
    return (computerChoice === 1)? computerChoice = "ROCK":
    (computerChoice === 2)? computerChoice = "PAPER":
    (computerChoice === 3)? computerChoice = "SCISSOR": console.error("computer choice is not defined!");

};
const rockPaperScissor = function (computerSelection, playerSelection) {
    
    userInput = prompt("['ROCK', 'PAPER', 'SCISSOR'] - choose to play with Computer!").toUpperCase();
    
    if (count.computerScore < 5 && count.userScore < 5){
        if(userInput === "ROCK" && computerPlay === "PAPER"){
            if(userInput=== "PAPER" && computerPlay === "SCISSOR"){
                if(userInput === "SCISSOR" && computerPlay === "ROCK"){
    
                    count.computerScore++;
                    return `You Lose! ${computerPlay()} beats your ${userInput}`;
                }
            }
        }else if (userInput === computerPlay){
            console.log(`Score:/nComputer:${count.computerScore} /nUSER: ${count.userScore}`);
            return `Draw! computer use ${computerPlay()}, same with user using ${userInput}`;
        }
    } else if (count.computerScore >= 5 || count.userScore >= 5){

    }

    playerSelection = userInput; 
    computerSelection = computerPlay();
    console.log(`SCORE:
    ===================
    Computer:${count.computerScore}
    User: ${count.userScore}
    ===================`);
    return "Match already reach 5";

}