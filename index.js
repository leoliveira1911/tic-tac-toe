const player1 = []
const player2 = []
let player1Points = 0
let player1AboutToWin = false
let player1Won = false
let player2AboutToWin = false
let player2Won = false
let player2Points = 0
let round = 0
let pc = false
let availablePlays = [1,2,3,4,5,6,7,8,9]
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

let availableCorners = [1,3,7,9]


function renderTurn(turn, node) {
    if (!node) return;
    node.innerHTML = (round != 0 ? turn === 1 ? player1Turn : player2Turn : '')
};

function renderWinPlayer1(win, node) {
    if (!node) return;
    node.innerHTML = (win ? player1WonRender : null)
    if (win) {
        availablePlays.map((e) => {
            document.getElementById(e).classList.remove('click')
            document.getElementById(e).onclick = null
        })
    }
    
   /*  win ? renderBoard(document.querySelector('.board'), win) : null */
};

function renderWinPlayer2(win, node) {
    if (!node) return;
    node.innerHTML = (win ? player2WonRender : null)
    if (win) {
        availablePlays.map((e) => {
            document.getElementById(e).classList.remove('click')
            document.getElementById(e).onclick = null
        })
    }
   /*  win ? renderBoard(document.querySelector('.board'), win) : null */
};

function renderBoard(node, win) {
    if (!node) return;
    node.innerHTML = (win === false ? board : null)
};
function renderDraw(node) {
    if (!node) return;
    node.innerHTML = ('<h1> O JOGO FOI EMPATE </h1>')
};

let player1Turn = '<h1>Turno player 1</h1>';
let player2Turn = '<h1>Turno player 2</h1>';
let player1WonRender = '<h1>Player 1 Won</h1>';
let player2WonRender = '<h1>Player 2 Won</h1>';
let board = ` 
<div class="buttn click" id="1"  onclick={play(1)} > </div>
<div class='buttn click' id="2"  onclick={play(2)} > </div>
<div class='buttn click' id="3"  onclick={play(3)} > </div>
<div class='buttn click' id="4"  onclick={play(4)} > </div>
<div class='buttn click' id="5"  onclick={play(5)} > </div>
<div class='buttn click' id="6"  onclick={play(6)} > </div>
<div class='buttn click' id="7"  onclick={play(7)} > </div>
<div class='buttn click' id="8"  onclick={play(8)} > </div>
<div class='buttn click' id="9"  onclick={play(9)} > </div>
`

function start() {
    availablePlays = [1,2,3,4,5,6,7,8,9]
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
    availableCorners = [1,3,7,9]
    player1AboutToWin = false
    player1Won = false
    player2AboutToWin = false
    player2Won = false
    pc = false
    console.log(round + ' round antes do start')
    let rand = Math.floor(Math.random() * (2) + 1)
    round = rand
    player1.length = 0
    player2.length = 0
    let win = player1Won || player2Won
    renderWinPlayer1(win, document.querySelector('.winner1'))
    renderWinPlayer2(win, document.querySelector('.winner2'))
    renderTurn(round, document.querySelector('.playerTurn'))
    renderBoard(document.querySelector('.board'), win)
    
    return availablePlays, player1, player2, round, console.log('player1:' + player1 + '   player2:' + player2 + '   round:' + round), player1AboutToWin, player1Won, player2AboutToWin, player2Won, player1winConditions, player2winConditions
}
function startWithPc() {
    availablePlays = [1,2,3,4,5,6,7,8,9]
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
    availableCorners = [1,3,7,9]
    player1AboutToWin = false
    player1Won = false
    player2AboutToWin = false
    player2Won = false
    pc = true
    console.log(round + ' round antes do start')
    let rand = Math.floor(Math.random() * (2) + 1)
    round = rand
    player1.length = 0
    player2.length = 0
    let win = player1Won || player2Won
    renderWinPlayer1(win, document.querySelector('.winner1'))
    renderWinPlayer2(win, document.querySelector('.winner2'))
    renderTurn(round, document.querySelector('.playerTurn'))
    renderBoard(document.querySelector('.board'), win)
    pcPlay(round, pc)
    return pc, availablePlays, player1, player2, round, console.log('player1:' + player1 + '   player2:' + player2 + '   round:' + round), player1AboutToWin, player1Won, player2AboutToWin, player2Won, player1winConditions, player2winConditions
}

function restart() {
    location.reload()
}

