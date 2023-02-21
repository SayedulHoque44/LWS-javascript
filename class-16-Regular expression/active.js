
/* -------- Regular expression :
// ------------------search somethig by search 
let text = "hi i am jSayeD"

console.log(text.search("SayeD")) // normal search hocce case sensitive, case mill na pele khuje pabe na

console.log(text.search(/sayed/i)); // regular expresion use krle /value/i , i = case insensitive., mane case sensitive na . seta case na dekhei khuje ber krbe 

let replaceT = text.replace("hi","hello")

console.log(replaceT)// make a new string with replace value


let replaceT2 = text.replace(/jSayeD/i,"sayed"); //replce eo regular expression er pattern dite pari 
console.log(replaceT2);


console.log(text)// parmantly didnot cng, text er value same/

// Replace somthing by replace
function regularExpreFunction(){

        let text = document.getElementById("demo").innerHTML;
        let replaceText = text.replace(/website/ig,"Facebook") // ekahne (/value/ig) g hocce global , mane ekirkm joto value ace sob replace krbe.
        document.getElementById("demo").innerHTML = replaceText;
}



// -----------------Find somthing by match

let text2 = "lots of love"
let findertext = text2.match(/[l]/ig);// [value] joto gula value ace sob gula show korbe & ei khetre match use krte hbe
console.log(findertext)

let number = "0 1 2 3 4 5  6 7 8"
let finderNum = number.match(/[0-4]/ig);// number o khuja jay ba match kra jay but seta [] third breaket diye krte hbe
console.log(finderNum)


function numberFinder(){
        let num = prompt();
        
        if(num.match(/[1-4]/ig)){
                console.log("your Number is "+num)
        }else{
                console.log("invalid Number")
        }
}

//filter somthing and remove by match
let filterReEx = "0 2 3 4 5 6 8 9 0 j k l m a b c"

let filterword = filterReEx.match(/[^a-z]/g)// (^) ata dile je value dewa hbe oita bade baki sob print krbe ar jegula krbena ogular jayga khali rakhbe
console.log(filterword)

let filternum = filterReEx.match(/[^0-9]/g)
console.log(filternum)

//----
let multivalue = "green Red blue orange red orange blue red green dark dark"
let multivalueFind = multivalue.match(/(red|green|dark)/ig) // multivalue dekhar jonno (value|value|value) ababe likhte hy
console.log(multivalueFind)

*/

let text = "hello world 15 he loooo wooorld helloo"

console.log(text.search(/\blo/)); // \b mean , find the begganing text started lo
console.log(text.match(/\d/g)); // \d mean , find digit in any string
console.log(text.search(/\Blo/)); // \B mean , find the text which end with lo
console.log(text.search(/\bwooo/)); // \b mean , find the begganing text started lo

console.log(text.match(/he+/g)); // he+ mean , find the at least one he in any word
console.log(text.match(/lo*/g)); // lo* mean , l er pore lo tahkte pare ba akadik looo thakte pare


const pattern = /e/;
console.log(pattern.test("The best things in life are free!"))//RegExp ebabe kaj kre,ekahne test RegExp er method er nam,eta element khuje TRUE FALSE return kore
console.log(/T/.test("The best things in life are free!"))// ebabe o likha jay ak line e 
