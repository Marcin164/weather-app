require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const weatherRoutes = require('./routes/WeatherRoutes.ts')

const app = express();

app.use(cors());
app.use(express.json());

const CONN_URL:string = `mongodb+srv://Root:${process.env.DB_PASSWORD}@cluster0.ximda.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
const PORT:number = 3001;

const connection = mongoose.connect(CONN_URL)

if(connection) app.listen(PORT, () => console.log("Running on port " + PORT))
else console.log("Cannot connect to database!")

app.use(weatherRoutes)