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
