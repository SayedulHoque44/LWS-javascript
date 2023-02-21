
//-----------------------------WebApi-----Form-------------01----------------------
/*


*/

function validation(){
    const inputObj = document.getElementById('id1');

    if(inputObj.validity.rangeOverflow){
        console.log("Your Rang Is OverFlow")

    }else if(inputObj.validity.rangeUnderflow){
        console.log("Your Rang Is UnderFlow")

    }else if(inputObj.validity.valueMissing){
        console.log("Your Value Is Missing")

    }else if(inputObj.validity.valid){
        console.log("Your Value Is Valid.")
        
    }


    if(inputObj.checkValidity()){// Element.checkValidity ata diye cheak kre input e dewa requierment sob thik ace kina, at True False Return kre
       document.getElementById('demo').innerHTML = "Input Valid"
    }else{
        document.getElementById('demo').innerHTML = inputObj.validationMessage//.validationMessage ata bole dey ki required
    }
}