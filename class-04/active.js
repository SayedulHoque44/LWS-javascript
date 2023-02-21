/*


let x = .2 + .1;
console.log(x)// java script all number are floting and when we addision floting it will not give 100% accurate answer ;

// If We need correct answer we have multifly and divide. See under...
let x = (.2*10+.1*10)/10
console.log(x);

let myName = prompt("Give Name")

let charCall = myName.charAt(0);
let makUpperCa = charCall.toUpperCase();
let diviname = myName.substr(1);
let adthem = makUpperCa + diviname
console.log(adthem);

let test = "sayed almun joker hey"
//console.log(test.indexOf("almun");
let test2 = test.replace("hey","almun")
console.log(test2)
console.log(test2.indexOf("almun",11))

let text = `i am sayedul hoque 
            my Roll number is = 940099
            My accademic Education = versity`;
let indexingThText = text.indexOf("Roll");
let  showingText = text.slice(indexingThText);
console.log(showingText)




-----------Finding The Roll From text (project-)
 let x = "banglades roll";
let y = prompt("give values :")
let c = y.length;
let str = x.indexOf(y)
let adding = str+c;
let slicex = x.slice(str,adding);
//let test = str.length;
console.log(slicex); 

-------HTml Project- Finding @ .com and inputing there html

*/

function gmailtext() {
  let gmailGiven = prompt("Give Your Gmail Here");

  let call1stchar = gmailGiven.charAt(0);
  let proccesToUpCas = call1stchar.toUpperCase();
  let callAllChar = gmailGiven.substr(1);
  let addAll = proccesToUpCas + callAllChar;

  let findingAtThe = gmailGiven.match(/@/gi);
  let findingDotCom = gmailGiven.includes(".com");
  if (findingAtThe) {
    if (findingDotCom) {
      document.getElementById("outputData").innerHTML = addAll;
      document.getElementById("inputedText").innerHTML = gmailGiven;
    } else {
      console.log("Give .com");
    }
  } else {
    console.log("Give @");
  }
}
