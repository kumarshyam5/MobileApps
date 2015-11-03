angular.module('etacontrollers')
.controller('EtaDetailController', ['$scope', 'etaServices', '$stateParams', function ($scope, $etaServices, $stateParams) {

    var etaId = $stateParams.id;

    var Oncompleted = function (response) {


        var dateParts = response.Etddate.split(" ");
        $scope.etdDate = {

            value: new Date(response.Etddate)
        };
        $scope.etdTime = dateParts[1];
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
        etaDetails.Etddate = $scope.etdDate.value;
        console.log($scope.etdDate.value);       
        $etaServices.updateEta(etaDetails)
         .then(OnUpdatecompleted, OnUpdateFailure);
    };

}]);