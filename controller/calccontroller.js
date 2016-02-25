app.controller('CalcController', ['calculator', '$scope', function(calculator, $scope){
  $scope.newCalculation = function(){
    $scope.result = calculator.parser($scope.funk)($scope.one, $scope.two)
  }
}])
