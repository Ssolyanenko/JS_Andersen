function numberRegex() {
    const firstNum = +prompt();
    const secondNum = +prompt();

    if (firstNum && secondNum) {
        console.log(firstNum.toString(secondNum));
        numberRegex();
    } else {
        console.log('Некорректный ввод!');
    }
}
numberRegex();

function getNum() {
    const firstNum = +prompt();

    if (isNaN(firstNum)) {
        console.log('Некорректный ввод!');
        return;
    }

    const secondNum = +prompt();

    if (isNaN(secondNum)) {
        console.log('Некорректный ввод!');
        return;
    }

    if (firstNum && secondNum) {
        console.log(`Ответ: ${firstNum + secondNum}, ${firstNum / secondNum}`);
        getNum();
    }
}
getNum();
