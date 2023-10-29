import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './Routes/auth.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: true
};

app.get('/', (req, res) => {
    res.send('Api is working');
});

// database connection
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB is connected');
    } catch (err) {
        console.error(err);
    }
};

// Move the line `database connection` inside of the `try` block
connection();

// middleware
app.use(express.json()); // Corrected the method name
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api', authRoute)

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
