const utils = {

  randomChar: () => {
    const choice = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    return choice[Math.floor(Math.random() * choice.length)]
  },

  write: (position, string) => {

    if (!Array.isArray(position)) {
      throw('"position" must be an array')
    } else if (typeof position[0] !== 'number') {
      throw('y coordinate must be a number')
    } else if (typeof position[1] !== 'number') {
      throw('x coordinate must be a number')
    } else if (typeof string !== 'string') {
      throw('A string must be provided')
    }

    let [y, x] = position;

    string.split('').forEach(char => {
      if (x < gContent.width) gContent.text[y][x] = char;
      x++
    });

  },

  vWrite: (position, string) => {

    if (!Array.isArray(position)) {
      throw('"position" must be an array')
    } else if (typeof position[0] !== 'number') {
      throw('y coordinate must be a number')
    } else if (typeof position[1] !== 'number') {
      throw('x coordinate must be a number')
    } else if (typeof string !== 'string') {
      throw('A string must be provided')
    }

    let [y, x] = position;

    string.split('').forEach(char => {
      if (x < gContent.width) gContent.text[y][x] = char;
      y++
    });

  },

  drawBox: (originY, originX, height, width, style = 'discrete') => {
    
    if (gContent.text[originY][originX] === '┘') {
      gContent.text[originY][originX] = '┼';
    } else {
      gContent.text[originY][originX] = '┌';
    }

    if (originX + width - 1 < gContent.width - 1) {
      gContent.text[originY + height - 1][originX + width - 1] = '┘'
      gContent.text[originY][originX + width - 1] = '┐'
    }
    gContent.text[originY + height - 1][originX] = '└'

    for (let i = 0; i < width - 2; i++) {
      if (originX + 1 + i >= gContent.width - 1) break;
      gContent.text[originY][originX + 1 + i] = '─'
      gContent.text[originY + height - 1][originX + 1 + i] = '─'
    };

    for (let i = 0; i < height - 2; i++) {
      if (originY + 1 + i >= gContent.height - 1) break;
      gContent.text[originY + i + 1][originX] = '│'
      gContent.text[originY + i + 1][originX + width - 1] = '│'
    };

  }
  
}

export default utils;