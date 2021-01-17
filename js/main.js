import {fillProfile, addUser, selectPlaces} from "./form.js"


// form opening and closing
document.getElementById('action').addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
})
document.querySelector('.close').addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
})

// map
mapboxgl.accessToken = 'pk.eyJ1IjoiZGltYWRvYnIiLCJhIjoiY2tqenN3MnF2MGFyejJvbW5sMWdqaDlzNSJ9.zPzzW8fvyAs_xMkEgWTSfw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [30, 60],
    zoom: 10
});
var marker = new mapboxgl.Marker().setLngLat([30, 60]).addTo(map);

function openMap() {
    document.getElementById('map').style.visibility = "visible";
    document.querySelector(".close_second").style.visibility = "visible"
}

// profile data filling
document.getElementById('action').addEventListener("click", fillProfile)
document.addEventListener('DOMContentLoaded', () => { 
    document.getElementById('btn').addEventListener('click', (ev) => {
        addUser(ev);
        selectPlaces(JSON.parse(localStorage.getItem("MyData")));
        openMap()
    });
});

// document.getElementById('btn').addEventListener("click", function() {
//     document.querySelector(".close_second").style.visibility = "visible";
// })
document.querySelector('.close_second').addEventListener("click", function() {
    document.querySelector(".close_second").style.visibility = "hidden";
})