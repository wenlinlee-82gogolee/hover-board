const container = document.querySelector('#container');
const colors = [
  '#F2F013',
  '#2FDD92',
  '#34BE82',
  '#2F86A6',
  '#105652',
  '#FBF3E4',
  '#DFD8CA',
  '#B91646',
];
const squares = 500;

for (let i = 0; i < squares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.background = '#6998ab';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
