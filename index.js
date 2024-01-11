const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoutes")
dotenv.config()

connectDB()

const app = express();

app.use(express.json());

app.use('/api/v1/user', userRoute)

const port = process.env.PORT || 8000;

app.listen(port, (req,res)=>{
    console.log(`Server running on ${process.env.PORT}`)
}); 