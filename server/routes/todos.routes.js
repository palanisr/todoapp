module.exports = function(app) {
  var todos = require('../lib/todos.lib')(app);
  app.route('/todos')
  .get(function(req,res){
    //res.send('Some stuff should be here')
    todos.getTodos(null,function(err,todos){
      if (err){
        console.log('Problem');
      }else {
        res.json(todos);
      }
    })
  });
  app.route('/todos/:_id')
  .get(function(req,res){
    //res.send('Some stuff should be here')
    todos.getTodosById(req.params._id,function(err,todos){
      if (err){
        console.log('Problem');
      }else {
        res.json(todos);
      }
    })
  });
};
