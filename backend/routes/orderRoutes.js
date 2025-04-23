
import express from 'express';
import {admin, protectRoute} from "../middleware/authMiddleware.js";
import {addOrderItems,
        getMyOrders,
        getOrderById,
        updateOrderToPaid,
        updateOrderToDelivered,
        getOrders,
        protectAddOrderItems} from "../controllers/orderController.js";
import router from "./userRoutes.js";

export const orderRoutes = express.Router();

orderRoutes.route("/").get(protectRoute, getOrders);
orderRoutes.route("/").post(protectRoute, addOrderItems)
orderRoutes.route("/").post(protectRoute, protectAddOrderItems);


orderRoutes.route("/myOrders").get(protectRoute, getMyOrders);
orderRoutes.route("/:id").get(protectRoute, getOrderById);
orderRoutes.route("/:id/pay").put(protectRoute, updateOrderToPaid);
orderRoutes.route("/:id/deliver").put(protectRoute, updateOrderToDelivered);

export default orderRoutes;
