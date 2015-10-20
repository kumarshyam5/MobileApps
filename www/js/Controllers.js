
angular.module('starter.Controllers', [])

.controller('HomeController',  ['$scope', '$ionicPopup','$state','$rootScope', function ($scope, $ionicPopup,$state,$rootScope) {
        
   var myPopup= $ionicPopup.show({
        template:'<div class="list"><label class="item item-input item-select"><div class="input-label">Driver ID</div><select ng-model="selected_driver"><option value="1">3456</option><option>8756</option><option>87562</option></select></label></div>',
        title:'Select a driver',
        scope:$scope,
        buttons:[
            {text:'Cancel'},
            {
                text:'Save',
                type:'button-positive',
                onTap:function(e){
                  alert($scope.selected_driver);       
                }}]
    });
    myPopup.then(function(res){
        alert(res);
        if(res){
            $state.go('app.home');
        }else{
            $state.go('unauthorized');
        }
    })
//    $etaServices.gerDriver()
//     .success(function (etalist) {
//         $scope.driver = etalist;
//     })
//     .error(function (error) {
//     });
}])

.controller('NavController',function($scope,$stateParams){
});