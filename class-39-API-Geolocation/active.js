
const display = document.getElementById('display')

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showposition)
    }else{
        display.innerHTML = "Geolocation Not Support In Your Browser"
    }
}

function showposition(position){
    display.innerHTML = "Latitude: "+ position.coords.latitude + "<br/> Longitude: "+
    position.coords.longitude;
}