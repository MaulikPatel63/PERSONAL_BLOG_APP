const router = require("express").Router();

const {
  blogAdd,
  blogGet,
  blogGetByID,
  blogUpdate,
  blogGetByCat,
  blogDelete,
} = require("../controllers/BlogController.js");

const { upload } = require("../middleware/Upload.js");

router.get("/blog-test", (req, res) => {
  return res
    .status(200)
    .json({ message: "The blogs Page was retrieved successfully!" });
});

router.post("/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});
router.post("/blog-add", blogAdd);
router.get("/blog-get", blogGet);
router.get("/blog-get/:id", blogGetByID);
router.get("/blog-get-cat/:cat", blogGetByCat);
router.put("/blog-update/:id", blogUpdate);
router.delete("/blog-delete/:id", blogDelete);

module.exports = router;
