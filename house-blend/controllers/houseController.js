import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config()

const houseController = {
    getHousePrice: async ( req, res, next ) => {
      console.log('Inside getMedian Func')
        try {
          const { zipCode } = req.params;

          const options = {
            method: 'GET',
            url: 'https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode',
            params: {
              zipcode: `${zipCode}`,
              offset: '0',
              limit: '42',
            },
            headers: {
              'content-type': 'application/octet-stream',
              'X-RapidAPI-Key': `${process.env.HOUSE_API_KEY}`,
              'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
            }
          };
            const houseResults = await axios.request(options);
            //console.log(houseResults.data);
            const {count,results} = await houseResults.data.data.home_search
            //console.log('count',count)
            //console.log('results',results)
            let avgHousePrice = results.reduce((total,curr) => {
              return total += curr.list_price
            },0) / count
          
            console.log('avgHousePrice',avgHousePrice)
            res.locals.avgHousePrice = avgHousePrice
            return next()
        } catch (error) {
            console.error(error);
            
        }
    }
}

export default houseController;
