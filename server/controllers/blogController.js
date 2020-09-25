const Blog = require("../models/blogs");

exports.createBlog = (req, res) => {
  Blog.create(req.body)
    .then(() => {
      res.status(200).json({
        message: "You Successfully created a blog!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Creating a blog Failed!",
        error,
      });
    });
};

exports.blogsGet = (req, res) => {
  Blog.find()
    .then((blogs) => {
      res.status(200).json({
        message: "We find your blogs, here there are!",
        blogs,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Not Found!",
        error,
      });
    });
};

exports.getSingleBlog = (req, res) => {
  Blog.findById(req.params.blogId)
    .then((blog) => {
      res.status(200).json({
        message: "We find  a blog you are looking for, here it is!",
        blog,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Not Found!",
        error,
      });
    });
};
exports.updateBlog = (req, res) => {
  Blog.findOneAndUpdate({ _id: req.params.blogId }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((blog) => {
      res.status(200).json({
        message: "Blog Updated Successfully!",
        blog,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Updating a blog failed!",
        error,
      });
    });
};

exports.deleteBlog = (req, res) => {
  Blog.findByIdAndDelete({ _id: req.params.blogId })
    .then((blog) => {
      res.status(200).json({
        message: "Blog deleted successfully!",
        blog,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Deleting a blog failed!",
        error,
      });
    });
};
