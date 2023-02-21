//-------------------Bom-------- Browser Object Model
// Bom er bitorei sob thake Dom o Bom er akta object
/*
let title = window.document.querySelector('h1')// se window er bitorei document
console.log(title)

*/

//-------------------------------------01---------------window

//Select Element
const width =  document.getElementById('width')
const height =  document.getElementById('height')

//show window object properties
width.innerHTML = "Window Inner Width is : "+ window.innerWidth
height.innerHTML = "Window Inner height is : "+ window.innerHeight

let myWindow;

function openWindow(){
   myWindow = window.open("https://google.com")
}

function closeWindow(){// close konta krbo seta variavle er mode gloval e age theke rekhe dite hbe
    myWindow.close();
}

// --------------------------------Lets practice all from w3school window object reference

