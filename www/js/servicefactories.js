
angular.module('starter.ServiceFactory', [])
.factory('etaServices',['$http',function($http){
    
    var baseUrl = '';
    
    //TODO should be remove once itegrated to service
    if(ionic.Platform.isAndroid()){
        baseUrl = 'android/www/js/data';
    }else{
        baseUrl = 'js/data';
    }
    
    var etalist = '/etalist.json';
    var etaServices = {};
    
    //return me the list of etas
     etaServices.getEtaList = function(){
        return $http.get(baseUrl + etalist);
    };
    
    //return me a single eta
    etaServices.getEta = function(id){
        if(id!='undefined')
            alert(id);
        return $http.get(baseUrl + '/' + id);
    };
    
    //update an eta
    etaServices.updateEta = function(eta){
        return $http.put(baseUrl + '/' + eta.id,eta);
    };
    
    return etaServices;
}]);