const count = {
    userScore: 0,
    computerScore: 0,
}

function computerPlay() {
    const randomAnswer = Math.floor(Math.random() * 3 + 1);
    return (randomAnswer === 1)? "rock":
    (randomAnswer === 2)? "paper": "scissor";
}

function game() {
    for (; count.userScore < 5 && count.computerScore < 5 && count.userScore !== null;) {
       gameExecution( computerPlay(), prompt(`User: ${count.userScore} | Computer: ${count.computerScore}\n['rock', 'paper', 'scissor'] - CHOOSE ONE: `));  
    }
    let result = (count.userScore >= 5)? "Cool Player win! " : 
    (count.computerScore >= 5)? "Mighty Computer win! " :  
    (count.userScore === null)?"You just quit the game, ": "Something is wrong with the code";
    let playAgain = confirm(`${result}Would you like to try again?\n[Cancel] - No\n[Okay] - Yes *Scores = 0*`);
    if(playAgain){
        count.userScore = 0; 
        count.computerScore = 0;
        count.terminate = false;
        game(); 
        
    }else{
        alert("Thanks for Playing! If you change your mind, just reload the game.");
    } 
}

function gameExecution(computerSelection, userSelection) {

    while (userSelection !== "rock" && userSelection !== "paper" && userSelection !== "scissor" && userSelection !== null) {
        alert(`Input ${userSelection} is not at choice, please try again.`);
        userSelection =  prompt(`User: ${count.userScore} | Computer: ${count.computerScore}\n['rock', 'paper', 'scissor'] - Choose one: `);
        
    }
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
    (userSelection === 'rock' && computerSelection === "rock")? `${drawMessage}`: "What are the coder doing? there's wrong in the code";
    //---------------Error/Reset-----------------------------
    if(userSelection === null){
        alert`Quiting the game..`;
        return count.userScore= null;;
    }
    
    alert(result);
}

game();


