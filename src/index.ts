// string, boolean, number, ...
let x: number = 40;
console.log(x);

let firstName: string = "Victor";
let age: number = 21;
const isAdmin: boolean = true;

//String != string

console.log(typeof firstName);

firstName = "Pedrinho";
console.log(firstName);

// array numérico
const myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myNumbers);
console.log(myNumbers.length);

//tuplas
let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["olá", "mundo"]]

console.log(myTuple);

//object literals -> {prop: value}

const user: { name: string, age: number } = {
    name: "Victor",
    age: 18
};

console.log(user);


// type alias
type myId = number | string
const userId: myId = 10;
const productId: myId = "1009";


// enum

enum Size {
    p = "Pequeno",
    M = "Médio",
    G = "Grande",
    GG = "Extra Grande"
}

const blusa = {
    name: "Blusa verde",
    size: Size.M
}

console.log(blusa);

// literal types

let auth: "autenticado" | null;
auth = "autenticado";
auth = null;

// funções
// função tipada
function soma(a: number, b: number) {
    return a + b;
}

console.log(soma(44, 13));


function hello(msg: string): string {
    return `Hello ${msg}`;
}

console.log(hello("Victor Silva"));

// função void
function log(msg: string): void {
    console.log(msg);
}

log("Testando função log");

//interfaces

interface sumNums {
    n1: number,
    n2: number
}


function sum(nums: sumNums) {
    return nums.n1 + nums.n2;
}

console.log(sum({ n1: 4, n2: 6 }));


// arrays genéricas
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);

    })
}

const a1 = [1, 2, 7, 8, 11, 12];
const a2 = ["um", "dois", "três", "quatro"];
showArraysItems(a1);
showArraysItems(a2);


// classes
class User {
    name
    username
    isOnly

    // construtor
    constructor(name: string, username: string, isOnly: boolean) {
        this.name = name;
        this.username = username;
        this.isOnly = isOnly;
    }
    showUserName() {
        console.log(`O nome de usuário é ${this.username}`);
    }

    showIsOnly(only: boolean): void {
        if (only) {
            console.log(`Usuário online: ${this.username}`);
            return;
        }
        console.log("Usuário offline");

    }
}


const vitinho = new User("Vitinho", "vitinho", true)
console.log(vitinho);
vitinho.showUserName();
vitinho.showIsOnly(true);


//interfaces em classes

interface Vehicle {
    brand: string;
    showBrand(): void;
}

class Car implements Vehicle {
    brand;
    wheels;

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);

    }
}

const gol = new Car("Volkswagen", 4);
gol.showBrand();

// herança

class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}

const senna = new SuperCar("McLaren", 4, 2.5);
senna.showBrand();


//decorators

//id aletório e data atual de criação
// constructor decorator
function Base() {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}


class Person {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("Sam");

