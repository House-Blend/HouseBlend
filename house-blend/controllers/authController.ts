// const bcrypt = require('bcryptjs');
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

}

authController.updateUser = (req, res, next)=>{

}

authController.deleteUser = (req, res, next)=>{

}

authController.addUser('john_doe', 'secure_password', ['12345', '67890'])

// module.exports = authController;