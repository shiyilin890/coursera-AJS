(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.printmsg = function () {
  	var col=document.getElementsByClassName("form-group message")[0];
  	if ($scope.name) {
  	   var item = $scope.name.split(',');
  	   var num = item.length;
  	   $scope.msg = (num > 3) ? "Too much!" : "Enjoy!";  	
	   col.style.color="green";	
  		}

  	else {$scope.msg = "Please enter data first";
  		  col.style.color="red";
  	}
  };


}

})();
