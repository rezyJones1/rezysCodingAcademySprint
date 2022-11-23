'use strict'
const MINE = '🌟'
var gMine
var gBoard
function onInit() {
    gBoard = buildBoard()

    creatMines()
    renderBoard(gBoard, '.board-container')



}
function creatMines() {
    const mine = {
        location: {
            i: 1,
            j: 1
        }, isMine: true, isShown: true
    }
    const mine2 = {
        location: {
            i: 3,
            j: 0
        }, isMine: true, isShown: true
    }
    gBoard.push(mine2)
    // gBoard.push(mine2)
    // gMine.push(mine2)
    gBoard[mine.location.i][mine.location.j] = MINE
    gBoard[mine2.location.i][mine2.location.j] = MINE
}

function buildBoard() {
    const size = 4
    const board = []

    for (var i = 0; i < size; i++) {
        board.push([])
        var cell = {

            // minesAround: countAroundCell(gBoard, i, j),
            isShown: false,
            isMine: false,
            isMarked: false
        }
        for (var j = 0; j < size; j++) {
            board[i][j] = cell
            // if (i === 0 || i === size - 1 ||
            //     j === 0 || j === size - 1 ||
            //     (j === 3 && i > 4 && i < size - 2)) {
            //     board[i][j] = WALL
            // }
        }
    }
    console.log(board);
    return board
}


function createCell() {

    const cell = {

        // minesAround: countAroundCell(gBoard, i, j),
        isShown: false,
        isMine: false,
        isMarked: false


    }
    return cell
}








// function renderBoard(params) {

// }


function countAroundCell(mat, rowIdx, colIdx) {
    var count = 0
    for (let i = rowIdx - 1; i < rowIdx + 1; i++) {
        if (i < 0 || i >= mat.length) { continue }
        for (let i = colIdx - 1; i < colIdx + 1; i++) {
            if (j < 0 || j >= mat[0].length) { continue }
            if (i === rowIdx && j === colIdx) {
                continue

            }
            var currCell = mat[i][j];
            if (currCell !== '') { count++ }

        }
        // const row = mat[i];

    }
    return count
}