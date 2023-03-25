const express = require("express");
const router = express.Router();

// Importing the user controller
const userController = require("../controllers/userController");

// Get Route for testing
router.get("/test", userController.test);

// Register user
router.post("/register", userController.signUp);

// Login user
router.post("/login", userController.signIn);

// Get all users
router.get("/", userController.getAllProfiles);

// Get a single user
router.get("/:id", userController.getProfile);

// Update a user
router.patch("/:id", userController.editProfile);

// Delete a user
router.delete("/:id", userController.deleteProfile);

// Update a user's password
router.patch("/password/:id", userController.resetPassword);

// Update Status
router.patch("/status/:id", userController.updateStatus);

// Update Role
router.patch("/role/:id", userController.updateRole);

// Filter users


module.exports = router;