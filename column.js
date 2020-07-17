import Game from "./game.js";

export default class Column {
    constructor() {
        this.array = [null, null, null, null, null, null]
    }

    add(playerNumber) {
        for(let i = 5; i >=0; i--) {
            if(this.array[i] === null) {
                this.array[i] = playerNumber
                break
            }
        }
    }

    getTokenAt(rowIndex) {
        return this.array[rowIndex]
    }

    // isFull() {
    //     if (typeof array[0] === "number") {
    //     }
    // }

    isColumnFull(columnIndex) {
        if (typeof this.array[0] === "number") {
            document
            .getElementById(`column-${columnIndex}`)
            .classList.add("full")
        } else {
            document
            .getElementById(`column-${columnIndex}`)
            .classList.remove("full")
        }
    }

}
