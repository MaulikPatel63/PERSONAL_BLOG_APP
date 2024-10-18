const express = require("express");
const {
  register,
  login,
  requestPasswordReset,
  resetPassword,
  logout,
  authCheck,
  updateRole,
} = require("../controllers/AuthController");
const protectRoute = require("../middleware/protectRoute.js");

const router = express.Router();

const { upload } = require("../middleware/Upload.js");

router.post("/signup", upload.single("image"), register);
router.post("/login", login);
router.post("/password-reset", requestPasswordReset);
router.post("/password-reset/:token", resetPassword);
router.get("/authCheck", authCheck);
router.post("/logout", logout);
router.put("/updateRole", protectRoute, updateRole);

module.exports = router;
