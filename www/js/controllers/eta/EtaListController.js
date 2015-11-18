angular.module('etacontrollers')
.controller('EtaListController', ['$scope', 'etaServices', function ($scope, $etaServices) {

    $etaServices.getEtaList()
    .then(function successCallback(response) {
        $scope.etaList=[];
        //console.log(response.data);
        angular.forEach(response.data, function(value, index) {
            if(index==0)
                value["imgSrc"]="img/current.png";
            else
                value["imgSrc"]="img/next.png";
            $scope.etaList.push(value);
        });

       // console.log($scope.etaList);
        
    },
          function errorCallback( error) {
       // alert(error.status);
    });
}]);