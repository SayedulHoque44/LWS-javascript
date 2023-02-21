
//---------------------------------Document Object Model(DOM)--------------Method()-(01)-----------------
/*

console.dir(document.getElementById("demo"))//p akta object js er kace and er onk proverty ache

const p = document.getElementById("demo")

p.innerHTML = "Text 01"// ai p object er bitore innerHTML nam er proverty er bitorer text dite pari ababe
console.log(document.URL)
console.log(document.getElementsByTagName('p'))// p document e joto gula ache dekhabe
document.getElementsByClassName('parag')
console.log(document.getElementById('demo').innerHTML)


//--------------------------------------Dom --Document (02) ------------------------------------------

let element = document.getElementById('myImg')
console.dir(element)
console.log(element.src)//we can take any attribute of element it can be - src/id/class/

console.log(element.attributes.src)//ata hocce html likci sei attribute

//--------------------------------------Dom --Element (02) ------------------------------------------
//01
let elementAnchor = document.querySelector('.anchor')// ata diye jekono kicur akta ke dora jay
console.log(elementAnchor)
console.dir(elementAnchor)

console.log(document.querySelectorAll('.anchor'))// ata diye oi nam er joto gula ace sob dora jay and segula array akare thake

let allClass = document.querySelectorAll('.anchor')// [a.achor,a.achor,a.anchor]

allClass[0].innerHTML = "SaYED"// 


//02
console.log(document.querySelector("#form1"))//form ke sobar mto ebabe select krte pari
console.log(document.forms["form1"])// ababr ebabe o krte pari ,ata form er nijosso , ata forms nam er array te joma thake, and form e id use krte hbe.
console.dir(document.forms["form1"])// amra dekhbo je dir krle form er bitore je input type thakbe segula sob array akare thakbe,

let form1call = document.forms["form1"]
console.log(form1call[0])

let text = ""
console.log(form1call.length)// se form er bitore 3 ta element ache
for(let i = 0; i < form1call.length ; i++){
    text += form1call[i].value + "</br>";
}

document.getElementById('demo').innerHTML = text;

//03
//koto babe amra element call korte pari
//agula Nodelist
console.log(document.getElementsByName('1stAnchor'))// name = "1stAnchor" ebabe nam diye call krte pari avr aki nam jotogula thakbe sob asbe
console.log(document.querySelectorAll('a'))// tag nam dile oi tag sob gulai asbe
console.log(document.querySelectorAll(".anchorClass"))// aki nam er class sob gula asbe

//HTML collection
console.log(document.anchors)// ata te je anchor gulate name ache sob gula show krbe
console.log(document.getElementsByTagName('a'))// ata a tag er sob gula call krbe

// agular bitore element gula arrry er element hisebe thakbe so amra agula theke element gula array er mto call korte parbo
let callbyName = document.getElementsByName('1stAnchor')[4]
console.log(callbyName)

// joto gula builin caller ache, agula sob array
// console.log(document.anchors)
// console.log(document.body)
// console.log(document.documentElement)
// console.log(document.embeds)
// console.log(document.forms)
// console.log(document.head)
// console.log(document.images)
// console.log(document.links)
// console.log(document.scripts)
// console.log(document.title)

document.scripts[0].attributes[1].nodeValue = "sdfsdff"// ekhane amra js er location file r nam cng kore pelechi - akn amder js source code e keo dukte parbe na
document.getElementById('demo').innerHTML = "HelloWorld";// and browser e nam cng krleo ata akn o kaj krtece
*/


//--------------------------------------Dom --html (03) ------------------------------------------

//01
let allAnchor = document.querySelectorAll('a')

let anchorLength = allAnchor.length
console.log(anchorLength)

for(let value of allAnchor){
    value.name = "ChngedAnchor";

}




















