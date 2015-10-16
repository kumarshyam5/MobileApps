angular.module('starter.etacontroller',[])
.controller('EtaController',['$scope','etaServices',
                            function($scope,$etaServices){
                                $etaServices.getEtaList()
                                .success(function(etalist){
                                    $scope.EtaList = etalist;
                                })
                                .error(function(error){
                                    $scope.status = 'Failed'+error.message;
                                    //alert($scope.status);
                                });
                                
                        $scope.getEta = function(){       
                            $etaServices.getEta($scope.etaid)
                                .success(function(etaDetails){
                                         $scope.etaDetails=etaDetails;
                                         })
                                .error(function(error){
                                       $scope.status = 'Failed '+error.message;
                                       });
                            };
                            
                            }]);
