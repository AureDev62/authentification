const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const authRoute = require('./backend/routes/auth');

const port = 5000;

connectDB();

const app = express();

//middleware

app.use("/auth", authRoute);


app.listen(port, () =>
    console.log("Le serveur a démarré au port " + port)
);

module.exports = app;