

// ----------------------------------------------------------------------------------js Accessor 01
/*
//-- Getter
const myobj = {
    firstName : " Sayedul ",
    lastName : " Hoque ",
    get fullname(){// Get- ata diye amra propervity name er modde funtion use krte pari and () braket lagbe na.
        return this.firstName +" "+this.lastName;
    }
}

let text = "This is Getter </br>";


for(let x in myobj){
    text += x +" Is "+myobj[x]+"</br>";
}


document.getElementById('demo').innerHTML = text ;

console.log(text);

// --setter
const myobj02 = {
    firstName : " Sayedul ",
    lastName : " Hoque ",
    language :"",
    set giveLang(lang){//set diye manualy arkta proverty te amra kicu dukat pari--but ata object e undefined thakbe
        return this.language = lang;
    }
}
// problem :|
// for(let x in myobj02){
//     console.log(myobj02[x])// but loop er khetre ata ignor kre na and atar value undefined dekhay. 
// }

myobj02.giveLang = "Bangla";
console.log(myobj02)// set dewar karone giveLang ta se ignor kre console krle ,

// ------------------------------------------------------------------------------------JS Constructor 02

//constructor function :
function Person(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName  = function(){
        return this.firstName + ' '+this.lastName;
    }
}
 
let sayed = new Person("Sayedul","Hoque",21,"black");
let zahid = new Person("Zahiul","Islam",29,"Brown");
//console.log(sayed)

// class constructor:
class Car{
    constructor(name,year){// (par1,par2)
            this.name = name;// this ta object er nam ke parent hisebe dhore
            this.year = year;//proparte
    }
    get play(){// we also can use method
           return this.name+" "+this.year;// or can console
    }
}


const car1 = new Car("Toyota",2017);// created actual object ,
const car2 = new Car("BMW",2018);
const car3 = new Car("Ferarri",2020);

let test = car1.play
//console.log(test);
// class & function constructor er modde diffrence hocce Get ta use kra jayna function constructor ---

*/
// ----------------------------------------------------------------------------JS - Object - Prototype --- 03

function Person(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName  = function(){
        return this.firstName + ' '+this.lastName;
    }
}
 
let sayed = new Person("Sayedul","Hoque",21,"black");
let zahid = new Person("Zahiul","Islam",29,"Brown");

console.log(sayed)
Person.prototype.country = "bangladesh" // ata Person object er bitore show krbe na ata ai Person er constructor e joto gula object creat krbo-
                                        // so gula te country = bangladesh ata prototype hisebe thakbe.

//console.log(Person)
//console.log(sayed.country)// object e na dekle o amra ata ke proverty hisebe call kore dekhte pari
//console.log(zahid.country)// .dir korle tar prototype e click krle dekhbo proverty ta


