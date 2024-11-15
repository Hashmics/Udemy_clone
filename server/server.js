require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['Content-Type', "Authorization"]
})

app.use(express.json());

// Database connection
mongoose
    .connect(MONGO_URI)
    .then(() => console.log('Mongodb is connected'))
    .catch(e => console.log(e));


// routes configuration



app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        success: false,
        message: "Internal Server error"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})