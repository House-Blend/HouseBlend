const { Pool } = require('pg');

// const { Pool } = require('pg');

//SPENCER'S ELEPHANT SQL LINK: 'postgres://hkmcyhaj:G6KpLlRGlJ7BIT7cmSaVLDQphpk7Cvu2@lallah.db.elephantsql.com/hkmcyhaj'
const PG_URI = 'postgres://ipivjrao:q9-fEBdfaIzyxrV2KJggLUdB-ae3wJ_T@raja.db.elephantsql.com/ipivjrao';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

const db = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};

module.exports = db;


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

//ADD ADDITONAL ZIP CODES TO EXISTING USER
// UPDATE table_name
// SET column_name = column_name || ARRAY[new_integer];