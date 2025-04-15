
import ProductModels from "../models/ProductModels.js";
import {asyncHandler} from "../middleware/asyncHandler.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public
export const getAllProducts = asyncHandler(async (req, res) => {
    const products = await ProductModels.find({});
    res.json(products);
});

// @desc Get a SingleProduct by ID
// @route GET /api/products/:id
// @access Public
export const getProductById = asyncHandler(async (req, res) => {
    const product = await ProductModels.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({message: 'Product not found'});
    }
});
