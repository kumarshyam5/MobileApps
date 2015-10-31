
angular.module('starter.Controllers', [])

.controller('HomeController', ['$scope', 'etaServices', '$ionicPopup', '$state', '$rootScope',
    function ($scope, $etaServices, $ionicPopup, $state, $rootScope) {
        
    $etaServices.gerDriver()
     .then(function successCallback(response) {
         $scope.driver = response.data;
        console.log($scope.driver);
     },function errorCallback(error){
        console.log($scope.driver);
    });
}]);
