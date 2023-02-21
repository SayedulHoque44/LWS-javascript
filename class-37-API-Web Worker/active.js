
let w;
function startWork(){
    if(typeof(Worker) !== 'undefined'){


        if(typeof w  == "undefined"){
            
            w = new Worker("worker.js");

        }else{
            console.log("Continuing")
        }

        w.onmessage = function (event) {
            document.getElementById('demo').innerHTML = event.data;
        }
        



    }else{
        alert('Not support worker')
    }
}



function stopWork(){
    if(typeof(Worker) !== 'undefinded'){


        w.terminate()
       w = undefined
        

    }else{
        alert('Not support worker')
    }
}










