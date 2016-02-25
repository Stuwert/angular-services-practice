var app = angular.module('serviceCalc', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/calc', {
      templateUrl: 'partials/calc.html',
      controller: 'CalcController'
    })
    .when('/todo', {
      templateUrl: 'partials/todo.html',
      controller: 'ToDoController'
    })
})
