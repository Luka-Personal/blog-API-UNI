const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    minlength: 1,
    required: true,
  },
  text: {
    type: String,
    minlength: 1,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
    default: () => Math.floor(Date.now() / 1000),
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
