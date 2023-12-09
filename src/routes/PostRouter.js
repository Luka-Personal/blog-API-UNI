const express = require("express");
const router = express.Router();
const PostController = require("@controllers/PostController");
const verifyAuthToken = require("@middlewares/security/verifyAuthToken");

router.post("/", [verifyAuthToken], PostController.createPost);

module.exports = router;
