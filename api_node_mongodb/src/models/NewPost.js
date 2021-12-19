const mongoose = require ('mongoose');
const { Schema } = mongoose;

const NewPostSchema = new mongoose.Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  content:   String,
  date: { type: Date, default: Date.now },
  hidden: {type: Boolean, default: false},
});

const Post  = new mongoose.model('NewPost', NewPostSchema);

module.exports = Post;