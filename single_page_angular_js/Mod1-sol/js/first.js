(function(){
  'use strict';

  angular.module('FirstAPP', [])
  .controller('check', checkinput);

checkinput.$inject = ['$scope'];
  function checkinput($scope){
    $scope.calc = function(){
      $scope.array = spliter($scope.name);

      $scope.array_len = $scope.array.length;
      if($scope.name.length == 0){
        $scope.array_len = 0;
      }
    };

    function spliter(string){
      var a = string.split(',');
      a = a.filter(el => {
  return el != null && el != '' && el != ' ';
});
      return a;
    }

    $scope.displayCalc = function(){
      if($scope.array_len <= 3 && $scope.array_len > 0){
        $scope.message = 'Enjoy';
        $scope.color = 'green';
      }
      else if($scope.array_len > 3){
        $scope.message = "Too much";
        $scope.color = 'green';
      }
      else {
        $scope.message = "please Enter Data First";
        $scope.color = "red";
      }
    };

  }
})();
