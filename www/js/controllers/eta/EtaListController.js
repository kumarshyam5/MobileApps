angular.module('etacontrollers')
.controller('EtaListController', ['$scope', 'etaServices', function ($scope, $etaServices) {

    $etaServices.getEtaList()
    .success(function (etalist) {
        $scope.EtaList = etalist;
    })
    .error(function (error) {
    });


  

    //var onResponse = function (response) {
    //    alert(response.data);
    //    $scop.Driver_Id = response.driver_id
    //    $scope.driver_name = respo.driver_name;
    //};

    //var OnError = function (reason) {
    //    $scope.status = 'Failed';
    //}

    //$etaServices.getDriver()
    //.success(onResponse)
    //.error(OnError);

   


}]);