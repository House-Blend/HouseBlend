///const express = require('express')
import express from 'express'
// const path = require('path');
//const {houseController} = require('../controllers/houseController.js')
import houseController from '../controllers/houseController.js'
import coffeeShopController from '../controllers/coffeeShopController.js'
import censusController from '../controllers/censusController.js'
import houseBlender from '../controllers/houseBlender.js'


const app = express();
const PORT = 3000;

app.use(express.json());


// app.use('/',(req,res) => {
//   return res.send('HELLO')
// })


app.get('/coffee/:zipCode', coffeeShopController.getCoffeeShops, houseController.getHousePrice, censusController.getPopulation, houseBlender, (req, res) => {
    return res.status(200).json(res.locals.houseBlend);
})

app.get('/housing/:zipCode', houseController.getHousePrice, (req,res) => {
    return res.sendStatus(200);
})

app.get('/population/:zipCode', censusController.getPopulation, (req,res) => {
  return res.sendStatus(200);
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