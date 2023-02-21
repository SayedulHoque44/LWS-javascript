


/*
// -------------how javascript iterat somthing ----

const array = [1,2,3]// atar prototype e Symbol.iterator nam er akta function thake tkn js bujte pare ata akta iterator element

for(let x of array){
    console.log(x)
}

console.dir(array)

const iteratorNum = array[Symbol.iterator]();// atar prototype e next akta function ace

console.log(iteratorNum.next());
console.log(iteratorNum.next());// prottek bar iterat korar por value bartece
console.log(iteratorNum.next());
console.log(iteratorNum.next());// and ses e jkn ar value payna ba undefined hy tkn Done:True hoy and loop off hoye jay
// Hence amra Manually Iterat krte pari.

// Lets Make a Iterable Object
const myNumber = {};

myNumber[Symbol.iterator] = function(){
    let n = 0;
    let done = false;
    return {
            next(){
                n += 10;
                if(n == 100){done = true};
                return {
                    value : n,
                    done : done
                 }
             }
         }
    }

for(let x of myNumber){
    console.log(x)
}
console.log(myNumber)

//----------------------------------- ES6 ITERATORS --------------------Understanding The Concept
// Amra Simplay Array er Index call kore values gula print krte pari
let myArray = ["sa","ye","dul"]
for(let i = 0; i<myArray.length ; i++){
    //console.log(myArray[i])
}


// But In a Object e kono index order thake na tai index cara loop possiable hyna --- 01
let myObj = {
    text01 : "sa",
    text02 : "ye",
    text03 : "dul"
}

let values = Object.values(myObj);// Object.values(objectName) diye Selected object er values gula Array akare sajano jay : ["sa","ye","dul"]
let entries = Object.entries(myObj)// Object.entries(objectName) diye Selected object er entries gula Array akare sajano jay :--
//  3 ta entries akta Array er modde 3 Ta Array creat krbe and proverty & values Gula array er values hisebe thakbe jmn:--
// entries = [['text01', 'sa'],['text02', 'ye'],['text03', 'dul']]
//console.log(values)
//console.log(entries)

// ekhn values = ["sa","ye","dul"]
// &    entries = [['text01', 'sa'],['text02', 'ye'],['text03', 'dul']],

// ekhn entries er modde loop kore iteration korte pari

let myobjectProverty =[]
let myobjectValues =[]

for(let i = 0; i< entries.length ; i++){// entries.length = 3
//                                          1st Loop                    2nd Loop                        3rd Loop
    let inputedArray = entries[i]// entries[0]= ['text01', 'sa'] , entries[1]= ['text02', 'ye'] ,entries[3]= ['text03', 'dul']
    console.log(inputedArray)

    for(let x = 0 ; x < 1; x++){
        myobjectProverty.push(inputedArray[x])
    }

    for(let y = 1; y < 2 ;y++){
        myobjectValues.push(inputedArray[y])
    }

}
console.log(myobjectProverty)// ekhn myobjectProverty = ['text01', 'text02', 'text03']
console.log(myobjectValues)// & myobjectValues = ['sa', 'ye', 'dul']

let firstPovertyAndValue = myobjectProverty[0] + " Is "+myobjectValues[0]// text01 is sa
console.log(firstPovertyAndValue)


// Another Iteration Using Constructor --------------------- 02

function ConstructorObject(idNum,fname,lname,age){
    this.id = idNum
    this.firstName = fname,
    this.lastName = lname,
    this.age = age
}
let myObj =new ConstructorObject(01,"sayedul","Hoque",23);
let myObj02 =new ConstructorObject(02,"Zahidul","Hoque",23);



let myobjectProverty =[]
let myobjectValues =[]

//let values = Object.values(this);

ConstructorObject.prototype.MyProtoType = function(){
    
    let entries = Object.entries(this);
    for(let i = 0; i< entries.length ; i++){
            for(let x = 0 ; x < 1; x++){
                myobjectProverty.push(entries[i][0])
                myobjectValues.push(entries[i][1])
            }
        }
}
myObj.MyProtoType()
myObj02.MyProtoType()

//console.log(myobjectProverty)
//console.log(myobjectValues)

let convinedText ="";
for(let i = 0; i <myobjectProverty.length; i++){
    convinedText += myobjectProverty[i] + " Is "+myobjectValues[i]+"\n";// conbining object proverty + values,
}
console.log(convinedText)


// -------------------------------- The Practice of ProtoType :-----EveryThing

//01
const captain ={
    age : 45,
    city : "feni"
}

const player = Object.create(captain)// ekhane player akta object jekhane captain er entries gula prototype hisebe cole jay.
//console.dir(player)// amra player take dir krlei seta dekhte parbo
console.log(player)// ata khali karon atar bitore khali cz atar bitore sudu captain er prototype dukiyeci
console.log(player.age)// jehetu captain er entries gula player er prototype so amra agula call krote pari player.age diye


// Reference theke main object amra prototype call korte pari.
let personMethods = {// Object Reference
    eat : function(){
        console.log("Person is Eating")
    },
    sleep : function(){
        console.log("Person is Sleeping")
    }
}

//02
function Person(name,age){// Main Object

    let person = Object.create(personMethods);// person Object e personMethods e joto kicu ace sob person er prototype hiebe thabkbe.

    person.name = name;
    person.age = age;
    return person;

}

const Sakib = Person("sakib",23)
const Tamim = Person("Tamim",34)

Sakib.eat()

//03
function Person(name,age){// Main Object

    let person = Object.create(Person.prototype);// person Object e personMethods e joto kicu ace sob person er prototype hiebe thabkbe.

    person.name = name;
    person.age = age;
    return person;

}
Person.prototype ={// amra jani window er modde ekn person nam er akta function ace, akn amra set person er prototype e ai eat(),sleep() gula diye diyeci.
    eat : function(){
        console.log("Person is Eating")
    },
    sleep : function(){
        console.log("Person is Sleeping")
    }
}
console.dir(Person)
const Sakib = Person("sakib",23)
const Tamim = Person("Tamim",34)


Sakib.eat()
Array.prototype.Avanger = "hello world";// this-window -Array - prototype- Avanger : Array er prototype nam er object e  Avanger new peoverty dukai dici

//04
function Car(name,model,year){
    const car = Object.create(Car.prototype);// Car function er prot

    car.carname = name;
    car.model = model;
    car.year = year;

    return car;
}

Car.prototype = {//Car Function e amra prototype e ai 
    test : function(){
        //return "hello World";
        carTotalYear = 2022 - this.year;
        buildYear = 2022 - carTotalYear;
        output = this.carname+ " is Builded "+buildYear+" And Its"+carTotalYear+" years Old !"
        return output;
    }
    
}


const car1 = Car("BMW","X5",2014)

console.log(car1)
console.log(this)

// ----------------------------prototype-----------new in Javascript : 
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype = {
    eat : function (){
        return `Person is Eatindg`;
    },
    sleep : function (){
       return `Person is Sleeping`;
    },
    play : function (){
        return `Person is Playing`;
    }
}

const person1 = new Person("sayed",23)

console.log(person1.eat())
console.log(this)
// niche class constructor use kore ata ke aro sonkhep e likha jay


// ------------------prototype-----------using class constructor object

class Person {
    constructor(name,age){//(parameter)
        //ProvertyAdding in Object
        this.firstName = name;
        this.myAge = age;
    }

    //Below all are Person Prototype
    eat() {
        return `Person is Eatindg`;
    }
    sleep() {
       return `Person is Sleeping`;
    }
    play() {
        return `Person is Playing`;
    }
}

const sakib = new Person("sakib",34)

console.log(sakib)
*/




