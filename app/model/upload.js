'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const BlogSchema = new Schema({
    date: { type: Date },
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    mdTag: { type: Array },
    author: { type: String, default: '' },
    markdown: { type: String },
  });

  return mongoose.model('blog', BlogSchema);
};
