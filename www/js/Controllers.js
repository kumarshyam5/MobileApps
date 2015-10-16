
angular.module('starter.Controllers', [])

.controller('HomeController', function ($scope) {

    $scope.DriverName = "John Smith";
    $scope.DriverId = 3456;
})
.controller('NavController',function($scope,$stateParams){
});