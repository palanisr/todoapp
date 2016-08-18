var mongoose = require ('mongoose');
var Todos = mongoose.model('Todos');


module.exports = function(System){
  return {
    getTodos:function(param1, callback){
      Todos.find().limit().exec(function(err,results){
        if(err) return callback(err);
        console.log('Results');
        callback(null,results);
      })
    },
    getTodosById:function(id,callback){
      Todos.findById(id,function(err,results){
        if(err) return callback(err);
        console.log('Results');
        callback(null,results);
      })
    }
  };
}
