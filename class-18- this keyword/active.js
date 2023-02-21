/*
//--
const myobject = {
        fname : "sayed",
        lname : "almun",
        fullname : function(){// ekahhe ata method
                return this.fname+" "+this.lname;// this mane ai object er jinis ke bujay jmn (myobject.lname/this.lname)
        }
}
console.log(myobject.fullname())

const myobject2 = {
        fname : "sayed",
        lname : "almun",
        fullname : function(){// ekahhe ata method
                return this.fname+" "+this.lname;
        },
        getfullname : function(){
                return this.fullname();
        }
}
console.log(myobject2.getfullname())


//--
console.log(this);// this ta gloval object

//--
function a(){
        console.log(this);// eta o global // karon this ta object er modde thake ar jodi kono ai rkm object e na dey tahole ata globaly window kei call krbe
}
a()

// cheak Try it and HTml code line 10 , onclick this in button
*/

const person1 = {
        fullname : function(){
                return this.fname+" "+this.lname;// ekhane autometic this ta person1 ke parent hisebe dorbe
        }
}
const person2 = {// amra cacci this ta ai peron2 ke dorbe 
        fname : "sayed",
        lname : "almun",
}
console.log(person1.fullname.call(person2));// sei khetre fullname er sathe & () etar age .call diye je parent ke this banate cacci biore setar name dibo. 
// amra jani this ta object e use kra hy seta object er name ke parent hisebe dhore but ak object e onno object ke parent baniye this er maddome value call kra jay.

