console.log("Bing bong");

app.controller('TodoController', ['todo', '$scope', function(todo, $scope){
  $scope.list = todo.getList();
  $scope.add = function(info){
    todo.setItem(info)
    $scope.newItem = null;
  }
  $scope.remove = todo.removeItem;
  $scope.toggle = todo.toggle;
  $scope.isToggled = todo.isToggled;
  $scope.update = todo.updateItem;

}])
