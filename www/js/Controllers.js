
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
   { name: 'BrookHaven, MS', id: 1, Adress: 'Store 4657, 6350 Cottage Hill RD', Contact: 'Susan Clinton @251-661-1717', Instruction: 'HWY 98 To Schillinger Road South' },
   { name: 'Mobile, AL', id: 1, Adress: 'Store 5098, 1970 South University BLVD', Contact: 'Susan Clinton @251-661-1717', Instruction: 'HWY 98 To Schillinger Road South' },
   { name: 'Mobile, AL', id: 1, Adress: 'Store 4657, 6350 Cottage Hill RD', Contact: 'Susan Clinton @251-661-1717', Instruction: 'HWY 98 To Schillinger Road South' },
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
        $scope.IsTwoHidden = true;
    };
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    }; 

})
.controller('SummaryController', function ($scope) {


})
.controller('AboutController', function ($scope) {


});

