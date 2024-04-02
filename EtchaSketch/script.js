// create container for grid inside content
const content = document.getElementById('content');
const container = document.createElement('div');
container.id = 'container';
content.appendChild(container);
var size;

// create grid using rows 
function createGrid(size) {
    for (var j = 0; j < size; j++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + (j+1);
        row.style.height = "calc(32rem/" + size + ")";
        container.appendChild(row);
        for (var i = 0; i < size; i++) {
            const box = document.createElement('div');
            box.className = 'box';
            box.style.width = "calc(32rem/" + size + ")";
            box.style.height = "calc(32rem/" + size + ")";
            row.appendChild(box);
        }
    }
    // change background colour of boxes when hover over each one
    const boxes = document.querySelectorAll('.box');
    // an array of muted colours to randomly pick from
    var colors = ['salmon', '#ffd480', '#f5f5dc', '#a6bba1', '#a2c4c9', '#7c6b9c']
    for (const pixel of boxes) {
        pixel.addEventListener("mouseover", () => {
            var randomColor = colors[(Math.floor(Math.random() * colors.length))];
            pixel.style.backgroundColor = randomColor;
        })
}
}
// initalize grid at 16x16;
createGrid(16);

// popup window when button is clicked
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    // ask the question again if the answer is not a number between 1 and 100
    do {
        var size = parseInt(window.prompt("please eneter a number from 1 to 100", ""), 10);
    } while (isNaN(size) || size > 100 || size < 1);
    // get rid of the default grid
    container.innerHTML = '';
    // create new grid based on the new size
    createGrid(size);
})
