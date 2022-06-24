const count = {
    userScore: 0,
    computerScore: 0,
}

function game() {
    for (; count.userScore < 5 && count.computerScore < 5;) {
       gameExecution( computerPlay(), prompt(`User: ${count.userScore} | Computer: ${count.computerScore}\n['rock', 'paper', 'scissor'] - Choose one: `).toString());

       
     }
     let winner = (count.userScore >= 5)? "Cool Player win! " : "Mighty Computer win! ";

     let playAgain = confirm(`${winner}Would you like to try again?`);
     if(playAgain){
        count.userScore = 0; 
        count.computerScore = 0; 
        game(); 
        
     }else{
        alert("Thanks for Playing! If you change your mind, just reload the game.");
    } 

}

function computerPlay() {
    const randomAnswer = Math.floor(Math.random() * 3 + 1);
    return (randomAnswer === 1)? "rock":
    (randomAnswer === 2)? "paper": "scissor";
}

function gameExecution(computerSelection, userSelection) {
    userSelection = userSelection.toLowerCase();

    //     computerPlay() =  Rock:1 Paper:2   Scissor:3  so this will be the guide on how to decide if identical or not
    const winMessage = `you win! ${userSelection} beats ${computerSelection}.`;
    const loseMessage = `you lose! ${userSelection} beats by ${computerSelection}.`;
    const drawMessage = `DRAW! your ${userSelection} is same with computer's ${userSelection}.`;

    // ----------------WIN---------------------------
    const result = (userSelection === "rock" && computerSelection === "scissor")? `User Points: ${++count.userScore}, ${winMessage}`:
    (userSelection === "scissor" && computerSelection === "paper")? `User Points: ${++count.userScore}, ${winMessage}`:
    (userSelection === "paper" && computerSelection === "rock")? `User Points: ${++count.userScore}, ${winMessage}`:
    // ---------------LOSE---------------------------
    (userSelection === "paper" && computerSelection === "scissor")? `Computer Points: ${++count.computerScore }, ${loseMessage}`:
    (userSelection === "scissor" && computerSelection ==="rock")? `Computer Points: ${++count.computerScore}, ${loseMessage}`: 
    (userSelection === "rock" && computerSelection === "paper")? `Computer Points: ${++count.computerScore}, ${loseMessage}`:
    // --------------DRAW---------------------------
    (userSelection === 'scissor' && computerSelection === "scissor")? `${drawMessage}`:
    (userSelection === 'paper' && computerSelection === "paper")? `${drawMessage}`:
    (userSelection === 'rock' && computerSelection === "rock")? `${drawMessage}`:
    //---------------ERROR--------------------------
    (userSelection !== "rock" || userSelection !== "paper" || userSelection !== "scissor")? userSelectionWrong(): 
    (userSelection === "")? userSelectionWrong() : "Something Happen, Error";
    
    alert(result);
}

function userSelectionWrong() {
    // Incase of user inputs not in choices, then this will trigger
    alert("Your input is not in the choices. Please follow the program. Repeating Process..");
    gameExecution(computerPlay(), prompt(`User: ${count.userScore} | Computer: ${count.computerScore}\n['rock', 'paper', 'scissor'] - Choose one: `).toString());
}

game();

