// const ARR = [5, 3, 6, 2, 7, 8, 10];
//
// function foo(num) {
//   return num % 2 === 0;
// }
//
// Array.prototype.filter2 = function (callback, thisArg) {
//   if (this == null) {
//     throw new Error("Cant iterate over undefined or null");
//   }
//
//   let context = this;
//   let ObjThis = Object(this);
//
//   if (arguments.length > 1) {
//     context = thisArg;
//   }
//
//   if (typeof callback !== "function") {
//     throw new Error("Callback is not a function");
//   }
//
//   let len = ObjThis .length;
//   let res = [];
//
//   for (let i = 0; i < len; i++) {
//     if (i in ObjThis) {
//       let current = this[i];
//       if (callback.call(context, current, i, ObjThis)) {
//         res.push(current);
//       }
//     }
//   }
//
//   return res;
// };
//
// let result = ARR.filter2(foo);
//
// console.log(result);


//2) Написать функцию createDebounceFunction. Она должна принимать два аргумента: callback-функцию и задержку в миллисекундах. Данная функция должна возвращать новую функцию, вызывающую callback-функцию с задержкой в переданное количество миллисекунд. ПРИ ЭТОМ! Если за то время, пока внутрення callback-функция ждёт своего вызова, наша созданная функция вызывается ещё раз, то "счётчик" времени должен сбрасываться и начинаться заново (т.е. вызова внутренней функции произойти не должно).
//
// > Пример:
// const log100 = () => console.log(100);
// const debounceLog100 = createDebounceFunction(log100, 1000);
// debounceLog100();
// setTimeout(debounceLog100, 200); // так как задержка в 1000мс и новый вызов этой же функции происходит через 200 миллисекунд, то таймер запускается заново
// setTimeout(debounceLog100, 400); // снова сбрасываем таймер ещё через 200 миллисекунд
//
// Вывод в консоли значения 100 примерно через 1000мс + 200мс + 200мс
function saveInput(){
    console.log('Saving data');
}

function createDebounceFunction(func, ms){
let timeout;
  return   function () {
        const funcCall = () => {func.apply(this, arguments)}

      clearTimeout(timeout)

    timeout =  setTimeout(funcCall, ms)
    }
}




setTimeout(saveInput,1000)


