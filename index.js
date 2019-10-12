import utils from './utils.js';
import desktop from './modules/desktop.js';

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

const mouse = {
  x: 0,
  y: 0
};

cursorTracker.onmousemove = e => {

  mouse.x = Math.min(Math.floor(e.clientX / 9.6), gContent.width - 1)
  mouse.y = Math.min(Math.floor(e.clientY / 18), gContent.height - 1)

}

const drawFrame = () => {

  const {gContent} = window;

  gContent.text = [];

  for (let y = 0; y < gContent.height; y++) {
    const row = [];
    for (let x = 0; x < gContent.width; x++) {
      row.push(' ');
    }
    gContent.text.push(row);
  }

  desktop();

  // const drawDesktop = (() => {
  //   for (let x = 0; x < gContent.width; x++) {
  //     gContent.text[0][x] = '═';
  //     gContent.text[2][x] = '═';
  //     gContent.text[gContent.height - 3][x] = '═';
  //     gContent.text[gContent.height - 1][x] = '═';
  //   };
  //   for (let y = 0; y < gContent.height; y++) {
  //     gContent.text[y][0] = '║';      
  //     gContent.text[y][gContent.width - 1] = '║';      
  //   };
  //   gContent.text[0][0] = '╔';
  //   gContent.text[2][0] = '╠';
  //   gContent.text[gContent.height - 3][0] = '╠';
  //   gContent.text[gContent.height - 1][0] = '╚';

  //   gContent.text[0][gContent.width - 1] = '╗';
  //   gContent.text[2][gContent.width - 1] = '╣';
  //   gContent.text[gContent.height - 3][gContent.width - 1] = '╣';
  //   gContent.text[gContent.height - 1][gContent.width - 1] = '╝';
  // })()

  mouse.x = Math.min(mouse.x, gContent.width - 1)
  mouse.y = Math.min(mouse.y, gContent.height - 1)

  gContent.text[mouse.y][mouse.x] = '█';

  display.value = gContent.text.reduce((acc, row, i) => {
    acc += (i === 0 ? '' : '\n') + row.join('');
    return acc;
  }, '');

  window.requestAnimationFrame(drawFrame)
};

window.requestAnimationFrame(drawFrame);

export default {}