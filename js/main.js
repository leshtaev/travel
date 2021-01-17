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