document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById('board');
    const cells = [];

    let currentPlayer = 'X';

    // Menginisialisasi papan permainan
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', handleClick);
            board.appendChild(cell);
            cells.push(cell);
        }
    }

    // Fungsi untuk mengatur tindakan klik pada sel
    function handleClick() {
        if (this.textContent === '') {
            this.textContent = currentPlayer;
            if (checkWin()) {
                alert(currentPlayer + ' Menang!');
                resetGame();
            } else if (checkDraw()) {
                alert('Permainan Seri!');
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    // Fungsi untuk memeriksa apakah ada pemenang
    function checkWin() {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winningCombos.some(combo => {
            return combo.every(index => {
                return cells[index].textContent === currentPlayer;
            });
        });
    }

    // Fungsi untuk memeriksa apakah permainan berakhir seri
    function checkDraw() {
        return cells.every(cell => {
            return cell.textContent !== '';
        });
    }

    // Fungsi untuk mengatur ulang permainan
    function resetGame() {
        cells.forEach(cell => {
            cell.textContent = '';
        });
        currentPlayer = 'X';
    }
});
