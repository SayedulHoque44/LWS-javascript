


 /*
 //typeof --  
let myarray = ["hello","hey","hi"]
let myobject = {fname:"sayed"}
let unDvarrivable;
let myset = new Set(["s","a","r"])

//console.log(typeof myset)// myarray = object , myobject = object, unDvarrivable = undefined, myset = object.

//ekhane typeof e pray ei object show kre , arkta way ace data type janar

console.log(myarray.constructor) // bodo hat er Array show krbe but ata akta function hoi jabe.

let makeString = (myarray.constructor).toString();// function take akn 

let findTheDataType = makeString.indexOf("Array")// na pele hobe -1

console.log(findTheDataType)


function dataTypeCheaker(){

        //console.log(findTheDataType >-1) ;// -1 theke bodo hole true  pabe jodi array pay ar na pele -1 pabe and false hbe
        return findTheDataType >-1; // return er maddome value store kra hy/ ar jodi store krte na cai return vad diye console krle proces hoye fun r bitore dekhabe.

}
 let store = dataTypeCheaker()
 console.log(store)


 ---------------------------
 let myarray = ["hello","hey","hi"]
 let myobject = {fname:"sayed"}
 let unDvarrivable;
 let myset = new Set(["s","a","r"])

 //let arrayCheaker = myarray.constructor.toString().indexOf("Array")
 //let objectCheaker = myobject.constructor.toString().indexOf("Object")
 //let unDvarrivableCheaker = unDvarrivable.constructor.toString().indexOf("Undefined")// undefined er constructar poda jay na
 //let setCheaker = myset.constructor.toString().indexOf("Set")
 //console.log(setCheaker)

let test = "Done!"
 function dataTypeCheaker(storedVarName,giveDataName){
        if(storedVarName.constructor.toString().indexOf(giveDataName) > -1){
                console.log("its a Array")
        }
 }

dataTypeCheaker(myarray,"Array")


 -----------------
 let a = undefined;
 let b = null
 console.log(typeof a)
 console.log(typeof b)

 function undefinedNull(a,b){
        console.log(a === b) // triple equal mane type soho cheak ,ata false so donotar type eki na .
        console.log(a==b)// double equal mane value cheak , ata true so donotar value eki.
 }

 undefinedNull(undefined,null)

 */


 console.log(Number("3.23"))
 console.log(Number("  "))
 console.log(Number("sayed"))
 console.log(typeof String("3 + 10")) // first e jog krbe cz braket er kaj age krbe erpor string hoi jabe
 console.log(Number(false))
 console.log(Number(true))