const Query = require("../models/queries");
const {queriesSchema} = require('../helpers/queries');

exports.createQuery = (req, res) => {
  const {error} = queriesSchema.validate(req.body);
    if(error) return res.status(400).json({message: error.details[0].message});
  Query.create(req.body)
    .then(() => {
      res.status(200).json({
        message: "You Successfully created a query!",
        status:200
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Creating a query Failed!",
        error,
      });
    });
};

exports.getAllQueries = (req, res) => {
  Query.find()
    .then((queries) => {
      res.status(200).json({
        message: "We find your queries, here there are!",
        queries,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Not Found!",
        error,
      });
    });
};

exports.getSingleQuery = (req, res) => {
  Query.findById(req.params.queryId)
    .then((query) => {
      res.status(200).json({
        message: "We find  a query you are looking for, here it is!",
        query,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Sorry, We can't find the query you looking for!",
        error,
      });
    });
};

exports.deleteQuery = (req, res) => {
  Query.findByIdAndDelete({ _id: req.params.queryId })
    .then((query) => {
      res.status(200).json({
        message: "Query deleted successfully!",
        query,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Deleting a query failed!",
        error,
      });
    });
};
