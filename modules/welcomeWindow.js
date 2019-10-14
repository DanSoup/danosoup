import utils from '../utils.js';

const {drawBox} = utils;

const welcomeWindow = () => {

  drawBox(10, 10, 10, 10)
  drawBox(19, 10, 10, 10)
  drawBox(28, 10, 10, 10)

  drawBox(10, 19, 10, 10)
  drawBox(19, 19, 10, 10)
  drawBox(28, 19, 10, 10)

  drawBox(10, 28, 10, 10)
  drawBox(19, 28, 10, 10)
  drawBox(28, 28, 10, 10)

}

export default welcomeWindow;