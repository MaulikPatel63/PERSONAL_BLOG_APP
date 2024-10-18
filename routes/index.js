const router = require("express").Router();
const protectRoute = require("../middleware/protectRoute.js");

//! Auth Router
router.use("/api/v1/auth", require("./Auth.js"));

//! Auth Router
router.use("/api/v1/blog", protectRoute, require("./blogs.js"));

module.exports = router;
