let userScore = 0;
let compsScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg")
const userDisplay = document.querySelector("#user-score")
const computerDisplay = document.querySelector("#comp-score")
// const resetButton = document.getElementById('reset-button');



function userLoose(){
    console.log("Computer Wins")
}

const userWin =()=>{
   console.log("You Win");

}
function drawGame(){
    console.log("game was drarw")
}

function genCompChoice(){
    var options = ["rock","paper","scissors"]
     let compIdx = Math.floor(Math.random()*3)
     return options[compIdx];
}

function playGame(userChoice){
    console.log("User choice  =" , userChoice)
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
    if(userChoice===compChoice){
         drawGame();
         msg.innerText = "Game was draw";
         msg.style.backgroundColor = "#081b31";
    }
    else if((userChoice === 'rock' && compChoice === 'scissors')||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')){
        userWin();
        msg.innerText = `You Win!  Your ${userChoice} beats ${compChoice} ` ; 
        msg.style.backgroundColor = "green";
        userScore++;
        userDisplay.innerText = userScore;
    }
     else{
         userLoose();
         msg.innerText = `You Lost!  ${userChoice} beats Your ${compChoice} ` ;
         msg.style.backgroundColor = "red";
         compsScore++;
         computerDisplay.innerText = compsScore

     }
     
     
}
function resetGame() {
    userScore = 0;
    compsScore = 0;
    userDisplay.innerText = userScore;
    computerDisplay.innerText = compsScore;
    msg.innerText = "Play your moves";
    msg.style.backgroundColor = "";
}

choices.forEach((choice) => {
 choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("Choices was Clicked", userChoice);
    playGame(userChoice);
 })
})
 