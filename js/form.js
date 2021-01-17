import { categories, places } from "./config.js";

export function fillProfile() {
    var dictionary = localStorage.getItem("MyData");
    var data = JSON.parse(dictionary)
    var element = document.getElementById('places');
    Object.keys(data).forEach(key => {
        if (key ==='places') {
            for (var i = 0; i < element.options.length; i++) {
                element.options[i].selected = data[key].indexOf(element.options[i].value) >= 0;} 
            }
        else {    
            document.getElementById(key).value = data[key];
        }
        // console.log(key, data[key]);
    });
}

export function addUser(ev) {
    ev.preventDefault();
    const rowData = Array.from(new FormData(document.getElementById('profile')))
    const data = {}
    rowData.forEach((item) => {
        const key = item[0]
        const value = item[1]
        if (key === 'places') {
            if (data[key] == null) {
                data[key] = [value]
            } else {
                data[key].push(value)
            }
        } else {
            data[key] = item[1]
        }
    })
    console.warn('added', data)
    localStorage.setItem('MyData', JSON.stringify(data))
}

export function selectPlaces(userData) {
    const budget = userData["number"]
    var appropriatePlaces = []
    // отбираем места, для категорий которых пересечение с пользовательскими категориями не пустое 
    places.forEach(place => {
        if (place["categories"].filter(place_category => userData["places"].includes(place_category)).length > 0) {
            appropriatePlaces.push(place)
        }
    })
    console.log(appropriatePlaces)
    // жадный алгоритм: строим маршрут из первых мест, прошедших по бюджету, без ограничений по дублированию категории  
    var selectedPlaces = []
    var curSpendings = 0
    appropriatePlaces.forEach(place => {
        if (place["price"] <= budget - curSpendings) {
            selectedPlaces.push(place);
            curSpendings = curSpendings + place["price"]
        }
    })
    console.log(selectedPlaces)
    return selectedPlaces
}