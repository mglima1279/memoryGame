const colors = [
    "#FF0000", // Red
    "#00FF00", // Lime
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500", // Orange
    "#800080"  // Purple
];

const
    canvas = document.getElementById("canvas"),
    errorCells = document.querySelectorAll(".errorCell"),
    timeSlot = document.getElementById("timer"),
    cellsEls = document.querySelectorAll(".cell")
    ;

class Cell {
    constructor(htmlEl, color) {
        this.htmlEl = htmlEl;
        this.color = color;

        this.htmlEl.addEventListener("click", () => {
            this.htmlEl.style.backgroundColor = this.color
        })
    }
}


export class Game {
    static setupCells() {
        const avColors = shuffle(colors.flatMap(col => [col, col]));
        return Array.from(cellsEls, (el, i) => new Cell(el, avColors[i]));
    }
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
