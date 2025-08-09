// define init variable for the game
let ComputerScore = 0,
    UserScore = 0,
    RoundsPlayed = 0

/// function to convert numbers to human readable choices
function convert(numChoice) {
    if (numChoice == 0) {
        return "Rock"
    } else if (numChoice == 1) {
        return "Paper" 
    } else if (numChoice == 2) {
        return "Scissors"
    }
}

/// get machine choice with Math.random function
function getComputerChoice() {
    return Math.floor(Math.random() * 3 )
}
/// output list of choices to user and ask user to pick one
function getUserChoice() {
    return Number( window.prompt("Choices:\n1 - Rock\n2 - Paper\n3 - Scissors") ) - 1
    /// get user input and store it in var "userInput"
}

/// inspect choices and peek a winner
let u,c
function defineWinner() {
    
    u = getUserChoice()
    c = getComputerChoice()
    RoundsPlayed += 1

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
    /// record a winning score
}
function playRound() {
    /// output a winner
    let winner = defineWinner()

    alert(`The winner is: ${winner}\nUser choice: ${convert(u)}\nMachine choice: ${convert(c)}\nUser score: ${UserScore}\nMachine score: ${ComputerScore}\nRounds played: ${RoundsPlayed}`)

    console.log(`The winner is: ${winner}`)
    /// output user and machine choices
    console.log(`User choice: ${convert(u)}\nMachine choice: ${convert(c)}`)
    /// output user and machine scores
    console.log(`User score: ${UserScore}\nMachine score: ${ComputerScore}`)
    /// output number of played rounds
    console.log(`Rounds played: ${RoundsPlayed}`)
    console.log(`----------\n----------\n----------`)
}

/// wrap functions in while loop and play game

while (RoundsPlayed != 5) {
    playRound()
}

if (UserScore > ComputerScore) {
    winner = `User`
} else if (UserScore < ComputerScore) {
     winner = `Computer`
} else {
     winner = `Draw`
}

alert(`Match ended!\nWinner: ${winner}\nTotal rounds played: ${RoundsPlayed}\nUser score: ${UserScore}\nMachine score: ${ComputerScore}`)

console.log(`!!!!!!!!!!\n!!!!!!!!!!\n!!!!!!!!!!`)
console.log(`Match ended!`)
console.log(`Winner: ${winner}`)
console.log(`Total rounds played: ${RoundsPlayed}`)
console.log(`User score: ${UserScore}\nMachine score: ${ComputerScore}`)

