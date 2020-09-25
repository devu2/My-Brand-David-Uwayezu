const Query = require('../models/queries');

exports.createQuery = (req, res) => {
    Query.create(req.body)
      .then(() => {
        res.status(200).json({
          message: "You Successfully created a query!",
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Creating a query Failed!",
          error,
        });
      });
  };