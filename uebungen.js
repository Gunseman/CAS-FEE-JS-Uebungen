"use strict";
/**
 * Created by gunseman on 24.06.17.
 */

let params = [1,2,3];
let other = ["A", "B", ...params];
console.log(other); //


function f(x,y, ...a){
    return a.length;
}
console.log(f(1,2,"Hallo", true, 7)); //

console.log(3 + "2" - "px"); //
console.log(3 + "2" + "px"); //


console.log(NaN == NaN); //


let customer = {name: "Michael"};
console.log(`Hallo ${customer.name}`); //

let list = [1,2,3];
let [a1, a3] = list;
console.log(a1, a3); //
let [a4, , a5] = list;
console.log(a4, a5); //


console.log("---> Object");
let obj = {o1: "o1"};
let {o1 = "o1a", o2 = "o2"} = obj;
console.log(o1, o2); // 'o1', 'o2'

let a = 2;
let b = 2;
// Umwandlung von Property Namen in String
console.log({a,b,[a+b]:a}); //


function f1(key = 12 , name , val) {
    console.log(key, name, val);
}
f1({name: "name", val:1}); //
f1({name: "name", val:1},"urs",4); //


function nothing (argument){
    return
    argument !== null;
}
console.log(nothing(10)); //


const person = {name: "Peter"};
person.printName = () => console.log(this.name);
person.printName(); //


let arr = [1,6,2,5]; //
console.log(
    arr.map(x => x * 2)
        .filter(x => x > 4)
        .find(x => true) //
    // findet ersten Eintrag
);


let x = "Hallo";
function f2() {
    console.log(x);
    let x = 10;
}
f2(); //

console.log("---> Block A - Pars into Number");
console.log( +(true)); //
console.log( +(false)); //
console.log( +("1ab")); //
console.log( +("123")); //
console.log( +([])); //
console.log( parseInt("1.2ab")); //
console.log( parseFloat("1.2ab")); //
console.log( parseInt("abc")); //

console.log("---> Block B");
console.log(1, "4" / "2"); //
console.log(2, "4" - "2"); //
console.log(3, "4" * "2"); //
console.log(4, "4" + "2"); //
console.log(5, 10 * 3 + "px"); //
console.log(6, "px" + 1 - 2); //
console.log(7, 1 / 0); //
console.log(8, "3px" + 3 * 2 + 2 + 2 + "3px"); //
console.log(9, "foo"+ +"abcabc"); //
console.log(10, "2" - -1); //

console.log("---> Block C - Statement ==");
console.log([] == false); //
console.log("" == false); //
console.log(null == false); //
console.log(0 == "0"); //
console.log(null == undefined); //
console.log([1,2] == "1,2"); //
console.log(NaN == NaN); //
console.log([] == ![]); //

console.log("---> Block D - Statement ===");
console.log(false === false); //
console.log(4 === 4); //
console.log(false === false); //
console.log([] === false); //
console.log("" === false); //
console.log(null === false); //
console.log(0 === "0"); //
console.log(null === undefined); //
console.log([1,2] === "1,2"); //
console.log(NaN === NaN); //
console.log([] === ![]); //

function was([e1 = 'ich', e2='du'] = []) {
    console.log(e1, e2);
}
was(); //
was([1]); //
was(false, 2); //
was(undefined, 3); //
//was( , 4); //
let ieta = [0,1,2,3,4];
was(ieta, 5); //

const x = [0,1,2,3,4];
const y = [ , a, , b, ...rest] = x;
console.log(a,b, rest); //
