const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        RPS(e.target.id);
    });
});

const eventText = document.querySelector('.eventText');
const computerChoice = document.querySelector('.computerChoice');
const currentScore = document.querySelector('.currentScore');
let playerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

function RPS(playerSelection)
{
    let computerSelection = getComputerChoice();
    playerSelection.toLowerCase();
    computerChoice.textContent = computerSelection;

    if(playerSelection == "rock")
    {
        if(computerSelection == "Paper")
            eventText.textContent = "The computer won.";

        else if(computerSelection == "Scissors")
        {
            eventText.textContent = "Congrats. You won!";
            currentScore.textContent = ++playerScore;
        }

        else
            eventText.textContent = "It's a Draw!";
    }
    else if(playerSelection == "Paper")
    {
        if(computerSelection == "Scissors")
            eventText.textContent = "The computer won.";

        else if(computerSelection == "Rock")
        {
            eventText.textContent = "Congrats. You won!";
            currentScore.textContent = ++playerScore;
        }
        
        else
            eventText.textContent = "It's a Draw!";
    }
    else
    {
        if(computerSelection == "Rock")
            eventText.textContent = "The computer won.";
        
        else if(computerSelection == "Paper")
        {
            eventText.textContent = "Congrats. You won!";
            currentScore.textContent = ++playerScore;
        }

        else
            eventText.textContent = "It's a Draw!";
    }
}