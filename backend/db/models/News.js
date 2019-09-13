const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NewsSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const News = mongoose.model("News", NewsSchema);

//Export model
module.exports = News;