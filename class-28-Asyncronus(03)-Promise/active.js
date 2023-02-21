/*
// ------------------------------------------------------- Asyncronus Promise()-----------------

// Ex -------------------01
const status = true;

// Promise Defination :
const promise = new Promise(function(resolve,reject){// ai parametter er argumment hote hbe funtion and ata dewa hbe .then() & catch() er maddome
    setTimeout(function(){
        if (status){
            resolve('Task 2')
        }else{
            reject('Failed!')
        }
    },1000);
});

//Promise Call :
promise
    .then(function(value){// ata first parametter er argument
        console.log(value)
    })
    .catch(function(err){// ata Secound parametter er argument
        console.log(err)
    })

*/

// Ex -------------------02

// We can fix callback issu by using Promise, Promise is easy to use from callback

//Some literal value.
const paymentSuccess = true;
const marks = 60;
const Certificate = true;
const testvalue01 = true;

function enroll() {
  console.log("Course enrollment is in proccess ..");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment Faild !");
      }
    }, 2000);
  });

  return promise; // ekn enroll() funtion ta promise hoye gece return korar karone
}

function progress() {
  console.log("Course Is On Progress....");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      // function ta tkn ei call hote parbe jkn if ta true hbe
      if (marks >= 80) {
        resolve();
      } else {
        console.log("You Didnot Get Enough Number");
      }
    }, 2000);
  });

  return promise;
}

function getcertificate() {
  console.log("Preparing Your Certificate...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Certificate) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });

  return promise;
}

function test01() {
  console.log("Preparing Your Test01....");

  const promise = new Promise(function (resolve, reject) {
    // ekahne resolve/reject lagbena jodi next e ar kawke call kora na lage
    setTimeout(function () {
      if (testvalue01) {
        console.log("I am Done");
      } else {
        console.log("Somthing Went Wrong");
      }
    }, 500); // ata Timeout counte tkn thke suru hobe jkn ei ai function call hbe.
  });

  // return promise;
}

enroll()
  .then(progress) // ata enroll er resolve
  .then(getcertificate) // ata progress er resolve
  .then(test01) // ata getcertificate er resolve
  .catch(function (value) {
    console.log(value);
  });

// ababe caile onk gula step make krte parbo promise diye and segular resolve seraily dite hbe.
