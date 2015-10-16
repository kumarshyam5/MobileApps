use 'strict';
angular.module('starter.Factory',[])
.factory('etaServices',['$http',function($http){
    
    var baseUrl = '/test/api';
    var etaServiceFactory = {};
    
    //return me the list of etas
     etaServiceFactory.getEtaList = function(){
        return $http.get(baseUrl);
    };
    
    //return me a single eta
    etaServiceFactory.getEta = function(id){
        return $http.get(baseUrl+'/'+id);
    };
    
    //update an eta
    etaServiceFactory.updateEta = function(eta){
        return $http.put(baseUrl+'/'+eta.id,eta);
    };
    
    return etaServiceFactory;
}])
.factory('tripServices',['$http',function($http){
    var baseUrl = '/trip/api';
    var tripServiceFactory = {};
    
    tripServiceFactory.getTrip = function(tripid){
        return $http.get(baseUrl+'/'+tripid);
    };
    return tripServiceFactory;
}]);