const utils = {

  randomChar: () => {
    const choice = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    return choice[Math.floor(Math.random() * choice.length)]
  }
  
}

export default utils;