


function validateForm(){
    const form = document.forms['myForm']
    const value = form['fname'].value;

    if(value === ""){
        alert("You must give your Name")
        return false;
    }
}

function myFunction(){
    let value = document.getElementById('numBox').value

    if(isNaN(value) || value<1 || value>10){
        document.getElementById('demo').innerHTML = "Ivalid Input"
    }
}
