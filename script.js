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
            return "Computer won with " + computerSelection;
        }
        else if(computerSelection == "scissors")
        {
            return "Congrats! You won!";
        }
        else
        {
            return "The result is a Draw!";
        }
    }
    else if(playerSelection == "paper")
    {
        if(computerSelection == "scissors")
        {
            return "Computer won with " + computerSelection;
        }
        else if(computerSelection == "rock")
        {
            return "Congrats! You won!";
        }
        else
        {
            return "The result is a Draw!";
        }
    }
    else
    {
        if(computerSelection == "rock")
        {
            return "Computer won with " + computerSelection;
        }
        else if(computerSelection == "paper")
        {
            return "Congrats! You won!";
        }
        else
        {
            return "The result is a Draw!";
        }
    }
}