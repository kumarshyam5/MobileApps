
angular.module('starter.Controllers', [])

.controller('EtaListController', function ($scope) {

    $scope.DriverName = "John Smith";
    $scope.DriverId = 3456;

    $scope.EtaList = [{
        ETD: 'Current ETD',
        Date: '10/24/2015 14:00'
    }, {
        ETD: 'Next ETD',
        Date: '10/25/2015 11:00'
    }, {
        ETD: 'Next ETD',
        Date: '10/25/2015 18:00'
    }]

    $scope.etaDetails = [{
        CITY:'test'
    },
    {
        CITY:'BLA'
    }]
})
.controller('NavController',function($scope,$stateParams){
});