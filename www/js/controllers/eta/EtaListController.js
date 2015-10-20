angular.module('etacontrollers')
.controller('EtaListController', ['$scope', 'etaServices', function ($scope, $etaServices) {

    $etaServices.getEtaList()
    .success(function (etalist) {
        $scope.etaList=[];
        console.log(etalist);
        angular.forEach(etalist, function(value, index) {
            if(index==0)
                value["imgSrc"]="img/current.png";
            else
                value["imgSrc"]="img/next.png";
            $scope.etaList.push(value);
        });

        console.log($scope.etaList);
        
    })
    .error(function (error) {
    });
}]);