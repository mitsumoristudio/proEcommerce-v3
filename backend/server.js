import express from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';
import cookieParser from 'cookie-parser';
import {notFound, errorHandler} from "./middleware/errorHandler.js";
import connectToMongodb from "./config/mongoosedb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

// Connect to MongooseDB
connectToMongodb();

// app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie Parser Middleware
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("API is running...")
})

// Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));