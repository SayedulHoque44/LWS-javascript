// class
/*
class Car{
        constructor(name,year){// (par1,par2)
                this.name = name;// this ta object er nam ke parent hisebe dhore
                this.year = year;//proparte
        }
}


const car1 = new Car("Toyota",2017);// created actual object ,
console.log(car1.name+" "+car1.year)
const car2 = new Car("BMW",2019);// created actual object ,

class Car{
        constructor(name,year){// (par1,par2)
                this.name = name;// this ta object er nam ke parent hisebe dhore
                this.year = year;//proparte
        }
        play(){// we also can use method
               console.log( this.name+" "+this.year);// or can console
        }
}


const car1 = new Car("Toyota",2017);// created actual object ,
const car2 = new Car("BMW",2018);// created actual object ,
const car3 = new Car("Ferarri",2020);// created actual object ,

let test = car1.play()


class person{
        constructor(name,birthDate){
                this.name = name;
                this.birthDate = birthDate;
        }
        age(presentYear){
                let old = presentYear - this.birthDate ;
                return old;
        }
}


let date = new Date();
let year = date.getFullYear();

const person1 = new person("Habib",2001);
const person2 = new person("Jahid",1997);

person1.age(year);
function btn(){
        document.getElementById('demo').innerHTML = person2.name+" is "+person2.age(year)+" years Old!"// 

}
*/

// ------------------------------JSON------------------------------
 

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';// json text

const obj = JSON.parse(text);// converted json to valid text/object/array whatever there have

console.log(obj)
console.log(obj.employees)
console.log(obj.employees[0])
console.log(obj.employees[0].firstName)


let person ={
        firstName : "sayed",
        lastName : "almun"
}

let objToJson = JSON.stringify(person);// converted valid text to json.

console.log(objToJson)
console.log(person)// permanenet cng krbe na just text take transfer korar jonno json e ready kore rakhbe
console.log(JSON.parse(objToJson))// see ata ke abr json theke normal text e convert kora hoyece



