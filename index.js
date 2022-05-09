const OBJECT = {
  foo: "bar",
  array: [1, 2, 3],
  boolean: true,
};

function makeObjectDeepCopy(obj) {
  const deepCloneObj = {};

  if (!obj) {
    return obj;
  }

  if (typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const copyArray = [];

    obj.forEach((e) => {
      copyArray.push(makeObjectDeepCopy(e));
    });

    return copyArray;
  }

  Object.keys(obj).forEach((key) => {
    deepCloneObj[key] = makeObjectDeepCopy(obj[key]);
  });

  return deepCloneObj;
}

makeObjectDeepCopy(OBJECT);

function selectFromInterval(arr, firstInterval, secondInterval) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= firstInterval && arr[i] <= secondInterval) {
      result.push(arr[i]);
    } else if (arr[i] <= firstInterval && arr[i] >= secondInterval) {
      result.push(arr[i]);
    } else if (isNaN(arr[i])) {
      throw new Error("невалидное число!");
    }
  }

  return result;
}

selectFromInterval([1, 3, 5], 5, 2);

const MY_ITERABLE = {
  from: '1',
  to: 4,
};

MY_ITERABLE[Symbol.iterator] = function () {
  let current = this.from;
  let last = this.to;

  const isNotValid =
    typeof current !== "number" ||
    typeof last !== "number" ||
    current > last ||
    !current ||
    !last;

  if (isNotValid) {
    throw new Error('Ошибка!')
  }

  return {
    next() {
      if (current <= last) {

        return {
          done: false,
          value: current++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};

for (let num of MY_ITERABLE) {
  console.log(num);
}

