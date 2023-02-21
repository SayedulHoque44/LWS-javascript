
/*

//----------------------------------------------- forEach() for array
let myArray = ["sayed","almun","joker"]

function myfunction(values,index,array){
    

    let uppercasethem = values.toUpperCase();
    myArray[index] = uppercasethem;//cmnt this thaan arrray will not cng permanently
    console.log(uppercasethem);//now array will be change
   
    
    console.log(values)
    console.log(index)
    console.log(array)
    console.log("------")
 }

let foreachFun = myArray.forEach(myfunction);
console.log(myArray) // array change permanently
console.log(foreachFun)// both same

--------------------------------------------------------map()

let myArray = [23,45,54,67,23];
function myfunction(values,index,array){
    // return values * 5; // return not work in forearch()
    let uppercasethem = values*2;
    myArray[index] = uppercasethem;//cmnt this thaan arrray will not cng permanently
    console.log(uppercasethem);// changed value

-------------------------------------------------------------------filter(_)
let newArray = myArray.map(myfunction); //if there no return variable will not get no values
//console.log(newArray)// its make a new array , its not change the myarray
console.log(newArray)//its give undeifinde cz map() take function value by return whcih not work in foreach().
console.log(myArray)

let myArray = [23,45,54,67,28];
function myFunction(values,index,array){
    
    return values>30;
    
}

 let newarray = myArray.filter(myFunction);// its cheak every element and filter them whice is conditon true
console.log(newarray) 
console.log(myArray) // not make new array

---------------------------------------------------------------- reduce()
let myArray = [23,45,54,67,28];
function myFunction(total,values,index,array){
    console.log(values)
    console.log("----")
    return total + values;
    
}

let newarray = myArray.reduce(myFunction);// reduce full array to single value 
console.log(newarray) 
console.log(myArray) // not make new array

-----------------------------------------------------------------------every()
let myArray = [23,45,54,67,28];
function myFunction(values,index,array){
    
    return values>56;
    
}

 let newarray = myArray.every(myFunction);// its cheak every element if there any false it will return false . and if every element true it give true return
console.log(newarray) 
console.log(myArray) // not make new array

---------------------------------------------------------------------some()
let myArray = [23,45,54,67,28];
function myFunction(values,index,array){
    
    return values>30;
    
}

 let newarray = myArray.some(myFunction);// its cheak every element and if there any element match conditon its will give true
console.log(newarray) 
console.log(myArray) // not make new array

---------------------------------------------------------------- Array indexof(), lastindexof(),includes()
let myarray = ["apple","mango","pinaplae","juice","apple","litchi","guyaba"]

let indexValue = myarray.indexOf("apple")+1

let lastindexValue = myarray.lastIndexOf("apple")+1

console.log("apple position is ",indexValue)
console.log("apple position is ",lastindexValue)

console.log(myarray.includes("pinaplae"))

-------------------------------------------------------------------------------- Find()
let myArray = [23,45,54,67,28];
function myFunction(values,index,array){
    
    return values>30;
    
}

 let newarray = myArray.find(myFunction);// its find whice values is match and return first value it
console.log(myArray) // not make new array

------------------------------------------------------Making string to array
let values = "ABCDEFGH"
let makeArray = Array.from(values)
console.log(makeArray)// making a array
------------------------------------------ arrray Date()
const d = new Date("2015-03-25")
console.log(d)
-------------------------- getdate()
const d = new Date()
console.log(d.getFullYear(),d.getDate(),d.getMonth(),d.getSeconds())
 */









 


