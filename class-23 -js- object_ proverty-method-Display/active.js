
/*
-------------------------------01 ---------------- in object proverty adding , delete , replace
const person = {
    name : "sayed",
    age : 34
} 
person.country = "Bangladesh";// add new proverty and value in object
person.age = 56;// we can update property value


delete person.age;// jekono proverty ebabe delet krte hy
//console.log(person)
//console.log(person.name)// proverty call kra hy ebabe
//console.log(person["name"])// abr ebabe o call kra jay and proverty name ta string e likhte hbe

for(let x in person){// object e loop use krte for in use krte hbe.
    //console.log(x)
    //console.log(person.x)//ekhane ebabe dile undefined hobe.
   // console.log(person[x]);

    console.log(x+" is "+person[x]);
}

const nestedObj = {
        name : "car list",
        year : "2020",
        car  :{
            car1 :"Toyota",
            car2 :"Bmw",
            car3 :"Ferari"
        }
}

console.log(nestedObj.car.car1)// nested object creat kra jay


// ------------------------- 02 -----------------------calling array element is object- complex type
const nestedArrayInObject = {
    name : "car list",
    year : "2020",
    car  :[
        {carName:"Ford",models:["Fiesta","Focus","Mustang"]},
        {carName:"BMW",models:["320","X3","X5"]},
        {carName:"Fiat",models:["500","panz","Xpender"]},


    ]
}
let text ="";
for(let i in nestedArrayInObject.car){
    console.log(nestedArrayInObject.car[i].carName);
    text += "<h1>"+ nestedArrayInObject.car[i].carName + " is brand of ";
    for(let j in nestedArrayInObject.car[i].models){
        console.log(nestedArrayInObject.car[i].models[j]);
        text += nestedArrayInObject.car[i].models[j]+"  ";
        //console.log(nestedArrayInObject.car[i].carName + " is brand of " +nestedArrayInObject.car[i].models[j])
    }
    text += "</h1>"
}
console.log(text)
document.getElementById('demo').innerHTML = text;


//--------dir
let a = new String ("bangladesh");
console.dir(a)// dir ta element er sob details diye dey , amra dekte pari sob kicu kei js object hisebe ney

//------------------03-------------------Object Method------------

const person = {
    fname : "sayed",
    lname : " Almun",
}
person.fullname = function(){// method o amra object e notun kore adding krte pari
    return (this.fname + this.lname).toUpperCase();
}
console.log(person.fullname())//console.dir dile sob dekha jay

//------------------------------------04--------------Display Object-------------------
//-------type 01
const myobj = {
    firstName : " Sayedul ",
    lastName : " Hoque ",
    fullname : function(){
        return this.firstName +" "+this.lastName;
    }
}

let text = "";


for(let x in myobj){
    text += x +" Is "+myobj[x]+"</br>";
}
text += "FullName is "+myobj.fullname()

document.getElementById('demo').innerHTML = text ;

console.log(text);

//-------type 02
const myArray = [
    {id : 1,FirstName:" Sayedul ",LastName : " Hoque"},
    {FullName:function () {
        return this.FirstName + this.LastName;
    }},
    {id : 2,FirstName:" Zahidul ",LastName : " Hoque"}
]


let test02 ="";

let firstArIndex = myArray[0];

for(let values in firstArIndex){
    test02 += values +" is "+firstArIndex[values]+"</br>";
}
test02 += "FullName Is "+myArray[1].FullName.call(myArray[0]);

document.getElementById('demo').innerHTML = test02 ;

/---------------taking object values
const person ={
    name : "John",
    age: 26,
    city:"France"
}

//console.log(Object.values(person));// we can take any object all values by this object.values(objectName).

let objectValuesArray = Object.values(person);

objectValuesArray.forEach(function(value,index){// jehetu ata array , akn amra array er jekono iteration krte pari.
    console.log(index+" "+value);

})

let jsonStringObj = JSON.stringify(person)// ebabe amra object ke string e covert krte pari.But function ke kicu kre na.jodi krte cy thle func ke stringkrteHobe

*/


