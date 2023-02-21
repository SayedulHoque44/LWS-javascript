
//Display The Time
function displayTime(){
    document.getElementById("time").innerHTML = Date();
    document.getElementById("Alert").innerHTML = "Hurry Up!";
}


//--object input and uppercase;
function userFun(){
    let fN = prompt("Give Your FirstName");
    let ln = prompt("Give Your LastName");
    let gmail = prompt("Give Your Gmail");
    let test = {
        firstName : fN.toUpperCase(),
        lastName : ln,
        Gmail : gmail,
    }
    console.log(test.firstName);
      
}

//----- lenth show in html-
function lTotal(){
    let test = prompt("Give Value :");
    let lenTotal = test.length;
    let EnLenTotal = ("Here is The Length : "+lenTotal)
    document.getElementById("Length").innerHTML = EnLenTotal;

}
//
let myobject = {
    data01 : "hey man",
    data02 : "i am Rich",
    data03 : 64,
    data04 : 36,
    myLength : function(){
       
       a = 3;
       b=4;
       c = a+b;
        console.log(c);
        return c;
    }
}


function mySliceFu(){
    let callTheElement = document.getElementById("mySlice").innerHTML;
    let nowSlice = callTheElement.slice(0,5);
    let nowsubstr = callTheElement.substr(14);
    let lastName = "here is the lastname :";
    //let lastTotal = lastName + nowsubstr ;
    let lastTotal = lastName.concat("   "+nowsubstr);
    document.getElementById("mySlice").innerHTML= nowSlice;
    document.getElementById("startEnd").innerHTML= lastTotal;
    document.getElementById("Done").innerHTML= "Done!";


}