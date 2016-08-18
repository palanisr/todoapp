module.exports = function(app) {
  var todos = require('../lib/todos.lib')(app);

  app.get('/',function(req,res){
      res.send("hello world");
  });
  
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
  app.route('/todos_remove/:_id')
  .delete(function(req,res){
    //res.send('Some stuff should be here')
    todos.deleteaTodos(req.params._id,function(err,todos){
      if (err)
        console.log('Problem');
      else
        res.json([{ status: 'Sucess' }]);
    })
  });
};
