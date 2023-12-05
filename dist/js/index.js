"use strict";
// string, boolean, number, ...
let x = 40;
console.log(x);
let firstName = "Victor";
let age = 21;
const isAdmin = true;
//String != string
console.log(typeof firstName);
firstName = "Pedrinho";
console.log(firstName);
// array numérico
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myNumbers);
console.log(myNumbers.length);
//tuplas
let myTuple;
myTuple = [5, "teste", ["olá", "mundo"]];
console.log(myTuple);
//object literals -> {prop: value}
const user = {
    name: "Victor",
    age: 18
};
console.log(user);
const userId = 10;
const productId = "1009";
// enum
var Size;
(function (Size) {
    Size["p"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
    Size["GG"] = "Extra Grande";
})(Size || (Size = {}));
const blusa = {
    name: "Blusa verde",
    size: Size.M
};
console.log(blusa);
// literal types
let auth;
auth = "autenticado";
auth = null;
// funções
// função tipada
function soma(a, b) {
    return a + b;
}
console.log(soma(44, 13));
function hello(msg) {
    return `Hello ${msg}`;
}
console.log(hello("Victor Silva"));
// função void
function log(msg) {
    console.log(msg);
}
log("Testando função log");
function sum(nums) {
    return nums.n1 + nums.n2;
}
console.log(sum({ n1: 4, n2: 6 }));
// arrays genéricas
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 7, 8, 11, 12];
const a2 = ["um", "dois", "três", "quatro"];
showArraysItems(a1);
showArraysItems(a2);
// classes
class User {
    // construtor
    constructor(name, username, isOnly) {
        this.name = name;
        this.username = username;
        this.isOnly = isOnly;
    }
    showUserName() {
        console.log(`O nome de usuário é ${this.username}`);
    }
    showIsOnly(only) {
        if (only) {
            console.log(`Usuário online: ${this.username}`);
            return;
        }
        console.log("Usuário offline");
    }
}
const vitinho = new User("Vitinho", "vitinho", true);
console.log(vitinho);
vitinho.showUserName();
vitinho.showIsOnly(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const gol = new Car("Volkswagen", 4);
gol.showBrand();
// herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
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
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
const sam = new Person("Sam");
