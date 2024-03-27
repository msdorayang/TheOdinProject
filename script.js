const container = document.createElement('div');
container.id = 'container';
container.className = 'container';
document.getElementsByTagName('body')[0].appendChild(container);

const row = document.createElement('div');
row.className = 'row';
row.id = 'row1';
container.appendChild(row);

for (var i = 0; i < 16; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    row.appendChild(box);
}