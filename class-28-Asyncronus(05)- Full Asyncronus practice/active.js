
/*
//---------------------------------------------------callback system ---- akta funcition arkta function ke call kore.
//-------------01
const takeOrder = (coustomer,callback) => {
    console.log(`Take Order for ${coustomer}`)
    callback(coustomer,completeOrder);
}


const processOrder = (coustomer,callback) => {
    console.log(`Proccesing Order For ${coustomer}`);

    setTimeout(() => {
        console.log(`Cooking Complete! for ${coustomer}`)
        callback(coustomer)
    },3000);

    
}

const completeOrder = (coustomer) => {
    console.log(`Completed Order for ${coustomer}`)
}

takeOrder("Coustomer1",processOrder)
takeOrder("Coustomer2",processOrder)

console.log('hello')

//-------------02
let coustomerOrder = true
function takeOrder(coustomer,callback){//callback = proccessOrder
    console.log('Take Order For '+coustomer)
    if(coustomerOrder){
        callback(coustomer,completeOrder)// proccessOrder called .
    }else{
        console.log(coustomer+" Didn't Ordered!")
    }
}

function proccessOrder(coustomer,callback){// callback = completeOrder
    console.log(coustomer+' Order is being procces')

    setTimeout(function (){
        callback(coustomer,placeTheFood)// completeOrder called
    },3000)
}

function completeOrder(coustomer,callback){//callback = placeTheFood
    console.log(coustomer+' Order Is Complete')
    callback(coustomer)// placeTheFood called
}

function placeTheFood(coustomer){
    console.log(coustomer+' Here Your Order Sir')
}

console.log('Take Order For New Coustomer...........')

takeOrder("coustomer 1",proccessOrder)

console.log('Take Order For New Coustomer...........')

takeOrder("coustomer 2",proccessOrder)

console.log('Take Order For New Coustomer...........')

//----------------03
const takeOrder = (coustomer,callback) => {
    console.log(`Take Order for ${coustomer}`)
    callback(coustomer);
}


const processOrder = (coustomer,callback) => {
    console.log(`Proccesing Order For ${coustomer}`);

    setTimeout(() => {
        console.log(`Cooking Complete! for ${coustomer}`)
        callback(coustomer)
    },3000);

    
}

const completeOrder = (coustomer) => {
    console.log(`Completed Order for ${coustomer}`)
}

takeOrder("Coustomer1",(coustomer) =>{
    processOrder(coustomer,(coustomer) => {
        completeOrder(coustomer)
    })
})

//-------------------------------------------Uporer ai callback system ta bujte amder kost hbe pore, tai amra promise() use krte pari -
//---------------------------------------------------Promise()-------------------------------------------
// const test = false
const paymentSuccess = true;
const marks = 90;
const Certificate = true;
const testvalue01 = true;

// const promise = new Promise(function (resolve,reject){
//     console.log("test is here")
//     if(test){
//         resolve()
//     }else{
//         reject("Test false")
//     }
// })

function enroll(){
    console.log('Course enrollment is in proccess ..')

    const promise = new Promise(function (resolve,reject) {
        setTimeout(function (){
            if(paymentSuccess){
                resolve();
            }else{
                reject('Payment Faild !')
            }
            
        },2000)
    })

    return promise;// ekn enroll() funtion ta promise hoye gece return korar karone
}

function progress(value){
    console.log('Course Is On Progress....'+value)
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){// function ta tkn ei call hote parbe jkn if ta true hbe
            if(marks >= 80){
                resolve()
            }else{
                reject("You Didnot Get Enough Number")
            }
        },2000)
    })

    return promise;
}

function getcertificate(){
    console.log('Preparing Your Certificate...')

    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(Certificate){
                resolve()
            }else{
                reject("Certificate false")
            }
        },2000)
    })

    return promise;
}

function test01(){
    console.log('Preparing Your Test01....')

    const promise = new Promise(function(resolve,reject){// ekahne resolve/reject lagbena jodi next e ar kawke call kora na lage
        setTimeout(function(){
            if(testvalue01){
                console.log("I am Done")
            }else{
                console.log("Somthing Went Wrong")
            }
        },500)// ata Timeout counte tkn thke suru hobe jkn ei ai function call hbe.
    })

    return promise;
}

// promise
//     .then(enroll)
//     .then(progress)// ata enroll er resolve
//     .then(getcertificate)// ata progress er resolve
//     .then(test01)// ata getcertificate er resolve
//     .catch(function(value){
//         console.log(value)
//     })

// ababe caile onk gula step make krte parbo promise diye and segular resolve seraily dite hbe.


async function course(){
    try{// try = all are resolve()
        await enroll();// enroll er bitorer e jokhn resolve asbe tkn ei porer tate jabe , reject asle progress e jabe na
        await progress("myValue");// ekahne sei function er argument dite parbo.
        await getcertificate()
        await test01()
    }catch(err){// catch = all are reject()
        console.log(err)
    }
}
course()


/*

ekhane prottekta function e tar nijer promise return kora hoyece ,
asyn er bitore awit dekhbe je funtion call koreci seta je promise return korece setar resolve asce kina resolve aslei se pore je functin ace setake call krbe
and eki babe setar resolve asce kina dekhbe resolve manei await serial e pore je function dea hoyece seta call hbe 
but jodi reject ase tkn ta catch e patahi dey and porer funtion e ar jabe na.

sp aync await ta besi funtion thakle tkn use hy , funtion er bahire -


*/



let hey = true
let paymentSuccess = true


const promise = new Promise(function (resolve,reject){
    console.log("test is here")
    if(hey){
        resolve("i am first ")
    }else{
        reject("Test false")
    }
})

function enroll(){
    console.log('Course enrollment is in proccess ..')

    const promise = new Promise(function (resolve,reject) {
        setTimeout(function (){
            if(paymentSuccess){
                resolve();
            }else{
                reject('Payment Faild !')
            }
            
        },2000)
    })

    return promise;// ekn enroll() funtion ta promise hoye gece return korar karone
}

function test(value){
    console.log(value)
}

promise
    .then(test)
    .then(enroll)