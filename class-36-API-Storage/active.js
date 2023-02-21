

//--------------------API Storage ---------------------- 01-----------------

//------localStorage 01
// browser close krar por o set localstorge er value gula thake
function setLocalStorage(key,value){
    localStorage.setItem(key,value)
}

function getLocalStorage(key){
    alert(localStorage.getItem(key))
}

function removeLocalStorage(key){
    localStorage.removeItem(key)
}

function clearLocalStorage(){
    localStorage.clear()
}

//------sessionStorage 02
//but browser close krar por o set sessionStorage er value gula thake Na 
function setSessionStorage(key,value){
    sessionStorage.setItem(key,value)
}

function getSesionStorage(key){
    alert(sessionStorage.getItem(key))
}

function removeSessionStorage(key){
    sessionStorage.removeItem(key)
}

function clearSessionStorage(){
    sessionStorage.clear()
}