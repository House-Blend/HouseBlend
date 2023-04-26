///const express = require('express')
import express from 'express'
// const path = require('path');
//const {houseController} = require('../controllers/houseController.js')
import houseController from '../controllers/houseController.js'
import coffeeShopController from '../controllers/coffeeShopController.js'
import censusController from '../controllers/censusController.js'
import houseBlender from '../controllers/houseBlender.js'
import path from 'path'
import { fileURLToPath } from 'url'
import dbController from '../controllers/dbController.js'
import dotenv from 'dotenv';


const app = express();
const PORT = 5173; //if we run into an error: SWITCH THIS!!!

dotenv.config({ debug: true });

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, '../dist')))


// app.use('/',(req,res) => {
//   return res.send('HELLO')
// }


app.get('/coffee/:zipCode', coffeeShopController.getCoffeeShops, houseController.getHousePrice, censusController.getPopulation, houseBlender, dbController.addZipToDB, (req, res) => {
  return res.status(200).json(res.locals.houseBlend);
})

//GLOBAL ERROR HANDLER NEEDED.
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res
    .status(errorObj.status)
    .json({ message: errorObj.message });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});