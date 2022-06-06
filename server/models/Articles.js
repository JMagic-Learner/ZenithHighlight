const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const articleSchema = new Schema({
  articleText1: {
    type: String,
    trim: true,
  },
  articleText2: {
    type: String,
    trim: true,
  },
  articleText3: {
    type: String,
    trim: true,
  },
  articleText4: {
    type: String,
    trim: true,
  },
  articleAuthor: {
    type: String,
    required: true,
  },
  articleTitle: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
});

const Article = model('Article', articleSchema);

module.exports = Article;
