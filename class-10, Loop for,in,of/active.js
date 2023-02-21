/*
//--------For loops ---!
for (let i = 0 ; i < cars.length ; i++){ //for(kotoThkeSuruHobe ; kotokhnKorbe ; protiLoopEKotoKoreBarave)
  console.log(i)  // {KiKorbe}
}
------------------------ for() & foreach() comaprision:
const cars = ["BMW","rollRayes","ferarri","mazda","toyota"]

for (let i = 0 ; i < cars.length ; i++){ 
  console.log(cars[i])  
}
console.log("---------")

cars.forEach(function(values){
      console.log(values)
})
----------- bitor theke loop off kora jay 
for (let i = 0 ;  ; i++){ 
    if(i <10){
      console.log(i)
    }else{
        break;
    }
}
------------another example - complex lagbe na ebabe krle
for (let i = 10;   ; i--){ 
  if(i == 0){
    break;
  }else{
    console.log(i)
  }
}
-----------------------print 1000 times by set loops
for (i = 0; i <1000 ; i++){// just loops ta set kore diyei bitore ja icca ta jotobar icca kaj kra jay
    console.log("i love coding")
    console.log("___")
}
---------------- print 1-100 odd & even
let x = 1
let y = 100
let odd = []
let even = []
for(;x < y ;x++){
  if(x % 2 == 0){
    odd.push(x)
  }else{
    even.push(x)
  }
}
console.log(odd)
console.log(even)
-------------------FizzBuzz
let x = 1
let y = 100
let fizzbuzz = []

for(;x < y ;x++){
  if(x % 3 == 0 && x % 5 == 0){
    fizzbuzz.push("fizzBuzz")
  }else if(x % 3 == 0 ){
    fizzbuzz.push("fizz")
  }else{
    fizzbuzz.push(x)
  }
}
console.log(fizzbuzz)

------------------- Fibonacci number 1-10
let a = 0,
    b = 1;
let total ;
let myarray = [0,1];
for(i= 2; i <10 ; i++){

  total = a + b;
  a = b;
  b = total;

  console.log(total);
  myarray[i] = total;// inputed in the array
     
}
------------------ innerHTml ul>li by for loops() or| foreach() 
----------forLoops()
let array = ["hey","joker","almun","sayed","fake","true","false","inn"]

let arraylength = array.length;
let innerhtml = "<ul>"
for(i = 0; i < arraylength ; i++){
      innerhtml += "<li>"+array[i]+"</li>";
}
innerhtml += "</ul>";
document.getElementById("demo").innerHTML = innerhtml;

----------foreach()
text ="<ul>"
array.forEach(function(values){
    console.log(values)
    text += "<li>"+values+"</li>";
   
})
text += "</ul>"
document.getElementById("demo").innerHTML = text;



//-------for__loops__in() --!
//-------objcet er khetre for in use krte hbe
const person = {
              fname : "sayed",
              lname : "almun",
              age : 21,
}
for(let x in person){// x is object provert name (fname/lname) & person{} is object name
  console.log(person[x]);// person.x is not right.
}
//--------- for in array() / but  never use for in in array without index important!, array er jonno array.foreach()/for loop()/for of()  use krte hbe
let array = ["hey","joker","almun","sayed","fake","true","false","inn"]
let hey = "sayed"

for(let values in array){
    console.log(values)
    console.log(array[values])
    console.log("----")

}
//For Loops Of() --!
let a = "sayed";
for(let x of a){ //x is values & a is varriable name.
      console.log(x);
}

-----
let array = ["sayed","almun","joker","inn","hi","hey"]

for(let values of array){
      let upCase = values.toUpperCase();
      console.log(upCase)
      
}
*/

const person = {
  fname : "sayed",
  lname : "almun",
  age : 21,
}
for(let x in person){// x is object provert name (fname/lname) & person{} is object name
console.log(person[x]);// person.x is not right.
}





