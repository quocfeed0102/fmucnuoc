var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const TimeSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    topic: String,
    payload: String,
    qos: Number,
    retain: Boolean,
    _msgid: String,
  },
  { collection: "time" }
);
const Time = mongoose.model("time", TimeSchema);
module.exports = Time;