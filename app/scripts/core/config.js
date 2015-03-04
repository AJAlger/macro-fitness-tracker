/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function() {
    'use strict';

    angular.module('NutritionTracker')

    .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

      

        $urlRouterProvider.otherwise('/');

        // STATES
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'views/_landing.html'
            })
            .state('data', {
                url: '/macronutrients',
                templateUrl: 'views/_dataAdd.html'
            })
            .state('averages', {
                url: '/averages',
                templateUrl: 'views/_dataAverage.html'
            })
            .state('summary', {
                url: '/summary',
                templateUrl: 'views/_dataGraphs.html'
            });
    }]);

})();