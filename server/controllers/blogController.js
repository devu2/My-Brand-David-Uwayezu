import { postSchema } from "../helpers/posts";
import Blog from "../models/blogs";
import { postSchema as postsSchema } from '../helpers/posts';

export function createBlog(req, res) {
  const {error} = postsSchema.validate(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  Blog.create(req.body)
    .then((blog) => {
      res.status(200).json({
        message: "You Successfully created a blog!",
        blog
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Creating a blog Failed!",
        error,
      });
    });
}

export function blogsGet(req, res) {
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
}

export function getSingleBlog(req, res) {
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
}
export function updateBlog(req, res) {
  Blog.findOneAndUpdate({ _id: req.params.blogId }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((blog) => {
      res.status(200).json({
        message: "Blog Updated Successfully!",
        status:200,
        blog,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Updating a blog failed!",
        error,
      });
    });
}

export function deleteBlog(req, res) {
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
}
