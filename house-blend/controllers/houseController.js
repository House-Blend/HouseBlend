import axios from 'axios';


const houseController = {
    getHousePrice: async (req,res,next) => {
      console.log('Inside getMEdian Func')
        try {
          //const {zipcode} = req.body

          const options = {
            method: 'GET',
            url: 'https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode',
            params: {
              zipcode: '20002',
              offset: '0',
              limit: '42',
            },
            headers: {
              'content-type': 'application/octet-stream',
              'X-RapidAPI-Key': 'e954138f77msh85c3856650929f4p189b71jsndfb63a0d5b55',
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
