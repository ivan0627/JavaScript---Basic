
const getUserChoice = (userInput)=> {
  userInput.toLowerCase();
 if (userInput === "rock" || userInput == "paper" || userInput === "scissors") {
    return userInput;
  }else {console.log ("incorrect")}

};

const getComputerChoice = (randomNumber) => {
  randomNumber = Math.floor(Math.random()*3)
  switch (randomNumber) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
     case 0:
      return 'scissors' ;
  }
}


const determineWinner = (userChoice, computerChoice) => {
if (userChoice === "bomb") {return "User won"}
else if (userChoice === computerChoice) {
    return "Tie"
  }
else if (userChoice === 'rock')
  {
    if (computerChoice === 'paper'){return  'Computer won'}
   else if (computerChoice == 'scissors') {return 'User won'}
   else {return "Invalid Entry"};}
else if (userChoice === 'paper')
  { if (computerChoice === 'rock'){return 'User won'}
  else if (computerChoice === 'scissors'){return 'Computer won'}
  else{return 'invalid Entry'}  }
else if (userChoice === 'scissors') {
    if (computerChoice == ' paper'){return "User Won"}
    else if (computerChoice === 'rock'){return 'Computer won'}
    else{return "Invalid Entry"}
  }
}


const playGame = () => {
  const userChoice = getUserChoice('rock');
  console.log("You chose: " + userChoice)
  const computerChoice = getComputerChoice();
  console.log("The computer chose: "+computerChoice)
  console.log("And the result is: "+ (determineWinner(userChoice,computerChoice)));
  
};

playGame();


