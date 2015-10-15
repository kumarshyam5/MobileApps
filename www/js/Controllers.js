
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
        tripId:'63455432',
        location:'DC 6094, Bentonville',
        eta:'10/25/2015 18:00'
    },
    {
        tripId:'63455432',
        location:'STORE 100, Bentonville',
        eta:'10/25/2015 18:30'
    },
                        {
        tripId:'63455432',
        location:'STORE 1, Rogers',
        eta:'10/25/2015 19:00'
    }]
})
.controller('NavController',function($scope,$stateParams){
});