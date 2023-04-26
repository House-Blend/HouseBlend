import axios from 'axios';

const coffeeShopController = {

    getCoffeeShops: async (req, res, next) => {
        const { zipCode } = req.params;
        console.log("This is the Zip Code in getCoffeeShops:", zipCode)
        const endpoint = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
        console.log("THIS IS OUR API KEY!!!:", process.env.MAPS_API_KEY)
        const params = {
            query: `coffee shops in ${zipCode}`,
            // key: 'AIzaSyB2NOtIha_5L7Dj8ypS_eYK3Je1lRWrK6s',
            key: process.env.MAPS_API_KEY,
        };
        console.log("These are the params for the Axios Get request:", params)
        axios.get(endpoint, { params })
            .then(response => {
                // Process the response data
                const coffeeShops = response.data.results;
                console.log('coffee shops returned', coffeeShops);
                console.log('total number of coffeeshops', Object.keys(coffeeShops).length);
                res.locals.totalCoffeeShops = Object.keys(coffeeShops).length;
                res.locals.zipCode = zipCode;
                return next();
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
                return next(error);
            });
    }
}

export default coffeeShopController; 