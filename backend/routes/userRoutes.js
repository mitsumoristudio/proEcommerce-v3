import express from 'express';
import {protectRoute, admin} from "../middleware/authMiddleware.js";

import {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getAllUsers,
deleteUser, getUserDetails, updateUser} from "../controllers/userController.js";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/").get(protectRoute, admin, getAllUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);

router.route("/profile").get(protectRoute, getUserProfile);
router.route("/profile").put(protectRoute, updateUserProfile);

router.route("/:id").delete(protectRoute, admin, deleteUser);
router.route("/:id").get(protectRoute, admin, getUserDetails);
router.route("/:id").put(protectRoute, admin, updateUser);

export default router;

// - GET http://localhost:5005/api/users
// - POST http://localhost:5005/api/users
// - POST http://localhost:5005/api/users/login
// - POST http://localhost:5005/api/users/logout
// - GET http://localhost:5005/api/users/profile
// - PUT http://localhost:5005/api/users/profile
// - GET http://localhost:5005/api/users/:id
// - PUT http://localhost:5005/api/users/:id
// - DELETE http://localhost:5005/api/users/:id
