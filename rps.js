// define init variable for the game
let ComputerScore = 0,
    UserScore = 0,
    RoundsPlayed = 0
let u,c
let roundWinner

let round_scr = document.querySelector("#round-score")
let user_scr = document.querySelector("#user-score")
let computer_scr = document.querySelector("#computer-score")
const rock_btn = document.querySelector("#button-rock")
const paper_btn = document.querySelector("#button-paper")
const scissors_btn = document.querySelector("#button-scissors")
const log_winner = document.querySelector(".log_winner")
const log_userChoice = document.querySelector(".userChoice")
const log_machineChoice = document.querySelector(".machineChoice")


function convert(numChoice) {
    if (numChoice == 0) {
        return "Rock"
    } else if (numChoice == 1) {
        return "Paper" 
    } else if (numChoice == 2) {
        return "Scissors"
    }
}
function getComputerChoice() {
    return Math.floor(Math.random() * 3 )
}
function registerInput(userInput) {
    u = userInput
    c = getComputerChoice()
}
function defineWinner() {
    if (u === 0 && c === 0) {
        return "No winner"
    } else if (u === 1 && c === 1) {
        return "No winner"
    } else if (u === 2 && c === 2) {
        return "No winner"
    } else if (u === 0 && c === 1) {
        ComputerScore += 1
        return "Computer"
    } else if (u === 0 && c === 2) {
        UserScore += 1
        return "User"
    } else if (u === 1 && c === 0) {
        UserScore += 1
        return "User"
    } else if (u === 1 && c === 2) {
        ComputerScore += 1
        return "Computer"
    } else if (u === 2 && c === 0) {
        ComputerScore += 1
        return "Computer"
    } else if (u === 2 && c === 1) {
        UserScore += 1
        return "User"
    }
}
function updateScore() {
    RoundsPlayed += 1
    round_scr.textContent = (`Round: ${RoundsPlayed}`)
    user_scr.textContent = (`User: ${UserScore}`)
    computer_scr.textContent = (`Computer: ${ComputerScore}`)
}
function updateLog() {
    log_winner.textContent = `Winner: ${roundWinner}`
    log_userChoice.textContent = `User choice: ${convert(u)}`
    log_machineChoice.textContent = `Machine choice: ${convert(c)}`
    

}
function playRound(userInputBtn) {
    registerInput(userInputBtn)
    roundWinner = defineWinner()
    updateScore()
    updateLog()
 
    if (UserScore == 5 || ComputerScore == 5) {
        if (UserScore > ComputerScore) {
            matchWinner = `User`
        } else if (UserScore < ComputerScore) {
            matchWinner = `Computer`
        } else {
            matchWinner = `Draw`
        }
        alert(`Match winner: ${matchWinner}`)
        window.location.reload();
    }
}


rock_btn.addEventListener("click", () => playRound(0))
paper_btn.addEventListener("click", () => playRound(1))
scissors_btn.addEventListener("click", () => playRound(2))







