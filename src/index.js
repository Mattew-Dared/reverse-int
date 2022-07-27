module.exports = function reverse(n) {
    // перетворили задане число в рядок, нарізали із рядка масив рядків (кожна цифра окремий елемент), перевернули усі елементи всередині масиву, обєднали усі елементи масива у один рядок, зберегли результат у змінній
    let reverseInt = n.toString().split("").reverse().join("");
    return parseInt(reverseInt);
};
