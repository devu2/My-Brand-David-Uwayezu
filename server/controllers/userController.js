import User from "../models/user";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {authSchema} from '../helpers/validation_schema';

export const createUser = (req, res) => {
    const {error} = authSchema.validate(req.body);
    if(error) return res.status(400).json({status:400,error:error.details[0].message});
    const hash = bcrypt.hashSync(req.body.password,12);
    User.create({...req.body,password : hash})
    .then(() => {
      res.status(201).json({
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

export const getAllUsers= (req, res) => {
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

export const getOneUser = (req, res) => {
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
export const updateUser= (req, res) => {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((user) => {
        res.status(200).json({
          message: "user Updated Successfully!",
          user,
          status:200
        });
      })
      .catch((error) => {
        res.status(404).json({
          message: "Updating a user failed!",
          error,
        });
      });
  };

  export const deleteUser = (req, res) => {
  User.findOneAndDelete({ _id: req.params.userId })
    .then((user) => {
      res.status(200).json({
        message: "User deleted successfully!",
        user,
        status:200
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Deleting a user failed!",
        error,
        status:404
      });
    });
};

export const login = (req, res) => {
    User.findOne({ email: req.body.email })
      .then((user) => {
          if(!user){
            return res.status(404).json({
              message:'User not found!'
            });
          }
          
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

  export const signout = (req, res) => {
    req.signout();
    res.send({ status: 200, message: "You logged out successfully!" });
  };