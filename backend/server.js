import express from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';
import cookieParser from 'cookie-parser';
import {notFound, errorHandler} from "./middleware/errorHandler.js";
import connectToMongodb from "./config/mongoosedb.js";
import userRoutes from "../backend/routes/userRoutes.js";
import productRoutes from "../backend/routes/productRoutes.js";
import ordersRoutes from "../backend/routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import path from "path";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import {sanitize} from "express-mongo-sanitize";
import {sanitizeFilter} from "mongoose";




dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

// Connect to MongooseDB
connectToMongodb();

// Rate Limit Your Endpoint
const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-8",
    legacyHeaders: false,
})
// Apply the rate limiting middleware to all requests
app.use(rateLimiter);

// Help secure Express apps by setting HTTP response headers
app.use(helmet());

// app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie Parser Middleware
app.use(cookieParser());

// Sanitize Recieved Data
// app.use(sanitizeFilter)

app.get("/", (req, res) => {
    res.send("API is running...")
})

// App route for login user, register user
app.use("/api/users", userRoutes);

// Products
app.use("/api/products", productRoutes);

// Orders
app.use("/api/orders", ordersRoutes);

// Upload Images
app.use("/api/uploads", uploadRoutes);

// payPal
app.get("/api/config/paypal", (req, res) =>
    res.send({clientId: process.env.PAYPAL_CLIENT_ID}));

// Set upload folder as static
const __dirname = path.resolve(); // Set _dirname to current directory
app.use(`/uploads`, express.static(path.join(__dirname, `../uploads`))); // changed the pathname because the root folder would not accept /uploads



// Error Handler
app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));