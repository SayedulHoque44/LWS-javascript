const array = [34, 45, 67, "c", 78, 87, "a", 65, "b", 54, "s", 43, 23];
let newarray = [];

for (let i = 0; i < array.length; i++) {
  if (!isNaN(array[i])) {
    newarray.push(array[i]);
    console.log(newarray);
  }
  //   console.log(array.sort());
}

/*

let arrayTest = ["sayed","almun","joker"]
arrayTest [3] ="(Hey)";
document.getElementById("demo").innerHTML = arrayTest;
let callArrayLength = arrayTest.length;
let callLastElement = arrayTest[callArrayLength-1];
console.log(callArrayLength);
console.log("Here The Last Element "+callLastElement);

---------Array Looping Confusion: -- :(

let arrayTest = ["sayed","almun","joker"]
arrayTest [arrayTest.length] = "Herly"
arrayTest [arrayTest.length] = "Fency"
arrayTest [arrayTest.length] = "Ali"

let lengthOfArray = arrayTest.length;
let innerElement = "<ul>";

for(i = 0; i <lengthOfArray; i++){
    
    innerElement +=  "<li>"+arrayTest[i]+"</li>";
    console.log(innerElement);
    
}
innerElement += "</ul>"
document.getElementById("List").innerHTML = innerElement;

-----------Same Work , .forEach(functionName) use for array ,not loop but you have to clear the confustion use loop or .forEach same work.
let arrayTest = ["sayed","almun","joker"]

let text = "<ul>"
arrayTest.forEach(myFunction)

function myFunction(values){
     text += "<li>"+values+"</li>";

}
text += "</ul>"
document.getElementById("List").innerHTML = text;

-----------------//Two Way We can add new element in array
let arrayTest = ["sayed","almun"]
let addElement = arrayTest.push("joker")
arrayTest[3] ="Hey"// add by array index number
arrayTest[arrayTest.length] = "Hello"// add by array index number--Dynamicaly

-------Creates Undefined values in array
let arrayTest = ["sayed","almun"]
arrayTest[6] = "hey"
console.log(arrayTest)
console.log(arrayTest[4])
-------------Name Indexing in Array

--------- Arrey typeof
const arrayTest = ["sa","ya","ed"]
console.log(arrayTest)
console.log(typeof arrayTest)// arrey typeof always show as a object
//So To solve This problem How can we know That is It a actual Array 
let useMethodToShowArray = Array.isArray(arrayTest);
console.log("ITs a array : "+useMethodToShowArray)

------------------------------------------------------ARRAY METHOD-----------------------------

---- array.tostring() , Array.Join() 
let arrayTest = ["sayed","almun","joker"]
let ArrayToString = arrayTest.toString()// showing  the arrray element in string
console.log(ArrayToString)

let ArrayElementJoin = arrayTest.join("*")// showing  the arrray element in string and join the element whatever you want 
console.log(ArrayElementJoin)
--------------------------- pop(), push(), shift()
let arrayTest = ["sayed","almun","joker","Ali","pency"];

//pop()
let popArrayElement = arrayTest.pop();//pop remove the last element of array and  poped element can be store
console.log(arrayTest)
console.log("Just Poped : "+popArrayElement)

//push()
arrayTest.push("HelloWorld")// push add element in array from last 
console.log(arrayTest)

//unshift()
arrayTest.unshift("HiWorld")// unshift() add element in array from First 
console.log(arrayTest)

//shift()
let shiftElementArray = arrayTest.shift();//shift remove the first element of array.and  shifted element can be store
console.log(arrayTest)
console.log("just Shifted : "+shiftElementArray)

//delet name[par..]
delete arrayTest[2];// delet a element and his position show empty other element will not shift and length also be same ,
console.log(arrayTest);

//array.splice(kothyThekeSuruHobe,KoytaRemovekorbe,kiAddkorbo,kiAddkorbo,....)
let arrayTest = ["sayed","almun","joker","Ali","pency"];
let spliceTheArrayElement = arrayTest.splice(2,0,"HiWorld","HelloWolrd");// by splice() we can add element anywhere.
let spliceTheArrayElement02 = arrayTest.splice(2,2,"NoWorld","NowWorld","Good") // and we can renove also 
let spliceTheArrayElement03 = arrayTest.splice(4,1) // we can remove anywhere any element without adding element and store it.
console.log(spliceTheArrayElement03)
console.log(arrayTest)

//arra1.concat(array2)
let myGirls = ["sokin","jorina","pakhi"];
let myboys = ["saheed","rafin","rahim"];
let myfrnd = ["jolil","jabbar"];
let concatingArray = myGirls.concat("MyBoys",myboys,"myFrnd",myfrnd);// concat() method can Marge Manny array
console.log(concatingArray)
let sliceArray = concatingArray.slice(7,10)//we can use slice() in array
//let sliceArray = concatingArray.slice(0)
console.log(sliceArray);

-------------- sort() , reverse()
let arrayTest = ["Sayed","Almun","joker","Ali"]
let sortedArray = arrayTest.sort();// sort only think all are alphaveta
console.log(sortedArray);
let reverseArray = arrayTest.reverse();
console.log(reverseArray);
//If  we need to sort in number we have to call a funtion in sort
let arrayTest2 = ["100","1","25","2"]
let sortedArrayNumber = arrayTest2.sort(function(a,b){ return a-b } )
console.log(sortedArrayNumber);
console.log(arrayTest2) // sort change the array permanent see...
console.log(arrayTest2.reverse())

-----------Max() Min()------
let arrayTest =[1,6,2,5,4,7,3,8,9,101,67]
let maxValue = Math.max.apply(null,arrayTest)
let minValue = Math.min.apply(null,arrayTest)
console.log(maxValue)
console.log(minValue)

let arrayTest = [
    {UserName : "sayed", year : 1980},
    {UserName : "almun", year : 2001},
    {UserName : "ali", year : 1956},
    {UserName : "pency", year : 1990}
]
let sortedArray = arrayTest.sort(function (a,b){
    return a.year - b.year;// we can sort a object by his povertyName in Array by this way
})

---------- In array object  and Use of sort() , reverse()-------

*/
let arrayObject = [
  {
    id: 1,
    userName: "Sayed",
    age: 34,
    password: "heuheu",
  },
  {
    id: 3,
    userName: "almun",
    age: 43,
    password: "dfdf",
  },
  {
    id: 5,
    userName: "saima",
    age: 23,
    password: "dfd",
  },
  {
    id: 2,
    userName: "sufiya",
    age: 21,
    password: "sdfd",
  },
  {
    id: 4,
    userName: "Sayed",
    age: 34,
    password: "heuheu",
  },
  {
    id: 7,
    userName: "rofiq",
    age: 67,
    password: "dfd",
  },
  {
    id: 6,
    userName: "rohim",
    age: 56,
    password: "dfdf",
  },
];
/*
let sortedByObjectAge = arrayObject.sort(function(a,b){
    return a.age - b.age;
})

//let reverseThecurrentArray = arrayObject.reverse(); if uncomment this than array follwe this function cz this is last function

//console.log(sortedByObjectAge)
//console.log(sortedByObjectId)
//console.log(arrayObject)//all are same cz last function is by id sort change the array parmanently
------- problem in this function- :(
arrayObject.sort(function(a,b){
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if(x<y){return -1;}
        if(x>y){return 1;}
        return 0
    }
)
*/
let sortedByObjectId = arrayObject.sort(function (a, b) {
  return a.id - b.id;
});

console.log(arrayObject);
