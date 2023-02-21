
//01

document.getElementById('btn').addEventListener("click",function (){
    document.getElementById("text").innerHTML = " I am Cliked"
})

document.getElementById('btn').addEventListener("mouseover",function (){
    document.getElementById("text02").innerHTML = " I am Just Hovered"
})

//02
document.getElementById('btn02').addEventListener("mouseover",hoverfu)//hoverfu() evave likha jabe na tahole function ekahanei call hoi jabe
function hoverfu(){
    document.getElementById('btn02').innerHTML = "Hoverd"
}

document.getElementById('btn02').addEventListener("click",() => {
    clicked("BTN 02 just clicked")
})//jodi amra cai parametter pass krte tahole annonemus function diye parameter pass krte hbe.
function clicked(text){
    document.getElementById('text03').innerHTML = text
}

//03-- bubbling or event capturing
document.getElementById('container').addEventListener("click",function (){// eakhne akta ta cap dile donotate cap pore aksathe but container ta pore
    console.log("i am container")
})
document.getElementById('btn03').addEventListener("click",function (){//& button ta age console hy atai default bubling
    console.log("i am button")
})
// but addEventListener("Event",function,true) = 3rd parameter e donotar ses e true likhle capturing babe kaj krbe ager ta age hbe 

//03--RemoveEventListener

let maintext = document.getElementById('textRemove').innerHTML
function myfunc(){
    document.getElementById("textRemove").innerHTML = " I am Just Hovered"
}

document.getElementById('textRemove').addEventListener("mouseover",myfunc)

document.getElementById('textRemove').addEventListener("mouseout",function (){
    document.getElementById("textRemove").innerHTML = maintext;
})


function remover(){
    document.getElementById('textRemove').removeEventListener("mouseover",myfunc)// je event setar nam ana fu nam dile seta remove hoi jabe
}
