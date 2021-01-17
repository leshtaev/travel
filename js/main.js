import {fillProfile, addUser, selectPlaces} from "./form.js"


// form opening and closing
document.getElementById('action').addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
})
document.querySelector('.close').addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
})

// profile data filling
document.getElementById('action').addEventListener("click", fillProfile)
document.addEventListener('DOMContentLoaded', () => { 
    document.getElementById('btn').addEventListener('click', (ev) => {
        addUser(ev);
        selectPlaces(JSON.parse(localStorage.getItem("MyData")))
    });
});

// map
mapboxgl.accessToken = 'pk.eyJ1IjoiZGltYWRvYnIiLCJhIjoiY2tqenN3MnF2MGFyejJvbW5sMWdqaDlzNSJ9.zPzzW8fvyAs_xMkEgWTSfw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [59.939095, 30.315868],
    zoom: 10
});
var marker = new mapboxgl.Marker().setLngLat([12.550343, 55.665957]).addTo(map);

document.getElementById('btn').addEventListener("click", function() {
    document.querySelector(".close_second").style.visibility = "visible";
})
document.querySelector('.close_second').addEventListener("click", function() {
    document.querySelector(".close_second").style.visibility = "hidden";
})