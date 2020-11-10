const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const db = require("./db");
const multerS3 = require("multer-s3");
const bodyParser = require("body-parser");

// Middleware
app.use(cors());
/* parse application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: true }));
/* parse application/json */
app.use(bodyParser.json());


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
