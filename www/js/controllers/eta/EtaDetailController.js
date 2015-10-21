angular.module('etacontrollers')
.controller('EtaDetailController', ['$scope', 'etaServices', '$stateParams', function ($scope, $etaServices, $stateParams) {
    var etaId = $stateParams.id;
    $etaServices.getEta(etaId)
    .success(function (etaDetails) {
        $scope.etaDetails = etaDetails;
    })
     .error(function (error) {
         $scope.status = 'Failed ' + error.message;
     });
}]);