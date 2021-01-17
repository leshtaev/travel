export const categories = {
    sightseeings: "Sightseeings",
    museums: "Museums",
    theartes: "Theatres",
    parks: "Parks",
    restaurants: "Restaurants",
    bars: "Bars",
    night_clubs: "Night clubs",
}

export const places = [
    {
        name: 'Эрмитаж',
        image: 'hermitage.png',
        categories: [categories.sightseeings, categories.museums],
        coordinates: [50, 60],
        price: 500
    },
    {
        name: 'Русский музей',
        image: 'rus_museum.png',
        categories: [categories.sightseeings, categories.museums],
        coordinates: [50, 60],
        price: 250
    },
    {
        name: 'Мариинский театр',
        image: 'mariinka.png',
        categories: [categories.sightseeings, categories.theartes],
        coordinates: [50, 60],
        price: 1000
    },
    {
        name: 'АХЕ',
        image: 'ahe.png',
        categories: [categories.theartes],
        coordinates: [50, 60],
        price: 400
    },
    {
        name: 'Летний сад',
        image: 'summertime.png',
        categories: [categories.sightseeings, categories.parks],
        coordinates: [50, 60],
        price: 0
    },
    {
        name: 'Новая Голландия',
        image: 'new_holland.png',
        categories: [categories.sightseeings, categories.parks],
        coordinates: [50, 60],
        price: 0
    },
    {
        name: 'Столовая №1',
        image: 'stolovaya_1.png',
        categories: ['Food', categories.restaurants],
        coordinates: [50, 60],
        price: 400
    },
    {
        name: 'Косуля',
        image: 'cosulya.png',
        categories: ['Food', categories.restaurants],
        coordinates: [50, 60],
        price: 800
    },
    {
        name: 'Цветочки',
        image: 'tsvetochki.png',
        categories: ['Drinks', 'Food', categories.bars],
        coordinates: [50, 60],
        price: 800
    },
    {
        name: 'Большой',
        image: 'bolshoy.png',
        categories: ['Drinks', 'Food', categories.bars],
        coordinates: [50, 60],
        price: 1200
    },
    {
        name: 'Central Station',
        image: 'non_traditional.png',
        categories: ['Drinks', categories.night_clubs],
        coordinates: [50, 60],
        price: 500
    },
    {
        name: 'Stackenschneider',
        image: 'stackenschneider.png',
        categories: ['Drinks', categories.night_clubs],
        coordinates: [50, 60],
        price: 500
    },
]