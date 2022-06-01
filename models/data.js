var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    topic: String,
    payload: String,
    qos: Number,
    retain: Boolean,
    _msgid: String,
  },
  { collection: "data" }
);
const Data = mongoose.model("data", DataSchema);
module.exports = Data;