const allNumbers = [1, 2, 4, 5, 6, 7, 8];
const someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8];
const noNumbers = ['это', 'массив', 'без', 'чисел'];

const isNumber = value => {
    return typeof value === 'number';
};

const isAllTrue = (source, filterFn) => {
    if (source.length === 0)
        throw new Error("Передан пустой массив");

    for (let i = 0; i < source.length; i++) {
        if (filterFn(source[i]) === false)
            return false;
    }
    return true;
};


const isSomeTrue = (source, filterFn) => {
    if (source.length === 0)
        throw new Error("Передан пустой массив");

    for (let i = 0; i < source.length; i++) {
        if (filterFn(source[i]) === true)
            return true;
    }
    return false;
};


console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false
// console.log(isAllTrue([], isNumber)); // выдает ошибку, как и надо

console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
// console.log(isSomeTrue([], isNumber)); // выдает ошибку, как и надо
