let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score")
const computerScoreSpan = document.getElementById("computer-score")
const scoreBoard_dic = document.querySelector('.score-board')
const result_p = document.querySelector(".result > p")

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const random_number = Math.floor(Math.random() * 3);
    return choices[random_number];
}
function converToLetter(letter) {
    if (letter === 'r') return 'Rock'
    if (letter === 'p') return 'Paper'
    return 'Scissors'
}
function win(user, computer) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const userChoise_div = document.getElementById(user);
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    result_p.innerHTML = `${converToLetter(user)} ${smallUserWord} beats  ${converToLetter(computer)} ${smallCompWord}  .  you win !`
    userChoise_div.classList.add('green-glow')
    setTimeout(() => userChoise_div.classList.remove('green-glow'), 300)

}
function lose(user, computer) {

    const userChoise_div = document.getElementById(user);
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore
    result_p.innerHTML = `${converToLetter(user)} ${smallUserWord} loses to  ${converToLetter(computer)} ${smallCompWord}  .  you lost !`
    userChoise_div.classList.add('red-glow')
    setTimeout(() => userChoise_div.classList.remove('red-glow'), 300)
}
function draw(user, computer) {

    const userChoise_div = document.getElementById(user);
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    result_p.innerHTML = `${converToLetter(user)} ${smallUserWord} equalls   ${converToLetter(computer)} ${smallCompWord}  .  a draw !`
    userChoise_div.classList.add('gray-glow')
    setTimeout(() => userChoise_div.classList.remove('gray-glow'), 300)
}
console.log(getComputerChoice())
function game(userChoice) {
    const computer_choice = getComputerChoice();
    switch (userChoice + computer_choice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computer_choice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computer_choice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computer_choice);
            break;
    }

}
function main() {
    rock_div.addEventListener('click', () => game('r'))
    paper_div.addEventListener('click', () => game('p'))
    scissors_div.addEventListener('click', () => game('s'))
}
main();