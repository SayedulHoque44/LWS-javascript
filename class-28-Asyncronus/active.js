

/*
// -------------------------------------JS Callback-----------------01


// Tow Way of calculate somthing - by function :
//01
function display(displayResult){
    console.log(displayResult)
}
function calculator(num1,num2){
    total = num1 + num2;
    return total;
}

let result = calculator(5,5)

display(result)

//02
function display(displayResult){
    console.log(displayResult)
}
function calculator(num1,num2){
    total = num1 + num2;
    display(total);
}

calculator(5,5)
                                                // Using callback 
//kono akta function er bitor arekta function parameter hisebe dile take call back function bole
// callback akta way- atar maddome amra akta function er maddome arkta function parameter akare call korte pari.and seta conditionly jodi cai ba na cai.
function display(displayResult){
    document.getElementById('demo').innerHTML = displayResult
}
function calculator(num1,num2,callback){//callback argument e display function ta pathai dici
    total = num1 + num2;
    if(callback) callback(total);// callback ta hocce display()// ata ai function e call hoice and total ta display(displayresult) e cole jabe.
    return total;
}

let value = calculator(5,5,display)//ekahen parameter e caile display dite pari jodi amra seta display krte cai, abr na caile par e display na dilei hbe.atai callback fu.
console.log(value)

//----------------------------------------------Asyncronus -----------------02

// javascript e code sob serial babe syncronus babe hy but ata ke asyncronus er maddome control kra jay

//-- setTimeOut()--01
setTimeout(function(){
    console.log('line 1 code')
},2000) // setTimeout akta asyncronus , atar maddome thik kora jay konta age print hbe ba konta pore/ 2000 milisecound - 2 secound

setTimeout(function(){
    console.log('line 2 code')
},500) 

console.log('line 3 code')


//-- setTimeOut()--02
// setInterval() o same but ata te amra je time dibo 2000/2 scound se sei function 2s por por abr krbe-
setInterval(function(){
    console.log('line 1 code')
},1000) // 1s por por er bitore thaka code ta run hbe


// using closures in setInterval syncronus---
let myfunction = function (){
    
    let counter = 0;

    return function(){
        counter += 1;
        console.log(counter)
    }
}

setInterval(myfunction(),1000)
*/







