const cheatCodeListener = (cheatCodeConfig) => {
  let myArray = [];
  let lastKeyTime = Date.now();

  document.addEventListener('keydown', event => {
    if (event && event.key) {
      const key = event.key;
      const currentTime = Date.now();

      if (currentTime - lastKeyTime > 1000) {
        myArray = [];
      }

      myArray.push(key);
      lastKeyTime = currentTime;
    }

    cheatCodeConfig.forEach((cheatCode) => {
      if (myArray.join('') == cheatCode.pattern) {
        cheatCode.execute();
        myArray = [];
      }
    });
  });
}

export default cheatCodeListener;
