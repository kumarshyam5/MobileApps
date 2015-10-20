
angular.module('starter.ServiceFactory', [])
.factory('etaServices',['$http',function($http){
    
    var baseUrl = 'http://driverdetailsdemoservice.cloudapp.net/DriverETADetails.svc';
    
    var driverID;
    ////TODO should be remove once itegrated to service
    if(ionic.Platform.isAndroid()){
        driverID = '3456';
    }else{
        driverID = '8756';
    }
    
    
    var etaServices = {};
    
    //return me the list of etas
    etaServices.getEtaList = function () {       
        return $http.get(baseUrl + '/drivereta/'+driverID);       
    };

    etaServices.gerDriver = function () {
        return $http.get(baseUrl + '/driver/' + driverID);                
    };
    
    //return me a single eta
    etaServices.getEta = function (id) {
        alert(id);
        return $http.get(baseUrl + '/eta/' + id);
    };
    
    //update an eta
    etaServices.updateEta = function(eta){
        return $http.put(baseUrl + '/' + eta.id,eta);
    };
    
    return etaServices;
}]);