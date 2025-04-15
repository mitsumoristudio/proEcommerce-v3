
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import mockProducts from "../backend/mockdata/mockProducts.js"
import ProductModels from "./models/ProductModels.js";
import OrdersModels from "./models/OrdersModels.js";
import connectToMongodb from "./config/mongoosedb.js";
import UserModels from "./models/UserModels.js";
import bcrypt from "bcryptjs";

dotenv.config();
// To have access to the Environmental Variable

connectToMongodb();
// To make queries to the Mongoose Database and connect

export const mockuser = [
    {
        name: "Admin User",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "John Doe",
        email: "john@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
];

export const importData = async () => {
    try {
        await OrdersModels.deleteMany();
        await ProductModels.deleteMany();
        await UserModels.deleteMany();

        const createdUser = await UserModels.insertMany(mockuser);

        const adminUser = createdUser[0]._id;

        const sampleProducts = mockProducts.map((product) => {
            return {...product, user: adminUser};
        });
        await ProductModels.insertMany(sampleProducts);
        console.log("Successfully added products".green.inverse);
        process.exit();

    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1);
    }
}

export const destroyData = async () => {
    try {
        await OrdersModels.deleteMany();
        await ProductModels.deleteMany();
        await UserModels.deleteMany();

        console.log("Data Deleted".red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}
