export const utils = {
  compare: (num1, num2) => {
    let samePos = false;
    let foundNum = false;
    for (let i = 0; i < num1.length; i++) {
      for (let j = 0; j < num2.length; j++) {
        if (num1[i] === num2[j]) {
          if (i === j){
            samePos = true;
            foundNum = true;
            return [true, true]
          } else {
            foundNum = true;
          }
        }
      }
    }
    return [samePos, foundNum]
  },

  areEqual: (random, response) => {
    if (random.join("") === response.join("")) {
      return true;
    } else {
      return false;
    }
  }
};