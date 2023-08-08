const squaresContainer = document.querySelector("#squares");
const numberOfSquares = 16;
let i = 0;

let square1, square2;
let clickCount = 0;

let colors = [
    "#33ff33",
    "#33ff33",
    "#ff944f",
    "#ff944f",
    "#80ccff",
    "#80ccff",
    "#dddddd",
    "#dddddd",
    "#ff5733",
    "#ff5733",
    "#673ab7",
    "#673ab7",
    "#444444",
    "#444444",
    "#ff4dff",
    "#ff4dff",

];
function selectColor() {
    const random = Math.floor(Math.random() * colors.length)
    const selected = colors[random];
    colors.splice(random, 1);
    return selected;
}

while (i < numberOfSquares) {
    const square = document.createElement('li')
    const color = selectColor();
    //square.style.background = color;
    squaresContainer.appendChild(square);
    square.setAttribute("data-color", color)
    i++;
}

const squares = document.querySelectorAll('li')
for(const square of squares) {
    square.addEventListener("click", squareClicked);
}

function squareClicked() {
    clickCount++;
    clickCount === 1 ? (square1 = this) : (square2 = this);
    if(clickCount === 1) {
        square1.style.background = square1.getAttribute("data-color");
    } else {
        square2.style.background = square2.getAttribute("data-color");
    }
}

//selectColor();
//selectColor();
//console.log(selectColor());


