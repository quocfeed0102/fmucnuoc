const express = require("express");
const router = express.Router();
var dataModel = require("../models/data");

router.get("/newest", (req, res, next) => {
  console.log("newest");
  dataModel
    .find()
    .limit(1)
    .sort({ $natural: -1 })
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
router.get("/15s", (req, res, next) => {
  dataModel
    .find()
    .limit(1)
    .sort({ $natural: -1 })
    .skip(14)
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
module.exports = router;