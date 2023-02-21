
/*
//------------------------ Class Intro----------------------------- 01
class Person{
    constructor(fname,lname){
        this.firstName = fname;
        this.lastName = lname;
    }
    // Below are prototype of this Person object for new person01
    eat(){
        return this.firstName+" "+this.lastName+" is Eating"
    }
    sleep(){
        return this.firstName+" "+this.lastName+" is sleeping"
    }
    run(){
        return this.firstName+" "+this.lastName+" is Runing"
    }
}


let person01 = new Person("sayedul","Hoque")
console.log(person01.run())// Person er prototype call korte pari.

// ------------------------------------Class Static------------------------------02
class Person{
    constructor(fname,lname){
        this.firstName = fname;
        this.lastName = lname;
    }
    // Below are prototype of this Person object for new person01
    eat(){
        return this.firstName+" "+this.lastName+" is Eating"
    }
    sleep(){
        return this.firstName+" "+this.lastName+" is sleeping"
    }
    static run(){// static dile ata ke call krte hbe class name diye jmn Person.run()
        return  "I am Parent Function";
    }
}

let person01 = new Person("sayedul","Hoque")

console.log(person01.eat())
//console.log(person01.run())// child diye static call krte parbo na.

console.log(Person.run())
 */
// ----------------------------Class Inheritance --------Set & get----------------------03
class Car{
    constructor(carname){
        this.carName = carname;
    }
    cName(){
        return "I Have a "+this.carName;
    }
}

class model extends Car{// extends korate Car class er sob kicu proverty/function/prototype Model class e cole ase
    constructor(carname,model){
        super(carname);//super er bitor ta hobe jei argu ta amra Car class e dite cacci
        this.carModel = model;
    }
    get show(){// get dewar karone ateke function er mto () ebabe call kra lage na , sudu nam dilei hoy
        return this.cName()+" And Its Model Is "+this.carModel
    }
    set set_inName(year){
        this.carYear = year;
    }
}

let mycar = new model("Ford","Mustng");
mycar.carYear = 2019;// set e abbaeb object e value set krte pari
console.log(mycar)
console.log(mycar.show)