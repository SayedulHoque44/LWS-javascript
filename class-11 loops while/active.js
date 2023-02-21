
/*
//---while loop ()
let i = 0
let text ="";
while(i<10){
    text += "the number is "+i;
    i++;
}
console.log(text);


//Do While loop()
let i = 11
let text ="";
do{ // do first e bitorer code ta run korbe erpor condition e jabe, code first e akbar must run korar jonno do while use kra hy
    text += "the number is "+i;
    i++;
}while(i<10)
console.log(text);
*/
//--- Foreach()
let array = ["hi","hlwo","hwllo","hwy"]

let text ="";
array.forEach(function(values,index){
    
    text += " "+index+" = "+values+" ";
})
console.log(text)

//for Loops()
let i = 0
let text2 ="";
let length = array.length
for(; i<length; i++){
        text2 += " "+ i +" = "+array[i]+" ";
}
console.log(text2)

//While loops
let j = 0
let text3 ="";
while(j < length){
    text3 += " "+ j +" = "+array[j]+" ";
    j++;
}
console.log(text3)

//For loops in 
let text4 ="";
for(let x in array){
    //console.log(x) --array er index call krbe
    //console.log(array[x]) --array er values call krbe
    text4 += " "+x+" = "+array[x]+" ";
}
console.log(text4);