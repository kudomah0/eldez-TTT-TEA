// Data petunjuk dan jawaban
const horizontalClues = [
    "Operasi matematika yang melibatkan penjumlahan.",
    "Angka yang bertindak sebagai pengganti dalam operasi matematika.",
    "Hari yang dirayakan setelah hari Sabtu.",
    "Tempat dimana orang belajar.",
    "Salah satu warna dari bendera nasional Indonesia.",
    "Negara dengan ibukota Jakarta.",
    "Bentuk geometri dengan 3 sisi.",
    "Nama bulan yang berada setelah bulan Desember.",
    "Angka yang merupakan hasil dari 4 x 2.",
    "Bagian dari tumbuhan yang berfungsi untuk fotosintesis."
];

const verticalClues = [
    "Hasil dari sebuah operasi matematika.",
    "Angka yang ditempatkan di bawah garis horizontal.",
    "Warna yang merupakan kebalikan dari putih.",
    "Hari libur nasional di Indonesia yang jatuh pada tanggal 17 Agustus.",
    "Hari libur yang dirayakan pada bulan Desember.",
    "Istilah lain untuk orang tua.",
    "Salah satu huruf dari alfabet.",
    "Angka yang merupakan hasil dari 10 - 4.",
    "Warna dari bendera negara Amerika Serikat.",
    "Benda yang biasanya digunakan untuk menulis."
];

// Data kisi teka-teki silang
const horizontalGrid = [
    "PUTRA",
    "SUDUT",
    "MATA",
    "ANAK"
];

const verticalGrid = [
    "PSMA",
    "UUNA",
    "TRDA",
    "RAUT"
];

// Fungsi untuk menampilkan petunjuk dan kisi ke dalam elemen HTML
function displayCluesAndGrid() {
    const horizontalCluesElement = document.getElementById("horizontal-clues");
    const verticalCluesElement = document.getElementById("vertical-clues");
    const horizontalGridElement = document.getElementById("horizontal-grid");
    const verticalGridElement = document.getElementById("vertical-grid");

    // Tampilkan petunjuk horizontal
    for (let i = 0; i < horizontalClues.length; i++) {
        const clue = document.createElement("li");
        clue.textContent = `${i + 1}. ${horizontalClues[i]}`;
        horizontalCluesElement.appendChild(clue);
    }

    // Tampilkan petunjuk vertikal
    for (let i = 0; i < verticalClues.length; i++) {
        const clue = document.createElement("li");
        clue.textContent = `${i + 1}. ${verticalClues[i]}`;
        verticalCluesElement.appendChild(clue);
    }

    // Tampilkan kisi horizontal
    for (let i = 0; i < horizontalGrid.length; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < horizontalGrid[i].length; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            if (horizontalGrid[i][j] !== ' ') {
                cell.textContent = horizontalGrid[i][j];
                cell.classList.add("has-letter");
            }
            row.appendChild(cell);
        }
        horizontalGridElement.appendChild(row);
    }

    // Tampilkan kisi vertikal
    for (let i = 0; i < verticalGrid.length; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < verticalGrid[i].length; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            if (verticalGrid[i][j] !== ' ') {
                cell.textContent = verticalGrid[i][j];
                cell.classList.add("has-letter");
            }
            row.appendChild(cell);
        }
        verticalGridElement.appendChild(row);
    }
}

// Panggil fungsi untuk menampilkan petunjuk dan kisi saat halaman dimuat
window.onload = function() {
    displayCluesAndGrid();
};
