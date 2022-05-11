
Array.prototype.filter2 = function (callback, thisArg) {
  const res = [];

  for (let i = 0; i < this.length; i++) {
      if (callback.call(this, this[i], i, this)) {
        res.push(this[i]);
      }
    }

  return res;
  }

function createDebounceFunction(func, ms) {
  let timeout;

  return function () {
    const funcCall = () => {
      func.apply(this, arguments);
    };

    clearTimeout(timeout);
    timeout = setTimeout(funcCall, ms);
  };
}
