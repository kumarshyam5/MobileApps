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
        url: '/eta/{id}',
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
    .state('app.tripsheet', {
             url: '/tripsheet',
             views: {
                 'menuContent': {
                     templateUrl: 'templates/tripsheet.html',
                     controller: 'TripsheetController'
                 }
             }
         })
    .state('unauthorized',{
        url: '/landing',
        templateUrl:'templates/landing-page.html',
        controller:'HomeController'
    });

    $urlRouterProvider.otherwise('app/home');
});

