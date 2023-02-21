
/*
//----problem 01
function btn(){
        let mainText = document.getElementById('text').innerHTML;
        let matchText = mainText.match(/sayedf/ig)// remove f , sayed will find
        let finalText = matchText ? matchText.length : 0;
        document.getElementById('demo').innerHTML = finalText+" Finded Here!";
        document.getElementById('demo2').innerHTML = mainText.search(/sayed/i)+" Number Index!";

}


//-------------- problem 02
//input : linearSearch (['a','b','c','d','e'],'c')
//output : indexNumber or notfound

function linearSearch(array,value){
        let arrayLength = array.length
        for(i=0 ; i<arrayLength ; i++) {
                console.log(array[i])
                if(array[i] === value){
                        return i;// jkn c ta peye jabe tkn return er karone dirct loop theke ber hoye jabe and value ta return kre dibe
                }
        }
        return "Not found";// na pele to loop theke ber hbe tkn ai function er ata return kre dibe.
}
console.log(linearSearch(['a','b','c','d','e'],'b'));


// ----------problem 03, 
//find thie longest element from array and its index number
let array = ["sayed","almun","learn with sayed","Hoque"]

function longestElement(){
        let longestElement = '';
        for(values of array){
                
                if(values.length > longestElement.length){
                        longestElement = values;
                }
        }
        
        return [longestElement, array.indexOf(longestElement)];
}

console.log(longestElement())

// ----------problem-04
// filter only true element
const array = [
        "lws",
        undefined,
        "sayed",
        false,
        "apple",
        40,
        NaN
]
const nearry =[];

function truearay(){
        for (values of array){
                if(values){
                        nearry.push(values)
                }
        }
}
truearay()
console.log(nearry);

const truearay2 = array.filter(Boolean);// arekta way
console.log(truearay2)
*/

