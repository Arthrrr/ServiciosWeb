const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;
app.use(cors());
const fileUpload = require('express-fileupload');

app.use(fileUpload());
app.use(express.json());
const dbo = require("./db/conn");
app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});