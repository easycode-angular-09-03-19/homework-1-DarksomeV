// Создать функцию которая принимает число и считает факториал этого числа.
function factorial(n: number): number {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(7));

/*
Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
Если нет ни одного аргумента, вернуть ноль: multiply() // 0
 */

function multiply(firstNumber?: number, ...numberArray: number[]): number {
    if (!firstNumber) return 0;
    let result = firstNumber;
    for (let i = 0; i < numberArray.length; i++) {
        result *= numberArray[i];
    }
    return result;
}

let num1: number = multiply(5, 3, 4);
let num1_1: number = multiply();
console.log(num1, num1_1);

//Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverse(str: string): string {
    return str.split('').reverse().join('');
}

console.log(reverse('test'));


//Создать интерфейс Админа.
interface Admin {
    name: string;УфіУ
    email: string;
    password: string;
    type?: string;
}


//Задание со второй презентации
abstract class Car {

    constructor(
        protected mileage: number,
        protected fuel: number
    ) {
    }

    public abstract drive(kilometers: number);

    public abstract refuel(fuel: number);
}

class MyCar extends Car {
    constructor(protected mileage: number, protected fuel: number) {
        super(mileage, fuel);
    }


    //Без замороченых расчетов
    public drive(kilometers: number): string | void {
        for (let i: number = 0; i < kilometers; i++) {
            if (this.fuel > 0) {
                this.mileage++;
                this.fuel--;
            } else {
                return 'Топлива нет. Заправтесь.'
            }

        }
    }

    public get fuel_num(): number {
        return this.fuel;
    }

    public get mileage_num(): number {
        return this.mileage;
    }

    public refuel(fuel: number): void {
        this.fuel += fuel;
    }
}

const opel = new MyCar(1000, 30);


opel.drive(20);
opel.drive(40);

let newFuel: number = opel.fuel_num;
let newkilo: number = opel.mileage_num;

opel.refuel(50);





