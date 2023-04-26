// const bcrypt = require('bcryptjs');
import passport from "passport-local"
import pkg from 'pg'; 
const { Pool } = pkg;

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'pass', 
  database: 'userDB',
});

console.log(pool)
const authController = {}


authController.verifyUser = (req, res, next)=>{
  passport.use(new LocalStrategy(
    async function(username, password, done) {
      try {
        const query = `
          SELECT * FROM users WHERE username = $1;
        `;
        const { rows } = await pool.query(query, [username]);
        const user = rows[0];
  
        if (!user) {
          return done(null, false);
        }
  
        // Assuming verifyPassword is an asynchronous function
        const isValidPassword = await user.verifyPassword(password);
  
        if (!isValidPassword) {
          return done(null, false);
        }
  
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  ));
}

authController.updateUser = (req, res, next)=>{

}

authController.deleteUser = (req, res, next)=>{

}

// module.exports = authController;
