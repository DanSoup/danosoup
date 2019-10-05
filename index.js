const {randomChar} = utils;

const display = document.getElementById('display');
const cursorTracker = document.getElementById('cursor-tracker');

window.gContent = {
  text: [],
  width: Math.floor(window.innerWidth / 9.6),
  height: Math.floor(window.innerHeight / 18),
  mouse: {
    x: 0,
    y: 0
  }
};

const windowResized = (() => {

  window.gContent.width = Math.floor(window.innerWidth / 9.6)
  window.gContent.height = Math.floor(window.innerHeight / 18)

  })

window.onresize = windowResized;

const mouse = {};

cursorTracker.onmousemove = e => {

  mouse.x = Math.floor(e.clientX / 9.6)
  mouse.y = Math.floor(e.clientY / 18)
  let padding = '';
  for (let i = 0; i < mouse.y; i++) {
    padding += '\n'
  }
  for (let i = 0; i < mouse.x; i++) {
    padding += ' '
  }
  padding += '█'
  display.value = padding;

}

const drawScreen = () => {

  const {gContent} = window;

  gContent.text = [];

  console.log(screen.availHeight)

  for (let i = 0; i < gContent.height; i++) {
    const row = [];
    for (let j = 0; j < gContent.width; j++) {
      row.push(randomChar());
    }
    gContent.text.push(row);
  }

  display.value = gContent.text.reduce((acc, row) => {
    acc += row.join('');
    return acc;
  }, '');

  window.requestAnimationFrame(drawScreen)
};

window.requestAnimationFrame(drawScreen);