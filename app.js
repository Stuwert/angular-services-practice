var app = angular.module('serviceCalc', ['ngRoute']);

app.controller('AllController', function($scope){
  $scope.currentApp = null;
  $scope.updateApp = function(newApp){
    $scope.currentApp = newApp;
  }
  $scope.isSelected = function(select){
    return select === $scope.currentApp ? 'highlighted' : null;
  }
})

app.config(function($routeProvider){
  $routeProvider
    .when('/calc', {
      templateUrl: 'partials/calc.html',
      controller: 'CalcController'
    })
    .when('/todo', {
      templateUrl: 'partials/todo.html',
      controller: 'TodoController'
    })
})
