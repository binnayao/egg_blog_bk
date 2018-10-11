'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const TagsSchema = new Schema({
    tag: { type: String },
    number: { type: Number, default: 1 },
  });

  return mongoose.model('tag', TagsSchema);
};
