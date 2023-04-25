import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const censusController = {
    getPopulation: async(req,res,next)=> {
        console.log('Inside getPopulation Func')
        const {zipCode} = req.params; 
    //  const zipcode = '11355'
        try {
            
            const endpoint = `https://service.zipapi.us/population/zipcode/${zipCode}/?X-API-KEY=${process.env.POPULATION_API_KEY}`
            const result = await axios.get(endpoint)
            console.log('populationData',result.data.data.population)
            const population = await result.data.data.population
            res.locals.population = population
            return next()

        } catch (error) {
            console.error(error);
            
        }
    }
}

export default censusController