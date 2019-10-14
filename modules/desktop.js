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

  write([1, 1], ' danOSoup v 0.0.1')
  write([1, gContent.width - 11], 'y' + mouse.y.toString().padStart(3, '0') + ' x' + mouse.x.toString().padStart(3, '0'))

  const now = new Date(Date.now());

  const seconds = now.getSeconds().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const hours = now.getHours().toString().padStart(2, '0')
  const date = now.getDate().toString().padStart(2, '0')
  const month = (now.getMonth() + 1).toString().padStart(2, '0')
  const year = now.getFullYear().toString().padStart(4, '0')

  write([gContent.height - 2, gContent.width - 21], `${hours}:${minutes}:${seconds} ${date}/${month}/${year}`)

};

export default desktop;