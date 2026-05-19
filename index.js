require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;
const connectDB = require("./config/db.js")
const userRoutes = require("./routes/userRoutes.js")

// database connection
connectDB()

// middleware
app.use(express.json());

// router
app.use("/users", userRoutes)

// server running 
app.listen(PORT, () => {
    
    console.log(`server is running on port ${PORT}`);
})

