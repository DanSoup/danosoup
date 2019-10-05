const textarea = document.getElementsByTagName('textarea')[0];

const windowResized = () => {

  let widthTest = ''

  for (let i = 0; i < Math.floor(screen.offsetWidth / 9.6); i++) {
    widthTest += '-'
  }

  for (let i = 1; i < Math.floor(screen.offsetHeight / 18.06); i++) {
    widthTest += '\n|'
  }

  textarea.value = widthTest;
}

windowResized();
window.onresize = windowResized;

const mouse = {};

textarea.onmousemove = e => {

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
  textarea.value = padding;

}

const drawScreen = () => {
  // document.getElementsByTagName('textarea')[0].value = Math.random();
  window.requestAnimationFrame(drawScreen)
}

window.requestAnimationFrame(drawScreen)

// drawScreen();