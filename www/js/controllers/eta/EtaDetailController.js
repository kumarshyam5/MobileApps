angular.module('etacontrollers')
.controller('EtaDetailController', ['$scope', 'etaServices', '$stateParams','$state', function ($scope, $etaServices, $stateParams,$state) {

    var etaId = $stateParams.id;

    var Oncompleted = function (response) {


        var dateParts = response.Etddate.split(" ");
        $scope.etdDate = {

            value: new Date(response.Etddate)
        };
        $scope.etdTime = dateParts[1];
        $scope.etaDetails = response;

    };

    $scope.options = {
        format: 'yyyy-mm-dd', // ISO formatted date
        onClose: function (e) {
            // do something when the picker closes  
            console.log(abc);
        }
    }

    var OnError = function (error) {
        $scope.status = 'Failed ' + error.status;
    }
    $etaServices.getEta(etaId)
    .then(Oncompleted, OnError);


    var OnUpdatecompleted = function (response) {
        $state.go('app.etalists');
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