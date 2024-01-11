const express = require("express");
const { loginController, registerController, authController } = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const { resetPassword } = require("../controllers/resetPassword");
const router = express.Router()

router.post("/login", loginController)
router.post("/register", registerController)

router.post("/getUserData", authMiddleware, authController)
router.post("/resetPassword", resetPassword)
module.exports = router;