var mongoose = require ('mongoose');
var Todos = mongoose.model('Todos');


module.exports = function(System){
  return {
    getTodos:function(param1, callback){
      Todos.find().limit().exec(function(err,results){
        if(err) return callback(err);
        console.log('Returning Results');
        callback(null,results);
      })
    },
    getTodosById:function(id,callback){
      Todos.findById(id,function(err,results){
        if(err) return callback(err);
        console.log('found _id:'+id);
        callback(null,results);
      })
    },
    deleteaTodos:function(id,callback){
      Todos.findByIdAndRemove(id,function(err,result){
        if(err) return callback(err);
        console.log('Removing _id:'+id);
        callback(null,null);
      })
    }
  };
}
