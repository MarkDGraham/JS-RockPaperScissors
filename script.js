const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        TicTacToe(e.target.id);
    });
});

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

function TicTacToe(playerSelection)
{
    let computerSelection = getComputerChoice().toLowerCase();
    playerSelection.toLowerCase();

    if(playerSelection == "rock")
    {
        if(computerSelection == "paper")
        {
            console.log("Computer won with " + computerSelection);
        }
        else if(computerSelection == "scissors")
        {
            console.log("Congrats! You won!");
        }
        else
        {
            console.log("The result is a Draw!");
        }
    }
    else if(playerSelection == "paper")
    {
        if(computerSelection == "scissors")
        {
            console.log("Computer won with " + computerSelection);
        }
        else if(computerSelection == "rock")
        {
            console.log("Congrats! You won!");
        }
        else
        {
            console.log("The result is a Draw!");
        }
    }
    else
    {
        if(computerSelection == "rock")
        {
            console.log("Computer won with " + computerSelection);
        }
        else if(computerSelection == "paper")
        {
            console.log("Congrats! You won!");
        }
        else
        {
            console.log("The result is a Draw!");
        }
    }
}