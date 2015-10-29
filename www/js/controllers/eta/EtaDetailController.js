angular.module('etacontrollers')
.controller('EtaDetailController', ['$scope', 'etaServices', '$stateParams', function ($scope, $etaServices, $stateParams) {

    var etaId = $stateParams.id;

    var Oncompleted = function (response) {
        $scope.etaDetails = response;
    };

    var OnError = function (error) {
        $scope.status = 'Failed ' + error.status;
    }
    $etaServices.getEta(etaId)
    .then(Oncompleted, OnError);


    var OnUpdatecompleted = function (response) {

    };

    var OnUpdateFailure = function (error) {
        $scope.status = 'Failed ' + error.status;
    };
    $scope.updateEta = function (etaDetails) {
        
        $etaServices.updateEta(etaDetails)
         .then(OnUpdatecompleted, OnUpdateFailure);
    };

}]);