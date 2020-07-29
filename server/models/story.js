const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
  title: String,
  genre: String,
  tags: String,
  views: Number,
  userId: String,
});

module.exports = mongoose.model("story", storySchema);
