var app = angular.module('serviceCalc', []);

app.service('calculator', function(){
  var that = this;
  this.parser = function(name){
    return that[name];
  };

  this.add = function (one, two){
    return one + two;
  };

  this.subtract = function (one, two){
    return one - two;
  }

  this. multiply = function (one, two){
    return one * two;
  }

  this.divide = function (one, two){
    return one / two;
  }

  this.power = function (one, two){
    return one ^ two;
  }

})

app.controller('CalcController', ['calculator', '$scope', function(calculator, $scope){
  $scope.newCalculation = function(){
    $scope.result = calculator.parser($scope.funk)($scope.one, $scope.two)
  }
}])


app.service('todoCrud', function(){
  this.create

  this.read

  this.update

  this.delete 
})