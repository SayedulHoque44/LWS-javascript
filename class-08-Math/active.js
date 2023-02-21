let x = 4.5;// .5 is maximum
let y = 4.1
let z = -4.2
let a = 0
let b = 5
console.log("Round() make float (.5) to maximum integer upto : "+Math.round(x));
console.log("ceil() make float (.1) to maximum integer if any float upto : "+Math.ceil(y));
console.log("floor() will give minimum number: "+Math.floor(x));
console.log("trunc() ignor float(.9) value ,give defult integer whatever flot number : "+Math.trunc(x));
console.log("sign() return -1 if negative, or 0 for null,1 for postive value : "+Math.sign(x));// see x z a
console.log("pow()  : "+Math.pow(b,2));// .pow(defultNumber,powerNumber)
console.log("sqrt() root over : "+Math.sqrt(64));// root over
console.log("abs() make negative to postive value : "+Math.abs(z));
console.log("sin() law : "+Math.sin(90* Math.PI/180));//sin thita
console.log("cos() law : "+Math.cos(0* Math.PI/180));//cos thita
console.log("min() give minimum value : "+Math.min(0,10,67,-34,-200));
console.log("max() give maximum value : "+Math.max(0,10,67,-34,-200));
console.log("log2() logarithom : "+Math.log2(16))// log mane 2 ke koto bar multipale krle 16 pabo
console.log("log10() logarithom : "+Math.log10(1000))// log mane 10 ke koto bar multipale krle 1000 pabo

// ------------Math.random()--------------
console.log("---------------------")
console.log("random() give a random number 0 to 0.9999 : "+Math.random());
console.log("if random() random integer 0 to 9 : "+Math.floor(Math.random() * 10));
let ran = Math.floor(Math.random() * 9) + 2 // (8)+2 = 10 or (0.23)+2 = 2
console.log("if random() random integer 2 to 10 : "+ran);
//---- random a general function for random confution

function myRandomNum(min,max){
    return Math.floor(Math.random() * (max-min) + min);// min(included) ,max(excluded) so give 11 not 10 for get 2-10 value
}
let test = myRandomNum(2,11)
console.log(test)

