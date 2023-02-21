

/*
-------------------------------------------------callback() 
//------------------------- CallBack() Hell-----------------------------------------

let stocks = {
    fruits : ['strawberry','Banana','Graps','Apple'],
    liquied : ['Water','Ice'],
    holder : ['Cone','Cup','Stick'],
    toppings : ['Chocolate','Penuts']

}

let order = (fruitName,productionCall) => {
    setTimeout(() =>{

        let fruitFiner = stocks.fruits[fruitName]// call function e atar fruitname dewa hoice

        if(stocks.fruits.includes(fruitFiner)){// product ta array te ace kina khujbe
            console.log(`${stocks.fruits[fruitName]} Is Selected`)
            productionCall()
        }else{
            console.log("This Product Is Not Available Now!")
        }
        
    },2000)
}

let production = () => {
    
    setTimeout(() =>{
        console.log(`Production is Started`)

        setTimeout(() => {
            console.log(`The Fruit Has Been Chopped`)

                setTimeout(() => {
                    console.log(`${stocks.liquied[0]} And ${stocks.liquied[1]} was Added `)

                    setTimeout(() => {
                        console.log(`The Machine was Started`)

                        setTimeout(() =>{
                            console.log(`Icecram Was Placed On ${stocks.holder[0]} `)

                            setTimeout(() => {
                                console.log(`${stocks.toppings[0]} was Added`)

                                setTimeout(() => {
                                    console.log(`Server the IceCream`)
                                },2000)
                            },3000)
                        },2000)
                    },1000)
                },1000)
        },2000)
    },500)

}

order(0,production)

//-----------------------------------------------------Promise ()-------------------------
//01-------
let stocks = {
    fruits : ['strawberry','Banana','Graps','Apple'],
    liquied : ['Water','Ice'],
    holder : ['Cone','Cup','Stick'],
    toppings : ['Chocolate','Penuts']

}

let is_Shop_Open = false;

let order = (time,work) => {

    return new Promise( (resolve,reject) => {
        if(is_Shop_Open){
            setTimeout( () => {
                resolve( work() )
            },time )  
        }else{
            reject(console.log(`Our shop is closed!`))
        }
    } );
};

order(2000, () => console.log(`${stocks.fruits[0]} was Selected`))// semiclone dewa jabe na

.then( () => {

    return order(0000, () => console.log(`Production Has Started`));
})

.then(() => {

    return order(2000, () => console.log(`The Fruits Was Chopped`));
})

.then(() => {

    return order(1000, () => console.log(`${stocks.liquied[0]} and ${stocks.liquied[1]}`));
})

.then(() => {

    return order(1000, () => console.log(`The Machine was Started`))
})
.then(() => {
    return order(2000, () => console.log(`Icecram Was Placed On ${stocks.holder[0]}`))
})

.then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was Added`))
})

.then(() => {
    order(2000, () => console.log(`Server the IceCream`))
})

.catch( () => {
    console.log('Coustomer Left')
})


/*
// ekhane order().then().then().then() ebabe kaj krtece mane promise object er bitore then gula proverty & tai order()/then() er por semiclone dewa jabe na

step 1 : ekta promise jkn make hy tkn 2 ta part thake - resolve & reject 
step 2 : promise ta jodi rakhar mto hy tkn resolve hbe tkn resolve er bitor sorto ki seta dice ta krbo resolve(sorto call) and seta dekhbe erpor then ace kina
jodi thake ekatr por akta than call korbe and obusly then e jai dewa hokna keno return akakre dite hbe function 
then er bitorer jei funtion hok setate promise ta return krte hbe.
step 3 : jodi promise na rakhe reject hy tkn reject hole ki krbe ta reject er bitore


order(reture promise).then().then().catch ebabe mane : order er promise ta jkn sotto hobe resolve hbe tkn seta than ke call korbe abar then ar bitore jeta dibo seta 
promise return krte hbe nahoy porer then e jabe na karon ager prmise ta sotti/resolve na hole porer then e jabe na







//---------------Eplaination promise() .then()-------------------
//----------02

let stocks = {
    fruits : ['strawberry','Banana','Graps','Apple'],
    liquied : ['Water','Ice'],
    holder : ['Cone','Cup','Stick'],
    toppings : ['Chocolate','Penuts']

}

let is_Shop_Open = true;
let product = false;

let order = (time,work) => {

    let promis = new Promise( (resolve,reject) => {// return na krle promise .then kaj to dure thak khujei pabe na karon .then promise er under thake- promise object and ,then tar proverty
        if(is_Shop_Open){
            setTimeout( () => {
                resolve( console.log(work) )// promise sotti hole ja kaj krbe ta resolve er bitore dite hy
            },time )  
        }else{
            reject('shop is closed')
        }
    } );
    return promis;
};

let production = () => {
    console.log(`Production Has Started`)

}

let production02 = () => {
    console.log(`Production Has Started 02`)

}

let production03 = () => {
    console.log(`Production Has Started 03 have promise`)

    let promis = new Promise( (resolve,reject) => {// return na krle promise .then kaj to dure thak khujei pabe na karon .then promise er under thake- promise object and ,then tar proverty
        if(product){
            setTimeout( () => {
                resolve()// resolve call hole se .then e cole jabe ar resolve er bitor kicu thakle ta run korei then e jabe.
            },2000 )  
        }else{
            reject("Somting wrong in Production 03")
        }
    } );
    return promis;

}

let production04 = () => {
    console.log(`Production Has Started 04`)

}

// caile catch e ai functin ta dite pari tahole jokhn ei kono promise reject khabe tkn ei ai function catch e call hbe
// let orderRejCatch01 = () =>{
//     console.log(" Coustoner Left")
// }

order(2000, "promise Done now i will got to my .then chain")// 

.then(production)
.then(production02)// ata order er promise e coltece , order er promise resolve hoice mane oitar under e joto gula .then dibo sob kaj krbe
.then(production02)// akta function ke 2/onk bar ebabe .than diye call korate parbo akta promise er resolve diye
.then(production03)// ekhane akta new promise ace so ata jodi resolve hy porer then e jabe but jodi reject hy porer then e jabe na catch e jave
.then(production04)// jodi ebabe function na diye direct console ditam tahole console ta sobar age print hoye jeto
// catch sudu akta dite parbo karon jei promise ei reject hok na keno seta first e jei catch ke pabe take call krbe
.catch((valu) => {
    console.log(valu)
})// catch eo function dite hy , console dircet likhle kaj krbe na.

.finally( () => {// resolve hok ba rejcet .finaly sobar ses e call hobei.
    console.log("Finished Work")
} )


//---------------------- Async - Await()
let stocks = {
    fruits : ['strawberry','Banana','Graps','Apple'],
    liquied : ['Water','Ice'],
    holder : ['Cone','Cup','Stick'],
    toppings : ['Chocolate','Penuts']

}

let is_Shop_Open = false;

function time(ms){
    
    return new Promise( (resolve,reject) =>{
        if(is_Shop_Open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("Shop is closed!"))
        }
    })
}


async function kitchen(){
    try{

        await time(2000);
        console.log(`${stocks.fruits[0]} Was Selected`)

        await time(0000);
        console.log("Start The Production")

        await time(2000);
        console.log("Cut the fruit")

        await time(1000);
        console.log(`${stocks.liquied[0]} And ${stocks.liquied[1]} Was Added `)

        await time(1000);
        console.log(`Start The machin`)

        await time(2000);
        console.log(`Icecream Placed on ${stocks.holder[0]}`)

        await time(3000);
        console.log(`${stocks.toppings[0]} Was Placed`)

        await time(2000);
        console.log(`Serve the iceCream`)
        

    }
    catch(error){
        console.log(`Coustomer is left`)
    }
    finally{
        console.log(`Day ended, shop is closed`)
    }

}
kitchen();

*/



