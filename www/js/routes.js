angular.module("starter.routes", [])
.config(function ($stateProvider,$urlRouterProvider) {
    //alert($stateProvider);
    
    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'HomeController'
    })
    .state('app.eta', {
        url: '/eta/:etaid',
        views: {
            'menuContent':{
                templateUrl: 'templates/eta/etadetails.html',
                controller: 'EtaDetailController'
            }
        }
    })
    .state('app.etalists',{
        url: '/etalists',
        views: {
            'menuContent': {
                templateUrl: 'templates/eta/ListEta.html',
                controller: 'EtaListController'
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
    })
    .state('unauthorized',{
        url: '/landing',
        templateUrl:'templates/landing-page.html',
        controller:'HomeController'
    });

    $urlRouterProvider.otherwise('app.home');
});

