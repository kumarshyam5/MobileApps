angular.module('etacontrollers')
.controller('EtaDetailController', ['$scope', 'etaServices', function ($scope, $etaServices) {

    alert($scope.Etd_id);
    $etaServices.getEta($scope.Etd_id)
    .success(function (etaDetails) {
        $scope.etaDetails = etaDetails;
    })
     .error(function (error) {
         $scope.status = 'Failed ' + error.message;
     });
}]);