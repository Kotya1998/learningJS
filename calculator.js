const calculator = firstNumber => {
   // debugger;
    const inputNumber = firstNumber;
    let argumentsToArray = [];
    return {
        sum: function () {
            for (let i = 0; i < arguments.length; i++) {
                argumentsToArray[i] = arguments[i];
            }
            return inputNumber + argumentsToArray.reduce(function (a, b)  {
                return a + b;
            });
        },
        dif: function () {
            let result = inputNumber;
            for (let i = 0; i < arguments.length; i++) {
                result -= arguments[i];
            }
            return result;
        },
        div: function () {
            let result = inputNumber;
            for (let i = 0; i < arguments.length; i++) {
                if (arguments[i] === 0) {
                    throw new Error("Деление на ноль запрещено");
                }
                result /= arguments[i];
            }
            return result;
        },
        mul: function () {
            let result = inputNumber;
            for (let i = 0; i < arguments.length; i++) {
                result *= arguments[i];
            }
            return result;
        },
    };
};

const  myCalculator = calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400

console.log(myCalculator.sum(4, 86, 5)); //вернет 195
console.log(myCalculator.dif(100, 20)); //вернет -20
console.log(myCalculator.div(5, 4)); //вернет 25
console.log(myCalculator.mul(4, 2)); //вернет 400


// 3. # ДЗ 3 (со звездочкой)
// Написать функцию 'calculator', которая имеет один параметр - 'firstNumber'
// 'firstNumber' - это число, с которым будут производиться действия
// Функция 'calculator' должна возвращать объект, у которого должно быть несколько функций.
//     Каждая из этих функций принимает неограниченное количество аргументов и производит какие-то арифметические операции с этими аргументами и тем числом, которое было передано в 'calculator' и возвращает результат:
//     - 'sum' - складывает 'firstNumber' с переданным аргументами
// - 'dif' - вычитает из 'firstNumber' переданные аргументы
// - 'div' - делит 'firstNumber' на первый переданный аргумент. Результат этой операции делится на второй переданный аргумент (если он есть) и так далее
// - 'mul' - умножает 'firstNumber' на первый переданный аргумент. Результат этой операции умножается на второй переданный аргумент (если он есть) и так далее.
//     Предусмотреть исключительные ситуации, для функции 'div', когда делитель равен нулю
//
// пример:
//     var myCalculator = calculator(100);
//
// console.log(myCalculator.sum(1, 2, 3)); //вернет 106
// console.log(myCalculator.dif(10, 20)); //вернет 70
// console.log(myCalculator.div(2, 2)); //вернет 25
// console.log(myCalculator.mul(2, 2)); //вернет 400