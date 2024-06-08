let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function cellClicked(index) {
  if (gameActive && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementById('board').children[index].textContent = currentPlayer;
    if (checkWin() || checkDraw()) {
      gameActive = false;
      document.getElementById('result').textContent = checkWin() ? `${currentPlayer} wins!` : 'It\'s a draw!';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winConditions.some((condition) => {
    const [a, b, c] = condition;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function checkDraw() {
  return !board.includes('');
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('result').textContent = '';
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}
