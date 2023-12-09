const Post = require("@models/Post");
const { Category } = require("@models/Category");

exports.createPost = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(404).json({ message: "Specified category not found" });
    }

    const newPost = await Post.create({
      title,
      description,
      category: categoryExists,
      timestamp: Math.floor(Date.now() / 1000),
    });

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Oops.. Something went wrong" });
  }
};
