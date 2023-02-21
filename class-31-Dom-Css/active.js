
//-----------------------------------------Dom - css--------------------
/*
let p = document.querySelector('#demo')

p.style.color = 'red'

p.style.fontSize = "40px";

*/


//-----------------------------------------Dom - Animation--------------------

function myMove(){
    let animate = document.getElementById('animate')

    let pos = 0;

    let interval = setInterval(frame,5);

    function frame(){
        if(pos < 350){
            pos++;
            animate.style.top = pos + 'px';
            animate.style.left = pos + 'px';
        }else{
            clearInterval(interval)
        }
    }
}
