

const player1 = []
const player2 = []
let player1Points = 0
let player1AboutToWin = false
let player1Won = false
let player2AboutToWin = false
let player2Won = false
let player2Points = 0

var round = 0
let player1winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3]
]

let player2winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3]
]


function renderTurn (turn, node) { 
    if (!node) return;
    node.innerHTML = (turn === 1 ? player1Turn : player2Turn)
};

function renderWinPlayer1 (win, node ) {
    if (!node) return;
    node.innerHTML = (win ? player1WonRender : null)
    win ? renderBoard(document.querySelector('.board'), win) : null
};

function renderWinPlayer2 (win, node ) {
    if (!node) return;
    node.innerHTML = (win ? player2WonRender : null)   
    win ? renderBoard(document.querySelector('.board'), win) : null
};
function renderBoard (node, win) {
    if (!node) return;
    node.innerHTML = (win === false ? board : null)
};

var player1Turn = '<h1>Turno player 1</h1>';
var player2Turn = '<h1>Turno player 2</h1>';
var player1WonRender = '<h1>Player 1 Won</h1>';
var player2WonRender = '<h1>Player 2 Won</h1>';
var board = ` 
<div class="buttn" id="1"  onclick={play(1)} > </div>
<div class='buttn' id="2"  onclick={play(2)} > </div>
<div class='buttn' id="3"  onclick={play(3)} > </div>
<div class='buttn' id="4"  onclick={play(4)} > </div>
<div class='buttn' id="5"  onclick={play(5)} > </div>
<div class='buttn' id="6"  onclick={play(6)} > </div>
<div class='buttn' id="7"  onclick={play(7)} > </div>
<div class='buttn' id="8"  onclick={play(8)} > </div>
<div class='buttn' id="9"  onclick={play(9)} > </div>
`

function start() {
    player1winConditions = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [7, 5, 3]
    ]
    player2winConditions = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [7, 5, 3]
    ]
    player1AboutToWin = false
    player1Won = false
    player2AboutToWin = false
    player2Won = false

    console.log(round + ' round antes do start')
    let rand = Math.floor(Math.random() * (2) + 1)
    round = rand
    player1.length = 0
    player2.length = 0
    let win = player1Won || player2Won
    renderWinPlayer1(win, document.querySelector('.winner1'))
    renderWinPlayer2(win, document.querySelector('.winner2'))
    renderTurn(round , document.querySelector('.playerTurn') , win )
    renderBoard(document.querySelector('.board'), win)
    return player1, player2, round, console.log('player1:' + player1 + '   player2:' + player2 + '   round:' + round) , player1AboutToWin , player1Won, player2AboutToWin, player2Won , player1winConditions, player2winConditions
}

function restart() {
    location.reload()
}

function winConditions(e) {
   
    if(round === 1) {
        player2winConditions.map((winCond, i) => {
            if(winCond.includes(e)) {
                player2winConditions.splice(i, 1)
            }
        })
        player2winConditions.map((winCond, i) => {
            if(winCond.includes(e)) {
                player2winConditions.splice(i, 1)
            }
        })
        round = 2
    } else {
        player1winConditions.map((winCond, i) => {
            if(winCond.includes(e)) {
                player1winConditions.splice(i, 1)
            }
        })
        player1winConditions.map((winCond, i) => {
            if(winCond.includes(e)) {
                player1winConditions.splice(i, 1)   
            }
        })
        round = 1
    }
    
    console.log("winConditions player1" , player1winConditions , "winConditions player 2" , player2winConditions)
    return round , player1winConditions , player2winConditions
}

function checkWin() {
        for (let i = 0; i < player1winConditions.length ; i++) {
            for(let y=0 ; y <= 3 ; y++) {
                for (let u = 0; u < player1.length; u++) {
                    if (player1winConditions[i][y] === player1[u]) {
                        player1Points = player1Points + 1
                    }
                }
                
                if (player1Points === 3) { player1Won = true }
                if (player1Points === 2) { player1AboutToWin = true }
            }player1Points = 0
        }
        console.log(' player1about to win ' + player1AboutToWin , 'player1won' + player1Won)
        for (let i = 0; i < player2winConditions.length ; i++) {
            for(let y=0 ; y <= 3 ; y++) {
                for (let u = 0; u < player2.length; u++) {
                    if (player2winConditions[i][y] === player2[u]) {
                        player2Points = player2Points + 1
                    }
                }
                
                if (player2Points === 3) { player2Won = true }
                if (player2Points === 2) { player2AboutToWin = true }
            }player2Points = 0
        }
        renderWinPlayer1(player1Won , document.querySelector('.winner1'))
        renderWinPlayer2(player2Won , document.querySelector('.winner2'))
        console.log(' player2about to win ' + player2AboutToWin , 'player2won' + player2Won)
        return player1AboutToWin , player1Won , player2AboutToWin , player2Won
    }

    function printValue(e) {
        let element = document.getElementById(e)
        console.log(element)
        if (round === 1) {
            element.innerHTML = 'X'
            element.onclick = null
        } else {
            element.innerHTML = 'O'
            element.onclick = null
        }
    }



function play(e) {
    console.log('round visto da func play antes da jogada' + round)
    if (round === 1) {
        player1.push(e)
        printValue(e)
    } else {
        player2.push(e)
        printValue(e)
    }
    winConditions(e)
    checkWin()
    renderTurn(round , document.querySelector('.playerTurn') )
    return console.log(player1, player2, round + "round depois da jogada"), player1, player2
}