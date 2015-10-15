angular.module("starter.routes", [])
.config(function ($stateProvider,$urlRouterProvider) {
    //alert($stateProvider);
    
    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'EtaListController'
    })
    .state('eta', {
        url: '/eta',
        templateUrl: 'templates/etadetails.html',
        controller: 'EtaListController'
    })
    .state('app.etalists',{
        url: '/etalists',
        views: {
            'menuContent': {
                templateUrl: 'templates/ListEta.html',
                controller: 'EtaListController'
            }
        }
    });

    $urlRouterProvider.otherwise('/app/etalists');
});

