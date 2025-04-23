
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

// @desc Create a Product
// @route POST /api/products
// @access Private/Admin
export const createProduct = asyncHandler(async (req, res) => {
    const { name, price, image, brand, category, countInStock, numReviews, description} = req.body;

    const userId = req.user._id;

    const newProduct = new ProductModels({
        name: name,
        price: price,
        user: userId,
        image: image,
        brand: brand,
        category: category,
        countInStock: countInStock,
        numReviews: numReviews,
        description: description,
    });

    const createdProduct = await newProduct.save();
    res.status(201).json(createdProduct);
})

// @desc Update a Product
// @route PUT /api/products/:id
// @access Private/Admin
export const updatedProduct = asyncHandler(async (req, res) => {
    const { name, price, image, brand, category, countInStock, description} = req.body;

    const product = await ProductModels.findById(req.params.id);

    if (product) {
        product.name = name;
        product.price = price;
        product.image = image;
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;
        product.description = description;

        const updatedProduct = await product.save();

        res.status(201).json ({
            name: updatedProduct.name,
            price: updatedProduct.price,
            image: updatedProduct.image,
            brand: updatedProduct.brand,
            category: updatedProduct.category,
            description: updatedProduct.description,
            countInStock: updatedProduct.countInStock,
        })
    } else {
        res.status(404).json({message: 'Product was not found'});
    }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
export const deleteProduct = asyncHandler(async (req, res) => {
    const product = ProductModels.findById(req.params.id);
    if (product) {
        await ProductModels.deleteOne(product);
        res.json({ message: 'Product deleted successfully' });
    } else {
        res.status(404).json({message: 'No Product was found'});
    }
})

// @desc    Create a New Review
// @route   POST /api/products/:id/review
// @access  Private
export const createProductReview = asyncHandler(async (req, res) => {
    const {rating, comment} = req.body;
    const product = await ProductModels.findById(req.params.id)

    if (product) {
        const alreadyReviewed = product.review.find((review) => review.user.toString() === req.user._id.toString());

        if (alreadyReviewed) {
            res.status(400);
            throw new Error("Product was already reviewed");
        }
        const updatedReview = {
            name: req.user.name,
            rating: Number(rating),
            comment: comment,
            user: req.user._id,
        }
        product.review.push(updatedReview);

        product.numReviews = product.review.length;

        product.rating =
            product.review.reduce((acc, review) => acc + review.rating, 0) /
            product.review.length;

        await product.save()

        res.status(201).json({message: 'Product was added'});
    } else {
        res.status(404)
        throw new Error("Resource was not found");
    }
})

// @desc Get top rated products
// @route GET /api/products/top
// @access Public
export const getTopProducts = asyncHandler(async (req, res) => {
    const products = await ProductModels.find({}.sort({rating: -1}.limit(5)))
    res.status(200).json(products);
})


