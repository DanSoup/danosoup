import utils from '../utils.js';

const {write} = utils;

const desktop = () => {

  for (let x = 0; x < gContent.width; x++) {
    gContent.text[0][x] = '═';
    gContent.text[2][x] = '═';
    gContent.text[gContent.height - 3][x] = '═';
    gContent.text[gContent.height - 1][x] = '═';
  };

  for (let y = 0; y < gContent.height; y++) {
    gContent.text[y][0] = '║';      
    gContent.text[y][gContent.width - 1] = '║';      
  };

  gContent.text[0][0] = '╔';
  gContent.text[2][0] = '╠';
  gContent.text[gContent.height - 3][0] = '╠';
  gContent.text[gContent.height - 1][0] = '╚';

  gContent.text[0][gContent.width - 1] = '╗';
  gContent.text[2][gContent.width - 1] = '╣';
  gContent.text[gContent.height - 3][gContent.width - 1] = '╣';
  gContent.text[gContent.height - 1][gContent.width - 1] = '╝';

  write([20, 20], 'Hello')

};

export default desktop;