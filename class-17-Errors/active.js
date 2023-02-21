/*
//--- Error Handling ---
let x =prompt();
try{
       
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        if (x < 5 ) throw "too Low";
        if (x > 10) throw {// ebabe object o dite pari
                message: "Too High Number",
                name: "HighError"
        };

}
catch(err){ // jokhon err hobe tkn ei catch e dukbe nahy dukbe na .
        console.log(err) // err ta hocce jeta throw diyeci seta
}


*/

// JavaScript Scope 
var carname1 = "volvo";
var carname2 = "volvo";

console.dir(window)// var ta gloval tai window te thake . window buildin sob function tahke. 



