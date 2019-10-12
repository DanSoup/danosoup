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

  }
  
}

export default utils;