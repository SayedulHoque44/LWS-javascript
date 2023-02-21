


/*
//---------------------------------Dom - Nagivation the element node----------01

const p = document.getElementById('demo');

const way1 = p.innerHTML;

const way2 = p.firstChild.nodeValue

console.log(way2)

*/

//---------------------------------Dom HtmlCollection---------02


console.dir(document.getElementsByClassName('p1'))// array er mto dekte Htmlcollection ata akta object

let allP1Class = document.getElementsByClassName('p1')// ata p1 nam er class er HtmlCollection

let lengthOfThisHtmlColl = allP1Class.length
console.log(lengthOfThisHtmlColl)//joto gula p1 nam er class ache sob count krbe ja htmlCollection er bitore array er mto hoye ache


for(let i = 0; i<lengthOfThisHtmlColl ; i++){
    allP1Class[i].innerHTML = "Hi"
}

//---------------------------------Dom Nodes-------------------03
//-------------Create A Element-------01
//01 -- p tag
const para = document.createElement("p");// notun akta element creat krteci
const node = document.createTextNode("Hello World")// oi element er bitore textNode diye dicci bitor ki hbe seta 

para.appendChild(node);// <p> hello world </p>

const element = document.getElementById('div01');
element.appendChild(para)

//02---h1 tag
const para02 = document.createElement("h1");// notun akta element creat krteci
const node02 = document.createTextNode("Hello World")// oi element er bitore textNode diye dicci bitor ki hbe seta 

para02.appendChild(node02);// <p> hello world </p>

const element02 = document.getElementById('div01');

const p1 = document.getElementById('p1')
element02.insertBefore(para02,p1)// prothome dibo konta insert krbo erpor dibo kar age insert krte cai

//---------- Remove Existing Html ELement-----02

let p3 = document.getElementById("p3")// p3 remove hoi jabe

// p3.remove();// 01 way but its not support in old version

element.removeChild(p3)//02 way - ata sob brower support kore

//---------- REplace Existing Html ELement-----03

let para03 = document.createElement("p");
let node03 = document.createTextNode("I am Replaced")
para03.appendChild(node03)

let p4 = document.getElementById('p4');

let parent = document.getElementById('div02');

parent.replaceChild(para03,p4)// (kiReplaceKorbo, kakeReplaceKrbo)

//---------------------------------Dom Nodes-------------------04

let htmlCollec = document.getElementsByClassName('node')[0]// ababe class gular first take call krte pari [0]
let nodelist = document.querySelectorAll(".node")[1]// ababe o same babe class er first take call krte pari [1]

console.log(htmlCollec)
console.log(nodelist)
//difrent is :

let htmlCollec02 = document.getElementsByClassName('node')["one"]// htmlcollection e aki call gular modde alada babe id nam diye ababe dora jay
let nodelist02 = document.querySelectorAll(".node")["one"]// but nodelist e ebabe id nam diye dora jay na

console.log(htmlCollec02)
console.log(nodelist02)// it will undefined







