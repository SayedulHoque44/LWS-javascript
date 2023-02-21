let display = document.getElementById('display');



// function getData(){
//     fetch("http://127.0.0.1:5500/data.txt")
//         .then((res) => res.text())
//         .then((data) => {
//             console.log('hello 1')
//             display.innerText = data;
//         })
    
//     console.log('hello')// ai hello age print hobe, karon fetch akta asyncronus



//     const res =  fetch("http://127.0.0.1:5500/data.txt")
//     const data = res.text();

//     display.innerHTML = data;

    
//     console.log('hello')// ai hello age print hobe, karon fetch akta asyncronus

// }

// ababe async kore o kra jay
async function getData(){

    const res = await fetch("http://127.0.0.1:5500/data.txt")
    const data = await res.text();

    display.innerHTML = data;

    
    

}