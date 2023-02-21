function regNow(){
    let userArray = [];
    userArray[0] = prompt("Give FirstName :");
    userArray[1] = prompt("Give LastName :");
    userArray[2] = prompt("Give E-mail :");
    userArray[3] = prompt("Give Mobile Number :");
    userArray[4] = prompt("Give password");

    let fName   = userArray[0];
    let lName   = userArray[1];
    let email   = userArray[2];
    let mobile  = parseInt(userArray[3]);
    let pass    = userArray[4];

    //First Name
    let fnameChartCall = fName.charAt(0);
    let fnameCahrToUpCas = fnameChartCall.toUpperCase();
    let fnameAllChart = fName.substr(0);
    let fnameAdd = fnameCahrToUpCas+fnameAllChart;
    //Last name
    let lnameChartCall = lName.charAt(0);
    let lnameCahrToUpCas = lnameChartCall.toUpperCase();
    let lnameAllChart = lName.substr(0);
    let lnameAdd = lnameCahrToUpCas+lnameAllChart;
    //Email
    let emailAtTheCheaker = email.match(/@/gi);
    let emailDotComCheaker = email.includes(".com")
    if(emailAtTheCheaker){
        if(emailDotComCheaker){
            document.getElementById("email").innerHTML = email;
        }else{
            document.getElementById("email").innerHTML = `Please Enter valid Email." .com Missing" `;
        }
    }else{
        document.getElementById("emailReq").innerHTML = `Please Enter valid Email." @ Missing" `;
    }
    // mobile number
    let mobilelen = mobile.length;
    if(mobilelen == 11){
        document.getElementById("mobileNum").innerHTML = mobile;
    }else{
        document.getElementById("mobilereq").innerHTML = "please Give Valid Mobile Number.";
    }
    //password
    let passlen = pass.length;
    if(passlen >= 8){
        document.getElementById("password").innerHTML = pass;
        document.getElementById("passReq").innerHTML = "Strong Password";
    }else{
        document.getElementById("passReq").innerHTML = "Please Give At Least 8 Charater Password";
    }


    console.log(userArray);
    document.getElementById("fName").innerHTML = fnameAdd;
    document.getElementById("lName").innerHTML = lnameAdd;
    
   

}