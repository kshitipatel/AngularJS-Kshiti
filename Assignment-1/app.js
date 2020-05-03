(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', function ($scope) {
  $scope.menu = "";
  $scope.status = "";

  $scope.checkLunch = function () {
    var status = checkIfTooMuch($scope.menu);
    $scope.status = status;
  };
  function checkIfTooMuch(string) {
    var status = "";
    if(string.length == 0){
    	status = "Please enter data first";
    }
    else{
    	const items = string.split(',');
    	if(items.length<=3){
    		status = "Enjoy!";
    	}
    	else{
    		status = "Too much!";
    	}
    }    
    return status;
  }
});

})();