angular.module('starter.etacontroller',[])
.controller('1EtaListController',['$scope','etaServices',
                            function($scope,$etaServices){
                                $etaServices.getEtaList()
                                .success(function(etalist){
                                    $scope.EtaList = etalist;
                                })
                                .error(function(error){
                                    $scope.status = 'Failed'+error.message;
                                    //alert($scope.status);
                                })}])
                         //function to get the eta details       
.controller('EtaDetailController',['$scope','$etaServices',
                          function($scope, $etaServices){
                                       
                            $etaServices.getEta($scope.etaid)
                                .success(function(etaDetails){
                                         $scope.etaDetails=etaDetails;
                                         })
                                .error(function(error){
                                       $scope.status = 'Failed '+error.message;
                                       });
                            }]);
