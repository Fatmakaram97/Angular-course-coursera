(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
$scope.inputs = "";
$scope.stateOfLunch = "";

$scope.Check = function () {
var array = $scope.inputs.split(',');
console.log(array);
if (array.length < 3 && array != "") {
    $scope.stateOfLunch = "Enjoy!";
}
else if (array.length > 3) {
    $scope.stateOfLunch = "Too much!";
}
else {
  $scope.stateOfLunch="Please enter data first";
}
  };
}
})();
