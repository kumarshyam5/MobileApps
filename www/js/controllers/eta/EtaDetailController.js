
angular.module('etacontrollers')
.controller('EtaDetailController', ['$scope', 'etaServices', function ($scope, $etaServices) {

    $etaServices.getEta()
    .success(function (etaDetails) {
        $scope.etaDetails = etaDetails;
    })
     .error(function (error) {
         $scope.status = 'Failed ' + error.message;
     });
}]);