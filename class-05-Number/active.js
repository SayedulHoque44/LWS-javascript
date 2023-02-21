/*
- when there in plus + operator its piority the string
let x = 20;
let y = "10";
let z = x+y;
console.log(z)// will give 2010 value

let x = 20;
let y = 10;
let z = "hey";
let c = x+y+z;
console.log(c); // will give 30hey 

let x = "hey";
let y = 10;
let z = 20;
let c = x+y+z;
console.log(c) // will give hey1020

let x = 20; // "20" - same work
let y = "10";
//let z = x/y;
let z = x*y;
//let z = x%y;
console.log(z)// so without + , all of  division/ , multification* , and % can calculte a numeric number though they are in string,
-- if there No Number and we are tring to do (*,%,/) this operator it will give Nan (Not a Number) ,
----------------isNaN(a)
let a = "12";
let b = 10;
let c = "D20"// its not a number cz there are D ,
console.log(isNaN(a)) // happining..is Not A Number . (you are saying false cz its a number)//JS always count as a numeric number though its string
console.log(isNaN(b)) 
------------A number To String toString()
let x = 123;
let newn = x.toString();// A number To String
console.log(typeof newn)


----------- toExponential()  float er pore kyta number printe krve seta
let x = 9.567
let newN = x.toExponential(6);// 
console.log(newN)
-----------x.toFixed() float er pore kyta number printe krve seta
let x = 9.567
let newN = x.toFixed(2);// 
console.log(newN)
--------------- Number()
let a = Number(prompt(""))
let b = Number(prompt(""))// cz prompt() always a string then we can make it number this Number()
let c = a+b
console.log(c)

---------- parseInt(x); parseFloat(x);          
let x = 3.564;
let y = parseInt(x);
let z = parseFloat(x);
console.log("Its A Integer : "+y)
console.log("Its A Float : "+z)
*/

