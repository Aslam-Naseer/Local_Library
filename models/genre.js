const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minlen: 3, maxlen: 100 },
});

GenreSchema.virtual("url").get(function () {
  return `catalogue/genre/${this._id}`;
});

module.exports = mongoose.model("Genre", GenreSchema);
