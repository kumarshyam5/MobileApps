angular.module('starter.directive',[])
.directive('savebutton',[function(){
    return {
        restrict:'E',
        replace: true,
        scope:true,
        template:"<button class='button button-clear' ng-click='updateEta(etaDetails)'>Save</button>",
        compile: function(element,attrs){
            var text = ionic.Platform.isIOS()?'Done':'Save';
//            alert(text);
            angular.element(element[0]).html(text);
        }
    };
}]);