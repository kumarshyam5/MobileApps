angular.module("starter.routes", [])
.config(function ($stateProvider,$urlRouterProvider) {
    //alert($stateProvider);
    
    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'EtaListController'
    })
    .state('app.eta', {
        url: '/eta/:etaid',
        views: {
            'menuContent':{
                templateUrl: 'templates/etadetails.html',
                controller: 'EtaController'
            }
        }
    })
    .state('app.etalists',{
        url: '/etalists',
        views: {
            'menuContent': {
                templateUrl: 'templates/ListEta.html',
                controller: 'EtaController'
            }
        }
    })
    .state('app.home',{
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'EtaListController'
            }
        }
    });

    $urlRouterProvider.otherwise('/app/home');
});

