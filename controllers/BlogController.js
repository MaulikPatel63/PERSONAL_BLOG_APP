const { Blog, User } = require("../models/index.js");

const blogAdd = async (req, res) => {
  try {
    const { title, content, cat, image } = req.body;

    if (!title || !content || !cat) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json({ message: "User Dode not exists" });
    }
    const newBlog = new Blog({
      title,
      content,
      cat,
      image,
      user: user._id,
    });
    await newBlog.save();

    return res
      .status(200)
      .json({ message: "Blog Created Successfully!", data: newBlog });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal server error", err: error.message });
  }
};

const blogGet = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    return res
      .status(200)
      .json({ message: "The blogs was retrieved successfully!", data: blogs });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", err: error.message });
  }
};

const blogGetByID = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id).populate("user");
    return res
      .status(200)
      .json({ message: "The blog was retrieved successfully!", data: blog });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", err: error.message });
  }
};

const blogGetByCat = async (req, res) => {
  try {
    const { cat } = req.params;

    const blogs = await Blog.find({ cat });
    return res
      .status(200)
      .json({ message: "The blog was retrieved successfully!", data: blogs });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", err: error.message });
  }
};

const blogUpdate = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content },
      {
        new: true,
      }
    );
    return res
      .status(200)
      .json({ message: "Blog Created Successfully!", data: updatedBlog });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", err: error.message });
  }
};

const blogDelete = async (req, res) => {
  try {
    const { id } = req.params;

    await Blog.findByIdAndDelete(id);
    return res.status(200).json({ message: "Blog Deleted Successfully!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", err: error.message });
  }
};

module.exports = {
  blogAdd,
  blogGet,
  blogGetByID,
  blogUpdate,
  blogDelete,
  blogGetByCat,
};
