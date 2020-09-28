const User = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.createUser = (req, res) => {
    const hash = bcrypt.hashSync(req.body.password,12);
    User.create({...req.body,password : hash})
    .then(() => {
      res.status(200).json({
        message: "You Successfully created a user!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Creating a user Failed!",
        error,
      });
    })
};

exports.getAllUsers= (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json({
        message: "We find your users, here there are!",
        users,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Not Found!",
        error,
      });
    });
};

exports.getOneUser = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      res.status(200).json({
        message: "We find  a user you are looking for, here he/she is!",
        user,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Sorry, We can't find the user you looking for!",
        error,
      });
    });
};
exports.updateUser= (req, res) => {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((user) => {
        res.status(200).json({
          message: "user Updated Successfully!",
          user,
        });
      })
      .catch((error) => {
        res.status(404).json({
          message: "Updating a user failed!",
          error,
        });
      });
  };

exports.deleteUser = (req, res) => {
  User.findByIdAndDelete({ _id: req.params.queryId })
    .then((user) => {
      res.status(200).json({
        message: "User deleted successfully!",
        user,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Deleting a user failed!",
        error,
      });
    });
};

exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
      .then((user) => {
          const isValid = bcrypt.compareSync(req.body.password,user.password)
          if(isValid){
              const token = jwt.sign({
                  username: user.name,
                  userId: user._id,
                  useremail: user.email,
                  usercountry: user.country,
                  usercity: user.city
              },process.env.JWT_SECRET)
            res.status(200).json({
                message: "Logged In Successfully",
                user,
                token
              });
          } else {
            res.status(404).json({
                message: "Wrong credentials!",
                error,
              });
          }
        
      })
      .catch((error) => {
        res.status(404).json({
          message: "Wrong credentials!",
          error,
        });
      });
  };