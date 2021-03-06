const forEach = (array, appliedToArrayFunction) => {
    let modifiedArray = array.slice();
    for (let i = 0; i < modifiedArray.length; i++) {
        modifiedArray[i] = appliedToArrayFunction(array[i]);
    }
    return modifiedArray;
};

const filter = (array, appliedToArrayFunction) => {
  let newArray = [];
 debugger;
  for (let i = 0; i < array.length; i++) {
      if (appliedToArrayFunction(array[i]) === true) {
          newArray.push(array[i]);
      }
  }
  return newArray;
};

const map = (array, appliedToArrayFunction) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(appliedToArrayFunction(array[i]));
    }
    return newArray;
};

const reduce = (array, reducer, initialValue) => {
    let accumulator = initialValue === undefined ? 0 : initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i], i, array);
    }
    return accumulator;
};

const slice = (array, begin=0, end=0) => {
    let newArray = [];
    // if ((begin < 0) || (end < 0)) {
    //     array.reverse();
    // }
    if (end !== 0) {
        for (begin; begin < end; begin++) {
            newArray.push(array[begin]);
        }
    } else {
        for (begin; begin < array.length; begin++)
            newArray.push(array[begin]);
    }
    return newArray;
};

// const splice = (start, deleteCount) => {
//
// };

let array = [1, 2, 3, 4, 5, 6];
forEach(array, item => console.log(item));
let greaterThan4 = filter(array, item => item > 4);
let square = map(array, item => item*item);
console.log(greaterThan4);
console.log(square);
const sum = reduce(array, item = (a, b) => a + b);
console.log(sum);
const sliceResult = slice(array, -3, 5);
console.log(sliceResult);
// 1. ДЗ - 1:
//
// написать модуль, который экспортирует аналоги методов для работы с массивами:
//     forEach, filter, map, slice, reduce, splice  пример:
//
//     let array = [1, 2, 3, 4, 5, 6];
// forEach(array, item => console.log(item));
// let greaterThan4 = filter(array, item => item > 4);
// let sqare = map(array, item => item*item);
//
// Описание того, как работают эти методы, есть на Mozilla Developer Network и в бесплатных видеоуроках LoftBlog/LoftSchool.
//
//     Реализация функции splice является задачей со звездочкой.
//     Ее выполнение не обязательно, но желательно.
//