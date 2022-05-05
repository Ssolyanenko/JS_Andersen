const OBJECT = {
  foo: "bar",
  array: [1, 2, 3],
};

function instanceCopy(obj) {
  const copy = new obj.constructor();
  const keys = Object.keys(obj);

  keys.forEach((key) => {
    copy[key] = obj[key];
  });
  console.log(copy);
}

instanceCopy(OBJECT);

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

console.log(selectFromInterval([1, 3, 5], 5, 2));

const MY_ITERABLE = {
  from: 1,
  to: 4,
};

function iterableObj(iterObj) {
  const iterable = Object.values(iterObj);
  const iterableZero = iterable[0];
  const iterableOne = iterable[1];
  const isValid =
    typeof iterableZero !== "number" || typeof iterableOne !== "number";

  if (isValid) {
    throw new Error("Ошибка!");
  }

  for (let i = iterable[0]; i <= iterable[1]; i++) {
    console.log(i);
  }
}

iterableObj(MY_ITERABLE);




