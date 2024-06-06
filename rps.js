let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');

function getComputerChoice() {
    const choices = ['stone', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function convertToWord(choice) {
    if (choice === 'stone') return 'Stone';
    if (choice === 'paper') return 'Paper';
    return 'Scissors';
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.textContent = userScore;
    resultMessage.textContent = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    resultMessage.textContent = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose!`;
}

function draw(userChoice, computerChoice) {
    resultMessage.textContent = `Both chose ${convertToWord(userChoice)}. It's a draw!`;
}

function play(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + '-' + computerChoice) {
        case 'stone-scissors':
        case 'paper-stone':
        case 'scissors-paper':
            win(userChoice, computerChoice);
            break;
        case 'stone-paper':
        case 'paper-scissors':
        case 'scissors-stone':
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }
}
