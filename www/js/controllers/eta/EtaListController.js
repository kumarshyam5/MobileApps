angular.module('etacontrollers')
.controller('EtaListController', ['$scope', 'etaServices', function ($scope, $etaServices) {

    $etaServices.getEtaList()
    .success(function (etalist) {
        $scope.EtaList = etalist;
    })
    .error(function (error) {
    });
}]);