/*
//                                      Bujar jonno part 1 dekhte hbe :
const paymentSuccess = true;
function enroll(callback){// ekahne e je function ta callback hbe tar jonno callback nam er parametter banano holo.
    console.log('Course enrollment is in proccess ..')

    setTimeout(function (){
        if(paymentSuccess){// paymentsucces ture hole se -:
            callback();// callback() call krbe !, Ekhane enroll function e callback nam er parametter je function argumetn dewa hoice seta call hbe
            //ekahne callback() = hocce display()
        }
    },2000)
}

function display(){
    console.log("Display Called")
}
enroll(display)

//----------------------------- Now part 02 Full ------------------Using callback - syncronus(settimeout())-

*/

function enrollBtn() {
  //enrollbtn caller
  enroll(progress); //enroll(argument)
}

//Some literal value.
const paymentSuccess = true;
const marks = 95;

function enroll(callback) {
  // ekahne e je function ta callback hbe tar jonno callback nam er parametter banano holo.
  console.log("Course enrollment is in proccess ..");
  setTimeout(function () {
    if (paymentSuccess) {
      // paymentsucces ture hole se -:
      callback(certificated); // callback() call krbe !, Ekhane enroll function e callback nam er parametter je function argumetn dewa hoice seta call hbe
      //ekahne callback() = hocce progress(nextFunction)--
    } else {
      console.log("Payment Faild !");
    }
  }, 2000);
}

function progress(callback) {
  // callback is a parameter  = certificated is argument
  console.log("Course Is On Progress....");
  setTimeout(function () {
    if (marks >= 80) {
      callback(); //certificated() - whice came from parameter.
    } else {
      console.log("You Didnot Get Enough Number");
    }
  }, 5000);
}

function certificated() {
  console.log("Congress You Got The Certificte.");
}
