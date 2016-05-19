/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function () {
    'use strict';

    angular.module('NutritionTracker')

        .config(['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');

                $stateProvider
                    .state('index', {
                        url: '/',
                        templateUrl: '../views/_landing.html'
                    })
                    .state('data', {
                        url: '/macronutrients',
                        templateUrl: '../views/_dataAdd.html',
                        controller: 'dataAdd',
                        controllerAs: 'vm'
                    })
                    .state('averages', {
                        url: '/averages',
                        templateUrl: '../views/_dataAverage.html'
                    })
                    .state('summary', {
                        url: '/summary',
                        templateUrl: '../views/_dataGraphs.html',
                        controller: 'dataShow'
                    })
                    .state('login', {
                        url: '/login',
                        templateUrl: '../authentication/login.html',
                        controller: 'loginController',
                        controllerAs: 'vm'

                    })
                    .state('logout', {
                        url: '/logout',
                        controller: 'logoutController',
                        controllerAs: 'vm'
                    })
                    .state('register', {
                        url: '/register',
                        templateUrl: '../authentication/register.html',
                        controller: 'registrationController',
                        controllerAs: 'vm'
                    });
            }]);

}());