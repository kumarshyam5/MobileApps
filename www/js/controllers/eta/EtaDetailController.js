angular.module('etacontrollers')
.controller('EtaDetailController', ['$scope', 'etaServices', '$stateParams','$state', function ($scope, $etaServices, $stateParams,$state) {

    var etaId = $stateParams.id;

    $scope.datepickerObject = {
        todayLabel: 'Today',  //Optional
        closeLabel: 'Close',  //Optional
        setLabel: 'Set',  //Optional
        setButtonType: 'button-positive',  //Optional
        todayButtonType: 'button-stable',  //Optional
        closeButtonType: 'button-stable',  //Optional
        inputDate: new Date(),  //Optional
        mondayFirst: true,  //Optional
        templateType: 'popup', //Optional
        showTodayButton: 'true', //Optional

        callback: function (val) {  //Mandatory
            datePickerCallback(val);
        },
            dateFormat: 'dd-MMM-yyyy', //Optional
        closeOnSelect: false, //Optional
    };

    var datePickerCallback = function (val) {
        if (typeof (val) === 'undefined') {
            console.log('No date selected');
        } else {
            $scope.datepickerObject.inputDate = val;
        }
    };

    $scope.timePickerObject = {
        inputEpochTime: ((new Date()).getHours() * 60 * 60),  //Optional
        step: 5,  //Optional
        format: 12,  //Optional
        titleLabel: '12-hour Format',  //Optional
        setLabel: 'Set',  //Optional
        closeLabel: 'Close',  //Optional
        setButtonType: 'button-positive',  //Optional
        closeButtonType: 'button-stable',  //Optional
        callback: function (val) {    //Mandatory
            timePickerCallback(val);
        }
    };

    var timePickerCallback=function(val) {
        if (typeof (val) === 'undefined') {
            console.log('Time not selected');
        } else {
            $scope.timePickerObject.inputEpochTime =val;
        }
    }

    var Oncompleted = function (response) {
        var etaDate = new Date(response.Etddate)
        $scope.datepickerObject.inputDate = etaDate;
        var myEpoch = (etaDate.getHours() * 60 * 60) + (etaDate.getMinutes() * 60);
        $scope.timePickerObject.inputEpochTime = myEpoch;
        $scope.etaDetails = response;

    };

    var OnError = function (error) {
        $scope.status = 'Failed ' + error.status;
    }
    $etaServices.getEta(etaId)
    .then(Oncompleted, OnError);


    var OnUpdatecompleted = function (response) {
        $state.go('app.etalists');
    };

    var OnUpdateFailure = function (error) {
        $scope.status = 'Failed ' + error.status;
    };

    $scope.updateEta = function (etaDetails) {
        var etdDate = new Date( $scope.datepickerObject.inputDate);
        var etdTime = $scope.timePickerObject.inputEpochTime;
        var selectedTime = new Date(etdTime * 1000);
        var etdSavingDate = etdDate.getFullYear().toString() + "/" + (etdDate.getMonth() + 1).toString() + "/" + etdDate.getDate().toString() + " " + selectedTime.getUTCHours().toString() + ":" + selectedTime.getUTCMinutes().toString()

        etaDetails.Etddate = etdSavingDate;
        $etaServices.updateEta(etaDetails)
         .then(OnUpdatecompleted, OnUpdateFailure);
    };

}]).directive('standardTimeMeridian', function () {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            etime: '=etime'
        },
        template: "<i>{{stime}}</i>",
        link: function (scope, elem, attrs) {

            scope.stime = epochParser(scope.etime, 'time');

            function prependZero(param) {
                if (String(param).length < 2) {
                    return "0" + String(param);
                }
                return param;
            }

            function epochParser(val, opType) {
                if (val === null) {
                    return "00:00";
                } else {
                    var meridian = ['AM', 'PM'];

                    if (opType === 'time') {
                        var hours = parseInt(val / 3600);
                        var minutes = (val / 60) % 60;
                        var hoursRes = hours > 12 ? (hours - 12) : hours;

                        var currentMeridian = meridian[parseInt(hours / 12)];

                        return (prependZero(hoursRes) + ":" + prependZero(minutes) + " " + currentMeridian);
                    }
                }
            }

            scope.$watch('etime', function (newValue, oldValue) {
                scope.stime = epochParser(scope.etime, 'time');
            });

        }
    };
});