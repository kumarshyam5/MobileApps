angular.module("starter.routes", [])
.config(function ($stateProvider,$urlRouterProvider) {
    //alert($stateProvider);
    
    $stateProvider.state('/', {
        url: '/',
        templateUrl: 'templates/ListEta.html',
        controller: 'TodoListController'
    })
    .state('eta', {
        url: '/eta',
        templateUrl: 'templates/etadetails.html',
        controller: 'TodoListController'
    })
    ;

    $urlRouterProvider.otherwise('/');
});

