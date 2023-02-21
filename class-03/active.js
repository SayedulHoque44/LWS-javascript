/*--------------Object---------------
const car = {
    name: "fiat",
    model: 500,
    weight: "850kg",
    color: "white",
    start: function (){
        console.log("car has started");
    },
    drive: function(){
        this.start();
        console.log("car is driving");
    },
};



------------Html 1-----Event-------------------------
function displayDate(){
    alert("i am ok");
    document.getElementById('demo').innerHTML = Date();
}

let text = "sfdfdlfskdjflkjsdflkjdkfjdklfjlkd";
console.log(text.length);

---------------strings--------------------------

let text = "This \t\t\tis \"text\" what i want";
console.log(text);

-------------- String Method & clearing javascript Object--------
var test = prompt("give name")
const textObject = {
    firstName : test,
    lastName : "almun",//lastName is a poverty
    roll: "23",
}//this is object

console.log(textObject.lastName);// (objectName.ObjectPoverty), object poverty value called by proverty name.

const text = "sayedul hoque almun";
console.log(text.length)// what just happed here? text is strings but when i called text with dot(.) ,its me this text to obejct like 
// text = New string("sayedul hoque almun"); and .length is his poverty of this object, build-in poverty.

----- strings.slice(start,end) function---------
let text = "bangladesh";
let testSlice = text.slice(0,6);
let testSlice02 = text.slice(6);
console.log(testSlice);
console.log(testSlice02);

------object.substr(start,count) function------------
let text = "bangladesh";
let testSubStr= text.substr(0,6);
console.log(testSubStr);

------strings.replace(parameter1,parameter2) function----------
let textString ="test hy bye test"// prothom tai sudu cng hbe
let testRepalce = textString.replace("test","JOker");
console.log(testRepalce);

--------Html 2 case change-------
function upperCase(){
    let UpperText = document.getElementById("hello").innerHTML;

    document.getElementById("hello").innerHTML = UpperText.toUpperCase();
}

------par1.concat(" ",par2) function------------
let text01 ="sayedul"
let text02 ="Hoque"
let testConcat = text01.concat(" ",text02);//
console.log(testConcat);

---------To Remove Unnececery space--------
// But- sudu text er age ar porer space reamove krte parbe, text er middler space remove kre na !
let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2);

-------charAt(), charCodeAt(),test[1]...----------
let text = "Bangladesh"
let gWord = text.charAt(3);
console.log("this is specipy by charAt "+gWord);//specify A Word.
console.log("this is specipy by charCodeAt "+text.charCodeAt(3))//specify A word his unicode.

let arrySpeciyType = text[3]
console.log("this is specipy by ArrayType "+arrySpeciyType)//specify A word his unicode arrySpeciyType.

//Now chartAt & arrytype specipy diffrency:
let test1 = text.charAt(100);
let test2 = text[100];
console.log("test1 is see empty if there no vale : "+test1);
console.log("test2 is see give undefined type if there no vale : "+test2);

---------- indexof(),
let test = "sayed almun joker hey"
//console.log(test.indexOf("almun");
let test2 = test.replace("hey","almun")
console.log(test2)
console.log(test2.indexOf("almun",11));//
-- lastIndexOf(par,suru theke koto tukur modde dehkbe)
let str = "sayed almun joker hey";
let test = str.lastIndexOf("sayed",10);
console.log(test);
--------startsWith()
let str = "sayed almun joker hey";
//let test = str.startsWith("sayed");//true
//let test = str.startsWith("sayed",6);//false
let test = str.startsWith("almun",6);
console.log(test);
----------match()
let str = "sayey almun joker hey";
let test = str.match(/ey/g);
console.log(test);
----------includes()
let str = "sayed almun joker hey";
let test = str.includes("almun");
console.log(test);

let test1 = ["sayed","almun","hey"]

let input = prompt();
let test2 = test1.includes(input)
if (test2){
    alert("You Are In")
}else{
    alert("No Matchs!")
}
---------endsWith()
let str = "sayed almun joker hey";
let test = str.endsWith("almun",11);
//let test = str.endsWith(" ",18);//end with space ,that's mean last word have to match in given value ;
console.log(test);
--------endsWith()

-----------Template Literals
let str =` "hey boy's i'm here" 
            hurry  !`;// that's the benifit of template literals

    console.log(str);
-----
let tempLit = "i am";
let text = `${tempLit} Sayed`//that's the benifit of template literals variable called by ${var}, though its a string;
console.log(text);
*/
