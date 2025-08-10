// Variables
const numRounds = 5;
let computerScore = 0,
    userScore = 0,
    roundsPlayed = 0,
    userChoice = 0,
    computerChoice = 0,
    roundWinner = ""

// DOM objects
const roundScoreDOM = document.querySelector("#round-score")
const userScoreDOM = document.querySelector("#user-score")
const compuerScoreDOM = document.querySelector("#computer-score")
const logWinnerDOM = document.querySelector(".log_winner")
const logUserChoiceDOM = document.querySelector(".userChoice")
const logMachineChoiceDOM = document.querySelector(".machineChoice")
// DOM button objects
const buttonRockDOM = document.querySelector("#button-rock")
const buttonPaperDOM = document.querySelector("#button-paper")
const buttonScissorsDOM = document.querySelector("#button-scissors")

function convert(input) {
    if (input == 0) {
        return "Rock"
    } else if (input == 1) {
        return "Paper" 
    } else if (input == 2) {
        return "Scissors"
    }
}
function defineWinner(userInput,computerInput) {
    userChoice = userInput
    computerChoice = computerInput
    if (userChoice === computerChoice) {
        roundWinner = "No winner"
    } else if (userChoice == 0 && computerChoice == 1) {
        computerScore++
        roundWinner = "Computer"
    } else if (userChoice == 0 && computerChoice == 2) {
        userScore++
        roundWinner = "User"
    } else if (userChoice == 1 && computerChoice == 0) {
        userScore++
        roundWinner = "User"
    } else if (userChoice == 1 && computerChoice == 2) {
        computerScore++
        roundWinner = "Computer"
    } else if (userChoice == 2 && computerChoice == 0) {
        computerScore++
        roundWinner = "Computer"
    } else if (userChoice == 2 && computerChoice == 1) {
        userScore++
        roundWinner = "User"}
}
function getComputerChoice() {
    return Math.floor(Math.random() * 3 )
}
function updateScore() {
    roundsPlayed += 1

    roundScoreDOM.textContent = (`Round: ${roundsPlayed}`)
    userScoreDOM.textContent = (`User: ${userScore}`)
    compuerScoreDOM.textContent = (`Computer: ${computerScore}`)

    logWinnerDOM.textContent = `Winner: ${roundWinner}`
    logUserChoiceDOM.textContent = `User choice: ${convert(userChoice)}`
    logMachineChoiceDOM.textContent = `Machine choice: ${convert(computerChoice)}`
}
function endGame(){
    if (userScore == numRounds || computerScore == numRounds) {
        if (userScore > computerScore) {
            matchWinner = `User`
        } else if (userScore < computerScore) {
            matchWinner = `Computer`
        } else {
            matchWinner = `Draw`
        }
        alert(`Match winner: ${matchWinner}`)
        window.location.reload();
    }
}
function playRound(userInputBtn) {
    defineWinner(userInputBtn, getComputerChoice())
    updateScore()
    endGame()
}
buttonRockDOM.addEventListener("click", () => playRound(0))
buttonPaperDOM.addEventListener("click", () => playRound(1))
buttonScissorsDOM.addEventListener("click", () => playRound(2))







