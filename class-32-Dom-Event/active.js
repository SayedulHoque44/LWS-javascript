

// ----------------------------Dom-Event --------01------------

function clickFuntion(){
    let title = document.querySelector('#title')

    title.innerHTML ="Text Changed"
}


document.getElementById('clickMe').onclick = function(){
    this.innerHTML = "Hello World"
}




function hovered(){
    let text = document.getElementById('hoverdiv')
    text.innerHTML = "You Hover Me"
    text.style.fontSize = "25px"
}


function hoverouted(){
    let text = document.getElementById('hoverdiv')
    text.innerHTML = "You Just HoverOut"
    text.style.color = "white"
}







