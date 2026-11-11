
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    //0=rock, 1=paper, 2=scissors
    return Math.floor(Math.random()*3);
}
function getHumanChoice(){
    let humanChoice = prompt("Enter rock, paper, or scissors: ");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === 'rock'){
        return 0;
    }
    else if (humanChoice == 'paper'){
        return 1;
    }
    else{
        return 2;
    }
}

function playRound(humanChoice, computerChoice){
    let d = {0:'rock', 1:'paper', 2:'scissors'};
    let gameOutcome =  `${d[humanChoice]} against ${d[computerChoice]}`
    if (humanChoice === computerChoice){
        console.log(`Tied ` + gameOutcome);
        computerScore += 1;
        humanScore += 1;
    }
    else if (humanChoice===0 && computerChoice===1 ||
        humanChoice===1 && computerChoice===2||
        humanChoice===2 && computerChoice===0
    ){
        console.log('Lost ' + gameOutcome);
        computerScore += 1;
    }
    else{
        console.log('Won ' + gameOutcome);
        humanScore += 1;
    }
    if (humanScore == 5 && computerScore == 5){
        alert("Tie");
        humanScore = 0;
        computerScore = 0;
    }
    else if (humanScore == 5){
        alert("You won!");
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        alert("Computer won!");
        humanScore = 0;
        computerScore = 0;
    }
    roundResults.textContent = `You: ${humanScore} Machine: ${computerScore}`;
}

selectRock = document.getElementById("rock");
selectPaper = document.getElementById("paper");
selectScissors = document.getElementById("scissors");

roundResults = document.createElement("div");
container = document.getElementById("container");
container.appendChild(roundResults);

selectRock.addEventListener('click', (ev) => {ev.preventDefault(); playRound(0, getComputerChoice())});
selectPaper.addEventListener('click', (ev) => {ev.preventDefault(); playRound(1, getComputerChoice())});
selectScissors.addEventListener('click', (ev) => {ev.preventDefault(); playRound(2, getComputerChoice())});


