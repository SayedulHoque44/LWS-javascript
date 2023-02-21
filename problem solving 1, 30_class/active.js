/*
// -----------------1-6 random number
function randNum(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randNum(0,6))


// ---------------is that leap year?
let year = prompt("Give Year :")
function isleap(year){
    if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0)) ){
        console.log(`${year} is a leap year`);
    }else{
        console.log("is not a leap year");
    }
}
isleap()

//--------------find vaowel in any sentence :
const vowels = ["a","e","i","o","u","A","E","I","O","U"];
function myvowels(sentence){
    let sentenceArray = Array.from(sentence);
    let count = 0 ;
    sentenceArray.forEach(function(values,index,array){
        if(vowels.includes(values)){
            count++;
        }
    })
    return count;
}



console.log(myvowels("I Love Bangladesh"))

// -------------filter duplicate number :
const  numbers = [1,4,5,5,6,7,6,8,9,10,4];
console.log(numbers)
const  duplicates = numbers.filter(function(values,index,array){
    return array.indexOf(values) !== index;// ekhne array.indexof(values) e indexof khujbe values tar array te position kothy si positon = jodi array er
                                          // index postion same na hoy tahole bujte hbe ata abnormal mane duplicate
    console.log(duplicates)

})


// -----------------------------------------odd even
let myArray = [1,3,4,2,5,7,6,8,10,9,11,13,12]

let sortedArray = myArray.sort(function(a,b){return a-b});


let odd = []
let even = []
function myfunction(values){
    if(values % 2 === 0){
        odd.push(values)
    }
    else{
        even.push(values)
    }

}
console.log(odd);
console.log(even);

let foreacharray = myArray.forEach(myfunction)
*/














