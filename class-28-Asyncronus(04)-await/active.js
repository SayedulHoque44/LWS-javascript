// Promise ta aro sundor babe serialy call krar jonno async use kra h ------------asyc()

const paymentSuccess = true;
const marks = 90;
const Certificate = true;
const testvalue01 = true;

function enroll() {
  console.log("Course enrollment is in proccess ..");

  const promise = new Promise(function (resolve, reject) {
    console.log("Executed Before TimeOut");
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment Faild !");
      }
    }, 2000);
  });

  return promise; // ekn enroll() funtion ta promise hoye gece return korar karone & asyn() er khetre return promise must krtei hbe.
}

function progress() {
  console.log("Course Is On Progress....");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      // function ta tkn ei call hote parbe jkn if ta true hbe
      if (marks >= 80) {
        resolve();
      } else {
        reject("You Didnot Get Enough Number");
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
        reject("Certificate False!");
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

  return promise;
}

async function course() {
  try {
    await enroll();
    await progress();
    await getcertificate();
    await test01();
  } catch (err) {
    console.log(err);
  }
}

course();
console.log("I Already Execuded");

// enroll()
//     .then(progress)// ata enroll er resolve
//     .then(getcertificate)// ata progress er resolve
//     .then(test01)// ata getcertificate er resolve

//     //.catch diye reject er value dewa hy agula sob then likhar por likht hy serialy
//     .catch(function(err){
//         console.log(err)
//     })
//     .catch(function(err){
//         console.log(err)
//     })
// // ababe caile onk gula step make krte parbo promise diye and segular resolve serialy dite hbe.
