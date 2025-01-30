const express = require("express");
const dotenv=require("dotenv")
dotenv.config({});
require('./dbConfig')

const cookie = require("cookie-parser");
const corss = require("cors");
const app = express();
const corsoptions = {
  origin: "https://localhost:5173",
  credentials: true,
};



app.use(cookie());
app.use(corss(corsoptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`port is run on ${PORT}`);
});
