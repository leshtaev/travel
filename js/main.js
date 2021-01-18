import {fillProfile, addUser, selectPlaces} from "./form.js"


function fillMap(places) {
    places.forEach((place) => {
        var mapMarker = new mapboxgl.Marker()
            .setLngLat(place["coordinates"].slice().reverse())
            .addTo(map);
        mapMarkers.push(mapMarker);
    })
}

function openMap() {
    document.getElementById('map').style.visibility = "visible";
    //document.querySelector(".mapbox").style.visibility = "visible";
     document.querySelector(".close_second").style.visibility = "visible"
}


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
    center: [30.315868, 59.939095],
    zoom: 12
});
var mapMarkers = [];

// profile data filling and map opening
document.getElementById('action').addEventListener("click", fillProfile)
document.addEventListener('DOMContentLoaded', () => { 
    document.getElementById('btn').addEventListener('click', (ev) => {
        addUser(ev);
        fillMap(selectPlaces(JSON.parse(localStorage.getItem("MyData"))));
        openMap()
    });
});

// map closing
document.querySelector('.close_second').addEventListener("click", function() {
    document.querySelector(".close_second").style.visibility = "hidden";
    document.getElementById("map").style.visibility = "hidden";
    if (mapMarkers !== null) {
        for (var i = mapMarkers.length - 1; i >= 0; i--) {
          mapMarkers[i].remove();
        }
    };
})