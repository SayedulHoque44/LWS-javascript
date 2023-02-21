
/*
// ----------------------------------------------------Function Defination ------01---------

// ---01 function hosting
console.log(a())// tai amra ata ke age o console krte pari
function a(){//-Funcation declaration o varriavle er mto hosting
    return 5;
}
//but..

//console.log(b())// ekhn age krle error dibe cz ekhane let b; hosting hoyece , function to akn assign akare ache
let b = function funName(){
    return 4;
}


//-----02 Arrow Function & self Invoice Function

//self Invoice Function
(function (){// function er nam er kono kaj ny cz ata to alada call kra jabe na .
    console.log("I called my self");
    //return 5;// return er kono kaj ny.
})();// ()(); ebabe suru krte hbe


//Arrow Function :
let a = (x,y) => x+y;// ata return likha lage na , ata sudu kra jay airkm simple ak line er kicu krle.
console.log(a(1,4))


// but multi line er khetre {} ata diye krte hbe
let b = (x,y) => {
    cons
    c = x + y;
    console.log(c)
}
b(10,20)

//Arrow Function (This.) how work in Object
const myObj = {
    name : "sayed",
    arrowFu : () => {
        console.log(this)// amder mot e object e this hocce sei object er nam
    }
}
myObj.arrowFu()// but object er arrow function e this use krle seta gloval window kei call kore | tai object e arrow function e this na use krai better.

// ----------------------------------------------------Function Parameters ------02---------
// Argumant & parameter
let x = function(a,b,c=5){// abr amra parameter & argument aksathe dite pari
    //console.log(arguments)//(par1,par2) = argumenet(2,3) ekahne arguments hocce funtion er a & b er value,agula array akakre thake, ar a & b holo funtion er parametter
    return a+b+c;
}
console.log(x(2,3))

// take a MaxArguments
function maxValuArgument(){// kono parametter na dile o function call krar smy joto argu diyeci sob ai func er argu te ace.
    console.log(arguments)// arguments sob gula akta array te thake 
    // akn ami cacci sob ceye boro argument nite
    let lengthOfArguments = arguments.length
    let max = 0;
    for(let i = 0; i <lengthOfArguments ; i++){
        let valuOfArgumetns = arguments[i]
        if(valuOfArgumetns > max){
            max = arguments[i]
        }

    }
    console.log(max)
}

maxValuArgument(122,56,789,567,78,54)

// object parametter Function
let funObj = function(){
    x = obj.one
    y = obj.two
    obj.three = 20// Notice : ababe krele object eo three er value cng hoye jabe .
    return x * y;
}

let obj = {
    one : 4,
    two : 8,
    three :1
}

console.log("Prothome : "+obj.three)//

console.log(funObj(obj))

console.log("Funtion call krar pore : "+obj.three)

//-------------------------------------------Function Call()------------03------------------//

const person = {
    fullname : function(city,country){// ekhane paramiter diye segular argument o call() er bitore dite pari
        return this.firstName+" "+this.lastName+" And City is "+city+" And Country is "+country
    }
}

const person1 = {
    firstName : "Sayedul",
    lastName : "Hoque"
}

const person2 = {
    firstName : "Jahidul",
    lastName : "Islam"
}

console.log(person.fullname.call(person1,"Dhaka","Bangladesh"))//person er fullname function e call() diye se kake this hisebe rakhbe ta thik kra jay
// .call(thisObjectName,argument,argument)

//-------------------------------------------Function Apply()------------04------------------
//Apply() akdom same call() er moto, but just difrence ta hocce apply() te argument gula [argu,argu,argu] airkm array akare dite hy
const person = {
    fullname : function(city,country){
        return this.firstName+" "+this.lastName+" And City is "+city+" And Country is "+country
    }
}

const person1 = {
    firstName : "Sayedul",
    lastName : "Hoque"
}

const person2 = {
    firstName : "Jahidul",
    lastName : "Islam"
}

console.log(person.fullname.apply(person1,["Dhaka","Bangladesh"]))//person er fullname function e apply() diye se kake this hisebe rakhbe ta thik kra jay &-
// .apply(thisObjectName,[argument,argument])


// ---Perfect use of apply()- Ex-01-

console.log(Math.max(2,4,1,2,5,7,2,4))// amr jani ebabe max number print kra jy 

// But Array er value gular modde theke  max number amra loop cara ber krte pari na , but apply diye ta possiable :
let array = [2,4,1,10,2,5,7,2,4]
let maxValueOfArrayByApply = Math.max.apply(this,array)// ababe o deewa jabe abr apply(this,[1,2,3,,53,2]) ebabeo, But apply() te argument array hotei hbe.
console.log(maxValueOfArrayByApply)

let maxValueByCall = Math.max.call(this,1,30,4)// but call e Array dewa jabe na.
console.log(maxValueByCall)

//------------------------------------------Function Closures() ---------------------05----------------

//amra jani function call er por bitorer local varriable gula more jay----01
function count(){
    let counter = 0// amra jani count() fun  call er por ai count = 0 mara jabe , abr count() krle notun kore creat hoye kaj krbe and counter 1 ei return krbe.

    function increment(){
        counter += 1;
    }
    return counter;
}
//console.log(count())// output 1 asbe & jotobar count() call krbo notun kore calculate hoye 1 asbe ^

// but amra jodi cai funtion er bitore varriable ta na moruk pore kaj e lagbe tkn sei variable ke clouser e niye jete hbe >--02
function temporary(){
    let counter = 0;

    return function(){
        counter += 1 
        return counter;
    }
    // amra jodi Funnction er return e function di and setar bitore je varriable dibo seta closures e cole jabe &- ^
    // closures e tkn ei jabe jodi oi variable ta main funtion eo thake. ^
}
let add = temporary()
//console.dir(add)// amra scops{} proverty er bitore closure on korle dekhbo closure e counter : 1 kore badtece jotobar add() function call hobe
// console.log(add())
function count(){
    document.getElementById("demo").innerHTML = add();
  }
*/











