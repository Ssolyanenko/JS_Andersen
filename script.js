const isItString = (str) => {
  return typeof str === "string";
};

const concatStrings = (str2, separator = "") => {
  let finalStr = str2;
  const separate = isItString(separator) ? separator : "";

  return function foo(str2) {
    if (!isItString(str2)) {
      return finalStr;
    }

    finalStr += separate + str2;

    return foo;
  };
};

class Calculator {
  constructor(firstNum, secondNum) {
    this.firstNum = Number.isSafeInteger(firstNum)
      ? firstNum
      : console.log(new Error("Ошибка!"));

    this.secondNum = Number.isSafeInteger(secondNum)
      ? secondNum
      : console.log(new Error("Ошибка!"));
  }

  setX = (num) => {
    return Number.isSafeInteger(num)
      ? (this.firstNum = num)
      : console.log(new Error("Ошибка!"));
  };

  setY = (num) => {
    return Number.isSafeInteger(num)
      ? (this.secondNum = num)
      : console.log(new Error("Ошибка!"));
  };

  logSum = () => {
    console.log(this.firstNum + this.secondNum);
  };

  logMul = () => {
    console.log(this.firstNum * this.secondNum);
  };

  logSub = () => {
    console.log(this.firstNum - this.secondNum);
  };

  logDiv = () => {
    console.log(
      this.secondNum === 0
        ? new Error("Ошибка!")
        : this.firstNum / this.secondNum
    );
  };
}
