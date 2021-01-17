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
        coordinates: [59.939864, 30.314566],
        price: 500
    },
    {
        name: 'Русский музей',
        image: 'rus_museum.png',
        categories: [categories.sightseeings, categories.museums],
        coordinates: [59.938782, 30.332383],
        price: 250
    },
    {
        name: 'Мариинский театр',
        image: 'mariinka.png',
        categories: [categories.sightseeings, categories.theartes],
        coordinates: [59.925755, 30.295768],
        price: 1000
    },
    {
        name: 'АХЕ',
        image: 'ahe.png',
        categories: [categories.theartes],
        coordinates: [59.962870, 30.454189],
        price: 400
    },
    {
        name: 'Летний сад',
        image: 'summertime.png',
        categories: [categories.sightseeings, categories.parks],
        coordinates: [59.944908, 30.335553],
        price: 0
    },
    {
        name: 'Новая Голландия',
        image: 'new_holland.png',
        categories: [categories.sightseeings, categories.parks],
        coordinates: [59.929787, 30.289330],
        price: 0
    },
    {
        name: 'Столовая №1',
        image: 'stolovaya_1.png',
        categories: ['Food', categories.restaurants],
        coordinates: [59.936743, 30.313700],
        price: 400
    },
    {
        name: 'Косуля',
        image: 'cosulya.png',
        categories: ['Food', categories.restaurants],
        coordinates: [59.934308, 30.341416],
        price: 800
    },
    {
        name: 'Цветочки',
        image: 'tsvetochki.png',
        categories: ['Drinks', 'Food', categories.bars],
        coordinates: [59.938697, 30.357069],
        price: 800
    },
    {
        name: 'Bolshoybar',
        image: 'bolshoybar.png',
        categories: ['Drinks', 'Food', categories.bars],
        coordinates: [59.960956, 30.304579],
        price: 1200
    },
    {
        name: 'Central Station',
        image: 'non_traditional.png',
        categories: ['Drinks', categories.night_clubs],
        coordinates: [59.932464, 30.326260],
        price: 500
    },
    {
        name: 'Stackenschneider',
        image: 'stackenschneider.png',
        categories: ['Drinks', categories.night_clubs],
        coordinates: [59.940060, 30.325751],
        price: 500
    },
]