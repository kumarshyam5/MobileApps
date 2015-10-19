
angular.module('starter.Controllers', [])

.controller('HomeController',  ['$scope', 'etaServices', function ($scope, $etaServices) {
        
    $etaServices.gerDriver()
     .success(function (etalist) {
         $scope.driver = etalist;
     })
     .error(function (error) {
     });
}])

.controller('NavController',function($scope,$stateParams){
});