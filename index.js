require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;
const connectDB = require("./config/db.js")

// database connection
connectDB()

// middleware
app.use(express.json());

// server running 
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

