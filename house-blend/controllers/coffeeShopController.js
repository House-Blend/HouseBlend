import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const coffeeShopController = {

    getCoffeeShops: async (req, res, next) => {
    
        // const { zipCode } = req.body;
        const endpoint = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
        const params = {
            query: `coffee shops in 10016`, 
            key: process.env.MAPS_API_KEY, 
        }; 
            
        axios.get(endpoint, { params })
            .then(response => {
                // Process the response data
                const coffeeShops = response.data.results;
                // console.log('coffee shops returned', coffeeShops);
                // console.log('total number of coffeeshops', Object.keys(coffeeShops).length);
                res.locals.totalCoffeeShops = Object.keys(coffeeShops).length;
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