import Game from "./game.js"
import Column from "./column.js"

let game;
let clickTargets = document.getElementById("click-targets")


function updateUI() {
    if(game === undefined) {
        document
        .getElementById("board-holder")
        .setAttribute("class", "is-invisible")
    } else {
        document
            .getElementById("board-holder")
            .classList
            .remove("is-invisible");
        document
            .getElementById("game-name")
            .innerHTML = game.getName();
        };
        for(let rowIndex = 0; rowIndex <= 5; rowIndex++) {
            for(let columnIndex = 0; columnIndex <= 6; columnIndex++) {
                let square = document.getElementById(`square-${rowIndex}-${columnIndex}`)
                square.innerHTML = ""
                const playerNumber = game.getTokenAt(rowIndex, columnIndex)
                if(playerNumber === 1) {
                    const token = document.createElement('div');
                    token.classList.add("token")
                    token.classList.add("red")
                    square.appendChild(token)
                } else if (playerNumber === 2) {
                    const token = document.createElement('div');
                    token.classList.add("token")
                    token.classList.add("black")
                    square.appendChild(token)
                }
                game.columns[columnIndex].isColumnFull(columnIndex)
        }
    }


    if (game.currentPlayer === 1) {
        clickTargets.setAttribute("class", "red")

    }else {
        clickTargets.setAttribute("class", "black")
    }
}


document.addEventListener("DOMContentLoaded", (event) => {



let player1 = document.getElementById("player-1-name")
let player2 = document.getElementById("player-2-name")
const button = document.getElementById("new-game")


    document
        .getElementById("form-holder")
        .addEventListener("keyup", (event) => {
            if(player1.value && player2.value) {
                button.disabled = false
            }
    })


    button.addEventListener("click", e => {
        game = new Game(player1.value, player2.value)
        player1.value = ""
        player2.value = ""
        button.disabled = true
        updateUI()
    })

    clickTargets.addEventListener("click", (e) => {
        const targetID = e.target.id
        if(!targetID.startsWith("column-")) return;

        const columnIndex = Number(targetID[targetID.length-1])
            game.playInColumn(columnIndex)
            updateUI()
        })

})
