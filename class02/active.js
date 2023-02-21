/*
var a = 10;//Gloval scop

function sleep(){
    //funtional scop
}
if(ture){
    //block scop
}
*/

/*--
-------------------------
// let and var
let x = 4;
var a = 11;
if(true){
    let x = 5;
    var a = 12;
    console.log("block scop 1 let x = 5, var a = 12 "+" let x = "+x+" var a = "+a);
}
if(true){
    //let x = 6;
    //var a = 13;
    console.log("block scop 2 let x = 4, var a = 12"+" let x = "+x+" var a = "+a);
}
console.log("This is global scop  let x = 4, var a = 11"+" let x = "+x+" var a = "+a);
*/

/*--------------------
    if(true){
    let x = 12;
    console.log(x);
    let a = 13;
    a = 67;// can be only assign in let;
    console.log(a);
}
*/

/*---------------------------------
    if(true){
    const a = 23;
    const n = 34;
    console.log(a);
}
 */

/*---------------------------
let a = 4;
let b = 6;
//let c = a+b;
console.log("string"+a+b);
console.log(a+b+"string");

-------------------------------
let fN = prompt("FirstName =");
let lS = prompt("LirstName =");
let iD = prompt("ID =");
let myObject = {firstName : fN,lastName : lS,id : iD};// object data type
console.log(myObject)

----------------------
function sleep(names,times){
    console.log(names+" is sleeping from "+times)
}

sleep("sayed","10 pm");
sleep("almun","11 pm");
sleep("joker","12 pm");

function love(par1,par2){
    
   console.log(par1+" Love "+par2+" Some much,"+par1+" listen Every word Of "+par2+"  "+par1+" Can Do Anything For "+par2)

}

--------------------------------------------
function myFunction(a,b){

    c = a+b;
    return c;
}
var a=34;
var b=56;

let test = myFunction(a,b); //return example

-----------------------------------------------------
function kgToGram(kg){
    gram = kg*1000;
    return gram;
}
let kg = 70
let kGram = kgToGram(kg);

console.log("My Weight "+kg+" kg To Gram is"+kGram);

*/











