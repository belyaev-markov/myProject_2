const table = document.querySelector('.table');

function addCell(class1, class2, value) {
  let cell = document.createElement('p');
  cell.classList.add(class1, class2);
  cell.textContent = value;
  table.append(cell);
}

for (let i = 0; i < 4923; ++i) {
  let n = i;
  addCell('cell', 'column-1', n);
}

for (let i = 0; i < 16; ++i) {
  let n = i ** 2 + i + 17;
  addCell('cell', 'column-2', n);
}

for (let i = 0; i < 29; ++i) {
  let n = 2 * i ** 2 + 29;
  addCell('cell', 'column-3', n);
}

for (let i = 0; i < 40; ++i) {
  let n = i ** 2 + i + 41;
  addCell('cell', 'column-4', n);
}

for (let i = 0; i < 80; ++i) {
  let n = i ** 2 - 79 * i + 1601;
  addCell('cell', 'column-5', n);
}

for (let i = 0; i < 4923; ++i) {
  let n = i ** 2 + i + 72491;
  addCell('cell', 'column-6', n);
}
