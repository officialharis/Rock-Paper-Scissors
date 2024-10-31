let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
};

updateScoreElement();

function playGame(playerMove) {

  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {

    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You Lose.';
    } else if (computerMove === 'scissors') {
      result = 'You Win!.';
    }

  } else if (playerMove === 'paper') {

    if (computerMove === 'rock') {
      result = 'You Win!.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You Lose.';
    }

  } else if (playerMove === 'scissors') {

    if (computerMove === 'rock') {
      result = 'You Lose.';
    } else if (computerMove === 'paper') {
      result = 'You Win!.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  }

  if (result === 'You Win!.') {
    score.Wins += 1;
  } else if (result === 'You Lose.') {
    score.Losses += 1;
  } else if (result === 'Tie.') {
    score.Ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You 
<img src="Images/${playerMove}-emoji.png" class="move-icon">
<img src="Images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

function pickComputerMove() {
  const randomnumber = Math.random();

  let computerMove = '';

  if (randomnumber >= 0 && randomnumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomnumber >= 2 / 3 && randomnumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;

}
