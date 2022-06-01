const express = require("express");
const router = express.Router();
var timeModel = require("../models/time");

router.get("/newest", (req, res, next) => {
  console.log("newest");
  timeModel
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

module.exports = router;