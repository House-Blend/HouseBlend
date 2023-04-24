const express = require("express");
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/coffee', (req,res) => {
    return res.sendStatus(200);
})

app.get('/housing', (req,res) => {
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