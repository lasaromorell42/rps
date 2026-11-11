
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
}

function playGame(){
    for (let i = 0; i < 5; i++){
        humanSelection = getHumanChoice();
        computerScore = getComputerChoice();
        playRound(humanSelection, computerScore);
    }
    console.log(`Result. Player: ${humanScore}\tComputer: ${computerScore}`);
}
playGame();