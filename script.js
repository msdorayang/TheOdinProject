const container = document.createElement('div');
container.id = 'container';
document.getElementById('content').appendChild(container);

for (var j = 0; j < 16; j++) {
    const row = document.createElement('div');
    row.className = 'row';
    row.id = 'row' + (j+1);
    container.appendChild(row);
    for (var i = 0; i < 16; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        row.appendChild(box);
    }
}

const boxes = document.querySelectorAll('.box');
for (const pixel of boxes) {
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "salmon";
    })
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    do {
        var size = parseInt(window.prompt("please eneter a number from 1 to 100", ""), 10);
    } while (isNaN(size) || size > 100 || size < 1);
})