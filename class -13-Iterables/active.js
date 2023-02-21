// array/string er moode iterrat kora jay karon tadr modde index ace kintu object er mode iteret kra jayna
let string = "banglades";
for(s of string){ // loops In sekhanei use hy jader iterat kra jay
    console.log(s) // see string ke iterat kra jay mane aktr por akta te jawa jay 
}

let array = ["hey","hi","world"]
for(values of array){
    console.log(values)
}

let object ={
    fname : "sayed",
    lname : "almun",
}
for(proverty in object){ // if u use loops of in object its give error cz object not iterable, loop In use for object
    console.log(proverty+" = "+object[proverty]);
}

for(index in array){
    console.log(index+" = "+array[index]);// array te loop in use krle index dey
}


console.log("---foreach iteration--")
array.forEach(function(values,index){
    console.log(index+" = "+values);
})

