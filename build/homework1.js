// Создать функцию которая принимает число и считает факториал этого числа.
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(7));
/*
Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
Если нет ни одного аргумента, вернуть ноль: multiply() // 0
 */
function multiply(...numberArray) {
    if (numberArray.length == 0) {
        return 0;
    }
    var result = numberArray.reduce(function (res, current) {
        return res * current;
    }, 1);
    return result;
}
let num1 = multiply(5, 3, 4);
let num1_1 = multiply();
console.log(num1, num1_1);
//Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse('test'));
//Задание со второй презентации
class Car {
    constructor(mileage, fuel) {
        this.mileage = mileage;
        this.fuel = fuel;
    }
}
class MyCar extends Car {
    constructor(mileage, fuel) {
        super(mileage, fuel);
        this.mileage = mileage;
        this.fuel = fuel;
    }
    //Без замороченых расчетов
    drive(kilometers) {
        for (let i = 0; i < kilometers; i++) {
            if (this.fuel > 0) {
                this.mileage++;
                this.fuel--;
            }
            else {
                return 'Топлива нет. Заправтесь.';
            }
        }
    }
    get fuel_num() {
        return this.fuel;
    }
    get mileage_num() {
        return this.mileage;
    }
    refuel(fuel) {
        this.fuel += fuel;
    }
}
const opel = new MyCar(1000, 30);
opel.drive(20);
opel.drive(40);
let newFuel = opel.fuel_num;
let newkilo = opel.mileage_num;
opel.refuel(50);
