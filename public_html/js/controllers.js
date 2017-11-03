'use strict';

/* Controllers */

var obsicControllers = angular.module('obsicControllers', []);



obsicControllers.controller('obsicCtrl', ['$scope',
    function ObsicCtrl($scope) {
        $scope.msg = "amadou bakari";
    }]);

obsicControllers.controller('realisationCtrl', ['$scope',
    function RealisationCtrl($scope) {
        $scope.msg = "amadou bakari";
    }]);