function pcPlay(round, pc) {
    if (round === 2 && pc) {
        //garantir que o PC não vai perder caso a pessoa comece.
        if(availablePlays.length == 8){
            if(player1.includes(5)){
                const plays = [1,3,7,9];
                const index = Math.floor(Math.random() * plays.length);
                return play(plays[index])
                
            } else if (player1.includes(2) || player1.includes(4) || player1.includes(6) || player1.includes(8)) {
                const plays = [1,3,7,9,5];
                const index = Math.floor(Math.random() * plays.length);
                return play(plays[index])
            } else {
                return play(5)
            } 
        }else if (availablePlays.length == 6){
            if(player1.includes(1) && player1.includes(9) || player1.includes(3) && player1.includes(7)) {
                const plays = [2,4,6,8];
                const index = Math.floor(Math.random() * plays.length);
                return play(plays[index])
            } else if (player1.includes(5) && player1AboutToWin == false &&  (player1.includes(1) || player1.includes(3) || player1.includes(7) || player1.includes(9) )) {
                    const index = Math.floor(Math.random() * availableCorners.length);
                    return play(availableCorners[index])
            }
        }
    if(player2AboutToWin === true ) {
        for (let i = 0; i < player2winConditions.length ; i++) {
            console.log('JOGADA DA VITORIA DO PC!')
            if(player2winConditions[i][3] === 0 ) {
                for(let u = 0; u <= 3 ; u++) {
                if (availablePlays.includes(player2winConditions[i][u]) ) {
                    return play(player2winConditions[i][u])
                    
                } 
            }
            } 
        }   
    }
    if(player1AboutToWin === true) {
        for (let i = 0; i < player1winConditions.length ; i++) {
            if(player1winConditions[i][3] === 0) {
                for(let u = 0; u <= 3 ; u++) {
                if (availablePlays.includes(player1winConditions[i][u])) {
                    return play(player1winConditions[i][u])
                    
                } 
            }
            } 
        }   
    } else {
        let indexOfRandomPlay = Math.floor(Math.random() * availablePlays.length)
        let randomPlay = availablePlays[indexOfRandomPlay]
        return play(randomPlay)    
    }
    round = 1
} else {
    return null
}
}

function winConditions(e) {

    if (round === 1) {
        player2winConditions.map((winCond, i) => {
            if (winCond.includes(e)) {
                player2winConditions.splice(i, 1)
            }
        })
        player2winConditions.map((winCond, i) => {
            if (winCond.includes(e)) {
                player2winConditions.splice(i, 1)
            }
        })
        round = 2
    } else {
        player1winConditions.map((winCond, i) => {
            if (winCond.includes(e)) {
                player1winConditions.splice(i, 1)
            }
        })
        player1winConditions.map((winCond, i) => {
            if (winCond.includes(e)) {
                player1winConditions.splice(i, 1)
            }
        })
        round = 1
    }

    console.log("winConditions player1", player1winConditions, "winConditions player 2", player2winConditions)
    return round, player1winConditions, player2winConditions
}

function checkWin() {
    player1AboutToWin = false
    player2AboutToWin = false

    for (let i = 0; i < player1winConditions.length; i++) {
        for (let y = 0; y <= 3; y++) {
            for (let u = 0; u < player1.length; u++) {
                if (player1winConditions[i][y] === player1[u]) {
                    player1Points = player1Points + 1
                }
            }

            if (player1Points === 3) {
                player1Won = true
                round = 0
            }
            if (player1Points === 2) {
                player1AboutToWin = true
                player1winConditions[i].includes(0) ? null : player1winConditions[i].push(0)
            }
        }
        player1Points = 0
    }
    console.log(' player1about to win ' + player1AboutToWin, 'player1won' + player1Won)
    for (let i = 0; i < player2winConditions.length; i++) {
        for (let y = 0; y <= 3; y++) {
            for (let u = 0; u < player2.length; u++) {
                if (player2winConditions[i][y] === player2[u]) {
                    player2Points = player2Points + 1
                }
            }

            if (player2Points === 3) {
                player2Won = true
                round = 0
            }
            if (player2Points === 2) {
                player2AboutToWin = true
                player2winConditions[i].includes(0) ? null : player2winConditions[i].push(0)
            }
        }
        player2Points = 0
    }
    renderWinPlayer1(player1Won, document.querySelector('.winner1'))
    renderWinPlayer2(player2Won, document.querySelector('.winner2'))
    console.log(' player2about to win ' + player2AboutToWin, 'player2won' + player2Won)
    return player1AboutToWin, player1Won, player2AboutToWin, player2Won, player1winConditions 
}

function printValue(e) {
    let element = document.getElementById(e)
    console.log(element)
    if (round === 1) {
        element.innerHTML = 'X'
        element.onclick = null
        element.classList.remove('click')
    } else {
        element.innerHTML = 'O'
        element.onclick = null
        element.classList.remove('click')
    }
}



function play(e) {
    console.log('round visto da func play antes da jogada' + round)
    if(e == 1 || e == 3 || e == 7 || e == 9) {
        let indexOfPlay = availableCorners.indexOf(e)
        availableCorners.splice(indexOfPlay , 1)
    }
    if (round === 1) {
        player1.push(e)
        printValue(e)
        let indexOfPlay = availablePlays.indexOf(e)
        availablePlays.splice(indexOfPlay , 1)
    } else {
        player2.push(e)
        printValue(e)
        let indexOfPlay = availablePlays.indexOf(e)
        availablePlays.splice(indexOfPlay , 1)
    }
    winConditions(e)
    checkWin()
    renderTurn(round, document.querySelector('.playerTurn'))
    if(player1winConditions.length == 0 && player2winConditions.length == 0 && player1Won == false && player2Won == false) {
        renderTurn(0, document.querySelector('.playerTurn'))
        renderDraw(document.querySelector('.playerTurn'))
    }

    console.log(availablePlays)
    pcPlay(round, pc)
    
    return player1, player2, availablePlays
}

console.log(player1winConditions , player2winConditions)