export const categories = {
    museums: "Museums",
    bars: "Bars",
    restaurants: "Restaurants",
    parks: "Parks",
    theartes: "Theartes",
    night_clubs: "Night clubs",
}

export function getPlaces() {
    const data = [
        {
            name: 'Эрмитаж',
            image: 'photo.png',
            categories: ['sightsins', categories.museums],
            coordinates: [50, 60],
            price: 100
        }
    ]
}