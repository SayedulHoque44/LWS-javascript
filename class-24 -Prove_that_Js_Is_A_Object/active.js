// JavaScript e sob kicu object hisebe thake , amra simple constructor function diye ta proman krte pari.

// constructor creat krar smy er first Letter capital dite hy
function Myobject02(fname, lname, num1, num2) {
  // window er bitore Array/String/Object er moto akta buildin notun akta Myobject02 object creat hoice
  this.fullName = fname;
  this.lastName = lname;
  this.firstNum = num1;
  this.secoundNum = num2;
  this.myfunction = function () {
    return "hello world";
  };
}

Myobject02.prototype.FullName = function () {
  // agula prototype jkn icca call kore kaj korate parbo
  return this.fullName + " " + this.lastName;
};
Myobject02.prototype.FirstAndSendAddNum = function () {
  return this.firstNum + this.secoundNum;
};

const object01 = new Myobject02("Sayedul", "Hoque", 20, 10); // new dewa manei kono constructor er bitore value gula jabe.
const object02 = new Myobject02("Zahidul", "Islam", 40, 40);

// console.log(object01)

let x = new String("dfdf");
let y = x.toString();
// console.log(x.toString())

// uporer udahoron er motoi javascript kaj kore , akta main  object er bitore constructor akare String/Array/object thake jegular modde -
// onk gula prototype thake jemon tostring/touppercase/slice/foreach/map/filter/substr  E sob kicui prototype akare thake main constructor S/A/O er sathe
// ebabe amra Dot(.) diye prototype gula active kore jkn jeta icca call kore kaj korte pari.

//-----------------------Object reference type ---------------------

let a = 10;
let b = a; // ata copy hoye jabe,main varaible eo kono cng hole ata cng hbe na,
a = 20;
console.log(a);
console.log(b);

const person = {
  fname: "sayed",
  lname: "almun",
  fullName: function () {
    return this.fname + " " + this.lname;
  },
  personChild: {
    child: 4,
  },
};

const storeObjectCopy = person; // person e kono cng krle ta storeObjectcopy tao cng hoi jabe,copy hyna cz ata refrence type,ata copy kore na address e point kre rakhe

console.log(storeObjectCopy);
