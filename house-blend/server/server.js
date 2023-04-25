///const express = require('express')
import express from 'express'
// const path = require('path');
//const {houseController} = require('../controllers/houseController.js')
import houseController from '../controllers/houseController.js'
import coffeeShopController from '../controllers/coffeeShopController.js'

const app = express();
const PORT = 3000;

app.use(express.json());


// app.use('/',(req,res) => {
//   return res.send('HELLO')
// })


app.get('/coffee', coffeeShopController.getCoffeeShops, (req, res) => {
    return res.status(200).json(res.locals.totalCoffeeShops);
})

app.get('/housing', houseController.getHousePrice, (req,res) => {
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