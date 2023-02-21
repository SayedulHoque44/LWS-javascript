// --------------------------------------------------------------Set() --datatype

/*
const mysets = new  Set(["a"]);

mysets.add("b");// to add any value in set
mysets.add("c");
mysets.add("a"); // existing valu add hbena kokhn o .
//console.log(mysets);

let text = "";
mysets.forEach(function(value,index,set){ //set is iterable so we can also use for loops of in a set,
    text += value;
    console.log(value);//same 
    console.log(index);// but not show index ,cz value is index & index is value in set,
    console.log(set);// same as array
    console.log("--------");
})
console.log(text)

const mysets2 = new  Set(["a","b","c","d","a"]); // dusplicate a is ignored in set

let text2 = "";

for(values of mysets2){
    text2 += values;

}
console.log(text2)

// - Entries - Entries provied key & value
let array = ["s","a","y"]
// console.log(Object.entries(array))// array er khetre entries er key hocce array er index so (index = values) = (key = values)

const sets = new  Set(["a","b","c","d","a"])// sets e value gula entries hisebe thake
console.log(typeof sets)// set holo object

console.log(sets instanceof Set)// ababe cheak kore datatype , ata ki set? yes hole true
console.log(array instanceof Array)// ababe cheak kore datatype , ata ki Array? yes hole true

*/


//--------------------------------------------------------map() ---datatype
/*
const mymap = new Map([
    ["apples",500,],//[key,values] 
    ["mango",100],
])

mymap.set("pinaple",400);
mymap.set(4000,"300");// [keyTaJekonoDataTypeHotePare,values] ata object e kra jyna
mymap.set("pinaple",700);//value update hoye jabe
console.log(mymap);
console.log(mymap.keys());// key gula nite pari
console.log(mymap.values());// value gula o nite pari
mymap.set("last","300","Extra");// abr extra kicu add kra jyna

console.log(mymap);
console.log(mymap.size)// map er lenth size er maddome call kre.
console.log(mymap.get("apples"))// get(key) diye value call kra jay
mymap.delete("apples")
console.log(mymap);// apples deleted

console.log(mymap.has("apples"))// map e ai key ace kina seta dekhe and boolen return kre true/false.

--foreach()
let text = "";
mymap.forEach(function(value,key,index){// map is iterable
    text  +=" "+ key +"="+ value+" "
    console.log(key)
    console.log(value)
    
})
console.log(text);

--for of
for(value of mymap){
    console.log(value)// ebabe krle array dekhay prottekta.
}
*/















