
angular.module('starter.Controllers', [])

.controller('HomeController', ['$scope', 'etaServices', '$ionicPopup', '$state', '$rootScope',
    function ($scope, $etaServices, $ionicPopup, $state, $rootScope) {
        
    $etaServices.gerDriver()
     .then(function successCallback(response) {
         $scope.driver = response.data;
        console.log($scope.driver);
     },function errorCallback(error){
        console.log($scope.driver);
    });
    }])
.controller('TripsheetController',function($scope)
{
    //This will hide the DIV by default.
    $scope.IsOneHidden = true;
    $scope.IsTwoHidden=true;
    $scope.ShowHide = function (value) {
        //If DIV is hidden it will be visible and vice versa.
        if (value == 'One') {
            $scope.IsOneHidden = $scope.IsOneHidden ? false : true;
            $scope.IsTwoHidden = true;
        }
        else if (value == 'Two') {
            $scope.IsTwoHidden = $scope.IsTwoHidden ? false : true;
            $scope.IsOneHidden = true;
        }
    };

    $scope.groups = [
   { name: 'BrookHaven, MS', id: 1, Adress: 'Store', Contact: 'Test', Instruction: 'Instructions' },
   { name: 'Mobile, AL', id: 1,  Adress: 'Store', Contact: 'Test', Instruction: 'Instructions' },
   { name: 'Mobile, AL', id: 1, Adress: 'Store', Contact: 'Test', Instruction: 'Instructions' },
    ];
  
  
    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    };
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    }; 

})
.controller('SummaryController', function ($scope) {


})
.controller('AboutController', function ($scope) {


});

