import {assets, swiperAssets} from "../assets";

const mockProducts = [
    {
        _id: '1',
        name: 'Wooden Designer Chair',
        image: assets.chair1,
        description:
            'Contemporary wooden chair. Designed in Japan',
        brand: 'DWR',
        category: 'Furniture',
        price: 489.99,
        countInStock: 12,
        rating: 4.5,
        numReviews: 38,
    },
    {
        _id: '2',
        name: 'Grey Comfortable Arm Chair',
        image: assets.grey_comportable_armchair,
        description:
            'The Emmy speaks to multiple generations,” says Beamer. “Youthful yet mature, it resonates with a sense of modernism' +
            ' and tradition. It’s a place to feel at home.” Made in U.S.A.',
        brand: 'Emma Chair',
        category: 'Furniture',
        price: 599.99,
        countInStock: 7,
        rating: 4.0,
        numReviews: 40,
    },
    {
        _id: '3',
        name: 'Grey Lounge Sofa',
        image: assets.grey_sofa_isolated,
        description:
            'Charles and Ray Eames had ideas about making a better world, one in which things were designed to ' +
            'fulfill the practical needs of ordinary people and bring greater pleasure to our lives. Their Soft Pad ' +
            'Collection (1969) of luxuriously padded chairs evolved from their Aluminum Group Collection. With the addition ' +
            'of plush 2” thick cushions, the Soft Pad Collection retains the style of the earlier one but adds ' +
            'significant comfort. Backed by a 12-year manufacturer’s warranty.',
        brand: 'Emma Chair',
        category: 'Furniture',
        price: 3299.99,
        countInStock: 3,
        rating: 2.0,
        numReviews: 50,
    },
    {
        _id: '4',
        name: 'Modern Bedrooms',
        image: assets.modern_bedroom,
        description:
            'Modern bedroom developed for creature comfort. Designed in Japan',
        brand: 'Herman Miller',
        category: 'Furniture',
        price: 1299.99,
        countInStock:22,
        rating: 4.0,
        numReviews: 10,
    },
    {
        _id: '5',
        name: 'Single Double Beds',
        image: assets.single_double_beds,
        description:
            'Single and Double Beds with sense of ergonomics. Designed in Japan',
        brand: 'Herman Miller',
        category: 'Furniture',
        price: 2299.99,
        countInStock:12,
        rating: 4.2,
        numReviews: 18,
    },
    {
        _id: '6',
        name: 'Boot & Tables',
        image: assets.booth_table,
        description:
            'Counter booth table and chair. Designed in Japan',
        brand: 'Herman Miller',
        category: 'Furniture',
        price: 629.99,
        countInStock:5,
        rating: 4.2,
        numReviews: 8,
    },
]

export default mockProducts;

const mockBrands = [
    {
         _id: "1",
        "title": "Brand 1",
        "image": swiperAssets.brand_1
    },
    {
        _id: "2",
        "title": "Brand 2",
        "image": swiperAssets.brand_2
    },
    {
        _id: "3",
        "title": "Brand 3",
        "image": swiperAssets.brand_3
    },
    {
        _id: "4",
        "title": "Brand 4",
        "image": swiperAssets.brand_4
    },
    {
        _id: "5",
        "title": "Brand 5",
        "image": swiperAssets.brand_5
    },

]