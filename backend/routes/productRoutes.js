
import express from "express";
import {getAllProducts,
        getProductById,
        createProduct,
        updatedProduct,
        deleteProduct,
        createProductReview,
        getProductsPagination,
        getTopProducts,} from "../controllers/productController.js";
import {admin, protectRoute} from "../middleware/authMiddleware.js";

const router = express.Router();

//router.route("/").get(getProductsPagination);

router.route("/").get(getAllProducts);
router.route("/:id").get(getProductById);
router.route("/").post(protectRoute, admin, createProduct);
router.route("/:id").put(protectRoute,admin, updatedProduct);
router.route("/:id").delete(protectRoute, admin, deleteProduct);
router.route("/:id/reviews").post(protectRoute, createProductReview);
router.route("/top").get(getTopProducts);

export default router;