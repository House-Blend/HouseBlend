const { Pool } = require('pg');

const PG_URI = 'postgres://hkmcyhaj:G6KpLlRGlJ7BIT7cmSaVLDQphpk7Cvu2@lallah.db.elephantsql.com/hkmcyhaj';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});



// SCHEMAS
// USER TABLE
// username : string
// password : string
// zipcodes : [INT]

//  ZIPCODE TABLE
// Zipcode: INT
// Pop : INT
// median house price : INT
// cofee shops : INT
// HouseBlendScore : INT

// ORDER
/**
 * 1. Check the DB
 * 2. If not present, make all the API calls to populate zip code schema for that row, then post to DB
 * 3. Create JSON object from DB and send it
 * 4. Post to DB
 * 
 * */ 



module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
