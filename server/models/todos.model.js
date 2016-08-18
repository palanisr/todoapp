var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({

  text: String,
  done: Boolean

},{
  collection: 'todos'
});

var Todos= module.exports = mongoose.model('Todos', todoSchema);
