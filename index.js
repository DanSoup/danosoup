const windowResized = () => {
  const screen = document.getElementsByTagName('textarea')[0];

  let widthTest = ''

  for (let i = 0; i < Math.floor(screen.offsetWidth / 9.6); i++) {
    widthTest += '-'
  }

  for (let i = 1; i < Math.floor(screen.offsetHeight / 18.06); i++) {
    widthTest += '\n|'
  }

  screen.value = widthTest;
}

windowResized();
window.onresize = windowResized;