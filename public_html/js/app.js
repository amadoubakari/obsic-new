'use strict';

/* App Module */

var obsicApp = angular.module('obsicApp', [
    'ngRoute',
    'obsicControllers'

]);


obsicApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/main.html',
                    controller: 'obsicCtrl'
                }).
                when('/realisation', {
                    templateUrl: 'partials/realisation.html',
                    controller: 'realisationCtrl'
                }).
                when('/contact', {
                    templateUrl: 'partials/contact.html#contact-us',
                    controller: 'obsicCtrl'
                }).
                when('/products', {
                    templateUrl: 'partials/products.html',
                    controller: 'obsicCtrl'
                }).
                otherwise({templateUrl: 'partials/404.html'});
        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);



