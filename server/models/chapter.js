const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  header: String,
  content: String,
  storyId: String,
  chapterNum: Number,
});

module.exports = mongoose.model("chapter", chapterSchema);
